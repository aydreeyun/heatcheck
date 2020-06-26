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
  const xScale = d3.scaleLinear()
    .range([0, graphWidth])

  svg.append("g")
    .attr("transform", "translate(0," + graphHeight + ")")
    .call(d3.axisBottom(xScale));

  // Y-AXIS
  const yScale = d3.scaleLinear()
    .range([graphHeight, 0])

  svg.append("g")
    .call(d3.axisLeft(yScale));

  // DRAW LINE
  const drawLine = (name, stat) => {
    const dataName = name.split(" ")[1].toLowerCase();

    svg.selectAll('g').remove();
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
          .call(d3.axisBottom(xScale));

        // Y-AXIS
        if (stat === "pts") {
          const yScale = d3.scaleLinear()
          .domain([0, 50])
          .range([graphHeight, 0])

          svg.append("g")
            .call(d3.axisLeft(yScale).tickValues([0, 10, 20, 30, 40, 50]));
        } else if (stat === "reb" || stat === "ast") {
          const yScale = d3.scaleLinear()
          .domain([0, 12])
          .range([graphHeight, 0])

          svg.append("g")
            .call(d3.axisLeft(yScale).tickValues([0, 2, 4, 6, 8, 10, 12]));
        } else if (stat === "stl" || stat === "blk") {
          const yScale = d3.scaleLinear()
          .domain([0, 4])
          .range([graphHeight, 0])

          svg.append("g")
            .call(d3.axisLeft(yScale).tickValues([0, 1, 2, 3, 4]));
        } else if (stat === "to") {
          const yScale = d3.scaleLinear()
          .domain([0, 6])
          .range([graphHeight, 0])

          svg.append("g")
            .call(d3.axisLeft(yScale).tickValues([0, 2, 4, 6]));
        } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
          const yScale = d3.scaleLinear()
          .domain([0, 1])
          .range([graphHeight, 0])

          svg.append("g")
            .call(d3.axisLeft(yScale).tickValues([0, 0.2, 0.4, 0.6, 0.8, 1.0]));
        }

      })


        // svg.selectAll('.node')
        //   .data(parsedData)
        //   .enter()
        //   .append('circle')
        //   .attr('class', 'node')
        //   .attr("r", '3') // radius property of node
        //   .attr('fill', '#00ffff')
        //   // .attr("fill", "none")
        //   // .attr("stroke", "steelblue")
        //   // .attr("stroke-width", 1.5)
        //   // .attr("d", d3.line()
        //   //   .x(d => { debugger; return x(d.season) })
        //   //   .y(d => { debugger; return y(d[stat]) })
        //   // )
        // })

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
  const buttons = document.querySelectorAll('.player-button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      drawLine(button.innerHTML, "pts");
    })
  })

})