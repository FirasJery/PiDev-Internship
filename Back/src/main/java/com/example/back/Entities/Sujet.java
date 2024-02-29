package com.example.back.Entities;

import com.example.internship_management.Entities.Enums.Type_sujet;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Sujet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idsujet;
    String titre;
    String description;
    String lieu;
    int duree;
    int nbretudiant ;
    String requirements;
    String nomentreprise;
    String mailentreprise;

    @Enumerated(EnumType.STRING)
    Type_sujet typesujet;

}
