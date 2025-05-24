import React from 'react'

const ContactForm = () => {
    return (
        <form className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="bg-transparent border-b border-gray-500 py-2 px-1 placeholder-gray-400 focus:outline-none w-full"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-b border-gray-500 py-2 px-1 placeholder-gray-400 focus:outline-none w-full"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="bg-transparent border-b border-gray-500 py-2 px-1 placeholder-gray-400 focus:outline-none w-full md:col-span-2 lg:col-span-1"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="bg-transparent border-b border-gray-500 py-2 px-1 placeholder-gray-400 focus:outline-none w-full md:col-span-2 lg:col-span-1"
                />
            </div>
            <textarea
                rows={4}
                placeholder="Tell us what you're interested in"
                className="w-full bg-transparent border-b border-gray-500 py-2 px-1 placeholder-gray-400 focus:outline-none resize-none"
            />
            <button
                type="submit"
                className="w-full bg-[#009CA3] text-white font-bold py-3 rounded-full hover:hover:bg-[#0A5F65] transition"
            >
                Send to us
            </button>
        </form>
    )
}

export default ContactForm