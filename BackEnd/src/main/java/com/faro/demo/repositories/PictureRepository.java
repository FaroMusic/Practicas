package com.faro.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faro.demo.entities.Picture;

public interface PictureRepository extends JpaRepository<Picture, Integer> {
    // Puedes añadir consultas personalizadas si es necesario
}

