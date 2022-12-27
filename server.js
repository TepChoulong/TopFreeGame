const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/AboutUs", (req, res) => {
    res.sendFile(__dirname + "/public/view/about_us.html");
});

app.get("/News", (req, res) => {
    res.sendFile(__dirname + "/public/view/news_page.html");
});

app.get("/TopFreeShootingGameOnSteam", (req, res) => {
    res.sendFile(__dirname + "/public/view/top_free_shooting_game_on_steam.html");
});

app.listen(port, (err) => {
    if (!err) {
        console.log(`http://localhost:${port}`)
    } else {
        console.log(err);
    }
});
