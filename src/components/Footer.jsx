import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

export default function Footer(){
  const phone = '529612138636'
  const openWhats = (e) => {
    e && e.preventDefault()
    const msg = 'Hola!%20Quiero%20consultar%20más%20información.'
    const url = `https://wa.me/${phone}?text=${msg}`
    window.open(url, '_blank')
  }

  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 relative">
        {/* Neon border */}
        <div className="absolute inset-0 rounded-lg pointer-events-none" style={{ boxShadow: '0 0 40px rgba(230,57,70,0.06), inset 0 0 40px rgba(193,18,31,0.02)' }} />

        <div className="relative z-10 bg-black/80 border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="flex-1">
            <h4 className="font-extrabold text-2xl text-white tracking-wide">DILERWIZARTH</h4>
            <p className="text-sm text-gray-400 mt-1">Directo desde Tuxtla Gutiérrez — sneakers curados y verificados.</p>
            <p className="text-sm text-gray-500 mt-3">Email: <a href="mailto:contacto@dilerwizarth.com" className="underline text-gray-300">moga@hotmail.com</a></p>
          </div>

          {/* Center: Socials */}
          <div className="flex-1 flex flex-col items-center md:items-center">
            <div className="flex items-center gap-4 mb-3">
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-[#E63946] transition transform hover:scale-110"><FaInstagram size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-[#E63946] transition transform hover:scale-110"><FaFacebook size={20} /></a>
              <button
                onClick={openWhats}
                aria-label="WhatsApp"
                className="flex items-center gap-2 text-[#041014] bg-gradient-to-r from-[#E63946] to-[#C1121F] px-3 py-2 rounded-md font-semibold hover:brightness-110 transition"
              >
                <FaWhatsapp />
                <span className="text-sm">Chatear</span>
              </button>
            </div>
            <div className="text-xs text-gray-400">Síguenos para lanzamientos exclusivos y drops</div>
          </div>

          {/* Right: Copyright */}
          <div className="flex-1 flex flex-col items-end md:items-end text-right">
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} DILERWIZARTH</div>
            <div className="text-xs text-gray-500 mt-2">Todos los derechos reservados • Hecho con pasión en Chiapas</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
