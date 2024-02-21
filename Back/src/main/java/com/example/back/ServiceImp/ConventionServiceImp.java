package com.example.back.ServiceImp;

import com.example.back.Entities.Convention;
import com.example.back.Repositories.ConventionRepository;
import com.example.back.Services.ConventionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Slf4j
public class ConventionServiceImp implements ConventionService {
    private final ConventionRepository conventionRepository;
    @Override
    public Convention addConvention(Convention convention) {

        return conventionRepository.save(convention) ;
    }

    @Override
    public Convention updateConvention(Convention convention) {
        return conventionRepository.save(convention);
    }

    @Override
    public List<Convention> findAll() {

       return conventionRepository.findAll();
    }

    @Override
    public Convention findById(Long id) {
        return conventionRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Convention with ID: " + id+" not found"));
    }


    @Override
    public boolean deleteConvention(Long id) {
         conventionRepository.deleteById(id);
         log.info("Convention with ID: " + id+" is deleted");
         return false;
    }

    @Override
    public boolean validateConvention(Long id) {
        Convention convention = conventionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Convention not found with id: " + id));
        convention.set_valid(true);
        conventionRepository.save(convention);
        return true;
    }
}
