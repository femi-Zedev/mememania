"use client"; // This is a client component 👈🏽

import { Button } from '@mantine/core'
import React from 'react';
// @ts-ignore 
import Files from "react-files";
import { GoAlertFill } from 'react-icons/go'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const rules = [
  "Copywrite free videos",
  "Good quality videos",
  "Mindfull of others rights",
  "Excludes nudity, violence and hate",
  "To be used for free",
  "No gender discrimination",
]

export default function Upload() {

  // get files when selected and add them to state for display purpose
  const onFilesChange = (files: File[]) => {
    console.log(files);
  };

  // error to display when error on file upload
  const onFilesError = (error: any, file: any) => {
    console.log(error.message)
    // setAlertObj({open: true, type: "error", message: error.message});
  };

  return (
    <div className='w-full pt-10 pb-6'>

      <Files
        className="flex md:w-[80%] lg:w-[64%] mx-auto flex-col gap-5 items-center rounded-3xl py-20 bg-teal-50/60 hover:bg-teal-50 border border-dashed border-teal-300 cursor-pointer"
        onChange={onFilesChange}
        onError={onFilesError}
        accepts={["video/*"]} // accepts=["image/png", "image/jpeg", ".pdf", "audio/*"]
        multiple={false}
        maxFileSize={25 * 1000000} // maxFileSize={10000000}
        minFileSize={0 * 1000000} // minFileSize={0}
        
      >
        <img src="/assets/upload_placeholder.svg" className='w-44' alt="" />
        <div className="flex flex-col gap-3 items-center">
          <h2 className='text-xl font-bold text-gray-700'>Drag and drop to upload</h2>
          <h2 className='text-xl font-bold text-gray-500'>or</h2>
          <Button size='sm' radius="md" >Browse</Button>
        </div>
      </Files>

      <div className="mt-6 w-fit m-auto">
        <span className=" m-auto flex flex-col lg:flex-row justify-center text-center items-center gap-x-2">
          <GoAlertFill size={20} className='fill-red-500' />
          <p className='text-lg font-bold text-gray-700'>
            Make sure your video complies with the following rules (read our <a className='external-link' href="" target='_blank'>terms</a>  )
          </p>
        </span>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <span className="flex items-center lg:pl-10 gap-2 m-2">
              <BsFillCheckCircleFill size={20} className='fill-teal-500' />
              <p>{rule}</p>
            </span>
          ))}
        </div>

      </div>

    </div>
  )
}