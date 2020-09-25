import React, { useState } from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableBody.css';


const TableBody = (props) => {

    const [sort, setSort] = useState(props.tableSort.order);
    const [field, setField] = useState(props.tableSort.field);

    return(
        <Auxx>
            {
                props.tableContent.map(ele => {
                    return(<tr>
                                <td>{ele.noticeId}</td>
                                <td>{new Date(ele.noticeDate).toLocaleDateString()}</td>
                                <td>{ele.noticeHeadingType}</td>
                                <td>{ele.contact.contactName}</td>
                                <td>{ele.contact.emailAddress}</td>
                                <td>{ele.contact.phone}</td>
                                <td>{ele.contact.streetAddress}</td>
                                <td>{ele.contact.city}</td>
                                <td>{ele.contact.province}</td>
                            </tr>);
                })
            }
        </Auxx>
    );
}

export default TableBody;
