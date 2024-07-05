package com.jarbas.jarbas.infra.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.jarbas.jarbas.domain.user.User;

@Service
public class TokenService {

  protected Integer hoursExpires = 9;

  @Value("${api.security.token.secret}")
  private String secret;

  public String generateToken(User user){
    try {
      String token = JWT.create()
        .withIssuer("jarbas")
        .withSubject(user.getEmail())
        .withClaim("id", user.getId())
        .withExpiresAt(this.generateExpirationDate())
        .sign(Algorithm.HMAC256(secret));

      return token;
    }
    catch (JWTCreationException exception) {
      throw new RuntimeException("Erro ao Prosseguir com a autenticação");
    }
  }

  public String validateToken(String token){
    try {
      Algorithm algorithm = Algorithm.HMAC256(secret);

      return JWT.require(algorithm).withIssuer("jarbas").build().verify(token).getSubject();
    }
    catch (JWTVerificationException exception) {
      return null;
    }
  }

  private Instant generateExpirationDate(){
    return LocalDateTime.now().plusHours(hoursExpires).toInstant(ZoneOffset.of("-03:00"));
  }
}
