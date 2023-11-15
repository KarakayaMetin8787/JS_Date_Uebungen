// =========================================
// lvl1_1 date new Date()
// =========================================

const date1 = new Date("September 2, 2019 09:00:00");

const date2 = new Date(0);

const date3 = new Date(31556908800);

const date4 = new Date(86400000);

document.body.querySelector("header").innerHTML += `${date1}<br>`;
document.body.querySelector("header").innerHTML += `${date2}<br>`;
document.body.querySelector("header").innerHTML += `${date3}<br>`;
document.body.querySelector("header").innerHTML += `${date4}<br>`;

// =========================================
// CodeFlow Übung lev1_3: SET Date Methods
// =========================================

const setNewDate1 = new Date(2222, 9, 23, 13, 25, 11);
const setNewDate2 = new Date(2123, 1, 24, 13, 25, 11);
const setNewDate3 = new Date(setNewDate2);
setNewDate3.setMonth(2);
const setNewDate4 = new Date(setNewDate2);
setNewDate4.setDate(3);
const setNewDate5 = new Date(2019, 10, 22, 13, 25, 11);

document.body.querySelector("header").innerHTML += `<br>${setNewDate1}<br>`;
document.body.querySelector("header").innerHTML += `${setNewDate2}<br>`;
document.body.querySelector("header").innerHTML += `${setNewDate3}<br>`;
document.body.querySelector("header").innerHTML += `${setNewDate4}<br>`;
document.body.querySelector("header").innerHTML += `${setNewDate5}<br>`;

// =========================================
// CodeFlow Übung lev1_5: Monatsname
// =========================================

let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = function (year, month, day) {
    const newDate = new Date();
    newDate.setFullYear(year);
    newDate.setMonth(month-1);
    newDate.setDate(day);
    return newDate;
};

console.log(monatsName(2001,3,4)); //März
console.log(monatsName(2019,12,24)); //Dezember
console.log(monatsName(1410,7,15)); //Juli


// =========================================
// CodeFlow Übung lev1_6: AM PM
// =========================================

const datePMAM1 = new Date(1999, 10, 5, 15); // PM
const datePMAM2 = new Date();
const datePMAM3 = new Date(2019, 12, 3, 12); // PM
const datePMAM4 = new Date(2000, 1, 1, 11); // AM

const checkForDate = function (date) {
    if (date.getHours() < 12) {
        console.log(date + " ist AM")
    } else if (date.getHours() >= 12) {
        console.log(date + " ist PM")
    } else {
        console.log("error in der Funktion")
    }
};

checkForDate(datePMAM1);
checkForDate(datePMAM2);
checkForDate(datePMAM3);
checkForDate(datePMAM4);

// =========================================
// CodeFlow Übung lev1_7: Weekend 
// =========================================

const istWeekend = function (month, day, year) {
    const newDate = new Date();
    newDate.setFullYear(year);
    newDate.setMonth(month-1);
    newDate.setDate(day);
    if (newDate.getDay() === 0 || newDate.getDay() === 6) {
        console.log(newDate + " ist ein Wochenende.")
    } else {
        console.log(newDate + " ist kein Wochenende.")
    };
};

istWeekend(12, 15, 2019);
istWeekend(2, 16, 2001);
istWeekend(2, 1, 2020);
istWeekend(2, 29, 2020);

// =========================================
// CodeFlow Übung lev1_10: Tag Monat Jahr 
// =========================================

const currentDate = new Date();

document.body.querySelector("main").innerHTML = `<p>${currentDate.getDate()}-${currentDate.getMonth()}-${currentDate.getFullYear()}</p>`;