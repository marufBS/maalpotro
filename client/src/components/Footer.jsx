import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-4">
      <p className="text-sm ">
        © {new Date().getFullYear()} Bakite. All rights reserved.
      </p>
      <ul className="flex flex-wrap justify-center md:justify-start gap-4">
        <li><Link to="/" className="hover:text-teal-600 transition">Home</Link></li>
        <li><Link to="/pre-reg" className="hover:text-teal-600 transition">Pre-Register</Link></li>
        <li><Link to="/contact-us" className="hover:text-teal-600 transition">Contact Us</Link></li>
        <li><Link to="/terms" className="hover:text-teal-600 transition">Terms</Link></li>
        <li><Link to="/privacy" className="hover:text-teal-600 transition">Privacy</Link></li>
      </ul>
    </div>
  )
}

export default Footer