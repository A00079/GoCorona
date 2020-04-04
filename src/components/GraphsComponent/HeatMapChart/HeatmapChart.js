import React from 'react';
import Chart from 'react-apexcharts';

class HeatMap extends React.Component{
    constructor(){
        super();
        this.state = {
            series: [
                {
                  name: "Metric1",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric2",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric3",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric4",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric5",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric6",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric7",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric8",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                },
                {
                  name: "Metric9",
                  data: this.generateData(50, {
                    min: 0,
                    max: 90
                  })
                }
              ],
              options: {
                chart: {
                  height: 350,
                  type: 'heatmap',
                },
                dataLabels: {
                  enabled: false
                },
                colors: ["#008FFB"],
                title: {
                  text: 'COVID-19 Single Person Track'
                },
              },
        }
    }
    generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
          var x = "w" + (i + 1).toString();
          var y =
            Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      
          series.push({
            x: x,
            y: y
          });
          i++;
        }
        return series;
      }
    render(){
        return (
            <Chart 
            options={this.state.options}
            series={this.state.series}
            type="heatmap"
            height={350} 
            />
        )
    }
}

export default HeatMap;