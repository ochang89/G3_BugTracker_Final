package com.bugTracker.bugTracker.Controller;

import com.bugTracker.bugTracker.Model.User;
import com.bugTracker.bugTracker.Repository.UserRepository;
import com.bugTracker.bugTracker.ResourceNotFoundException.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
// reroute to error responseErrorException class

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> list(){
        return this.userRepository.findAll();
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        User users = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + userId));
        return ResponseEntity.ok(users);
    }

    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return this.userRepository.save(user);
    }

    @DeleteMapping("/users/{userId}")
        public ResponseEntity<Map<String, Boolean> > deleteUser(@PathVariable Long userId){
            User users = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + userId));
            this.userRepository.deleteById(userId);
            Map<String,Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return ResponseEntity.ok(response);
        }

    @PutMapping("/users/{userId}")
    public ResponseEntity<User> updateUser(@RequestBody User userInput,@PathVariable Long userId){
        User users = this.userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + userId));
        users.setUserName(userInput.getUserName());
        users.setFirstName(userInput.getFirstName());
        users.setLastName(userInput.getLastName());
        User updateUser = userRepository.save(users);
        return ResponseEntity.ok(updateUser);

    }
}