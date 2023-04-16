const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체 생성
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("content-type", "application/json");
const data = {
    id : "Grey\'s",
    pwd : "anatomy19",
    name :  "Meredith",
    addr : "Seattle"
}
xhr.send(JSON.stringify(data)); // XMLHttpRequest객체를 사용하여 서버로 HTTP요청을 보내는 메서드


// XMLHttpRequest객체를 사용하여 서버로부터 HTTP응답을 받았을 때 호출되는 콜백 함수를 설정하는 프로퍼티
xhr.onload = () => { 
    if (xhr.status === 201) { 
        // 정상적으로 응답되면 status가 201
        const res = JSON.parse(xhr.response);
        console.log(res); 
    } else {
        // 에러 발생
        console.error(xhr.status, xhr.statusText);
    }
}; // 응답이 없을때를 대비해서 타이머 사용해서 정해둔 시간 만큼 응답이 없으면 종료하기

