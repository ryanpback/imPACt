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
  @Input() candidates: Object[];
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

        let dataset = ['#1f77b4', '#aec7e8', '#ffbb78', "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d58"];
        let records = this.candidates.slice(0,5)
        let topTenContributors = [];

        records.forEach(function(record: any, index) {
          topTenContributors.push({candidate: record.Candidate.Candidate, amount: parseInt(record.Total_$.Total_$), label: dataset[index]});
        })
          x.domain(topTenContributors.map(function(d: any) {
            return d.candidate;
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
            .attr("x", function(d) { return x(d.candidate); }).transition().duration(2500)
            .attr("width", x.bandwidth())
            .attr("y", function(d) { return y(d.amount); })
            .attr("height", function(d) { return height - y(d.amount);});

        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

  }
}
