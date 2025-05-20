'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 relative inline-block mx-auto w-full">
          Contact <span className="text-orange-500 dark:text-orange-400">Me</span>
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear from you! Reach out to me, and let's turn your ideas into reality.
        </p>

        <div className="max-w-md mx-auto space-y-4">
          <a 
            href="https://x.com/arkan__khan_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="font-medium">Twitter</span>
            </Button>
          </a>
          
          <a 
            href="mailto:arkankhan051@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">Email Me</span>
            </Button>
          </a>
          
          <a 
            href="https://github.com/Arkan-Khan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="font-medium">GitHub</span>
            </Button>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/arkan-khan-4b97a32b9/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button 
              variant="outline" 
              className="w-full flex items-center gap-3 py-6 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="font-medium">LinkedIn</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}