"use client"; // This is a client component 👈🏽
import CustomIcon from '@/components/ui-components/CustomIcon'
import userStore from '@/zustand/userStore';
import { Button, Divider, PasswordInput, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form';
import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Signin() {
  const router = useRouter();
  const { user, setUser } = userStore()


  const [isLoading, setIsLoading] = useState(false)
  const form = useForm({
    initialValues: {
      password: '',
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  function handleLogin() {
    if(form.isTouched() && !form.isValid() ) return
    setIsLoading(true)
    const user = {
      email: form.values.email,
    };
    setUser(user)
    setTimeout(() => {
      setIsLoading(false)
      router.push('/profile')
    }, 1500);
  }

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="xs:w-[98%] md:w-[60%] lg:w-[30%] p-10 flex flex-col gap-5 rounded-lg bg-white shadow-2xl border border-gray-100 shadow-slate-200">
        <div className="">
          <h2 className='font-bold text-[32px] text-gray-800'>Log in</h2>
          <div className='ml-1 md:flex gap-2 text-regular14 font-semibold text-gray-600'>
            <p>New to MemeMania ?</p>
            <Link href="/signup" className='text-primary-600'>Create an account</Link>
          </div>
        </div>

        <Button variant='outline' size='lg' radius="6px" className='!border-gray-300 !text-gray-400 !font-normal hover:!text-white' leftIcon={<CustomIcon icon='google' />} > Login with Google</Button>
        <Divider label={<p className='text-sm'>or</p>} labelPosition='center' />

        <TextInput radius='6px' type='email' className='w-full' placeholder='Email'  {...form.getInputProps('email')} />
        <div>
          <PasswordInput
            radius='6px'
            placeholder="Password"
            {...form.getInputProps('password')}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEyeClosed size={20} /> : <IconEye size={20} />
            } />
          <p onClick={() => { router.push('/signup') }} className='text-right text-primary-500 text-sm mt-2 cursor-pointer font-semibold'>Forgot your password ?</p>
        </div>


        <Button loading={isLoading} className="mt-4 !rounded-md" size="lg" variant='filled' onClick={handleLogin}>Login</Button>

      </div>
    </div>
  )
}
