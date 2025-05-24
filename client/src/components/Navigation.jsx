import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom'


const Navigation = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { to: '/', label: 'Home' },
        { to: '/contact-us', label: 'Contact Us' },
        { to: '/terms', label: 'Terms of Service' },
        { to: '/privacy', label: 'Privacy Policy' },
    ];
    return (
        <div>
            {/* <nav className="bg-[#EFFEFD] shadow py-6 flex justify-around">
                <ul className="flex space-x-2 justify-center font-nav">
                    <li><Link to="/" className="hover:text-teal-600 hover:bg-gray-200 p-3 rounded-lg transition">Home</Link></li>
                    <li><Link to="/contact-us" className="hover:text-teal-600  hover:bg-gray-200 p-3 rounded-lg transition">Contact Us</Link></li>
                    <li><Link to="/terms" className="hover:text-teal-600  hover:bg-gray-200 p-3 rounded-lg transition">Terms of Service</Link></li>
                    <li><Link to="/privacy" className="hover:text-teal-600  hover:bg-gray-200 p-3 rounded-lg transition">Privacy Policy</Link></li>
                </ul>
                <ul>
                    <li>
                        <Link to='/pre-reg' className='bg-[#009CA3] text-white font-bold p-3 rounded-lg hover:bg-[#0A5F65] transition'>Pre-Register</Link>
                    </li>
                </ul>
            </nav> */}
            <nav className="bg-[#EFFEFD] shadow w-full z-30">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo or Brand */}
                    <Link to="/" className="font-nav text-xl font-bold">
                        বাকিতে
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4 items-center font-nav">
                        {links.map(({ to, label }) => (
                            <li key={to}><Link to={to} className="hover:text-teal-600 hover:bg-gray-200 p-2 rounded-lg transition">{label}</Link></li>
                        ))}
                        <li><Link to="/pre-reg" className="bg-[#009CA3] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0A5F65] transition ml-10">Pre-Register</Link></li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-2xl text-gray-700"
                        onClick={() => setOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        {open ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Slide-Out */}
                <div className={`
                                fixed top-0 left-0 h-full w-64 bg-[#EFFEFD] shadow-lg transform
                                ${open ? 'translate-x-0' : '-translate-x-full'}
                                transition-transform duration-300 ease-in-out
                                md:hidden
                                `}>
                    <ul className="mt-20 space-y-4 px-4 font-nav">
                        <li><Link to="/pre-reg" onClick={() => setOpen(false)} className="block bg-[#009CA3] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#0A5F65] transition">Pre-Register</Link></li>
                        {links.map(({ to, label }) => (
                            <li key={to}><Link to={to} onClick={() => setOpen(false)} className="block hover:text-teal-600 hover:bg-gray-200 p-2 rounded-lg transition">{label}</Link></li>
                        ))}
                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Navigation