import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSavedJobs } from "@/redux/jobSlice";
import { USER_API_END_POINT } from "@/utils/constant";

const useGetSavedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSavedJobs = async () => {
      const res = await axios.get(
        `${USER_API_END_POINT}/saved-jobs`,
        { withCredentials: true }
      );
      dispatch(setSavedJobs(res.data.savedJobs));
    };

    fetchSavedJobs();
  }, [dispatch]);
};

export default useGetSavedJobs;