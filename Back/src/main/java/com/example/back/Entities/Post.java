package com.example.back.Entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_Post;
    String contenu_Post;
    String sujet_Post;
    boolean isAnonymous;
    LocalDateTime date_Post;
    @OneToMany(cascade = CascadeType.ALL, mappedBy ="post")
    private Set<Commentaire> commentaireSet;


}
