/* 이벤트 핸들러에서 콜백 함수 사용하기 */
// let button = document.querySelector('#myButton'); // 첫번째 요소는 querySelector로 바로 찾을 수 있음
// button.addEventListener('click', function() { // button에 addEventListener를 등록
//     console.log('Button clicked');
// })
// // button.addEventListener('click', function(){console.log('BUTTON CLICKED');})
// // 버튼이 클릭되었을 때 실행할 함수를 지정하고 있음 


// CallBtn 함수 꺼내서 사용하기
// let button2 = document.querySelector('#myButton2');
// button2.addEventListener('click', callBtn);
// function callBtn() {
//     console.log("Button clicked2");
// }



/* 클로저: 함수가 해당 함수의 스코프 외부에 있는 변수에 접근할 수 있는 메커니즘 (getter/setter개념)
        : 함수 내부에서 외부 변수를 수정하거나 참조하는것이 가능     
*/
function makeCounter() {
    let count = 0;
    return function() { // function자체가 getter역할을 하는 것 
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter();
counter();
counter();


return function() {count++; console.log(count);};
