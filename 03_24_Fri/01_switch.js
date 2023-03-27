let d = new Date();
let day = d.getDay();
// let dayName = "";

// switch(day) {
//     case 0 : 
//         dayName = "Sunday";
//         break;
//     case 1 : 
//         dayName = "Monday";
//         break;
//     case 2 : 
//         dayName = "Tuesday";
//         break;
//     case 3 : 
//         dayName = "Wednesday";
//         break;
//     case 4 : 
//         dayName = "Thursday";
//         break;
//     case 5 : 
//         dayName = "Friday";
//         break;
//     case 6 : 
//         dayName = "Saturday";
//         break;    
//     default : 
//         dayName = "";
// }
// console.log(day);
// console.log(dayName);




// switch문 대신 배열에 넣어서 가독성 up

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
console.log(dayNames[day]);