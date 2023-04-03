/* 객체는 중괄호({})를 사용하여 만듬. 속성(property)과 값(value)의 쌍으로 이루어짐 */

const person = {
    title : "Object_sample",
    name : "Anne Marie",
    age : 25,
    job : "singer"
};
console.log(person.name);


// 중첩 (name = property, fname&lnate = value(?))
const person1 = {
    name : {
        firstName : "Anne",
        lastName : "Marie",
    },
    age : 21,
    isAdult : true,
    printInfo : function() { // 익명의 함수
        return this.name;
    }
};
// 객체 속성에 접근하기 : Js에서는 대괄호 연산자와 마침표 연산자 사용
console.log(person1.printInfo().firstName);
console.log(person1[`isAdult`]);

// 객체 속성값 변경하기
person1.name.firstName = "Hailey"; 
person1.name.lastName = "Steinfield";
console.log(person1.name);


// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "Santafe";
carInfo.year = "2022/09/15";
carInfo.maxSpeed = "230km";
console.log(carInfo);

// 객체 속성 동적으로 삭제하기
delete carInfo.maxSpeed;
console.log(carInfo);

// 객체 메소드 : 객체 내부에서 동작하는 함수. 메소드는 속성으로 정의 됨
let person2 = {
    name: 'Anne',
    age: 30,
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person2.sayHello();

// 객체 생성자 : 객체 생성자는 템플릿으로 사용하여 동일한
//              속성과 메소드를 가진 객체를 여러 개 생성할 때 사용
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
};
let person3 = new Person('person3', 30);
let person4 = new Person('person4', 35);
person3.sayHello();
person4.sayHello();
// console.log(person3.sayHello());
/*
객체 리터럴이랑 요거랑 어떻게 다르지 ?! 매개변수(?)를 받아서
템플릿을 만드는거라 정확한 value가 안들어가서 그런가?
key(?)만 있어서? this를써서?!!?!
*/
// 리터럴객체는 일회용, new가 없음 -> 템플릿으로 사용 X(?)