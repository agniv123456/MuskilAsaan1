/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram } from "lucide-react";

// Initial deployment trigger - 2026-03-19
export default function App() {
  return (
    <div className="min-h-screen bg-navy text-cream font-sans overflow-hidden relative selection:bg-orange/30">
      {/* Background Texture & Rings */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="absolute rounded-full border border-orange/[0.06] w-[700px] h-[700px] -top-[200px] -left-[180px]" />
        <div className="absolute rounded-full border border-orange/[0.06] w-[500px] h-[500px] -bottom-[180px] -right-[120px]" />
        <div className="absolute rounded-full border border-orange/[0.06] w-[1100px] h-[1100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute rounded-full border border-orange/[0.06] w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-6 py-10 sm:py-20 overflow-auto sm:overflow-hidden">
        {/* LOGO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <svg className="w-[clamp(90px,12vw,130px)] h-[clamp(90px,12vw,130px)]" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="96" fill="#D4762A"/>
            <line x1="36" y1="158" x2="36" y2="54" stroke="#1B2A4A" strokeWidth="19" strokeLinecap="round"/>
            <line x1="36" y1="54" x2="100" y2="118" stroke="#1B2A4A" strokeWidth="19" strokeLinecap="round"/>
            <line x1="100" y1="118" x2="164" y2="54" stroke="#1B2A4A" strokeWidth="19" strokeLinecap="round"/>
            <line x1="164" y1="54" x2="164" y2="158" stroke="#1B2A4A" strokeWidth="19" strokeLinecap="round"/>
            <line x1="66" y1="158" x2="100" y2="66" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round"/>
            <line x1="134" y1="158" x2="100" y2="66" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round"/>
            <line x1="76" y1="124" x2="124" y2="124" stroke="#FFFFFF" strokeWidth="11" strokeLinecap="round"/>
            <circle cx="100" cy="119" r="9" fill="#D4762A" stroke="#1B2A4A" strokeWidth="3.5"/>
            <line x1="86" y1="119" x2="114" y2="119" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
          </svg>
          
          <div className="font-serif text-[clamp(40px,7vw,80px)] font-black leading-none tracking-[-2px] mt-[clamp(14px,2vw,22px)] text-center">
            <span className="text-white">Muskil</span>
            <span className="text-orange">Asaan</span>
          </div>
          
          <div className="h-[3px] bg-orange w-[88%] rounded-[2px] mt-[clamp(10px,1.5vw,16px)] mb-[clamp(10px,1.5vw,14px)]" />
          
          <div className="font-serif text-[clamp(13px,1.6vw,18px)] italic font-normal text-muted tracking-[0.3px] text-center">
            Mushkil hai? MuskilAsaan hai.
          </div>
        </motion.div>

        {/* SEPARATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[1px] h-[clamp(32px,4vw,52px)] bg-orange/25 my-[clamp(20px,3vw,36px)]"
        />

        {/* TEASER SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center"
        >
          <div className="font-serif text-[clamp(22px,3.5vw,46px)] italic font-normal text-cream leading-[1.3] mb-[clamp(12px,2vw,20px)] flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-orange animate-pulse-custom" />
            Something is coming.
            <span className="inline-block w-[2px] h-[0.85em] bg-orange animate-blink ml-1" />
          </div>
          
          <div className="text-[clamp(14px,1.6vw,20px)] text-cream/45 leading-[1.9] mb-[clamp(24px,3.5vw,44px)] font-light">
            We can't tell you what it is just yet.<br />
            But if you've ever felt unheard —<br />
            you'll want to know.
          </div>
        </motion.div>

        {/* CTA SECTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="inline-block border-[1.5px] border-orange/55 text-orange font-sans text-[clamp(11px,1.2vw,14px)] font-medium tracking-[3px] uppercase px-[clamp(28px,4vw,52px)] py-[clamp(12px,1.5vw,16px)] rounded-[60px] cursor-default hover:bg-orange/10 transition-colors">
            Watch this space
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/917208044912?text=hi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-cream/10 hover:border-orange/50 transition-all duration-300 hover:scale-110"
            >
              <svg 
                className="w-5 h-5 text-cream/40 group-hover:text-orange transition-colors" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/muskilasaan/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-cream/10 hover:border-orange/50 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-cream/40 group-hover:text-orange transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* DOMAIN FOOTER */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="fixed bottom-7 left-0 right-0 text-center text-[clamp(11px,1.1vw,13px)] text-cream/20 tracking-[2px] font-normal sm:relative sm:bottom-auto sm:mt-10"
        >
          muskilasaan.com &nbsp;·&nbsp; very soon
        </motion.footer>
      </div>
    </div>
  );
}

