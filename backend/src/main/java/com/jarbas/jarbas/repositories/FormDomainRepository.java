package com.jarbas.jarbas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jarbas.jarbas.domain.FormDomain.FormDomain;

public interface FormDomainRepository extends JpaRepository<FormDomain, Object>{}
