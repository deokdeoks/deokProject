package com.example.deokproject.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DbTestController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping("/api/db-check")
    public String checkDbConnection() {
        Integer result = jdbcTemplate.queryForObject("SELECT 1 FROM DUAL", Integer.class);
        return "DB 연결 성공: " + result;
    }
}


