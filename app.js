const express = require('express');
const app = express();
const path = require('path');
const { returnUTC } = require('./DateCalculations/date');

const datec = require('./DateCalculations/date');
const unixc = require('./DateCalculations/unix');

app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(__dirname + '/static/stylesheets'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
})


app.get('/api', (req,res) => {
    let dateObject = new Date();
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString()});  
    res.json(ans);
});

app.get("/api/:date_string", (req, res) => {
    let dateString = req.params.date_string;
  
    //A 4 digit number is a valid ISO-8601 for the beginning of that year
    //5 digits or more must be a unix time, until we reach a year 10,000 problem
    if (/\d{5,}/.test(dateString)) {
      let dateInt = parseInt(dateString);
      //Date regards numbers as unix timestamps, strings are processed differently
      res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
    } else {
      let dateObject = new Date(dateString);
  
      if (dateObject.toString() === "Invalid Date") {
        res.json({ error: "Invalid Date" });
      } else {
        res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
      }
    }
  });

  app.listen(port, () => {
    console.log("Listening on :" + port);
});

app.listen(port, () => {
    console.log("Listening on :" + port);
});