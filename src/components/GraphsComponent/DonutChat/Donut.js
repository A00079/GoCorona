import React from 'react';
import Chart from 'react-apexcharts';

class Donut extends React.Component{
    constructor(){
        super();
        this.state = {
          
            series: [44, 55, 13, 33],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              dataLabels: {
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: false
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
              }
            },
        }
          
    }
    render(){
        return (
            <Chart 
                options={this.state.options}
                series={this.state.series}
                type="donut"
                height="120"
                width="40%"
            />
        )
    }
}

export default Donut;