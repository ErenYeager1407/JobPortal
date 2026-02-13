import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';

const randomJobs = [1,2,3, 4,5,6,7,8,9, 10];

const Browse = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl mx-10 my-3'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
          {
            randomJobs.map((item, index) => (
              <Job/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Browse