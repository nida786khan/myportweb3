import React from 'react'
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'data-aos="zoom-in-up">
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="zoom-in-up">Get in Touch</h2>
                <p className='text-gray-600 text-[18px] pt-2'data-aos="zoom-in-up">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum id assumenda aut amet itaque dolorum.
                   </p>
                   <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                   <IoIosMail  size={30} /> xyz@gmail.com
                   </div>
                   <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                   <BsFillTelephoneFill  size={30}/>(+129) 876-54
                </div>
           </div>
           <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='name' />
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
                id='email' />
            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
               <textarea 
                className=' bg-transparent border border-accent'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className='bg-accent p-2 px-6'data-aos="zoom-in-up">Send</button>
           </div>
        </div>
    </div>
  )
}

export default Contact