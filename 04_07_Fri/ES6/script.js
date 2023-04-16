// Array 메소드 : ES5에서 추가 되었으며, 코드를 간결하고 효율적으로 만들어줌
//            : 원본 데이터를 변형 시키지 않음
// Array.forEach() : 배열의 각 요소를 순회하며, 요소에 대해 지정된 함수를 실행하는 메소드
// Array.map()     : 배열의 모든 요소를 순회하면서 새로운 배열을 만드는 메소드
// Array.filter()  : 배열의 요소 중에서 조건을 만족하는 요소만 추출하여 배로운 배열을 만드는 메소드
// Array.reduce()  : 배열의 모든 요소를 순회하며, 순회 과정에서 누적값을 사용하여 하나의 결과값을 만드는 메소드

// forEach()
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});

let numbers2 = [1,2,3,4,5];
numbers.forEach(num => console.log(num)); // 화살표 함수


// map()
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares);

let squares2 = numbers.map(num => num * num);
console.log(squares2); // 반환받은 값으로 새로운 배열 생성


// filter()
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); 

let evenNumbers2 = numbers.filter(num => num % 2 == 0);
console.group(evenNumbers);


// reduce() : 입력 받은 값을 하나씩 소모하면서 더해나가는 것
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0); // 0 is an initial value which can be skipped
console.log(sum);

let sum2 = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

/* ---------------------------------------------------------------- */

// ES6 : Js의 6번째 버전으로, 2015년에 발표
//     : 가변 변수(let) & 불변 변수(const)
//     : Js도 기본 타입과 객체 타입으로 나누어 지며, 객체 타입의 경우 주소를 가짐

let arrLet = [1,2,3]; 
arrLet = [4,5,6]; // let로 선언 시 객체의 주소 변경 가능
console.log(arrLet);

const arrConst = [1,2,3];
// arrConst = [4,5,6]; // const로 선언 시 객체의 주소 변경 불가

const arrConst1 = [1,2,3]; // 내부 요소 변경 가능. 주소는 바뀌지 않음
arrConst1[0] = 100;
arrConst1[1] = 200;
arrConst1[3] = 300;
console.log(arrConst1);


// concat() : 새로운 배열을 만들어서 값을 할당. arr1과 arr2의 값이 변경되지 않고 그대로 유지됨
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr = arr1.concat(arr2);
console.log(newArr);

// 화살표함수(Arrow Function) : 간단하고 간결한 코드를 작성하는 데 유용
const add = function(x, y) { // 기존의 함수 표현식 
    return x + y;
}
const add1 = (x, y) => x + y; // 화살표 함수


// 화살표 함수 사용시 this 문제 해결
// 기존의 함수 정의 방식에서 함수 내부에서 this키워드를 사용하는 경우, 
// 호출되는 위치에 따라 참조하는 객체가 다르게 결정되는 문제가 있음
const obj = {
    name : "Meredith Grey",
    func1() {
        const func2 = function() {
            console.log(this.name);
        }     
        func2(); // func2는 함수 표현식이기 때문에 호이스팅이 되지 않아서 따로 불러줘야 함   
    }
};
obj.func1(); // undefined

const obj1 = {
    name : "Meredith Grey",
    func1() {
        const func2 = () => { // this는 위에서 상속 주는 값을 그대로 가지고 내려옴 (직접 가진 값 X)
            console.log(this.name);
        }     
        func2();   
    }
};
obj1.func1(); // Meredith Grey



// const btn = document.getElementById("myButton");

// btn.addEventListener("click", () => {
//     console.log(this); // this가 없어서 최상위(window)로 올라감
// });

// btn.addEventListener("click", () => {
//     console.log(btn); // 
// });

// btn.addEventListener("click", function() {
//     console.log(this); // 내부적으로 this에 대해 동적바인딩을 하고 있음 
// });

/*
// 익명의 함수 사용 불가한 경우 : function()을 넣어줘야 함
const pEls = document.querySelectorAll("p"); // <p>들이 유사배열로 들어옴
pEls.forEach(e => e.addEventListener("click", function() { // forEach()로 element마다 "click" 이벤트 걸기
    console.log(this);
}))
*/

// 템플릿 리터럴(Template Literal) : 백틱(Backtick)으로 묶는 문자열
//                              : 변수를 쉽게 포함할 수 있고 여러줄의 문자열을 쉽게 표시 가능
const name = "Meredith";
const job = "General Surgeon";
const message = `
Dr.${name} is Seattle Grace hospital's 
${job}.
`;
console.log(message);


// 전개 연산자(Spread operator) : 배열이나 객체를 개별 요소로 분리하고 이를 이용해 배열을 합치거나 객체 병합 가능

// 배열 
const arr10 = [1,2,3];
const arr20 = [4,5,6];
const newArr1020 = [...arr1, ...arr2];
console.log(newArr1020);

// 객체
const obj10 = {x:1, y:2};
const obj20 = {z:3, w:4};
const newObj1020 = {...obj10, ...obj20};
console.log(newObj1020);

// 배열이나 객체의 복사본을 만들 때도 유용
const arr30 = [1,2,3];
const newArr30 = [...arr30]; // arr30을 복사한 새로운 배열. arr30의 요소를 개별적으로 분리하고 [1,2,3]을 새로운 배열로 생성
console.log(newArr30);


// 전개 연산자를 이용한 가변 인수 함수 만들기
function sumFunc(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumFunc(1,2,3,4,5)); // 15


