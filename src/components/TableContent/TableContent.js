import React, { useState } from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFilter from "./TableFilter/TableFilter";

import classes from './TableContent.css';



const TableContent = (props) => {
    const [order, setOrder] = useState("asc");
    const [field, setField] = useState("asc");

    const orderFunc = (ord, fld) => {
        setOrder(ord);
        setField(fld);
    }

    return(
        <Auxx>
            <table className="dashboard-table"
                   cellPadding="0"
                   cellSpacing="0" >
                <thead>
                    <TableHead orderFunction={(order, field) => orderFunc(order, field)}></TableHead>
                </thead>
                <tbody>
                    <TableFilter></TableFilter>
                    <TableBody tableContent={props.content}
                                tableSort={{ order, field }}></TableBody>
                </tbody>

            </table>
        </Auxx>
    );
}

export default TableContent;
