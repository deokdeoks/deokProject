import { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import CreateDashBoadr from "./component/CreateDashBoard";
import CreateDashBoard from "./component/CreateDashBoard";

function App() {
    const [boards, setBoards] = useState([]);

    const fetchBoards = () => {
        fetch("http://localhost:8080/api/boards")
            .then((res) => res.json())
            .then((data) => setBoards(data))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        fetchBoards();
    }, []);

    return (
        <div className="App">
            <Header/>
            <Home boards ={boards} refreshBoards={fetchBoards}/>
            <Footer/>
        </div>
    )
}



export default App;
