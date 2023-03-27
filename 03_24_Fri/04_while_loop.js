let treeHit = 0;
// while문 조건에 true를 걸고 탈출 시켜주기
while(true) {
    treeHit++;
    document.write(`<p>나무를 ${treeHit}번 찍었습니다.</p>`);
    if(treeHit == 10) {
        document.write("<p>나무가 넘어 갑니다.</p>");
        break;
    }
}

