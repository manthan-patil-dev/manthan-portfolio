import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { projects } from "../../data/portfolio";
import ProjectModal from "./ProjectModal";
import ResumeButton from "../ui/ResumeButton";

export default function Projects() {
    const [active, setActive] = useState(null);

    return (
        <section id="projects" className="py-20 sm:py-28 px-6 max-w-6xl mx-auto">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-bold">Projects</h2>
                    <p className="mt-2 text-zinc-500 dark:text-zinc-400">
                        Things I've designed and built.
                    </p>
                </div>
                <ResumeButton variant="outline" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                {projects.map((project, i) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:border-teal-500/50 transition"
                    >
                        <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                            />
                        </div>

                        <div className="p-5">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
                                        {project.category}
                                    </span>
                                    <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
                                </div>
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View source"
                                    className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                                >
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>

                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {project.short}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.stack.slice(0, 4).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setActive(project)}
                                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 dark:text-teal-400 hover:gap-2.5 transition-all"
                            >
                                <BookOpen size={15} /> Read More
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>

            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    );
}
