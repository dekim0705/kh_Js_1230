function showDesc() {
    const desc = document.getElementById("desc");
    desc.style.display = "block";
    document.querySelector("#open").style.display = "none";
}

function hideDesc() {
    const desc = document.getElementById("desc");
    desc.style.display = "none";
    document.querySelector("#open").style.display = "block";


}


// function showDesc() {
//     document.getElementById('desc').style.display = "block";	// 상세 설명 부분을 화면에 표시
//     document.querySelector('#open').style.display = "none";   // '상세 설명 보기' 단추를 화면에서 감춤
//   }

//   function hideDesc() {
//     document.getElementById('desc').style.display = "none";	   // 상세 설명 부분을 화면에서 감춤
//     document.querySelector('#open').style.display = "block";	 // '상세 설명 보기' 단추를 화면에 표시
//   }