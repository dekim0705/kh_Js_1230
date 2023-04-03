// 폼 요소의 시작은 항상 form 태그
// 폼 요소에는 input, select, button태그 등이 있음
// 폼 요소를 선택 할 때는 elements속성이나 name속성(♥)을 사용


// document.frm.id.value = "김냠냠"
// document.frm.pw.value = "Qwerty12345!"

function inputCall() {
    let id = document.frm.id.value;
    console.log(id);
    let pwd = document.frm.pw.value;
    console.log(pwd);
    let desc = document.frm.desc.value;
    // console.log(desc);
    document.frm.desc.value = "Setting!"; // 값이 화면에 나옴
}

// 체크박스 다루기 : 체크박스도 value속성으로 값을 가져올 수 있음
const checkEl = document.querySelectorAll("[type='checkbox']");
for(let e of checkEl) {
    // e.checked = true;
    // console.log(e.value);
    if(e.value !== "orange") e.checked = true;
}


// 라디오 박스
const radioEl = document.querySelectorAll("[type='radio']");
for(let e of radioEl) {
    if(e.value === "orange") e.checked = true;
}

// 콤보박스
const optionEl = document.querySelectorAll("option");
for(let e of optionEl) {
    if(e.value === "banana")
    e.selected = true;
}


// 파일 업로드
// 지금은 업로드되는 이미지 경로만 js에서 확인
// 함수로 묶어줘야 함(?)
function upload() {
const filePath = document.frm2.upload.files;
console.log(filePath);
}