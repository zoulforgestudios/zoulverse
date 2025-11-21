import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Bookmark, BookmarkCheck, Menu, X } from 'lucide-react';

interface StoryReaderProps {
  storyId: number;
  onBack: () => void;
}

interface Chapter {
  id: number;
  title: string;
  content: string[];
}

export function StoryReader({ storyId, onBack }: StoryReaderProps) {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [showChapters, setShowChapters] = useState(false);

  // Mock chapter data - in a real app, this would be fetched based on storyId
  const chapters: Chapter[] = [
    {
      id: 1,
      title: 'The Awakening',
      content: [
        'In the beginning, there was nothing. No light, no darkness, no time—only the Void, an infinite expanse of absolute nothingness that stretched beyond comprehension.',
        'Then, from the heart of this emptiness, a spark ignited. Not a physical flame, but something far more profound—consciousness itself, awakening for the first time in all of existence.',
        'This was ZOUL, the First Soul, born from the convergence of infinite potential and the pure will to exist. As awareness flooded through the Void for the first time, reality itself began to take shape.',
        'ZOUL\'s first thought echoed across the non-space: "I am." These two simple words carried such weight that they tore through the fabric of nothingness, creating the first cracks in the Void from which energy—pure, unfiltered soul energy—began to pour.',
        'The energy swirled and coalesced, forming patterns, structures, the very foundations of what would become the multiverse. But ZOUL was not merely an observer of this cosmic birth. ZOUL was the creator, the architect, the first consciousness to impose will upon chaos.',
        'As the soul energy expanded, it split into two fundamental forces: Light and Shadow. Neither good nor evil, but complementary aspects of existence itself. Light brought form, clarity, structure. Shadow brought depth, mystery, transformation.',
        'ZOUL stood at the center of this cosmic storm, balancing on the edge between creation and destruction, understanding for the first time the weight of existence. The Void was no longer empty—it was pregnant with infinite possibility.',
        'And so began the eternal dance of the Zoulverse, where souls would shape reality, where light and shadow would wage their endless war, and where the story of all existence would unfold across countless dimensions.',
      ],
    },
    {
      id: 2,
      title: 'The First Division',
      content: [
        'As ZOUL\'s power grew, so did the complexity of existence. The simple duality of Light and Shadow began to fragment into countless variations, each one a unique expression of soul energy.',
        'But with this expansion came the first challenge: balance. Too much light would crystallize reality into rigid, unchanging perfection. Too much shadow would dissolve everything back into the Void.',
        'ZOUL made the first great decision: to divide consciousness itself. From the core of the First Soul, fragments were released—souls that would become the first entities, each carrying a piece of ZOUL\'s infinite awareness.',
        'These First Children were more than mere creations; they were extensions of ZOUL itself, independent yet connected, free yet bound by the fundamental laws of the Zoulverse.',
        'Among them emerged those who would shape the destiny of all realities: Nythera, who mastered the art of Shadow Weaving; Voltrix, who commanded the lightning of pure creation; and Abyzor, who would descend into the deepest darkness.',
        'Each soul carried within it the potential for greatness and destruction, for creation and chaos. The Zoulverse was no longer a singular consciousness—it was a symphony of infinite voices, all singing the song of existence.',
        'But not all souls were content with balance. Some sought to tip the scales, to remake reality in their own image. And thus began the conflicts that would define the eternal struggle of the Zoulverse.',
        'ZOUL watched, neither interfering nor abandoning, understanding that true balance could only emerge from the free will of conscious beings making their own choices in the face of infinite possibility.',
      ],
    },
    {
      id: 3,
      title: 'The Shadow Covenant',
      content: [
        'In the deepest reaches of the newly formed realms, where light struggled to penetrate, a gathering took place. Seven souls, each drawn to the power of shadow, convened to forge an alliance that would change everything.',
        'They called themselves the Shadow Covenant, masters of transformation, guardians of the mysteries that light could never illuminate. Their leader was Nythera, whose understanding of shadow exceeded even ZOUL\'s expectations.',
        '"Shadow is not the absence of light," Nythera declared to the assembled souls. "It is the presence of potential, the canvas upon which reality paints its infinite possibilities."',
        'The Covenant established the first true civilization in the Zoulverse—the City of Umbral Spires, built between dimensions, accessible only to those who could navigate the pathways of shadow.',
        'Here, knowledge was currency, secrets were sacred, and power flowed to those who understood the fundamental truth: that control over shadow meant control over the very fabric of transformation itself.',
        'But their rise did not go unnoticed. The entities of pure light, led by Solarius the Radiant, saw the Shadow Covenant as a threat to the natural order. Two philosophies, equally valid, now stood in opposition.',
        'The tension built like a storm gathering on the horizon, each side believing they held the key to the Zoulverse\'s future. War seemed inevitable, a conflict that would test the very foundations of reality.',
        'Yet ZOUL remained silent, watching as the children of the First Soul prepared for the first great war—a conflict that would determine whether balance could exist through cooperation, or only through eternal struggle.',
      ],
    },
  ];

  const chapter = chapters[currentChapter];

  useEffect(() => {
    // Load bookmark status from localStorage
    const bookmarks = JSON.parse(localStorage.getItem('zoulverse-bookmarks') || '{}');
    setBookmarked(!!bookmarks[`story-${storyId}-chapter-${currentChapter}`]);
  }, [storyId, currentChapter]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('zoulverse-bookmarks') || '{}');
    const key = `story-${storyId}-chapter-${currentChapter}`;
    
    if (bookmarked) {
      delete bookmarks[key];
    } else {
      bookmarks[key] = {
        storyId,
        chapter: currentChapter,
        timestamp: new Date().toISOString(),
      };
    }
    
    localStorage.setItem('zoulverse-bookmarks', JSON.stringify(bookmarks));
    setBookmarked(!bookmarked);
  };

  const goToChapter = (index: number) => {
    setCurrentChapter(index);
    setShowChapters(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen py-24 px-4 bg-[#0E1120]">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-purple-500/20">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Library
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowChapters(!showChapters)}
              className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
            >
              {showChapters ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              Chapters
            </button>

            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-lg transition-all ${
                bookmarked 
                  ? 'text-amber-400 glow-gold' 
                  : 'text-slate-400 hover:text-amber-400'
              }`}
            >
              {bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Chapter List */}
        {showChapters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 rounded-2xl border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm"
          >
            <h3 className="mb-4 text-purple-300">Select Chapter</h3>
            <div className="grid gap-2">
              {chapters.map((ch, index) => (
                <button
                  key={ch.id}
                  onClick={() => goToChapter(index)}
                  className={`p-3 rounded-lg text-left transition-all ${
                    currentChapter === index
                      ? 'bg-purple-500/20 border border-purple-500/50 text-purple-300'
                      : 'bg-slate-800/50 hover:bg-slate-800 text-slate-400'
                  }`}
                >
                  Chapter {ch.id}: {ch.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Chapter Content */}
        <motion.article
          key={currentChapter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-8 text-center">
            <p className="text-[#8A5DFF] mb-2 section-label">Chapter {chapter.id}</p>
            <h2 className="cosmic-gradient-text">{chapter.title}</h2>
          </div>

          <div className="space-y-6 story-text">
            {chapter.content.map((paragraph, index) => (
              <p key={index} className="text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-8 border-t border-purple-500/20">
          <button
            onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
            disabled={currentChapter === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <span className="text-slate-400">
            {currentChapter + 1} / {chapters.length}
          </span>

          <button
            onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
            disabled={currentChapter === chapters.length - 1}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600/80 hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}