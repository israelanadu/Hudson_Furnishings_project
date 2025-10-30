import { Component } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { FcTodoList } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { PiChecks } from "react-icons/pi";
import { LiaTrashAlt } from "react-icons/lia";
import { LuPartyPopper } from "react-icons/lu";
import { IoTrendingUpOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { Link } from "react-router-dom"
import { LuListFilter } from "react-icons/lu";
import { LuSofa } from "react-icons/lu";
import { MdAddShoppingCart } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import furnitureData from "../data/furniture.json";


class Product extends Component {
    state = {
        currentPrice: 200,
        minRange: 0,
        maxRange: 5000,
        data: furnitureData,
        filteredData: furnitureData,


        filterCategories: [], // e.g. ["sofa", "table"]
        maxPrice: null,       // e.g. 1000
        inStockOnly: false,   // true = only show items with stock > 0
        newArrivalOnly: false,

        showFilter: window.innerWidth > 1250,
    };


    //     componentDidMount() {
    //     fetch("../data/furniture.json") 
    //       .then((response) => {
    //         if (!response.ok) {
    //           throw new Error("Failed to fetch JSON data");
    //         }
    //         return response.json();
    //       })
    //       .then((jsonData) => {
    //         this.setState({ data: jsonData });
    //       })
    //       .catch((error) => {
    //         console.error("Error fetching data:", error);
    //       });
    //   }


    toggleFilter = () => {
        this.setState((prevState) => ({ showFilter: !prevState.showFilter }));
    };


    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        if (window.innerWidth > 1250 && !this.state.showFilter) {
            this.setState({ showFilter: true });
        }
    };


    handleSliderChange = (event) => {
        // The event.target.value is always a string, so we convert it to a number.
        const newPrice = Number(event.target.value);

        // ✅ Sets the state when it changes
        this.setState({
            currentPrice: newPrice,
            maxPrice: newPrice,
        }, this.applyAdvancedFilter)
    };

    // Helper function to format the number as currency
    formatCurrency = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0, // No cents for a cleaner display
        }).format(number);
    };




    applyAdvancedFilter = () => {
        const {
            data,
            filterCategories,
            maxPrice,
            inStockOnly,
            newArrivalOnly,
        } = this.state;

        let filtered = [...data];

        // Filter by multiple categories
        if (filterCategories.length > 0) {
            filtered = filtered.filter((item) =>
                filterCategories.includes(item.category)
            );
        }

        // Filter by price
        if (maxPrice !== null && maxPrice !== "") {
            filtered = filtered.filter((item) => item.price <= maxPrice);
        }

        // Filter by in-stock
        if (inStockOnly) {
            filtered = filtered.filter((item) => item.inStock > 0);
        }

        // Filter by newArrival
        if (newArrivalOnly) {
            filtered = filtered.filter((item) => item.newArrival === true);
        }

        this.setState({ filteredData: filtered });
    };




    handleCategoryCheckboxChange = (category) => {
        this.setState((prevState) => {
            const { filterCategories } = prevState;
            let newCategories = [...filterCategories];

            if (newCategories.includes(category)) {
                // remove category
                newCategories = newCategories.filter((c) => c !== category);
            } else {
                // add category
                newCategories.push(category);
            }

            return { filterCategories: newCategories };
        }, this.applyAdvancedFilter); // Call the filter after updating state
    };




    handleAvailabilityChange = (type, checked) => {
        if (type === "inStock") {
            this.setState({ inStockOnly: checked }, this.applyAdvancedFilter);
        } else if (type === "newArrival") {
            this.setState({ newArrivalOnly: checked }, this.applyAdvancedFilter);
        }
    };


    // handleSliderChange = (e) => {
    //     const value = Number(e.target.value);
    //     this.setState({ maxPrice: value }, this.applyAdvancedFilter);
    // };



    clearFilters = () => {
        this.setState(
            {
                filterCategories: [],
                currentPrice: 200,
                maxPrice: 200,
                inStockOnly: false,
                newArrivalOnly: false,
            },
            this.applyAdvancedFilter
        );
    };

    render() {
        const { currentPrice, minRange, maxRange, filteredData } = this.state;
        console.log(this.state)

        const productList = filteredData.length > 0 ? filteredData.map(list => {
            return (
                <div className="card_container" key={list.title}>
                    <div className="card_image">
                        <img src={list.image} alt="list.title" />
                    </div>
                    <div className="card_content">
                        <div className="card_info_arrange">
                            <div className="card_info">
                                <h5>{list.title}</h5>
                                <h4>$ {list.price}</h4>
                            </div>
                            <div className="card_button">
                                <button><MdAddShoppingCart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : null




        return (
            <>
                <Header />
                <nav className="product_filter">
                </nav>
                <div className="product_main_container">
                    <div className="product_main_cover">



                        {this.state.showFilter && (
                            <div className="product_dark_background">
                                <section className="product_filter">
                                    <div className="pro_filter_contain">
                                        <h3>Filter <button onClick={this.toggleFilter}><LiaTimesSolid /></button></h3>
                                        <h4><FcTodoList /> Categories</h4>
                                        <div className="filter_content">
                                            <label><input type="checkbox" className="checkbox" onChange={() => this.handleCategoryCheckboxChange("sofa")} /> Sofa & Couch</label>
                                            <label><input type="checkbox" className="checkbox" onChange={() => this.handleCategoryCheckboxChange("sofa")} /> Chairs</label>
                                            <label><input type="checkbox" className="checkbox" onChange={() => this.handleCategoryCheckboxChange("table")} /> Tables</label>
                                            <label><input type="checkbox" className="checkbox" onChange={() => this.handleCategoryCheckboxChange("bedframe")} /> BedFrame</label>
                                            <label><input type="checkbox" className="checkbox" onChange={() => this.handleCategoryCheckboxChange("cupboard")} /> Cupboard</label>
                                            {/* <label><input type="checkbox" className="checkbox" /> Storage</label> */}
                                        </div>
                                        <h4><FcMoneyTransfer /> Price Range</h4>
                                        <div className="filter_content">
                                            <input
                                                type="range"
                                                min={minRange} // Starts at 0
                                                max={maxRange} // Ends at 20000
                                                value={currentPrice} // Controlled by state
                                                onChange={this.handleSliderChange} // Updates state on change
                                                step="100" // Optional: moves in steps of $100
                                                className="range"
                                            />
                                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} className="amount">
                                                <span>{this.formatCurrency(minRange)}</span>
                                                <span>{this.formatCurrency(maxRange)}</span>
                                            </div>
                                        </div>

                                        <h4><PiChecks /> Availability</h4>
                                        <div className="filter_content">
                                            <label><input type="checkbox" className="checkbox" onChange={(e) =>
                                                this.handleAvailabilityChange("inStock", e.target.checked)
                                            } /> In Stock Only</label>
                                            <label><input type="checkbox" className="checkbox" onChange={(e) =>
                                                this.handleAvailabilityChange("newArrival", e.target.checked)
                                            } /> New Arrivals Only </label>
                                        </div>
                                        <div className="button"><button onClick={this.clearFilters}><LiaTrashAlt /> Clear Filter</button></div>
                                    </div>
                                </section>
                            </div>
                        )}








                        <section className="product_card_container">
                            <div className="product_banner_container">
                                <div className="banner_content">
                                    <p><LuPartyPopper /> Limited Time Offer</p>
                                    <h4>
                                        <span>Transform Your Space</span><br />
                                        Discover premium furniture at unbeatable prices. Up to 20% Offer
                                        on selected item
                                    </h4>
                                    <div className="button">
                                        <Link to="/contact"><button>Contact Support</button></Link>
                                    </div>
                                </div>
                                <div className="banner_icon">
                                    <div className="icon_contain">
                                        <IoTrendingUpOutline />
                                        <h5>
                                            <span>Trending</span><br />
                                            500+ Item
                                        </h5>
                                    </div>
                                    <div className="icon_contain">
                                        <BsBoxSeam />
                                        <h5>
                                            <span>Shipping</span><br />
                                            From $500+
                                        </h5>
                                    </div>
                                </div>
                            </div>


                            <div className="product_head">
                                <h3>
                                    <LuSofa /> All Furniture
                                    <br /><span>Discounted Prices </span>
                                </h3>
                                <button className="filter_button" onClick={this.toggleFilter}><LuListFilter /> Filter</button>
                            </div>




                            <div className="product_list_container">

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
                                                <button><MdAddShoppingCart /></button>
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
                                                <button><MdAddShoppingCart /></button>
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
                                                <button><MdAddShoppingCart /></button>
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
                                                <button><MdAddShoppingCart /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}




                            </div>


                        </section>
                    </div>
                </div>


                <Footer />
            </>
        )
    }
}


export default Product