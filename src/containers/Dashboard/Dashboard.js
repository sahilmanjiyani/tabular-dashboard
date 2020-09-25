import React, { Component } from 'react';

import Auxx from "../../hoc/Auxx/Auxx";
import Header from '../../components/Header/Header';
import TableContent from '../../components/TableContent/TableContent';
import './Dashboard.css';
import myData from '../../data/myData.json';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notices: []
        };
    }

    componentDidMount() {
        this.setState({ notices: myData });
        console.log(this.state);
    }

    displayTable() {
        console.log(this.state);
        if(this.state.notices === {}) {
            return(<p>Loading...</p>);
        }
        return(<TableContent content={this.state.notices}></TableContent>);
    }

    render() {
        console.log(this.props);
            return(
                <Auxx>
                    <Header />
                    { this.displayTable() }
                </Auxx>
            );
    }
}

export default Dashboard;
