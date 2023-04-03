// 마우스에 대한 이벤트 
const btnEl = document.querySelector(".mouse_event");
btnEl.addEventListener("click", function(e) {
    console.log("버튼이 눌러졌습니다." + e);
    console.log("X좌표 : " + e.clientX);
    console.log("Y좌표 : " + e.clientY);
    console.log("마우스가 클릭된 x좌표 : " + e.pageX);
    console.log("마우스가 클릭된 y좌표 : " + e.pageY);
    console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 x축 좌표 : " + e.screenX);
    console.log("모니터의 왼쪽 모서리 기준으로 마우스가 클릭된 y축 좌표 : " + e.screenY);
});

// 키보드에 대한 이벤트 : 많이 쓰임 / 어떤 key가 눌렸는지 전달 가능 
const inputEl = document.querySelector("input");
inputEl.addEventListener("keydown", function(event) {
    console.log(`keyCode : ${event.keyCode}`);
    console.log(`ctrlKey : ${event.ctrlKey}`);
    console.log(`altKey : ${event.altKey}`);
    console.log(`shiftKey : ${event.shiftKey}`);
});
// 응용 : while loop돌리면서 어떤 키가 눌렸는지 확인 가능 


// (중요!) preventDefault() : 태그에 기본으로 연결된 이벤트를 취소하기 
// HTML태그 일부는 기본 이벤트가 적용되어 있음. a, form태그가 해당 
// target속성은 이벤트가 발생한 요소를 나타 냄(리액트에서 확인 할 예정)

// a 태그 예제
const aEls = document.querySelectorAll("a");
for(let e of aEls) {
    e.addEventListener("click", function(e) {
        e.preventDefault();         //기본 이벤트 취소 (링크 이동 삭제)
    });
}

// form 태그 예제
const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    const username = form.elements.username.value;
    // 입력된 사용자 이름을 사용하여 다른 작업 수행
    });
