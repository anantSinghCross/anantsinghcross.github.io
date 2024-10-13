import React from 'react'

const ContactMe = () => {
  return (
    <div className="relative flex justify-center max-w-3xl w-full">
      <div className="flex justify-center flex-col gap-10 p-10 bg-white w-full">
        <div className=''>
          <h1 className='text-2xl mb-7'>
            I'd like to hear more from you! 
          </h1>
          <div className='flex flex-col'>
            
          </div>
          <p className=' text-neutral-500'>
            Feel free to say hi on my socials/email or <a className='text-nowrap pb-1 border-b-2 border-b-neutral-200 hover:border-b-neutral-400 hover:text-black transition-all' href='mailto:anantsingh.cse@gmail.com'>get in touch for a project.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactMe