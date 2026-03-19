/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

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
            <line x1="36" y1="158" x2="36" y2="54" stroke="#1B2A4A" stroke-width="19" stroke-linecap="round"/>
            <line x1="36" y1="54" x2="100" y2="118" stroke="#1B2A4A" stroke-width="19" stroke-linecap="round"/>
            <line x1="100" y1="118" x2="164" y2="54" stroke="#1B2A4A" stroke-width="19" stroke-linecap="round"/>
            <line x1="164" y1="54" x2="164" y2="158" stroke="#1B2A4A" stroke-width="19" stroke-linecap="round"/>
            <line x1="66" y1="158" x2="100" y2="66" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
            <line x1="134" y1="158" x2="100" y2="66" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
            <line x1="76" y1="124" x2="124" y2="124" stroke="#FFFFFF" stroke-width="11" stroke-linecap="round"/>
            <circle cx="100" cy="119" r="9" fill="#D4762A" stroke="#1B2A4A" stroke-width="3.5"/>
            <line x1="86" y1="119" x2="114" y2="119" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>
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
        >
          <div className="inline-block border-[1.5px] border-orange/55 text-orange font-sans text-[clamp(11px,1.2vw,14px)] font-medium tracking-[3px] uppercase px-[clamp(28px,4vw,52px)] py-[clamp(12px,1.5vw,16px)] rounded-[60px] cursor-default hover:bg-orange/10 transition-colors">
            Watch this space
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
