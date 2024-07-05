package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/form-fields")
public class FormFieldController {
  @GetMapping
  public ResponseEntity<String> getFormFields() {
    return ResponseEntity.ok("sucesso!");
  }
}
