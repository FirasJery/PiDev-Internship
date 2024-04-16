package com.example.back.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Convention {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idConvention;
    String nomEntreprise;
    Date dateDebut;
    Date dateFin;
    String adresse;
    int numTel;
    String nomEncadrant;
    String emailEncadrant;

    @OneToOne
    private Stage stage;


    @ManyToOne
    User user;
}
