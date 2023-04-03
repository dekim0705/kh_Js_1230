//노드 추가/삭제 하기 : DOM트리에 새로운 노드를 (1)생성하고, 기존 DOM트리에 (2)연결

// createElement() : 요소 노드를 생성
// <기준노드>.appendChild("자식노드") :자식 요소를 추가(연결)
// const aEl = document.createElement("div"); //div태그 생성
// document.body.appendChild(aEl); //body태그에 연결 (.appendChild : 자식요소)
// aEl.innerText = "Test" //내용(?)삽입


// div 태그 생성하고 하위에 메뉴 리스트 추가 하기
let menuList = document.createElement("ul");
let menuItem1 = document.createElement("li");
let menuItem2 = document.createElement("li");
let menuItem3 = document.createElement("li");
let menuItem4 = document.createElement("li");
let menuItem5 = document.createElement("li");
menuItem1.innerText = "돈까스";
menuItem2.innerText = "오므라이스";
menuItem3.innerText = "짜장면";
menuItem4.innerText = "짬뽕";
menuItem5.innerText = "새우볶음밥";

menuList.appendChild(menuItem1);
menuList.appendChild(menuItem2);
menuList.appendChild(menuItem3);
menuList.appendChild(menuItem4);
menuList.appendChild(menuItem5);

let menuEl = document.querySelector("#menu");
menuEl.appendChild(menuList);

function deleteMenu() {
    menuList.removeChild(menuItem4);
}
function returnMenu() {
    menuList.appendChild(menuItem4);
}

