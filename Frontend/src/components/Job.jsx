import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
        <div className='flex items-center justify-between'>
            <p className='text-sm text-gray-500'>2 days ago</p>
            <Button variant='outline' className='rounded-full' size="icon"><Bookmark/></Button>
        </div>
        <div className='flex items-center gap-2 my-2'>
            <Button className='p-6' variant='outline' size='icon'>
                <Avatar>
                    <AvatarImage src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_user_personalization&w=740&q=80"/>
                </Avatar>
            </Button>
            <div>
                <h1>Company name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Title</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, neque.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 font-bold' variant="ghost">12 Positions</Badge>
            <Badge className='text-[#F83002] font-bold' variant="ghost">Part time</Badge>
            <Badge className='text-[#7209b7] font-bold' variant="ghost">14LPA</Badge>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Button variant='outline'>Details</Button>
            <Button className="bg-[#7209b7]">Save for Later</Button>
        </div>
    </div>
  )
}

export default Job