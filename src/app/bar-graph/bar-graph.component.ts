import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SearchService } from '../search.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css'],
  providers: [SearchService]
})
export class BarGraphComponent implements OnInit {
  @Input() childCanId;
  constructor(private searchService: SearchService, private elementRef: ElementRef) { }

  ngOnInit() {

    var margin = {top: 20, right: 80, bottom: 30, left: 90},
    width = 1260 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    var x = d3.scaleBand()
              .range([0, width])
              .padding(0.1);
    var y = d3.scaleLinear()
              .range([height, 0]);

    var svg = d3.select(".bar-chart").append("svg")

        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
      d3.json('http://api.followthemoney.org/?p=0&c-t-id=' + this.childCanId + '&y=2016&c-exi=1&gro=d-eid&APIKey=' + this.searchService.apiKey + '&mode=json', function(data) {
        let dataset = ['#1f77b4', '#aec7e8', '#ffbb78', "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d58"];
        let records = data.records
        let topTenContributors = [];
        for(var i = 0; i < 10; i++) {
          topTenContributors.push({contributor: records[i].Contributor.Contributor, amount: parseInt(records[i].Total_$.Total_$), label: dataset[i]});

          }

          x.domain(topTenContributors.map(function(d: any) {
            return d.contributor;
          }));
          y.domain([0, d3.max(topTenContributors, function(d) {
            return d.amount;
          })]);

          svg.selectAll(".bar")
            .data(topTenContributors)
          .enter().append("rect")
            .attr("class", "bar")
           .style("fill", function(d) {
             return d.label;
           })
            .attr("x", function(d) { return x(d.contributor); }).transition().duration(2500)
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.amount); })
            .attr("height", function(d) { return height - y(d.amount);});

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));
    })

  }
}
