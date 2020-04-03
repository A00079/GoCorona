import React from 'react';
import './tableRow.css';

class tableRow extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <tr>
                    <td className="text-danger">AA</td>
                    <td className="text-danger">AUSTRALIAN COMPANY </td>
                    <td className="text-danger">$1.38</td>
                    <td className="text-danger">+2.01</td>
                    <td className="text-danger">-0.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">AAD</td>
                    <td className="text-danger">AUSENCO</td>
                    <td className="text-danger">$2.38</td>
                    <td className="text-danger">-0.01</td>
                    <td className="text-danger">-1.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">AAX</td>
                    <td className="text-danger">ADELAIDE</td>
                    <td className="text-danger">$3.22</td>
                    <td className="text-danger">+0.01</td>
                    <td className="text-danger">+1.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">XXD</td>
                    <td className="text-danger">ADITYA BIRLA</td>
                    <td className="text-danger">$1.02</td>
                    <td className="text-danger">-1.01</td>
                    <td className="text-danger">+2.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">AAC</td>
                    <td className="text-danger">AUSTRALIAN COMPANY </td>
                    <td className="text-danger">$1.38</td>
                    <td className="text-danger">+2.01</td>
                    <td className="text-danger">-0.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">AAD</td>
                    <td className="text-danger">AUSENCO</td>
                    <td className="text-danger">$2.38</td>
                    <td className="text-danger">-0.01</td>
                    <td className="text-danger">-1.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">AAX</td>
                    <td className="text-danger">ADELAIDE</td>
                    <td className="text-danger">$3.22</td>
                    <td className="text-danger">+0.01</td>
                    <td className="text-danger">+1.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">XXD</td>
                    <td className="text-danger">ADITYA BIRLA</td>
                    <td className="text-danger">$1.02</td>
                    <td className="text-danger">-1.01</td>
                    <td className="text-danger">+2.36%</td>
                </tr>
                <tr>
                    <td className="text-danger">XXD</td>
                    <td className="text-danger">ADITYA BIRLA</td>
                    <td className="text-danger">$1.02</td>
                    <td className="text-danger">-1.01</td>
                    <td className="text-danger">+2.36%</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default tableRow;