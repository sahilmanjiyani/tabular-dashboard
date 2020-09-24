import React from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";

import classes from './TableContent.css';

const tableContent = (props) => {
    console.log(props)
    return(
        <Auxx>
            <table className="dashboard-table"
                   cellPadding="0"
                   cellSpacing="0" >
                <thead>
                    <TableHead></TableHead>
                </thead>
                <tbody>
                    <TableBody tableContent={props.content}></TableBody>
                </tbody>

            </table>
        </Auxx>
    );
}

export default tableContent;
