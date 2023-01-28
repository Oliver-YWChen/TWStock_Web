const express = require("express");
const path = require("path");
const hbs = require("hbs");

const strategyRouter = require("./router/strategy.js");
const aboutUsRouter = require("./router/aboutUs.js");

const app = express();
const portNum = 3000;

app.engine("html", hbs.__express);
app.set("views", path.join(__dirname, "application", "views"));
app.use(express.static(path.join(__dirname, "application")));

app.get("/", (req, res) => {
    res.render("index.html")
})

app.use("/strategy", strategyRouter)
app.use("/aboutUs", aboutUsRouter)

app.listen(portNum, () => {
    console.log(`Server is running at localhost:${portNum}`)
})