/* Number 객체: 객체에 정의되어 있는 숫자와 관련된 작업을 할 때 사용되는 메소드 */

/*
parseFloat(): 문자열에 포함된 숫자 부분을 실수 형태로 반환 
*/
let str = "1234.12 12";
console.log(Number(str)); // NaN (Not a Number)
console.log(Number.parseFloat(str)); // 1234.12 (앞부분만 읽어냄)
console.log(Number.parseInt(str)); // 1234 (정수 반환)