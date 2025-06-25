import React from 'react'
import { assets } from '../assets/assets'

export const Footer = () => {
  return (
    <footer className="w-full  text-gray-300 py-8 md:py-10 mt-20 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and attribution */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img 
              src={assets.logo} 
              alt="Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
            <p className="flex items-center gap-1.5 text-sm sm:text-base text-zinc-700">
              Crafted with <span className="text-pink-400 animate-pulse">❤️</span> by
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent font-medium ml-1">
                Priyanshu Raj
              </span>
            </p>
          </div>


         
        </div>

        {/* Copyright */}
        
      </div>
    </footer>
  )
}