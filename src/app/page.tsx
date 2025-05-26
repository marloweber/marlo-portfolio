import Image from "next/image";
import { DM_Serif_Text, DM_Sans } from "next/font/google"
import { Mail, Linkedin, Github } from "lucide-react";

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
    <div className="h-screen bg-white">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className={`flex p-10 text-4xl text-[#155d27] ${DMSerif.className}`}>
          MW
        </div>
        <div className="p-10 gap-10 items-center">
        <div className={`flex items-center justify-between gap-4 text-[#155d27] text-2xl ${DMSerif.className}`}>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
        </div>
      </div>
      </div> 

      {/* Image */}
      <div className="flex pl-60 pt-10">
        <div className="w-64 h-64 rounded-full overflow-hidden relative border-16 border-[#155d27] shadow-lg">
          <Image 
            src="/cropped-headshot.png" 
            alt="Marlo Weber Headshot" 
            width={200} 
            height={200}
            className="z-10 absolute object-cover w-full h-full"
          />
        {/* <Image 
          src="/flower_background.png" 
          alt="Rounded Image" 
          width={200} 
          height={200}
          className="z-0 absolute w-full h-full"
        /> */}
      </div> 
      <div className="pt-10 pb-10 pr-10 pl-20 items-center">
        <div className={`flex items-center justify-between gap-10 text-[#155d27] text-4xl ${DMSerif.className}`}>
          Marlo Weber
        </div>
        
      </div>
      </div>
     
      


    </div>    
  );
}
