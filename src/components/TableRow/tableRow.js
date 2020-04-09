import React from 'react';
import './tableRow.css';
import MoreDetails from '../CountryDetails/MoreDetails.js';
import { connect } from 'react-redux';
import { fetchTableRows } from '../../actions/tablerowAction.js';
import { TableRowMoreDetails } from '../../actions/TableRowMoreDetails.js';


class tableRow extends React.Component {
    constructor() {
        super();
        this.state = {
            moreDetailsFlag: false
        }
    }
    MoreDetails(incrementor){
        this.props.TableRowMoreDetails(incrementor);
        if(this.state.moreDetailsFlag == false){
            this.setState({ moreDetailsFlag : true})
        }else{
            this.setState({ moreDetailsFlag : false})
        }
    }
    componentWillMount(){
        this.props.fetchTableRows();
    }
    render() {
        // console.log("First Second On React",this.props.response)
        console.log("Second On React",this.props.moreDetails)
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this,2)}>More Info</button></td>
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
                    <td className="text-danger moreinfo"><button title="Click for More Info" onClick={this.MoreDetails.bind(this,10)}>More Info</button></td>
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
        response : state.response.response,
        moreDetails: state.rowdetails.moreDetails
    }
}
export default connect(mapStateToProps, { fetchTableRows, TableRowMoreDetails })(tableRow);