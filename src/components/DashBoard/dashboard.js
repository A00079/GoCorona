import React, { Component } from 'react';
import './dashboard.css';
import Loading from '../AppLoader/loading.js';
import StatTable from '../StatsTable/appTable.js';


class dashboard extends Component {
    constructor() {
        super();
        this.state = {
            loader: null,
            showContent:null
        }
    }
    componentDidMount() {
        setTimeout(() => {
                this.setState({ loader: true, showContent : true });
                let elem = document.getElementById("Loader");
                elem.parentNode.removeChild(elem);
        }, 2500);
    }
    render() {
        return (
            <div>
                <div id="Loader" className={`box ${this.state.loader ? "hide" : "show"}`}>
                    <Loading  />
                </div>
                <div className={`box ${this.state.showContent ? "show" : "hide"}`}>
                    <StatTable/>
                </div>
            </div>
        )
    }
}
export default dashboard;