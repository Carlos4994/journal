import React from 'react'

export const NotesAppBar = () => {
  return (
    <>

<div className='w-full flex'>
  <div className='w-2/3'>
    <span>28 de octubre de 2023</span>
  </div>
  <div className='w-1/6'>
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
      Picture
    </button>
  </div>
  <div className='w-1/6'>
    <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
      Button
    </button>
  </div>
</div>

    </>
  )
}
