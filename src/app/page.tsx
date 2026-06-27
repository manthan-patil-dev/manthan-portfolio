import Hero from "@/components/Hero";
import { skills, projects, experience, personalInfo, certificates } from "@/lib/data";
import { ExternalLink, Mail, Award } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manthan Patil | Full-Stack Developer",
  description: "Portfolio of Manthan Patil, a Full-Stack Developer & Computer Engineering Student.",
};

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
      <Hero />

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">01.</span> Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="bg-slate-800 text-slate-300 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">02.</span> Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div key={project.id} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
              <div className="h-48 bg-slate-800 p-6 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-400 mb-4 h-12">{project.description}</p>
                <p className="text-sm text-blue-400 mb-6 font-mono">{project.outcome}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => <span key={t} className="text-xs text-slate-400 font-mono">{t}</span>)}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Link href={project.github} target="_blank" className="text-slate-400 hover:text-white"><FaGithub size={20} /></Link>
                    <Link href={project.live} target="_blank" className="text-slate-400 hover:text-white"><ExternalLink size={20} /></Link>
                  </div>
                  <Link href={`/projects/${project.id}`} className="text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">03.</span> Experience
        </h2>
        <div className="space-y-12 border-l border-slate-800 ml-3">
          {experience.map((exp, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 shadow-[0_0_10px_#3b82f6]"></div>
              <p className="text-sm text-blue-400 font-mono mb-1">{exp.date}</p>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-slate-400 text-lg mb-3">{exp.company}</p>
              <p className="text-slate-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CERTIFICATES SECTION */}
      <section id="certificates" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
          <span className="text-blue-500 font-mono text-xl">04.</span> Certifications & Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors flex flex-col h-full">
              <Award className="text-blue-500 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{cert.issuer}</p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <span className="text-xs text-blue-400 font-mono">{cert.date}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Interested in working together?</h2>
        <p className="text-slate-400 mb-10 text-lg">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open. &#39;ll do my best to get back to you!
        </p>
        <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105">
          <Mail size={20} /> Say Hello
        </a>
      </section>
    </main>
  );
}