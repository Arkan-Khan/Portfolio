'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-0">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center justify-items-center">
          <div className="flex items-center justify-center order-1 lg:order-2 w-full">
            <motion.div
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60"
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-amber-300"></div>

              <div className="absolute inset-0 w-full h-full">
                <motion.div
                  className="absolute w-full h-full rounded-full"
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
                <motion.div
                  className="absolute w-full h-full rounded-full"
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

                <div className="absolute inset-1 rounded-full bg-background" />
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src="https://res.cloudinary.com/dewfafrzp/image/upload/v1746698330/userprofile/xxbxeshr2btlfwxynm6f.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left order-2 lg:order-1 lg:pl-8 xl:pl-12">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-orange-500 dark:text-orange-400">Arkan</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold"
              >
                I'm a <span className="text-orange-500 dark:text-orange-400">Full Stack Web Developer</span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="text-orange-500 dark:text-orange-400 ml-1"
                >
                  |
                </motion.span>
              </motion.p>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2 max-w-xl text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300"
            >
              I'm a 20-year-old IT student and aspiring Full Stack Web Developer passionate about creating efficient and innovative web applications.
              I'm Skilled in MERN and PERN stacks and am currently focused on sharpening my development skills while exploring new technologies.
            </motion.p>

            <div className="mt-4 sm:mt-6 flex gap-3">
              <a 
                href="/Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white transition-colors duration-200 transform active:scale-95 text-xs sm:text-sm md:text-base"
                >
                  View Resume
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white transition-colors duration-200 transform active:scale-95 text-xs sm:text-sm md:text-base"
                >
                  Hire Me
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}