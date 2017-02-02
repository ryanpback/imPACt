import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SearchService } from '../search.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-result-visuals',
  templateUrl: './result-visuals.component.html',
  styleUrls: ['./result-visuals.component.css'],
  providers: [SearchService]
})
export class ResultVisualsComponent implements OnInit {
  @Input() contributors: Object[];
  height: number = 400;
  width: number = 400;
  radius: number = Math.min(this.width, this.height) / 2 - 8;
  donutWidth: number = 75;


  constructor(private searchService: SearchService, private elementRef: ElementRef) { }

  ngOnInit() {
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var svg = d3.select('#chart')
                      .append('svg')
                      .attr('width', this.width)
                      .attr('height', this.height)
                      .attr('style', 'margin:0 auto; display:block;')
                      .append('g')
                      .attr('transform', 'translate(' + (this.width  / 2 ) + ',' + (this.height / 2) + ')')


    var arc = d3.arc().innerRadius(this.radius - this.donutWidth).outerRadius(this.radius);

    var tooltip = d3.select('#chart')
                    .append('div')
                    .attr('class', 'tooltip');
    tooltip.append('div')
      .attr('class', 'contributor')
    tooltip.append('div')
      .attr('class', 'amount')
    tooltip.append('div')
      .attr('class', 'percent')

      let topTen = [];
      let dataset = ['#1f77b4', '#aec7e8', '#ffbb78', "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d58"];
      this.contributors.slice(0,10).forEach(function(record: any, index) {
        topTen.push({label: dataset[index], contributor: record.Contributor.Contributor, amount: parseInt(record.Total_$.Total_$)
        });
      })
      var pie = d3.pie().value(function(d: any) {
        return d.amount;
      })
      .sort(null);
      var path = svg.selectAll('path')
                    .data(pie(topTen))
                    .enter()
                    .append('path')
                    .attr('d', <any>arc)
                    .attr('fill', function(d: any) {
                    return color(d.data.label)
                    })
                    .style('stroke', '#333')
                    .style('stroke-width', '2px');


      var text = setTimeout(function() {
                  svg.selectAll('text')
                  .data(pie(topTen))
                  .enter()
                  .append('text')
                  .transition()
                  .duration(200)
                  .attr("transform", function(d: any) {
                    return "translate(" + arc.centroid(d) + ")";
                  })
                  .attr("dy", ".4em")
                  .attr('text-anchor', 'middle')
                  .text(function(d: any) {
                    var total = d3.sum(topTen.map(function(d){
                        return d.amount;
                    }));
                    return Math.round(1000 * d.data.amount / total) / 10 + '%';
                  })
                  .style("color", '#fff');
                }, 1000);

      path.on('mouseover', function(d: any) {

        tooltip.select('.contributor').html(d.data.contributor);
        tooltip.select('.amount').html('$ ' + d.data.amount);
        tooltip.style('display', 'block');
        tooltip.style('opacity', 1);
        tooltip.style('background-color', 'rgba(255,255,255,.9)');
        tooltip.style('padding', '4px');
        tooltip.select('.label').style('color', '#333');
      });

      path.on('mouseout', function() {
        tooltip.style('display', 'none')
      });

      path.on('mousemove', function(d) {
        tooltip.style('top', (d3.event.layerY + 10) + 'px')
              .style('left', (d3.event.layerX + 10) + 'px')
      });

      path.transition()
        .duration(1000)
        .attrTween('d', function(d: any) {
            var interpolate = d3.interpolate({startAngle: 0, endAngle: 0}, d);
            return function(t: any) {
                return arc(interpolate(t));
            };
        })
    }
  }
