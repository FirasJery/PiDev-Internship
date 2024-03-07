package com.example.back;

import com.example.back.ServiceImp.EmailServiceImp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.beans.factory.annotation.Autowired;

@SpringBootApplication
public class BackApplication {

    @Autowired
    private EmailServiceImp senderService;
    public static void main(String[] args) {
        SpringApplication.run(BackApplication.class, args);
    }
    @EventListener(ApplicationReadyEvent.class)
    public void triggerMail() throws Exception {
        senderService.sendSimpleEmail("gadhribhela@gmail.com",
                "This is email body",
                "This is email subject");
    }
}