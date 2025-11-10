import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Catalog from '../components/Catalog'
import About from '../components/About'
//import Location from '../components/Location'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="min-h-screen bg-bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <About />
       {/* <Location /> */}
      </main>
      <Footer />
    </div>
  )
}
