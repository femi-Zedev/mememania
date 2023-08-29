"use client"; // This is a client component 👈🏽
import { ActionIcon, Avatar, Burger, Button, Divider, HoverCard, Menu, TextInput } from '@mantine/core';
import CustomIcon from '../ui-components/CustomIcon';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconChevronDown, IconSettings, IconUpload, IconUserCircle } from '@tabler/icons-react';
import { useRecoilState } from 'recoil';
import { currentUserAtom } from '@/recoil/atoms';
import style from './Navbar.module.css'


const Navbar = ({ isNavBarStyled }: { isNavBarStyled: boolean, }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false)
  const [currentUser, setCurrentUser] = useRecoilState(currentUserAtom);
  const [isAuth, setIsAuth] = useState(false)

  const router = useRouter();


  function handleBurgerClick() {
    if (menuOpen == true) {
      setMenuOpen(false)
      if (searchFocused === true) { setSearchFocused(false) }
    } else {
      setMenuOpen(true)
    }
  }

  const logOut = () => {
    setIsAuth(false)
    setCurrentUser(null)
    router.push('/signin')
  };

  useEffect(() => {
    currentUser == null || undefined ? setIsAuth(false) : setIsAuth(true)
  }, [currentUser])



  return (

    <>
      <nav className={`w-full py-4 lg:px-10 3xl:px-[10%]   top-0 left-0 fixed ${!isNavBarStyled ? 'bg-transparent' : 'bg-white/60 backdrop-blur-md border-b border-gray-200'}`} >

        <div className="flex px-4 justify-between items-center">
          <Link href="/">
            <img className="xs:h-6 md:h-8" alt="" src="/logo.svg" />
          </Link>


          <div className='flex xl:w-1/3 items-center justify-end'>
            {isNavBarStyled &&
              <>
                <div className="flex gap-6">
                  {searchFocused === false &&
                    <button className='xl:hidden' onClick={() => { setMenuOpen(true); setSearchFocused(true) }}>
                      <CustomIcon icon="search" height={20} width={20} fill="#000000" />
                    </button>
                  }

                  <TextInput
                    radius='8px'
                    inputMode='search'
                    type='search'
                    icon={<CustomIcon icon="search" height={20} width={20} fill="#000000" />}
                    variant="filled"
                    placeholder="Search meme"
                    className='w-full xs:hidden xl:block'
                  />
                  <>
                    {isAuth ?
                      <span className='xs:hidden md:flex items-center gap-x-4'>
                        <ProfileMenu onLogout={logOut} onSettingClick={() => { router.push('/settings')}} currentUser={currentUser} />
                        <Button variant='filled' size='md' radius="md">Upload</Button>
                      </span>

                      :
                      <span className='xs:hidden sm:flex items-center gap-x-6'>
                        <Link href="/signin" className='text-base font-bold text-primary-600' >Login</Link>
                        <Button variant='filled' size='md' radius="md" onClick={() => { router.push('/signup') }} >Sign Up</Button>
                      </span>
                    }


                  </>
                </div>

                <a onClick={handleBurgerClick}>
                  <Burger size={20} opened={menuOpen} className='xl:hidden ml-4' />
                </a>
              </>
            }


          </div>
        </div>

        <AnimatePresence>
          {menuOpen &&
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.5 }}
              className="md:hidden text-center h-auto" >

              {searchFocused &&
                <motion.div className='px-4' initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                  <TextInput
                    radius='8px'
                    inputMode='search'
                    type='search'
                    icon={<CustomIcon icon="search" height={20} width={20} fill="#000000" />}
                    variant="filled"
                    autoFocus
                    placeholder="Search meme"
                    className='w-full my-6'
                  />
                </motion.div>
              }

              {isAuth ?
                <motion.div className='flex flex-col gap-2 mt-4' initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                  <Divider />
                  <button className='flex items-center gap-4 justify-start  w-full rounded-md  py-2 px-4' onClick={() => { router.push('/profile')}}>
                    <Avatar size='40px' radius="xl" styles={{ placeholder: { backgroundColor: '#EA7C3D', color: '#fff', textTransform: 'capitalize' } }}>{currentUser.email?.[0]}</Avatar>
                    <div className="text-start">
                      <p className='capitalize text-md font-semibold'>{currentUser.email?.split('@')[0]} </p>
                      <span className='text-xs font-normal text-gray-400'>{currentUser.email}</span>
                      <p className='text-primary-600 mt-1 text-xs font-normal'>View Profile</p>
                    </div>
                  </button>
                  <Divider />
                  <button className='flex items-center gap-2 justify-start w-full rounded-md py-3 pl-5' onClick={() => { router.push('/settings')}}>
                    <IconSettings color='gray' size="20" />
                    <p className='font-bold text-gray-500'>Settings</p>
                  </button>
                  <Divider />
                  <button className='flex items-center gap-2 justify-start w-full rounded-md py-3 pl-5' onClick={logOut}>
                    <IconUpload className='rotate-90' color='gray' size="20" />
                    <p className='font-bold text-gray-500'>Logout</p>
                  </button>
                </motion.div>
                :
                <motion.div initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                  <button className='text-primary-500 font-bold mt-2 w-full rounded-md hover:bg-primary-500 hover:text-white p-3'>Sign in</button>
                </motion.div>
              }

            </motion.div>
          }

        </AnimatePresence>


      </nav>


    </>

  );
};

export default Navbar;



const ProfileMenu = ({ currentUser, onLogout, onSettingClick }: { currentUser: any, onLogout: () => void, onSettingClick: () => void }) => {
  return (
    <HoverCard radius="12px" width={230} shadow="md">

      <HoverCard.Target>
        <button className='flex items-center h-full'>
          <Avatar radius="xl" styles={{ placeholder: { backgroundColor: '#EA7C3D', color: '#fff', textTransform: 'capitalize' } }}>{currentUser.email?.[0]}</Avatar>
          <ActionIcon> <IconChevronDown size="16px" /> </ActionIcon>
        </button>
      </HoverCard.Target>

      <HoverCard.Dropdown className='!flex gap-1 flex-col !px-0'>
        <button className={`px-2 mb-1`}>
          <div className={`${style.menuItem} !items-start !gap-x-3`}>
            <Avatar size='34px' radius="xl" styles={{ placeholder: { backgroundColor: '#EA7C3D', color: '#fff', textTransform: 'capitalize' } }}>{currentUser.email?.[0]}</Avatar>
            <div className="text-sm font-semibold">
              <p className='mt-[6px] capitalize'>{currentUser.email?.split('@')[0]} </p>
              <span className='text-xs font-normal text-gray-400'>{currentUser.email}</span>
              <p className='text-primary-600'>View Profile</p>
            </div>
          </div>
        </button>

        <Divider />
        <div className="p-2">
          <button onClick={onSettingClick}
            className={`${style.menuItem} text-base font-semibold text-gray-500`} >
            <IconSettings color='gray' size="24" />
            Settings
          </button>
          <button onClick={onLogout}
            className={`${style.menuItem} text-base font-semibold text-gray-500`} >
            <IconUpload className='rotate-90 ml-1' color='gray' size="22" />
            Logout
          </button>
        </div>

      </HoverCard.Dropdown>

    </HoverCard>
  )
}
