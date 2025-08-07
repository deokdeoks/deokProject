package com.example.deokproject.controller;

import com.example.deokproject.vo.BoardVo;
import com.example.deokproject.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/boards")
@CrossOrigin(origins = "http://localhost:3000") // React 개발 서버 허용

public class BoardController {

    @Autowired
    private BoardService boardService;


    // 직접 생성자 추가
//    public BoardController(BoardService boardService) {
//        this.boardService = boardService;
//    }

    @GetMapping
    public List<BoardVo> getBoards() {
        return boardService.findAll();
    }

    @PostMapping
    public String addBoard(@RequestBody BoardVo board) {
        int result = boardService.insert(board);
        return result == 1 ? "Insert success" : "Insert failed";
    }

    @PutMapping("/{id}")
    public String updateBoard(@PathVariable Long id, @RequestBody BoardVo board) {
        board.setBoardId(id);
        int result = boardService.update(board);
        return result == 1 ? "Update success" : "Update failed";
    }

    @DeleteMapping("/{id}")
    public String deleteBoard(@PathVariable Long id) {
        int result = boardService.delete(id);
        return result == 1 ? "Delete success" : "Delete failed";
    }
}
