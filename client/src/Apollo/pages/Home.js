import React, { useState ,useEffect} from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { getUsers } from '../quries';
import { getMovies } from '../quries';
import { getSingleMovie } from '../quries';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
function Home(props) {
  const [inputValue, setInputValue] = useState('');
  const [load, setLoad] = useState(false);
  let navigate = useNavigate();
  const { loading,  data } = useQuery(getUsers);
  const { data: movieData } = useQuery(getMovies);
  const [getMyMovie, { data: singleMovieData ,error}] = useLazyQuery(getSingleMovie);

  useEffect(() => {
    console.log(error);
    if (error) {
      toast.error('No data');
    }
  }, [error]);
  const handleSearch = () => {
  
    getMyMovie({ variables: { name: inputValue } });
   
  };

  return (
    <>
      <div className='items-center flex flex-col justify-center h-96'>
        <h1 className='text-5xl text-white text-center font-black'>Find Unlimited movies, TV shows, and more</h1>
        <div>
          <input
            type='text'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Enter Movie Name'
            className='mt-7 w-96 h-12 border-solid border-2 text-center text-2xl border-red-600 opacity-70 ::after:border-red-500'
          ></input>
          <button
            onClick={handleSearch}
            className='bg-red-600 w-32 h-12 ml-3  text-white text-2xl font-sans hover:bg-red-900 border-red-700'
          >
            Search
          </button>
        </div>
      </div>
      {loading && <div></div>} 
      {!loading && singleMovieData && (
        <div>
          {navigate('/search', {
            state: singleMovieData,
          })}
        </div>
      )}
    </>
  );
}

export default Home;
