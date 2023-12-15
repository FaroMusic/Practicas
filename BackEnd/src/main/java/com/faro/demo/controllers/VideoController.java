package com.faro.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.faro.demo.entities.Video;
import com.faro.demo.services.VideoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/videos")
public class VideoController {
    @Autowired
    private final VideoService videoService;

    
    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping("/{id}")
    public Optional<Video> getVideoById(@PathVariable Integer id) {
        return videoService.getVideoById(id);
    }

    @PostMapping
    public Video createVideo(@RequestBody Video video) {
        return videoService.createVideo(video);
    }

    @PutMapping("/{id}")
    public Video updateVideo(@PathVariable Integer id, @RequestBody Video updatedVideo) {
        return videoService.updateVideo(id, updatedVideo);
    }

    @DeleteMapping("/{id}")
    public void deleteVideo(@PathVariable Integer id) {
        videoService.deleteVideo(id);
    }
}

