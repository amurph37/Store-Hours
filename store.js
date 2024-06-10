let isWeekend = true;
let isHoliday = false;
let currentTime = 15;
function checkStoreStatus(isWeekend, isHoliday, currentTime) {
}
   if (isWeekend || isHoliday) {
    return "The store is closed";
} else {
    if (currentTime >= 8 && currentTime <= 18) 
    return "The store is open for business";     
} 
    if (currentTime <= 8 && currentTime >= 18) {
    return "The store is closed";
}
console.log(checkStoreStatus(isWeekend, isHoliday, currentTime));
