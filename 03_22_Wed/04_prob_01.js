// 길이 체크, 하이픈이 있는지 체크해서 하이픈이 없으면 재 입력 요구
// 성별 확인 123456-1234567
// 문자열에서 해당 문자 추출을 charAt(n)
// 문자열 잘라내기 substring(0,2) 0부터 2미만 까지 잘라냄
// 날짜 객체를 만드는 방법도 자바와 동일 const date = new Date();
// 날짜 객체에서 현재 년도 가져오기 : date.getFullYear();
// 현재 년도 - 태어난 년도 = 나이 

/*
 연습문제 
    - 주민 등록 번호를 입력 받아 성별, 나이, 출력 하기
    - 문자열을 자르는 substr사용
    - 날짜 계산을 위해 Date 내장 객체 사용
    - 주민등록번호 입력 길이 체크
    - 하이픈 포함 여부 체크 (indexOf)
    - HTML + CSS로 이쁘게 출력 하기
*/
// let ssn = prompt("ssn번호를 하이픈(-)포함하여 입력하세요", "");
// const date = new Date();
// while(true) {
//     if(ssn.length != 14) {
//         ssn = prompt("ssn번호를 확인하세요", "");
//     } else {
//         if(ssn.indexOf("-") == -1)
//         // 
//     }
// } 
// document.write(`주민등록번호는 ${ssn}입니다.`);

let jumin;
while(true) {
    jumin = prompt("주민등록번호: ", "");
    if(jumin.length != 14) {
        alert("입력 오류! 다시 입력하세요");z
    } else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다.");
        else break;
    }
}
let gender = jumin.charAt(7); // 문자열에서 해당 인덱스의 문자 추출(성별자리)
let prnGender;
if(gender == "1" || gender == "3") { 
    prnGender = "남성";
} else { 
    prnGender = "여성";
}

// const date = new Date();
// let age;
// if(gender == "1" || gender == "2") {
//     age = (date.getFullYear()-(19 + jumin.substring(0,2)));
// } else {
//     age = (date.getFullYear()-(20 + jumin.substring(0,2)));
// }
// // document.write(`성별은 ${prnGender}입니다.\n나이는 ${age}세 입니다.`);
// // document.write("성별은 " + prnGender + "입니다.\n" + "나이는 " + age + "세 입니다.");
// let print = "성별은 " + prnGender + "입니다.\n" + "나이는 " + age + "세 입니다.";
// document.write(print);

// 나이를 계산하기 위해 주민번호에서 연도 추출
let birthYear = jumin.substring(0,2); // 0번 인덱스에서 2미만까지 잘라냄 (0에서 1번 인덱스 값 추출)
if(gender === "1" || gender === "2") {
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear;

// 문자 타입을 숫자 타입으로 변경
birthYear = Number(birthYear);

// 현재 날짜 가져오기
const date= new Date(); // 날짜 객체에서 현재 시간 정보 읽어 오기
const currYear = date.getFullYear(); // 2023
let age = currYear - birthYear; // s나이를 구함

document.write(`<p class='box'> 성별 : ${prnGender} <br> 나이 : ${age}세</p>`);