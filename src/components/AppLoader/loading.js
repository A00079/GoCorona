import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";

class loading extends React.Component {
    constructor() {
        super();
        this.state = {
            done: null
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <ReactLoading type={"bars"} color={"black"} />
            </div>
        )
    }
}

export default loading;