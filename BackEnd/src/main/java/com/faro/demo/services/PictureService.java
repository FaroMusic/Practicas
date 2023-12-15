package com.faro.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faro.demo.entities.Picture;
import com.faro.demo.repositories.PictureRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PictureService {
    @Autowired
    private final PictureRepository pictureRepository;

    
    public PictureService(PictureRepository pictureRepository) {
        this.pictureRepository = pictureRepository;
    }

    public List<Picture> getAllPictures() {
        return pictureRepository.findAll();
    }

    public Optional<Picture> getPictureById(Integer id) {
        return pictureRepository.findById(id);
    }

    public Picture createPicture(Picture picture) {
        return pictureRepository.save(picture);
    }

    public Picture updatePicture(Integer id, Picture updatedPicture) {
        if (pictureRepository.existsById(id)) {
            updatedPicture.setIdPicture(id);
            return pictureRepository.save(updatedPicture);
        }
        return null; // Puedes manejar esto de otra manera según tus necesidades
    }

    public void deletePicture(Integer id) {
        pictureRepository.deleteById(id);
    }
}

