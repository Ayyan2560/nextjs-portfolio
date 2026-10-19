"use client";
import {useState} from "react";
const NAV_ITEMS=[{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Work",href:"#projects"},{label:"Contact",href:"#contact"}];
export default function Navbar(){
 const[isOpen,setIsOpen]=useState(false);
 return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b10]/85 backdrop-blur-2xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
   <a href="#home" aria-label="Ayyan Rizwan home" onClick={()=>setIsOpen(false)} className="group flex items-center gap-3">
    <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#6385ff]/35 bg-[#6385ff]/10 font-mono text-xs font-semibold text-[#9db2ff] transition group-hover:border-[#6385ff]">AR<span className="text-white">.</span></span>
    <span><span className="block text-sm font-semibold tracking-tight text-white">Ayyan Rizwan</span><span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[.16em] text-[#8c93a6]">Frontend / MERN</span></span>
   </a>
   <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
    {NAV_ITEMS.map(item=><a key={item.label} href={item.href} className="rounded-lg px-3.5 py-2 text-sm text-[#a6adbf] transition hover:bg-white/[0.05] hover:text-white">{item.label}</a>)}
    <a href="/Ayyan-Rizwan-CV.pdf" download="Ayyan-Rizwan-CV.pdf" className="ml-3 inline-flex items-center gap-2 rounded-lg bg-[#6385ff] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#7895ff]">Download CV <span aria-hidden="true">↓</span></a>
   </nav>
   <div className="flex items-center gap-2 md:hidden"><a href="/Ayyan-Rizwan-CV.pdf" download="Ayyan-Rizwan-CV.pdf" className="rounded-lg bg-[#6385ff] px-3 py-2 text-xs font-semibold text-white">CV ↓</a><button type="button" onClick={()=>setIsOpen(!isOpen)} aria-label={isOpen?"Close menu":"Open menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-lg text-white">{isOpen?"×":"☰"}</button></div>
  </div>
  {isOpen&&<nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/[0.08] bg-[#090b10] px-5 py-4 md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{NAV_ITEMS.map(item=><a key={item.label} href={item.href} onClick={()=>setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-[#c1c6d4] transition hover:bg-white/[0.05] hover:text-white">{item.label}</a>)}</div></nav>}
 </header>
}
