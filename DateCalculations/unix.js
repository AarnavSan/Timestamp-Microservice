const datec = require("./date");
function toTimestamp(str){
    var datum = new Date(str);
    return datum.getTime();
 }

 function toDateString(str)
 {
    let strDate = new Date(str*1);
    let cDay = strDate.getDate();
    let cMonth = strDate.getMonth() + 1;
    let cYear = strDate.getFullYear();
    let cHours = strDate.getHours();
    let cMinutes = strDate.getMinutes();
    let cSeconds = strDate.getSeconds();
    let utcDate = datec.returnUTC([cDay,cMonth,cYear,cHours,cMinutes,cSeconds]);
    return utcDate;
 }

 module.exports = {
    toTimestamp: toTimestamp,
    toDateString: toDateString
 };
