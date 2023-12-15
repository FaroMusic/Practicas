package com.faro.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faro.demo.entities.Video;
import com.faro.demo.repositories.VideoRepository;

import java.util.List;
import java.util.Optional;

@Service
public class VideoService {
    @Autowired
    private final VideoRepository videoRepository;

    
    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public Optional<Video> getVideoById(Integer id) {
        return videoRepository.findById(id);
    }

    public Video createVideo(Video video) {
        return videoRepository.save(video);
    }

    public Video updateVideo(Integer id, Video updatedVideo) {
        if (videoRepository.existsById(id)) {
            updatedVideo.setIdVideo(id);
            return videoRepository.save(updatedVideo);
        }
        return null; // Puedes manejar esto de otra manera según tus necesidades
    }

    public void deleteVideo(Integer id) {
        videoRepository.deleteById(id);
    }
}

