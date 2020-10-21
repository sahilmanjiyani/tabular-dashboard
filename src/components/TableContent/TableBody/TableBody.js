import React from "react";

import Auxx from "../../../hoc/Auxx/Auxx";
import './TableBody.css';

const TableBody = (props) => {

    let sort = props.tableSort.dataOrder;
    let field = props.tableSort.dataField;
    let tempArray = Object.assign(props.tableContent);
    let filterKey = props.tableFilter.filterKey;
    let filterId = props.tableFilter.filterId;

    console.log(filterKey, filterId);

    // func sort numeric field
    const sortNumerical = (arr, sort) => {
        if (sort === "asc"){
            arr.sort((a,b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
        } else {
            arr.sort((a,b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
        }
        return [...arr];
    }

    // func sort char field
    const sortChar = (arr, sort) => {
        arr.sort((a,b) =>  console.log(b["contact"][field],a["contact"][field]));

        if (sort === "asc"){
            arr.sort((a,b) => a["contact"][field].localeCompare(b["contact"][field]));
        } else {
            arr.sort((a,b) => b["contact"][field].localeCompare(a["contact"][field]));
        }
        return [...arr];
    }

    // func char filter
    const filterArray = (arr, key, id) => {
        let filteredArr;

        if(id === "noticeId"){
            filteredArr = arr
                .filter(ele => {
                    return (ele[id].toString().toLowerCase().includes(key.toLowerCase()))
                });
        } else {
            filteredArr = arr
                .filter(ele => {
                    return (ele['contact'][id].toString().toLowerCase().includes(key.toLowerCase()))
                });
        }

        console.log(filteredArr);
        return [...filteredArr];
    }

    const filter = () => {

        if (field === "noticeId" || field === "noticeDate") {
            tempArray = sortNumerical(tempArray, sort);
        } else if (field === "contactName" || field === "emailAddress") {
            tempArray = sortChar(tempArray, sort);
        }

        console.log(filterId, filterKey);

        if(filterId){
            tempArray = filterArray(tempArray, filterKey, filterId);
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
