package com.example.back.Entities;

import com.example.internship_management.Entities.Enums.Note_evaluation;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_Evaluation;
    double note_Evaluation;
    String description;
    @Enumerated(EnumType.STRING)
    Note_evaluation noteevaluation;

}
