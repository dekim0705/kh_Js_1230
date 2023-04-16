// 객체 생성 
const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "URL 경로"); // IP주소, port번호, 백엔드가 수신할 컨트롤러
xhr.setRequestHeader("contents-type", "application/json");
const data = { // 객체 리터럴로 생성
    id : 100,
    title : '비동기 통신 연습 하기',
    author : '김비동기'
};

xhr.send(JSON.stringify(data));

