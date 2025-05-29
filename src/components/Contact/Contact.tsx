import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div id="contact" className='py-20 px-56 bg-[#0067B1] flex items-center gap-20'>
      {/* Contact Us */}
      <div className='space-y-5 w-1/2'>
        <h2 className='text-3xl font-semibold'>Get in touch</h2>
        <div className='h-1 w-16 bg-white'></div>
        <p className='text-lg font-semibold'>For general enquires</p>     
        <div>
          <p className='text-xl font-bold'>Address :</p>
          <p className='font-semibold'>110, 16th Road, Chembur, Mumbai – 400071</p>
        </div>
        <div>
          <p className='text-xl font-semibold'>Phone :</p>
          <a className='font-semibold' href='tel:+912225208822'>+91 22 25208822</a>
        </div>
        <div>
          <p className='text-xl font-semibold'>Email :</p>
          <a className='font-semibold' href='mailto:info@supremegroup.co.in'>info@supremegroup.co.in</a>
        </div>
      </div>
      {/* Contact Us */}
      <ContactForm />
    </div>
  )
}

export default Contact