/* 문자열을 다루는 String 객체 */

/* length: 문자열의 길이 반환 */
const pw = "123";
if(pw.length < 4) {
    console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}


/* includes(): 특정 문자열의 포함 여부 확인 */
const email = "test!naver.com";
if(email.includes("@") === false){
    console.log("올바른 이메일 형식이 아닙니다.");
}

/* indexOf(): 문자열과 일치하는 첫 번째 문자의 인덱스를 반환
            : -1은 해당 문자가 없다는 뜻*/
const email2 = "@test!naver.com";
if(email2.indexOf("@") === -1) {
    console.log("올바른 이메일 형식이 아닙니다.");
} else console.log("올바른 이메일 형식입니다✿˘◡˘✿");

/* lastIndexOf(): 찾고자 하는 문자열이 둘 이상 발견되면 제일 마지막에 발견된
                    문자열의 index를 반환하는 함수
*/
const email3 = "@test@naver.com@";
console.log(email3.lastIndexOf("@")); //15

/* slice(): 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환 
            불변성원칙이 적용됨, 원본은 바뀌지 않음
*/
let str = "Apple, Banana, Kiwi";
let res = str.slice(7,13); // 7번부터 13번 미만
console.log(str.slice(7,13)); // Banana
console.log(str);   // Apple, Banana, Kiwi
console.log(res);   // Banana

/* 
substring(): 시작 위치와 종료 위치를 주면 문자열에서 해당 부분을 잘라내서 반환 
            0과 length보다 길면 각각 0과 str.length로 treat됨
*/
let str2 = "Apple, Banana, Kiwi";
let res2 = str2.substring(7,13); 
console.log(res2);

console.log(str.slice(7, -1));     // Banana, Kiw
console.log(str2.substring(7,-1)); // Apple, 


/*
replace(): 문자열 내의 특정 문자열을 지정한 문자열로 바꾸는 함수 
*/
let str7 = "지구오락실, 이영지, 안유진, 미미, 이은지, 안유진";
let newStr = str7.replace("안유진", "나영석");
console.log(newStr);


/* 
replaceAll(): 문자열 내의 특정 문자열을 지정한 문자열로 모두 바꾸는 함수 
*/
let newStr2 = str7.replaceAll("안유진", "나영석");
console.log(newStr2);



/*
toUpperCase() / toLowerCase() : 문자열을 모두 대문자/소문자로 변경
*/
let alpha = "Better late than never.";
console.log(alpha.toUpperCase());
console.log(alpha.toLowerCase());


/*
concat(): 2개 이상의 문자열을 하나의 문자열로 합치는 함수
        : 기존 문자열을 변경하지 않고 합쳐진 문자열을 생성 (불변성)
*/
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);
let text4 = "Hello" + " " + "World!";
let text5 = "Hello".concat(" ", "World!");
console.log(text4);
console.log(text5);


/*
trim(): 문자열의 앞, 뒤 공백 제거
*/
let trimStr = " Hello World! ";
console.log(trimStr.trim()); 

/*
padStart() / padEnd(): 문자열의앞과 뒤에 지정된 문자를 지정된 길이만큼 추가
                        (targetLength, padString(Opt))
*/
let padStr = "5";
padStr = padStr.padStart(4,0);
console.log(padStr);
let padStr2 = "11";
padStr2 = padStr2.padEnd(4,1);
console.log(padStr2);

/*
charAt(): 문자열에서 특정 인덱스에 해당하는 문자 하나를 반환하는 함수
*/
let addr = "서울시 강남구 역삼동 KH정보교육원";
console.log(addr.charAt(4));

/*
charCodeAt(): 문자열에 특정 인덱스에 해당하는 문자 하나의 유니코드 반환
*/
let uniCode = "HELLO WORLD";
console.log(uniCode.charCodeAt(0)); //72

/*
split(): 특정 문자 기준으로 문자열을 잘라서 새로운 문자열로 이루어진 배열 생성
*/
let birthday = "1991-06-24";
let arr2 = birthday.split("-");
console.log(arr2);