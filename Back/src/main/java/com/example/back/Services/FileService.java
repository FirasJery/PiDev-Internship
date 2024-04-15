package com.example.back.Services;

import com.example.back.Entities.Res;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.security.GeneralSecurityException;

public interface FileService {

    Res uploadFileToDrive(MultipartFile file) throws GeneralSecurityException, IOException;


    //  void uploadFile(MultipartFile file, String bucketName, String objectName, String contentType);
}
