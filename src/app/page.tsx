import Image from "next/image";
import { DM_Serif_Text, DM_Sans } from "next/font/google"
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";

const DMSerif = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
})

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
})

export default function Home() {
  return (
    <div>
    <div className="h-screen bg-white border-64 border-[#06402B]">
      {/* Header */}
      {/* <div className="flex items-center justify-between bg-[#06402B]">
        <div className={`flex p-10 text-5xl text-white ${DMSerif.className}`}>
          MW
        </div>
        <div className="p-10 gap-10 items-center">
        <div className={`flex items-center justify-between gap-8 text-white text-2xl ${DMSerif.className}`}>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
        </div>
      </div>
      </div>  */}

      {/* Image */}
      <div className="flex pl-24 pt-48">
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

        {/* Name */}
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
          </div>
        </div>
      </div>
    </div> 
    
    
    <div className="bg-white h-screen">
      <div className={`p-[64px] text-[#06402B] text-5xl ${DMSerif.className}`}>
        Projects
      </div>
  </div>

  </div>
  );
}
