// JSON(JavaScript Object Notation)은 Js객체를 문자열로 표현하는 데이터 포맷
// JSON을 사용하여 객체 직렬화(Serialization)가 가능 != 문자열을 Js객체로 반환 하는 것은 역직렬화(Deserialization) 또는 파싱(Parsing)이라고 함
// 원래는 Js언어로부터 파생 되었지만, 현재는 독립적으로 사용
// JSON은 두가지 기본 자료구조인 객체와 배열을 기반하며, 웹 서버와 웹 어플리케이션 간의 데이터 교환에 사용
// XML의 대안으로 자주 사용

//객체 리터럴
const person = {
    name : 'Meredith',
    age : '30',
    addr : 'Grey\'s Anatomy'
}
// JSON
// {
//     "name" : "Meredith",
//     "age" : 18,
//     "addr" : "Grey\'s Anatomy"
// }


// 해당 데이터의 입력은 주로 ajax, Fetch API, promise, Axios 등의 비동기통신으로 부터 전달 받음
// 데이터가 들어올 때 항상 아래 포맷으로 담겨져서 들어옴
// JSON.parse() : convert JSON string into JS object
const jsonString = '{"name": "Meredith", "age" : 30, "addr" : "Grey\'s Anatomy"}';
const jsonObject = JSON.parse(jsonString); // JSON => 객체 리터럴로 반환
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.addr);

// JSON.stringfy() : convert Js object into JSON string
// mutiple objects in one array
let memberInfo = [
    {
        name : "Meredith",
        age : 30,
        job : "General surgeon",
        addr : "Seattle Grace Hospital"
    },
    {
        name : "Christina",
        age : 30,
        job : "Heart surgeon",
        addr : "Swiss"
    },
    {
        name : "Callie",
        age : 33,
        job : "Orthopedic surgeon",
        addr : "NewYork"
    },
];

let json = JSON.stringify(memberInfo);
console.log(json);