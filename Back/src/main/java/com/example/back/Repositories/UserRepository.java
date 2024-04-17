package com.example.back.Repositories;

import com.example.back.Entities.Journal;
import com.example.back.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);

    User findByLogin(String username);




    @Query("select u from User u inner join u.conventionSet conventionSet where conventionSet.stage.journal.idJournal = ?1")
    User findByConventionSet_Stage_Journal(Long idJournal);

}