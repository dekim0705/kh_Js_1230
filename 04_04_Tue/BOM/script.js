// Browser Object Model : 브라우저 객체 모델은 웹 브라우저의 창이나 프레임에 대한 객체를 다루는 모델

// function printInfo() {
//     console.log(`웹 브라우저의 너비 : ${window.innerWidth}`);
//     console.log(`웹 브라우저의 높이 : ${window.innerHeight}`);
//     console.log(`웹 브라우저의 창의 너비 : ${window.outerWidth}`);
//     console.log(`웹 브라우저의 창의 높이 : ${window.outerHeight}`);
//     console.log(`웹 브라우저의 창 위쪽면과 모니터 사이의 간격 : ${window.screenTop}/${window.screenY}`);
//     console.log(`웹 브라우저의 창 왼쪽면과 모니터 사이의 간격 : ${window.screenLeft}/${window.screenX}`);
//     console.log(`웹 브라우저의 창의 스크롤 가로 위치 : ${window.scrollX}`);
//     console.log(`웹 브라우저의 창의 스크롤 세로 위치 : ${window.scrollY}`);
// }

function popup() {
    window.open('popup.html', "팝업", 'width=200, height=100');
}
function popupNaver() {
    window.open('https://naver.com', "팝업", 'width=200, height=100');
}

// 웹 브라우저의 스크롤 위치를 특정 좌표로 이동
function sTo() {
    window.scrollTo(200,400);
}

// 현재 위치에서 상대적인 위치로 이동
function sBy() {
    window.scrollBy(200,400);
}

// 근데 13인치 프로도 계속 보니까 귀여워보여
