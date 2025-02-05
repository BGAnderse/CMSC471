console.log('D3 Version:', d3.version);
const width = 600;
const height = 400;
const r = 50; // radius

const svg = d3.select('#vis')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

    svg.append('circle')
    //center of the circle
    .attr('cx', width*.75)
    .attr('cy', height/2)
    // radius of the circle
    .attr('r', r)
    // color of the circle
    .style('fill', 'orange');
    
    svg.append('circle')
    //center of the circle
    .attr('cx', width/2)
    .attr('cy', height/2)
    // radius of the circle
    .attr('r', r)
    // color of the circle
    .style('fill', 'steelblue');

    svg.append('circle')
    //center of the circle
    .attr('cx', width/4)
    .attr('cy', height/2)
    // radius of the circle
    .attr('r', r)
    // color of the circle
    .style('fill', 'green');

    svg.append('rect')
    .attr('width',40)
    .attr('height',40)
    .attr('x', width/2-20)
    .attr('y', height/8)
    .style('fill', 'steelblue');
    const data = [
        {x: width * .25, color: 'orange'},
        {x: width * .5, color: 'steelblue'},
        {x: width * .75, color: '#888888'}
    ]
    
    // Create circles based on data
    svg.selectAll('circle')
        .data(data)
        .join('circle')
        .attr('cx', (d, i) => d.x)
        .attr('cy', height/2)
        .attr('r', d => r)
        .attr('class', 'circle')
        .style('fill', (d, i) => d.color);