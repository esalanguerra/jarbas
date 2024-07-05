package com.jarbas.jarbas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jarbas.jarbas.domain.FormField.FormField;

public interface FormFieldRepository extends JpaRepository<FormField, Object> {}
