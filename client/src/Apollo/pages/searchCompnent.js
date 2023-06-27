import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchComponent(props) {
  const location = useLocation();
  const movieDetails = location.state.getSingleMovie;
  console.log(movieDetails);
  return (
    <section className='flex justify-center w-full'>
      <div className='bg-darker text-center m-10 h-96 flex flex-col md:flex-row w-full md:w-1/2 rounded'>
        <div className='w-full md:w-1/2'>
          <img
            className="w-full h-full object-contain pl-5"
            src={movieDetails.image}
            alt="Movie Poster"
          />
        </div>
        <div className='w-full md:w-1/2 text-2xl p-2'>
          <h3 className='text-center text-white capitalize'>{movieDetails.name}</h3>
          <div className='text-white text-xs text-start flex justify-between px-10 pt-5 '>
            <span>{movieDetails.publishedYear}</span>
            <span>{movieDetails.type}</span>
            <span>{movieDetails.duration} min</span>
          </div>
          <p className='text-white text-sm text-justify font-fantasy p-5'>{movieDetails.details}.</p>
          <button className="px-4 py-2 bg-red-600 text-white rounded-md text-lg font-semibold hover:bg-red-900">Watch Now</button>
        </div>
      </div>
    </section>
  );
}

export default SearchComponent;
