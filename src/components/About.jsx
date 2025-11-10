import React, { useState, useEffect } from 'react'
import dealerImg from '../public/dealerwizard.jpeg'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function About(){
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 20 })
  const springY = useSpring(y, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    { 
      icon: "", 
      title: "100% AUTÉNTICO", 
      desc: "Cada par verificado, sin pedos" 
    },
    { 
      icon: "", 
      title: "CALIDAD PREMIUM", 
      desc: "Solo lo más chingón del mercado" 
    },
    { 
      icon: "", 
      title: "EXCLUSIVOS", 
      desc: "Modelos que no encuentras en otro lado" 
    },
    { 
      icon: "", 
      title: "CHIAPAS POWER", 
      desc: "Desde Tuxtla para todo México" 
    }
  ]

  return (
    <section 
      id="about" 
      className="relative mx-auto px-4 py-20 overflow-hidden"
      style={{
        maxWidth: '1280px',
        backgroundColor: '#1A1A1A'
      }}
    >
      {/* Grid hexagonal de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <path d="M25,0 L50,14.43 L50,28.87 L25,43.3 L0,28.87 L0,14.43 Z" fill="none" stroke="#E63946" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Líneas cruzadas animadas */}
      <motion.div
        className="absolute top-1/4 left-0 right-0 h-px opacity-30"
        style={{ backgroundColor: '#E63946' }}
        animate={{ x: [-1000, 1000] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-0 right-0 h-px opacity-20"
        style={{ backgroundColor: '#C1121F' }}
        animate={{ x: [1000, -1000] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Partículas flotantes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: '#E63946',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="relative z-10">
        {/* Header con glitch */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-3 relative">
              <span className="relative inline-block">
                <span style={{ color: '#FFFFFF' }}>QUIÉNES SOMOS</span>
                {/* Glitch effect */}
                <span 
                  className="absolute top-0 left-0"
                  style={{ 
                    color: '#E63946',
                    clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                    animation: "glitch 3s infinite"
                  }}
                >
                  QUIÉNES SOMOS
                </span>
                <span 
                  className="absolute top-0 left-0"
                  style={{ 
                    color: '#C1121F',
                    clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
                    animation: "glitch 2.5s infinite reverse"
                  }}
                >
                  QUIÉNES SOMOS
                </span>
              </span>
            </h2>
            <motion.div 
              className="h-1"
              style={{
                background: 'linear-gradient(to right, #E63946, #C1121F, transparent)'
              }}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono mt-4"
            style={{ color: '#E63946' }}
          >
            {'>'} DIRECTOS DESDE TUXTLA, CHIAPAS
          </motion.p>
        </motion.div>

        {/* Contenido principal */}
        <div className="md:flex gap-12 items-center">
          {/* Imagen con efectos */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative group mb-8 md:mb-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Container con clip-path */}
            <div 
              className="relative overflow-hidden border-2 transition-all duration-500"
              style={{
                borderColor: isHovered ? '#E63946' : 'rgba(230, 57, 70, 0.3)',
                clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))"
              }}
            >
              <img 
                src={dealerImg} 
                alt="sneakers" 
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay con scan lines */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="h-full w-full" style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, #E63946 3px, #E63946 6px)"
                }}></div>
              </div>

              {/* Glow effect */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(230, 57, 70, 0.3), transparent 70%)'
                  }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              {/* Corner decorations */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: '#E63946' }}></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: '#E63946' }}></div>
            </div>

            {/* Badge flotante */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 border-2 font-mono text-sm font-bold backdrop-blur-md"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderColor: '#E63946',
                color: '#E63946',
                clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)"
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              TUXTLA, CHIAPAS
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            {/* Texto principal con efecto holográfico */}
            <div className="mb-8 p-6 border backdrop-blur-sm relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderColor: 'rgba(230, 57, 70, 0.3)',
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)"
              }}
            >
              {/* Scan line en el texto */}
              <motion.div
                className="absolute inset-0 h-px opacity-50"
                style={{ backgroundColor: '#E63946', top: '50%' }}
                animate={{ x: [-500, 500] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <p className="text-lg mb-4 leading-relaxed relative z-10" style={{ color: '#F8F9FA' }}>
                <span style={{ color: '#E63946' }} className="font-bold">DILERWIZARTH</span> nace en el corazón de <span style={{ color: '#E63946' }} className="font-bold">Tuxtla Gutiérrez, Chiapas</span>
              </p>
              <p className="mb-4 leading-relaxed relative z-10" style={{ color: '#F8F9FA' }}>
                Somos la nueva ola del sneaker game en el sur de México. Traemos los <span style={{ color: '#E63946' }} className="font-bold">tenis más perros</span> directo a tu ciudad, porque sabemos que acá también hay <span style={{ color: '#E63946' }} className="font-bold">cultura urbana de la buena</span>.
              </p>
              <p className="leading-relaxed relative z-10" style={{ color: '#F8F9FA' }}>
                No somos revendedores cualquiera — somos <span style={{ color: '#E63946' }} className="font-bold">sneakerheads</span> como tú. Cada par está curado con pasión y verificado al 100%. <span style={{ color: '#E63946' }} className="font-bold">Sin pedos, sin broncas</span>.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 border backdrop-blur-sm relative group/card"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor: 'rgba(230, 57, 70, 0.3)',
                    clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)"
                  }}
                >
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, #E63946, transparent 70%)'
                    }}
                  />

                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="font-bold font-mono text-sm mb-1" style={{ color: '#E63946' }}>
                    {feature.title}
                  </h3>
                  <p className="text-xs" style={{ color: '#F8F9FA' }}>
                    {feature.desc}
                  </p>

                  {/* Corner decoration */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r opacity-50 group-hover/card:opacity-100 transition-opacity" style={{ borderColor: '#E63946' }}></div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 border-2 font-mono font-bold text-lg relative overflow-hidden group/btn"
              style={{
                backgroundColor: 'rgba(230, 57, 70, 0.1)',
                borderColor: '#E63946',
                color: '#E63946'
              }}
            >
              <span className="relative z-10">CONOCE MÁS DE NOSOTROS</span>
              {/* Scan line animation */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(230, 57, 70, 0.3), transparent)'
                }}
                animate={{ x: [-300, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-3px, 3px); }
          66% { transform: translate(3px, -3px); }
        }
      `}</style>
    </section>
  )
}