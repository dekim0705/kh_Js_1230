function getDraw() {
    const num = parseInt(document.getElementById("input1").value);
    let number = parseInt((Math.random() * num) + 1);
    document.getElementById("lucky").innerHTML = `당첨자 번호 : <span>${number}</span>`;
}
