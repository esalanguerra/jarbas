package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jarbas.jarbas.dto.CreateFormDomainDTO;
import com.jarbas.jarbas.repositories.FormDomainRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/form-domains")
@RequiredArgsConstructor
public class FormDomainController {
  private final FormDomainRepository repository;

  @PostMapping("/create")
  public ResponseEntity createFormDomain(@RequestBody CreateFormDomainDTO createFormDomainDto) {
    return ResponseEntity.ok("sucesso!");
  }

  @GetMapping
  public ResponseEntity<String> getFormDomains() {
    return ResponseEntity.ok("sucesso!");
  }
}
