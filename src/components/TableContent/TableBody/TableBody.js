import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableBody.css';

const tableBody = (props) => {
    return(
        <Auxx>
            {
                props.tableContent.map(ele => {
                    return(<tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.date}</td>
                                <td>{ele.type}</td>
                                <td>{ele.name}</td>
                                <td>{ele.email}</td>
                                <td>{ele.phone}</td>
                                <td>{ele.address}</td>
                                <td>{ele.city}</td>
                                <td>{ele.province}</td>
                            </tr>);
                })

            }

        </Auxx>
    );
}

export default tableBody;
