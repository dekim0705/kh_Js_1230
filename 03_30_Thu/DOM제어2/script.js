//클래스 속성 조작하기 
const el = document.querySelector("#text");
// classList : 선택한 요소 노드의 class속성을 지정할 때 사용 (add(), remove())
el.classList.add("active","blue-color"); //add(): class속성 추가
el.classList.remove("blue-color");       //remove(): class속성 제거 


//------------------------------------------------------------------------------
//메소드 속성으로 조작하기 : 모든 속성을 전체적으로 변경할 수 있음
//                       : gettAttribute(), setAttribute(), removeAttribute()

// .getAttribute("속성명"): 속성값을 가져옴
const aEl = document.querySelector("a"); //a태그를 선택
const href = aEl.getAttribute("href");
console.log(href); //http://google.co.kr

// .setAttribute("속성명", "속성값") : 속성값을 설정
aEl.setAttribute("href", "http://kakao.com"); //href를 카카오로 변경
aEl.innerText = "카카오"; //'구글'을 '카카오'로 변경

// .removeAttribute("속성명") : 속성을 삭제
aEl.removeAttribute("href");


