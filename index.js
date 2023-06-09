const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello From Express Server running in aws!!!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
