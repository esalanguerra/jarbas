package com.jarbas.jarbas.service.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.jarbas.jarbas.domain.user.User;
import com.jarbas.jarbas.repositories.UserRepository;

import java.util.ArrayList;

@Component
public class CustomUserDetailsService implements UserDetailsService {
  @Autowired
  private UserRepository repository;
  
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = this.repository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));

    return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getSenha(), new ArrayList<>());
  }
}
