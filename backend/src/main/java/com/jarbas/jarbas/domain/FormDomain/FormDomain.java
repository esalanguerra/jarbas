package com.jarbas.jarbas.domain.FormDomain;

import com.jarbas.jarbas.domain.FormField.FormField;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;

@Entity
@Table(name = "form_domain")
public class FormDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;

  private String placeholder;

  @OneToMany
  private FormField[] fields;
}
