package com.faro.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.faro.demo.entities.Picture;
import com.faro.demo.services.PictureService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pictures")
public class PictureController {
    @Autowired
    private final PictureService pictureService;

    
    public PictureController(PictureService pictureService) {
        this.pictureService = pictureService;
    }

    @GetMapping
    public List<Picture> getAllPictures() {
        return pictureService.getAllPictures();
    }

    @GetMapping("/{id}")
    public Optional<Picture> getPictureById(@PathVariable Integer id) {
        return pictureService.getPictureById(id);
    }

    @PostMapping
    public Picture createPicture(@RequestBody Picture picture) {
        return pictureService.createPicture(picture);
    }

    @PutMapping("/{id}")
    public Picture updatePicture(@PathVariable Integer id, @RequestBody Picture updatedPicture) {
        return pictureService.updatePicture(id, updatedPicture);
    }

    @DeleteMapping("/{id}")
    public void deletePicture(@PathVariable Integer id) {
        pictureService.deletePicture(id);
    }
}

