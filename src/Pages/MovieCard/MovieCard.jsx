import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieCard/MovieCard.css'

const MovieCard = ({ movies }) => {
    const { id, averageRuntime, premiered, officialSite, ended, name,
        type, language, image, schedule, status, summary, runtime, url } = movies?.show;
    console.log(movies)
    return (
        <div class="movie_card mb-4 p-2" >

            <div className='movieCard_Img_box mb-2'>
                <img className='movieCard_Img' src={image?.original} class="card-img-top" alt="img" />
            </div>

            <div class="movie_basic_info ">
                <h6 className='movie_name pb-0 pt-0'>{name}</h6>
            </div>
            <Link className='text-decoration-none' to={`/movie-details/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default MovieCard;