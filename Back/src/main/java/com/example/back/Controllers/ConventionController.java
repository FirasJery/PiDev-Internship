package com.example.back.Controllers;

import com.example.back.Entities.Convention;
import com.example.back.ServiceImp.ConventionServiceImp;
import com.example.back.Services.ConventionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping(("/api/services/convention"))
@CrossOrigin(origins = "http://localhost:3503")


public class ConventionController {

     private final ConventionService conventionService;


     @PostMapping("/addConvention")
     public Convention addConvention(@RequestBody Convention convention){
         return conventionService.addConvention(convention);
     }
     @DeleteMapping("/removeConvention/{id}")
    public boolean removeConvention(@PathVariable Long id){
         return conventionService.deleteConvention(id);
     }
     @GetMapping("/getConvention/{id}")
    public Convention getConvention(@PathVariable Long id){
         return conventionService.findById(id);
     }
    @GetMapping("/getConventions")
    public List<Convention> getConventions(){
         return conventionService.findAll();
     }
     @PutMapping("/updateConvention")
    public Convention updateConvention(@RequestBody Convention convention){
         conventionService.updateConvention(convention);
         return convention;
     }
    @PutMapping("/validateConvention/{id}")
    public ResponseEntity<?> validateConvention(@PathVariable Long id) {
        boolean validated = conventionService.validateConvention(id);
        return validated ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }

}
