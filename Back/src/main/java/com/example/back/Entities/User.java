package com.example.back.Entities;

import com.example.back.Entities.Enums.UserRole;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_User;
    String login;
    String email;
    String firstName;
    String lastName;
    @Enumerated(EnumType.STRING)
    UserRole role;
    int num_tel;
    String role_entreprise;
    String identifiant;
    String classe;
    String specialite;
    @OneToMany
    @ToString.Exclude
    private Set<Post> postSet;
    @OneToMany
    @ToString.Exclude
    private Set<Reclamation> reclamationSet;
    @OneToMany
    @ToString.Exclude
    private Set<File> fileSet;
    @OneToOne
    @ToString.Exclude
    private Convention convention;
    @OneToMany
    @ToString.Exclude
    private Set<Sujet> sujetSet;


}
