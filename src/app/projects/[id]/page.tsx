import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function generateStaticParams() {
    return projects.map((p) => ({ id: p.id }));
}

export default function CaseStudy({ params }: { params: { id: string } }) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) notFound();

    return (
        <article className="min-h-screen bg-slate-950 text-slate-200 py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-12 transition-colors">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Link href={project.github} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                        <FaGithub size={18} /> View Source
                    </Link>
                    <Link href={project.live} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-white bg-slate-900 px-4 py-2 rounded-lg border border-slate-800">
                        <ExternalLink size={18} /> Live Demo
                    </Link>
                </div>

                <div className="prose prose-invert prose-blue max-w-none">
                    <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                    <p className="text-lg text-slate-300 mb-8">{project.description}</p>

                    <h2 className="text-2xl font-bold text-white mb-4">Deep Dive & Architecture</h2>
                    <p className="text-slate-300 mb-8">{project.details}</p>

                    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 my-8">
                        <h3 className="text-white mt-0 mb-2 font-bold">Key Outcome</h3>
                        <p className="text-blue-400 font-mono mb-0">{project.outcome}</p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
                    <ul className="flex flex-wrap gap-2 list-none pl-0">
                        {project.tech.map(t => (
                            <li key={t} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm m-0 border border-blue-900/50">
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}