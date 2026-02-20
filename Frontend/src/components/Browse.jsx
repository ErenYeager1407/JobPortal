import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import useGetSearchedJobs from '@/hooks/useGetSearchedJobs';
import { setSearchedQuery } from '@/redux/jobSlice';

const Browse = () => {
  useGetSearchedJobs();
  const {allJobs, searchedQuery} = useSelector(store => store.job)
  const dispatch = useDispatch();
  
  const filteredJobs = allJobs.filter((job) => {
    if (!searchedQuery) {
      return true;
    }
    return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
           job.description.toLowerCase().includes(searchedQuery.toLowerCase());
  });

  return (
    <div>
      <Navbar/>
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl mx-10 my-3'>Search Results ({filteredJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 p-10'>
          {
            filteredJobs.map((job) => (
              <Job key={job._id} job={job}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Browse