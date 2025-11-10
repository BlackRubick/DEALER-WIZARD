import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

export default function Hero({ productModel = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouse = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 30,
        y: (e.clientY - window.innerHeight / 2) / 30
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-[#E63946] rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x: cursorXSpring, y: cursorYSpring, left: 0, top: 0 }}
      />

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-[#E63946] to-transparent"
            style={{
              top: `${i * 5}%`,
              left: '-100%',
              width: '200%',
            }}
            animate={{
              x: ['0%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Hexagonal Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#E63946" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Glowing Orbs with Blur */}
      <motion.div 
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #E63946 0%, transparent 70%)',
          filter: 'blur(80px)',
          x: mousePosition.x * 3,
          y: mousePosition.y * 3
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, #C1121F 0%, transparent 70%)',
          filter: 'blur(100px)',
          x: mousePosition.x * -2,
          y: mousePosition.y * -2
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#E63946] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div 
        style={{ opacity, scale, y: y2 }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        {/* Glitch Text Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="relative mb-8"
        >
          <motion.h1 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none"
            style={{
              x: mousePosition.x * 2,
              y: mousePosition.y * 2
            }}
          >
            <span className="relative inline-block group">
              <span className="relative z-10 text-[#E63946] drop-shadow-[0_0_30px_rgba(230,57,70,0.8)]">
                DEALER
              </span>
              {/* Glitch layers */}
              <span className="absolute top-0 left-0 text-[#E63946] opacity-70 animate-glitch-1">
                DEALER
              </span>
              <span className="absolute top-0 left-0 text-[#C1121F] opacity-70 animate-glitch-2">
                DEALER
              </span>
            </span>
            <br />
            <span className="relative inline-block">
              <span className="text-[#FFFFFF] drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                WIZARD
              </span>
            </span>
          </motion.h1>
        </motion.div>

        {/* Cyber Line Decoration */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div 
            className="h-px w-24 bg-gradient-to-r from-transparent to-[#E63946]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 bg-[#E63946] rotate-45"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [45, 90, 45]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.span className="text-[#E63946] font-mono text-sm tracking-[0.3em] font-bold">
            PREMIUM SNEAKERS
          </motion.span>
          <motion.div
            className="w-2 h-2 bg-[#E63946] rotate-45"
            animate={{ 
              scale: [1, 1.5, 1],
              rotate: [45, 90, 45]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="h-px w-24 bg-gradient-to-l from-transparent to-[#E63946]"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Tagline with Holographic Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <motion.p 
            className="text-3xl md:text-5xl font-bold mb-2"
            style={{
              background: 'linear-gradient(90deg, #E63946, #FFFFFF, #E63946)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
            animate={{
              backgroundPosition: ['0% center', '200% center']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            LOS MEJORES SNEAKERS DE MÉXICO
          </motion.p>
        </motion.div>

        {/* Futuristic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-3 gap-6 md:gap-12 mb-12 max-w-4xl mx-auto"
        >
          {[
            { value: '500+', label: 'MODELOS', delay: 0 },
            { value: '100%', label: 'AUTÉNTICOS', delay: 0.1 },
            { value: '24/7', label: 'ONLINE', delay: 0.2 }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + stat.delay }}
            >
              <div className="relative border border-[#E63946]/30 bg-[#E63946]/5 backdrop-blur-sm p-6 clip-corner hover:border-[#E63946] transition-all duration-300">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#E63946]/0 to-[#E63946]/20 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl md:text-5xl font-black text-[#E63946] mb-2"
                    animate={{ 
                      textShadow: [
                        '0 0 20px rgba(230,57,70,0.5)',
                        '0 0 40px rgba(230,57,70,0.8)',
                        '0 0 20px rgba(230,57,70,0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-xs font-mono tracking-wider text-[#F8F9FA]/70">{stat.label}</div>
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E63946]" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E63946]" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons Futuristic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a 
            href="#catalog"
            className="group relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E63946] to-[#C1121F] blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-[#E63946] text-[#000000] font-bold px-10 py-5 clip-corner-btn border-2 border-[#E63946] hover:border-[#FFFFFF] transition-all">
              <span className="relative z-10 font-mono tracking-wider flex items-center gap-3">
                EXPLORAR CATÁLOGO
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFFFFF]/30 to-transparent h-full"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.a>

          <motion.a
            href="#contact"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              // Previene navegación por href y abre WhatsApp en nueva pestaña
              e.preventDefault()
              const phone = '529612138636'
              const baseMessage = 'Hola! Quiero consultar stock del modelo '
              const msg = baseMessage + (productModel ? productModel : '')
              const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
              window.open(url, '_blank')
            }}
          >
            <div className="relative bg-transparent text-[#E63946] font-bold px-10 py-5 clip-corner-btn border-2 border-[#E63946] hover:bg-[#E63946] hover:text-[#000000] transition-all">
              <span className="relative z-10 font-mono tracking-wider">CONTACTAR</span>
              <motion.div
                className="absolute inset-0 bg-[#E63946]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scan Lines Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(230,57,70,0.03) 2px, rgba(230,57,70,0.03) 4px)',
        }}
      />

      {/* Bottom Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#E63946] to-transparent" />
          <motion.div
            className="w-6 h-6 border-2 border-[#E63946] rotate-45"
            animate={{ 
              borderColor: ['#E63946', '#C1121F', '#E63946'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(2px, -2px); }
          66% { transform: translate(-2px, 2px); }
        }
        .animate-glitch-1 { animation: glitch-1 0.3s infinite; }
        .animate-glitch-2 { animation: glitch-2 0.3s infinite 0.15s; }
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
        }
        .clip-corner-btn {
          clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        }
      `}</style>
    </section>
  )
}