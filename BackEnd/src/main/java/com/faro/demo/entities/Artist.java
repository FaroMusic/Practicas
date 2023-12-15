package com.faro.demo.entities;

import jakarta.persistence.*;

@Entity
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idArtist;

    private String nameArtist;
    private String bio;

    /*@OneToOne(mappedBy = "artist", cascade = CascadeType.ALL, orphanRemoval = true)
    private Concert concert;*/

    // Constructors

    public Artist() {
    }

    public Artist(String name, String bio) {
        this.nameArtist = name;
        this.bio = bio;
    }

    // Getters and setters

    public Integer getIdArtist() {
        return idArtist;
    }

    public void setIdArtist(Integer id) {
        this.idArtist = id;
    }

    public String getNameArtist() {
        return nameArtist;
    }

    public void setNameArtist(String name) {
        this.nameArtist = name;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    /*public Concert getConcert() {
        return concert;
    }

    public void setConcert(Concert concert) {
        this.concert = concert;
    }*/
}
