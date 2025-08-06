import { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/boards")
            .then((res) => res.json())
            .then((data) => setBoards(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="App">
            <Header/>
            <Home boards ={boards} />
            <Footer/>
        </div>
    )
}



export default App;
