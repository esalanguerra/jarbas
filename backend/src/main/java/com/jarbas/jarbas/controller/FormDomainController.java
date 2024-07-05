package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form-domains")
public class FormDomainController {
  @GetMapping
  public ResponseEntity<String> getFormDomains() {
    return ResponseEntity.ok("sucesso!");
  }
}
