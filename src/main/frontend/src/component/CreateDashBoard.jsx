import { useState } from "react";

function CreateDashBoard({ refreshBoards }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/boards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, content }),
        })
            .then(() => {
                alert("게시글이 등록되었습니다.");
                setTitle("");
                setContent("");
                refreshBoards(); // 부모에서 목록 새로고침 요청
            })
            .catch((err) => console.error(err));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>새 게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                    required
                /><br />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용"
                    required
                ></textarea><br />
                <button type="submit">등록</button>
            </form>
        </div>
    );
}

export default CreateDashBoard;