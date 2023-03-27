let num = prompt("숫자를 입력 하세요", "");
console.log(typeof(num)); // string

let temp = prompt("숫자를 입력 하세요", "");
let num1 = Number(temp);
console.log(typeof(num1)); // number

if(num >= 0) {
    document.write(`<h2> ${num}은 양수 입니다.</h2>`);
} else {
    document.write(`<h2> ${num}은 음수 입니다.</h2>`);

}