/*
let arr = []; // 빈 배열 생성
while(true) { // while문으로 번호 6개 뽑고, 중복 확인 후 배열에 넣기
    let temp = parseInt(Math.random() * 45 + 1);
    if(arr.indexOf(temp) == -1) {
        arr.push(temp);
    }
    if(arr.length == 6) break;
}
arr.sort((a,b) => a-b); // 정렬


function genLotto() {
document.write(`<div class="balls ball1">${arr[0]}</div>`);
document.write(`<div class="balls ball2">${arr[1]}</div>`);
document.write(`<div class="balls ball3">${arr[2]}</div>`);
document.write(`<div class="balls ball4">${arr[3]}</div>`);
document.write(`<div class="balls ball5">${arr[4]}</div>`);
document.write(`<div class="balls ball6">${arr[5]}</div>`);
}
*/


// function genLotto() {
//     const numbers = [];
//     const container = document.getElementById("container");
//     container.innerHTML = "";

//     while (numbers.length < 6) {
//         const number = Math.floor(Math.random() * 45) + 1;
//         if(!numbers.includes(number)) {
//             numbers.push(number);
//         }
//     }
//     for(let num of numbers) {
//         const div = document.createElement('div');
//         div.classList.add('number');
//         div.textContent = num;
//         container.appendChild(div);
//     }
// };

function genLotto() {
    const numbers = [];
    const container = document.getElementById("container");
		container.innerHTML = "";

    while (numbers.length < 6) {
        const number = Math.floor(Math.random() * 45) + 1;
        if(!numbers.includes(number)) {
            numbers.push(number);
        }
    }
    for(let num of numbers) { // numbers 순회하면서 ~ 
        const div = document.createElement('div'); // div 요소 생성
        div.classList.add('number'); // (생성된 div요소에 number이름 붙이기?)
        div.textContent = num; // 해당 div의 content는 num(배열요소)
        container.appendChild(div);  // container 밑에 자식으로 들어감
    }

    //setTimeout(function() {
    //    location.reload();
    //}, 5000);
};