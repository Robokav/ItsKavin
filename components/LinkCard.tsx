
import React,{useState} from 'react';
import { ExternalLink,Check } from 'lucide-react';

interface LinkCardProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;

}

const LinkCard: React.FC<LinkCardProps> = ({ name, url, icon, color, glowColor }) => {
  
  return (
    <a 
      href={url} 
      target="_blank"
      rel="noopener noreferrer"
      
     
      className={`
        group relative flex items-center justify-between w-full p-4 mb-3 
        bg-white/80 glass rounded-2xl shadow-sm border border-white/50 
        transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:scale-[1.02] hover:-translate-y-1 active:scale-95
        ${color} ${glowColor}
      `}
    >
      <div className="flex items-center space-x-4 z-10">
        <div className="p-3 rounded-xl bg-slate-100/50 text-slate-600 transition-all duration-300 group-hover:bg-white/20 group-hover:text-white group-hover:rotate-[10deg]">
          {icon}
        </div>
        <span className="font-bold text-slate-700 transition-colors duration-300 group-hover:text-white tracking-tight">
          {name}
        </span>
      
            
      </div>
      
      <div className="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 z-10">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>

      {/* Background fill animation */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
      </div>
    </a>
  );
};

export default LinkCard;
