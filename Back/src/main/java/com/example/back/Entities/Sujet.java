package com.example.back.Entities;

import com.example.back.Entities.Enums.Type_sujet;
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
    Long id_Sujet;
    String titre_Sujet;
    String description_Sujet;
    String dure_Sujet;
    String lieu;
    int nbr_etudiant_required ;
    String requirements;
    @Enumerated(EnumType.STRING)
    Type_sujet typeSujet;

}
