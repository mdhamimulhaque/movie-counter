import React from 'react';
import { Link } from 'react-router-dom';
import './Booking.css';
import { HiOutlineX } from "react-icons/hi";

const Booking = ({ handleModalClose, movieShow }) => {
    const { averageRuntime, premiered, officialSite, ended, name,
        type, language, image, schedule, status, summary } = movieShow;
    return (
        <div className='booking_wrapper row d-flex justify-content-center align-items-center'>
            <div className="col-12 col-md-7 col-lg-4 form_wrapper">
                <form>
                    <div className="header d-flex justify-content-between">
                        <div>
                            <span class="badge text-bg-warning text-white">{type}</span>
                            <h4 className='p-0 m-0 '>{name}</h4>

                            <img src={image?.original} class="my-2 rounded float-start" alt="..." />
                        </div>

                        <HiOutlineX className='close_modal text-lg' onClick={handleModalClose}></HiOutlineX>
                    </div>
                    <div className="form_info_box">
                        <p>Language : {language}</p>
                        <p>Status : {status}</p>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>

                    <Link className='text-decoration-none btn btn-warning text-white my-2' >
                        Booking Now
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Booking;