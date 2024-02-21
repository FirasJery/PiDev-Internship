package com.example.back.Services;

import com.example.back.Entities.Convention;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ConventionService {
    Convention addConvention(Convention convention);
    Convention updateConvention(Convention convention);
    List<Convention> findAll();
    Convention findById(Long id);
    boolean deleteConvention(Long id);
    boolean validateConvention(Long id);

}
