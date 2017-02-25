window.onload = function(){
	Main();
};
function Main()
{
	var obj = {"id": 0, "name": "木村", "age": 25};
	var table = d3.select("body").insert("table",":first-child");
	var thead = table.append("thead");
	var tbody = table.append("tbody");

	var tr = tbody
	.selectAll("tr")
	  .data(d3.entries(obj))
	  .enter()
	  .append("tr")
	  .append("th").text(function(d){return d.key;})
	;

	tbody
	.selectAll("tr")
	.append("td").text(function(d){return d.value;});
}
