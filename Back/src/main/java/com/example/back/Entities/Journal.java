package com.example.back.Entities;

import com.example.internship_management.Entities.Enums.Note_evaluation;
import com.example.internship_management.Entities.Enums.Type_file;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Journal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_Journal;
    String remarque;
    float total_note_evaluation;
    boolean journal_is_valid;
    @OneToOne (mappedBy = "journal")
    private Stage stage;
    @OneToMany
    private Set<Tache_journal> tache_journal;
    @OneToMany
    private Set<Evaluation> evaluations;

}
