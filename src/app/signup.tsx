import { Button } from '@mantine/core'
import React from 'react'

export default function signup() {
  return (
    <div className='w-full h-full flex items-center justify-center bg-[#EFEEEE]'>
      <div className="w-[410px] p-10 flex flex-col gap-5 rounded-lg bg-white">
        <h2 className=''>Create an account</h2>
        <span className='flex gap-2 text-regular14'>
          <p className=''>Already have an account ?</p>
          <button className='text-primary-600'>Login</button>
        </span>
        <Button variant='outline' radius="md" className='border-[#808E9A] text-[#808E9A]' leftIcon={<GoogleIcon/>} > Signup with Google</Button>
      </div>
    </div>
  )
}



const GoogleIcon = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2949 12.5C22.3064 11.8106 22.2353 11.1224 22.0829 10.45H12.6949V14.173H18.2049C18.1005 14.8251 17.8657 15.4494 17.5145 16.0087C17.1633 16.5679 16.7029 17.0507 16.1609 17.428L16.1419 17.553L19.1109 19.86L19.3159 19.88C21.2049 18.13 22.2949 15.555 22.2949 12.5Z" fill="#4285F4" />
      <path d="M12.695 22.31C15.395 22.31 17.661 21.419 19.317 19.88L16.161 17.428C15.317 18.018 14.183 18.431 12.695 18.431C11.4298 18.4236 10.1993 18.017 9.17896 17.269C8.15706 16.5195 7.39684 15.4675 7.00596 14.262L6.88896 14.272L3.80196 16.669L3.76196 16.781C4.59185 18.4422 5.86737 19.84 7.44596 20.818C9.02274 21.794 10.8406 22.3107 12.695 22.31Z" fill="#34A853" />
      <path d="M7.005 14.26C6.78655 13.6209 6.67407 12.9504 6.672 12.275C6.67597 11.601 6.7846 10.9317 6.994 10.291L6.988 10.158L3.865 7.72301L3.763 7.77101C3.0614 9.16875 2.69604 10.7111 2.69604 12.275C2.69604 13.8389 3.0614 15.3813 3.763 16.779L7.007 14.259L7.005 14.26Z" fill="#FBBC05" />
      <path d="M12.695 6.123C14.1284 6.10093 15.5145 6.6362 16.561 7.616L19.384 4.852C17.5762 3.1484 15.1779 2.21273 12.694 2.242C10.841 2.242 9.02399 2.759 7.44599 3.736C5.8672 4.71364 4.59135 6.11102 3.76099 7.772L6.99499 10.292C7.38963 9.08706 8.15203 8.03613 9.17499 7.287C10.197 6.53903 11.4285 6.13179 12.695 6.123Z" fill="#EB4335" />
    </svg>

  )
}
