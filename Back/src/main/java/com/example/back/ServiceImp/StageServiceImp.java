package com.example.back.ServiceImp;

import com.example.back.Entities.Convention;
import com.example.back.Entities.Stage;
import com.example.back.Repositories.ConventionRepository;
import com.example.back.Repositories.StageRepository;
import com.example.back.Services.StageService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StageServiceImp implements StageService {
    private final StageRepository stageRepository;
    private final ConventionRepository conventionRepository;


    @Override
    public Stage updateStage(Stage stage) {
        return stageRepository.save(stage);
    }

    @Override
    public Stage retrieveStage(Long id) {
        return stageRepository.findById(id).orElse(null);
    }

    @Override
    public Stage addStage(Stage stage) {
        return stageRepository.save(stage);
    }

    @Override
    public Collection<Stage> retrieveAllStages() {
        return stageRepository.findAll();
    }

    @Override
    public void deleteStage(Long idStage) {
        stageRepository.deleteById(idStage);
    }

    @Override
    public void createStagesForValidConventions() {
        List<Convention> validConventions = conventionRepository.findByIsvalidTrue();
        for (Convention convention : validConventions) {
            Optional<Stage> existingStage = stageRepository.findByConvention_IdConvention(convention.getIdConvention());
            if (existingStage.isEmpty()) {
                Stage stage = new Stage();
                stage.setArchived(false);
                stage.setConvention(convention);
                stageRepository.save(stage);
            }
        }
    }



    @Override
    public List<Stage> getStagesByUserId(Long userId) {
        return stageRepository.findStageByUserId(userId);
    }

    @Override
    public void saveReport(Long stageId, MultipartFile reportFile) {
        String fileName = saveFileToLocalDisk(reportFile);
        Stage stage = stageRepository.findById(stageId).get();
        stage.setNom_fichier_rapport(fileName);
        stageRepository.save(stage);
    }

    private String saveFileToLocalDisk(MultipartFile reportFile) {
        try {
            // Define the directory path where you want to save the files
            String directoryPath = "C:/Users/user/Desktop/Local Git Repo/Rapports";
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
}
