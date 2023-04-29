import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBar from "./NaveBar";
import Fotter from "./Fotter";
import dockters from "../utils/util";
import image from '../images/team/1.jpg'
import useForceUpdate from 'use-force-update';



export default function HomePage() {

    const [cureentSearchResult, setCureentSearchResult] = useState([]);
    const [location, setLocation] = useState('');
    const [speclization, setSpeclization] = useState('');
    const forceUpdate = useForceUpdate();

    const handleSearch = (e) => {
        let temp = []
        dockters.map(item => {
            if (item.speclization == speclization && item.location == location) {
                temp.push(item);
            }
        })
        setCureentSearchResult(temp);
        forceUpdate();
        e.preventDefault();
    }

    return (
        <div>
            <NaveBar />
            <div>
                <section className="hero-area bg-1 text-center overly">
                    {/* <!-- Container Start --> */}
                    <div className="container" style={{ position: 'relative' }}>
                        <div className="row">
                            <div className="col-md-12">
                                {/* <!-- Header Contetnt --> */}
                                <div className="content-block" style={{ marginBottom: '100px' }}>
                                    <h1>We are pleased to offer you the chance to have the healthy</h1>
                                    <p>A repudiandae ipsam labore ipsa voluptatum quidem quae laudantium quisquam <br />aperiam maiores sunt fugit, deserunt rem suscipit placeat.</p>
                                </div>
                                {/* <!-- Advance Search --> */}
                                <div className="advance-search" style={{ position: 'relative' }}>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 col-md-12 align-content-center">
                                                <form onSubmit={handleSearch}>
                                                    <div className="form-row" style={{ display: 'flex' }}>
                                                        <div className="form-group col-xl-4 col-lg-3 col-md-6" style={{ marginRight: '30px' }} onChange={(e) => setSpeclization(e.target.value)}>
                                                            <input type="text" className="form-control my-2 my-lg-1" id="inputtext4"
                                                                placeholder="Search doctors" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-6" style={{ marginRight: '100px' }}>
                                                            <select className="w-100 form-control mt-lg-1 mt-md-2" placeholder="Search doctors" onChange={(e) => setLocation(e.target.value)}>
                                                                <option>Location</option>
                                                                <option value="mumbai">Mumbai</option>
                                                                <option value="hyderabad">hyderabad</option>
                                                                <option value="kanpur">kanpur</option>
                                                                <option value="Delhi">Delhi</option>

                                                            </select>
                                                        </div>
                                                        <div className="form-group col-xl-2 col-lg-3 col-md-6 align-self-center" style={{ padding: '10px' }}>
                                                            <button type="Submit" className="btn btn-primary active w-100">Search Now</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Container End --> */}
                </section>
            </div>
            <section className="popular-deals section bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2>Read top articles from health experts</h2>
                                <p>Health articles that keep you informed about good health practices and achieve your goals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* <!-- offer 01 --> */}
                        <div className="col-lg-12">
                            <div className="trending-ads-slide">
                                <div className="col-sm-12 col-lg-4">
                                    {/* <!-- product card --> */}
                                    <div className="product-item bg-light">
                                        {cureentSearchResult.map(item => {
                                            return (
                                                <div className="card">
                                                    <div className="thumb-content">
                                                        {/* <!-- <div className="price">$200</div> --> */}
                                                        <a href="single.html">
                                                            <img className="card-img-top img-fluid" src={item.image}
                                                                alt="" />
                                                        </a>
                                                    </div>
                                                    <div className="card-body">
                                                        <h4 className="card-title"><a href="single.html">{item.doctor_name}</a></h4>
                                                        <ul className="list-inline product-meta">
                                                            <li className="list-inline-item">
                                                                <a href="single.html"><i className="fa fa-folder-open-o"></i>{item.speclization}</a>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <a href="category.html"><i className="fa fa-calendar"></i>{item.location}</a>
                                                            </li>
                                                        </ul>
                                                        <p className="card-text">We provide a wide range of creative services adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque</p>
                                                        <div className="product-ratings">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item selected"><i className="fa fa-star"></i></li>
                                                                <li className="list-inline-item selected"><i className="fa fa-star"></i></li>
                                                                <li className="list-inline-item selected"><i className="fa fa-star"></i></li>
                                                                <li className="list-inline-item selected"><i className="fa fa-star"></i></li>
                                                                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>




                                {/* </div> */}


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Fotter />
        </div>

    )
}