import React from "react";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableHead.css';

const TableHead = (props) => {

    const title = [ "Id", "Date", "Type", "Name", "Email", "Phone", "Address", "City", "Province" ];
    const sortTitle = ["Id", "Date", "Name", "Email", "Address"];

    const sortIcon = (eleTitle) => {
        return (
            <span className="sort-icon">
                <FontAwesomeIcon onClick={() => props.orderFunction('asc', eleTitle)}
                                    icon={faSortUp} />
                <FontAwesomeIcon onClick={() => props.orderFunction('des', eleTitle)}
                                    icon={faSortDown} />
            </span>
        )
    }

    return(
    <Auxx>
        <tr>
        {
            title.map(ele => (
                <th key={ele}>
                    <span>{ele}</span>
                    {
                        (sortTitle.includes(ele)) ? sortIcon(ele) : ''
                    }
                    
                </th>
                )
            )
        }
        </tr>
    </Auxx>
    );
}



export default TableHead;
