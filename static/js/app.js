var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach((UFOSighting) => {
	var row = tbody.append("tr");
	Object.entries(UFOSighting).forEach(([key, value]) => {
		var cell = tbody.append("td");
		cell.text(value);
		})
	});

var submit = d3.select("#filter-btn");

submit.on("click", function() {
	d3.event.preventDefault();
	d3.select("tbody").html("");
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

	filteredData.forEach((UFOSighting) => {
		var row = tbody.append("tr");
		Object.entries(UFOSighting).forEach(([key, value]) => {
			var cell = tbody.append("td");
			cell.text(value);
		})
	});
});