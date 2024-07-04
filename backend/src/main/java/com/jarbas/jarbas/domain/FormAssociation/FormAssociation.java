package com.jarbas.jarbas.domain.FormAssociation;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

import com.jarbas.jarbas.domain.FormDomain.FormDomain;

@Entity
@Table(name = "form_association")
public class FormAssociation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToMany
  private FormDomain[] domains;

  @OneToOne
  private FormDomain redirect;
}
