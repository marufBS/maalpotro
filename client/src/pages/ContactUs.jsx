import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:min-h-screen">
      {/* Left Panel */}
      <div className="lg:w-1/2 p-8 bg-white flex flex-col justify-center">
        <h1 className="text-5xl font-bold mb-4">Let's get in touch</h1>
        <p className="text-xl mb-8">Don’t be afraid to say hello with us!</p>
        <div className="space-y-4 text-gray-700">
          <div>
            <h2 className="font-semibold">Phone</h2>
            <p className="ml-4">+8801711752003</p>
          </div>
          <div>
            <h2 className="font-semibold">Email</h2>
            <p className="ml-4">support@bakite.com</p>
          </div>
          <div>
            <h2 className="font-semibold">Office</h2>
            <p className="ml-4">
              House #117/A, Road #17,<br />
              CDA Residential Area, Agrabad,<br />
              Chattogram 4100, Bangladesh
            </p>
            <a
              href="https://www.google.com/maps?q=22.32478,91.79809&z=17"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-teal-600 hover:underline"
            >
              See on Google Map ↗
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 p-8 bg-black text-white flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <ContactForm/>
        </div>
      </div>
    </div>
  )
}

export default ContactUs