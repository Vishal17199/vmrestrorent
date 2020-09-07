const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.json())

//app.use(morgan('dev'))
//app.use(cors())
//setting up ejs
app.set("view engine", "ejs")
//set static path to show images , located in assets folder
app.use(express.static(path.join(__dirname, "assets")))

app.get("/", (req, res) => {
    res.render('home')
})
app.get("/menu", (req, res) => {
    res.render('menu')
})
app.get("/starter", (req, res) => {
    res.render('starter')
})
app.get("/drinks", (req, res) => {
    res.render('drinks')
})
app.get("/contactus", (req, res) => {
    res.render('contactus')
})
app.get("/gallery", (req, res) => {
    res.render('gallery')
})

app.listen(PORT, () => {
    console.log(PORT)
})