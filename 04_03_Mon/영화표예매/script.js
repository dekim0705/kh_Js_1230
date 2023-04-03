// 메뉴는 [1]예매하기, [2]종료하기
// 사용자로부터 좌석번호(index)를 입력받아 예매하는 시스템. (좌석은 10개)
// [V] [V] [V] [ ] [ ] [ ] [ ] [ ] [ ] [ ]
// 예매가 완료되면 해당 좌석 값을 1로 변경한다.
// 이미 예매가 완료된 좌석은 재구매할 수 없다.
// 한 좌석당 예매 가격은 12000원이다.
// 프로그램 종료 후, 해당 영화관의 총 매출액을 출력한다. 

document.addEventListener("DOMContentLoaded", () => {
});

const buy = document.getElementById("buy");
const exit = document.getElementById("exit");
let seats = document.getElementById("seats");


// let seats = document.getElementById("seats");
// console.log(seats);
// for(let seat of seats) {
//     if(seat.value === "V") {
//         console.log("왜안찍히냐");
//         seat.style.backgroundColor = "gray";
//     } else {
//         console.log("정말궁금하다야");
//     }
// }
function buyTicket_temp() {
    document.getElementById("seats").style.display = "block";
    seats.forEach((seat) => {
        seat.addEventListener("click", () => {
            if(seat.value === "") {
                seat.innerText = "V";
            } else if (seat.value === "V") {
                alert("이미 선택된 좌석입니다.");
            }
        })
    });
}



function buyTicket() {
    let seats = document.getElementById("seats");
    seats.style.display = "block";
    for(let i = 0; i < 10; i++) {
        let seat = document.createElement("button");
        seats.appendChild(seat);
    }
    let sel_seat = document.querySelectorAll("#seats > button")
    sel_seat.forEach((seat) => {
        seat.addEventListener("click", () => {
            if(seat.value === "") {
                seat.innerText = "V";
            } else if (seat.value === "V") {
                alert("이미 선택된 좌석입니다.");
            }
        })
    });
}


function finish() {
    let total = 0;
    let cnt = 0;
    const seats = document.querySelectorAll("#seats > button");
    for(let seat of seats) {
        if(seat.value === "V") {
            console.log("어디까지돌지?왜 안도냐 왜 왜안도냐고 왜왜왜왜왱ㅇㅇㅇㅇ");
            cnt++;
            console.log(cnt);
        }
    }
    console.log(`오늘의 매출은 ${total}원 입니다`);    
}


