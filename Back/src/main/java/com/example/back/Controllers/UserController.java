package com.example.back.Controllers;

import com.example.back.Services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequiredArgsConstructor
@RequestMapping("/api/services/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final UserService userService;



    @GetMapping("/GetMailbyJournal/{id_Journal}")
    public String getmailUserByJournal(Long idJournal) {

        return userService.getmailUserByJournal(idJournal);
    }




    }
