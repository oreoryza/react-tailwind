import React from 'react';

export default function TagTitle({text, letter, milestone}) {
  return (
    <div className='flex justify-between border-b-2 border-green mb-4'>
        <button className='bg-green text-white px-4 py-0.5'>
            <a href="">{text}</a>
        </button>
        <ul className='flex gap-3 text-sm opacity-75'>
          <li><a className='hover:opacity-100 hover:text-green' href="">{letter}</a></li>
          <li><a className='hover:opacity-100 hover:text-green' href="">{milestone}</a></li>
        </ul>
    </div>
  )
}