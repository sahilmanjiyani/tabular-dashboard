import React from "react";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableHead.css';

const TableHead = (props) => {

    // const sortTitle = ["Id", "Date", "Name", "Email"];
    //
    // const title = [
    //     { field: "noticeId", title : "Id" },
    //     { field: "noticeDate", title : "Date" },
    //     { field: "emailAddress", title : "Email" },
    //     { field: "contactName", title : "Name" },
    //     { field: "phone", title : "Phone" },
    //     { field: "streetAddress", title : "Address" },
    //     { field: "city", title : "City" },
    //     { field: "province", title : "Province" }];

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
            props.title.map(ele => (
                <th key={ele.title}>
                    <span>{ele.title}</span>
                    {   props.sortTitle.includes(ele.title) ? sortIcon(ele) : ''   }
                </th>
                )
            )
        }
        </tr>
    </Auxx>
    );
}



export default TableHead;
