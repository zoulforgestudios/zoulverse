import { motion } from 'motion/react';
import { Atom, Lightbulb, Moon, Globe } from 'lucide-react';

export function About() {
  const sections = [
    {
      icon: Atom,
      title: 'Origin of the Soul',
      content: 'In the beginning, there was the Void—an infinite expanse of nothingness. From this emptiness emerged the first spark of consciousness, the primordial soul energy that would shape all existence. Souls are not merely inhabitants of reality; they are its architects, its essence, its eternal flame.',
      color: 'purple',
    },
    {
      icon: Lightbulb,
      title: 'Creation of ZOUL',
      content: 'ZOUL, the First Soul, emerged from the convergence of pure consciousness and cosmic energy. Neither fully light nor shadow, ZOUL represents the perfect balance—the bridge between creation and destruction, order and chaos. As the architect of the Zoulverse, ZOUL set in motion the eternal dance of existence.',
      color: 'cyan',
    },
    {
      icon: Moon,
      title: 'Light, Shadow, and Balance',
      content: 'The Zoulverse thrives on duality. Light brings creation, growth, and harmony. Shadow offers transformation, power, and depth. Neither can exist without the other. The eternal struggle between these forces maintains the cosmic balance, and those who master both become the most powerful entities in existence.',
      color: 'gold',
    },
    {
      icon: Globe,
      title: 'Multiverse Structure',
      content: 'The Zoulverse spans infinite realities, each with its own realms and dimensions. Realities are parallel universes with different rules. Realms are layers within each reality—physical, ethereal, shadow, and beyond. Dimensions are the threads connecting all existence, pathways only the most powerful souls can traverse.',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple': return 'border-[#8A5DFF]/30 bg-[#8A5DFF]/5 text-[#8A5DFF]';
      case 'cyan': return 'border-[#24C3FF]/30 bg-[#24C3FF]/5 text-[#24C3FF]';
      case 'gold': return 'border-[#FFD46A]/30 bg-[#FFD46A]/5 text-[#FFD46A]';
      case 'blue': return 'border-[#3F517E]/30 bg-[#3F517E]/5 text-[#3F517E]';
      default: return 'border-[#8A5DFF]/30 bg-[#8A5DFF]/5 text-[#8A5DFF]';
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 cosmic-gradient-text">About the Zoulverse</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            A cosmic multiverse where souls are the fabric of reality itself. Born from the Void, 
            shaped by consciousness, and bound by the eternal balance of light and shadow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border backdrop-blur-sm ${getColorClasses(section.color)}`}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12" />
                </div>
                <h3 className="mb-4">{section.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm">
            <h3 className="mb-4 cosmic-gradient-text">The Eternal Question</h3>
            <p className="text-slate-300 italic">
              "In a universe forged by souls, where light and shadow dance eternally, 
              what role will you play in the grand tapestry of existence?"
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}