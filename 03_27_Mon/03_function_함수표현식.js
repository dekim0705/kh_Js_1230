// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식
//            : 함수에 식별자가 있으면 네이밍함수, 없으면 익명함수
//            : 호이스팅이 적용되지 않음. 선언되는 위치가 중요함
//            : const 변수명 = function() {}


// 익명 함수 호출
const gugudan = function() { // 함수의 주소가 gugudan에 대입. 상수 X 함수 O
    for(let i = 1; i < 10; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
// console.log(gugudan); // gugudan은 함수라서 변수처럼 실행 X, 호이스팅 X
// console.log(gugudan());
gugudan();


// 화살표 함수로 정의하기 : 익명 함수로만 정의 가능, 호출하려면 함수 표현식(함수를 변수에 대입하는)을 사용해야 함
//                      : ES6에서 추가된 새로운 함수 선언 방식이며, 함수 선언식보다 간결하고 가독성이 좋음
const hi = function() {
    return "Hi!";
}
console.log(hi());

const hi2 = () => "Hi!2";
console.log(hi2());


// 화살표 함수에서 매개변수 정의 : 화살표 함수에서 매개변수가 1개일 경우 () 생략 가능
const sum = num1 => {console.log(num1 * 2);}
sum(10);
const sum1 = (num1, num2) => {console.log(num1 * num2);}
sum1(10, 3);

// 기본값 할당 : 디폴트 매개변수 값을 주는 방법
//            : 매개변수 정의하고 데이터를 전달하지 않으면 undefined가 할당됨 (에러 X)
//            : ES6부터는 기본값 지정 가능
function sum3(a, b) {
    console.log(a,b);
}
sum3();      // 매개변수 없음, undefined undefined
sum3(10,20); // 10 20

function sum4(a = 10, b = 20) { // 기본값 준 상태
    console.log(a, b);
}
sum4(30, 20); // 30 20
sum4();       // 10 20 


// return문 : 함수 외부로 결과를 반환할 때 사용
// 함수 선언식, 호이스팅 O
console.log(sum5(10, 10)); 
function sum5(a = 10, b = 20) { // 매개변수는 왼쪽부터 채워짐
    return a + b;
}
// 화살표 함수 = 익명함수
const sum6 = (a = 10, b = 20) => a + b; // return문이 없어도 값이 sum6에 대입됨
console.log("결과: " + sum6(100, 200));


// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정
let a = 10; // 함수 바깥에 선언 되었기 때문에 '전역변수'
function sum7() {
    console.log(`함수 내부 : ${a}`);
}
sum7();
console.log(`함수 외부 : ${a}`);

function sum7() {
    let b = 7;
    console.log(`함수 내부 : ${b}`);
}
sum7();
// console.log(`함수 외부 : ${b}`); // 함수 sum7내에서 선언되었기 때문에(지역 변수) 외부에서는 사용 불가 

// 블록 스코프
let c = 10;
{
    let d = 20;
    console.log(`코드 블록 내부 c : ${c}`);
    console.log(`코드 블록 내부 d : ${d}`);
}
console.log(`코드 블록 내부 c : ${c}`);
// console.log(`코드 블록 내부 d : ${d}`); // Error. 

// var키워드 : 블록 스코프를 따르지 않고 호이스팅이 발생 함 **var사용X**
var e = 10;
{
    var f = 20;
    console.log(`코드 블록 내부 e : ${e}`);
    console.log(`코드 블록 내부 f : ${f}`);
}
console.log(`코드 블록 내부 e : ${e}`);
console.log(`코드 블록 내부 f : ${f}`); 