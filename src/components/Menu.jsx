import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Menu extends Component{
    constructor() {
        super()
        this.state = {
            menuItems: [
                {
                    href: '#about',
                    title: 'About me'
                },{
                    href: '#relationships',
                    title: 'Relationships'
                },{
                    href: '#requirements',
                    title: 'Requirements'
                },{
                    href: '#users',
                    title: 'Users'
                },{
                    href: '#registration',
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
                        <AnchorLink href={item.href}>{item.title}</AnchorLink>
                    </li>
                ))}
            </ul>
        )
    }
}
