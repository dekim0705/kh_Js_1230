/* 
/*속성으로 노드 선택하기 
let doc = document.firstChild;
console.log(doc);

let html = document.firstElementChild; // 첫번째 자식 노드를 반환
console.log(html);
*/

/* 메서드로 노드 선택하기 */
//getElementById("id") : id 속성값과 일치하는 요소 노드 1개만 선택
const el = document.getElementById("title");
console.log(el);

//getElementsByClassName("classname") : class 이름과 일치하는 값들이 배열 처럼 (유사배열)관리 됨
//                                    : 인덱스로 접근 가능
const classEl = document.getElementsByClassName("text");
console.log(classEl);
console.log(classEl[0]);
console.log(classEl[1]);

//향상된 for문과 유사
for(let el of classEl) {
    console.log(el);
}

//getElementByTagName("tagname") : 태그명과 일치하는 요소 노드를 모두 선택
const tagEl = document.getElementsByTagName("p");
for(let el of tagEl) {
    console.log(el);
}

/* CSS선택자 사용하기 - query메서드
    querySelector : returns the first Element that matches-
    querySelectorAll : 인덱스 사용 가능 */
const qEl = document.querySelector(".box-1");
console.log(qEl);

const qElTxt = document.querySelector(".box-1 .text");
console.log(qElTxt); //text-1
const qElTxtAll = document.querySelectorAll(".box-1 .text");
console.log(qElTxtAll); //nodeList(2)
console.log(qElTxtAll[0]); 
console.log(qElTxtAll[1]); 


//------------------------------------------------------------------
//노드 조작하기
// display: none - 화면에 나타나지 않음
//textContent: 요소 노드의 모든 텍스트에 접근
//innerText  : 요소 노드의 텍스트 중 웹 브라우저에 표시되는 텍스트에 접근
//innerHTML  : 요소 노드의 텍스트 중 HTML태그를 포함한 텍스트에 접근
let txtCont = document.getElementById("title2").textContent;
let inTxt = document.getElementById("title2").innerText;
let inHtml  = document.getElementById("title2").innerHTML;
console.log(txtCont);   //Hello, JavaScript!!
console.log(inTxt);     //Hello,
console.log(inHtml);    //Hello, <span style="display: none">JavaScript!!</span>


let inTxt2 = document.getElementById("title2").innerText = `<h1>innerText test</h1>`
console.log(inTxt2); 
let inHtml2  = document.getElementById("title2").innerHTML = `<h1>innerHTML test</h1>`
console.log(inHtml2);

//스타일 조작하기 : 선택된 노드의 스타일(CSS) 지정하거나 변경
const sEl = document.querySelectorAll(".text");
// sEl.style.backgroundColor="salmon";
// sEl.style.fontSize = "50px";
// sEl.style.color = "white";
for(let el of sEl) {
    el.style.backgroundColor="salmon";
    el.style.fontSize = "20px";
    el.style.coloir = "white";
}

