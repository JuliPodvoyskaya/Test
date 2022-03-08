
const dayWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];

const month = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
];




function getNumberWeek(number){
    switch(true) {
        case number < 8 :
            return "1 неделя";
        case number < 15 :
            return "2 неделя";
        case number < 22 :
            return "3 неделя";
        case number < 29 :
            return "4 неделя";
        default : return "5 неделя";
    }
}



function getDayInfo(dateStr){
    let arr = dateStr.split(".");
    if(arr.length !== 3){
        return  "Возможный формат даты dd.mm.yyyy"
    };
    let date = new Date(Number(arr[2]), Number(arr[1]) - 1, Number(arr[0]));
    return `${dayWeek[date.getDay()]}, ${getNumberWeek(date.getDate())} ${month[date.getMonth()]} ${date.getFullYear()} года`;
}

console.log(getDayInfo("01.01.2022"));