package com.faro.demo;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.faro.demo.entities.Artist;
import com.faro.demo.entities.CD;
import com.faro.demo.entities.Concert;
import com.faro.demo.entities.Picture;
import com.faro.demo.entities.Video;
import com.faro.demo.repositories.ArtistRepository;
import com.faro.demo.repositories.CDRepository;
import com.faro.demo.repositories.ConcertRepository;
import com.faro.demo.repositories.PictureRepository;
import com.faro.demo.repositories.VideoRepository;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

    @Autowired
    private ConcertRepository concertRepository;

    @Autowired
    private CDRepository cdRepository;

    @Autowired
    private PictureRepository pictureRepository;

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private ArtistRepository artistRepository;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        // Guardar en la base de datos
        concertRepository.saveAll(Arrays.asList(
                new Concert("2023-01-01", "Example Venue 1", "Concert 1"),
                new Concert("2023-02-01", "Example Venue 2", "Concert 2")
                // Puedes agregar más conciertos según sea necesario
        ));

        cdRepository.saveAll(Arrays.asList(
                new CD("2023-01-01", "Example Venue 1"),
                new CD("2023-02-01", "Example Venue 2")
                // Puedes agregar más conciertos según sea necesario
        ));

        pictureRepository.saveAll(Arrays.asList(
                new Picture("https://www.google.es/"),           
                new Picture("https://www.google.es/")
        ));

        videoRepository.saveAll(Arrays.asList(
                new Video("https://www.google.es/"),           
                new Video("https://www.google.es/")
        ));

        artistRepository.saveAll(Arrays.asList(
                new Artist("name","https://www.google.es/"),           
                new Artist("name2","https://www.google.es/")
        ));



        Concert concert0 = concertRepository.findById(1).orElse(null);
        Concert concert1 = concertRepository.findById(2).orElse(null);
        Artist artist0 = artistRepository.findById(1).orElse(null);
        Artist artist1 = artistRepository.findById(2).orElse(null);

        concert0.setArtist(artist1);
        concert1.setArtist(artist0);
        concertRepository.saveAndFlush(concert0);
        concertRepository.saveAndFlush(concert1);

    }
}
