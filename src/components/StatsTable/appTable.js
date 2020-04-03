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
                <section className="MainTable">
                    <div class="tbl-header">
                        <table cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th>STATE</th>
                                    <th>CONFIRMED</th>
                                    <th>ACTIVE</th>
                                    <th>RECOVERED</th>
                                    <th>DECEASED</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div class="tbl-content">
                        <table cellpadding="0" cellspacing="0" border="0">
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