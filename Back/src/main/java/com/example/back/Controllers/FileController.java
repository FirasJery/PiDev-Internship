package com.example.back.Controllers;

import com.example.back.Config.MinioFileService;
import com.example.back.ServiceImp.FileSeviceImp;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RequiredArgsConstructor
@RestController

public class FileController {


    @Autowired
    private MinioFileService minioFileService;

    @PostMapping("/files/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        String bucketName = "filestorage"; // Spécifiez le nom du bucket MinIO
        String objectName = file.getOriginalFilename(); // Utilisez le nom d'origine du fichier pour l'objet MinIO
        String contentType = file.getContentType(); // Obtenez le type de contenu du fichier

        minioFileService.uploadFile(file, bucketName, objectName, contentType);

        return ResponseEntity.ok("file uploaded successfully !");
    }

}
