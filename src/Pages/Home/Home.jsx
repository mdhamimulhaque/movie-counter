import React from 'react';
import Movies from './Movies/Movies';
import img1 from '../../img/banner1.jpg';
import img2 from '../../img/banner-2.jpg';


const Home = () => {

    return (
        <div>
            <section className='slider_area'>
                <div id="home_slider" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{ height: '400px', objectFit: 'cover', width: "100%" }}
                                src={img1} alt="img" />
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: '400px', objectFit: 'cover', width: "100%" }}
                                src={img2} className="d-block w-100" alt="img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#home_slider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#home_slider" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className='tickets_area mt-5'>
                <Movies />
            </section>
        </div>
    );
};

export default Home;