document.addEventListener('DOMContentLoaded', () => {
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };
  const width = 687.5;
  const height = 550;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;
  
  const svg = d3.select('#graph')
    .append('svg')
    .attr('width', '100%')
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + margin.bottom + ',' + margin.top + ')')

  const xScale = d3.scaleLinear()
    .range([0, graphWidth])
  const yScale = d3.scaleLinear()
    .range([graphHeight, 0])

  const addLine = (name, stat) => {
    const dataName = name.split(" ")[1].toLowerCase();

    d3.csv(`src/data/${dataName}.csv`)
      .then(data => {
        const parsedData = parseData(data, stat);


      })
  };

  const parseData = (data, stat) => {
    const arr = [];

    data.forEach(el => {
      arr.push({
        season: el.season,
        [stat]: parseFloat(el[stat])
      })
    })

    return arr;
  }
  debugger
  const drawGraph = data => {
    
  }
})