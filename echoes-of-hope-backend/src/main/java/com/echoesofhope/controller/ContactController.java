package com.echoesofhope.controller;

import com.echoesofhope.dto.ContactRequest;
import com.echoesofhope.repository.ContactRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ContactController {

    @Autowired
    private ContactRequestRepository contactRequestRepository;

    @PostMapping("/contacts")
    public ResponseEntity<String> submitContactForm(@RequestBody ContactRequest contactRequest) {
        // Log the received contact request
        System.out.println("Contact Request Received: " + contactRequest.toString());

        // Save the contact request to the database
        contactRequestRepository.save(contactRequest);

        return ResponseEntity.ok("Your message has been received! We will get back to you shortly.");
    }
}
