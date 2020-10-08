import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import "./TableFilter.css";

const tableFilter = (props) => {
    return(
        <Auxx>
            <tr className="filter-row">
                <td><input placeholder="id"/> </td>
                <td><input placeholder="mm-dd-yyyy"/> </td>
                <td><input placeholder="name"/> </td>
                <td><input placeholder="email"/> </td>
                <td><input placeholder="Phone"/> </td>
                <td><input placeholder="Address"/> </td>
                <td><input placeholder="City"/> </td>
                <td><input placeholder="Province"/> </td>
            </tr>
        </Auxx>
    );
}

export default tableFilter;
