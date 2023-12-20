import React from 'react'
import Logo from '../../assets/logo.png'
import { BellIcon } from '@heroicons/react/solid';
function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white-800 text-black border">
      <div>
        <img src={Logo}/>
      </div>
      <div>
      <BellIcon className="w-6 h-6 text-gray-500" />
      </div>
    </header>

  )
}

export default Header