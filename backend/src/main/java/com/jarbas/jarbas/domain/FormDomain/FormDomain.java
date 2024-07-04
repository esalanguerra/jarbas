package com.jarbas.jarbas.domain.formdomain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;

import com.jarbas.jarbas.domain.formfield.FormField;

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
