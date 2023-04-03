// 즉시 실행 함수(IIFE, Immediately Invoked Function Expression)
// : 함수를 정의하자마자 바로 실행하는 것을 의미 
(function() {
    let message = 'Hello, world!' // 지역 스코프에서만 접근 가능
    console.log(message);
})();

//Callback 함수 : 함수의 실행 결과를 다른 함수로 전달하는 것
//              : 비동기적인 작업을 처리할 때 많이 사용됨 

// 함수 이름 넘기기
function cry() {
    console.log("cry");
}
function sing() {
    console.log("sing");
}
function dance() {
    console.log("dance");
}
// 일반 함수로 호출
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
checkMood("good"); // sing
checkMood("sad");  // cry
// 콜백 함수
function checkMoodCallback(mood, goodCall, badCall) { // goodCall&badCall = 함수
    if(mood === "good") goodCall();
    else badCall();
}
checkMoodCallback("good", dance, cry);      // dance
checkMoodCallback("Not bad", dance, sing);  // sing


/* 타이머 설정과 Callback 함수 */
function buy_tobe(item, price, quantity, callback) {
    console.log(`${item} 상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
    setTimeout(function() { // setTimeout에는 인자 2개 넣을 수 있음: 실행할코드,지연시간
        console.log(`계산이 필요합니다.`);
        let total = price * quantity;
        callback(total);
    }, 2000); // 2초동안 기다림
}
function pay(n) {    
    // stopFlag = true;
    console.log(`지불 할 금액은 [${n}원]입니다.`);
}
buy_tobe("밤고구마", 1000, 5, pay);

// while(true) {
//     console.log("주어진 일을 하는 중");
//     if(stopFlag) break;
// }


