// 객체(object)

// 배열 : 복수의 데이터를 정의 할 수 있는 자료형
//      : 모든 자료형을 저장 가능 ex) [문자열, 문자열, 정수, boolean, [배열]] 
//      : 인덱스 개념 존재 (0부터 시작)
let score = [80, 99, 77, 65];
console.log(score);
console.log(score[2]); // 인덱스

// let : 변수를 만드는 키워드. 변수를 만들 때 자료형을 지정하지 않으며, 값이 대입될 때 데이터의 형이 결정됨

let array = ["아이브", "안유진", 20, true, [100, 99, 88], 1010, "1010", ["머핀", "서울시", "개발자"]];
console.log(array);
console.log(array[0]); // 아이브
console.log(array[4][1]); // 99
console.log(array[0][1]); // 이
console.log(array[5]);  // 1010
console.log(array[5][0]); // undefined
console.log(array[6]); // 1010
console.log(array[6][0]); // 1
console.log(array[7][0][1]); // 핀

// 빈 배열 생성 수 동적으로 값을 대입할 수 있읍
let arr = [];
console.log(arr);
arr[0] = 100;
console.log(arr);


// 객체 리터럴 : 중괄호{}를 사용해서 정의하고, 키와 값이 한쌍으로 이루어 집니다
let score1 = [80, 99, 77, 65]; // 배열로 정의

let score2 = { // 객체 리터럴. 인덱스 개념 X
    kor : 80,
    eng : 99,
    math : 77,
    scn : 88
};
console.log(score2);
console.log(score2.eng); // 객체라서 .연산자로 접근, 인덱스 개념 X
console.log(score2['math']); // []에 키명을 넣어서 접근

score2.eng = 100; // 100으로 변경
console.log(score2.eng); // 100

const person = {
    name : "Nana",
    age : 18,
    city : "Seoul",
    getInfo : function() {
        return `${this.name} is ${this.age} years old and lives in ${this.city}.`;
    }
}
console.log(person.getInfo());

// typeof : 데이터형을 확인하는 예약어
let name = "나나";
console.log(typeof(name)); // string

// toString() : 배열 안의 모든 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.toString());

