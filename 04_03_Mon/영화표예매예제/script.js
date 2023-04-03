const SEAT_COUNT = 10;
const SEAT_PRICE = 12000;
const seats = new Array(SEAT_COUNT).fill(0);
let total = 0;

function printSeats() {
    const seatsDiv = document.querySelector("#seats");
    seatsDiv.innerHTML = "";
        for(let i = 0; i < SEAT_COUNT; i++) {
            const seat = document.createElement("diV");
            seat.classList.add("seat"); // 스타일을 위한 클래스추가
            if(seats[i] === 1) {
                seat.classList.add("booked"); 
            }
            seat.textContent = i + 1; // i값은 index라서 +1...
            seat.addEventListener("click", () => bookSeat(i)); // 클릭이 되면 bookSeat함수가 불려짐
            seatsDiv.appendChild(seat);
        }
}

function bookSeat(index) {
    if(seats[index] === 1) {
        alert("이미 예매가 완료된 좌석 입니다.");
    } else {
        seats[index] = 1;
        total += SEAT_PRICE;
        alert("예매가 완료되었습니다.");
        printSeats();
    }
}

function exitProgram() {
    alert(`총 매출액은 ${total}원 입니다.`);
    window.close();
}


// DOM, html이 로딩되는 시점에 기능이 자동실행 되도록.. 
document.addEventListener("DOMContentLoaded", () => {
    printSeats(); 
    const exitBtn = document.querySelector("#exitBtn"); // 종료하기 버튼에 대한 DOM 가져오기
    exitBtn.addEventListener("click",exitProgram); // 매개변수, 콜백 자리에는 함수의 괄호() 빼야함
});


// 인덱스 번호가 textcontent로 밖에 나와있는거고 1은 어디서 확인하지? 

