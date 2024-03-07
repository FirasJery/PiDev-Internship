package com.example.back.ServiceImp;

import com.example.back.Entities.Convention;
import com.example.back.Entities.Stage;
import com.example.back.Entities.User;
import com.example.back.Repositories.ConventionRepository;
import com.example.back.Repositories.StageRepository;
import com.example.back.Repositories.UserRepository;
import com.example.back.Services.ConventionService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class ConventionServiceImp implements ConventionService {
    public final ConventionRepository conventionRepository;
    public final StageRepository stageRepository;
    public final UserRepository userRepository;
    @Override
    public List<Convention> retrieveAllConventionsNonArchivedStage() {
        // Use a Set to automatically remove duplicates based on object equality
        Set<Convention> conventionSet = new HashSet<>();
        conventionSet.addAll(conventionRepository.findByIsvalidFalse());
        conventionSet.addAll(conventionRepository.findConventionsWithNonArchivedStage());

        // Convert the Set back to a List for consistency with the method signature
        return new ArrayList<>(conventionSet);
    }

    @Override
    public List<Convention> retrieveAllConventionsArchivedStage() {
        return conventionRepository.findConventionsWithArchivedStage();
    }

    @Override
    public Convention addConvention(Convention convention) {
        return conventionRepository.save(convention);
    }

    @Override
    public void archiveConvention(Long idconvention) {
        Stage stage= stageRepository.findByConvention_IdConvention(idconvention).orElse(null);
        stage.setArchived(true);
        stageRepository.save(stage);
    }

    @Override
    public void unarchiveConvention(Long idconvention) {
        Stage stage= stageRepository.findByConvention_IdConvention(idconvention).orElse(null);
        stage.setArchived(false);
        stageRepository.save(stage);
    }

    @Override
    public Convention retrieveConvention(Long idconvention) {
        return conventionRepository.findById(idconvention).orElse(null);
    }
    @Override
    public Convention updateConvention(Convention convention) {
        return conventionRepository.save(convention);
    }

    @Override
    public List<Convention> retrieveConventionsByUser(Long userId) {
        return conventionRepository.findByUserId(userId);
    }

    @Transactional
    public Convention addConventionAndAssignToUser(Convention convention, Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        // Prevent creating a new convention if one already exists for the user
        if (user.getConvention() != null) {
            throw new IllegalStateException("This user already has a convention.");
        }

        // Save the convention to the database
        Convention savedConvention = conventionRepository.save(convention);
        // Assign the saved convention to the user
        user.setConvention(savedConvention);
        userRepository.save(user); // Save the user with the assigned convention
        return savedConvention; // Return the saved convention
    }

    @Transactional
    public Convention validateConvention(Long id) {
        Convention convention = conventionRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid convention ID: " + id));

        convention.setIsvalid(true);// Assuming you have a method to set the validity status

        return conventionRepository.save(convention); // Save the updated object
    }
}
