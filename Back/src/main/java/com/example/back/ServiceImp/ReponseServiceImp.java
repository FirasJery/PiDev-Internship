package com.example.back.ServiceImp;

import com.example.back.Entities.Reponse;
import com.example.back.Repositories.ReponseRepository;
import com.example.back.Services.ReponseService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ReponseServiceImp implements ReponseService {
    private final ReponseRepository reponseRepository;
    @Override
    public Reponse addReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    @Override
    public Reponse updateReponse(Reponse reponse) {
        return reponseRepository.save(reponse);
    }

    @Override
    public List<Reponse> findAll() {
        return (List<Reponse>) reponseRepository.findAll();
    }

    @Override
    public Reponse findById(long id_reponse) {
        return reponseRepository.findById(id_reponse).orElse(null);
    }

    @Override
    public void delete(long id_reponse) {
        reponseRepository.deleteById(id_reponse);
    }
}
