package com.example.back.Controllers;

import com.example.back.Entities.User;
import com.example.back.Entities.UserWrapper;
import com.example.back.ExceptionHandling.ApiResponse;
import com.example.back.Repositories.UserRepository;
import com.example.back.SecurityConfig.KeycloakConfig;
import com.example.back.Services.UserService;
import jakarta.ws.rs.core.Response;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/service/user")
@Slf4j
public class UserController {

    private final UserService userService ;


    //tested and using it in the front end
    @PreAuthorize("hasAnyAuthority('SuperAdmin')")
    @PostMapping("/CreateUser")
    public ResponseEntity<ApiResponse> addUser(@RequestBody UserWrapper userWrapper ){
        Keycloak k = KeycloakConfig.getInstance();
        UserRepresentation userRep = userWrapper.getKeycloakUser();
        try (Response response = k.realm("GestionStageRealm").users().create(userRep)) {
            if (response.getStatus() != Response.Status.CREATED.getStatusCode()) {
                return ResponseEntity.status(HttpStatus.OK)
                        .body(new ApiResponse(false, response.readEntity(String.class), null));
            } else {
                UserRepresentation userRepresentation = k.realm("GestionStageRealm").users().search(userRep.getUsername()).get(0);
                userService.assignRoles(userRepresentation.getId(), userRep.getRealmRoles());
                try {
                    User u = userService.addUser(userWrapper.getUser());
                    return ResponseEntity.ok(new ApiResponse(true, "User created successfully in Keycloak and database ", u));
                }
                catch (Exception e){
                    return ResponseEntity.status(HttpStatus.OK)
                            .body(new ApiResponse(false, e.getMessage(), null));
                }
            }
        }
    }

    //tested and using it in the front end
    @PreAuthorize("hasAnyAuthority('SuperAdmin', 'Agentesprit')")
    @PutMapping("/UpdateUser")
    public ResponseEntity<ApiResponse> updateUser(@RequestBody UserWrapper user){
        Keycloak k = KeycloakConfig.getInstance();
        UserRepresentation userRep = user.getKeycloakUser();
        User user1 = user.getUser();
        log.info("User id : {}", user1.getId_User());
        UserRepresentation userRepresentation = k.realm("GestionStageRealm").users().search(userRep.getUsername()).get(0);
        userRep.setId(userRepresentation.getId()); // setting the id of the user to be updated
        try {
            k.realm("GestionStageRealm").users().get(userRep.getId()).update(userRep);
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponse(false, e.getMessage(), null));

        }
        user.setKeycloakUser(userRep);
        user1 = userService.UpdateUser(user1);
        user.setUser(user1);
        return ResponseEntity.ok(new ApiResponse(true, "User updated successfully in Keycloak and database ", user));
    }


    //tested and using it in the front end
    @GetMapping("/GetUserByEmail/{email}")
    public UserWrapper getUserByEmail(@PathVariable String email){
        Keycloak k = KeycloakConfig.getInstance();
        log.info("executing getUserByEmail");
        UserWrapper userWrapper = new UserWrapper();
        User u =userService.GetUserByEmail(email);
        userWrapper.setUser(u);
        log.info(u.getEmail() +"   "+ u.getId_User());

        try {
            k.realm("GestionStageRealm").users().searchByEmail(email,true).forEach(
                    user -> {
                        log.info("User: {}", user);
                        userWrapper.setKeycloakUser(user);
                    }
            );
        }
        catch (Exception e){
            log.error(e.getMessage());
        }
        return userWrapper;

    }


    @PreAuthorize("hasAnyAuthority('SuperAdmin', 'Agentesprit')")
    @GetMapping("/GetUserByUserName/{username}")
    public User getUserByUserName(@PathVariable String username){
        return userService.GetUserByUserName(username);
    }

    // tested on postman
    @PreAuthorize("hasAnyAuthority('SuperAdmin')")
    @DeleteMapping("/DeleteUser/{username}")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable String username){
        Keycloak k = KeycloakConfig.getInstance();
        UserRepresentation userRep = new UserRepresentation();
        UserRepresentation userRepresentation = k.realm("GestionStageRealm").users().search(username).get(0);
        userRep.setId(userRepresentation.getId()); // setting the id of the user to be deleted
        try {
            k.realm("GestionStageRealm").users().get(userRep.getId()).remove();
        }
        catch (Exception e){
            log.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.OK)
                    .body(new ApiResponse(false, e.getMessage(), null));
        }
        userService.DeleteUserByUserName(username);
        return ResponseEntity.ok(new ApiResponse(true, "User deleted successfully in Keycloak and database ", null));

    }

    //tested and using it in Postman
    @GetMapping("/Mysession")
    @PreAuthorize("hasAnyAuthority('SuperAdmin')")
    public Authentication authentication(Authentication authentication) {
        log.info("Authentication: {}", authentication);
        return authentication;
    }
    //tested and using it in the front end
    @GetMapping("/GetAllUsers")
    @PreAuthorize("hasAnyAuthority('SuperAdmin')")
    public List<User> getAllUsers(){
        return userService.GetAllUsers();
    }
}
