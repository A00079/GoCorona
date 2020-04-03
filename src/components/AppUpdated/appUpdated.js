import React from 'react';
import './update.css';

class appUpdated extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="BadgeUpdate">
                    <ul className="badgeText">
                        <li className="badgeFontSZ">
                            <span className="text oddText">Last Updated</span>
                            <span className="text extTxt">4 Min ago</span>
                        </li>
                        <li className="badgeFontSZ">
                            <span className="text oddText">Updates Every</span>
                            <span className="text extTxt2">5 min</span>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default appUpdated;