'use client';

import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-orange-500 dark:text-orange-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group relative bg-card rounded-lg overflow-hidden border transition-all hover:shadow-lg">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg"
                  alt={`Project ${project}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-muted-foreground mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}