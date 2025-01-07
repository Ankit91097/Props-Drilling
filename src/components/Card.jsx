import React from 'react'
import Nothing from './Nothing'

const Card = (props) => {
  return (
    <div className='w-[12%] bg-red-200 m-5 p-10 inline-block text-center'>
      <img className='rounded-full h-32 w-32 mx-auto' src={props.profile_picture} alt={props.username} />
      <h3 className='text-xl'>{props.username}</h3>
      <h3 className='text-xl'>{props.age}</h3>
      <h3 className='text-xl'>{props.city}</h3>
      <h3 className='text-xl'>{props.prof}</h3>
      <button className='border-2 border-black p-2 rounded bg-green-500 mt-3'>Add Friend</button>
      <Nothing city={props.city} />
    </div>
  )
}

export default Card
