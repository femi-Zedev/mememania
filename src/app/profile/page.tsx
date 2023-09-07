"use client"; // This is a client component 👈🏽
import { currentUserAtom } from '@/recoil/atoms';
import { Avatar, Button, Tabs } from '@mantine/core';
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitterFilled, IconPencil } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useRecoilState } from 'recoil';

export default function Profile() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  console.log(currentUser);
  

  return (
    <div className='md:flex md:mx-[10%] md:px-[10%] gap-x-[16%] pt-[4%] mt-4'>
      <div className="flex flex-col items-center gap-y-3 mb-4">
        <Avatar size='120px' radius="100px" styles={{ placeholder: { backgroundColor: '#EA7C3D', color: '#fff', textTransform: 'capitalize' } }}>{currentUser.email?.[0]}</Avatar>
        <p className='text-xl font-semibold capitalize'>{currentUser.email?.split('@')[0]} </p>
        <span className='text-sm font-normal text-gray-500'>Lagos, NGA</span>
        <Button variant='filled'
          leftIcon={<IconPencil className='stroke-slate-800' size={20} />}
          size='md' radius="md"
          className='!bg-gray-200 !text-gray-700 hover:!bg-gray-300'
          onClick={() => { router.push('/setting') }} >
          Edit profile
        </Button>

        <span className="flex items-center gap-x-3 justify-center">
          <IconBrandTwitterFilled size={20} color='gray' />
          <IconBrandInstagram size={20} color='gray' />
          <IconBrandFacebookFilled size={20} color='gray' />
        </span>
      </div>

      <div className="">
        <Tabs defaultValue="memes">
          <Tabs.List>
            <Tabs.Tab value="memes">Published memes</Tabs.Tab>
            <Tabs.Tab value="collections" >
              <span className="flex items-center gap-x-1 md:gap-x-2">
                Collections
                <span className="rounded-xl border bg-red-100 border-pink-400 text-pink-500 text-[10px] py-1 px-[6px] ">coming soon</span>
              </span>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel className='flex flex-col gap-3 items-center text-center' value="memes" pt="xs">
            <h3 className='font-semibold text-2xl mt-20'>Publish your first meme</h3>
            <p className='text-base'>Share your best memes with the world, let everyone know what`&apos;s up !</p>
            <Button size='md' radius="md" variant='filled' >Upload meme</Button>
          </Tabs.Panel>

          <Tabs.Panel className='flex flex-col gap-3 items-center text-center p-4' value="collections" pt="xs">
            <img src='/collection.png' className='md:mt-10' />
            <h3 className='font-semibold text-2xl'>Collection feature coming soon !</h3>
            <p className='text-base text-gray-400'>Here you will be able to create a collections of memes. Stay tuned to get notified when it will be available . </p>
          </Tabs.Panel>
        </Tabs>
      </div>

    </div>
  )
}
