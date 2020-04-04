import React from 'react';
import Chart from 'react-apexcharts';
import './Bar.css';
 
class Bar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            options: {
                chart: {
                    background : '#f4f4f4',
                    foreColor: '#333'
                },
                xaxis :{
                    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States', 'China', 'Germany' 
                    ]
                },
                plotOptions: {
                    bar: {
                      horizontal: false,
                    }
                  },
                  fill:{
                      colors: ['#f44336']
                  },
                  dataLabels: {
                    enabled: false
                  },
            },
            series:[{
                name: 'Infected',
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
            }]
        }
    }
    render(){
        return(
                <Chart 
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height="250"
                width="40%"
            />
        )
    }
}

export default Bar;