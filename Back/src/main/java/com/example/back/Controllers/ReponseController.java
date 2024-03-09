package com.example.back.Controllers;

import com.example.back.Entities.Reponse;
import com.example.back.ServiceImp.ReponseServiceImp;
import com.example.back.Services.ReponseService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/services/reponse")

public class ReponseController {
    private final ReponseService reponseService;

    @PostMapping
    public Reponse addReponse (@RequestBody Reponse reponse) {
        return reponseService.addReponse(reponse);
    }
    @PutMapping("/{id}")
    public Reponse updateReponse (@PathVariable long id_Reponse, @RequestBody Reponse reponse) {
        return reponseService.updateReponse(reponse);
    }
    @GetMapping("/findAll")
    public List<Reponse> findAll() {
        return reponseService.findAll();
    }
    @GetMapping("/{id}")
    public Reponse findById(@PathVariable long id_Reponse) {
        Reponse reponse = reponseService.findById(id_Reponse);
        return reponse;
    }
    @DeleteMapping("/{id}")
    public void deleteReponse(@PathVariable long id_Reponse) {
        reponseService.delete(id_Reponse);
    }
}
