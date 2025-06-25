import React from 'react'
import { assets } from '../assets/assets'
export const Testimonials = () => {
  return (
    <div className='pb-16'>
      {/* TITLE  */}
     <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent">
        Try to see the magic <span className='bg-gradient-to-r  from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>MAGIC </span>
      </h1>

       <div className='text-center mb-24'>
                {/* UPLOAD WALA START HERE  */}
                <input type="file" name="" id="upload2" hidden />
                <label htmlFor="upload2" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                  <img      width={20} src={assets.upload_btn_icon} alt="" />
                  <p className="text-white text-sm">Upload your image</p>
                </label>
                {/* UPLOAD WALA ENDS HERE  */}
              </div>

    </div>
  )
}
