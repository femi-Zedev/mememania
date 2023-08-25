"use client"; // This is a client component 👈🏽
import { Burger, Button, TextInput } from '@mantine/core';
import CustomIcon from '../ui-components/CustomIcon';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isStyled] = useState(true)
  const [searchFocused, setSearchFocused] = useState(false)
  const router = useRouter();

  function handleBurgerClick() {
    if (menuOpen == true) {
      setMenuOpen(false)
      if (searchFocused === true) { setSearchFocused(false) }
    } else {
      setMenuOpen(true)
    }
  }


  return (

    <>
      <nav className={`w-full py-4 px-4 lg:px-10 3xl:px-[10%] overflow-hidden top-0 left-0 fixed ${!isStyled ? 'bg-transparent' : 'bg-white/60 backdrop-blur-md border-b border-gray-200'}`} >

        <div className="flex justify-between items-center">
          <Link href="/">
            <img className="xs:h-6 md:h-8" alt="" src="/logo.svg" />
          </Link>


          <div className='flex xl:w-1/3 items-center justify-end'>
            {isStyled &&
              <>
                <div className="flex gap-6">
                  {searchFocused === false &&
                    <button className='xl:hidden' onClick={() => { setMenuOpen(true); setSearchFocused(true) }}>
                      <CustomIcon icon="search" height={20} width={20} fill="#000000" />
                    </button>
                  }

                  <TextInput
                    inputMode='search'
                    type='search'
                    icon={<CustomIcon icon="search" height={20} width={20} fill="#000000" />}
                    variant="filled"
                    placeholder="Search meme"
                    className='w-full xs:hidden xl:block'
                  />
                  <span className='xs:hidden sm:flex gap-x-6 '>
                    <button className='text-base font-bold text-primary-600'>Login</button>
                    <Button variant='filled' size='md' radius="md" onClick={() => {router.push('/signup')} } >Sign Up</Button>
                  </span>
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
                <motion.div initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                  <TextInput
                    inputMode='search'
                    type='search'
                    icon={<CustomIcon icon="search" height={20} width={20} fill="#000000" />}
                    variant="filled"
                    autoFocus
                    placeholder="Search meme"
                    className='w-full my-10'
                  />
                </motion.div>
              }
              {/* <motion.div initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                <Button variant='filled'  radius="md" className={`!w-1/2  ${!searchFocused && 'mt-10'}`} >Sign Up</Button>
              </motion.div> */}
              <motion.div initial={{ x: -70, y: 0 }} animate={{ x: 0, y: 0 }} exit={{ x: -70, y: 0, opacity: 0 }}>
                <button className='text-primary-500 font-bold mt-2 w-full rounded-md hover:bg-primary-100 p-3'>Sign in</button>
              </motion.div>

            </motion.div>
          }

        </AnimatePresence>


      </nav>


    </>

  );
};

export default Navbar;
