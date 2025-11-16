import { Component } from "react";
import Logo from "../asset/image/logo_dark.png";
import { NavLink, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

class Header extends Component {
    state = {
        toggle: false, // dropdown hidden by default
    };

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        return (
            <header>
                <div className="header_container">
                    <section className="header_cover">
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
                        <div className="button">
                            <button onClick={this.handleToggle}>
                                <HiMiniBars3 />
                            </button>

                            {/* Toggle dropdown visibility */}
                            {this.state.toggle ? (
                                <section className="dropdown_contain">
                                    <div>
                                        <Link to="/"><li>Home</li></Link>
                                        <Link to="/about"><li>About</li></Link>
                                        <Link to="/contact"><li>Contact</li></Link>
                                        <Link to="/product"><li>Product</li></Link>
                                    </div>
                                </section>
                            ) : null}
                        </div>

                        <button>
                            1 <span>Visitor</span>
                        </button>
                    </section>
                </div>
            </header>
        );
    }
}

export default Header;
