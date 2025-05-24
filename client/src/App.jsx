// App.jsx
import { FaLink } from "react-icons/fa6";
import './App.css';
import Form from './components/Form';
import { Routes, Route } from 'react-router-dom'
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import PreRegister from "./pages/PreRegister";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Footer from "./components/Footer";
import logo from '../public/logo.png'

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center">

        <img src={logo} alt="" className="w-52" />
        <h1 className="text-4xl">Welcome to Maalpotro</h1>
        </div>
        {/* <Navigation />
        <main className="flex flex-1"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pre-reg" element={<PreRegister />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-6">
          <Footer/>
        </footer> */}
      </div>
    </>

  );
}

export default App;



