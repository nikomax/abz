import React, {Component} from 'react';
import TextInput from './TextInput.jsx';
import Select from 'react-select';
import FileInput from './FileInput.jsx';
import axios from 'axios';

const urlAPI = 'https://frontend-test-assignment-api.abz.agency/api/v1';

export default class Registration extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            phone: '',
            fileUpload: '',
            selectedOption: null,
            options: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ]
        }
    }

    componentDidMount() {
        const self = this;
        axios.get(`${urlAPI}/positions`)
            .then(function (response) {
                console.log(response.data.positions);
                self.setState({
                    options: response.data.positions.map(item => {
                        return {
                            value: item.name,
                            label: item.name
                        }
                        })
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleName = (e) => {
        this.setState({
            name: e.target.value
        }, () => {
            console.log(this.state.name);
        });
    };

    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    };

    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
    };

    checkSize = (e) => {
        console.log(e.target.files[0].size);
        if (e.target.files[0].size > 5242880) {
            console.log("mnogo");
            this.setState({
                fileUpload: ''
            })
        } else {
            this.setState({
                fileUpload: e.target.value
            })
        }
    };

    render() {
        return (
            <section className="section section--registration">
                <div className="container">
                    <div className="section__header">
                        <h2 className="section__title">Register to get a work</h2>
                        <h5 className="section__subtitle">Attention! After successful registration and alert, update the list of users in the block from the top</h5>
                    </div>
                    <form action="" className="form">
                        <div className="form__row">
                            <div className="form__col1">
                                <TextInput
                                    label="Name"
                                    placeholder="Your name"
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onInput={this.handleName}
                                />
                            </div>
                            <div className="form__col1">
                                <TextInput
                                    label="Email"
                                    placeholder="Your email"
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={this.state.email}
                                    onInput={this.handleEmail}
                                />
                            </div>
                            <div className="form__col1">
                                <TextInput
                                    label="Phone"
                                    placeholder="+38 (___)  ___ __ __"
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    value={this.state.phone}
                                    onInput={this.handlePhone}
                                />
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__col2">
                                <Select
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={this.state.options}
                                    placeholder="Select your position"
                                />
                            </div>
                            <div className="form__col2">
                                <FileInput
                                    info="File format jpg up to 5 MB, the minimum size of 70x70px"
                                    onChange={this.checkSize}
                                    value={this.state.fileUpload}
                                />
                            </div>
                        </div>
                        <div className="form__btn">
                            <a href="java-script:void(0)" className="btn">Sign Up</a>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}
