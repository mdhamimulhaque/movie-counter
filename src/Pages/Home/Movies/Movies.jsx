import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MovieCard from '../../MovieCard/MovieCard';

const Movies = () => {
    const { data: MoviesData = [] } = useQuery({
        queryKey: ['shows'],
        queryFn: async () => {
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
            const data = await res.json();
            return data
        }
    });
    return (
        <section className='container'>
            <h2>Running Show : {MoviesData?.length}</h2>

            <div className="movies_cardArea row">
                {
                    MoviesData?.map(movies =>
                        <div className='col-12 col-md-6 col-lg-4'>
                            <MovieCard movies={movies} />
                        </div>)
                }
            </div>
        </section>
    );
};

export default Movies;