import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Navbar from "./shared/Navbar";

const JobDescription = () => {
  const isApplied = false;
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-4 p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-xl">Frontend Developer</h1>
            <div className="flex items-center gap-2 mt-4">
              <Badge className="text-blue-700 font-bold" variant="outline">
                12 Positions
              </Badge>
              <Badge className="text-[#F83002] font-bold" variant="outline">
                Part time
              </Badge>
              <Badge className="text-[#7209b7] font-bold" variant="outline">
                14LPA
              </Badge>
            </div>
          </div>
          <Button
            disabled={isApplied}
            className={`rounded-lg ${isApplied ? "bg-gray-600 cursor-not-allowed" : "bg-[#7209b7] hover: bg-[#5f32ad]"}`}
          >
            {isApplied ? "Already applied" : "Apply now"}
          </Button>
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:
            <span className="pl-4 font-normal text-gray-800">
              Frontend Developer
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:
            <span className="pl-4 font-normal text-gray-800">
              Hyderbad
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Description:
            <span className="pl-4 font-normal text-gray-800">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, maxime.
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:
            <span className="pl-4 font-normal text-gray-800">
              2yrs
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:
            <span className="pl-4 font-normal text-gray-800">
              12LPA
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:
            <span className="pl-4 font-normal text-gray-800">
              4
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:
            <span className="pl-4 font-normal text-gray-800">
              17-07-2024
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
