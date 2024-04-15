package com.example.back.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import  com.example.internship_management.Entities.Enums.Typefile;
    @Entity
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @FieldDefaults(level = AccessLevel.PRIVATE)
    public class File {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Setter(AccessLevel.NONE)
        Long idfile;
        String filename;
        @Enumerated(EnumType.STRING)
        Typefile type;


    }
