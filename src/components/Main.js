import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <main className='mt-4'>
                <div className="container">
                    <section className='specialOffer'>
                        <div className="row d-flex justify-content-center pt-5 h-100">
                            <div className="col-lg-5 col-md-9 col-10">
                                <h1>SPECIAL OFFER</h1>
                                <p>30% Off This Weekend</p>
                                <Link to="/Book" style={{ textDecoration: "none" }}>
                                    <div className="bookNow mb-4">
                                        <p>Book now</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="container mt-5">
                    <div className="row d-flex justify-content-between">
                        <div className="col-lg-4 col-12 mb-4">
                            <div className="card">
                                <h3 className="card-title">Our New Menu</h3>
                                <img className="card-img-top" src={require("../img/Grill.jpg")} alt="menu of restaurant" />
                                <div className="card-body">
                                    <p className="card-text">Our menu consists of 12-15 seasonal items based on Italian, Greek, and Turkish culture.</p>
                                    <Link to="/Menu" style={{ textDecoration: "none" }}><p className='cardLink'>See our new menu</p></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-4">
                            <div className="card">
                                <h3 className="card-title">Book a table</h3>
                                <img className="card-img-top" src={require("../img/salad.jpg")} alt="menu of restaurant" />
                                <div className="card-body">
                                    <p className="card-text">Reserve your table for an Italian, Greek, and Turkish dining experience.</p>
                                    <Link to="/Book" style={{ textDecoration: "none" }}><p className='cardLink'>Book your table now</p></Link>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 mb-4">
                            <div className="card">
                                <h3 className="card-title">Opening Hours</h3>
                                <img className="card-img-top" src={require("../img/head_chef.jpg")} alt="menu of restaurant" />
                                <div className="card-body">
                                    <p className="card-text">The Little Lemon Restaurant is open 7 days a week, except for public holidays.</p>
                                    <ul>
                                        <li>Mon - Fri: 2pm - 10pm</li>
                                        <li>Sat: 2pm - 11pm</li>
                                        <li>Sun: 2pm - 9pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Main