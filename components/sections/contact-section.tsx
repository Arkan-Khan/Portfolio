'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="contact" className="min-h-screen relative py-10 md:py-16 lg:py-20 flex items-center">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5 relative inline-block">
            Contact <span className="text-orange-500 dark:text-orange-400">Me</span>
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-500 dark:bg-orange-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center max-w-lg mx-auto">
            Have a project in mind? I'd love to hear from you! Reach out to me, and let's turn your ideas into reality.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-md mx-auto space-y-6 md:space-y-4 pt-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={item}>
            <a 
              href="https://x.com/arkan__khan_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-3 py-6 md:py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium text-sm md:text-base">Twitter</span>
              </Button>
            </a>
          </motion.div>
          
          <motion.div variants={item}>
            <a 
              href="mailto:arkankhan051@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-3 py-6 md:py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium text-sm md:text-base">Email Me</span>
              </Button>
            </a>
          </motion.div>
          
          <motion.div variants={item}>
            <a 
              href="https://github.com/Arkan-Khan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-3 py-6 md:py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium text-sm md:text-base">GitHub</span>
              </Button>
            </a>
          </motion.div>
          
          <motion.div variants={item}>
            <a 
              href="https://www.linkedin.com/in/arkan-khan-4b97a32b9/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button 
                variant="outline" 
                className="w-full flex items-center gap-3 py-6 md:py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium text-sm md:text-base">LinkedIn</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}