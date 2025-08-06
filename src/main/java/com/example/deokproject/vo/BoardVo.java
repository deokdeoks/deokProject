package com.example.deokproject.vo;

import oracle.sql.DATE;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardVo {
    private Long boardId;
    private String title;
    private String content;

    public Long getBoardId() { return boardId; }
    public void setBoardId(Long boardId) { this.boardId = boardId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
