let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];

// 기본 for문
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i])
}

console.log("\n");

// for of : 배열이나 객체를 순회, 자바의 향상된 for문과 유사
// 순회하면서 brands값들이 brand로 들어감
for(let brand of brands) {
    console.log(brand);
}

console.log("\n");

// for ~ in : 객체의 프로퍼티를 열거할 때 사용하는 반복문
let person = {
    fname : "John",
    lname : "Doe",
    age : 25
}; // 리터럴객체

for(let key in person) {
    console.log(person[key]);
}