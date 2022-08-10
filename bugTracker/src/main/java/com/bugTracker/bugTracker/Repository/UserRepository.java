package com.bugTracker.bugTracker.Repository;

import com.bugTracker.bugTracker.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
