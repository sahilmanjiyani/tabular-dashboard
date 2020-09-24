import React, { Component } from 'react';
import axios from "axios";

import Auxx from "../../hoc/Auxx/Auxx";
import Header from '../../components/Header/Header';
import TableContent from '../../components/TableContent/TableContent';
import classes from './Dashboard.css';

class Dashboard extends Component {

    state = {
        notices: [
            {
                id: 1,
                date: '11-11-11',
                type: 'notice',
                name: 'amenity',
                email: 'jd@gmail.com',
                phone: 9876543210,
                address: '348 Queens street',
                city: 'Toronto',
                province: 'Ontario',
            },
            {
                id: 2,
                date: '11-11-11',
                type: 'notice',
                name: 'amenity',
                email: 'jd@gmail.com',
                phone: 9876543210,
                address: '348 Queens street',
                city: 'Toronto',
                province: 'Ontario',
            },
            {
                id: 3,
                date: '11-11-11',
                type: 'notice',
                name: 'amenity',
                email: 'jd@gmail.com',
                phone: 9876543210,
                address: '348 Queens street',
                city: 'Toronto',
                province: 'Ontario',
            },
            {
                id: 4,
                date: '11-11-11',
                type: 'notice',
                name: 'amenity',
                email: 'jd@gmail.com',
                phone: 9876543210,
                address: '348 Queens street',
                city: 'Toronto',
                province: 'Ontario',
            }
        ]
    }

    // componentDidMount() {
    //     axios.get(`http://app.toronto.ca/nm/notices.json`)
    //         .then(res => {
    //             console.log(res.data);
    //             const notices = res.data;
    //             this.setState({ notices });
    //         })
    // }

    render() {
        return(
            <Auxx>
                <Header></Header>
                <TableContent content={this.state.notices}></TableContent>
            </Auxx>
        );
    }
}

export default Dashboard;
