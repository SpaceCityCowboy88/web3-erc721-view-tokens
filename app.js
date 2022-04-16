const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set("view engine", "ejs")

app.get("/", (req, res) => {
	res.render("index")
}) 

// app.use(express.static("/resources", {
//     extensions: ['html']
// }))

app.use(express.static(__dirname + "/resources"));
app.listen(4000)
