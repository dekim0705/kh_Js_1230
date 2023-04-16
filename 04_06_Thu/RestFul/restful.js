// HTTP기반의 비동기 통신 전제 + json형태로 데이터 주고받음(프로그램 언어에 종속 X)




// 종속관계가 생기지 않도록 서버는 클라이언트 상태를 유지하지 않음 (서로의 상태 or 정보를 알고 있을 필요 없음)

/*
// GET 요청
fetch("http://localhost:3000/comments")
    .then((response) => response.json())
    .then((json) => console.log(json)); //전체 데이터 조회

fetch("http://localhost:3000/comments/1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //id로 조회

fetch("http://localhost:3000/comments?postId=1")
    .then((response) => response.json())
    .then((json) => console.log(json)); //query로 postId=1로 조회
*/

// POST 요청 (데이터가 계속계속 생성되는데..?)
fetch("http://localhost:3000/posts", {
    method: "POST", //HTTP 요청 방법
    body: JSON.stringify({
        // 전송할 데이터
        title: "리액트",
        author: "패이스북",
    }),
    headers: {
      //헤더 값 정의
      "content-type": "application/json; charset=UTF-8", //content-type 정의
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));