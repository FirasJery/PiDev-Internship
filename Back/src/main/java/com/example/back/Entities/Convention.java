package com.example.back.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    String nom_entreprise;
    Date date_debut;
    Date date_fin;
    String adresse;
    int num_tel;
    String nom_encadrant;
    String email_encadrant;
    boolean isvalid = false;
    @JsonIgnore
    @OneToOne(mappedBy = "convention", cascade = CascadeType.ALL)
    Stage stage;

    @ManyToOne
    @JsonIgnore
    User user;
}
