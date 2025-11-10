import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export default function Navbar(){
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="#hero" className="text-2xl font-bold tracking-widest text-primary">DEALER WIZARD</Link>
        <nav className="hidden md:flex gap-6 text-sm uppercase text-gray-200">
          <a href="#catalog" className="hover:text-primary transition">Catálogo</a>
          <a href="#about" className="hover:text-primary transition">Quiénes Somos</a>
          <a href="#location" className="hover:text-primary transition">Ubicación</a>
        </nav>
        <button className="md:hidden text-gray-200"><FaBars/></button>
      </div>
    </header>
  )
}
