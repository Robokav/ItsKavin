
import React from 'react';
import { Instagram, Github, Twitter, MessageCircle, Linkedin, ExternalLink,Youtube } from 'lucide-react';

export const USER_PROFILE = {
  name: "Kavin Bavisi",
  role: "Creative Developer & Designer",
  avatar: "./assets/profile1.jpg",
  bio: "From concept → prototype, I learn by building, breaking, and rebuilding smarter ⚙️ Driven by curiosity ✦ a constant learner ✦ a passionate maker — turning ideas into action ⚡"
};

export const SOCIAL_LINKS = [
  {
    id: '1',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kavin-amit-bavisi-826733386/',
    icon: <Linkedin  className="w-5 h-5" />,
    color: 'hover:bg-[#0077B5]',
    textColor: 'hover:text-white'
  },
    {
    id: '2',
    name: 'Instagram',
    url: 'https://www.instagram.com/kav_in2506/',
    icon: <Instagram className="w-5 h-5" />,
    color: 'hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
    textColor: 'hover:text-white'
  },
  /*{
    id: '2',
    name: 'YouTube',
    url: 'https://youtube.com/@yourhandle',
    icon: <Youtube className="w-5 h-5" />,
    color: 'hover:bg-[#FF0000]',
    textColor: 'hover:text-white'
  },*/
    {
    id: '3',
    name: 'WhatsApp',
    url: 'https://wa.me/8422060314',
    icon: <MessageCircle className="w-5 h-5" />,
    color: 'hover:bg-[#25D366]',
    textColor: 'hover:text-white'
  },
 /* {
    id: '4',
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github className="w-5 h-5" />,
    color: 'hover:bg-slate-900',
    textColor: 'hover:text-white'
  }*/
/*{
    id: '5',
    name: 'Twitter (X)',
    url: 'https://twitter.com',
    icon: <Twitter className="w-5 h-5" />,
    color: 'hover:bg-[#1DA1F2]',
    textColor: 'hover:text-white'
  }*/


];
