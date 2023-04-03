/*
function addSubject() {
    let subject = document.createElement("li");
    subject.setAttribute("onclick","deleteSubject()");
    let ul = document.querySelector("#subList");
    subject.innerHTML = `${document.frm.subject.value}`;
        if (subject.innerHTML === "") {
            alert("과목을 입력하세요");
        } else {
            ul.appendChild(subject);
        }
    document.frm.subject.value = "";
    console.log(subject);
}

function deleteSubject() {
    let items = document.querySelectorAll("li");
    console.log(items);
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            if(this.parentNode) { // 부모 노드가 있다면
                this.parentNode.removeChild(this); // 부모 노드에서 삭제
                console.log(this.parentNode);
            }
        });
    }
}
*/

function newRegister() {
    let newItem = document.createElement("li"); // ul태그 아래에 추가 할 요소노드 생성
    let subject = document.querySelector("#subject");
    let newText = document.createTextNode(subject.value); // HTML문서에 새로운 텍스트노드를 생성

    newItem.appendChild(newText); // 텍스트노드를 요소노드의 자식 노드로 추가
    let itemList = document.querySelector("#itemList");

    // insertBefore() 메서드는 DOM요소를 특정 요소의 이전에 삽입
    itemList.insertBefore(newItem, itemList.childNodes[0]); // 자식 노드 중 첫번째 노드 앞에 추가

    subject.value ="";

    let items = document.querySelectorAll("li");
    for(let e of items) {
        e.addEventListener("click", function() {
            if(this.parentNode) { //클릭이벤트가 발생한 요소의 부모가 있으면...
                this.parentNode.removeChild(this); // 자식 요소의 이름 = this : 현재 이벤트가 발생한 노드
            }
        });
    }
}
// this : 이벤트가 발생된 요소를 가리키는 것, 동적으로 this가 의미하는것이 바뀜

// jQuery가 가진 장점(기능)을 Js가 다 가지고 있음 
// jQuery가 웹 브라우저 호환을 맞춰줬음 지금은 표준화 단체에서 웹 호환성을 다 맞추고 있음 그래서 쓸 필요 X -> 무거워짐 
// DOM제어는 이미 Js가 다 가지고 있고 동적기능은 React에서 할 수 있음
//3. 비동기 통신 - Js가 지원 


