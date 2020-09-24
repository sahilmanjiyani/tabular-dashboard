import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableHead.css';

const tableHead = (props) => {
    return(
        <Auxx>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Type</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>Phone</th>
                <th>Province</th>
            </tr>
        </Auxx>
    );
}

export default tableHead;
