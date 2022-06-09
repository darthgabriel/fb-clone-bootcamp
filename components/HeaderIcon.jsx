import React from 'react'

const HeaderIcon = ({ Icon, active }) => {
    return (
        <div className='flex items-center cursor-pointer hover:bg-gray-300 rounded-xl active:border-b-2 active:border-blue-500 md:px-10 sm:h-14 group'>
            <Icon className={`h-5 text-gray-500 text-center sm:h-7 group-hover:text-blue-500 mx-auto ${active && "text-blue-500"}`} />
        </div>
    )
}

export default HeaderIcon