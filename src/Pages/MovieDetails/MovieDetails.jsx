import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            movie details
        </div>
    );
};

export default MovieDetails;