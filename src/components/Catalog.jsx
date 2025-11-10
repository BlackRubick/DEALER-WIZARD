import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const products = [
  {id:1, model:'AIR MAX 90', price:'$2,499', img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600'},
  {id:2, model:'FORCE LX', price:'$2,199', img:'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600'},
  {id:3, model:'RUNNER PRO', price:'$1,899', img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600'},
  {id:4, model:'HIGH TOP X', price:'$2,799', img:'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=600'},
  {id:5, model:'SKYLINE', price:'$2,299', img:'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600'},
  {id:6, model:'STREET ELITE', price:'$1,999', img:'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600'},
  {id:7, model:'MIDNIGHT RED', price:'$2,599', img:'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600'},
  {id:8, model:'LIMITED Z', price:'$3,199', img:'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600'}
]

// Componente de card cyberpunk
function CyberCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotY = (e.clientX - centerX) / 10
    const rotX = (centerY - e.clientY) / 10
    rotateX.set(rotX)
    rotateY.set(rotY)
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="group relative"
    >
      {/* Card con esquinas cortadas */}
      <div 
        className="relative overflow-hidden backdrop-blur-sm border transition-all duration-500"
        style={{
          background: '#1A1A1A',
          borderColor: isHovered ? '#E63946' : 'rgba(230, 57, 70, 0.3)',
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))"
        }}
      >
        {/* Scan lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #E63946 2px, #E63946 4px)"
          }}></div>
        </div>

        {/* Glow effect al hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(230, 57, 70, 0.4), transparent 40%)`
            }}
          />
        )}

        {/* Corner decorations */}
        <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2" style={{ borderColor: '#E63946' }}></div>
        <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2" style={{ borderColor: '#E63946' }}></div>

        {/* Imagen */}
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            src={product.img}
            alt={product.model}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Glitch bars on hover */}
          {isHovered && (
            <>
              <motion.div
                className="absolute left-0 right-0 h-0.5"
                style={{ top: "30%", backgroundColor: '#E63946' }}
                animate={{ x: [-100, 100] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div
                className="absolute left-0 right-0 h-0.5"
                style={{ top: "70%", backgroundColor: '#C1121F' }}
                animate={{ x: [100, -100] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              />
            </>
          )}
        </div>

        {/* Info */}
        <div className="p-4 relative">
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-4 right-4 h-px" style={{
            background: 'linear-gradient(to right, transparent, #E63946, transparent)'
          }}></div>
          
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="text-xs font-mono mb-1" style={{ color: '#E63946' }}>MODELO</div>
              <h3 className="text-lg font-bold group-hover:text-white transition-colors" style={{ color: '#F8F9FA' }}>
                {product.model}
              </h3>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono mb-1" style={{ color: '#E63946' }}>PRECIO</div>
              <div className="text-xl font-bold" style={{
                color: '#E63946',
                textShadow: "0 0 10px rgba(230, 57, 70, 0.5)"
              }}>
                {product.price}
              </div>
            </div>
          </div>

          {/* Botón WhatsApp cyberpunk */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://wa.me/529612138636?text=Hola!%20Quiero%20consultar%20stock%20del%20modelo%20' + product.model, '_blank')}
            className="w-full mt-3 py-2 border font-mono text-sm transition-all relative overflow-hidden group/btn flex items-center justify-center gap-2"
            style={{
              backgroundColor: 'rgba(37, 211, 102, 0.2)',
              borderColor: '#25D366',
              color: '#25D366'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(37, 211, 102, 0.2)'}
          >
            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span className="relative z-10">CONSULTAR STOCK</span>
            {/* Scan line animation en botón */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(37, 211, 102, 0.2), transparent)'
              }}
              animate={{ x: [-200, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Catalog(){
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section id="catalog" className="relative mx-auto px-4 py-20 overflow-hidden" style={{ 
      maxWidth: '1280px',
      backgroundColor: '#000000'
    }}>
      {/* Partículas flotantes de fondo */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="hidden sm:block absolute w-1 h-1 rounded-full"
          style={{ 
            left: `${p.x}%`, 
            bottom: -10,
            backgroundColor: '#E63946'
          }}
          animate={{ 
            y: [-10, -800],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Header con glitch */}
      <div className="mb-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative inline-block"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 relative">
            <span className="relative inline-block">
              <span style={{ color: '#FFFFFF' }}>CATÁLOGO</span>
              {/* Glitch effect */}
              <span 
                className="absolute top-0 left-0 animate-pulse"
                style={{ 
                  color: '#E63946',
                  clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                  animation: "glitch 3s infinite"
                }}
              >
                CATÁLOGO
              </span>
              <span 
                className="absolute top-0 left-0 animate-pulse"
                style={{ 
                  color: '#C1121F',
                  clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
                  animation: "glitch 2s infinite reverse"
                }}
              >
                CATÁLOGO
              </span>
            </span>
          </h2>
          {/* Línea decorativa */}
          <motion.div 
            className="h-1"
            style={{
              background: 'linear-gradient(to right, #E63946, #C1121F, transparent)'
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          ></motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-mono mt-4"
          style={{ color: '#E63946' }}
        >
          {'>'} EXPLORA NUESTRA COLECCIÓN EXCLUSIVA
        </motion.p>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((p, idx) => (
          <CyberCard key={p.id} product={p} index={idx} />
        ))}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          33% { transform: translate(-2px, 2px); }
          66% { transform: translate(2px, -2px); }
        }
      `}</style>
    </section>
  )
}