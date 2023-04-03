const pEls = document.querySelectorAll("p");
// forEach(): iterator. 배열 순회 only, 수정하지 않음. map순회하는 것과 똑같음. 
//          : enhanced for 대신 사용 가능
pEls.forEach((el) => {
    el.addEventListener("click", function() {
    // 내부적으로 this에대한 동적 바인딩(값 할당)을 함
        if(this.style.color == "red") {
            this.style.color = "black";
        } else {
            this.style.color = "red";
        }
    })
});



/*화살표 함수는 받아지지 않음. this에 값이 지정되지 않아서 현재 바인딩 된 노드가 뭔지 모름*/
pEls.forEach((el) => {
    el.addEventListener("click", () => {
        if(this.style.color == "red") {
            this.style.color = "black";
        } else {
            this.style.color = "red";
        }
    })
});
// 화살표 함수로 this없이 사용 가능 
pEls.forEach((el) => {
    el.addEventListener("click", () => {
        if(el.style.color == "red") {
            el.style.color = "black";
        } else {
            el.style.color = "red";
        }
    })
});