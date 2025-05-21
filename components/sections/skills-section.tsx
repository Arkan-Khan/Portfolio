'use client';

import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, 
  SiPostgresql, SiDocker, SiAmazon, SiGit, 
  SiGithub, SiJenkins, SiPython, SiC, 
  SiPrisma, SiPostman, SiSupabase, SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: 'HTML', icon: SiHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: SiCss3, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  { name: 'AWS', icon: SiAmazon, color: 'text-yellow-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600' },
  { name: 'GitHub', icon: SiGithub, color: 'text-gray-100' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-red-500' },
  { name: 'Python', icon: SiPython, color: 'text-blue-500' },
  { name: 'C', icon: SiC, color: 'text-blue-400' },
  { name: 'Prisma', icon: SiPrisma, color: 'text-cyan-500' },
  { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-green-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' }
];

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const mobileRows = [
    skills.slice(0, 4),
    skills.slice(4, 8),
    skills.slice(8, 12),
    skills.slice(12, 16),
    skills.slice(16, 20)  
  ];

  const firstRow = skills.slice(0, 8);
  const secondRow = skills.slice(8, 16);
  const thirdRow = skills.slice(16, 20);

  return (
    <section id="skills" className="min-h-screen relative py-10 md:py-16 lg:py-20 flex items-center">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-6 md:mb-8 lg:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 relative inline-block">
            My <span className="text-orange-500 dark:text-orange-400">Skills</span>
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-orange-500 dark:bg-orange-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build modern web applications
          </p>
        </motion.div>
        
        <div className="space-y-3 md:hidden">
          {mobileRows.map((row, rowIndex) => (
            <motion.div 
              key={`mobile-row-${rowIndex}`}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-4 gap-2 mx-auto"
            >
              {row.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md group h-20"
                >
                  <div className={`text-xl mb-1 ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                    <skill.icon />
                  </div>
                  <h3 className="font-medium text-xs text-center line-clamp-1">{skill.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        
        <div className="hidden md:block space-y-4">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-8 gap-4"
          >
            {firstRow.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg group h-24"
              >
                <div className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon />
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-8 gap-4"
          >
            {secondRow.map((skill) => (
              <motion.div
                key={skill.name}
                variants={item}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg group h-24"
              >
                <div className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon />
                </div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center gap-4"
          >
            <div className="hidden sm:block w-1/4"></div>
            <div className="grid grid-cols-4 gap-4 w-full sm:w-1/2">
              {thirdRow.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-3 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg group h-24"
                >
                  <div className={`text-3xl mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon />
                  </div>
                  <h3 className="font-medium text-sm">{skill.name}</h3>
                </motion.div>
              ))}
            </div>
            <div className="hidden sm:block w-1/4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}