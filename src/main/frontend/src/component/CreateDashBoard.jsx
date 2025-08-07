import { useState } from "react";

function CreateDashBoard({ refreshBoards }) {
    const styles = {
        container: {
            maxWidth: '600px',
            margin: '40px auto',
            padding: '30px 40px',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        },
        title: {
            marginBottom: '25px',
            color: '#333',
            fontWeight: '700',
            fontSize: '28px',
            textAlign: 'center',
        },
        input: {
            width: '100%',
            padding: '12px 15px',
            marginBottom: '20px',
            border: '1.5px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            transition: 'border-color 0.3s ease',
        },
        textarea: {
            width: '100%',
            padding: '12px 15px',
            marginBottom: '20px',
            border: '1.5px solid #ddd',
            borderRadius: '8px',
            fontSize: '16px',
            outline: 'none',
            resize: 'vertical',
            transition: 'border-color 0.3s ease',
        },
        button: {
            width: '100%',
            padding: '14px',
            backgroundColor: '#4a90e2',
            border: 'none',
            borderRadius: '8px',
            color: 'white',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
    };

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

        <div style={styles.container}>
            <h2 style={styles.title}>새 게시글 작성</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                    required
                    style={styles.input}
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용"
                    required
                    rows={6}
                    style={styles.textarea}
                />
                <button type="submit" style={styles.button}>
                    등록
                </button>
            </form>
        </div>
    );
}

export default CreateDashBoard;