package com.example.backend.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.SignupRequest;
import com.example.backend.entities.User;
import com.example.backend.repositories.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

     public String registerUser(SignupRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email is already in use!";
        }

        User user = new User();
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // No encoding

        userRepository.save(user);
        return "User registered successfully!";
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}