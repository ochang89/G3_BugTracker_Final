package com.bugTracker.bugTracker.Controller;

import com.bugTracker.bugTracker.Model.User;
import com.bugTracker.bugTracker.Repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/user_list")
    public List<User> list(){
        return this.userRepository.findAll();
    }

    @PostMapping("/create_user")
    public User createUser(@RequestBody User user){
        return this.userRepository.save(user);
    }

    @DeleteMapping("delete_user/{id}")
    public void deleteUser(@PathVariable Long id){this.userRepository.deleteById(id);}

    @PutMapping("/update_user/{id}")
    public void updateUser(@RequestBody User userInput,@PathVariable long id){
        User user = this.userRepository.findById(id).get();
        user.setUserId(userInput.getUserId());
        user.setFirstName(userInput.getFirstName());
        user.setLastName(userInput.getLastName());
        user.setUserName(userInput.getUserName());
        this.userRepository.save(user);

    }


}