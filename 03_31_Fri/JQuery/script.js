// let colorBtn = document.getElementById("colorButton"); // 요소(노드(?)) 찾기
// let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
// let colorInx = 0;

// colorBtn.addEventListener("click", function() {
//     document.body.style.background = colors[colorInx];
//     colorInx = (colorInx + 1) % colors.length; 
// });


// $(document).ready(function() {
//     let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]
//     let colorInx = 0;

//     $("#colorButton").click(funtion() {
//         $("body").css("background-color", colors[colorInx]);
//         colorInx = (colorInx + 1) % colors.length;
//     });

// });

$(document).ready(function() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    var colorIndex = 0;

    $("#colorButton").click(function() {
        $("body").css("background-color", colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
    });
});
