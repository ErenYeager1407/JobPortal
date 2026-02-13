import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import { setUser } from "@/redux/authSlice";
import UpdateProfileDialog from "./UpdateProfileDialog";

const Profile = () => {
  const skills = ["Html", "CSS", "JS", "react", "MERN"];
  const isResume = true;
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_user_personalization&w=740&q=80" />
            </Avatar>
            <div>
              <h1 className="font-bold text-xl">Full Name</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                perferendis doloremque vero et?
              </p>
            </div>
          </div>
          <Button variant="outline" className="text-right" onClick={() => setOpen(true)}>
            <Pen />
          </Button>
        </div>

        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>akash@mail</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>81616338384</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((item, index) => {
                return <Badge key={index}>{item}</Badge>;
              })
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className='text-md folnt-bold'>Resume</Label>
            {
                isResume ? <a target="blank" href="https://pornhub.com" className="text-blue-500 underline">Resume here</a> : <span>NA</span>
            }
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-lg my-4">Applied Jobs</h1>
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
