package com.faro.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.faro.demo.entities.Concert;
import com.faro.demo.services.ConcertService;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/concerts")
public class ConcertController {
    @Autowired
    private final ConcertService concertService;

    
    public ConcertController(ConcertService concertService) {
        this.concertService = concertService;
    }

    @GetMapping
    public List<Concert> getAllConcerts() {
        return concertService.getAllConcerts();
    }

    @GetMapping("/{id}")
    public Optional<Concert> getConcertById(@PathVariable Integer id) {
        return concertService.getConcertById(id);
    }

    @PostMapping
    public Concert createConcert(@RequestBody Concert concert) {
        return concertService.createConcert(concert);
    }

    @PutMapping("/{id}")
    public Concert updateConcert(@PathVariable Integer id, @RequestBody Concert updatedConcert) {
        return concertService.updateConcert(id, updatedConcert);
    }

    @DeleteMapping("/{id}")
    public void deleteConcert(@PathVariable Integer id) {
        concertService.deleteConcert(id);
    }
}
