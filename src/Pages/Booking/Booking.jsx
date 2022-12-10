import React from 'react';
import './Booking.css';
import { HiOutlineX } from "react-icons/hi";

const Booking = ({ handleModalClose, movieShow }) => {

    const { name, type, language, image, status, } = movieShow;

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const userInfo = {
            userName, email, phone, password, name, type
        }
        localStorage.setItem('movieShow', JSON.stringify(userInfo))
    }

    return (
        <div className='booking_wrapper row d-flex justify-content-center align-items-center'>
            <div className="col-12 col-md-7 col-xl-4 form_wrapper">
                <form onSubmit={handleBookingSubmit}>
                    <div className="header d-flex justify-content-between">
                        <div>
                            <span className="badge text-bg-warning text-white">{type}</span>
                            <h4 className='p-0 m-0 '>{name}</h4>

                            <img src={image?.original} className="my-2 rounded float-start" alt="img" />
                        </div>

                        <HiOutlineX className='close_modal text-lg' onClick={handleModalClose}></HiOutlineX>
                    </div>
                    <div className="form_info_box">
                        <p>Language : {language}</p>
                        <p>Status : {status}</p>
                    </div>

                    <div className="form-group">
                        <label for="name">Full Name</label>
                        <input name='name' type="text" className="form-control" placeholder="Enter Your Full Name" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Full Name</label>
                        <input name='phone' type="text" className="form-control" placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input name='email' type="email" className="form-control" placeholder="Enter Your email" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input name='password' type="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className='submit_btn text-decoration-none btn btn-warning text-white my-2 ' >
                        Booking Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;