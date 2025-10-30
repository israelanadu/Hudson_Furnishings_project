import { Component } from "react";
import Logo from "../asset/image/logo_dark.png"
import { NavLink } from "react-router-dom"


class Header extends Component {
    render() {
        return (
            <header>
                <div className="header_container">
                    <section className="header_cover">
                        {/* <h1 className="logo"><span>H</span> Furnishings</h1> */}
                        <img src={Logo} alt="logo" />
                    </section>
                    <section className="header_cover menu">
                        <NavLink to="/"><li>Home</li></NavLink>
                        <NavLink to="/about"><li>About</li></NavLink>
                        <NavLink to="/product"><li>Product</li></NavLink>
                        <NavLink to="/contact"><li>Contact</li></NavLink>
                    </section>
                    <section className="header_cover">
                        <button></button>
                        <button></button>
                        <button>1 <span>Visitor</span></button>
                    </section>
                </div>
            </header>
        )
    }
}


export default Header