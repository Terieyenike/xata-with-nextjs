"use client"
import { useState } from "react"

import Image from "next/image"
import { bigShoe1 } from "@/assets/images"

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const resetFormField = () => {
    setEmail('')
  }

   const submit = () => {
    fetch('/api/post-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      }),
    }).then(() => console.log('succesful'))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    submit()
    setIsSubmitted(true)
    resetFormField()
  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <main>
      <section className="w-full py-8 z-10 sm:px-16 px-8 flex xl:flex-row flex-col justify-center gap-10">
      <div className="xl:w-2/5 flex flex-col justify-center items-start w-full">
        <p className="text-xl font-montserrat text-coral-red">Our summer collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        {isSubmitted ? (
          <div>
            <p className="font-bold text-2xl">Well received! We will keep you updated.</p>
          </div>) : (
          <form className="w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full" onSubmit={handleSubmit}>

          <input type="email" name="email" id="email" placeholder="Enter your email address" className="input" value={email} onChange={handleChange} />

            <div className="flex max-sm:justify-end items-center max-sm:w-full"><button className="w-full bg-coral-red rounded-full text-white border-coral-red px-7 py-4" type="submit">Join waitlist</button></div>

          </form>
        )}
      </div>
      <div className='flex-1 flex justify-center items-center bg-center bg-cover'>
        <Image
          src={bigShoe1}
          alt='shoe collection'
          width={610}
          height={500}
          className='object-contain'
        />

      </div>
      </section>
    </main>
  )
}