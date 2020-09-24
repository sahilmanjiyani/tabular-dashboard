import React from "react";

import Auxx from "../../hoc/Auxx/Auxx";
import './Header.css';

const header = (props) => {
    return(
        <Auxx>
            <header className="title">
                <h3>Dashboard</h3>
            </header>
        </Auxx>
    );
}

export default header;
