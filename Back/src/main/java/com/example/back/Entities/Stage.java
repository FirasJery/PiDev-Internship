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
public class Stage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long idStage;
    String sujet_Stage;
    float note_stage;
    boolean archived;
    String nom_fichier_rapport;
    @OneToOne
    Convention convention;
    @OneToOne
    private Journal journal;
}
