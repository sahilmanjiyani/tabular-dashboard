import React, { useState } from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFilter from "./TableFilter/TableFilter";

import './TableContent.css';



const TableContent = (props) => {

    const [dataOrder, setDataOrder] = useState("");
    const [field, setField] = useState("");

    const sortTitle = ["Id", "Date", "Name", "Email"];

    const title =
        [{ field: "noticeId", title : "Id", placeholder : "id" },
        { field: "noticeDate", title : "Date", placeholder : "mm-dd-yyyy"  },
        { field: "emailAddress", title : "Email", placeholder : "email" },
        { field: "contactName", title : "Name", placeholder : "name" },
        { field: "phone", title : "Phone", placeholder : "phone" },
        { field: "streetAddress", title : "Address", placeholder : "address" },
        { field: "city", title : "City", placeholder : "city" },
        { field: "province", title : "Province", placeholder : "province" }];

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
                    <TableHead orderFunction={(dataOrder, field) => orderFunc(dataOrder, field)}
                               sortTitle={sortTitle}
                               title={title} ></TableHead>
                </thead>
                <tbody>
                    <TableFilter title={title}
                                 filterEvent={(key, id) => console.log(key, id)}
                    ></TableFilter>
                    <TableBody  tableContent={props.content}
                                tableSort={{ dataOrder, field }}></TableBody>
                </tbody>

            </table>
        </Auxx>
    );
}

export default TableContent;
