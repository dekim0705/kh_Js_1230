// 타입캐스팅 해야 함 

let a, b, c, temp;
let min, max;

temp = prompt("정수1 입력 : ", "");
a = Number(temp);
temp = prompt("정수2 입력 : ", "");
b = Number(temp);
temp = prompt("정수3 입력 : ", "");
c = temp;

/*
if (a > b) {
    if(a > c) max = a;
    else min = b;
} else {
    if(b > c) max = b;
    else max = c;
}
if (a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}
*/

if (a > b) {
    if (a > c) max = a;    
    else max = c;
} else {
    if(b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}
document.write("<h3>제일 큰 값: " + max + "</h3>");
document.write("<h3>제일 작은 값: " + min + "</h3>");
