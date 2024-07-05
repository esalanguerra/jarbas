package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form-associations")
public class FormAssociationController {
  @GetMapping
  public ResponseEntity<String> getFormAssociations() {
    return ResponseEntity.ok("sucesso!");
  }
}
