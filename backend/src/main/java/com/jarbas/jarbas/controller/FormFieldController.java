package com.jarbas.jarbas.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jarbas.jarbas.repositories.FormFieldRepository;
import com.jarbas.jarbas.domain.FormField.FormField;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/form-fields")
@RequiredArgsConstructor
public class FormFieldController {

  private final FormFieldRepository repository;

  @PostMapping("/create")
  public ResponseEntity<String> createFormField() {
    return ResponseEntity.ok("sucesso!");
  }

  @GetMapping("/list")
  public ResponseEntity<String> getFormFields() {
    return ResponseEntity.ok("sucesso!");
  }

  @GetMapping("/list/{id}")
  public ResponseEntity<String> getFormFieldById() {
    return ResponseEntity.ok("sucesso!");
  }
}
