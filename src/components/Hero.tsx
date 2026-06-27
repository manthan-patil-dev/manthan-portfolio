"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import { personalInfo } from "@/lib/data";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <Sphere args={[1, 100, 200]} scale={2.5}>
                        <MeshDistortMaterial
                            color="#3b82f6"
                            attach="material"
                            distort={0.4}
                            speed={1.5}
                            roughness={0.2}
                        />
                    </Sphere>
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4">
                <p className="text-blue-400 font-mono mb-4 text-lg">Hello World,</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    I'm {personalInfo.name}
                </h1>
                <div className="text-xl md:text-3xl text-gray-300 h-10 mb-6">
                    <TypeAnimation
                        sequence={personalInfo.titles}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p className="max-w-2xl text-gray-400 mb-8 text-lg">
                    {personalInfo.description}
                </p>

                <div className="flex gap-4 mb-8">
                    <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        View Projects
                    </a>
                    <a href="/resume.pdf" className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Download Resume
                    </a>
                </div>

                <div className="flex gap-6 text-gray-400">
                    <Link href={personalInfo.github} target="_blank" aria-label="GitHub"><FaGithub className="hover:text-white transition-colors" /></Link>
                    <Link href={personalInfo.linkedin} target="_blank" aria-label="LinkedIn"><FaLinkedin className="hover:text-white transition-colors" /></Link>
                    <Link href={`mailto:${personalInfo.email}`} aria-label="Email"><Mail className="hover:text-white transition-colors" /></Link>
                </div>
            </div>
        </section>
    );
}