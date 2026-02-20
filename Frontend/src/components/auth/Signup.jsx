import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setLoading } from "@/redux/authSlice";
// import getDataUri from ''

function Signup() {
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate()
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // [] -> compted/dynamic key
  //without [] -> literal key
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const {loading} = useSelector(store => store.auth)
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!input.fullname || !input.email || !input.phoneNumber || !input.password || !input.role) {
      toast.error("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", input.fullname)
    formData.append("email", input.email)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("password", input.password)
    formData.append("role", input.role)

    if(input.file){
      formData.append("file", input.file)
    }
    try {
      dispatch(setLoading(true))
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate('/login');
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error.response?.data?.message || error.message || "Signup failed. Please try again.";
      toast.error(errorMessage);
    }
    finally{
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
      if(user){
        navigate("/")
      }
    }, [])

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label className="my-2">Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter full name"
            />
          </div>
          <div className="my-2">
            <Label className="my-2">Email</Label>
            <Input
              type="email"
              placeholder="Enter email here"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label className="my-2">Phone number</Label>
            <Input
              type="text"
              placeholder="Enter phone number here"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
            />
          </div>
          <div className="my-2">
            <Label className="my-2">Password</Label>
            <Input
              type="password"
              placeholder="Enter password here"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role==='student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role==='recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" 
              onChange={changeFileHandler} className="cursor-pointer" />
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please Wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Signup
            </Button>
          )}
          <span className="text-sm">
            Already have an acoout?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
