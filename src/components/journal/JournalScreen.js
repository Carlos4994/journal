import React from 'react';
import { JournalSlide } from './JournalSlide'
import { NothingSelected } from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';

export const JournalScreen = () => {
  return (
    <>

      <JournalSlide />

      <div class="p-4 sm:ml-64  bg-amber-100 ">
        <div class="p-4 h-full border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">

          {/* <NothingSelected/> */}

          <NoteScreen />

          <div className='mt-2'>

          <input type="text" class="bg-gray-50 border-none text-lg text-gray-900 rounded-lg focus:ring-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 " placeholder="Some awesome title" />

            <textarea   class="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What happened today"></textarea>
            <div class="flex items-center justify-center h-screen">
  <img src="https://www.latercera.com/resizer/zc-Bvqild9T-ftdzXh4YJKzrW9k=/arc-anglerfish-arc2-prod-copesa/public/HTDZYYPVRBGYJA5O7O23KBPEPM.jpg" 
  alt="Descripción de la imagen" class="max-w-full max-h-full"/>
</div>

          </div>


        </div>
      </div>


    </>
  )
}
