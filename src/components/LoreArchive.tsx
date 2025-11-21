import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Globe, Sparkles, Zap, Users, Flame } from 'lucide-react';

export function LoreArchive() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const timeline = [
    {
      id: 1,
      era: 'The Void Era',
      title: 'Birth of Consciousness',
      year: 'Beginning of Time',
      icon: Sparkles,
      description: 'The Void existed as absolute nothingness until the first spark of consciousness emerged, creating ZOUL—the First Soul.',
      significance: 'This moment marks the birth of existence itself, when nothingness gave way to infinite potential.',
      color: 'purple',
    },
    {
      id: 2,
      era: 'The Creation',
      title: 'Light and Shadow Divide',
      year: 'The First Moment',
      icon: Globe,
      description: 'ZOUL\'s first thought shattered the Void, creating the fundamental duality of Light and Shadow that would define all existence.',
      significance: 'The establishment of cosmic balance and the foundation upon which all realities would be built.',
      color: 'blue',
    },
    {
      id: 3,
      era: 'Age of Division',
      title: 'Birth of the First Children',
      year: 'Era 1',
      icon: Users,
      description: 'ZOUL fragmented consciousness, creating the first souls: Nythera, Voltrix, Abyzor, and countless others.',
      significance: 'The multiverse transitioned from singular to plural consciousness, enabling free will and individual destiny.',
      color: 'cyan',
    },
    {
      id: 4,
      era: 'The Shadow Epoch',
      title: 'Formation of Shadow Covenant',
      year: 'Era 47',
      icon: Flame,
      description: 'Nythera and six other shadow masters formed the Shadow Covenant, establishing the City of Umbral Spires.',
      significance: 'The first organized civilization in the Zoulverse and the beginning of philosophical divisions.',
      color: 'indigo',
    },
    {
      id: 5,
      era: 'The Lightning Age',
      title: 'Rise of Voltrix',
      year: 'Era 89',
      icon: Zap,
      description: 'Voltrix ascended to command pure energy, becoming the Lightning Sovereign and establishing the Storm Realm.',
      significance: 'Demonstrated that souls could transcend their original nature through will and understanding.',
      color: 'yellow',
    },
    {
      id: 6,
      era: 'The Descent',
      title: 'Abyzor Enters the Abyss',
      year: 'Era 153',
      icon: Flame,
      description: 'Abyzor willingly descended into the deepest darkness, seeking power beyond light and shadow.',
      significance: 'The discovery of the Abyss and the danger of pursuing power without balance.',
      color: 'slate',
    },
  ];

  const realms = [
    {
      name: 'The Ethereal Plane',
      type: 'Primary Realm',
      description: 'The first realm created by ZOUL, where soul energy flows freely and consciousness manifests in pure form.',
    },
    {
      name: 'City of Umbral Spires',
      type: 'Shadow Realm',
      description: 'Built between dimensions by the Shadow Covenant, accessible only through shadow pathways.',
    },
    {
      name: 'The Storm Realm',
      type: 'Energy Dimension',
      description: 'Voltrix\'s domain, where lightning and raw creation energy form the fabric of reality.',
    },
    {
      name: 'The Abyss',
      type: 'Void Space',
      description: 'The deepest darkness, where reality breaks down and only the strongest souls can survive.',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'border-purple-500/50 bg-purple-500/10 text-purple-400';
      case 'blue': return 'border-blue-500/50 bg-blue-500/10 text-blue-400';
      case 'cyan': return 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400';
      case 'indigo': return 'border-indigo-500/50 bg-indigo-500/10 text-indigo-400';
      case 'yellow': return 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400';
      case 'slate': return 'border-slate-500/50 bg-slate-500/10 text-slate-400';
      default: return 'border-purple-500/50 bg-purple-500/10 text-purple-400';
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
          <h2 className="mb-6 cosmic-gradient-text">Lore Archive</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Journey through the timeline of existence and explore the realms that make up the Zoulverse.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-purple-400" />
            <h3 className="text-purple-300">Timeline of the Zoulverse</h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-slate-500" />

            {/* Timeline Events */}
            <div className="space-y-8">
              {timeline.map((event, index) => {
                const Icon = event.icon;
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Icon */}
                    <div className={`absolute left-0 w-16 h-16 rounded-full border-4 border-slate-950 flex items-center justify-center ${getColorClasses(event.color)}`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Content */}
                    <button
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      className="w-full text-left p-6 rounded-2xl border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm text-slate-500 mb-1">{event.era}</p>
                          <h4 className="text-purple-300">{event.title}</h4>
                        </div>
                        <span className="text-sm text-slate-400">{event.year}</span>
                      </div>
                      <p className="text-slate-400">{event.description}</p>

                      <AnimatePresence>
                        {selectedEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-purple-500/20"
                          >
                            <p className="text-sm text-slate-500 mb-1">Significance:</p>
                            <p className="text-slate-300">{event.significance}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Realms Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-cyan-400" />
            <h3 className="text-cyan-300">Known Realms</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {realms.map((realm, index) => (
              <motion.div
                key={realm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-cyan-300">{realm.name}</h4>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-400">
                    {realm.type}
                  </span>
                </div>
                <p className="text-slate-400">{realm.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Lore Tree Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center p-12 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
        >
          <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4 animate-pulse" />
          <h3 className="mb-4 cosmic-gradient-text">The Archive Expands</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            New lore, realms, and historical events are constantly being discovered and documented. 
            The Zoulverse is infinite, and its stories are endless.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
