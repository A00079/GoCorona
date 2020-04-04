import React from 'react';
import './MoreDetails.css';

class MoreDetails extends React.Component{
    constructor(){
        super();
        this.state = {
            showMoreDetails : false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.showDetails){
            console.log("True From MD...")
            this.setState({ showMoreDetails : nextProps.showDetails})
        }else{
            console.log("False From MD...")
            this.setState({ showMoreDetails : nextProps.showDetails})
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="card extraCard" className={(this.state.showMoreDetails)? 'card extraCard show' : 'hide'}>
                    <div className="card-body">
                        <span className="text-info">More Info</span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MoreDetails;