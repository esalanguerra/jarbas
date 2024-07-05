package com.jarbas.jarbas.controller;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jarbas.jarbas.domain.user.User;
import com.jarbas.jarbas.dto.LoginRequestDTO;
import com.jarbas.jarbas.dto.RegisterRequestDTO;
import com.jarbas.jarbas.dto.ResponseDTO;
import com.jarbas.jarbas.repositories.UserRepository;
import com.jarbas.jarbas.infra.security.TokenService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

  private final UserRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final TokenService tokenService;

  @PostMapping("/login")
  public ResponseEntity login(@RequestBody LoginRequestDTO body) {
    User user = this.repository.findByEmail(body.email()).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

    if(passwordEncoder.matches(body.senha(), user.getSenha())) {
      String token = this.tokenService.generateToken(user);

      return ResponseEntity.ok(new ResponseDTO(user.getNome(), token));
    }

    return ResponseEntity.badRequest().build();
  }

  @PostMapping("/register")
  public ResponseEntity register(@RequestBody RegisterRequestDTO body) {
    Optional<User> user = this.repository.findByEmail(body.email());

    if(user.isEmpty()) {
      User newUser = new User();

      newUser.setEmail(body.email());

      newUser.setSenha(passwordEncoder.encode(body.senha()));

      newUser.setNome(body.nome());

      newUser.setTelefone(body.telefone());

      this.repository.save(newUser);

      String token = this.tokenService.generateToken(newUser);

      return ResponseEntity.ok(new ResponseDTO(newUser.getNome(), token));
    }

    return ResponseEntity.badRequest().build();
  }
}
