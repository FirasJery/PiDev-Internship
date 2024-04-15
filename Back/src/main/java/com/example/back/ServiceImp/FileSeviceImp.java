package com.example.back.ServiceImp;

import com.example.back.Entities.*;
import com.example.back.Repositories.*;
import com.example.back.Services.*;
import io.minio.BucketExistsArgs;
import io.minio.MakeBucketArgs;
import io.minio.MinioClient;
import io.minio.PutObjectArgs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.File;
import java.io.IOException;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.FileContent;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.drive.Drive;
import com.google.api.services.drive.DriveScopes;
import java.io.FileInputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.GeneralSecurityException;
import java.util.Collections;
@Service
public class FileSeviceImp implements FileService {

   // private  FileRepository fileRepository;

    private static final JsonFactory JSON_FACTORY = GsonFactory.getDefaultInstance();
    private static final String SERVICE_ACOUNT_KEY_PATH = getPathToGoodleCredentials();



    private static String getPathToGoodleCredentials() {
        String currentDirectory = System.getProperty("user.dir");
        Path filePath = Paths.get(currentDirectory, "cred.json");
        return filePath.toString();
    }

    public Res uploadFileToDrive(MultipartFile file) throws GeneralSecurityException, IOException {
        Res res = new Res();

        try {
            String folderId = "1cLKshx8ru7eXFxR7YJIe-ukOhlkVO2WP";
            Drive drive = createDriveService();
            com.google.api.services.drive.model.File fileMetaData = new com.google.api.services.drive.model.File();
            fileMetaData.setName(file.getOriginalFilename());
            fileMetaData.setParents(Collections.singletonList(folderId));
            FileContent mediaContent = new FileContent(file.getContentType(), convertMultipartFileToFile(file));
            com.google.api.services.drive.model.File uploadedFile = drive.files().create(fileMetaData, mediaContent)
                    .setFields("id").execute();
            String fileUrl = "https://drive.google.com/uc?export=view&id=" + uploadedFile.getId();
            System.out.println("File URL: " + fileUrl);
            res.setStatus(200);
            res.setMessage("File Successfully Uploaded To Drive");
            res.setUrl(fileUrl);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            res.setStatus(500);
            res.setMessage(e.getMessage());
        }
        return res;
    }

    private File convertMultipartFileToFile(MultipartFile file) throws IOException {
        File convertedFile = new File(System.getProperty("java.io.tmpdir") + "/" + file.getOriginalFilename());
        file.transferTo(convertedFile);
        return convertedFile;
    }


    private Drive createDriveService() throws GeneralSecurityException, IOException {

        GoogleCredential credential = GoogleCredential.fromStream(new FileInputStream(SERVICE_ACOUNT_KEY_PATH))
                .createScoped(Collections.singleton(DriveScopes.DRIVE));

        return new Drive.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),
                JSON_FACTORY,
                credential)
                .build();

    }





/*
    private String saveFileToLocal(MultipartFile reportFile) {
        try {
            // Define the directory path where you want to save the files
            String directoryPath = "C:/Users/Yasoulanda/OneDrive/Desktop/Files";
            String originalFileName = reportFile.getOriginalFilename();
            String filePath = directoryPath + File.separator + originalFileName;

            // Create a file object with the full file path
            File destinationFile = new File(filePath);

            // Make directories if they do not exist
            if (!destinationFile.getParentFile().exists()) {
                destinationFile.getParentFile().mkdirs();
            }

            // Transfer the file to the given path
            reportFile.transferTo(destinationFile);

            // Return the path for storage in the database
            return filePath;
        } catch (IOException e) {
            // Handle the exception as per your requirements
            e.printStackTrace();
            return null;
        }
    }


    @Autowired
    private MinioClient minioClient;

    public void uploadFile(MultipartFile file, String bucketName, String objectName, String contentType) {
        try {
            boolean found = minioClient.bucketExists(BucketExistsArgs.builder().bucket(bucketName).build());
            if (!found) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(bucketName).build());
            }
            minioClient.putObject(
                    PutObjectArgs.builder().bucket(bucketName).object(objectName).stream(
                                    file.getInputStream(), file.getSize(), -1)
                            .contentType(contentType)
                            .build());
        } catch (Exception e) {
            throw new RuntimeException("Error uploading file: " + e.getMessage());
        }
    }

*/
}
