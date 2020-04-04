import React from 'react';
import './appTable.css';
import TableRow from '../TableRow/tableRow.js';

class appTable extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <span className="tableToptext">COMPILED FROM STATE GOVT. NUMBERS </span>
                
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