import React, {Component} from 'react'
import style from '../../style.css'

class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div>
                    <a href={' '}>Logo</a>
                </div>
                <nav>
                    <ul className={style.menu}>
                        <li><a href={' '}>Home</a></li>
                        <li><a href={' '}>About Us</a></li>
                        <li><a href={' '}>Portfolio</a></li>
                        <li><a href={' '}>Features</a></li>
                        <li><a href={' '}>Blog</a></li>
                        <li><a href={' '}>Pricing</a></li>
                        <li><a href={' '}>Shortcodes</a></li>
                        <li><a href={' '}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header