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
  @Input() childCandidateId;
  height: number = 360;
  width: number = 360;
  radius: number = Math.min(this.width, this.height) / 2;
  donutWidth: number = 75;


  constructor(private searchService: SearchService, private elementRef: ElementRef) { }

  ngOnInit() {
    var color = d3.scaleOrdinal(d3.schemeCategory20);
    var svg = d3.select('#chart')
                      .append('svg')
                      .attr('width', this.width)
                      .attr('height', this.height)
                      .append('g')
                      .attr('transform', 'translate(' + (this.width / 2) + ',' + (this.height / 2) + ')');

    var tooltip = d3.select('#chart')
                    .append('div')
                    .attr('class', 'tooltip');
                    tooltip.append('div')
                      .attr('class', 'label')
                      tooltip.append('div')
                        .attr('class', 'amount')
                    tooltip.append('div')
                      .attr('class', 'percent')
    let arc = d3.arc().innerRadius(this.radius - this.donutWidth).outerRadius(this.radius);
    d3.json('http://api.followthemoney.org/?p=0&c-t-id=' + this.childCandidateId + '&y=2016&c-exi=1&gro=d-eid&APIKey=' + this.searchService.apiKey + '&mode=json', function(data) {
      let records = data.records;
      let topTen = [];
      let dataset = ['#1f77b4', '#aec7e8', '#ffbb78', "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d58"]
      for (var i = 0; i < 10; i++) {
        topTen.push({label: dataset[i], contributor: records[i].Contributor.Contributor, amount: parseInt(records[i].Total_$.Total_$)});
      }
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
                    });

      path.on('mouseover', function(d: any) {
        var total = d3.sum(topTen.map(function(d){
            return d.amount;
        }));
        console.log(d)
        let percent = Math.round(1000 * d.data.amount / total) / 10;
        tooltip.select('.label').html(d.data.contributor);
        tooltip.select('.amount').html('$ ' + d.data.amount);
        tooltip.select('.percent').html(percent + '%');
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
      })
      })
    }
  }
