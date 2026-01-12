
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkCardProps {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ name, url, icon, color, textColor }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        group relative flex items-center justify-between w-full p-4 mb-3 
        bg-white glass rounded-2xl shadow-sm border border-slate-200/50 
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1
        ${color} ${textColor}
      `}
    >
      <div className="flex items-center space-x-4">
        <div className="p-2.5 rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-white/20 group-hover:text-white">
          {icon}
        </div>
        <span className="font-semibold text-slate-700 transition-colors group-hover:text-white">
          {name}
        </span>
      </div>
      
      <div className="p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ExternalLink className="w-4 h-4 text-white" />
      </div>

      {/* Subtle ring animation on hover */}
      <div className="absolute inset-0 rounded-2xl ring-2 ring-purple-500 ring-offset-2 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
    </a>
  );
};

export default LinkCard;
