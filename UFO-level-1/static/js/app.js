// from data.js
var tableData = data;

// YOUR CODE HERE!
var table_body = d3.select("tbody");
tableData.forEach((report) => {
    console.log(data);
    var a = table_body.append('tr');
        Object.entries(report).forEach(([key, value]) => {
            console.log(key, value);
                var cell = a.append('td');
                    cell.text(value);
    });
});

// this controls the submit button
var Submit = d3.select("#filter-btn");
    Submit.on("click", function(){
        d3.select("tbody").html("");
        d3.event.preventDefault();

var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);
        var filteredData = tableData.filter(record => record.datetime === dateTime);
            console.log(filteredData);

filteredData.forEach((report) => {
    var b = table_body.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
            var cell = b.append('td');
                cell.text(value);
    });
});
});
