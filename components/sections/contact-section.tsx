'use client';

import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Get in <span className="text-orange-500 dark:text-orange-400">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-card border"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-card border"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full p-3 rounded-lg bg-card border"
            />
            <Button
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            >
              Send Message
            </Button>
          </form>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Twitter className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}