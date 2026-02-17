import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const { companies } = useSelector((store) => store.company);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {(!companies || companies.length === 0) ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center text-gray-500">
                You haven't registered any companies yet
              </TableCell>
            </TableRow>
          ) : (
            companies.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={
                        company.logo ||
                        "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
                      }
                    />
                  </Avatar>
                </TableCell>

                <TableCell className="font-medium">
                  {company.name}
                </TableCell>

                <TableCell>
                  {new Date(company.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <div className="flex justify-end">
                    <Popover>
                      <PopoverTrigger asChild>
                        <MoreHorizontal className="cursor-pointer" />
                      </PopoverTrigger>

                      <PopoverContent className="w-32">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;