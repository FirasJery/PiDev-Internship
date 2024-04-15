package com.example.back.Services;

import org.springframework.web.multipart.MultipartFile;

public interface FileService {

     void uploadFile(MultipartFile file, String bucketName, String objectName, String contentType);
}
