"use client"; // This is a client component 👈🏽
import CustomIcon from '@/components/ui-components/CustomIcon';
import { Checkbox, Divider, PasswordInput, TextInput } from '@mantine/core';
import { Button } from '@mantine/core'
import { IconEyeClosed, IconEye } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react'
import { useForm } from '@mantine/form';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

export default function Signup() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: true
    },
    validate: {
      firstName: (value) => (value ? 'Your must fill your name' : null),
      lastName: (value) => (!value ? 'Vous devez choisir une table' : null),
      email: (value) => (value === 0 && values.adult == 0 && isCoverVisible ? 'Vous devez avoir au moins une personne à la table' : null),
    },
  });
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className="xs:w-[98%] md:w-[60%] lg:w-[30%] p-10 flex flex-col gap-5 rounded-lg bg-white shadow-2xl border border-gray-100 shadow-slate-200">
        <div className="">
          <h2 className='font-bold text-[32px]  text-gray-800'>Create an account</h2>
          <span className='ml-1 flex gap-2 text-regular14 font-semibold text-gray-600'>
            <p>Already have an account ?</p>
            <Link href="/signin" className='!text-primary-600'>Login</Link>
          </span>
        </div>

        <Button variant='outline' size='lg' radius="6px" className='!border-gray-300 !text-gray-400 !font-normal hover:!text-white' leftIcon={<CustomIcon icon='google' />} > Signup with Google</Button>
        <Divider label={<p className='text-sm'>or</p>} labelPosition='center' />

        <form className='flex flex-col gap-y-4'>
          <div className="flex gap-x-3">
            <TextInput radius='6px' className='w-full' placeholder='First name' />
            <TextInput radius='6px' className='w-full' placeholder='Last name' />
          </div>

          <TextInput radius='6px' type='email' className='w-full' placeholder='Email' />
          <PasswordInput
            radius='6px'
            placeholder="Password"
            visibilityToggleIcon={({ reveal }) =>
              reveal ? <IconEyeClosed size={20} /> : <IconEye size={20} />
            } />
          <Button className="mt-4 !rounded-md" fullWidth size="lg" variant='filled'>Create account</Button>

          <span className='text-sm text-gray-600'>
            <Checkbox
              mt="md"
              label={
                <p>
                  By continuing, you agree MemeMania <Link href="" className='text-primary-600'>Terms of Services</Link> and <Link href="" className='text-primary-600'>Privacy Policies.</Link>
                </p>
              }
              {...form.getInputProps('terms', { type: 'checkbox' })}
            />
          </span>
        </form>


      </div>
    </div>
  )
}
