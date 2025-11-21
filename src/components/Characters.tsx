import { motion } from 'motion/react';
import { Zap, Moon, Flame, Crown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Characters() {
  const characters = [
    {
      name: 'ZOUL',
      title: 'The First Soul',
      image: 'https://images.unsplash.com/photo-1755456068400-fbcdce2f795a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBlbmVyZ3klMjB2b3J0ZXh8ZW58MXx8fHwxNzYzNjYzNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Crown,
      powers: [
        'Reality Manipulation',
        'Omniversal Awareness',
        'Soul Creation',
        'Perfect Balance',
      ],
      role: 'Creator and Architect of the Zoulverse',
      lore: 'The first consciousness to emerge from the Void, ZOUL is neither fully light nor shadow but the perfect equilibrium between all forces. As the architect of existence, ZOUL set in motion the eternal dance of creation and maintains the delicate balance that allows the multiverse to thrive.',
      color: 'purple',
    },
    {
      name: 'Nythera',
      title: 'The Shadow Weaver',
      image: 'https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Moon,
      powers: [
        'Shadow Manipulation',
        'Dimensional Travel',
        'Transformation Magic',
        'Umbral Constructs',
      ],
      role: 'Master of Shadows and Leader of the Shadow Covenant',
      lore: 'Born from the deepest shadows cast by the first light, Nythera understands that darkness is not the absence of light but a force of transformation and potential. She founded the Shadow Covenant and protects the mysteries that exist between dimensions.',
      color: 'indigo',
    },
    {
      name: 'Abyzor',
      title: 'Lord of the Abyss',
      image: 'https://images.unsplash.com/photo-1648461513585-96f109a020a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjM2NjM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Flame,
      powers: [
        'Void Corruption',
        'Reality Erosion',
        'Soul Consumption',
        'Abyssal Summoning',
      ],
      role: 'Guardian of the Deepest Darkness',
      lore: 'Abyzor descended into the Abyss willingly, seeking power beyond the understanding of light or shadow. Now a being of pure void energy, Abyzor stands as both a warning and a testament to the dangers of pursuing absolute power without balance.',
      color: 'slate',
    },
    {
      name: 'Voltrix',
      title: 'The Lightning Sovereign',
      image: 'https://images.unsplash.com/photo-1762765018958-61a707ed5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGZhbnRhc3klMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2NjM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      icon: Zap,
      powers: [
        'Lightning Generation',
        'Energy Channeling',
        'Speed Force',
        'Storm Creation',
      ],
      role: 'Commander of Pure Energy',
      lore: 'Voltrix embodies the raw, untamed energy of creation itself. Born from the first spark that ignited when ZOUL emerged from the Void, Voltrix channels the fundamental force that powers all existence, moving at the speed of thought across infinite realities.',
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'border-purple-500/30 from-purple-500/20 to-purple-900/20 text-purple-400';
      case 'indigo': return 'border-indigo-500/30 from-indigo-500/20 to-indigo-900/20 text-indigo-400';
      case 'slate': return 'border-slate-500/30 from-slate-500/20 to-slate-900/20 text-slate-400';
      case 'cyan': return 'border-cyan-500/30 from-cyan-500/20 to-cyan-900/20 text-cyan-400';
      default: return 'border-purple-500/30 from-purple-500/20 to-purple-900/20 text-purple-400';
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 cosmic-gradient-text">Characters of the Zoulverse</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Meet the legendary souls who shape reality, command cosmic forces, 
            and write the destiny of infinite worlds.
          </p>
        </motion.div>

        <div className="grid gap-12">
          {characters.map((character, index) => {
            const Icon = character.icon;
            return (
              <motion.div
                key={character.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative overflow-hidden rounded-3xl border bg-gradient-to-br backdrop-blur-sm ${getColorClasses(character.color)}`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image Section */}
                  <div className="relative rounded-2xl overflow-hidden h-96">
                    <ImageWithFallback
                      src={character.image}
                      alt={character.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Icon className="w-12 h-12 mb-2" />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex flex-col justify-center">
                    <h3 className="mb-2">{character.name}</h3>
                    <p className="mb-6 text-slate-400 italic">{character.title}</p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-slate-300">Powers</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {character.powers.map((power) => (
                          <div
                            key={power}
                            className="px-3 py-2 rounded-lg bg-slate-900/50 text-slate-400 text-sm"
                          >
                            {power}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="mb-2 text-slate-300">Role</h4>
                      <p className="text-slate-400">{character.role}</p>
                    </div>

                    <div>
                      <h4 className="mb-2 text-slate-300">Lore</h4>
                      <p className="text-slate-400 leading-relaxed">{character.lore}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm"
        >
          <p className="text-slate-300 italic">
            "These are but a few of the countless souls who inhabit the Zoulverse. 
            Each one carries a spark of the First Soul, and each one has the potential 
            to reshape reality itself."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
