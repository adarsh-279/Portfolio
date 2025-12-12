import React from 'react'

const Education = () => {
  return (
    <div className='w-full border-2 border-[#7a7a7a52] dark:border-[#1F2937] rounded-lg font-[inter]'>
      <div className='w-full flex flex-col'>
        <div className='w-full p-4 flex justify-around items-start'>
          <img className='bg-[#F3F4F6] dark:bg-white rounded-full w-12' src="https://upload.wikimedia.org/wikipedia/en/c/c1/GNIT_Kolkata_logo.png" alt="" />
          <div className='w-full ml-4 dark:text-white flex flex-col'>
            <h1 className='text-xs opacity-60'>Aug 24 - Present</h1>
            <h1 className='text-md font-semibold'>Gurunanak Institute Of Technology, Kolkata, India</h1>
            <h1 className='text-sm opacity-60'>B.Tech in Information Technology</h1>
            <h1 className='text-sm mt-2'>Relevant Course Work :</h1>
            <h1 className='text-sm opacity-60'>• Web Development</h1>
            <h1 className='text-sm opacity-60'>• Computer Networking</h1>
            <h1 className='text-sm opacity-60'>• Operating Systems</h1>
            <h1 className='text-sm opacity-60'>• Database Management Systems</h1>
            <h1 className='text-sm opacity-60'>• Data Structures & Algorithms</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education