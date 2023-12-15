package com.faro.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.faro.demo.CDService;
import com.faro.demo.entities.CD;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cds")
public class CDController {
    @Autowired
    private final CDService cdService;

    
    public CDController(CDService cdService) {
        this.cdService = cdService;
    }

    @GetMapping
    public List<CD> getAllCDs() {
        return cdService.getAllCDs();
    }

    @GetMapping("/{id}")
    public Optional<CD> getCDById(@PathVariable Integer id) {
        return cdService.getCDById(id);
    }

    @PostMapping
    public CD createCD(@RequestBody CD cd) {
        return cdService.createCD(cd);
    }

    @PutMapping("/{id}")
    public CD updateCD(@PathVariable Integer id, @RequestBody CD updatedCD) {
        return cdService.updateCD(id, updatedCD);
    }

    @DeleteMapping("/{id}")
    public void deleteCD(@PathVariable Integer id) {
        cdService.deleteCD(id);
    }
}

