'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '📜' },
  { name: 'TypeScript', icon: '💪' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Express', icon: '🚂' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📚' },
  { name: 'GitHub', icon: '🐱' },
  { name: 'Jenkins', icon: '🤖' },
  { name: 'Python', icon: '🐍' },
  { name: 'C', icon: '⚡' },
  { name: 'Prisma', icon: '💎' },
  { name: 'Postman', icon: '📬' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Tailwind', icon: '🎨' }
];

export function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen relative py-20">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-orange-500 dark:text-orange-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 text-center border transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}