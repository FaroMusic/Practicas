package com.faro.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.faro.demo.entities.CD;
import com.faro.demo.repositories.CDRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CDService {
    @Autowired
    private final CDRepository cdRepository;

    
    public CDService(CDRepository cdRepository) {
        this.cdRepository = cdRepository;
    }

    public List<CD> getAllCDs() {
        return cdRepository.findAll();
    }

    public Optional<CD> getCDById(Integer id) {
        return cdRepository.findById(id);
    }

    public CD createCD(CD cd) {
        return cdRepository.save(cd);
    }

    public CD updateCD(Integer id, CD updatedCD) {
        if (cdRepository.existsById(id)) {
            updatedCD.setIdCD(id);
            return cdRepository.save(updatedCD);
        }
        return null; // Puedes manejar esto de otra manera según tus necesidades
    }

    public void deleteCD(Integer id) {
        cdRepository.deleteById(id);
    }
}

