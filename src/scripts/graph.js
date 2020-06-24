document.addEventListener('DOMContentLoaded', () => {
  // const svg = d3.select('#graph')
  // const button = document.querySelector(".player-button");

  const sample = [
    [80, 40, 30, 90, 50, 100],
    [70, 100, 90, 20, 50, 10, 80]
  ]

  // console.log(svg)
  // console.log(svg.height)
  // console.log(svg.width)
  // console.log(sample)

  const width = 625, height = 500;
	const data = [10, 15, 20, 25, 30];
	
	const svg = d3.select("#graph")
		.append("svg")
		.attr("width", width)
    .attr("height", height)
    .style('color', '#f2f2f2')

	const xScale = d3.scaleLinear()
		.domain([0, d3.max(data)])
		.range([0, width - 50]);

	const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([height - 50, 0]);

	const xAxis = d3.axisBottom()
    .scale(xScale)
    .tickSize(5)

	const yAxis = d3.axisLeft()
    .scale(yScale)
    .tickSize(5)

  svg.append("g")
    .attr("transform", "translate(30, 10)")
    .call(yAxis);

	const xAxisTranslate = height - 50 + 10;

  svg.append("g")
    .attr("transform", "translate(30, " + xAxisTranslate  +")")
    .call(xAxis)

  // button.addEventListener('click', () => {
  //   console.log("poop")
  // })
})