// 이벤트 등록하기 : 이벤트가 발생할 때 어떤 작업을 할것인지 Js코드로 작성하는 것

function clickEvent() {
    alert("인라인 방식으로 구현된 함수가 호출 되었습니다.");
}

function focusEvent() {
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "orange";
}
function blurEvent() {
    let inputBox = document.querySelector("#input_box");
    inputBox.style.background = "green";
}

// 프로퍼티 리스너 방식으로 이벤트 등록하기
const btnEl = document.getElementById("prt_btn");
btnEl.onclick = () => alert("프로퍼티 방식으로 구현된 함수가 호출 되었습니다.");

// 이벤트 등록 메소드로 이벤트 등록하기
// <노드>.addEventListener("이벤트타입", 함수);
const regBtnEl = document.getElementById("reg_btn");
regBtnEl.addEventListener("click", function () { // 함수내에 함수가 들어가는 콜백함수.재사용을 많이 할 시에는 외부에 만들어두고 익명함수아닌 함수를사용해도됨
    alert("이벤트 등록 메소드로 구현된 함수가 호출 되었습니다.");
})


const regBtnEl2 = document.getElementById("reg_btn2");
regBtnEl2.addEventListener("click", eventFunc);


function eventFunc() { 
        alert("이벤트 등록 메소드로 구현된 외부에 있는 함수가 호출 되었습니다.");
}