package com.trashClash.demo.controller;

import com.trashClash.demo.model.Admin;
import com.trashClash.demo.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminRepository adminRepo;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/signup")
    public String signup(@RequestBody Admin admin) {
        if (adminRepo.findByUsername(admin.getUsername()).isPresent()) {
            return "Username already exists";
        }
        admin.setPassword(encoder.encode(admin.getPassword()));
        adminRepo.save(admin);
        return "Admin registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {
        Optional<Admin> found = adminRepo.findByUsername(admin.getUsername());
        if (found.isPresent()) {
            if (encoder.matches(admin.getPassword(), found.get().getPassword())) {
                return "Login successful";
            } else {
                return "Invalid password";
            }
        }
        return "User not found";
    }
}
