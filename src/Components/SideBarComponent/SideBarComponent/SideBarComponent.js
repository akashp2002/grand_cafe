import React from 'react'
import { useState } from "react";
import controlIcon from '../../../assets/control.png'
import logoIcon from "../../../assets/logo.png";
import Home from '../../Home/Home';
import CustomButton from '../../../CustomButton/CustomButton';
function SideBarComponent() {
    const [open, setOpen] = useState(true);
    const Menus = [
      { title: "Dashboard", src: "Chart_fill" },
      { title: "User Management", src: "Chat" },
      { title: "Product Management", src: "User", gap: true },
      { title: "Category Management ", src: "Calendar" },
      { title: "Chat", src: "Search" },
      { title: "Oreder", src: "Chart" },
      { title: "Payment ", src: "Folder", gap: true },
      { title: "Notification", src: "Setting" },
      { title: "Store Management", src: "Setting" },
      { title: "Coupon", src: "Setting" },
      { title: "Product Officer", src: "Setting" },
    ];
  return (
    <div className="flex">
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src={controlIcon}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logoIcon}
          className={`cursor-pointer duration-500 ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Administractor
        </h1>
      </div>
      <p className='text-white'>Nancy</p>
      <h6 className='text-white'>@nancy123</h6>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
      <CustomButton backgroundcolor="#ff0000" buttonText="Log Out"/>
    </div>
    <div className="h-screen flex-1 p-7">
      <Home/>
  </div>
  </div>
  )
}

export default SideBarComponent