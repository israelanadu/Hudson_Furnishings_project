import { Component } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Img from "../asset/image/img5.jpg"


class Contact extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="about_main_container">
                    <div className="about_main_cover">
                        <h1>
                            <span>Contact Us</span>
                            <br />
                            Next Project Starts Here
                        </h1>
                        <p>Reaching out is the first step to becoming part of the Hudson Furnishings community!
                            Use the form below, send us an email, or give us a call</p>
                        <div className="about_main_image_contain ">
                            <div className="image_cover width">
                                <img src={Img} alt="contact" />
                                <a href="https://wa.me/2349012503350?text=Hello%20there!%20I'm%20interested%20in%20joining%20the%20H%26F%20Community." target="_blank" rel="noreferrer">
                                    <div className="sample_button_contain">
                                        <div className="button_cover">
                                            <p>Join Community</p>
                                            <button><MdOutlinePhoneInTalk /></button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>








                <div className="contact_form_container">
                    <div className="contact_form_cover">
                        <section className="contact_info">
                            <h3>
                                Questions? Ideas? We're all ears—and ready to help!
                            </h3>
                        </section>
                        <section className="contact_form">
                            <form>
                                <div className="input_cover">
                                    <div className="input half">
                                        <input placeholder="First Name" />
                                    </div>
                                    <div className="input half">
                                        <input placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="input_cover">
                                    <div className="input half">
                                        <input placeholder="Email" />
                                    </div>
                                    <div className="input half">
                                        <input placeholder="Phone Number" />
                                    </div>
                                </div>
                                <textarea placeholder="Why are you reaching out" />
                            </form>
                            <div className="sample_button_contain">
                                <div className="button_cover">
                                    <p>Submit</p>
                                    <button><MdOutlinePhoneInTalk /></button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>











                <div className="landing_subscribe_container">
                    <div className="landing_subscribe_cover">
                        <h2>Subscribe to our funiture update and grab <span>30% OFF</span></h2>
                        <form>
                            <input placeholder="Enter Email Address" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>


                <Footer />
            </>
        )
    }
}


export default Contact