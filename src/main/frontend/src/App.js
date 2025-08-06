import { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("DB 상태 확인중...");

    useEffect(() => {
        fetch("/api/db-check")
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch((err) => setMessage("에러: " + err));
    }, []);

    return <h1>{message}</h1>;
}

export default App;
