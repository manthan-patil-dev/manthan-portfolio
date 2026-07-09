import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8"
                        initial={{ scale: 0.9, y: 30 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 30 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                        >
                            <X size={18} />
                        </button>

                        <span className="text-xs font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400">
                            {project.category}
                        </span>
                        <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                            {project.title}
                        </h3>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 space-y-5 text-zinc-700 dark:text-zinc-300">
                            <section>
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-1">
                                    The Problem
                                </h4>
                                <p>{project.readMore.problem}</p>
                            </section>
                            <section>
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-1">
                                    My Approach
                                </h4>
                                <p>{project.readMore.approach}</p>
                            </section>
                            <section>
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-2">
                                    What I Built
                                </h4>
                                <ul className="space-y-1.5">
                                    {project.readMore.whatIBuilt.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-teal-500 mt-0.5">▸</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section>
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-1">
                                    Challenges
                                </h4>
                                <p>{project.readMore.challenges}</p>
                            </section>
                            <section>
                                <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 mb-1">
                                    Impact
                                </h4>
                                <p>{project.readMore.impact}</p>
                            </section>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-500 transition"
                                >
                                    <ExternalLink size={16} /> Live Demo
                                </a>
                            )}
                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                                >
                                    <Github size={16} /> Source Code
                                </a>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
