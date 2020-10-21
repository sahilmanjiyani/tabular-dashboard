import React, { useState } from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import TableHead from "./TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import TableFilter from "./TableFilter/TableFilter";

import './TableContent.css';



const TableContent = (props) => {

    const [dataOrder, setDataOrder] = useState("");
    const [dataField, setDataField] = useState("");
    const [filterKey, setFilterKey] = useState("");
    const [filterId, setFilterId] = useState("");

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
        setDataOrder(ord);
        setDataField(fld);
    }
    const filterFunc = (key, id) => {
        setFilterKey(key);
        setFilterId(id)
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
                                 filterEvent={(key, id) => filterFunc(key, id)}
                    ></TableFilter>
                    <TableBody  tableContent={props.content}
                                tableFilter={{ filterKey, filterId }}
                                tableSort={{ dataOrder, dataField }}></TableBody>
                </tbody>
            </table>
        </Auxx>
    );
}

export default TableContent;
