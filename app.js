const express = require('express') ;
const cors = require("cors") ;

const app = express() ;
app.use(cors()) ;

app.get('/', (req, res) => {
    res.send("working") ;
})

app.get('/testing', (req, res) => {
    let data = require('./db.json') ;
    let p = Math.floor(Math.random() * data.length) ;
    res.json(data[p]) ;
})

app.listen(3000, () => {
    console.log("listening on port 3000") ;
}) 