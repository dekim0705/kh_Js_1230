// 한 줄 주석

/*
여러 줄 주석
*/

/*
변수(Variable)와 상수(Constant) : 자료 타입이 없음 (입력 받을 때 들어오는 값으로 타입 구분)
변수 선언 키워드 : var, let(ES6부터 추가)
                : var 중복 선언 가능 (오류 유발 가능성)
                : let 중복 선언 불가능 
상수 선언 키워드 : const(ES6부터 추가)
*/

let num = 20 + 30;
console.log(num);
let name = "냠냠이";
console.log(name);


var num1 = 10 + 30;
var num1 = 50; 
console.log(num1); // 중복 선언 때문에 콘솔에 50이 나옴

console.log(test); // undefined
var test = 100;
console.log(test); // 100


/*
호이스팅(Hoisting) : Js에서 변수 및 함수 선언이 scope의 최상단으로 끌어 올려지는 것을 의미
                  : 변수와 함수 선언을 scope의 제일 위에서 하도록 권장 -> 코드의 가독성과 유지보수성 향상
*/


// 자료형 - 문자열

let string = "Hello, World!\n";
console.log(string);

let string1 = "안녕하세요. 저는 '머핀앤너츠'입니다.\n";
console.log(string1);

let string2 = '안녕하세요. 저는 "머핀앤너츠"입니다.\n';
console.log(string2);

let string3 = '문자열' + " 연결 연산자" + ": + 를 사용했어요.\n";
console.log(string3);

let string4 = "이스케이프 문자를 이용\n\\n : 줄바꿈\n\\' : 작은 따옴표\n\\\" : 큰 따옴표\n\\t : 수평 탭\n\\\\ : 역슬래시\n";
console.log(string4);

let string5 = `템플릿 문자열 : 백틱으로 문자열을 정의하는 방법\n`;
console.log(string5);

let name1 = "Muffin";
let string6 = `귀여운 ${name1} 부농토끼\n`;
console.log(string6)

let dan = 3;
let gugu = 8;
let string7 = `${dan}곱하기 ${gugu}은 ${dan * gugu}입니다.\n`;
console.log(string7);


// 자료형 - 숫자형(Number)

// Js는 정수와 실수를 구분하지 않고 전부 하나의 숫자 자료형으로 취급
let num2 = 10;
let num3 = 0.1;
console.log(num2);          // 10
console.log(num3);          // 0.1
console.log(num2 + num3);   // 10.1

let sum = 0.1 + 0.2;
console.log(sum); // 0.3000000...
// 실수계산은 근사치 계산법을 하기 때문에 정확한 실수값이 아닌 근사치가 나옴


// toString() : 숫자형 데이터를 문자형 데이터로 반환
let x = 123;
x.toString();
console.log(x);


// 논리형 : 참과 거짓을 구분 (true/false)
let age = 12;
let isAdult = (age > 18) ? true : false;
if(isAdult) console.log("성인 입니다.");
else console.log("성인이 아닙니다.");
// document.write(isAdult); // true


// 특수 자료형 : undefined, null
// undefined : 변수와 상수 선언 시 생성한 저장 공간에 저장할 테이터를 할당 해야 함.
//             할당하지 않을 경우, Js 내부적으로 임시 데이터가 할당되고, 해당 할당값이 undefined 
let empty;
console.log(empty);
// null : 의도적으로 선언한 공간을 비워 둘 때 사용
let empty2 = null;
console.log(empty2);