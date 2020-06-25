// document.addEventListener('DOMContentLoaded', () => {
  // const svg = d3.select('#graph')
  // const button = document.querySelector(".player-button");

  // const sample = [
  //   [80, 40, 30, 90, 50, 100],
  //   [70, 100, 90, 20, 50, 10, 80]
  // ]

  // const width = 625, height = 500;
	// const data = [10, 15, 20, 25, 30];
	
	// const svg = d3.select("#graph")
	// 	.append("svg")
	// 	.attr("width", width)
  //   .attr("height", height)
  //   .style('color', '#fff')

	// const xScale = d3.scaleLinear()
	// 	.domain([0, d3.max(data)])
	// 	.range([0, width - 50]);

	// const yScale = d3.scaleLinear()
  //   .domain([0, d3.max(data)])
  //   .range([height - 50, 0]);

	// const xAxis = d3.axisBottom()
  //   .scale(xScale)
  //   .tickSize(7)
  //   .tickPadding(5)

	// const yAxis = d3.axisLeft()
  //   .scale(yScale)
  //   .tickSize(5)

  // svg.append("g")
  //   .attr("transform", "translate(30, 10)")
  //   .call(yAxis);

	// const xAxisTranslate = height - 50 + 10;

  // svg.append("g")
  //   .attr("transform", "translate(30, " + xAxisTranslate  +")")
  //   .call(xAxis)

  // const line = svg.append("line")
  //   .attr("x1", 32)
  //   .attr("x2", 500)
  //   .attr("y1", 50)
  //   .attr("y2", 100)
  //   .attr("stroke", "black")
  //   .attr("stroke-width", 5);

  const api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2019-04-01';

/**
 * Loading data from API when DOM Content has been loaded'.
 */
document.addEventListener("DOMContentLoaded", function(event) {
fetch(api)
    .then(function(response) { return response.json(); })
    .then(function(data) {
        var parsedData = parseData(data);
        console.log(data)
        console.log(parsedData)
        drawChart(parsedData);
    })
    .catch(function(err) { console.log(err); })
});

/**
 * Parse data into key-value pairs
 * @param {object} data Object containing historical data of BPI
 */
function parseData(data) {
    var arr = [];
    for (var i in data.bpi) {
        arr.push({
            date: new Date(i), //date
            value: +data.bpi[i] //convert string to number
        });
    }
    return arr;
}

/**
 * Creates a chart using D3
 * @param {object} data Object containing historical data of BPI
 */
function drawChart(data) {
  var svgWidth = 600, svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3.select('#graph')
  .append('svg')
      .attr("width", svgWidth)
      .attr("height", svgHeight);
      
  var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var x = d3.scaleTime()
      .rangeRound([0, width]);

  var y = d3.scaleLinear()
      .rangeRound([height, 0]);

  var line = d3.line()
      .x(function(d) { return x(d.date)})
      .y(function(d) { return y(d.value)})
      x.domain(d3.extent(data, function(d) { return d.date }));
      y.domain(d3.extent(data, function(d) { return d.value }));

  g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

  g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");

  g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
}


// })