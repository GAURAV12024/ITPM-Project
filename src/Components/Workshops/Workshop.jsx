import React from 'react'
import Cards  from '../Card/Cards'
import Video from '../Video/Video'
import Choose from '../WhyChoseusPage/Chose'
import ContactUs from '../ContactUs/Contactus'
import SuccessStory from '../SuccessStory/SuccessStory'
import CardDefault from '../ReviewCard/CardDefault'


function Workshop() {
  return (
    <div className='w-full mt-20'>

        <div className='flex justify-center items-center'>
        <h1 className='text-5xl text-red-500'>...Our Workshops...</h1>
        </div>
       <div className='flex flex-wrap gap-5 grid grid-cols-3 mx-10 my-5'>
        
        <Cards/>
        

        
       
       
       </div>
       <div  className='my-10 mx-10 '>
        <div className='flex items-center justify-center my-10'>
        <h1 className='text-5xl text-red-500'>Vidos of workshop </h1>
        </div>
        
        <div className='flex flex-wrap grid grid-cols-3 gap-10'>
        <Video/>
        
        </div>
        <div>
          <Choose/>
        </div>
        <div>
          <SuccessStory/>
        </div>
        <div>
          <ContactUs/>
        </div>

        <div >
          <div className='flex justify-center items-center'>
            <h1 className='text-5xl text-red-500 my-5'>Our Blogs</h1>
          </div>
          <div className='flex mx-20 gap-20'>
          <CardDefault/>
          
          </div>
          
        </div>
       
       </div>
      
    </div>
  )
}

export default Workshop
