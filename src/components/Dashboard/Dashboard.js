import React, { useState } from 'react';

import TableContent from '../TableContent/TableContent';
import Header from '../Header/Header';
import Auxx from '../../hoc/Auxx/Auxx';
import myData from '../../data/myData.json';

const Dashboard = () => {

    const [ notices, useNotices ] = useState(myData);


    const displayTable = () => {
        if(notices === {}) {
            return(<p>Loading...</p>);
        }
        return(<TableContent content={notices}></TableContent>);
    }

    return(
        <Auxx>
            <Header />
            { displayTable() }
        </Auxx>
    )
}

export default Dashboard;