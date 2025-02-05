"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Download, ExternalLink, Github, Linkedin, Mail, Terminal, Youtube } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

// Konami Code sequence
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);


  // ↑↑↓↓←→←→BA
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const newSequence = [...konamiSequence, event.key];
      if (newSequence.length > KONAMI_CODE.length) {
        newSequence.shift();
      }
      setKonamiSequence(newSequence);

      if (newSequence.join(',') === KONAMI_CODE.join(',')) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 6000);
        setKonamiSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-accent" ref={targetRef}>
      {showEasterEgg && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-black/90 z-50 font-mono"
        >
          <div className="text-green-400 text-lg space-y-2">
            <p className="typing-animation">$ whoami</p>
            <p className="typing-animation delay-1">mahdi_hazrati</p>
            <p className="typing-animation delay-2">$ sudo make_coffee ☕</p>
            <p className="typing-animation delay-3">Permission granted: Brewing perfect developer fuel... ⚡</p>
            <p className="typing-animation delay-4">$ echo "You found the secret! 🎉"</p>
          </div>
        </motion.div>
      )}

      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl font-semibold"
          >
            {"<MahdiHazrati />"}
          </motion.h2>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex gap-4"
          >
            <a href="#about" className="hover:text-primary transition-colors">👨‍💻 About</a>
            <a href="#skills" className="hover:text-primary transition-colors">🚀 Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">💡 Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">🤝 Connect</a>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-screen flex flex-col justify-center items-center text-center mb-16"
        >
          <div className="text-6xl mb-4">👋</div>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground mb-4">
            {"<Hello World />"}
          </h1>
          <h2 className="text-3xl font-semibold mb-2">I&apos;m Mahdi Hazrati</h2>
          <p className="text-xl text-muted-foreground mb-6">Frontend Developer & Code Artisan 🎨</p>
          <motion.a
            href="https://mahdihazrati.ir/assets/files/Mahdi%20Hazrati%20Portfolio%20-%20v3.0.3%20-%202024%2010%2024-encrypted.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div 
          id="about"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold mb-4">{"<AboutMe />"} 🧙‍♂️</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hey there! I&apos;m a 23-year-old code wizard 🪄 studying Computer Science and crafting
              awesome web experiences. With 3 years of battling bugs 🐛 and turning coffee ☕️ into code,
              I specialize in React and Next.js magic ✨. I love building things that make the web a
              better place, one component at a time! 
            </p>
          </div>
          <motion.div 
            id="skills"
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold mb-4">{"<Skills />"} 🎯</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card p-4 rounded-lg"
              >
                <Code2 className="w-8 h-8 mb-2 text-primary" aria-hidden="true" />
                <h4 className="font-semibold">Frontend Sorcery 🔮</h4>
                <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                className="bg-card p-4 rounded-lg"
              >
                <Terminal className="w-8 h-8 mb-2 text-primary" aria-hidden="true" />
                <h4 className="font-semibold">Clean Code Ninja 🥷</h4>
                <p className="text-sm text-muted-foreground">Performance, Best Practices</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          id="projects"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h3 className="text-3xl font-semibold mb-8">{"<Projects />"} 🛠️</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((project, index) => (
              <motion.div
                key={project}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card p-6 rounded-lg"
              >
                <h4 className="text-xl font-semibold mb-2">Project {project} 🚀</h4>
                <p className="text-muted-foreground mb-4">
                  A dynamic web application built with React and Next.js, featuring responsive design
                  and optimal performance.
                </p>
                <Link
                  href="#"
                  className="text-primary hover:text-primary-foreground transition-colors"
                >
                  View Project →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          id="contact"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-semibold mb-8">{"<Connect />"} 🌐</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <motion.a
              href="https://github.com/Mahdi-Hazrati"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-card p-4 rounded-lg flex items-center gap-2"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span>Github</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mahdihazratidev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-card p-4 rounded-lg flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://youtube.com/@MahdiCodingJourney"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-card p-4 rounded-lg flex items-center gap-2"
            >
              <Youtube className="w-5 h-5" aria-hidden="true" />
              <span>YouTube</span>
            </motion.a>
            <motion.a
              href="https://mahdihazrati.ir"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="bg-card p-4 rounded-lg flex items-center gap-2"
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              <span>Website</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}