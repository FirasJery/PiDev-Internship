package com.example.back.ServiceImp;

import com.example.back.Entities.Journal;
import com.example.back.Entities.Stage;
import com.example.back.Entities.Tache_journal;
import com.example.back.Repositories.JournalRepository;
import com.example.back.Repositories.StageRepository;
import com.example.back.Services.JournalService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class JournalServiceImp implements JournalService {
    private final JournalRepository journalRepos;
    private  final StageRepository stageRepos;


    @Override
    public Journal addJournal(Journal journal) {
        Set<Tache_journal> tjs = new HashSet<>();
        journal.setTache_journal(tjs);

        return journalRepos.save(journal);
    }

    @Override
    public Journal updateJournal(Journal journal) {
        return journalRepos.save(journal);


    }

    @Override
    public Set<Journal> findAll() {
        return (Set<Journal>) journalRepos.findAll();
    }

    @Override
    public Journal findById(Long id_Journal) {
        return journalRepos.findById(id_Journal).orElse(null) ;

    }

    @Override
    public Journal addJournalAndAssignToStage(Journal journal, Long id_Stage) {

        Stage stage = stageRepos.findById(id_Stage).orElse(null);

        journalRepos.save(journal);

        stage.setJournal(journal);
        stageRepos.save(stage);

        return journal;
    }

}
