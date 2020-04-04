import React from 'react';
import './tableRow.css';
import MoreDetails from '../CountryDetails/MoreDetails.js';

class tableRow extends React.Component {
    constructor() {
        super();
        this.state = {
            moreDetailsFlag: false
        }
    }
    MoreDetails(){
        console.log('More Details...')
        if(this.state.moreDetailsFlag == false){
            this.setState({ moreDetailsFlag : true})
        }else{
            this.setState({ moreDetailsFlag : false})
        }
    }
    render() {
        return (
            <React.Fragment>
                <MoreDetails showDetails={this.state.moreDetailsFlag}/>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">1</big>
                            <span className="extShiftleft">China</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>-0.36%</span></td>
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">2</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">3</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">4</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">5</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">6</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                </tr>
                <tr>
                    <td className="text-danger">
                        <div>
                            <big className="RowCount">7</big>
                            <span className="extShiftleft">ADELAIDE</span>
                        </div>
                    </td>
                    <td className="extConfirm"><span>+2.01</span></td>
                    <td className="extActive">1.38</td>
                    <td className="extRecovered"><span>+2.01</span></td>
                    <td className="text-danger extDeceased"><span>+2.01%</span></td>
                </tr>
            </React.Fragment>
        )
    }
}

export default tableRow;