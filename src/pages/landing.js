import { Component } from "react";
import Header from "../component/header";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import Footer from "../component/footer";
import Img from "../asset/image/img.jpg"
import Img1 from "../asset/image/img4.jpg"
import Couch from "../asset/image/sofa 1.jpg"
import Couch1 from "../asset/image/sofa 4.jpg"
import Couch2 from "../asset/image/table 1.jpg"
import { Link } from "react-router-dom";
import furnitureData from "../data/furniture.json"



class Landing extends Component {
    state = {
        data: furnitureData,
        selectedCategory: "",
        filteredData: furnitureData
    }


    handleCategoryChange = (category) => {
        this.setState({ selectedCategory: category }, this.applySingleCategoryFilter);
    };

    applySingleCategoryFilter = () => {
        const { selectedCategory, data } = this.state;

        if (selectedCategory === "" || selectedCategory === "All") {
            this.setState({ filteredData: data });
        } else {
            const filtered = data.filter((item) => item.category === selectedCategory);
            this.setState({ filteredData: filtered });
        }
    };



    render() {
        const { filteredData } = this.state;

        const productList =
            filteredData.length > 0
                ? filteredData
                    .slice(0, 6) // 👈 only take the first 6 items
                    .map((list) => (
                        <div className="card_container" key={list.title}>
                            <div className="card_image">
                                <img src={list.image} alt={list.title} />
                            </div>
                            <div className="card_content">
                                <div className="card_info_arrange">
                                    <div className="card_info">
                                        <h5>{list.title}</h5>
                                        <h4>$ {list.price}</h4>
                                    </div>
                                    <Link to="/product">
                                        <div className="card_button">
                                            <button>
                                                <FaArrowTrendUp />
                                            </button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                : null;


        return (
            <>
                <Header />
                <div className="landing_front_container">
                    <div className="landing_front_cover">
                        <section className="landing_front_content">
                            <h1>The Art of Comfortably Luxurious Living</h1>
                        </section>
                        <section className="landing_front_sample">
                            <div className="landing_main_sample">
                                {/* <div className="s-curve-left-element-cropped"></div> */}
                                <div className="landing_sample_image">
                                    <img src={Couch} alt="img2" />
                                </div>
                                <div className="sample_button_contain left">

                                </div>
                                <Link to="/product"><div className="sample_button_contain right">

                                    <div className="button_cover">
                                        <p>Shop Now</p>
                                        <button><FaArrowTrendUp /></button>
                                    </div>

                                </div></Link>
                            </div>
                            <div className="landing_sub_sample">
                                <section className="sample_card_container">
                                    <div className="image_contain">
                                        <img src={Couch1} alt="couch1" />
                                    </div>
                                    <div className="content_contain">
                                        <div className="info_container">
                                            <h3>Silcon chair</h3>
                                            <div className="card_rate">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStarHalfStroke /></li>
                                                <li><FaRegStar /></li>
                                            </div>
                                        </div>
                                        <h4 className="amount">$ 159</h4>
                                    </div>
                                </section>
                                <section className="sample_card_container">
                                    <div className="image_contain">
                                        <img src={Couch2} alt="table" />
                                    </div>
                                    <div className="content_contain">
                                        <div className="info_container">
                                            <h3>Silcon chair</h3>
                                            <div className="card_rate">
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaStar /></li>
                                                <li><FaRegStarHalfStroke /></li>
                                                <li><FaRegStar /></li>
                                            </div>
                                        </div>
                                        <h4 className="amount">$ 159</h4>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>





                <div className="landing_record_container">
                    <div className="landing_record_cover">
                        <h3>
                            10K+
                            <br />
                            <p>selection we consider the "Best Of" in terms of durability and
                                timeless design</p>
                        </h3>
                        <h3>
                            3K+
                            <br />
                            <p>satisfied customers whom we affectionately call our "Five-Star Families," </p>
                        </h3>
                        <h3>
                            99.3%
                            <br />
                            <p>of our wood is sourced from forests within a 300-mile radius.</p>
                        </h3>
                    </div>
                </div>






                <div className="landing_product_container">
                    <div className="landing_product_cover">
                        <h2>Our Best Quality Product</h2>
                        <nav className="filter">
                            <button onClick={() => { this.handleCategoryChange("") }}>All</button>
                            <button onClick={() => { this.handleCategoryChange("sofa") }}>Sofa</button>
                            <button onClick={() => { this.handleCategoryChange("table") }}>Table</button>
                            <button onClick={() => { this.handleCategoryChange("cupboard") }}>Cupboard</button>
                            <button onClick={() => { this.handleCategoryChange("bedframe") }}>BedFrame</button>
                        </nav>


                        <div className="product_card_contain">
                            {productList}


                            {/* <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="card_container">
                                <div className="card_image"></div>
                                <div className="card_content">
                                    <div className="card_info_arrange">
                                        <div className="card_info">
                                            <h5>Special Offer</h5>
                                            <h4>$ 432 </h4>
                                        </div>
                                        <div className="card_button">
                                            <button><FaArrowTrendUp /></button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>









                <div className="landing_about_container">
                    <div className="landing_about_cover">
                        <section className="about_image">
                            <img src={Img1} alt="img1" />
                        </section>
                        <section className="about_content">
                            <h2>Why Choose Us</h2>
                            <p>
                                At Hudson Furnishings, we believe that furniture is more than just décor — it’s a statement of comfort, quality, and style.
                                Our passion lies in crafting timeless pieces that blend exceptional design with everyday functionality, making every space truly feel like home.
                            </p>
                            <li><FaCheckDouble /> <p>Expert craftsmanship built from the finest materials for lasting durability and beauty.</p></li>
                            <li><FaCheckDouble /> <p>Custom-made designs tailored to match your unique taste, lifestyle, and interior vision.</p></li>
                            <li><FaCheckDouble /> <p>Exceptional customer service — from design consultation to delivery, we’re with you every step of the way.</p></li>
                            <li><FaCheckDouble /> <p>Commitment to sustainability, ensuring that every piece is responsibly sourced and ethically produced.</p></li>
                            ``<Link to="/about">
                                <div className="button">
                                    <p>Learn More</p>
                                    <button><FaArrowTrendUp /></button>
                                </div>
                            </Link>
                        </section>
                    </div>
                </div>










                <div className="landing_advertise_container">
                    <div className="landing_advertise_cover">
                        <img src={Img} alt="img" />
                        <div className="landing_advertise_content">
                            <div className="advert_info">
                                <h3>When We Create Funiture, We Strive For The Finest Quality</h3>
                                <Link to="/product"><button>Buy Now</button></Link>
                            </div>

                        </div>



                        <Link to="/product"> <div className="button_container">

                            <div className="button_cover">
                                <p>Explore Now</p>
                                <button><FaArrowTrendUp /></button>
                            </div>

                        </div></Link>
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


export default Landing