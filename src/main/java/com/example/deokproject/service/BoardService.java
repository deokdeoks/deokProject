package com.example.deokproject.service;

import com.example.deokproject.vo.BoardVo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor

public class BoardService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<BoardVo> findAll() {
        String sql = "SELECT BOARD_ID, TITLE, CONTENT FROM BOARD";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            BoardVo board = new BoardVo();
            board.setBoardId(rs.getLong("BOARD_ID"));   // NUMBER -> Long
            board.setTitle(rs.getString("TITLE"));
            board.setContent(rs.getString("CONTENT"));  // 세터는 setContent
            return board;
        });
    }
}
