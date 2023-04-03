/* 배열을 다루는 Array 객체 */

/* foreach(): 비파괴적인 메소드이며, 요소를 순회
            : an iterative method
            : It calls a provided callbackFn function once for each element in an array in ascending-index order
*/
const arr = [10, 20, 30, 40, 50];
arr.forEach(function(n) { // 반복자 n을 넣어줘야 함
    console.log(n);
})


const array1 = ['a', 'b', 'c'];
array1.forEach(n => console.log(n));


/* 
toString(): 배열안의 모든 문자를 쉼표(,)로 모두 결합해서 하나의 문자열로 반환 */
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

/* 
join(): 배열안의 모든 문자를 파라미터로 지정한 문자를 이용해서 모두 결합 */
console.log(fruits.join(`*`)); 

/*
pop(): 스택 자료구조. 배열에서 마지막 데이터를 제거하고 해당 데이터를 반환
push(): 스택자료구조. 배열에 새로운 요소(데이터, 객체 등)를 추가
*/
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.pop());
console.log(fruits2.pop());
console.log(fruits2.pop());
console.log(fruits2.pop());
console.log(fruits2); // [] (빈 배열)

fruits2.push("Banana");
fruits2.push("Orange");
fruits2.push("Apple");
fruits2.push("Mango");
fruits2.push("Kiwi");
console.log(fruits2); // [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

/*
shift(): 배열에서 첫 번째 요소를 제거하고, 해당 요소를 반환
unshift(): 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
*/
console.log(fruits2.shift()); // Banana
console.log(fruits2); // [ 'Orange', 'Apple', 'Mango', 'Kiwi' ]

console.log(fruits2.unshift("Lemon")); // 5


/* 
배열 요소 변경: 변경하고자 하는 배열 인덱스로 접근하고 새로운 요소 할당 */
let numArr = ["0", "2", "3", "4"];
numArr[0] = "1";
console.log(numArr); // [ '1', '2', '3', '4' ]


/*
concat(): 2개 이상의배열을 하나의 배열로 결합, 비파괴적 */
let arr5 = ["사과", "딸기", "참외"];
let arr6 = ["포도", "수박", "바나나"];
let arr7 = ["키위", "망고", "오렌지"];
let arr8 = ["복숭아", "자두", "멜론"];
let totFruits = arr5.concat(arr6, arr7, arr8);
console.log(totFruits);

/*
slice(): 비파괴적, 2개의 파라미터 -> 1.시작 인덱스 2. 종료 인덱스(opt)*/
let fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits4.slice(3); console.log(citrus); 
let citrus2 = fruits4.slice(1,3); console.log(citrus2);

/*
sort(): 배열 요소 정렬 */
console.log(fruits4.sort());    // 오름차순
console.log(fruits4.reverse()); // 내림차순

/**
filter(): 배열에서 특정 조건을 만족하는 요소만을 찾아 새로운 배열로 반환 */
// 외부데이터는 json형태로 들어오고 아래 배열(배열 내에 객체가 들어간 형태)로 변경 후 필요한 요소 찾아서 써야함
let persons = [
    {
        name:"유재석",
        point: 78,
        city: "서울",
    },
    {
        name:"김종국",
        point: 92,
        city: "서울",
    },
    {
        name:"양세찬",
        point: 76,
        city: "제주",
    },
    {
        name:"하하",
        point: 81,
        city: "서울",
    },
];
let pass = persons.filter(person => person.point > 80);
                        // person 순회할 요소, 순회 할 이름을 정해주는 것
console.log(pass);

/* 날짜와 시간을 다루는 Date 객체 */
const date = new Date();
console.log(date);

// 인스턴스 만들기
//  월은 0부터 시작, GMT기준 시간으로 설정됨
const date1 = new Date(2022, 11, 27, 18, 30, 50);
console.log(date1);
//  원하는 달로 입력 됨
const date2 = new Date("2022-12-25/18:30:50");
console.log(date2);

//  Date객체의 메소드
let myDate = new Date();
console.log(myDate.getFullYear());  // 현재 연도 출력
console.log(myDate.getMonth()+1);     // 현재 월 출력 (0부터 시작)
console.log(myDate.getDate());      // 현재 날짜 출력
console.log(myDate.getDay());       // 현재 요일 출력
console.log(myDate.getHours());     // 현재 시간 출력
console.log(myDate.getMinutes());   // 분 출력
console.log(myDate.getSeconds());   // 초 출력
console.log(myDate.getTime());      // 1970년 1월 1일 0시 0분 부터 지금까지의 경과 시간 

/* Set 객체: Js에서 제공하는 데이터 구조 중 하나로, 중복되지 않는 값들을 모아놓은 집합
           : 중복되는 값을 허용하지 않고, 데이터의 순서를 유지함 */
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); // 중복 허용이 되지 않아서 추가되지 않음
console.log(mySet.size); // 3



/* Map 객체: Js에서 제공하는 데이터 구조 중 하나로 key-value pair로 데이터를 저장, 관리
           : 객체와 유사하지만 객체와는 다르게 키에 다양한 자료형을 사용 가능  */
let map = new Map();
map.set("name", "김냠냠");  // 실전에선 넘어오는 데이터를 뽑아서 뿌리는 용도가 많기 때문에 set()사용 빈도 낮음
map.set("email", "yummyk@gmail.com"); // 주로 문자열을 사용, 정수는 문자열 -> 정수 변환해서 사용
map.set("addr", "Seoul, Korea")

console.log(map.size);
console.log(map.get("name"));
console.log(map.get("email"));

map.forEach(item => {
    console.log(item);
})


/* Math객체: 수학 연산을 다룸 (Java와 똑같음)
 */
console.log(Math.abs(-5)); // 출력: 5
console.log(Math.ceil(1.1)); // 출력: 2 // 소수점이하 무조건 올림
console.log(Math.floor(1.9)); // 출력: 1 // 소수점 이해 무조건 내림
console.log(Math.round(1.4)); // 출력: 1
console.log(Math.max(1, 2, 3)); // 출력: 3
console.log(Math.min(1, 2, 3)); // 출력: 1
console.log(Math.pow(2, 3)); // 출력: 8
console.log(Math.sqrt(9)); // 출력: 3, 제곱근을 반환
console.log(Math.random()); // 출력: 0 이상 1 미만의 임의의 수

// Math.random(): 0보다 크고 1보다 작은 숫자형 값을 반환
// Math.random(); : 랜덤 숫자 반환
// Math.floor(Math.random() * 10);: 0에서 9사이의 정수
let random = Math.floor(Math.random() * 10);  // 0에서 9사이의 정수값을 반환
console.log(random);

let ran2 = parseInt(Math.random() * 10);
console.log(ran2);