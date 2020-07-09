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

  // DRAW LINE
  let currXAxisVal = 0;
  let currXAxis;
  const currPlayers = {};

  const drawLine = (name, stat, color) => {
    const dataName = name.split(" ")[1].toLowerCase();
    currPlayers[name] = { color: color };

    svg.selectAll('.axis').remove();
    d3.csv(`src/data/${dataName}.csv`)
      .then(data => {
        const parsedData = parseData(data, stat);
        
        // X-AXIS
        const xValues = parsedData.map(obj => obj.season)

        if (xValues.length > currXAxisVal) {
          currXAxisVal = xValues.length;
          currXAxis = xValues;

          if (Object.keys(currPlayers).length === 2) {
            const firstPlayer = Object.keys(currPlayers)[0];
            const firstPlayerName = firstPlayer.split(" ")[1].toLowerCase();
  
            redrawLine(firstPlayerName, stat, currPlayers[firstPlayer].color);
          }
        }

        const xScale = d3.scalePoint()
          .domain(currXAxis)
          .range([0, graphWidth])

        svg.append("g")
          .attr("transform", "translate(0," + graphHeight + ")")
          .attr('class', 'axis x-axis')
          .call(d3.axisBottom(xScale));

        // Y-AXIS
        const yScale = d3.scaleLinear()
          .range([graphHeight, 0])
        if (stat === "pts") {
          yScale.domain([0, 50])

          svg.append("g")
            .attr('class', 'axis y-axis')
            .call(d3.axisLeft(yScale).tickValues([0, 10, 20, 30, 40, 50]));
        } else if (stat === "reb" || stat === "ast") {
          yScale.domain([0, 15])

          svg.append("g")
            .attr('class', 'axis y-axis')
            .call(d3.axisLeft(yScale).tickValues([0, 3, 6, 9, 12, 15]));
        } else if (stat === "stl" || stat === "blk") {
          yScale.domain([0, 4])

          svg.append("g")
            .attr('class', 'axis y-axis')
            .call(d3.axisLeft(yScale).tickValues([0, 1, 2, 3, 4]));
        } else if (stat === "to") {
          yScale.domain([0, 6])

          svg.append("g")
            .attr('class', 'axis y-axis')
            .call(d3.axisLeft(yScale).tickValues([0, 2, 4, 6]));
        } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
          yScale.domain([0, 1])

          svg.append("g")
            .attr('class', 'axis y-axis')
            .call(d3.axisLeft(yScale).tickValues([0, 0.2, 0.4, 0.6, 0.8, 1.0]));
        }

        // ADD LINE
        svg.append("path")
          .datum(parsedData)
          .attr("fill", "none")
          .attr("stroke", `${color}`)
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
          .attr("fill", `${color}`)
      })
  }

  const redrawLine = (name, stat, color) => {
    svg.selectAll(`path.${name}`).remove();
    svg.selectAll(`circle.${name}`).remove();

    d3.csv(`src/data/${name}.csv`)
      .then(data => {
        const parsedData = parseData(data, stat);

        const xScale = d3.scalePoint()
        .domain(currXAxis)
        .range([0, graphWidth])

        const yScale = d3.scaleLinear()
        .range([graphHeight, 0])

        if (stat === "pts") {
          yScale.domain([0, 50])
        } else if (stat === "reb" || stat === "ast") {
          yScale.domain([0, 15])
        } else if (stat === "stl" || stat === "blk") {
          yScale.domain([0, 4])
        } else if (stat === "to") {
          yScale.domain([0, 6])
        } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
          yScale.domain([0, 1])
        }

        svg.append("path")
        .datum(parsedData)
        .attr("fill", "none")
        .attr("stroke", `${color}`)
        .attr("stroke-width", 1.5)
        .attr('class', `line ${name}`)
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
          .attr('class', `dot ${name}`)
          .attr("cx", function(d) { return xScale(d.season) } )
          .attr("cy", function(d) { return yScale(d[stat]) } )
          .attr("r", 2.5)
          .attr("fill", `${color}`)
      })
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

  // LEGEND
  const legend = document.querySelector('.graph-legend')

  const addLegend = (name, color) => {
    const legendElement = document.createElement('p');
    legendElement.innerHTML = name;
    legendElement.classList.add('legend-item', `${color}`);
    legend.appendChild(legendElement);
  }

  // PLAYER BUTTONS
  const playerButtons = Array.from(document.querySelectorAll('.player-button'));
  const colors = { red: false, dodgerblue: false };

  playerButtons.forEach(button => {
    const name = button.innerHTML;

    button.addEventListener('click', () => {
      const allLines = Array.from(document.querySelectorAll('.line'));

      if (allLines.includes(d3.select(`.${name.split(" ")[1].toLowerCase()}`).node())) {
        const lineColor = d3.select(`.${name.split(" ")[1].toLowerCase()}`).attr('stroke');
        const legendItem = document.querySelector(`.graph-legend .${lineColor}`);

        // REMOVE LINE AND CIRCLE
        svg.selectAll(`path.${name.split(" ")[1].toLowerCase()}`).remove()
        svg.selectAll(`circle.${name.split(" ")[1].toLowerCase()}`).remove()

        // REMOVE LEGEND ITEM
        legendItem.remove();

        // DELETE PLAYER FROM CURRENT PLAYER OBJECT
        delete currPlayers[name];

        // TOGGLE FALSE DELETED COLOR
        colors[lineColor] = false;
      } else if (allLines.length < 2) {
        let lineColor;
        if (Object.values(colors).every(bool => !bool)) {
          lineColor = "red"
        } else if (colors['red']) {
          lineColor = "dodgerblue"
        } else if (colors['dodgerblue']) {
          lineColor = "red"
        }

        colors[lineColor] = true;
        drawLine(name, currentStat, lineColor);
        addLegend(name, lineColor)
      }
    })
  })
  
  // GRAPH BUTTONS
  let currentStat = "pts"

  const graphButtons = document.querySelectorAll('.graph-button');

  graphButtons.forEach(button => {
    button.addEventListener('click', () => {
      graphButtons.forEach(button => {
        button.classList.remove('active');
      })

      currentStat = button.innerHTML.toLowerCase();
      button.classList.add('active');

      svg.selectAll('.line').remove();
      svg.selectAll('.dot').remove();

      Object.keys(currPlayers).forEach(player => {
        drawLine(player, currentStat, currPlayers[player].color);
      })
    })
  })
})