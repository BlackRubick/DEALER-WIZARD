import React from 'react'
import { motion } from 'framer-motion'

function toWhatsapp(model){
  const msg = `Hola, me interesa ${model}`
  return `https://wa.me/?text=${encodeURIComponent(msg)}`
}

export default function ProductCard({product}){
  return (
    <motion.div className="bg-dark-gray rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105 hover:-translate-y-1 will-change-transform"
      variants={{hidden:{opacity:0, y:20}, show:{opacity:1, y:0}}}>
      <div className="relative h-44 sm:h-56 bg-gray-900">
        <img src={product.img} alt={product.model} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{product.model}</h3>
          <span className="text-sm text-gray-300">Edición</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <a href={toWhatsapp(product.model)} target="_blank" rel="noreferrer" className="flex-1 text-center bg-primary text-black font-medium px-3 py-2 rounded hover:bg-primary-dark transition">Consultar Precio</a>
          <button className="px-3 py-2 border border-gray-700 rounded text-sm">Detalles</button>
        </div>
      </div>
    </motion.div>
  )
}
