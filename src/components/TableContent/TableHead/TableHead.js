import React from "react";

import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableHead.css';

const TableHead = (props) => {

    return(
        <Auxx>
            <tr>
                {
                    title.map(ele => {
                        return(
                            <th>
                                <span>{ele}</span>
                                <span className="sort-icon">
                                    <FontAwesomeIcon onClick={() => props.orderFunction('asc', {ele})}
                                                     icon={faSortUp} />
                                    <FontAwesomeIcon onClick={() => props.orderFunction('des', {ele})}
                                                     icon={faSortDown} />
                                </span>
                            </th>
                        );
                    })
                }
            </tr>
        </Auxx>
    );
}

const title = [ "Id", "Date", "Type", "Name", "Email", "Phone", "Address", "City", "Province" ];

export default TableHead;
