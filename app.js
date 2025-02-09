const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/start", (req,res) => {
    res.render("page1.ejs");
});
app.get("/decks/:number", (req, res) => {
    let decknum=req.params.number;
    res.render("page2.ejs",{decknum});
});
app.get("/decks/:number/open", (req, res) => {
    let decknum=req.params.number;
    res.render("page3.ejs",{decknum});
});
app.get("/timer", (req, res) => {
    res.render("page4.ejs");
});
app.get("/results", (req, res) => {
    res.render("page5.ejs");
});
app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`);
})