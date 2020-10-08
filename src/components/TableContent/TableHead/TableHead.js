import React from "react";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableHead.css';

const TableHead = (props) => {

//    const title = [ "Id", "Date", "Type", "Name", "Email", "Phone", "Address", "City", "Province" ];
    const sortTitle = ["Id", "Date", "Name", "Email", "Address"];

    const title = [
        { field: "noticeId", title : "Id" },
        { field: "noticeDate", title : "Date" },
        { field: "emailAddress", title : "Email" },
        { field: "contactName", title : "Name" },
        { field: "phone", title : "Phone" },
        { field: "streetAddress", title : "Address" },
        { field: "city", title : "City" },
        { field: "province", title : "Province" }];

    // const sortTitle = [
    //     { noticeId: "Id" },
    //     { noticeDate: "Date" },
    //     { title: "Name" },
    //     { emailAddress: "Email" },
    //     { streetAddress: "Address" }
    // ];


    const sortIcon = (eleTitle) => {
        return (
            <span className="sort-icon">
                <FontAwesomeIcon onClick={() => props.orderFunction('asc', eleTitle.field)}
                                    icon={faSortUp} />
                <FontAwesomeIcon onClick={() => props.orderFunction('des', eleTitle.field)}
                                    icon={faSortDown} />
            </span>
        )
    }

    return(
    <Auxx>
        <tr>
        {
            title.map(ele => (
                <th key={ele.title}>
                    <span>{ele.title}</span>
                    {   sortTitle.includes(ele.title) ? sortIcon(ele) : ''   }
                </th>
                )
            )
        }
        </tr>
    </Auxx>
    );
}



export default TableHead;
