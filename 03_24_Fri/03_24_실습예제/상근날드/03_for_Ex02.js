// 상근날드

// let menu = [
//     {
//         name : "hamburger1",
//         price : prompt("hamburger1 price: ", "")
//     },
//     {
//         name : "hamburger2",
//         price : prompt("hamburger2 price: ", "")
//     },
//     {
//         name : "hamburger3",
//         price : prompt("hamburger3 price: ", "")
//     },
//     {
//         name : "drink1",
//         price : prompt("drink1 price: ", "")
//     },
//     {
//         name : "drink2",
//         price : prompt("drink2 price: ", "")
//     }
// ];

// let minburger = Number(menu[0].price);
// let mindrink = Number(menu[3].price); 

// for(let i = 0; i < menu.length; i++) {
//     if ((i < 3) && (minburger > Number(menu[i].price))) minburger = menu[i].price;
//     if ((i > 2) && (mindrink > Number(menu[i].price))) mindrink = menu[i].price;
// }
// document.write(minburger + mindrink - 50);


let menu =[]; // 빈 배열 생성
let temp;
temp = prompt("햄버거1 가격 입력: ", "");
menu[0] = Number(temp);
temp = prompt("햄버거2 가격 입력: ", "");
menu[1] = Number(temp);
temp = prompt("햄버거3 가격 입력: ", "");
menu[2] = Number(temp);
temp = prompt("음료1 가격 입력: ", "");
menu[3] = Number(temp);
temp = prompt("음료2 가격 입력: ", "");
menu[4] = Number(temp);

let minB = menu[0]; // 비교 시작값
let minD = menu[3];
for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minB > menu[i]) minB = menu[i];
    if (i > 2 && minD > menu[i]) minD = menu[i];
};
document.getElementById("value").innerHTML = (minD + minB - 50) + "원";
