package com.example.back.Repositories;

import com.example.back.Entities.Convention;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ConventionRepository extends JpaRepository<Convention, Long> {
    List<Convention> findByIsvalidTrue();
    List<Convention> findByIsvalidFalse();


    @Query("SELECT c FROM Convention c WHERE c.stage.archived = true")
    List<Convention> findConventionsWithArchivedStage();

    @Query("SELECT c FROM Convention c WHERE c.stage.archived = false")
    List<Convention> findConventionsWithNonArchivedStage();

    @Query("SELECT c FROM Convention c WHERE c.user.id_User = :userId")
    List<Convention> findByUserId(@Param("userId") Long userId);

}