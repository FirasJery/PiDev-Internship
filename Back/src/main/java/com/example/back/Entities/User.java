package com.example.back.Entities;

import com.example.internship_management.Entities.Enums.Role_user;
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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_User;
    String login;
    String password;
    @Enumerated(EnumType.STRING)
    Role_user roleUser;
    String classe;
    String email;
    int num_tel;
    String role_enreprise;
    String identifiant;
    String specialite;
    @OneToMany
    private Set<Post> postSet;
    @OneToMany
    private Set<Reclamation> reclamationSet;
    @OneToMany
    private Set<File> fileSet;
    @OneToOne
    private Convention convention;
    @OneToMany
    private Set<Sujet> sujetSet;
}
