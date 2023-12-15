package com.faro.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faro.demo.entities.Artist;
import com.faro.demo.repositories.ArtistRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ArtistService {
    @Autowired
    private final ArtistRepository artistRepository;

    
    public ArtistService(ArtistRepository artistRepository) {
        this.artistRepository = artistRepository;
    }

    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    public Optional<Artist> getArtistById(Integer id) {
        return artistRepository.findById(id);
    }

    public Artist createArtist(Artist artist) {
        return artistRepository.save(artist);
    }

    public Artist updateArtist(Integer id, Artist updatedArtist) {
        if (artistRepository.existsById(id)) {
            updatedArtist.setIdArtist(id);
            return artistRepository.save(updatedArtist);
        }
        return null; // Puedes manejar esto de otra manera según tus necesidades
    }

    public void deleteArtist(Integer id) {
        artistRepository.deleteById(id);
    }
}

