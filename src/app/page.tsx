"use client";

import Image from "next/image";
import { DM_Serif_Text, DM_Sans } from "next/font/google"
import { Mail, Linkedin, Github, ChevronDown, FileText } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { Project } from "next/dist/build/swc/types";

const DMSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
})

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
})

const projects = [
  {
    name: "oCEANIC",
    image: "/oCEANIC_text_logo_white.png",
    background: "#30858c",
  },
  {
    name: "CoLABify",
    image: "/colabifylogo.png",
    background: "#FFFFFF"
  }
]

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeProject, setActiveProject] = useState<any>();

  return (
    <div>
    <div className="h-screen bg-white border-[64px] border-[#06402B] flex items-center justify-center">
      <div className="flex">
        {/* Image */}
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 rounded-full overflow-hidden relative border-[5px] border-[#06402B] shadow-lg">
            <Image 
              src="/cropped-headshot.png" 
              alt="Marlo Weber Headshot" 
              width={200} 
              height={200}
              className="z-10 absolute object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name and description */}
        <div className="pt-10 pb-10 pr-20 pl-20 items-center">
          <div className={`flex items-center justify-between gap-10 text-[#06402B] text-5xl mt-2 ${DMSerif.className}`}>
            Marlo Weber
          </div>  
          <a className={`mt-8 flex flex-col gap-4 text-[#06402B] text-2xl ${DMSans.className}`}>
            Software developer studying Computer Science at Purdue University
          </a> 
          <div className="flex gap-10 mt-8 text-[#06402B]">
            <a href="mailto:marlo@inspiringapps.com">
              <Mail className="w-8 h-8 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/marloweber" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 transition-colors" />
            </a>
            <a href="https://github.com/marloweber" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 transition-colors" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FileText className="w-8 h-8 transition-colors" />
            </a> 
            {/* link my resume */}
          </div>
        </div>
      </div>
    </div>
    
    
    {/* Projects */}
    <div className="bg-white h-screen">
      <div className={`p-[64px] text-[#06402B] text-5xl ${DMSerif.className}`}>
        Projects
      </div>
      <div className="pl-[64px] flex flex-row gap-[64px]">
        {projects.map((project) =>
        <div
          key={project.name}
          className={`h-63 w-112 bg-[${project.background}] shadow-lg flex items-center justify-center transition duration-200 hover:scale-110 cursor-pointer`}
          onClick={() => setActiveProject(project)}
        >
        <Image 
              src={project.image} 
              alt={`${project.name} Logo`}
              width={400} 
              height={400}
              className="object-contain"
            />
            </div>
        )}
      </div>

      {/* Skills */}
      <div className={`p-[64px] text-[#06402B] text-5xl ${DMSerif.className}`}>
        Skills
      </div>
      
  </div>
  </div>
  );
}
