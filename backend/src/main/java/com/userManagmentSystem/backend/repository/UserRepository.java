package com.userManagmentSystem.backend.repository;

import com.userManagmentSystem.backend.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
