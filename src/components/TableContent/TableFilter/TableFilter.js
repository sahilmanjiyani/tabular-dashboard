import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import "./TableFilter.css";

const TableFilter = (props) => {

    const handleFilter = (e, field) => {
        e.preventDefault();

        let val = document.getElementById(field).value;
        return props.filterEvent(val, field);
    }
    return(
        <Auxx>

            <tr className="filter-row">
                    {
                        props.title.map(ele => (
                            <td key={ele.field}>
                                    <form name={ele.field}
                                        onSubmit={(e) => handleFilter(e, ele.field)}>
                                        <input id={ele.field}
                                               placeholder={ele.placeholder} />
                                    </form>
                            </td>
                        ))
                    }
            </tr>

        </Auxx>
    );
}

export default TableFilter;
