
$(() => {
    $("#stock-select-btn").click(() => {

        let stra_select = $("#strategies-select").val()
        let date_select = $("#date-select").val()

        $.ajax({
            url: `/strategy/stockData?stra_select=${stra_select}&date_select=${date_select}`,
            type: "GET"
        })
            .then(res => {
                console.log(res)
                createTable(res)
            })
            .catch(err => {
                console.log(err)
            })

    })
})


let createTable = (data) => {
    let tableBody = data.map((ele, i) => `
        <tr>
            <td>${ele.stockId}</td>
            <td>${ele.stockPrice}</td>
            <td>${ele.stock10ma}</td>
            <td>${ele.stock20ma}</td>
            <td>${ele.stock60ma}</td>
        </tr>
    `).join("");


    $("#stock-select-table tbody").html(tableBody);
};