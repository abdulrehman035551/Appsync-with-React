import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='bg-darker flex'>
         <img className='w-20 sm:ml-16 ml-5 bg' src="https://www.ajinomotofoodbizpartner.com.my/wp-content/uploads/2022/03/cropped-favi.png" alt="Netflix Logo" />
        <button className='w-16 top-7 sm:right-16 font-semibold absolute text-center text-white font-sans right-5 rounded-md p-1   bg-red-600 text-s hover:bg-red-900'>Sign In</button>
        </div>
    );
}

export default Header;