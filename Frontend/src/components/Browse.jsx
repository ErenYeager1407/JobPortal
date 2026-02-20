import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';

// const randomJobs = [1,2,3, 4,5,6,7,8,9, 10];

const Browse = () => {
  const {allJobs} = useSelector(store => store.job)
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl mx-10 my-3'>Search Results ({allJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
          {
            allJobs.map((job) => (
              <Job key={job._id} job={job}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Browse