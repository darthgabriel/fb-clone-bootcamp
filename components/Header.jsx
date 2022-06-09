import React from 'react'
import Image from 'next/image'
import { SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/solid'
import HeaderIcon from './HeaderIcon'


const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
            <div className='flex items-center'>
                {/* Left */}
                <Image
                    width={40}
                    height={40}
                    layout="fixed"
                    src="https://links.papareact.com/5me"
                />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <SearchIcon className='h-6 text-gray-500' />
                    <input type="text" className='hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink' placeholder='Search in Facebook' />
                </div>
                {/* Center*/}
                <div className='flex justify-center flex-grow'>
                    <div className='flex space-x-6 md:space-x-2'>
                        <HeaderIcon active Icon={HomeIcon} />
                        <HeaderIcon Icon={FlagIcon} />
                        <HeaderIcon Icon={PlayIcon} />
                        <HeaderIcon Icon={ShoppingCartIcon} />
                        <HeaderIcon Icon={UserGroupIcon} />
                    </div>
                </div>

                {/* Right */}
                <div>
                    {/* profile pic */}
                    <p className='whitespace-nowrap font-semibold pr-3 '>Jose</p>
                </div>


            </div>
        </div>
    )
}

export default Header