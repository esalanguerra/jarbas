package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
  @GetMapping
  public ResponseEntity<String> getUser() {
    return ResponseEntity.ok("sucesso!");
  }

  @PostMapping("/login")
  public ResponseEntity<String> login() {
    return ResponseEntity.ok("sucesso!");
  }

  @PostMapping("/register")
  public ResponseEntity<String> logout() {
    return ResponseEntity.ok("sucesso!");
  }
}
