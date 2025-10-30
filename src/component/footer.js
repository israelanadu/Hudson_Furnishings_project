import { Component } from "react";
import Logo from "../asset/image/logo.png"


class Footer extends Component{
    render(){
        return(
            <footer> 
                <div className="footer_container">
                    <section className="list_container">
                        <div className="list_cover">
                            <li className="head">Overview</li>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Contact</li>
                        </div>
                        <div className="list_cover">
                            <li className="head">Shop</li>
                            <li>Wishlist</li>
                            <li>Cart</li>
                        </div>
                    </section>
                    <section className="list_container center">
                        <img src={Logo} alt="logo"/>
                    </section>
                    <section className="list_container">
                        <div className="list_cover">
                            <li className="head">Reachout</li>
                            <li>Help</li>
                            <li>FAQ</li>
                        </div>
                        <div className="list_cover">
                            <li className="head">Law</li>
                            <li>Policy</li>
                            <li>Agreement</li>
                        </div>
                    </section>
                </div>


                <div className="footer_container border">
                    <p>© <span>H.Furnishings</span>. All rights reserved</p>
                    <p>Art of Comfortably Luxurious Living</p>
                </div>
                
            </footer>
        )
    }
}


export default Footer