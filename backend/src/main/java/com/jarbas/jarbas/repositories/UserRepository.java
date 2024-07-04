package com.jarbas.jarbas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jarbas.jarbas.domain.user.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
  Optional<User> findByEmail(String email);
}
