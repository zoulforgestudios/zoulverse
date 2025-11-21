import { motion } from 'motion/react';
import { BookOpen, Clock, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Story {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  chapters: number;
  readTime: string;
  rating: number;
  status: 'ongoing' | 'completed';
}

interface StoryLibraryProps {
  onReadStory: (storyId: number) => void;
}

export function StoryLibrary({ onReadStory }: StoryLibraryProps) {
  const stories: Story[] = [
    {
      id: 1,
      title: 'The Birth of a Connection',
      description: 'Witness the origin of the First Soul as it emerges from the Void, bringing consciousness to an empty universe. The epic tale of creation, power, and the first cosmic decision that shaped all realities.',
      coverImage: 'https://images.unsplash.com/photo-1755456068400-fbcdce2f795a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBlbmVyZ3klMjB2b3J0ZXh8ZW58MXx8fHwxNzYzNjYzNjQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      chapters: 15,
      status: 'completed',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 cosmic-gradient-text">Story Library</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Immerse yourself in epic tales spanning across infinite realities. 
            Each story reveals another layer of the Zoulverse's infinite mysteries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-purple-500/20 overflow-hidden bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    story.status === 'ongoing' 
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/50'
                  }`}>
                    {story.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-purple-300">{story.title}</h3>
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {story.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-slate-500">
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs">{story.chapters} chapters</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{story.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs">{story.rating}</span>
                  </div>
                </div>

                {/* Read Button */}
                <button
                  onClick={() => onReadStory(story.id)}
                  className="w-full py-3 bg-gradient-to-r from-purple-600/80 to-blue-600/80 rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 group-hover:glow-purple"
                >
                  Read Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
