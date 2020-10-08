import React, { useEffect, useState } from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableBody.css';


const TableBody = (props) => {

    let sort = props.tableSort.dataOrder;
    let field = props.tableSort.field;
    let tempArray = Object.assign(props.tableContent);

    // const [ content, setContent ] = useState(props.tableContent);
    //var content = props.tableContent;
    //var content = props.tableContent;

    const sortNumerical = (arr, sort) => {
        if (sort === "asc"){
            arr.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
        } else {
            arr.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
        }
        return [...arr];
    }

    const sortChar = (arr, sort) => {
        if (sort === "asc"){
            arr.sort((a,b) => {
                if(a[field] < b[field]) return -1;
                else if(a[field] > b[field]) return 1;
                else return 0;
            })
        } else {
            arr.sort((a,b) => {
                if(a[field] > b[field]) return -1;
                else if(a[field] < b[field]) return 1;
                else return 0;
            });
        }
        return [...arr];
    }

    const filter = () => {

        // return all content no filter
        if(sort === "") {
            return tempArray;
        } else if (field === "noticeId" || field === "noticeDate") {
            tempArray = sortNumerical(tempArray, sort);
        } else if (field === "title" || field === "emailAddress"
                        || field === "streetAddress") {
            tempArray = sortChar(tempArray, sort);
        }

        // return filtered content
        return [...tempArray];

    }

    // useEffect(() => {
    //
    //     //content = props.tableContent;
    //
    //     //console.log('in effect '+ props.tableSort.order);
    //     if(props.tableSort.order === 'des')
    //     {
    //         content = filter();
    //     }
    //
    //     content.map(ele => console.log(ele.noticeId))
    // });

    return(
        <Auxx>
            {
                filter().map(ele => {
                    return( 
                        <tr key={ele.noticeId}>
                            <td>{ele.noticeId}</td>
                            <td>{new Date(ele.noticeDate).toLocaleDateString()}</td>
                            <td>{ele.contact.emailAddress}</td>
                            <td>{ele.contact.contactName}</td>
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
