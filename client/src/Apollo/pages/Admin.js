import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { AddSingleMovie } from '../mutation';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
function MovieForm() {
    const { register, handleSubmit } = useForm();
    const [AddMovie, { data }] = useMutation(AddSingleMovie)
    if(data)
    {
        toast.success('Movie Is Added');
    }

    const onSubmit = (data) => {

        AddMovie({
            variables: {
                input: {
                    name: data.name,
                    details: data.details,
                    duration: Number(data.duration),
                    image: data.image,
                    publishedYear: Number(data.publishedYear),
                    type:data.type

                }
            }
        })
    };

    return (
        <div className='m-auto w-1/2 p-10 shadow-md rounded bg-dark  mt-5 flex justify-center items-center flex-col'>
            <h2 className='text-white text-2xl text-center font-bold font-serif'>Add Movies</h2>
            <form className='text-red ' onSubmit={handleSubmit(onSubmit)}>
                <div className='pt-5'>
                    <div className='text-white'>
                        <label htmlFor="name">Movie Name</label>
                    </div>
                    <input
                        type="text"
                        id="name"
                        {...register('name', { required: true })}
                    />
                </div>

                <div className='pt-5'>
                    <div className='text-white'>
                    <label htmlFor="duration">Duration (minutes):</label>
                    </div>
                    <input
                        type="number"
                        id="duration"
                        {...register('duration', { required: true })}
                    />
                </div>
                 <div className='pt-5'>
                    <div className='text-white'>
                    <label htmlFor="details">Details:</label>
                    </div>
                    <textarea id="details" {...register('details', { required: true })} />
                    </div>
                   <div>
                    <div className='text-white pt-5'>
                    <label htmlFor="publishedYear">Published Year:</label>
                    </div>
                    <input
                        type="number"
                        id="publishedYear"
                        {...register('publishedYear', { required: true })}
                    />
                </div>
               <div>
                <div className='text-white pt-5'>
                    <label htmlFor="image">Image URL:</label>
                    </div>
                    <input
                        type="text"
                        id="image"
                        {...register('image', { required: true })}
                    />
                </div>
                <div className='pt-5'>
                    <div className='text-white'>
                        <label htmlFor="type">Movie Type</label>
                    </div>
                    <input
                        type="text"
                        id="type"
                        {...register('type', { required: true })}
                    />
                </div>
                
                <div className='pt-5 flex justify-center'>
                <button className="px-4 py-2  bg-red-600 text-white rounded-md text-lg font-semibold hover:bg-red-900">Add Now</button>
                </div>

            </form>
        </div>
    );
}

export default MovieForm;
