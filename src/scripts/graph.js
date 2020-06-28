const { line } = require("d3");

document.addEventListener('DOMContentLoaded', () => {
  const margin = { top: 15, right: 15, bottom: 30, left: 30 };
  const width = 687.5;
  const height = 550;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;
  
  const svg = d3.select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.bottom + ',' + margin.top + ')')

  // X-AXIS
  // const xScale = d3.scaleLinear()
  //   .range([0, graphWidth])

  // svg.append("g")
  //   .attr("transform", "translate(0," + graphHeight + ")")
  //   .call(d3.axisBottom(xScale));

  // // Y-AXIS
  // const yScale = d3.scaleLinear()
  //   .range([graphHeight, 0])

  // svg.append("g")
  //   .call(d3.axisLeft(yScale));

  // DRAW LINE
  const colors = ['red', 'blue'];

  const drawLine = (name, stat) => {
    const dataName = name.split(" ")[1].toLowerCase();
    const lineColor = colors.shift();
    colors.push(lineColor);

    svg.selectAll('.axis').remove();
    d3.csv(`src/data/${dataName}.csv`)
      .then(data => {
        const parsedData = parseData(data, stat);
        
        // X-AXIS
        const xValues = parsedData.map(obj => obj.season)
        const xScale = d3.scalePoint()
          .domain(xValues)
          .range([0, graphWidth])

        svg.append("g")
          .attr("transform", "translate(0," + graphHeight + ")")
          .attr('class', 'axis')
          .call(d3.axisBottom(xScale));

        // Y-AXIS
        const yScale = d3.scaleLinear()
          .range([graphHeight, 0])
        if (stat === "pts") {
          yScale.domain([0, 50])

          svg.append("g")
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale).tickValues([0, 10, 20, 30, 40, 50]));
        } else if (stat === "reb" || stat === "ast") {
          yScale.domain([0, 15])

          svg.append("g")
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale).tickValues([0, 3, 6, 9, 12, 15]));
        } else if (stat === "stl" || stat === "blk") {
          yScale.domain([0, 4])

          svg.append("g")
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale).tickValues([0, 1, 2, 3, 4]));
        } else if (stat === "to") {
          yScale.domain([0, 6])

          svg.append("g")
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale).tickValues([0, 2, 4, 6]));
        } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
          yScale.domain([0, 1])

          svg.append("g")
            .attr('class', 'axis')
            .call(d3.axisLeft(yScale).tickValues([0, 0.2, 0.4, 0.6, 0.8, 1.0]));
        }

        // ADD LINE
        svg.append("path")
          .datum(parsedData)
          .attr("fill", "none")
          .attr("stroke", `${lineColor}`)
          .attr("stroke-width", 1.5)
          .attr('class', `line ${dataName}`)
          .attr("d", d3.line()
            .x(function(d) { return xScale(d.season) })
            .y(function(d) { return yScale(d[stat]) })
          )

        // ADD CIRCLE
        svg.append("g")
          .selectAll("dot")
          .data(parsedData)
          .enter()
          .append("circle")
          .attr('class', `dot ${dataName}`)
          .attr("cx", function(d) { return xScale(d.season) } )
          .attr("cy", function(d) { return yScale(d[stat]) } )
          .attr("r", 2.5)
          .attr("fill", `${lineColor}`)
      })
  }

  // TOGGLE LINE
  const toggleLine = () => {
    const playerNames = Array.from(document.querySelectorAll('.player-name'));


  }

  // UPDATE
  const update = (data) => {

  }

  // PARSE DATA
  const parseData = (data, stat) => {
    const arr = [];

    data.forEach(el => {
      arr.push({
        season: el.season,
        [stat]: parseFloat(el[stat])
      })
    })

    return arr;
  };

  // PLAYER BUTTONS
  const playerButtons = document.querySelectorAll('.player-button')

  playerButtons.forEach(button => {
    const name = button.innerHTML;

    button.addEventListener('click', () => {
      const allLines = Array.from(document.querySelectorAll('.line'))

      if (allLines.includes(d3.select(`.${name.split(" ")[1].toLowerCase()}`).node())) {
        svg.selectAll(`path.${name.split(" ")[1].toLowerCase()}`).remove()
        svg.selectAll(`circle.${name.split(" ")[1].toLowerCase()}`).remove()
        console.log('hello')
      } else if (allLines.length < 2) {
        drawLine(name, "pts");
      }
    })
  })
  
  // GRAPH BUTTONS
  const graphButtons = document.querySelectorAll('.graph-button');

  graphButtons.forEach(button => {

  })
})