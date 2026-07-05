import React from 'react';
import stackImage from '../assets/about/niladri-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const AwsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#FF9900" d="M36.4 66.9c0 1.6.2 2.9.5 3.8.3.9.7 2 1.4 3.1.2.4.3.7.3 1-.1.5-.4.9-.9 1.4l-3 2c-.4.3-.9.4-1.3.4-.5 0-1-.2-1.4-.7-.6-.7-1.2-1.4-1.6-2.1-.5-.8-.9-1.7-1.5-2.8-3.7 4.3-8.3 6.5-13.9 6.5-4 0-7.2-1.1-9.5-3.4-2.3-2.3-3.5-5.4-3.5-9.2 0-4.1 1.4-7.4 4.4-9.9 2.9-2.5 6.8-3.7 11.8-3.7 1.6 0 3.3.1 5.1.4 1.7.2 3.5.6 5.4 1v-3.5c0-3.6-.8-6.2-2.3-7.6-1.5-1.5-4.1-2.2-7.8-2.2-1.7 0-3.4.2-5.2.6-1.8.4-3.5 1-5.2 1.7-.8.3-1.3.5-1.7.6-.4.1-.6.2-.8.2-.7 0-1.1-.5-1.1-1.5V38.7c0-.8.1-1.4.4-1.7.3-.4.7-.7 1.4-1 1.7-.9 3.7-1.6 6.1-2.1 2.4-.6 4.9-.9 7.6-.9 5.8 0 10 1.3 12.7 4 2.7 2.6 4 6.6 4 12v15.9h.1zm-19.2 7.2c1.6 0 3.2-.3 4.9-.9 1.7-.6 3.3-1.7 4.6-3.2.8-.9 1.4-2 1.7-3.1.3-1.2.5-2.6.5-4.2v-2c-1.4-.3-2.9-.6-4.4-.8-1.6-.2-3.1-.3-4.6-.3-3.3 0-5.7.6-7.3 1.9-1.6 1.3-2.4 3.1-2.4 5.6 0 2.3.6 4 1.8 5.2 1.1 1.2 2.8 1.8 5.2 1.8zm38-4.5c-.9 0-1.5-.2-1.9-.5-.4-.3-.7-1-1-1.9L40.5 34.6c-.3-1-.5-1.6-.5-1.9 0-.8.4-1.2 1.2-1.2h4.9c1 0 1.6.2 2 .5.4.3.6 1 .9 1.9l8.5 33.5 7.9-33.5c.2-1 .5-1.6.9-1.9.4-.3 1.1-.5 2-.5h4c1 0 1.6.2 2 .5.4.3.7 1 .9 1.9l8 33.9 8.8-33.9c.3-1 .6-1.6.9-1.9.4-.3 1-.5 2-.5h4.6c.8 0 1.3.4 1.3 1.2 0 .2 0 .5-.1.8-.1.3-.2.7-.4 1.2L88.6 68.8c-.3 1-.6 1.6-1 1.9-.4.3-1 .5-1.9.5h-4.3c-1 0-1.6-.2-2-.5-.4-.4-.7-1-.9-2l-7.8-32.7L63 68.7c-.2 1-.5 1.6-.9 2-.4.4-1.1.5-2 .5h-4.3z"/>
      <path fill="#FF9900" d="M110 87.6c-9.7 7.2-23.8 11-35.9 11-17 0-32.3-6.3-43.9-16.7-.9-.8-.1-1.9 1-1.3 12.6 7.3 28.1 11.8 44.2 11.8 10.8 0 22.7-2.3 33.7-6.9 1.6-.7 3 1.1 1.4 2.3l-.5-.2zM114.1 82.9c-1.2-1.6-8.2-.8-11.4-.4-.9.1-1.1-.7-.2-1.3 5.6-3.9 14.7-2.8 15.8-1.5 1.1 1.4-.3 10.5-5.5 14.9-.8.7-1.6.3-1.2-.6 1.2-2.9 3.7-9.5 2.5-11.1z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">AWS</span>
  </div>
);

const TerraformIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#844FBA" d="M77.9 22.2 45.7 3.5v37.4l32.2 18.6z"/>
      <path fill="#844FBA" d="M80.9 59.5v37.4l32.2-18.6V40.9z"/>
      <path fill="#844FBA" d="M14.9 41.1v37.4L47 96.9V59.5z"/>
      <path fill="#844FBA" d="M45.7 60.8v37.4l32.2 18.6v-37.4z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Terraform</span>
  </div>
);

const DockerIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#2496ED" d="M124.5 51.7c-3.7-2.6-11.9-3.6-18.4-2.4-.8-6.4-4.4-11.9-10.9-16.8l-2.4-1.6-1.6 2.4c-3.1 4.7-4.6 11.2-4.1 17.3.2 2.3.9 6.4 3.2 10-2 1.1-6 2.6-11.3 2.6H2.4l-.3 1.7c-.9 5.6-.9 23 10.5 32.4 8.6 7.1 21.4 10.6 38 10.6 36.4 0 63.3-16.8 76-47.3 5 .1 15.6.1 21-10.4.1-.2.4-.9 1.3-3l.5-1.4-1.3-.9zM40.5 51.3H26.9v13.6h13.6V51.3zm17.6 0H44.5v13.6h13.6V51.3zm17.6 0H62.1v13.6h13.6V51.3zM40.5 33.7H26.9v13.6h13.6V33.7zm17.6 0H44.5v13.6h13.6V33.7zm17.6 0H62.1v13.6h13.6V33.7zm17.6 0H79.7v13.6h13.6V33.7zM40.5 16.1H26.9v13.6h13.6V16.1zm17.6 0H44.5v13.6h13.6V16.1z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Docker</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Niladri Tewari — Cloud & DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AwsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TerraformIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DockerIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
