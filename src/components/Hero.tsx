import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  onStartReading: () => void;
  onLearnMore: () => void;
}

export function Hero({ onStartReading, onLearnMore }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cosmic background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-purple-950/30 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 inline-block">
            <Sparkles className="w-12 h-12 text-[#8A5DFF] mx-auto animate-pulse" />
          </div>

          <h1 className="mb-6 cosmic-gradient-text text-glow">
            Welcome to the Zoulverse
          </h1>

          <motion.div
            className="mb-12 space-y-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <p className="text-slate-300 leading-relaxed">
              — a boundless multiverse forged from the essence of the First Soul, ZOUL.
              Here, creation and destruction breathe as living forces, shaping infinite realities, 
              ancient realms, and celestial beings beyond imagination.
            </p>
            
            <p className="text-slate-400 italic">
              This is not just a story.<br />
              This is a universe of souls, a cosmic mythology unfolding piece by piece.
            </p>
            
            <div className="space-y-2 text-[#24C3FF]">
              <p>Begin your journey.</p>
              <p>Uncover the origins.</p>
              <p>Walk through light, shadow, and balance.</p>
            </div>
            
            <p className="text-[#FFD46A] text-glow">
              The Zoulverse awaits you.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <button
              onClick={onStartReading}
              className="px-12 py-4 bg-gradient-to-r from-[#8A5DFF] to-[#24C3FF] rounded-full glow-purple transition-all duration-300 hover:scale-105 hover:glow-cyan"
            >
              Start Reading
            </button>

            <button
              onClick={onLearnMore}
              className="px-12 py-4 border border-[#8A5DFF]/50 rounded-full backdrop-blur-sm hover:bg-[#8A5DFF]/10 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#24C3FF] rounded-full glow-cyan"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#8A5DFF] rounded-full glow-purple"
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#FFD46A] rounded-full glow-gold"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#8A5DFF]/50 rounded-full p-1">
          <div className="w-1 h-2 bg-[#8A5DFF] rounded-full mx-auto" />
        </div>
      </motion.div>
    </div>
  );
}