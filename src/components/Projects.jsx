import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiTerraform, 
  SiDocker, 
  SiGithubactions, 
  SiPrometheus,
  SiGrafana,
  SiPostgresql
} from 'react-icons/si';
import { FaAws, FaSlack } from 'react-icons/fa';

const easeCinematic = [0.22, 1, 0.36, 1];

// Icons
const GitHubIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ResQOpsArchitecture = () => {
  return (
    <div className="w-full bg-[#050505] border border-[var(--color-luxury-gold)]/20 p-2 md:p-4 rounded-sm relative overflow-hidden font-sans group">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] via-transparent to-[var(--color-luxury-gold)]/5 pointer-events-none"></div>
      
      {/* The Actual Uploaded Image */}
      <img 
        src="/images/resqops_custom.png" 
        alt="ResQOps Full Architecture" 
        className="w-full h-auto object-contain rounded-sm opacity-95 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_50px_rgba(200,169,107,0.1)] relative z-10"
      />
    </div>
  );
};

// --- COMPONENT: PROJECTS SECTION ---
const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeProject]);

  return (
    <section id="projects" className="bg-[#050505] py-24 md:py-32 px-6 md:px-12 w-full relative font-sans border-t border-[#111]">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#080808] to-[#050505] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: easeCinematic }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[11px] font-mono text-[var(--color-luxury-gold)] tracking-widest">03. PROJECTS</span>
              <div className="w-12 h-[1px] bg-[var(--color-luxury-gold)] opacity-40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight uppercase mb-4">
              Featured Projects
            </h2>
            <p className="text-[#AAA59C] text-sm md:text-base font-light max-w-xl leading-relaxed">
              Selected systems I've built around cloud infrastructure, automation, deployment and reliability.
            </p>
          </motion.div>

          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="https://github.com/Niladri11"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-[11px] font-semibold tracking-widest text-[var(--color-luxury-gold)] border border-[var(--color-luxury-gold)]/30 px-6 py-3 rounded-sm hover:bg-[var(--color-luxury-gold)]/10 transition-colors uppercase"
          >
            View All Projects <ArrowUpRight />
          </motion.a>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          
          {/* PROJECT 01: RESQOPS (Spans full width on desktop) */}
          <motion.div 
            initial={{ opacity: 0, y: 20, x: -10 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeCinematic }}
            className="md:col-span-2 group relative bg-[#080808] border border-[var(--color-luxury-gold)]/20 p-8 md:p-12 hover:-translate-y-1 hover:border-[var(--color-luxury-gold)]/50 transition-all duration-500 ease-out cursor-pointer overflow-hidden flex flex-col lg:flex-row gap-12 items-center"
            onClick={() => setActiveProject('resqops')}
          >
            {/* Subtle highlight */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-luxury-gold)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col z-10 relative">
              <span className="text-[10px] font-mono text-[var(--color-luxury-gold)] tracking-widest mb-4">01 — RESQOPS</span>
              <h3 className="text-2xl md:text-4xl font-bold text-[#F5F1E8] mb-4">
                Automated Disaster Recovery Orchestration Platform
              </h3>
              <p className="text-[#AAA59C] text-sm md:text-base font-light leading-[1.8] mb-8 max-w-lg">
                Automated multi-region AWS disaster recovery with monitoring, alerting and failover orchestration.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {["AWS", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Grafana"].map(tag => (
                  <span key={tag} className="text-[10px] md:text-xs text-[var(--color-luxury-gold)] font-bold border border-[var(--color-luxury-gold)]/40 px-3 py-1.5 bg-[var(--color-luxury-gold)]/5 tracking-widest uppercase shadow-[0_0_10px_rgba(200,169,107,0.1)]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); setActiveProject('resqops'); }}
                  className="bg-[var(--color-luxury-gold)] text-black px-6 py-3 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:shadow-[0_0_20px_rgba(200,169,107,0.6)] hover:bg-[#E2CA96] transition-all duration-300"
                >
                  View Project →
                </button>
                <a 
                  href="https://www.youtube.com/watch?si=0lz0jl-zmPcXASi9&v=H_psx-2Tx9w&feature=youtu.be"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="border border-[var(--color-luxury-gold)]/30 text-[#F5F1E8] px-6 py-3 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-[var(--color-luxury-gold)]/10 hover:shadow-[0_0_15px_rgba(200,169,107,0.3)] hover:border-[var(--color-luxury-gold)]/60 transition-all duration-300"
                >
                  Live Demo <PlayIcon />
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
              <div className="w-full max-w-[450px] aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-luxury-gold)]/20 relative group-hover:scale-[1.02] group-hover:border-[var(--color-luxury-gold)]/50 transition-all duration-700 ease-out shadow-[0_0_30px_rgba(200,169,107,0.05)] bg-[#050505]">
                <img src="/images/resqops_thumbnail.jpg" alt="ResQOps Architecture" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 02: TERRAFORM */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: easeCinematic }}
            className="group relative bg-[#080808] border border-[var(--color-luxury-gold)]/20 p-8 hover:-translate-y-1 hover:border-[var(--color-luxury-gold)]/50 transition-all duration-500 ease-out flex flex-col justify-between"
          >
            <div className="z-10 relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-[var(--color-luxury-gold)] tracking-widest">02</span>
                <a href="https://github.com/Niladri11" target="_blank" rel="noopener noreferrer" className="text-[#AAA59C] hover:text-[#F5F1E8] transition-colors"><GitHubIcon /></a>
              </div>
              
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">
                Terraform AWS Infrastructure Automation
              </h3>
              <p className="text-[#AAA59C] text-sm font-light leading-[1.8] mb-8">
                Automated provisioning of AWS VPC, subnets, EC2, S3, and security groups using Terraform IaC with an S3 remote state backend, enabling reproducible and team-safe deployments.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {["Terraform", "AWS EC2", "AWS VPC", "AWS S3", "AWS CLI", "GitHub"].map(tag => (
                  <span key={tag} className="text-[9px] md:text-[10px] text-[var(--color-luxury-gold)] font-bold border border-[var(--color-luxury-gold)]/40 px-3 py-1.5 bg-[var(--color-luxury-gold)]/5 tracking-widest uppercase shadow-[0_0_10px_rgba(200,169,107,0.1)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="w-full h-48 bg-[#050505] border border-white/5 mt-auto relative overflow-hidden group-hover:scale-[1.02] group-hover:border-[var(--color-luxury-gold)]/50 transition-all duration-700 rounded-sm">
               <img src="/images/terraform.jpg" alt="Terraform AWS Infrastructure" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* PROJECT 03: DOCKERIZED NGINX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeCinematic }}
            className="group relative bg-[#080808] border border-[var(--color-luxury-gold)]/20 p-8 hover:-translate-y-1 hover:border-[var(--color-luxury-gold)]/50 transition-all duration-500 ease-out flex flex-col justify-between"
          >
            <div className="z-10 relative">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono text-[var(--color-luxury-gold)] tracking-widest">03</span>
                <a href="https://github.com/Niladri11" target="_blank" rel="noopener noreferrer" className="text-[#AAA59C] hover:text-[#F5F1E8] transition-colors"><GitHubIcon /></a>
              </div>
              
              <h3 className="text-xl font-bold text-[#F5F1E8] mb-4">
                Dockerized Web Application Deployment on AWS EC2
              </h3>
              <p className="text-[#AAA59C] text-sm font-light leading-[1.8] mb-8">
                Containerized and deployed an NGINX web application on AWS EC2 using Docker and Docker Compose, configuring Linux networking, persistent storage volumes, and security group hardening for production readiness.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {["AWS EC2", "Docker", "Docker Compose", "NGINX", "Linux"].map(tag => (
                  <span key={tag} className="text-[9px] md:text-[10px] text-[var(--color-luxury-gold)] font-bold border border-[var(--color-luxury-gold)]/40 px-3 py-1.5 bg-[var(--color-luxury-gold)]/5 tracking-widest uppercase shadow-[0_0_10px_rgba(200,169,107,0.1)]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Visual */}
            <div className="w-full h-48 bg-[#050505] border border-white/5 mt-auto relative overflow-hidden group-hover:scale-[1.02] group-hover:border-[var(--color-luxury-gold)]/50 transition-all duration-700 rounded-sm">
               <img src="/images/docker.jpg" alt="Dockerized Nginx Architecture" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- RESQOPS DETAILED FULL-SCREEN OVERLAY --- */}
      <AnimatePresence>
        {activeProject === 'resqops' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: easeCinematic }}
            className="fixed inset-0 z-50 bg-[#030303] overflow-y-auto overflow-x-hidden"
          >
            {/* Overlay Navigation */}
            <div className="sticky top-0 w-full bg-[#030303]/90 backdrop-blur-md border-b border-white/5 z-50 px-6 md:px-12 py-4 flex justify-between items-center">
              <button 
                onClick={() => setActiveProject(null)}
                className="text-[11px] font-bold tracking-widest text-[#AAA59C] hover:text-[#F5F1E8] uppercase flex items-center gap-2 transition-colors"
              >
                ← Back to Projects
              </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-32">
              
              {/* Header Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: easeCinematic }}
                className="mb-16"
              >
                <span className="text-[10px] font-mono text-[var(--color-luxury-gold)] tracking-widest mb-4 block">01 — RESQOPS</span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#F5F1E8] mb-6 tracking-tight max-w-4xl">
                  Automated Disaster Recovery Orchestration Platform
                </h1>
                <p className="text-[#AAA59C] text-lg font-light leading-relaxed max-w-3xl mb-10">
                  Automated multi-region AWS disaster recovery with monitoring, alerting and failover orchestration.
                </p>

                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com/Niladri11/ResQops" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[var(--color-luxury-gold)] text-black px-6 py-3 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:shadow-[0_0_20px_rgba(200,169,107,0.6)] hover:bg-[#E2CA96] transition-all duration-300"
                  >
                    GitHub <GitHubIcon />
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?si=0lz0jl-zmPcXASi9&v=H_psx-2Tx9w&feature=youtu.be"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-[var(--color-luxury-gold)]/30 text-[#F5F1E8] px-6 py-3 text-[11px] font-bold tracking-widest uppercase flex items-center gap-2 hover:bg-[var(--color-luxury-gold)]/10 hover:shadow-[0_0_15px_rgba(200,169,107,0.3)] hover:border-[var(--color-luxury-gold)]/60 transition-all duration-300"
                  >
                    Live Demo <PlayIcon />
                  </a>
                </div>
              </motion.div>

              {/* Architecture Blueprint */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: easeCinematic }}
                className="mb-24"
              >
                <ResQOpsArchitecture />
              </motion.div>

              {/* Technical Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: easeCinematic }}
              >
                <h3 className="text-xl font-bold text-[#F5F1E8] tracking-widest uppercase mb-8 border-b border-[var(--color-luxury-gold)]/20 pb-4">
                  Technical Flow
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
                  {/* Subtle connecting line for desktop */}
                  <div className="hidden md:block absolute top-[28px] left-[10%] w-[80%] h-[1px] bg-[var(--color-luxury-gold)]/20"></div>

                  {[
                    { num: "01", title: "Detect", desc: "Prometheus monitors application health." },
                    { num: "02", title: "Alert", desc: "AlertManager routes the failure event." },
                    { num: "03", title: "Trigger", desc: "Lambda starts the recovery workflow." },
                    { num: "04", title: "Recover", desc: "Singapore infrastructure is activated." },
                    { num: "05", title: "Notify", desc: "SNS and Slack communicate state." }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col relative z-10 bg-[#030303] pt-4 md:pt-0">
                      <div className="w-8 h-8 rounded-full border border-[var(--color-luxury-gold)]/40 bg-black flex items-center justify-center text-[10px] text-[var(--color-luxury-gold)] font-bold mb-4 mx-auto md:mx-0">
                        {step.num}
                      </div>
                      <h4 className="text-sm font-bold text-[#F5F1E8] mb-2 text-center md:text-left">{step.title}</h4>
                      <p className="text-xs text-[#AAA59C] font-light leading-relaxed text-center md:text-left">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech Stack Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeCinematic }}
                className="mt-24"
              >
                <h3 className="text-xl font-bold text-[#F5F1E8] tracking-widest uppercase mb-8 border-b border-[var(--color-luxury-gold)]/20 pb-4">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["AWS", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Grafana", "AlertManager", "Lambda", "SNS", "Slack", "RDS", "ECR"].map(tech => (
                    <span key={tech} className="px-4 py-2 border border-white/10 text-xs text-[#AAA59C] bg-[#0A0A0A] uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;

