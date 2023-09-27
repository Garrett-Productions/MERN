import React from 'react'
import {AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className='w-full bg-white py-16 text-black '>
          <div className='max-w-[500px] mx-auto text-center flex flex-col justify-center'>
              <p className='text-4xl font-bold mb-10 underline'>Contact Me</p>
              <div className='flex justify-between'>
                <p className='circle contact-links'><AiOutlineGithub size={45} /></p>
                <p className='circle contact-links'><AiFillLinkedin size={45} /></p>
                <p className='circle contact-links'><AiOutlineMail size={45} /></p>
              </div>
              <div className='flex justify-between max-w-[490px]'>
                <a href="https://github.com/Garrett-Productions" className='contact-links'>GitHub</a>
                <a href="https://www.linkedin.com/in/garrettturner-developer/" className='contact-links'>Linked in</a>
                <a href="https://mail.google.com/mail/u/0/#inbox" className='contact-links'>Gmail</a>
              </div>
          </div>
          </div>
          <div className='w-full bg-black'>
            <p class="py-4 text-center text-white italic">Copy right 2023 @ By Garrett Turner All Rights Reserved</p>
          </div>
    </>
  )
}

export default Footer;