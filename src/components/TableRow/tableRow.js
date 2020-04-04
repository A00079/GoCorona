import React from 'react';
import './tableRow.css';
import MoreDetails from '../CountryDetails/MoreDetails.js';
import { connect } from 'react-redux';

class tableRow extends React.Component {
    constructor() {
        super();
        this.state = {
            moreDetailsFlag: false
        }
    }
    MoreDetails(){
        // this.props.fetchApi('https://api.covid19india.org/data.json');
        if(this.state.moreDetailsFlag == false){
            this.setState({ moreDetailsFlag : true})
        }else{
            this.setState({ moreDetailsFlag : false})
        }
    }
    render() {
        console.log("First Second On React",this.props)
        return (
            <React.Fragment>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this)}>More Info</button></td>
                </tr>
                <tr>
                    <td>
                        <MoreDetails showDetails={this.state.moreDetailsFlag}/>
                    </td>
                </tr>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        response : state.response
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        fetchApi: (url) =>{
            dispatch({ type:'FETCH_DATA', url: url})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(tableRow);