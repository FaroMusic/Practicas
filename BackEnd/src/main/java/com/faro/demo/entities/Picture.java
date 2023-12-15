package com.faro.demo.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPicture;

    
    private String pictureUrl;

    // Constructor
    public Picture() {
    }

    // Constructor con parámetros
    public Picture(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }

    // Getter y Setter para id
    public Integer getIdPicture() {
        return idPicture;
    }

    public void setIdPicture(Integer id) {
        this.idPicture = id;
    }

    // Getter y Setter para pictureUrl
    public String getPictureUrl() {
        return pictureUrl;
    }

    public void setPictureUrl(String pictureUrl) {
        this.pictureUrl = pictureUrl;
    }
}

