import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Booking from '../Booking/Booking';
import './MovieDetails.css';

const MovieDetails = () => {
    const params = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: MoviesData = [], isLoading } = useQuery({
        queryKey: ['shows'],
        queryFn: async () => {
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
            const data = await res.json();
            return data
        }
    });

    const movie = MoviesData?.filter(mv => mv?.show.id == params.id);
    if (isLoading) {
        return <Loading />
    }

    const movieShow = movie[0]?.show;
    const { averageRuntime, premiered, officialSite, ended, name,
        type, language, image, schedule, status, summary } = movieShow;

    // --->handle modal open
    const handleModalOpen = () => {
        setIsModalOpen(true)
    }

    // ---> handle modal close
    const handleModalClose = () => {
        setIsModalOpen(false)
    }


    return (
        <div className="row">
            <div className="col-12 col-lg-7 mx-auto mt-5">
                <div className="card mb-3 card_details">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image?.original} className="details_img img-fluid rounded-start" alt="img" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className='movie_name pb-0 pt-0'>{name}</h5>
                                <span>Movie Type : {type ? type : "type not set"}</span> <br />
                                <small>Language : {language ? language : "language not set"}</small> <br />
                                <small>Average Runtime : {averageRuntime ? averageRuntime : "averageRuntime not set"}</small> <br />
                                <small>Premiered : {premiered ? premiered : "premiered not set"}</small><br />
                                <small>Schedule : {
                                    schedule?.days.map(day => <small> {day ? day : 'day not set'} |</small>)
                                }</small> <br />
                                <small>Status : {status ? status : 'No status set'}</small><br />
                                <small>Ended : {ended ? ended : 'No ended set yet'}</small><br />
                                <small>Official Site : {officialSite ? officialSite : 'official site not available'}</small><br />
                                <Link className='text-decoration-none btn btn-warning text-white my-2'
                                    onClick={handleModalOpen}
                                >
                                    Book a Movie Ticket
                                </Link>
                            </div>
                        </div>
                        <p className="card-text p-3"><strong>Details : </strong>{summary}</p>
                    </div>
                </div>

            </div>

            {/* booking form modal */}
            {
                isModalOpen &&
                <div className="booking_modal_area">
                    <Booking
                        handleModalClose={handleModalClose}
                        movieShow={movieShow}
                    />
                </div>
            }
        </div>
    );
};

export default MovieDetails;