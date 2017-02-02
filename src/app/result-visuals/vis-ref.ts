// var svgContainer = d3.select("body").append("svg")

var viz = d3.select('#viz-wrapper')
                  .append('svg')
                  .attr('id', 'viz')
                  .attr("width", 500)
                  .attr("height", 800)
                  .style("border", "1px solid black");
d3.json('http://api.followthemoney.org/?p=0&c-t-id=' + this.childCandidateId + '&y=2016&c-exi=1&gro=d-eid&APIKey=' + this.searchService.apiKey + '&mode=json', function(data) {
  let records = data.records
  var dots = viz.selectAll('circle')
                .data(records)
                .enter()
                .append('circle');
  dots.attr('r', function(d) {
    return Math.abs(parseInt(d['Total_$']['Total_$'])/1000);
  })
  dots.attr('cx', function(d) {
    return Math.max(0 + 50, Math.random() * 500 - 50)
  })
  dots.attr('cy', function(d) {
    return Math.max(0 + 50, Math.random() * 800 - 50)
  })
});
