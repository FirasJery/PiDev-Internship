package com.example.back.ServiceImp;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.User;
import com.example.back.Repositories.PostulationRepository;
import com.example.back.Repositories.UserRepository;
import com.example.back.Services.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepository ur;


    @Override
    public User findById(long idP) {
        return ur.findById(idP)
                .orElseThrow(() -> new EntityNotFoundException("User with id " + idP + " not found."));
    }
}
