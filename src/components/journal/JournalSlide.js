import React from 'react';
import { JournalEntries } from './JournalEntries'

export const JournalSlide = () => {
  return (
    <>
   <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a href="#" class="flex flex-col items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div>
                  <img src="https://icons.iconarchive.com/icons/dakirby309/simply-styled/48/Calendar-icon.png" width="48" height="48" class="mx-auto" />

                </div>
                <span class="mt-1">New Entry</span>
              </a>

            </li>

            <JournalEntries />

          </ul>
        </div>
      </aside>
    </>
  )
}
