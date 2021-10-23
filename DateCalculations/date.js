function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

let returnUTCforNow = () =>
{
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = currentDate.getMonth() + 1;
    let cYear = currentDate.getFullYear();
    let cHours = currentDate.getHours();
    let cMinutes = currentDate.getMinutes();
    let cSeconds = currentDate.getSeconds();

    return [cDay,cMonth,cYear,cHours,cMinutes,cSeconds];
}
// [cDay,cMonth,cYear,cHours,cMinutes,cSeconds]
let returnUTC = function(arr,convert){
    let currentDate = new Date();

    let cDay = arr[0];
    let cMonth = arr[1];
    let cYear = arr[2];
    let cHours = arr[3];
    let cMinutes = arr[4];
    let cSeconds = arr[5];

    var dateStr = cMonth.toString() + "/" + cDay.toString() + "/" + cYear.toString();
    var dayName = getDayName(dateStr, "en-US");

    if(convert)
    {
        console.log(convert);
        let timeInMinutes = cHours*60 + cMinutes;
        console.log(timeInMinutes);
        timeInMinutes = timeInMinutes + currentDate.getTimezoneOffset();
        cHours = parseInt(timeInMinutes/60);
        cMinutes = timeInMinutes - cHours*60;
    }
    
    
    cHours = completeTime(cHours);
    cMinutes = completeTime(cMinutes);
    cSeconds = completeTime(cSeconds);

    let utcDate = dayName.substring(0,3) + ", " + cDay + " " + returnMonth(cMonth).substring(0,3) + " " + cYear + " " + cHours + ":" 
    + cMinutes + ":" + cSeconds + " GMT";

    return utcDate;
}

let completeTime = (n) =>{
    if(n<10)
    {
        return "0" + n;
    }
    else{
        return n.toString();
    }
}

let returnMonth = function(m){
    switch(m){
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";  
    }
}

module.exports = {
    returnUTCforNow: returnUTCforNow,
    returnUTC: returnUTC
};