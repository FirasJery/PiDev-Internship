package com.example.back.Repositories;

import com.example.back.Entities.Stage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StageRepository extends JpaRepository<Stage, Long> {
    Optional<Stage> findByConvention_IdConvention(Long conventionId);
   // List<Stage> findByArchivedTrue(boolean archived);

    @Query("SELECT s FROM Stage s WHERE s.convention.idConvention = (SELECT u.convention.idConvention FROM User u WHERE u.id_User = :userId)")
    List<Stage> findStageByUserId(@Param("userId") Long userId);

}