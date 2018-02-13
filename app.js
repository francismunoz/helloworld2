const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, process.env.IP, function(){
console.log('LISTENING');

});

//app.listen(3000, () => console.log('Example app listening on port 3000!'))