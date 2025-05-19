'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const words = "I'm a Full Stack Web Developer".split(" ");
  
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-orange-500 dark:text-orange-400">Arkan</span>
            </h1>
            <div className="mt-4 flex min-h-[60px] flex-wrap items-center justify-center gap-2 lg:justify-start">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  className="text-2xl font-semibold sm:text-3xl md:text-4xl"
                >
                  {word === "Web" || word === "Developer" ? (
                    <span className="text-orange-500 dark:text-orange-400">{word}</span>
                  ) : (
                    word
                  )}{" "}
                </motion.span>
              ))}
              {/* Animated Cursor */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: words.length * 0.1 + 0.5
                }}
                className="text-2xl font-semibold sm:text-3xl md:text-4xl text-orange-500 dark:text-orange-400"
              >
                |
              </motion.span>
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Animated Image with Floating and Dual Border Animation */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <motion.div
              className="relative"
              animate={{ y: [-20, 20, -20] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ marginTop: '-40px' }}
            >
              {/* Base Image Container */}
              <div className="relative w-60 h-60 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"></div>

              {/* Dual Animated Borders */}
              <div className="absolute inset-0 w-60 h-60">
                {/* First point - starting at 0deg */}
                <motion.div
                  className="absolute w-60 h-60 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background:
                      'conic-gradient(from 0deg, transparent 0deg, transparent 170deg, #f97316 180deg, #ea580c 190deg, transparent 200deg, transparent 360deg)'
                  }}
                />
                {/* Second point - starting at 180deg, moving in same direction */}
                <motion.div
                  className="absolute w-60 h-60 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background:
                      'conic-gradient(from 180deg, transparent 0deg, transparent 170deg, #fb923c 180deg, #f97316 190deg, transparent 200deg, transparent 360deg)'
                  }}
                />

                {/* Inner mask layers */}
                <div className="absolute inset-1 w-58 h-58 rounded-full bg-background" />
                <div className="absolute inset-2 w-56 h-56 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src="https://res.cloudinary.com/dewfafrzp/image/upload/v1746698330/userprofile/xxbxeshr2btlfwxynm6f.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .w-59 { width: 14.75rem; }
        .h-59 { height: 14.75rem; }
        .w-58 { width: 14.5rem; }
        .h-58 { height: 14.5rem; }
        .w-57 { width: 14.25rem; }
        .h-57 { height: 14.25rem; }
        .w-56 { width: 14rem; }
        .h-56 { height: 14rem; }
        .inset-0.5 { top: 0.125rem; right: 0.125rem; bottom: 0.125rem; left: 0.125rem; }
        .inset-1.5 { top: 0.375rem; right: 0.375rem; bottom: 0.375rem; left: 0.375rem; }
      `}</style>
    </section>
  );
}