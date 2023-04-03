// 함수란 ?
// 입력값을 검증하고 예외처리 가능(try~catch) (무결성의 원칙: 동일한 값을 받아서 동일한 결과를 내야 함)
// 전역 변수 사용 less, 함수 내에서만 유요한 변수 선언 (입력값을 매개변수로 넣고 return으로 빼기)
// 비동기적으로 실행되는 코드처리를 위해 콜백 함수 정의 (작업 대기 X , 일이 끝나면 알려주는 것 = 콜백)
// 객체 생성후, 객체의 속성과 메소드를 정의
// 함수를 인자로 받아 다른 함수에서 실행 (주로 콜백의 개념)

// Js 함수의 종류
// 1. 함수 선언문: function키워드로 선언, 함수이름을 가짐, 호이스팅에 영향을 받음
// 2. 함수 표현식: 
// 3. 화살표 함수: 
// 4. 기명 함수 표현식: 
// 5. 즉시 실행 함수: 선언후 즉시 실행 (예외적인 경우)
// 6. 생성자 함수: new키워로 객체 생성
// 7. 메소드: 객체 내에 함수가 들어가면 = 메소드
// 8. 콜백 함수: **
// 9. 클로저: Java의 접근제한자와 비슷한 개념
// 10. 재귀 함수: 함수 내부에서 자신을 호출하는 함수


// 함수 선언문
function sum(p1, p2) { // 함수 선언
    let sum = p1 + p2; // 이 부분 없이 바로 return p1 + p2; 가능
    return sum;
}
let sum1 = sum(21, 24); // 함수 호출
let sum2 = sum(1, 16);  // 함수 호출
console.log(sum1, sum2);
// 함수 호출이 선언의 위로 올라가도 가능(호이스팅)
// 호이스팅 : 함수나 변수가 해당 scope의 최상단으로 끌어 올려진 것 같은 현상을 말함 (해당하는 파일의 최상단)
//         : 호이스팅의 영향을 받는다는 건 함수가 선언된 위치에 상관없이 호출하여 실행할 수 있음을 의미

// 함수와 switch문 사용
function calculator(n1, n2, op) {
    switch(op) {
        case "+": return add(n1, n2); // add함수의 결과 값이 반환 됨
        case "-": return sub(n1, n2); 
        case "*": return mul(n1, n2); 
        case "/": return div(n1, n2); 
    }
}
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

console.log(`add : ${calculator(10, 20, "+")}`); // 호이스팅 가능
console.log(`sub : ${calculator(10, 20, "-")}`);
console.log(`mul : ${calculator(10, 20, "*")}`);
console.log(`div : ${calculator(10, 20, "/")}`);








