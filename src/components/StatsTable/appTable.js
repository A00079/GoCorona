import React from 'react';
import './appTable.css';
import TableRow from '../TableRow/tableRow.js';
import HeatMap from '../GraphsComponent/HeatMapChart/HeatmapChart.js';

class appTable extends React.Component {
    constructor() {
        super();
        this.state = {
            showHeatMap : false
        }
    }
    ShowHeatMap(){
        if(!this.state.showHeatMap){
            this.setState({ showHeatMap : true})
            let BtnText = document.querySelector("#root > div > header > div:nth-child(2) > div > div > span > button");
            BtnText.innerText = "Hide Heat Map";
        }else{
            this.setState({ showHeatMap : false})
            let BtnText = document.querySelector("#root > div > header > div:nth-child(2) > div > div > span > button");
            BtnText.innerText = "View Heat Map";
        }
        
    }
    render() {
        return (
            <div>
                <span className="tableToptext">COMPILED FROM STATE GOVT. NUMBERS 
                <button className="HeatMap" onClick={this.ShowHeatMap.bind(this)}>View Heat Map</button> </span>
                <div className={(this.state.showHeatMap)?"card HeatMapModal show" : "hide"  }>
                    <div className="card-body">
                        <HeatMap />
                    </div>
                </div>
                <section className="MainTablee">
                    <div className="tbl-header">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <thead>
                                <tr>
                                    <th className="HeadColor extPD">STATE</th>
                                    <th className="HeadColor extPD2">CONFIRMED</th>
                                    <th className="HeadColor extPD3">ACTIVE</th>
                                    <th className="HeadColor extPD4">RECOVERED</th>
                                    <th className="HeadColor extPD5">DECEASED</th>
                                    <th className="HeadColor extPD5"></th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="tbl-content">
                        <table cellPadding="0" cellSpacing="0" border="0">
                            <tbody>
                                
                                <TableRow />
                                
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

export default appTable;