import React from 'react';
import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div className='w-full bg-pink-500 text-black  mt-10 bottom-0' >
      <div className='grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-6 py-8 lg:px-20 md:px-10 sm:px-4 items-center '>
        <div className='flex flex-col justify-center items-center gap-5'>
          <img className='w-32' src={assets.logo1} alt="Logo"  />
          <p className='text-center text-sm'>Our workshop & Course is very useful n helpful and absolutely suitable for pregnant woman of any month. Couples planning their child must attend this.  Abhimanyu garbhsanskar book <br /> is available in 4 different languages(Hindi,Marathi,English,Gujarathi)</p>
          <div className='flex gap-4 justify-center'>
            <img src={assets.twitter_icon} alt="Twitter" className='w-8' />
            <img src={assets.facebook_icon} alt="Facebook" className='w-8' />
            <img src={assets.linkedin_icon} alt="LinkedIn" className='w-8' />
          </div>
        </div>
        <div className='text-center'>
          <h2 className='text-3xl mb-4'>Contact Details</h2>
          <ul className='list-none'>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>About us</li>
            <li className='mb-2'>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='text-center'>
          <h2 className='text-3xl mb-4'>Company</h2>
          <ul className='list-none'>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>About us</li>
            <li className='mb-2'>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className='text-center'>
          <h2 className='text-3xl mb-4'>Company</h2>
          <ul className='list-none'>
            <li className='mb-2'>Home</li>
            <li className='mb-2'>About us</li>
            <li className='mb-2'>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='text-center'>
          <h2 className='text-3xl mb-4'>Get in touch</h2>
          <ul className='list-none'>
            <li className='mb-2'>+91 123 456 789</li>
            <li>Contact us @dsfhad...</li>
          </ul>
        </div>
      </div>
      <hr className='border-gray-600' />
      <p className='text-center py-4'>Copyrights 2024 @Gaurav All rights are reserved</p>
    </div>
  );
}

export default Footer;
