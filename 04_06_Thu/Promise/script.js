// Fetch API : XMLHttpRequest방식과 가장 큰 차이점은 Promise 방식으로 구현
// Restful API : 프론트와 백이 분리 되어있는 전제에서 HTTP방식의 비동기 통신, 주고받는 데이터가 일반적으로 json타입 
//             : GET POST PUT DELETE (CRUD)

// id가 1인 데이터 조회
// get 쓰지 않아도 json형태 이기 때문에 전달된다(????)
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json())
// .then((json) => console.log(json))
// .catch((error) => console.error(error));


//POST - 데이터 생성
fetch("https://jsonplaceholder.typicode.com/posts", { // 리터럴객체 안에 method, body, headers 넣음
    method: "POST", //HTTP 요청 방법
    body: JSON.stringify({ // stringfy()안에 리터럴객체를 바로 넣은 것! 
        //전송할 데이터
        title: "테스트 Promise",
        body: "과연 될까요? 너무 어려운 네트워킹~",
        userId: 1,
    }),
    headers: {
        //헤더 값 정의
        "content-type": "application/json; charset=UTF-8",  //content-type 정의
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));


//PUT - 데이터 수정
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        id: 1,
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

    //DELETE - 데이터 삭제
    // fetch("https://jsonplaceholder.typicode.com/posts/1", {
    // method: "DELETE",
    // });


    // Promise를 통한 비동기 제어 방법 : 결과값은 내부객체이기 때문에 then과 catch로만 접근이 가능
    const successPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Sucess");
        }, 3000); // 3초 후에 resolve들어옴
    });
    successPromise.then(function(value) {
        console.log(value);
    });

    successPromise.then((value) => console.log(value));
