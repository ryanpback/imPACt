// var svgContainer = d3.select("body").append("svg")

path.on('mouseover', function(d: any) {
  var total = d3.sum(data.map(function(d){
    return d.amount;
  }));
var percent = Math.round(1000 * d.data.amount / total) / 10;
tooltip.select('.label').html(d.data.label)
tooltip.select('.amount').html(d.data.label)
tooltip.select('.percent').html(percent + '%')
tooltip.style('display', 'block');
});
