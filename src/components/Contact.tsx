import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Twitter, Instagram, Youtube, Facebook, Sparkles } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, label: 'Instagram', url: '#', color: 'hover:text-pink-400' },
    { icon: Youtube, label: 'YouTube', url: '#', color: 'hover:text-red-400' },
    { icon: Facebook, label: 'Facebook', url: '#', color: 'hover:text-blue-500' },
  ];

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 cosmic-gradient-text">Contact & Community</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">
            Join the Zoulverse community and connect with us. Share your thoughts, 
            ask questions, or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-6 h-6 text-purple-400" />
              <h3 className="text-purple-300">Send Us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-purple-500/30 text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-600 glow-green'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 glow-purple hover:glow-cyan'
                }`}
              >
                {submitted ? (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Community Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm">
              <h3 className="mb-6 text-cyan-300">Follow Zoul Forge Studios</h3>
              <p className="text-slate-400 mb-6">
                Connect with us on social media for daily updates, exclusive content, 
                and community discussions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 text-slate-400 ${social.color} transition-all duration-300 hover:border-slate-600`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Community CTA */}
            <div className="p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm">
              <h3 className="mb-4 cosmic-gradient-text">Join the Community</h3>
              <p className="text-slate-400 mb-6">
                Become part of the Zoulverse family! Share fan art, discuss theories, 
                participate in events, and help shape the future of the multiverse.
              </p>
              <ul className="space-y-3 mb-6 text-slate-400">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>Exclusive access to new chapters before public release</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>Behind-the-scenes content and lore deep dives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Community events and creative challenges</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl glow-purple hover:glow-cyan transition-all duration-300">
                Join the Zoulverse
              </button>
            </div>

            {/* Contact Info */}
            <div className="p-8 rounded-2xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
              <h4 className="mb-4 text-slate-300">Direct Contact</h4>
              <div className="space-y-3 text-slate-400">
                <p>
                  <span className="text-slate-500">Email:</span>{' '}
                  <a href="mailto:contact@zoulforge.com" className="text-purple-400 hover:text-purple-300">
                    contact@zoulforge.com
                  </a>
                </p>
                <p>
                  <span className="text-slate-500">Business Inquiries:</span>{' '}
                  <a href="mailto:business@zoulforge.com" className="text-purple-400 hover:text-purple-300">
                    business@zoulforge.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm"
        >
          <p className="text-slate-400 text-center">
            <strong className="text-amber-400">Note:</strong> This is a demonstration website. 
            All contact information and social links are placeholder examples. 
            Zoulverse Chronicles is a fictional universe created for storytelling purposes.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
