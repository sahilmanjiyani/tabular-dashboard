import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import "./TableFilter.css";

const tableFilter = (props) => {

    let temp = '';

    const handleKeyDown = (e, field) => {

        if(e.key === 'Enter') {
            let filterInput = temp;
            temp = "";
            return props.filterEvent(filterInput, field);
        } else {
            temp += e.key;
        }
    }
    return(
        <Auxx>
            <tr className="filter-row">
                {
                    props.title.map(ele => (
                        <td key={ele.field}>
                            <input placeholder={ele.placeholder}
                                   onKeyDown={(e) => handleKeyDown(e, ele.field) }
                            />
                        </td>
                    ))
                }
            </tr>
        </Auxx>
    );
}

export default tableFilter;
