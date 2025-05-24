import React from 'react'
import Form from '../components/Form'
import { FaLink } from 'react-icons/fa6'

const PreRegister = () => {
    return (
        <div className="flex flex-col w-full flex-1 bg-gray-900 pt-10">

            {/* Your existing layout */}
            {/* <div className="relative z-10"> */}
            {/* … logo panel and <Form /> as before … */}
            <div className="w-full flex flex-col flex-1 md:flex-row justify-between items-center md:p-6">

                <div className="w-full md:w-2/4 flex justify-center items-center p-6">
                    <div className="space-y-10 text-white w-full md:w-auto">
                        <div className="flex md:block md:space-y-16 justify-between items-center">
                            <img src="logo.png" alt="bakite-logo" className="w-16 md:w-32 lg:w-40 xl:w-48" />
                            <div className="space-y-2 flex flex-col items-end md:items-start ">
                                <h1 className="text-3xl md:text-5xl mt-4 font-medium">বাকিতে</h1>
                                <p className="text-sm md:text-xl">একটি বাকি হিসাব প্লাটফর্ম</p>
                            </div>
                        </div>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-xl mt-4">
                            <FaLink /> www.bakite.co
                        </p>
                    </div>
                </div>
                <div className="flex-1 w-full md:overflow-hidden md:p-4 ">
                    <Form />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default PreRegister