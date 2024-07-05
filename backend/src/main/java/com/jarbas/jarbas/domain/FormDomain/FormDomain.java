package com.jarbas.jarbas.domain.FormDomain;

import com.jarbas.jarbas.domain.FormField.FormField;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.OneToMany;

@Entity
@Table(name = "form_domains")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FormDomain {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String title;

  @OneToMany
  private FormField[] fields;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public FormField[] getFields() {
    return fields;
  }

  public void setFields(FormField[] fields) {
    this.fields = fields;
  }
}
