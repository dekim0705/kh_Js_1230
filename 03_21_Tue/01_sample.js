// const pie = 3.14;
// console.log(pie * 20);

// console.log("안녕하세요. 자바스크립트를 배워봅시다.");
// // alert("경고");

// const heading = document.querySelector('#head-line');
// heading.onclick = function() {
//     heading.style.color = "red";
// }

// function primeMain() {
//     let sum = 0;
//     let number = document.getElementById('name').value;
//     for(let i = 0; i <= number; i++) {
//         sum += primeNum(i);
//     }
//     document.write("= " + sum);
//     return 0;
// }

// function primeNum(num) {
//     let cnt = 0;
//     for(let i = 1; i <= num; i++) {
//         if(num % i == 0) cnt++;
//     }
//     if(cnt == 2) {
//         document.write(num + " + ");
//         return num;
//     } else {return 0;}
// }

// console.log("화면에 결과를 출력 합니다.")
// console.log("화면에 결과를 출력 합니다.")
// console.log("화면에 결과를 출력 합니다.")

let currentYear = 2023;
let birthYear;
let age;

birthYear = prompt("태어난 연도를 입력 하세요 : (YYYY)", "");
age = currentYear - birthYear;
document.write(currentYear + "년 현재<br>");
document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");

