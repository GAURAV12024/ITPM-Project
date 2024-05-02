import React from 'react';
import { assets } from '../../assets/assets';
import { useState } from 'react';
import Info from '../Info.jsx/Info';

function Navbar() {

    const [menu,Setmenu]=useState("Home");
  return (

   

    
    

    <div className='px-10 bg-white border-solid border-b-2 border-black'>
<div className='flex items-center justify-between w-full h-10 py-8 '>
      {/* Logo */}
      <div>
        <img className='object-cover w-16 ' src={assets.logo1} alt="Logo" />
      </div>
      {/* Navigation Links */}
      <div className='flex'>
        <ul className='flex gap-5 text-sm cursor-pointer' >
          <li onClick={()=>Setmenu('Home')} className={menu==='Home'?'active':''} >Home</li>
          <li onClick={()=>Setmenu('Workshop')} className={menu==='Workshop'?'active':''} >Workshop</li>
          <li onClick={()=>Setmenu('Events')} className={menu==='Events'?'active':''} >Events</li>
          <li onClick={()=>Setmenu('Courses')} className={menu==='Courses'?'active':''}>Courses</li>
          <li onClick={()=>Setmenu('Products')} className={menu==='Products'?'active':''}>Products</li>
          <li onClick={()=>Setmenu('Media')} className={menu==='Media'?'active':''} >Media</li>
          <li onClick={()=>Setmenu('About')} className={menu==='About'?'active':''}>About</li>
          <li onClick={()=>Setmenu('Blog')} className={menu==='Blog'?'active':''}>Blog</li>
          <li onClick={()=>Setmenu('Downloads')} className={menu==='Downloads'?'active':''}>Downloads</li>
          <li onClick={()=>Setmenu('Contacts')} className={menu==='Contacts'?'active':''}>Contacts</li>
        </ul>
      </div>
      {/* Icons Section */}
      <div className='flex gap-6 pr-4'>
        {/* Basket Icon */}
        <img className='w-6 h-6' src={assets.basket_icon} alt="Basket Icon" />
        <button className=' px-6  text-md  border-solid border-2 border-red-400'> login </button>
        
      </div>
    </div>
    </div>
  );
}

export default Navbar;
