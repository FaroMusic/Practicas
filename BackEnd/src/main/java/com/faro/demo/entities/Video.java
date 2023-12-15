package com.faro.demo.entities;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Video {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idVideo;

    
    private String videoUrl;

    // Constructor
    public Video() {
    }

    // Constructor con parámetros
    public Video(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    // Getter y Setter para id
    public Integer getIdVideo() {
        return idVideo;
    }

    public void setIdVideo(Integer id) {
        this.idVideo = id;
    }

    // Getter y Setter para videoUrl
    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }
}

