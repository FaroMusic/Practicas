package com.faro.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.faro.demo.entities.Concert;

public interface ConcertRepository extends JpaRepository<Concert, Integer> {
    // Puedes añadir consultas personalizadas si es necesario
}
