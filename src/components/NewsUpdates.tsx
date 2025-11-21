import { motion } from 'motion/react';
import { Newspaper, Calendar, Tag, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsUpdates() {
  const news = [
    {
      id: 1,
      type: 'New Chapter',
      title: 'The Convergence War - Chapter 30 Released!',
      date: 'November 18, 2025',
      image: 'https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjM2NTI1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'The epic finale approaches! Chapter 30 sees the convergence of all realities as ZOUL, Nythera, Voltrix, and Abyzor must unite against an enemy that threatens the very fabric of the multiverse.',
      tag: 'New Release',
      color: 'purple',
    },
    {
      id: 2,
      type: 'Lore Drop',
      title: 'The Ancient Ones: Pre-ZOUL Entities Revealed',
      date: 'November 15, 2025',
      image: 'https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'New lore reveals that ZOUL was not the first consciousness to exist. Discover the truth about the Ancient Ones—beings that existed before time itself and their connection to the Void.',
      tag: 'Lore',
      color: 'cyan',
    },
    {
      id: 3,
      type: 'Project Update',
      title: 'Zoulverse Animated Series in Development',
      date: 'November 10, 2025',
      image: 'https://images.unsplash.com/photo-1762765018958-61a707ed5b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhlcmVhbCUyMGZhbnRhc3klMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM2NjM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'Zoul Forge Studios is thrilled to announce that we\'re partnering with top animation studios to bring the Zoulverse to life! The first season will adapt "The Birth of ZOUL" with stunning cosmic animation.',
      tag: 'Anime',
      color: 'gold',
    },
    {
      id: 4,
      type: 'Teaser',
      title: 'New Character Teaser: The Chrono Weaver',
      date: 'November 5, 2025',
      image: 'https://images.unsplash.com/photo-1648461513585-96f109a020a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0aWNhbCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3NjM2NjM2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'A mysterious new character will debut in the next story arc. The Chrono Weaver manipulates time across dimensions—but are they friend or foe? Find out soon!',
      tag: 'Teaser',
      color: 'blue',
    },
    {
      id: 5,
      type: 'Community',
      title: 'Fan Art Showcase: Your Zoulverse Creations',
      date: 'November 1, 2025',
      image: 'https://images.unsplash.com/photo-1755456068400-fbcdce2f795a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBlbmVyZ3klMjB2b3J0ZXh8ZW58MXx8fHwxNzYzNjYzNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'Check out the incredible fan art from our amazing community! This month features stunning interpretations of Nythera, ZOUL, and the Shadow Covenant. Keep creating!',
      tag: 'Community',
      color: 'pink',
    },
    {
      id: 6,
      type: 'Announcement',
      title: 'Zoulverse Comic Series Coming 2026',
      date: 'October 28, 2025',
      image: 'https://images.unsplash.com/photo-1604305526688-935181d17565?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzdGFycyUyMHB1cnBsZXxlbnwxfHx8fDE3NjM2NjMyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      content: 'We\'re expanding the Zoulverse into comics! The first series will run parallel to our web stories, offering new perspectives and untold tales from across the multiverse.',
      tag: 'Comics',
      color: 'purple',
    },
  ];

  const getTagColor = (color: string) => {
    switch (color) {
      case 'purple': return 'bg-purple-500/20 border-purple-500/50 text-purple-400';
      case 'cyan': return 'bg-cyan-500/20 border-cyan-500/50 text-cyan-400';
      case 'gold': return 'bg-amber-500/20 border-amber-500/50 text-amber-400';
      case 'blue': return 'bg-blue-500/20 border-blue-500/50 text-blue-400';
      case 'pink': return 'bg-pink-500/20 border-pink-500/50 text-pink-400';
      default: return 'bg-purple-500/20 border-purple-500/50 text-purple-400';
    }
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 cosmic-gradient-text">News & Updates</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Stay up to date with the latest chapters, lore reveals, and announcements from the Zoulverse.
          </p>
        </motion.div>

        {/* Featured News */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative rounded-3xl overflow-hidden border border-purple-500/30 bg-slate-900/50 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-80">
              <ImageWithFallback
                src={news[0].image}
                alt={news[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full border text-xs ${getTagColor(news[0].color)}`}>
                  {news[0].tag}
                </span>
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{news[0].date}</span>
                </div>
              </div>
              <h3 className="mb-4 text-purple-300">{news[0].title}</h3>
              <p className="text-slate-400 leading-relaxed">{news[0].content}</p>
            </div>
          </div>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {news.slice(1).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${getTagColor(item.color)}`}>
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h4 className="mb-3 text-purple-300">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center p-12 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm"
        >
          <Newspaper className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="mb-4 cosmic-gradient-text">Never Miss an Update</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive lore drops, early chapter access, and behind-the-scenes content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-slate-300 placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl glow-purple hover:glow-cyan transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
