package com.faro.demo.entities;

import jakarta.persistence.*;

@Entity
public class Concert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idConcert;

    private String fecha;
    private String lugar;
    private String nombreEvento;

    /*@OneToOne
    private Artist artist;*/

    // Constructors

    public Concert() {
    }

    public Concert(String fecha, String lugar, String nombreEvento) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.nombreEvento = nombreEvento;
    }

    // Getters and setters

    public Integer getIdConcert() {
        return idConcert;
    }

    public void setIdConcert(Integer id) {
        this.idConcert = id;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getLugar() {
        return lugar;
    }

    public void setLugar(String lugar) {
        this.lugar = lugar;
    }

    public String getNombreEvento() {
        return nombreEvento;
    }

    public void setNombreEvento(String nombreEvento) {
        this.nombreEvento = nombreEvento;
    }

    /*public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }*/
}