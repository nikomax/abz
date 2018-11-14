import React, {Component} from 'react';
import Header from './Header.jsx';
import axios from 'axios';
import Hero from './Hero.jsx';
import About from "./About.jsx";
import Relationships from './Relationships.jsx';
import Requirements from './Requirements.jsx';
import Users from './Users.jsx';
import Registration from './Registration.jsx';

const urlAPI = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export default class Page extends Component{
    constructor() {
        super();
        this.state = {
            users: [],
            userPage: 1,
            userCount: 6,
            totalPages: 1
        }
    }

    componentDidMount() {
        const self = this;
        axios.get(`${urlAPI}/users?page=${this.state.userPage}&count=${this.state.userCount}`)
            .then(function (response) {
                self.setState({
                    users: response.data.users,
                    totalPages: response.data.total_pages
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    loadMoreUsers = () => {
        this.setState({
            userPage: this.state.userPage + 1
        }, () => {
            const self = this;
            axios.get(`${urlAPI}/users?page=${this.state.userPage}&count=${this.state.userCount}`)
                .then(function (response) {
                    self.setState({
                        users: [...self.state.users, ...response.data.users]
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        });
    };

    render() {
        return (
            <div>
                <Header/>
                <Hero/>
                <About/>
                <Relationships/>
                <Requirements/>
                <Users
                    users={this.state.users}
                    onMore={this.loadMoreUsers}
                    moreLink={this.state.userPage < this.state.totalPages}
                />
                <Registration/>
            </div>
        )
    }
}
