package com.jarbas.jarbas.domain.FormAssociation;

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

import com.jarbas.jarbas.domain.FormDomain.FormDomain;

@Entity
@Table(name = "form_associations")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class FormAssociation {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToMany
  private FormDomain[] formDomains;

  private Integer redirectId;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public FormDomain[] getDomains() {
    return formDomains;
  }

  public void setDomains(FormDomain[] formDomains) {
    this.formDomains = formDomains;
  }

  public int getRedirectId() {
    return redirectId;
  }

  public void setRedirectId(int redirectId) {
    this.redirectId = redirectId;
  }
}
