import React, { useEffect, useState } from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableBody.css';


const TableBody = (props) => {
    const [ content, setContent ] = useState(props.tableContent);

    //var content = props.tableContent;
    const filter = () => {        
        var tempArray = content;

        tempArray.sort(
            (a,b) => (a.noticeId < b.noticeId) ? 1 : ((b.noticeId < a.noticeId) ? -1 : 0)
        );
        return tempArray
    }

    useEffect(() => {
        var temp;
        //console.log('in effect '+ props.tableSort.order);
        if(props.tableSort.order === 'des')
        {   
        
            setContent(filter());
        }
        
        content.map(ele => console.log(ele.noticeId))
    });

    return(
        <Auxx>
            {
                content.map(ele => {
                    return( 
                        <tr key={ele.noticeId}>
                            <td>{ele.noticeId}</td>
                            <td>{new Date(ele.noticeDate).toLocaleDateString()}</td>
                            <td>{ele.noticeHeadingType}</td>
                            <td>{ele.contact.contactName}</td>
                            <td>{ele.contact.emailAddress}</td>
                            <td>{ele.contact.phone}</td>
                            <td>{ele.contact.streetAddress}</td>
                            <td>{ele.contact.city}</td>
                            <td>{ele.contact.province}</td>
                        </tr>
                    );
                })
            }
        </Auxx>
    );
}

export default TableBody;
