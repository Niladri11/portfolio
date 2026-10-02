import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  SiDocker, 
  SiTerraform, 
  SiPython, 
  SiFastapi, 
  SiPostgresql, 
  SiPrometheus, 
  SiGrafana, 
  SiLinux, 
  SiGit 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';

const techData = [
  { id: 'aws', name: 'AWS', icon: FaAws, color: '#FF9900', desc: 'Deploy, manage and automate scalable infrastructure on AWS.', tags: ['EC2', 'VPC', 'IAM', 'Lambda', 'S3', 'Route 53'] },
  { id: 'docker', name: 'Docker', icon: SiDocker, color: '#2496ED', desc: 'Containerize applications and manage reproducible environments.', tags: ['Docker', 'Docker Compose', 'Containers'] },
  { id: 'terraform', name: 'Terraform', icon: SiTerraform, color: '#844FBA', desc: 'Define and automate cloud infrastructure as code.', tags: ['AWS', 'Infrastructure as Code', 'State', 'Modules'] },
  { id: 'python', name: 'Python', icon: SiPython, color: '#3776AB', desc: 'Build backend services, automation and infrastructure tooling.', tags: ['FastAPI', 'Automation', 'Backend'] },
  { id: 'fastapi', name: 'FastAPI', icon: SiFastapi, color: '#009688', desc: 'Build lightweight Python APIs for backend services.', tags: ['Python', 'REST API', 'PostgreSQL'] },
  { id: 'postgresql', name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', desc: 'Store application and infrastructure data in a relational database.', tags: ['SQL', 'pgvector', 'Database'] },
  { id: 'prometheus', name: 'Prometheus', icon: SiPrometheus, color: '#E6522C', desc: 'Collect infrastructure and application metrics.', tags: ['Metrics', 'Monitoring', 'Alerting'] },
  { id: 'grafana', name: 'Grafana', icon: SiGrafana, color: '#F46800', desc: 'Visualize infrastructure and monitoring data.', tags: ['Dashboards', 'Metrics', 'Observability'] },
  { id: 'linux', name: 'Linux', icon: SiLinux, color: '#FCC624', desc: 'Work with Linux-based environments and server infrastructure.', tags: ['CLI', 'Servers', 'Networking'] },
  { id: 'git', name: 'Git', icon: SiGit, color: '#F05032', desc: 'Manage source code and engineering workflows.', tags: ['Version Control', 'GitHub', 'CI/CD'] },
  { id: 'others', name: 'Others', icon: FiMoreHorizontal, color: '#C8A96B', desc: 'Familiar with an ecosystem of modern cloud tools and libraries.', tags: ['Kubernetes', 'CI/CD Pipelines', 'Bash'] }
];

const easeCinematic = [0.22, 1, 0.36, 1];

const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState(techData[0].id);
  const shouldReduceMotion = useReducedMotion();
  
  const activeData = techData.find(t => t.id === activeTab);

  // Connection lines configuration for desktop SVG
  const SVG_WIDTH = 1200;
  const SVG_HEIGHT = 220;
  const NODE_Y = 28;
  const CENTER_X = SVG_WIDTH / 2;
  const CENTER_Y = SVG_HEIGHT - 10;

  return (
    <section id="skills" className="bg-[#050505] py-24 md:py-32 w-full relative font-sans border-t border-[#111] overflow-hidden">
      
      {/* Background radial glow & Breathing Aura (Pure Light Golden/Yellow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] pointer-events-none z-0 flex items-center justify-center">
        {!shouldReduceMotion ? (
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full transition-colors duration-1000"
            style={{
              background: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, rgba(200, 169, 107, 0.08) 40%, transparent 70%)`,
              filter: 'blur(50px)'
            }}
          />
        ) : (
          <div 
            className="absolute w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] rounded-full opacity-80"
            style={{
              background: `radial-gradient(ellipse at center, rgba(212, 175, 55, 0.2) 0%, rgba(200, 169, 107, 0.08) 40%, transparent 70%)`,
              filter: 'blur(50px)'
            }}
          />
        )}
      </div>

      {/* ENHANCED Design: Intense Yellow Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none hidden md:block overflow-hidden flex items-center justify-center z-0">
        {/* Massive Outer Grid Ring */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[0.5px] border-[#F5D88D]/5 rounded-full" />
        
        {/* Multi-layered Rotating Dashed Rings */}
        <motion.div 
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] w-[900px] h-[900px] border-2 border-dashed border-[#F5D88D]/15 rounded-full"
          style={{ transformOrigin: 'center center' }}
        />
        
        <motion.div 
          animate={shouldReduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] w-[750px] h-[750px] rounded-full"
          style={{ transformOrigin: 'center center' }}
        >
          {/* Detailed dashed ring */}
          <svg className="w-full h-full" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="49" fill="none" stroke="#F5D88D" strokeWidth="0.2" strokeDasharray="1 3" className="opacity-50" />
          </svg>
        </motion.div>

        {/* Primary Glowing Yellow Dashed Ring */}
        <motion.div 
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] left-1/2 -translate-x-[50%] -translate-y-[50%] w-[600px] h-[600px] rounded-full flex items-center justify-center"
          style={{ transformOrigin: 'center center' }}
        >
          <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-[#F5D88D]/50 shadow-[0_0_30px_rgba(245,216,141,0.25)]" />
          {/* Orbiting glowing nodes */}
          <div className="absolute -top-1.5 left-1/2 w-4 h-4 bg-[#F5D88D] rounded-full shadow-[0_0_20px_rgba(245,216,141,1)] -translate-x-1/2" />
          <div className="absolute -bottom-1.5 left-1/2 w-4 h-4 bg-[#F5D88D] rounded-full shadow-[0_0_20px_rgba(245,216,141,1)] -translate-x-1/2" />
        </motion.div>
        
        {/* Dense Inner Solid Rings */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] border-2 border-[#F5D88D]/30 rounded-full shadow-[inset_0_0_40px_rgba(245,216,141,0.1)]" />
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] border-[0.5px] border-[#F5D88D]/20 rounded-full" />
      </div>

      <div className="w-full relative z-10 flex flex-col items-center">
        
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeCinematic }}
          className="text-center mb-16 md:mb-24 px-4 relative z-20"
        >
          {/* Ray Effect Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[400px] h-[400px] pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen opacity-80 z-[-1]">
             {/* Glowing core */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.4)_0%,transparent_50%)] blur-xl" />
             {/* Rotating Rays */}
             <motion.div 
               animate={shouldReduceMotion ? {} : { rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="w-full h-full absolute"
               style={{
                 background: 'repeating-conic-gradient(from 0deg, rgba(212,175,55,0.2) 0deg 4deg, transparent 4deg 8deg)',
                 maskImage: 'radial-gradient(circle at center, black 10%, transparent 60%)',
                 WebkitMaskImage: 'radial-gradient(circle at center, black 10%, transparent 60%)'
               }}
             />
          </div>
          
          <h2 className="relative text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase drop-shadow-[0_0_15px_rgba(212,175,55,0.6)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF4D4] via-[#F5D88D] to-[#D4AF37]">
            My Tech Stack
          </h2>
          <p className="text-[#C8A96B] text-xs md:text-sm font-light relative drop-shadow-[0_0_8px_rgba(200,169,107,0.5)]">
            Click on any technology to explore
          </p>
        </motion.div>

        {/* Interactive Radial Map */}
        <div className="w-full max-w-[1200px] relative mx-auto">
          
          {/* Scrollable container on mobile, full width on desktop */}
          <div className="w-full overflow-x-auto no-scrollbar relative z-20 pb-10 md:pb-0 px-4 md:px-0">
            {/* The wrapper width is exactly large enough to space them well on desktop, and forces horizontal scroll on mobile */}
            <div className="min-w-[900px] w-full flex justify-between items-start relative mx-auto">
              {techData.map((tech, index) => {
                const isActive = activeTab === tech.id;
                const Icon = tech.icon;
                
                return (
                  <div key={tech.id} className="flex flex-col items-center gap-4 relative cursor-pointer group w-[70px]" onClick={() => setActiveTab(tech.id)}>
                    <motion.div 
                      className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center transition-all duration-300 ease-out z-10
                        ${isActive 
                          ? 'border-[var(--color-luxury-gold-bright)] shadow-[0_0_20px_rgba(200,169,107,0.3)] bg-black scale-[1.08]' 
                          : 'border-[var(--color-luxury-gold)]/30 bg-black group-hover:border-[var(--color-luxury-gold)] group-hover:-translate-y-1'
                        }
                      `}
                    >
                      {/* Authentic Colored Logo */}
                      <Icon 
                        className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300"
                        style={{ 
                          color: tech.color,
                          opacity: isActive ? 1 : 0.6,
                          filter: isActive ? `drop-shadow(0 0 8px color-mix(in srgb, ${tech.color} 80%, transparent))` : 'none'
                        }} 
                      />
                      
                      {/* Active inner glow */}
                      {isActive && (
                        <div 
                          className="absolute inset-0 rounded-full pointer-events-none transition-colors duration-500" 
                          style={{ background: `radial-gradient(ellipse at center, color-mix(in srgb, ${tech.color} 20%, transparent) 0%, transparent 70%)` }} 
                        />
                      )}
                    </motion.div>
                    <span className={`text-[10px] md:text-[11px] tracking-wider transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-[#F5F1E8] font-medium' : 'text-[#81796D] group-hover:text-[#AAA59C]'}`}>
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Connection Lines (Desktop only, absolutely positioned over the nodes) */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-[220px] pointer-events-none z-0">
            {/* The SVG viewbox matches the exact layout proportions so curves align with the nodes */}
            <svg viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`} className="w-full h-full" preserveAspectRatio="none">
              {techData.map((tech, index) => {
                const isActive = activeTab === tech.id;
                const nodeX = (index / (techData.length - 1)) * SVG_WIDTH;
                const pathD = `M ${nodeX} ${NODE_Y} C ${nodeX} ${NODE_Y + 120}, ${CENTER_X} ${CENTER_Y - 80}, ${CENTER_X} ${CENTER_Y}`;
                
                return (
                  <g key={`line-${tech.id}`}>
                    <motion.path
                      initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: isActive ? 0.9 : 0.15 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: easeCinematic, delay: index * 0.05 }}
                      d={pathD}
                      fill="none"
                      stroke={isActive ? "var(--color-luxury-gold-bright)" : "var(--color-luxury-gold)"}
                      strokeWidth={isActive ? "1.5" : "0.75"}
                      className="transition-all duration-500"
                    />
                    
                    {/* Glowing particle on active line */}
                    {isActive && !shouldReduceMotion && (
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke="var(--color-luxury-ivory)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray="4 1500"
                        initial={{ strokeDashoffset: 1500 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="opacity-90 drop-shadow-[0_0_6px_rgba(245,241,232,0.8)]"
                      />
                    )}
                  </g>
                );
              })}
              
              {/* Central glowing point where all lines meet */}
              <motion.circle 
                cx={CENTER_X} 
                cy={CENTER_Y} 
                r="3" 
                fill="#F5F1E8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
                className="drop-shadow-[0_0_10px_rgba(200,169,107,1)]"
              />
            </svg>
          </div>

          {/* Central Information Panel */}
          <div className="mt-8 md:mt-0 relative w-full flex justify-center z-20">
            
            <div className="w-full max-w-[800px] relative">
              {/* ENHANCED Central Dome Outline Border (Desktop) - Layered Yellow Dashed Design */}
              <div className="absolute top-0 left-[5%] w-[90%] h-[400px] border-t-4 border-dashed border-[#F5D88D]/70 rounded-t-[50%] pointer-events-none hidden md:block opacity-90 shadow-[0_-5px_30px_rgba(245,216,141,0.15)]" />
              <div className="absolute top-2 left-[7%] w-[86%] h-[380px] border-t-2 border-[#F5D88D]/30 rounded-t-[50%] pointer-events-none hidden md:block" />
              
              <div className="px-6 py-12 md:py-16 md:px-12 flex flex-col items-center text-center">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: easeCinematic }}
                    className="flex flex-col items-center"
                  >
                    {/* Active Icon in Center */}
                    {activeData && (
                      <div className="mb-6 relative">
                        <div 
                          className="absolute inset-0 pointer-events-none transition-colors duration-500 rounded-full" 
                          style={{ 
                            background: `radial-gradient(circle at center, color-mix(in srgb, ${activeData.color} 40%, transparent) 0%, transparent 70%)`, 
                            filter: 'blur(20px)' 
                          }} 
                        />
                        <activeData.icon 
                          className="w-14 h-14 md:w-16 md:h-16 relative z-10 transition-colors duration-500" 
                          style={{ 
                            color: activeData.color,
                            filter: `drop-shadow(0 0 15px color-mix(in srgb, ${activeData.color} 60%, transparent))`
                          }} 
                        />
                      </div>
                    )}
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-[#F5F1E8] tracking-widest uppercase mb-4">
                      {activeData.name}
                    </h3>
                    
                    <p className="text-[#AAA59C] text-sm md:text-[15px] font-light mb-10 max-w-lg leading-[1.8]">
                      {activeData.desc}
                    </p>

                    {/* Service Tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                      {activeData.tags.map((tag, idx) => (
                        <motion.div 
                          key={tag} 
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                          className="px-4 py-1.5 rounded-sm border border-[var(--color-luxury-gold)]/30 bg-[#0A0A0A] text-[11px] md:text-xs text-[#F5F1E8] font-mono tracking-widest hover:border-[var(--color-luxury-gold)]/70 transition-colors cursor-default"
                        >
                          {tag}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
