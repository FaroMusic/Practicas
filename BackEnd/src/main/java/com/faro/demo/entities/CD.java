package com.faro.demo.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CD {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCD;

    private String cdName;
    private String cdUrl;

    // Constructor
    public CD() {
    }

    // Constructor con parámetros
    public CD(String cdName, String cdUrl) {
        this.cdName = cdName;
        this.cdUrl = cdUrl;
    }

    // Getter y Setter para id
    public Integer getIdCD() {
        return idCD;
    }

    public void setIdCD(Integer id) {
        this.idCD = id;
    }

    // Getter y Setter para cdName
    public String getCdName() {
        return cdName;
    }

    public void setCdName(String cdName) {
        this.cdName = cdName;
    }

    // Getter y Setter para cdUrl
    public String getCdUrl() {
        return cdUrl;
    }

    public void setCdUrl(String cdUrl) {
        this.cdUrl = cdUrl;
    }
}

