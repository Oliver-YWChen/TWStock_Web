const express = require("express");
const fs = require("fs");
const router = express.Router();

let readFilePromise = (dataPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
};


router.get("/", (req, res) => {
    res.render("strategy.html")
})

router.get("/stockData", async (req, res) => {
    try {
        let stra_select = req.query.stra_select
        let date_select = req.query.date_select

        if (date_select === "date220207") {
            if (stra_select === "strategy1") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data1.json")
                res.json(data)
            } else if (stra_select === "strategy2") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data2.json")
                res.json(data)
            } else {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data3.json")
                res.json(data)
            }
        } else if (date_select === "date220208") {
            if (stra_select === "strategy1") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data1.json")
                res.json(data)
            } else if (stra_select === "strategy2") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data2.json")
                res.json(data)
            } else {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data3.json")
                res.json(data)
            }
        } else if (date_select === "date220209") {
            if (stra_select === "strategy1") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data1.json")
                res.json(data)
            } else if (stra_select === "strategy2") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data2.json")
                res.json(data)
            } else {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data3.json")
                res.json(data)
            }
        } else if (date_select === "date220210") {
            if (stra_select === "strategy1") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data1.json")
                res.json(data)
            } else if (stra_select === "strategy2") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data2.json")
                res.json(data)
            } else {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data3.json")
                res.json(data)
            }
        } else if (date_select === "date220211") {
            if (stra_select === "strategy1") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data1.json")
                res.json(data)
            } else if (stra_select === "strategy2") {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data2.json")
                res.json(data)
            } else {
                let data = await readFilePromise("stock_json/2022-02-07/chosen_data3.json")
                res.json(data)
            }
        }

    } catch (err) {
        res.status(500).jason({ messege: "系統有問題！" })
    }
})


module.exports = router