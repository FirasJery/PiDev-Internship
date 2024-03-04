package com.example.back.ServiceImp;

import com.example.back.Entities.Journal;
import com.example.back.Entities.Tache_journal;
import com.example.back.Repositories.JournalRepository;
import com.example.back.Repositories.Tache_journalRepository;
import com.example.back.Services.Tache_journalService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class Tache_journalServiceImp implements Tache_journalService {

    private final Tache_journalRepository tache_journalRepos;
    private final JournalRepository journalRepos;

    @Override
    public Tache_journal addTache_Journal(Tache_journal tache_journal) {
        tache_journal.setDate_tache(LocalDateTime.now());
        return tache_journalRepos.save(tache_journal);
    }

    @Override
    public Tache_journal addTache_JournalAndAssignToJournal(Tache_journal tache_journal, long id_Journal) {
        tache_journal.setDate_tache(LocalDateTime.now());
        tache_journal.setValid(false);

        Journal journal = journalRepos.findById(id_Journal).orElse(null);
        if (journal != null) {
            tache_journal.setJournal(journal);
            tache_journalRepos.save(tache_journal);
        }
        return tache_journal;
    }
   /* @Override
  //  @Transactional
    public Tache_journal updateTache_Journal(Tache_journal tache_journal) {
        // Récupérer le journal associé à la tâche avant la mise à jour
        long idj = tache_journal.getJournal().getIdJournal();
        tache_journal.setDate_tache(LocalDateTime.now());

        // Mettre à jour les champs de la tâche
        Tache_journal updatedTacheJournal = tache_journalRepos.save(tache_journal);

        Journal journal = journalRepos.findByIdJournal(idj);
        // Réassigner le journal à la tâche mise à jour
        tache_journal.setJournal( journal );

        return updatedTacheJournal;
    }*/

    @Override
    public Tache_journal updateTache_Journal(Long idtache, Tache_journal updttache) {
        // Recherche de la tache existante par son identifiant
        Tache_journal existingTache = tache_journalRepos.findById(idtache)
                .orElseThrow(() -> new EntityNotFoundException("Tache non trouvée avec l'ID : " + idtache));

        // Mettre à jour les champs de la tache existante avec les valeurs de la tache mise à jour
      if (!Objects.equals(updttache.getDescriptiontache(), existingTache.getDescriptiontache()) &&
              !"".equals(updttache.getDescriptiontache()) && updttache.getDescriptiontache()!= null )  {

          existingTache.setDescriptiontache(updttache.getDescriptiontache());
          existingTache.setValid(false);

      }
      //existingTache.setDate_tache(LocalDateTime.now());
   // if ( updttache.isValid()) {
         // existingTache.setValid(false);
     // }
        // Enregistrer la tache mise à jour dans la base de données
        return tache_journalRepos.save(existingTache);
    }

    @Override
    public Tache_journal updateIsValidByIdtache(Long idtache ,Tache_journal updtvalid ) {

        Tache_journal existingTache = tache_journalRepos.findById(idtache)
                .orElseThrow(() -> new EntityNotFoundException("Tache non trouvée avec l'ID : " + idtache));

        existingTache.setValid(true);

        //    tache_journalRepos.updateIsValidByIdtache(idtache);


        return tache_journalRepos.save(existingTache);
    }


    @Override
    public Tache_journal findTacheById(long id_tache) {
    //   return tache_journalRepos.findById(id_tache).get();
      return tache_journalRepos.findById(id_tache).orElse(null);
    }



    @Override
    public List<Tache_journal> findAll() {

        return tache_journalRepos.findAll();
    }

    @Override
    public List<Tache_journal> findAllTachesByIdJournal(Long journalId) {
        return tache_journalRepos.findByJournal_IdJournalOrderByIdtacheAsc(journalId);
    }

    @Override
    public void removeTache(Long idtache) {
        tache_journalRepos.deleteById(idtache);
    }

    @Override
    public List<Tache_journal> AllTachesValidByIdJournal(Long idjournal) {
        return  tache_journalRepos.findByJournal_IdJournalAndIsValidTrueOrderByIdtacheAsc(idjournal);
    }

    @Override
    public List<Tache_journal> AllTachesNonValidByIdJournal(Long idjournal) {
        return  tache_journalRepos.findByJournal_IdJournalAndIsValidFalseOrderByIdtacheAsc(idjournal);
    }


}
