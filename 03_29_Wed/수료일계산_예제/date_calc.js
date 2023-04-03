/*
const date_now = new Date();
console.log(date_now);

const date_fin = new Date("2023-07-25");
console.log(date_fin);

let leftTime = date_fin - date_now;
console.log(leftTime);

// const date_now2 = date_now.getTime();
// const date_fin2 = date_fin.getTime();
// console.log(date_fin2-date_now2); 

leftTime = Math.floor(Math.round(leftTime/(1000*60*60*24))); 
console.log(leftTime);
*/

// function getLeftTime() {
//     const date_now = new Date();
//     const date_fin = new Date("2023-07-25");
//     let leftTime = date_fin - date_now;
//     leftTime = Math.floor(Math.round(leftTime/(1000*60*60*24))); 
//     document.getElementById("leftTime").innerHTML = `-> <span>${leftTime}일</span> 남았습니다! `;
// }



let dDay = new Date("2023-07-25");
let now = new Date();

let toNow = now.getTime();
let toDay = dDay.getTime();
let remainTime = toDay - toNow;

remainTime = Math.round(remainTime / (1000 * 60 * 60 * 24)); // 남은 일수 반올림
document.querySelector("#result").innerText = remainTime;

