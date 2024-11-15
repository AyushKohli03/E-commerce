import React from 'react'

// images import///////////////////////////////////
import card1 from '../images/features/f1.png'
import card2 from '../images/features/f2.png'
import card3 from '../images/features/f3.png'
import card4 from '../images/features/f4.png'
import card5 from '../images/features/f5.png'
import card6 from '../images/features/f6.png'

//import components///////////////////////
import data, { data2 } from '../data'
import Product from '../components/Product'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <section className="hero ">
                <div className="content">
                    <h4>Trade in offer</h4>
                    <h2>Super value Deals</h2>
                    <h1>On all products</h1>
                    <p>Sav emore with coupons & upto 70% off!</p>
                    <Link to={"shop"}><button className="shopbtn">Shop now</button></Link>
                </div>

            </section>

            {/* card **********************/}

            <div className="center features">
                <div className="card">

                    <img className="featureimg" src={card1} alt="" />
                    <h6 id="f1" className="featurebtn ">Free shipping</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card2} alt="" />
                    <h6 id="f2" className="featurebtn ">Online Order</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card3} alt="" />
                    <h6 id="f3" className="featurebtn">Save money</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card4} alt="" />
                    <h6 id="f4" className="featurebtn">Promotions</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card5} alt="" />
                    <h6 id="f5" className="featurebtn">Happy sell</h6>

                </div>
                <div className="card">

                    <img className="featureimg" src={card6} alt="" />
                    <h6 id="f6" className="featurebtn ">24/7 support</h6>

                </div>
            </div>

            <div className="fproduct">
                <div className="fhead center">
                    <h2>Featured Product</h2>
                    <p>summer collection new modern design</p>
                </div>
                <div className="pro-container ">

                    {
                        data.map((pro, key) => {
                            pro.key = key
                            return (
                                <Link   className='link' to={`product_detail/${key}`}>
                                    <Product
                                        image={pro.image}
                                        title={pro.title}
                                        company={pro.company}
                                        price={pro.price} /></Link>)
                        })
                    }


                </div>
            </div>
            <div className="repair-service ">
                <h4>Repair Service</h4>
                <h2>Up to <span>70% Off</span>-All t-shirts and Accessories</h2>
                <div className="explorebtn">Explore more</div>
            </div>

            <div class="newarrival">
                <div class=" center">
                    <h2>New Arrival</h2>
                    <p>summer collection new modern design</p>
                </div>
                <div className="pro-container ">

                    {
                        data2.map((pro,key) => {
                            pro.key=key+data.length
                            return (
                                <Link className='link' to={`product_detail/${key+data.length}`}>
                                    <Product

                                        image={pro.image}
                                        title={pro.title}
                                        company={pro.company}
                                        price={pro.price} />
                                </Link>)
                        })
                    }


                </div>
            </div>

            <div className="banners-cont">
                <div className="banners">
                    <div className="banner">
                        <h4>Crazy Deals</h4>
                        <h2>Buy 1 Get 1 Free</h2>
                        <span>The best classic dress is on sale at shop.my</span>
                        <div className="explorebtn">Learn more</div>
                    </div>
                    <div className="banner">
                        <h4>Spring/Summer</h4>
                        <h2>Upcoming Season</h2>
                        <span>The best classic dress is on sale at shop.my</span>
                        <div className="explorebtn">Collection</div>

                    </div>
                </div>
                <div className="banners">
                    <div className="banner2">
                        <h2>Seasonal Sale</h2>
                        <h3>Winter collection -50% Off</h3>
                    </div>
                    <div className="banner2">
                        <h2>New Footwear collection</h2>
                        <h3>Spring / Summer 2024</h3>
                    </div>
                    <div className="banner2">
                        <h2>T-Shirts</h2>
                        <h3>New Trendy Prints</h3>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Home