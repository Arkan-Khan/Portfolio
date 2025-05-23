'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectsSection() {
  // Animation variants for projects
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const projects = [
    {
      id: 1,
      title: "FindIT",
      description: "Lost & Found platform built with PERN, Prisma & Cloudinary for colleges, schools, offices, apartments, etc.",
      image: "https://res.cloudinary.com/dewfafrzp/image/upload/v1747808932/FindIT_eom150.png",
      live: "https://findit.zodx.tech/",
      github: "https://github.com/Arkan-Khan/FindIt"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "My Portfolio built with NextJS, Tailwind and UI libraries (Aceternity UI and ShadCN).",
      image: "https://res.cloudinary.com/dewfafrzp/image/upload/v1747808933/Portfolio_uz2dvf.png",
      live: "https://arkan.zodx.tech/",
      github: "https://github.com/Arkan-Khan/Portfolio"
    },
    {
      id: 3,
      title: "GradeWiz",
      description: "MS Teams–like platform built with MERN, Gemini AI & Tailwind — auto-generates, grades tests from PDFs, and gives feedback.",
      image: "https://res.cloudinary.com/dewfafrzp/image/upload/v1747808932/GradeWiz_exe5bg.png",
      github: "https://github.com/SAHILSHANGLOO35/GradeWiz",
      live: null
    }
  ];

  return (
    <section id="projects" className="min-h-screen relative py-10 md:py-16 lg:py-20 flex items-center">
      <div className="pt-16 md:pt-20" id="projects-anchor"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5 mt-14 md:mb-2 md:mt-6 lg:mt-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            My <span className="text-orange-500 dark:text-orange-400">Projects</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto">
            Here are some of my featured projects. Each one represents unique challenges and learning experiences.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={item}
              className="group flex flex-col bg-card rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-lg hover:border-orange-500 dark:hover:border-orange-500 h-full"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex gap-3 md:gap-4 mt-auto">
                  {project.live === null ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
                      >
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        <span className="text-xs md:text-sm">View on GitHub</span>
                      </Button>
                    </a>
                  ) : (
                    <>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                          <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                          <span className="text-xs md:text-sm">Live Demo</span>
                        </Button>
                      </a>
                      
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
                        >
                          <Github className="mr-1.5 h-3.5 w-3.5" />
                          <span className="text-xs md:text-sm">Source Code</span>
                        </Button>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-10 md:mt-5 flex justify-center pb-8 md:pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a 
            href="https://github.com/Arkan-Khan?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="px-6 py-2 border-gray-300 dark:border-gray-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              <span className="font-medium">View All Projects</span>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}