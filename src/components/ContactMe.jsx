import React from 'react'

const ContactMe = () => {
  return (
    <div className="relative flex justify-center max-w-3xl w-full">
      <div className="flex justify-center flex-col gap-10 p-10 bg-white w-full hover:shadow-md transition-all duration-500">
        <div className=''>
          <h1 className='text-2xl mb-7 relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all after:duration-700 hover:after:w-28'>
            I'd like to hear more from you! 
          </h1>
          <div className='flex flex-col'>
            
          </div>
          <p className='text-neutral-500 opacity-90 hover:opacity-100 transition-opacity duration-500'>
            Feel free to say hi on my socials/email or <a className='text-nowrap pb-1 border-b-2 border-b-neutral-200 hover:border-b-neutral-400 hover:text-black transition-all duration-300 hover:translate-y-[-1px] inline-block transform' href='mailto:anantsingh.cse@gmail.com'>get in touch for a project.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactMe