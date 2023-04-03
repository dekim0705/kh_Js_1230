function calculator() { // html에서 매개변수 넣을 수 없음
    const num1 = Number(document.getElementById("num1").value); // 가져오는 value는 문자열, typecasting 필요 
    const op = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);

    console.log(num1, op, num2);

    let result;
    switch(op) {
        case "+": 
            result = add(num1, num2); 
            break; 
        case "-": 
            result = sub(num1, num2); 
            break;
        case "*":  
            result = mul(num1, num2); 
            break;
        case "/": 
            result = div(num1, num2); 
            break;
    }
    document.getElementById("result").innerHTML = `Result : <strong>${result}</strong>`;
}
function add(n1, n2) {
    return n1 + n2;
}
function sub(n1, n2) {
    return n1 - n2;
}
function mul(n1, n2) {
    return n1 * n2;
}
function div(n1, n2) {
    return n1 / n2;
}

