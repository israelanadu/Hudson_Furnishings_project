import { Component } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
// import { FaCheckDouble, FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import Leader from "../asset/image/man 1.jpg"
import Leader1 from "../asset/image/man 2.jpg"
import Leader2 from "../asset/image/man 3.jpg"
import Img from "../asset/image/img3.jpg"
import Img1 from "../asset/image/img2.jpg"
import Img2 from "../asset/image/img1.jpg"
import Img3 from "../asset/image/img6.jpg"
import Img4 from "../asset/image/img4.jpg"


class About extends Component {
    render() {
        return (
            <>
                <Header />

                <div className="about_main_container">
                    <div className="about_main_cover">
                        <h1>
                            <span>About Us</span>
                            <br />
                            Where Design Meets Desire
                        </h1>
                        <p>Hudson Furnishings was founded on the belief that quality, style, and comfort shouldn't be mutually exclusive.
                            We are a dedicated team passionate about curating and crafting exceptional furniture pieces that help turn houses into homes.</p>
                        <div className="about_main_image_contain">
                            <div className="image_cover">
                                <img src={Img2} alt="img" />
                            </div>
                            <div className="image_cover">
                                <img src={Img1} alt="img" />
                            </div>
                            <div className="image_cover">
                                <img src={Img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="landing_about_container">
                    <div className="landing_about_cover">

                        <section className="about_content">
                            <h2><span>Achievement</span><br />What We're Proud Of</h2>
                            <p>
                                We're proud of the milestones we've reached since opening our doors,
                                which are a testament to our commitment to excellence and customer satisfaction.
                                Over the past five years, Hudson Furnishings has been honored with the 'Regional Design
                                Excellence Award' twice for our innovative and sustainable collections. Furthermore, we consistently maintain a 5-star customer
                                service rating across major platforms, reflecting the care and attention we give to every client.
                                <br /><br />
                                Our greatest achievement, however,
                                remains the thousands of happy homes we've helped furnish.
                            </p>
                        </section>
                        <section className="about_image">
                            <img src={Img3} alt="img" />
                        </section>
                    </div>
                </div>





                <div className="landing_about_container">
                    <div className="landing_about_cover">
                        <section className="about_image">
                            <img src={Img4} alt="img" />
                        </section>
                        <section className="about_content">
                            <h2><span>Vision</span><br />Our Dream for Your Space</h2>
                            <p>
                                Our vision at Hudson Furnishings extends beyond the current catalogue; we aim to redefine the future of home furnishing.
                                We are committed to leading the industry in sustainable practices, sourcing eco-friendly materials, and minimizing our environmental footprint.
                                <br /><br />
                                Looking ahead, we plan to expand our custom-design services, empowering our customers to co-create truly personalized pieces. Ultimately,
                                our goal is to become the nation's most trusted and beloved name in home furnishings, synonymous with enduring quality and innovative design.

                            </p>
                            {/* <li><FaCheckDouble /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </li>
                            <li><FaCheckDouble /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </li>
                            <li><FaCheckDouble /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> </li> */}
                            {/* <div className="button">
                                <p>Learn More</p>
                                <button><FaArrowTrendUp /></button>
                            </div> */}
                        </section>
                    </div>
                </div>




                <div className="about_main_container">
                    <div className="about_main_cover">
                        <h1>Meet Our Leadership Team</h1>
                        <div className="about_main_image_contain">
                            <div className="image_cover">
                                <img src={Leader} alt="leader" />

                                <a href="https://wa.me/2349012503350?text=Hello%20there!%20I'm%20interested%20in%20joining%20the%20H%26F%20Community." target="_blank" rel="noreferrer">
                                    <div className="sample_button_contain">
                                        <div className="button_cover">
                                            <p>Contact Us</p>
                                            <button><MdOutlinePhoneInTalk /></button>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="image_cover">
                                <img src={Leader1} alt="leader" />

                                <a href="https://wa.me/2349012503350?text=Hello%20there!%20I'm%20interested%20in%20joining%20the%20H%26F%20Community." target="_blank" rel="noreferrer">
                                    <div className="sample_button_contain">
                                        <div className="button_cover">
                                            <p>Contact Us</p>
                                            <button><MdOutlinePhoneInTalk /></button>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div className="image_cover">
                                <img src={Leader2} alt="leader" />
                                <a href="https://wa.me/2349012503350?text=Hello%20there!%20I'm%20interested%20in%20joining%20the%20H%26F%20Community." target="_blank" rel="noreferrer">
                                    <div className="sample_button_contain">
                                        <div className="button_cover">
                                            <p>Contact Us</p>
                                            <button><MdOutlinePhoneInTalk /></button>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div >








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


export default About