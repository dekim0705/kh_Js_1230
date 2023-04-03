function averScore() {
    const scores =[]; // 성적 넣을 배열
    let total = 0; // 합계 미리 초기화

    for(let i = 0; i < 5; i++) {
        const score = parseInt(document.getElementById("input" + (i + 1)).value); // input{$}에서 값 가져오기
        // console.log(score);
        scores.push(score); // 배열에 점수 넣기
    }
    for(let i = 0; i < scores.length; i++) { // 40점 미만 -> 40점으로 수정
        if (scores[i] < 40) scores[i] = 40;
        total += scores[i];
    }
    total /= 5;
    document.getElementById("result").innerHTML = `우리반 평균 : <b>${total}</b>`;
}






// let score = [10, 65, 100, 30, 95];
//     // 미리 0으로 초기화 해주지 않으면 NaN이라고 뜸 
// let avg2 = 0;


// console.log(score);
// for (let i = 0; i < score.length; i++) {
//     if (score[i] < 40) {
//         score[i] = 40;
//     }
//     avg2 += score[i];
// }

// console.log(avg2/score.length);

// let avg = score.reduce(function add(sum, currValue) {
//     return sum + currValue;
// }, 0);
//     avg /= 5;

// console.log(score);
// console.log(avg);

// // 68 




// /* 강사님 풀이 */
// function averScore() {
//     const scores = [];

//     for(let i = 0; i < 5; i++) {
//         const score = parseInt(document.getElementById)
//     }
// }
