import React, { useState } from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFilter from "./TableFilter/TableFilter";

import './TableContent.css';



const TableContent = (props) => {
    const [dataOrder, setDataOrder] = useState("");
    const [field, setField] = useState("");

    const orderFunc = (ord, fld) => {
        // console.log(ord + " " + fld);

        setDataOrder(ord);
        setField(fld);
    }

    return(
        <Auxx>
            <table className="dashboard-table"
                   cellPadding="0"
                   cellSpacing="0" >
                <thead>
                    <TableHead orderFunction={(dataOrder, field) => orderFunc(dataOrder, field)}></TableHead>
                </thead>
                <tbody>
                    <TableFilter></TableFilter>
                    <TableBody  tableContent={props.content}
                                tableSort={{ dataOrder, field }}></TableBody>
                </tbody>

            </table>
        </Auxx>
    );
}

export default TableContent;
