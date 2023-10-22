"use client"
import userStore from '@/zustand/userStore'
import { Avatar, Button, Divider, Select, TextInput, Textarea, rem } from '@mantine/core'
import { HiInformationCircle } from "react-icons/hi2"
import React from 'react'
import { useForm } from '@mantine/form'
import { IconAt } from '@tabler/icons-react'

export default function Settings() {

  const inputStyle = {
    input: {
      height: "40px"
    }
  }

  const social_links = [
    { controlName: 'instagramLink', icon: 'instagram', label: 'Instagram' },
    { controlName: 'twitterLink', icon: 'x_twitter', label: 'X (twitter)' },
    { controlName: 'tiktokLink', icon: 'tiktok', label: 'Tiktok' },
    { controlName: 'threadsLink', icon: 'threads', label: 'Threads' },

  ]


  const { user } = userStore()
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      country: "Nigeria",
      city: "",
      bio: "",
      twitterLink: "",
      instagramLink: "",
      threadsLink: "",
      tiktokLink: "",
    },
    validate: {
      firstName: (value) => (!value ? 'Your must fill your firstname' : null),
      lastName: (value) => (!value ? 'Your must fill your lastname' : null),
      country: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      bio: (value) => (!value ? 'Your must fill a bio' : null),
      twitterLink: (value) => (!value ? 'Your must add your twitter name' : null),
      instagramLink: (value) => (!value ? 'Your must add your instagram name' : null),
      threadsLink: (value) => (!value ? 'Your must add your threads name' : null),
      tiktokLink: (value) => (!value ? 'Your must add your tiktok name' : null),
    },
  });


  return (
    <>
      {user &&
        <div className='py-[4%] px-[5%] md:px-[10%] lg:px-[20%]' >
          <h5 className='text-lg font-semibold text-gray-600'>Profile settings</h5>
          <div className='mt-3 py-3 md:py-10 rounded-xl border-2 border-gray-300 shadow-md'>
            <div className="flex flex-col items-center gap-2">
              <p className='flex flex-col-reverse md:flex-row text-center items-center font-semibold text-gray-600 mx-3 gap-2'>
                <HiInformationCircle size={24} className='fill-blue-500' /> This informations will be displayed on your public profile
              </p>
              <Avatar size='80px' my='md' radius="100px" styles={{ placeholder: { backgroundColor: '#EA7C3D', color: '#fff', textTransform: 'capitalize' } }}>{user.email?.[0]}</Avatar>
              <p className='font-semibold text-xs'>Max file size: 5MB</p>
              <Button color='gray' variant='outline' >Change photo</Button>
            </div>
            <Divider mb='sm' mt='xl' />

            <form >

              <div className='flex flex-col gap-y-4 px-5'>
                <span className="md:flex gap-x-3">
                  <TextInput styles={inputStyle} label="First name" radius='6px' className='w-full' placeholder='First name'  {...form.getInputProps('firstName')} />
                  <TextInput styles={inputStyle} label="Last name" radius='6px' className='w-full' placeholder='Last name'  {...form.getInputProps('lastName')} />
                </span>
                <span className="md:flex gap-x-3">
                  <Select searchable styles={inputStyle} label="Country" radius='6px' className='w-full' data={['Nigeria', 'Benin', 'France', 'United States of America']}  {...form.getInputProps('country')} />
                  <TextInput styles={inputStyle} label="City" radius='6px' className='w-full' placeholder='Last name'  {...form.getInputProps('lastName')} />
                </span>
                <span>
                  <p className='text-sm font-semibold text-[#525252] mb-2'>Password</p>
                  <Button color='gray.4' variant='filled' c="dark" radius="md" >Change password</Button>
                </span>
              </div>

              <Divider mb='sm' mt='xl' />

              <div className='flex flex-col px-5'>
                <Textarea
                  autosize
                  radius='6px'
                  minRows={2}
                  maxRows={4}
                  label="Short Bio"
                  placeholder='Write a few sentences about yourself here' />
              </div>

              <Divider mb='sm' mt='xl' />

              <div className='flex flex-col gap-y-4 px-5'>
                <p className='text-sm font-medium mb-4 mt-5'>Social links</p>

                <div className="flex flex-col gap-7">
                  {social_links.map(({ controlName, label, icon }) => (
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-4">
                        <img className='w-10' src={`/social_icon/${icon}.svg`} alt="" />
                        <p>{label}</p>
                      </div>
                      <TextInput
                        styles={inputStyle} radius='6px'
                        className='w-[60%]'
                        icon={<IconAt style={{ width: rem(16), height: rem(16) }} />}
                        {...form.getInputProps(controlName)}
                      />
                    </div>
                  ))}
                </div>


                <Button radius="md" size='md' className='mt-6 ml-auto' >Save changes</Button>
              </div>



            </form>
          </div>
        </div >
      }
    </>

  )
}
