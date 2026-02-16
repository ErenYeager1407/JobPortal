import { useEffect } from "react";
import { useDispatch } from ("react-redux")
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";

const useGetSingleJob = (jobId) => {
    const dispatch = useDispatch();
    
    
}