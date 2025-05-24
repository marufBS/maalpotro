import React from 'react'
import logo from '../../public/logo.png';


const Home = () => {
    return (
        <div className="text-center w-full flex flex-col flex-1 justify-center items-center">
            <div className='px-3'>
                <img src={logo} alt="Bakite Logo" className="mx-auto mb-4 w-2/4 md:w-4/3" />
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-heading">Welcome to Bakite</h1>
                <p className="mt-2 text-xl">একটি বাকি হিসাব প্লাটফর্ম</p>
            </div>
        </div>
    )
}

export default Home