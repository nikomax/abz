import React, {Component} from 'react';

import Logo from '../img/logo.svg';
import Menu from './Menu.jsx';

export default class Header extends Component{
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="header__logo">
                        <a href="/" className="logo">
                            <Logo />
                        </a>
                        <div className="header__nav">
                            <Menu/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
