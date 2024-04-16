package com.example.back.SecurityConfig;


import lombok.extern.slf4j.Slf4j;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.representations.idm.RoleRepresentation;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Slf4j
public class KeycloakConfig {

    static Keycloak keycloak = null;

    public KeycloakConfig() {
    }

    public static Keycloak getInstance(){
        if(keycloak == null){

            keycloak = KeycloakBuilder.builder()
                    .serverUrl("http://localhost:8080/")
                    .realm("GestionStageRealm")
                    .grantType(OAuth2Constants.PASSWORD)
                    .username("super-admin")
                    .password("superadmin")
                    .clientId("login-app")
                    .clientSecret("eggxHlAtD6PBkQeCGp7qgi4B3lPkwr9q")
                    .build();
        }
        return keycloak;
    }

}
