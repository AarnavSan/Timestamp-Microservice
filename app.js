const express = require('express');
const app = express();
const path = require('path');
const { returnUTC } = require('./DateCalculations/date');

const datec = require('./DateCalculations/date');
const unixc = require('./DateCalculations/unix');

const errorobject = {"error" : "Invalid Date"};
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname + '/static/stylesheets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
})


app.get('/api', (req,res) => {
    let unix, utc;

    let utcdate = datec.returnUTCforNow();
    utc = datec.returnUTC(utcdate);
    // cDay,cMonth,cYear,cHours,cMinutes,cSeconds
    let temp = [utcdate[2], utcdate[1], utcdate[0], utcdate[3], utcdate[4], utcdate[5]]
    // year, monthIndex, day, hours, minutes, seconds, milliseconds
    unix = unixc.toTimestamp(utc.substring(6,26));
    console.log(temp);

    let ans = {
        "unix": unix,
        "utc": utc
    }
    console.log(ans);   
    res.json(ans);
});

app.get('/api/:date', (req,res) => {
    let date = req.params.date;
    let unix,utc;
    if(date.includes('/'))
    {
        let dateArr = date.split('/');
        if(dateArr.length < 3){
            res.json(errorobject);
        }
        dateArr.join(00);
        dateArr.join(00);
        dateArr.join(00);
        dateArr.forEach((elem,index,arr) => {
            arr[index] = parseInt(elem);
        });
        utc = datec.returnUTC(dateArr);
        unix = unixc.toTimestamp(utc.substring(6,26));
    }
    else{
        unix = parseInt(date);
        utc = unixc.toDateString(date);
    }
    let ans = {
        "unix" : unix,
        "utc" : utc
    }

    console.log(ans);
    res.json(ans);
});

app.listen(port, () => {
    console.log("Listening on :" + port);
});