import { Book, Users, Scroll, Newspaper, Mail, Home } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'library', label: 'Stories', icon: Book },
    { id: 'characters', label: 'Characters', icon: Users },
    { id: 'lore', label: 'Lore', icon: Scroll },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F29]/90 backdrop-blur-md border-b border-[#8A5DFF]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="cosmic-gradient-text tracking-wider logo-font"
          >
            ZOULVERSE CHRONICLES
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 transition-all duration-300 section-label ${
                    currentPage === item.id
                      ? 'text-[#8A5DFF] text-glow'
                      : 'text-slate-300 hover:text-[#8A5DFF]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="md:hidden flex gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2 transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-[#8A5DFF]'
                      : 'text-slate-300'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}