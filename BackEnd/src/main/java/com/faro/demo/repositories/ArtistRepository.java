package com.faro.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faro.demo.entities.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Integer> {
    // Puedes añadir consultas personalizadas si es necesario
}

