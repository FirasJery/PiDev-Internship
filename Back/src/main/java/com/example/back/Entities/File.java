package com.example.back.Entities;

import com.example.internship_management.Entities.Enums.Type_file;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter(AccessLevel.NONE)
    Long id_file;
    String file_name;
    @Enumerated(EnumType.STRING)
    Type_file type_file;


}
