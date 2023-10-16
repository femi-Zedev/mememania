"use client"; // This is a client component 👈🏽
import CustomIcon from '@/components/ui-components/CustomIcon';
import { Checkbox, Divider, PasswordInput, TextInput } from '@mantine/core';
import { Button } from '@mantine/core'
import { IconEyeClosed, IconEye } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'
import { useForm } from '@mantine/form';

export default function Signup() {
  const inputStyle = {
    input: {
      height: "43px"
    }
  }

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: {
      firstName: (value) => (!value ? 'Your must fill your firstname' : null),
      lastName: (value) => (!value ? 'Your must fill your lastname' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'The password must be at least 6 caracters' : null),

    },
  });
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="w-[98%] md:w-[60%] lg:w-[40%] p-10 flex flex-col gap-5 rounded-lg bg-white shadow-2xl border border-gray-100 shadow-slate-200">
        <div className="">
          <h2 className='font-bold text-[32px]  text-gray-800'>Create an account</h2>
          <span className='ml-1 flex gap-2 text-regular14 font-semibold text-gray-600'>
            <p>Already have an account ?</p>
            <Link href="/signin" className='!text-primary-600'>Login</Link>
          </span>
        </div>

        <Button variant='outline' size='lg' radius="6px" className='!border-gray-300 hover:!bg-gray-300 !text-gray-400 !font-normal hover:!text-gray-500' leftIcon={<CustomIcon icon='google' />} > Signup with Google</Button>
        <Divider label={<p className='text-sm'>or</p>} labelPosition='center' />

        <form className='flex flex-col gap-y-4' onSubmit={form.onSubmit((values) => console.log(values))}>
          <div className="flex gap-x-3">
            <TextInput styles={inputStyle} radius='6px' className='w-full' placeholder='First name'  {...form.getInputProps('firstName')} />
            <TextInput styles={inputStyle} radius='6px' className='w-full' placeholder='Last name'  {...form.getInputProps('lastName')} />
          </div>

          <TextInput styles={inputStyle} radius='6px' type='email' className='w-full' placeholder='Email'  {...form.getInputProps('email')} />
          <PasswordInput
          styles={inputStyle}
            radius='6px'
            placeholder="Password"
            visibilityToggleIcon={({ reveal }) => reveal ? <IconEyeClosed size={20} /> : <IconEye size={20} />}
            {...form.getInputProps('password')} 
            />
          <Button className="mt-4 !rounded-md" fullWidth size="lg" variant='filled' type='submit'>Create account</Button>

          <span className='text-sm text-gray-600'>
            <p>
              By continuing, you agree MemeMania <Link href="" className='text-primary-600'>Terms of Services</Link> and <Link href="" className='text-primary-600'>Privacy Policies.</Link>
            </p>
          </span>
        </form>


      </div>
    </div>
  )
}
