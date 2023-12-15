package com.faro.demo.services;

import org.springframework.stereotype.Service;

import com.faro.demo.entities.Concert;
import com.faro.demo.repositories.ConcertRepository;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@Service
public class ConcertService {
    @Autowired
    private final ConcertRepository concertRepository;

    public ConcertService(ConcertRepository concertRepository) {
        this.concertRepository = concertRepository;
    }

    public List<Concert> getAllConcerts() {
        return concertRepository.findAll();
    }

    public Optional<Concert> getConcertById(Integer id) {
        return concertRepository.findById(id);
    }

    public Concert createConcert(Concert concert) {
        return concertRepository.save(concert);
    }

    public Concert updateConcert(Integer id, Concert updatedConcert) {
        if (concertRepository.existsById(id)) {
            updatedConcert.setIdConcert(id);
            return concertRepository.save(updatedConcert);
        }
        return null; // You may handle this differently based on your needs
    }

    public void deleteConcert(Integer id) {
        concertRepository.deleteById(id);
    }
}
