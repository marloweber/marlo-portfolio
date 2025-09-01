'use client';

import Image from "next/image";
import { DM_Serif_Text, DM_Sans } from "next/font/google";
import { Mail, Linkedin, Github, MoveLeft, FileText } from "lucide-react";
import { useState, useRef, useEffect } from 'react';
import { Projects } from "@/app/projects";
import { oCEANICText, oCEANICImages } from "@/app/oceanic";
import { CoLABifyText, CoLABifyImages } from "@/app/colabify";
import { LunarText, LunarImages } from "@/app/lunar";

const DMSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

export default function Home() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [activeProject, setActiveProject] = useState<any>();
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c593cfe0-da57-4cd8-bece-1f83a74d0045");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Your message was sent successfully!");
      event.target.reset();
    } else {
      setResult("An error occurred. Please try a different email.");
    }
  };

  return (
    <div>
    <div className="h-screen bg-white border-[64px] border-[#06402B] flex items-center justify-center">
      <div className="flex">
        {/* Image */}
        <div className="flex flex-col items-center fade-up">
          <div className="w-72 h-72 rounded-full overflow-hidden relative border-[5px] border-[#06402B] shadow-lg">
            <Image 
              src="/marlo-headshot-2025-cropped.jpg" 
              alt="Marlo Weber Headshot" 
              width={200} 
              height={200}
              className="z-10 absolute object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Name and description */}
        <div className="pt-10 pb-10 pr-20 pl-20 items-center fade-up">
          <div className={`flex items-center justify-between gap-10 text-[#06402B] text-5xl mt-2 ${DMSerif.className}`}>
            Marlo Weber
          </div>  
          <div className={`mt-8 flex flex-col gap-4 text-[#06402B] text-2xl ${DMSans.className}`}>
            Software developer studying Computer Science at Purdue University
          </div> 
          <div className="flex gap-10 mt-8 text-[#06402B]">
            <a>
              <Mail className="w-8 h-8 transition-colors cursor-pointer" 
              onClick={() => setContactFormOpen(true)}
              />
            </a>
            <a href="https://www.linkedin.com/in/marloweber" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 transition-colors" />
            </a>
            <a href="https://github.com/marloweber" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8 transition-colors" />
            </a>
            {/* <a href="/test_resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-8 h-8 transition-colors" />
            </a>  */}
          </div>
        </div>
      </div>
    </div>
    
    
    {/* Projects */}
    <div className="bg-white h-screen">
      <div className={`pl-[64px] pb-[32px] pt-[64px] text-[#06402B] text-5xl ${DMSerif.className}`}>
        Projects
      </div>
      <div className="pl-[64px] pr-[64px] grid grid-cols-3 gap-[64px] justify-items-center">
        {Projects.map((project) =>
        <div
          key={project.name}
          style={{ backgroundColor: project.background }}
          className={`h-64 w-100 shadow-lg flex items-center justify-center transition duration-200 hover:scale-110 cursor-pointer`}
          
          onClick={() => setActiveProject(project)}
        >
          
        <Image 
              src={project.image} 
              alt={`${project.name} Logo`}
              width={350} 
              height={350}
              className="object-contain"
            />
        </div>
        )}
      </div>

      {contactFormOpen && (
  <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/60">
    <div
      className={`relative shadow-lg w-full max-w-xl h-[64vh] bg-[#06402B] rounded-lg p-6 overflow-hidden ${isFadingOut ? 'fade-out' : 'fade-in'}`}
    >
      <button
        className="absolute top-4 left-4 text-white text-xl"
        onClick={() => {
          setIsFadingOut(true);
          setResult("");
          setTimeout(() => {
            setContactFormOpen(false);
            setIsFadingOut(false);
          }, 300);
        }}
      >
        X
      </button>

      <div className="flex flex-col h-full">
        <div className={`text-white text-center text-2xl mb-4 ${DMSerif.className}`}>
          Please contact me below!
        </div>

        <div className="flex-1 overflow-y-auto flex-col justify-center">
          <form onSubmit={onSubmit} className="flex flex-col items-center space-y-4 px-2 mt-4">
            <input
              className={`bg-white h-10 w-full max-w-md px-4 ${DMSans.className}`}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className={`bg-white h-10 w-full max-w-md px-4 ${DMSans.className}`}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              className={`bg-white min-h-[200px] max-h-[300px] resize-none w-full max-w-md px-4 py-2 ${DMSans.className}`}
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button
              className={`bg-white h-10 w-full max-w-md ${DMSans.className}`}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>

        {result && <span className={`text-white text-center mt-4 ${DMSans.className}`}>{result}</span>}
      </div>
    </div>
  </div>
        )}

      {activeProject && (
        <div className="fixed inset-0 flex justify-center items-center z-0 bg-black/60">
        <div 
          className={`relative shadow-lg w-10/12 h-10/12 z-10 ${isFadingOut ? 'fade-out' : 'fade-in'}`}
          style={{ backgroundColor: activeProject.background }}
        >
          <button
            className="absolute top-8 left-8 cursor-pointer"
            onClick={() => {
              setIsFadingOut(true);
              setTimeout(() => {
              setActiveProject(null);
              setIsFadingOut(false);
              }, 300);
            }}
          >
            <MoveLeft 
              size={35}
              style={{ color: activeProject.arrow }}
            />
          </button>

          {/* oCEANIC */}
          {activeProject.name === "oCEANIC" ? (
             <div className="w-full h-full flex items-center justify-center px-20">
              <div className="flex flex-row items-center justify-between w-full max-w-[1200px] gap-20">
                
                {/* left column */}
                <div className="flex flex-col items-center justify-center w-1/2">
                <Image 
                src={activeProject.image} 
                alt={`${activeProject.name} Logo`}
                width={400} 
                height={400}
              />
              <div className={`text-white mt-10 text-left max-w-sm ${DMSans.className}`}>
                {oCEANICText.blurb}
              </div>

              <div className="mt-10">
              <div className="flex flex-row gap-2">
                {oCEANICText.tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className= {`text-white bg-black/20 px-2 py-2 rounded-sm text-sm ${DMSans.className}`}
                  >
                    {tool}
                  </div>
                )
                )}
              </div>
              </div>
              </div>

              {/* right column */}
              <div className="flex flex-col items-center justify-center w-1/2 space-y-8">
                {oCEANICImages.map((image) =>
                  <div
                    key={image.path}
                    className="flex flex-col items-center"
                  >
                    <a href={image.link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={image.path}
                        alt={image.caption}
                        width={450}
                        height={450}
                        className="shadow-lg"
                      />
                    </a>
                  
                  <div className={`text-white text-center mt-2 ${DMSans.className}`}>
                    {image.caption}
                  </div>
                  </div>
                )}
              </div>
            </div>
            </div>  

            // CoLABify
          ) : (activeProject.name === "CoLABify") ? (
              <div className="w-full h-full flex items-center justify-center px-20">
              <div className="flex flex-row items-center justify-between w-full max-w-[1200px] gap-20">
                
                {/* left column */}
                <div className="flex flex-col items-center justify-center w-1/2">
                <Image 
                src={activeProject.image} 
                alt={`${activeProject.name} Logo`}
                width={400} 
                height={400}
              />
              <div className={`text-black mt-10 text-left max-w-sm ${DMSans.className}`}>
                {CoLABifyText.blurb}
              </div>

              <div className="mt-10">
              <div className="flex flex-row gap-2">
                {CoLABifyText.tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className= {`text-black bg-[#FF66C4]/20 px-2 py-2 rounded-sm text-sm ${DMSans.className}`}
                  >
                    {tool}
                  </div>
                )
                )}
              </div>
              </div>
              </div>

              {/* right column */}
              <div className="flex flex-col items-center justify-center w-1/2 space-y-8 max-h-[80vh] overflow-y-auto">
                <div className="h-[600px] overflow-y-auto flex flex-col space-y-8 pr-2 scroll-smooth">
                {CoLABifyImages.map((image) =>
                  <div
                    key={image.path}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={image.path}
                      alt={image.caption}
                      width={600}
                      height={600}
                      className="shadow-lg"
                    />
                  
                  <div className={`text-black text-center mt-2 ${DMSans.className}`}>
                    {image.caption}
                  </div>
                  </div>
                )}
              </div>
              </div>
            </div>
            </div> 


            // Lunar Translation
          ) : (activeProject.name === "Lunar Translation") ? (
              <div className="w-full h-full flex items-center justify-center px-20">
              <div className="flex flex-row items-center justify-between w-full max-w-[1200px] gap-20">
                
                {/* left column */}
                <div className="flex flex-col items-center justify-center w-1/2">
                <Image 
                src={activeProject.image} 
                alt={`${activeProject.name} Logo`}
                width={400} 
                height={400}
              />
              <div className={`text-white mt-10 text-left max-w-sm ${DMSans.className}`}>
                {LunarText.blurb}
              </div>

              <div className="mt-10">
              <div className="flex flex-row gap-2">
                <a className="px-2" href="https://github.com/marloweber/lunar-translation" target="_blank" rel="noopener noreferrer">
                  <Github className="w-8 h-8 text-white " />
                </a>
                {LunarText.tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className= {`text-white bg-[#FFFFFF]/20 px-2 py-2 rounded-sm text-sm ${DMSans.className}`}
                  >
                    {tool}
                  </div>
                )
                )}   
              </div>
              </div>         
              </div>

              {/* right column */}
              <div className="flex flex-col items-center justify-center w-1/2 space-y-8 max-h-[80vh] overflow-y-auto">
                {LunarImages.map((image) =>
                  <div
                    key={image.path}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={image.path}
                      alt={image.caption}
                      width={525}
                      height={525}
                      className="shadow-lg"
                    />
                  
                  <div className={`text-white text-center mt-2 ${DMSans.className}`}>
                    {image.caption}
                  </div>
                  </div>
                )}
              </div>
            </div>
            </div>


          ) : null }
          </div>
          </div>
      )}

      {/* Skills */}
      <div className=" text-[#06402B]">
        <div className={`pl-[64px] pb-[32px] pt-[64px] text-5xl ${DMSerif.className}`}>
          Skills
        </div>
          <div className={`columns-3 text-2xl pl-[64px] pb-[64px] ${DMSans.className}`}>
          <ul className="list-disc list-inside space-y-4">
            <li className="text-left">Java</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Javascript/Typescript</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>MongoDB</li>
            <li>NumPy</li>
            <li>Machine Learning</li>
            <li>Software Engineering</li>
            <li>Object Oriented Programming</li>
            <li>Data Structures and Algorithms</li>
            <li>Agent-Based Modeling</li>
            <li>Statistics</li>
          </ul>
        </div>
      </div>     
  </div>
  </div>
  );
}