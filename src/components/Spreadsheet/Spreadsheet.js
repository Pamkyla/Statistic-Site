import React from 'react';
import SpreadsheetItem from '../SpreadsheetItem';

import './Spreadsheet.css';

class Spreadsheet extends React.Component {
    render() {
        const Data = this.props;
        const Data_local = Data.Data;
        const { totalSubs, subsPerDay, subsPerWeek, subsPerMonth, UnsubsPerDay, UnsubsPerWeek, UnsubsPerMonth } = Data_local;
        const i = UnsubsPerMonth;

        if (i == undefined) {
            return (
                <>
                    Loading...
                </>
            )
        }
        if (i !== undefined) {
        }
        return (
            <>
                <p className="table_name">YOUTUBE STATS SUMMARY / USER STATISTICS FOR CS:GO BEST MOMENTS (2020-12-06 - 2020-12-19)</p>
                <table>
                    <tbody className="Spreadsheet">
                        <tr>
                            <th key="0">Period</th>
                            <th key="1">Total subs</th>
                            <th key="2">Subs</th>
                            <th key="3">Unsubs</th>
                            <th key="4">Difference</th>
                        </tr>
                        <tr className="spreadsheet_item_sum">
                            <td key="5">Per day</td>
                            <td key="6">{totalSubs}</td>
                            <td key="7">{subsPerDay.count}</td>
                            <td key="8">{UnsubsPerDay.count}</td>
                            <td key="9">{subsPerDay.count - UnsubsPerDay.count}</td>
                        </tr>
                        <tr className="spreadsheet_item_sum">
                            <td key="10">Per week</td>
                            <td key="11">{totalSubs}</td>
                            <td key="12">{subsPerWeek.count}</td>
                            <td key="13">{UnsubsPerWeek.count}</td>
                            <td key="14">{subsPerWeek.count - UnsubsPerWeek.count}</td>
                        </tr>
                        <tr className="spreadsheet_item_sum">
                            <td key="15">Per mounth</td>
                            <td key="16">{totalSubs}</td>
                            <td key="17">{subsPerMonth.count}</td>
                            <td key="18">{UnsubsPerMonth.count}</td>
                            <td key="19">{subsPerMonth.count - UnsubsPerMonth.count}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="share_btn">See Full Monthly Statistics</button>
                <button className="share_btn">See Full Monthly Statistics</button>
                <button className="share_btn">See Full Monthly Statistics</button>
            </>
        );

    }
}

export default Spreadsheet;