import React from 'react';
import { JournalSlide } from './JournalSlide'
import { NothingSelected } from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';

export const JournalScreen = () => {
  return (
    <>

   <JournalSlide/>

      <div class="p-4 sm:ml-64  bg-amber-100 h-screen">
        <div class="p-4 h-full border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          
            {/* <NothingSelected/> */}

            <NoteScreen/>
      

        </div>
      </div>


    </>
  )
}
