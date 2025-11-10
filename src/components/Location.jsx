import React from 'react'
import { motion } from 'framer-motion'

export default function Location(){
  return (
    <section id="location" className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ubicación</h2>
        <div className="md:flex gap-6">
          <div className="md:w-1/2">
            <p className="text-gray-300">Dirección: Calle Ejemplo 123, Col. Centro, Ciudad de México (placeholder)</p>
            <p className="text-gray-300 mt-2">Horario: Lun-Vie 11:00 - 19:00 | Sáb 11:00 - 16:00</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <div className="w-full h-40 sm:h-56 rounded overflow-hidden">
              <iframe title="mapa" src="https://www.google.com/maps?q=Ciudad%20de%20Mexico&output=embed" className="w-full h-full border-0" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
