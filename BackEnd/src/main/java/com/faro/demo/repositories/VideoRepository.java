package com.faro.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faro.demo.entities.Video;

public interface VideoRepository extends JpaRepository<Video, Integer> {
    // Puedes añadir consultas personalizadas si es necesario
}

