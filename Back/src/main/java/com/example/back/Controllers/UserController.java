package com.example.back.Controllers;

import com.example.back.Entities.Postulation;
import com.example.back.Entities.User;
import com.example.back.Services.PostulationService;
import com.example.back.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RestController("/api/services/user")
public class UserController {

    private final UserService us;

    @GetMapping("/{idU}")
    public User getById(@PathVariable long idU){
        return us.findById(idU);
    }
}
