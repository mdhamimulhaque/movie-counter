import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieCard/MovieCard.css'

const MovieCard = ({ movies }) => {
    const { id, name, type, language, image } = movies?.show;
    return (
        <div className="movie_card mb-4 p-2" >

            <div className='movieCard_Img_box mb-2'>
                <img className=' card-img-top' src={image?.original} alt="img" />
            </div>

            <div className="movie_basic_info ">
                <h5 className='movie_name pb-0 pt-0'>{name}</h5>
                <div>
                    <small>Type: {type}</small> <br />
                    <small>Language: {language}</small>
                </div>
            </div>
            <Link className='text-decoration-none btn btn-warning text-white d-block my-2' to={`/movie-details/${id}`}>
                Details
            </Link>
        </div>
    );
};

export default MovieCard;