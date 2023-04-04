// 정규표현식 : 문자열에 포함된 특정 문자 조합을 찾기 위해 사용되는 패턴
// const regexp = /World/;
// const regexp = new RegExp("World");



let str = "Hello World! world!";
const re = /World/;
// console.log(re.test(str));
// console.log(str.search(re));

// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여, 패턴과 일치하는 문자열 반환
// 만약에 패턴과 일치하는 문자열이 없으면 null을 반환
let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst = /가장+/.exec(targetStr); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst = /가장큰+/.exec(targetStr);
// console.log(firstRst);
// console.log(secondRst); // null

// test() 메소드 : 인수로 전달된 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검사
// 문자열이 있으면 true, 없으면 false
let targetStr1 = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
let firstRst1 = /가장+/.test(targetStr1); // 패턴과 일치하는 문자열이 여러개인 경우
let secondRst1 = /가장큰+/.test(targetStr1);
// console.log(firstRst1);
// console.log(secondRst1);


// 전화번호 검사하기
// \d : 숫자를 의미
// {} : {}안의 숫자는 개수를 의미
let inputNum = "010-1234-2345";
const regexNum = /\d{3}-\d{4}-\d{4}$/; // 정규식의 패턴을 넣는 자리. $는 문자열의 끝을 나타냄(?)
let rst = regexNum.test(inputNum);
// console.log(rst);


// match() : 주어진 문자열의 처음부터 패턴 매칭을 수행
// 전화번호 추출하기
const inputText = "안녕하세요 Hi. 제 번호는 010-1234-2345 입니다. 연락 주세용 (◍•ᴗ•◍)❤";
const regexText = /\d{3}-\d{4}-\d{4}/; 
let regNumber = inputText.match(regexText);
// console.log(regNumber);    // 전체 내용 출력
// console.log(regNumber[0]); // 전화번호만 출력


// 전화번호 여러개 추출하기
// \d{2,3} : 숫자 2~3개로 시작
// g : 매칭되는 모든 항목 찾기
const inputText2 = "안녕하세요! 제 번호는 010-1234-2345 02-123-4567입니다 (◍•ᴗ•◍)❤";
const regex2 = /\d{2,3}-\d{3,4}-\d{4}/g;
let regNumber2 = inputText2.match(regex2);
// console.log(regNumber2);
// console.log(regNumber2[0]);
// console.log(regNumber2[1]);

// for(let num of regNumber2) {
//     console.log(num);
// }


// 정규식 주요 패턴에 대한 사용 예제
const regexStr = /Hi/; // 단순 글자 찾기
const regAll = /010/g; // 모두 찾기
const regAllNum = /[0-9]/g; // 모든 숫자 찾기
const regAllLetter = /[a-zA-z]/g; // 모든 알파벳 대/소문자 찾기
const regNotNumAll = /[^0-9]/g; // 숫자가 아닌 것 모두 찾기
const regKor = /[ㄱ-ㅎ가-힣]/g;
let rstPattern = inputText.match(regKor);
// console.log(rstPattern);

// 웹사이트 주소 정규식
// /https?:\/\/[\w\-\.]+/g
const text = "구입 문의 : http://gongumarket.com https://google.com 010-1234-2345 02-123-4567 hello@gmail.com";
const regexWeb = /https?:\/\/[\w\-\.]+/g;
let rstWeb = text.match(regexWeb);
console.log(rstWeb);
