import React, {Component} from 'react';

import NavLink from './NavLink.jsx';

export default class Menu extends Component{
    constructor() {
        super()
        this.state = {
            menuItems: [
                {
                    href: '#',
                    title: 'About me'
                },{
                    href: '#',
                    title: 'Relationships'
                },{
                    href: '#',
                    title: 'Requirements'
                },{
                    href: '#',
                    title: 'Users'
                },{
                    href: '#',
                    title: 'Sign Up'
                },

            ]
        }
    }
    render() {
        return (
            <ul className="nav">
                {this.state.menuItems.map(item => (
                    <li className="nav__item">
                        <NavLink href={item.href} title={item.title}/>
                    </li>
                ))}
            </ul>
        )
    }
}
