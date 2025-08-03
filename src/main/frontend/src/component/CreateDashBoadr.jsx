export default function CreateDashBoadr(){
    const [menus, setMenus] = useState([]);

    function getMenus(){
        /*
            CORS 정책 위반

            모든 브라우저는 보안상의 이유로 동일한 출처(Origin)가 아닌 경로에서 들어오는
            리소스 요청에 대해서는 전부 차단을 함

            * Origin ? 프로토콜 + ip주소 + 포트번호 => http://localhost:3000

            cors 정책은 값을 내려주는 서버측에서 허용을 해줘야지 요청/응답이 가능하다.
        */
        // 1차) 비동기요청 보내기
        axios
            .get("http://localhost:8083/springboot/menus")  // 전달할 데이터가 있다면 , {} 이런 형식으로 붙혀서 보내야하는데 전달할 데이터없기때문에 생략가능
            // 2차) 요청받은 데이터로 setMenus함수 호출
            .then(response => setMenus(response.data))
    }

    return(
        <>
            <div className='menu-test'>
                <h4>전체메뉴조회기능(GET)</h4>
                <input type='button' className='btn btn-block btn-outline-success btn-send'
                       id='btn-menus' value="전송" onClick={getMenus} />
            </div>
            <div id="menus-result" className='result'>
                <table className="table">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>음식점</th>
                        <th>메뉴</th>
                        <th>가격</th>
                        <th>타입</th>
                        <th>맛</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        menus.map((menu) => {
                            return (
                                <tr key={menu.id}>
                                    <td>{menu.id}</td>
                                    <td>{menu.restaurant}</td>
                                    <td>{menu.name}</td>
                                    <td>{menu.price}</td>
                                    <td>{menu.type}</td>
                                    <td>{menu.taste}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}