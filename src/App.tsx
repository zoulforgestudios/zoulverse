import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { StoryLibrary } from './components/StoryLibrary';
import { StoryReader } from './components/StoryReader';
import { Characters } from './components/Characters';
import { LoreArchive } from './components/LoreArchive';
import { NewsUpdates } from './components/NewsUpdates';
import { Contact } from './components/Contact';

type Page = 'home' | 'library' | 'characters' | 'lore' | 'news' | 'contact' | 'reader';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReadStory = (storyId: number) => {
    setSelectedStory(storyId);
    setCurrentPage('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToLibrary = () => {
    setSelectedStory(null);
    setCurrentPage('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartReading = () => {
    setCurrentPage('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const aboutSection = document.querySelector('#about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderPage = () => {
    if (currentPage === 'reader' && selectedStory !== null) {
      return <StoryReader storyId={selectedStory} onBack={handleBackToLibrary} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onStartReading={handleStartReading} onLearnMore={handleLearnMore} />
            <div id="about-section">
              <About />
            </div>
          </>
        );
      case 'library':
        return <StoryLibrary onReadStory={handleReadStory} />;
      case 'characters':
        return <Characters />;
      case 'lore':
        return <LoreArchive />;
      case 'news':
        return <NewsUpdates />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onStartReading={handleStartReading} onLearnMore={handleLearnMore} />
            <div id="about-section">
              <About />
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0E1120] text-slate-100">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page Content with Animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + (selectedStory || '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-purple-500/20 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="mb-4 cosmic-gradient-text">Zoulverse Chronicles</h3>
              <p className="text-slate-400">
                Where souls forge reality and infinite stories unfold across the multiverse.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-purple-300">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => handleNavigate('library')} className="block text-slate-400 hover:text-purple-400 transition-colors">
                  Story Library
                </button>
                <button onClick={() => handleNavigate('characters')} className="block text-slate-400 hover:text-purple-400 transition-colors">
                  Characters
                </button>
                <button onClick={() => handleNavigate('lore')} className="block text-slate-400 hover:text-purple-400 transition-colors">
                  Lore Archive
                </button>
                <button onClick={() => handleNavigate('news')} className="block text-slate-400 hover:text-purple-400 transition-colors">
                  News & Updates
                </button>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-purple-300">About</h4>
              <p className="text-slate-400 text-sm">
                Zoulverse Chronicles is an immersive storytelling experience created by Zoul Forge Studios. 
                Explore cosmic fantasy, multiverse adventures, and the eternal struggle between light and shadow.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-500/20 text-center text-slate-500">
            <p>&copy; 2025 Zoul Forge Studios. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Crafted with cosmic energy and infinite imagination ✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}