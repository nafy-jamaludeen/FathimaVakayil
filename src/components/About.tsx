import { motion } from "motion/react";
import { BookOpen, Award, CheckCircle, ShieldCheck } from "lucide-react";

export default function About() {
  const credentials = [
    {
      id: "nsdtc",
      num: "01",
      degree: "Certificate in Preschool Teacher Training",
      description: "NSDTC (2020). Core Competencies: Early Childhood Education, Classroom Management, Child Psychology, Curriculum Design. Skills: Teaching, Communication, Classroom Organization, Child Development. Achievements: Successfully completed the Preschool Teacher Training program.",
      icon: Award,
      tag: "NSDTC 2020"
    },
    {
      id: "ba-econ",
      num: "02",
      degree: "Bachelor of Arts - Economics",
      description: "University of Calicut (2019). Major: Economics. Core Competencies: Microeconomics, Macroeconomics, Econometrics, Financial Systems. Skills: Data Analysis, Research, Critical Thinking, Problem-Solving, Policy Analysis. Graduated with first class with overall grade C.",
      icon: BookOpen,
      tag: "Univ of Calicut 2019"
    },
    {
      id: "commerce-hsc",
      num: "03",
      degree: "Higher Secondary Education/SSLC",
      description: "Board of Higher Secondary Education (2014) with Major in Commerce & Minor in Computer Application. Plus Secondary School Leaving Certificate (2012).",
      icon: BookOpen,
      tag: "HSC 2014 / SSLC 2012"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 md:py-32 bg-transparent overflow-hidden px-6 md:px-12 border-t border-white/10"
    >
      {/* Decorative vertical lines */}
      <div className="editorial-grid-line-v left-6 md:left-12" />
      <div className="editorial-grid-line-v right-6 md:right-12" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-mint font-bold block mb-4">
              I. Architectural Mindset
            </span>
            <div className="h-[1px] w-24 bg-brand-mint mb-6" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-none text-brand-offwhite tracking-tight mb-6 animate-fade-in">
              Educators define the <span className="font-display italic text-brand-mint font-normal">Foundations</span> of intellectual growth.
            </h2>
            <p className="text-brand-offwhite/85 text-lg leading-relaxed max-w-2xl font-light">
              Fathima Vakkayil blends rigorous economics training with a deep mastery of early childhood instruction. By treating classrooms as structured environments of organic discovery, she develops curricula where complex, creative subjects are broken down into engaging, kid-friendly interactions.
            </p>
          </div>
        </div>

        {/* Credentials & Art Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Custom Generated Editorial Art with overlaps */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-brand-mint/10 rounded-2xl blur-xl filter opacity-40 pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] p-3 shadow-2xl transition-all duration-500 border border-white/10 bg-[#1F4D3A]/20 backdrop-blur-md hover:border-brand-mint/30">
              {/* Asset Path refers to generated file with absolute care */}
              <img 
                src="/editorial_education_art_1779548287378.png" 
                alt="Minimalist abstract watercolor art of modern early childhood education" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlapping text flag */}
              <div className="absolute bottom-8 left-8 right-8 bg-brand-dark/95 backdrop-blur-md p-6 border border-white/10 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4.5 h-4.5 text-brand-mint" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-mint">Pedagogical Philosophy</span>
                </div>
                <p className="font-serif text-sm italic text-brand-offwhite leading-relaxed">
                  "By establishing mathematical and logical harmony early, students excel effortlessly in complex subjects later."
                </p>
              </div>
            </div>

            {/* Red accent frame background offset */}
            <div className="absolute -inset-2 bg-transparent border border-brand-mint/15 rounded-2xl -z-10 translate-x-4 translate-y-4 pointer-events-none" />
          </div>

          {/* Right: Academic Credentials */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:pl-6">
            <span className="font-sans text-xs uppercase tracking-widest font-bold text-brand-mint block mb-2">
              Academic Credentials
            </span>

            <div className="flex flex-col gap-6">
              {credentials.map((cred, idx) => {
                const IconComponent = cred.icon;
                return (
                  <motion.div
                    key={cred.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="group relative p-8 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 hover:border-brand-mint/30 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start hover:scale-[1.03] shadow-md hover:shadow-[0_10px_35px_rgba(159,203,179,0.15)]"
                  >
                    {/* Index Overlay */}
                    <div className="font-serif text-5xl font-light text-brand-mint/10 group-hover:text-brand-mint/25 transition-colors duration-300 select-none pointer-events-none absolute right-6 top-4 z-0">
                      {cred.num}
                    </div>

                    <div className="w-12 h-12 rounded-lg bg-[#1F4D3A]/60 border border-white/10 flex items-center justify-center text-brand-mint group-hover:bg-brand-mint group-hover:text-brand-dark group-hover:border-brand-mint transition-all duration-300 shrink-0 relative z-10">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col text-left relative z-10 pr-12 md:pr-16 w-full">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-offwhite">
                          {cred.degree}
                        </h3>
                        <span className="text-[10px] uppercase font-bold text-brand-mint tracking-widest px-2.5 py-1 border border-brand-mint/20 bg-brand-mint/10 rounded-full">
                          {cred.tag}
                        </span>
                      </div>
                      <p className="text-brand-offwhite/80 text-sm md:text-base leading-relaxed font-light font-sans">
                        {cred.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dynamic bullet items in high-end format */}
            <div className="mt-6 p-6 border-l-2 border-brand-mint bg-[#1F4D3A]/20 backdrop-blur-sm rounded-r-2xl">
              <span className="font-sans text-xs font-bold text-brand-mint uppercase tracking-wider block mb-3">Key Paradigms</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-brand-offwhite/85 font-light">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-mint shrink-0" />
                  <span>Interactive lesson design</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-mint shrink-0" />
                  <span>Differentiated learning speeds</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-mint shrink-0" />
                  <span>Cognitive milestone matching</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-mint shrink-0" />
                  <span>Multi-sensory educational models</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Additional Professional Profile Metrics */}
        <div className="mt-20 border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          
          {/* Strengths and Self Assessment */}
          <div className="flex flex-col gap-4 h-full">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-mint font-bold block">
              Self-Assessment Strengths
            </span>
            <ul className="flex flex-col gap-3.5 p-5 bg-white/5 border border-white/5 rounded-2xl h-full min-h-[240px] justify-center">
              {[
                "Early Childhood Education Expertise",
                "Effective Communication",
                "Adaptability",
                "Curriculum Development",
                "Data-Driven Decision Making"
              ].map((strength) => (
                <li key={strength} className="flex items-center gap-2.5 text-sm text-brand-offwhite/85 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-mint shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Proficiency & Languages */}
          <div className="flex flex-col gap-4 h-full">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-mint font-bold block">
              Software & Languages
            </span>
            <div className="flex flex-col gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl h-full min-h-[240px] justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-offwhite/50 block mb-2">Technical Proficiency</span>
                <div className="flex flex-wrap gap-2">
                  {["MS Word", "MS Excel", "MS PowerPoint"].map((tech) => (
                    <span key={tech} className="text-xs bg-brand-forest/30 border border-brand-mint/15 text-brand-mint px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 mt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-offwhite/50 block mb-2">Languages Known</span>
                <div className="flex flex-wrap gap-2">
                  {["English", "Malayalam"].map((lang) => (
                    <span key={lang} className="text-xs bg-white/5 border border-white/10 text-brand-offwhite px-2.5 py-1 rounded font-serif italic text-brand-mint/95">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Registry & Locations */}
          <div className="flex flex-col gap-4 h-full">
            <span className="font-mono text-[10px] uppercase tracking-widest text-brand-mint font-bold block">
              Additional Details
            </span>
            <div className="flex flex-col gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl h-full min-h-[240px] font-light text-sm text-brand-offwhite/80 justify-between">
              <div className="flex justify-between py-1.5 border-b border-white/5 w-full">
                <span className="text-brand-offwhite/50">Nationality</span>
                <span className="font-medium text-brand-offwhite">India</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5 w-full">
                <span className="text-brand-offwhite/50">Date of Birth</span>
                <span className="font-mono text-xs">08/06/1997</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5 w-full">
                <span className="text-brand-offwhite/50">Residing Country</span>
                <span className="font-medium text-brand-offwhite">Qatar</span>
              </div>
              <div className="flex justify-between py-1.5 w-full">
                <span className="text-brand-offwhite/40 italic">Areas for Improvement</span>
                <span className="text-[10px] bg-brand-mint/10 border border-brand-mint/20 text-brand-mint px-2 py-0.5 rounded uppercase tracking-wider font-mono font-bold">CPD, Tech, Leadership</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
