/* eslint-disable react-hooks/rules-of-hooks */
"use client"; 
import { useState } from "react";
import { HiLockClosed, HiEye, HiEyeOff } from "react-icons/hi";

export default function Password() {
    const [type, setType] = useState('password');
 
    const handleShowHidePassword = () => {
      if (type === 'password') {
        setType('text');
      } else {
        setType('password')
      }
    }
    
    return (
        <div className="relative flex items-center mb-5">
          <HiLockClosed className="absolute left-3" color="#adadb5" size={20} />
          <input className="bg-[#f7f7f7] py-3 px-12 w-full rounded-xl  text-sm focus:bg-[#dfffea] focus:ring-1 focus:ring-hijau focus:outline-none" type={type} name="" id="password" placeholder="Password"/>
          {type === 'password' ? 
            <HiEye className="absolute right-3" color="#adadb5" size={20} onClick={handleShowHidePassword} /> 
            : <HiEyeOff className="absolute right-3" color="#adadb5" size={20} onClick={handleShowHidePassword} />}
        </div>
    )
}