package com.example.back.Controllers;

import com.example.back.Entities.Convention;
import com.example.back.ServiceImp.ConventionServiceImp;
import com.example.back.Services.ConventionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping(("/api/services/convention"))

public class ConventionController {

     private final ConventionService conventionService;

     @CrossOrigin(origins = "http://localhost:4200")
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
}
