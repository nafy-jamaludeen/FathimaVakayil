import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, Sparkles, Milestone, ArrowRight } from "lucide-react";
import { ExperienceItem } from "../types";

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: "shantiniketan",
      role: "Mother Teacher - Foundational Section (KG1 & KG2)",
      organization: "Shantiniketan Indian School",
      location: "Doha, Qatar",
      duration: "Nov 2024 - Present",
      description: [
        "Responsible for the holistic development of children in KG1 and KG2, ensuring a nurturing and engaging learning environment.",
        "Design and implement creative, age-appropriate lesson plans, integrating core subjects with play-based learning to promote cognitive, social, and emotional growth.",
        "Develop and manage the Annual Curriculum Plan (ACP), aligning teaching strategies with academic goals and ensuring effective coverage of all essential topics.",
        "Create and distribute newsletters for parents, highlighting classroom activities, upcoming events, and student progress, fostering strong communication between school and home.",
        "Provide personalized attention to each child, tracking individual progress and addressing learning needs to support their development.",
        "Collaborate with other teachers to create cohesive learning experiences and support school-wide initiatives.",
        "Organize and conduct assessments to monitor and evaluate student performance, adjusting teaching methods as needed to meet diverse learning styles.",
        "Maintain a positive classroom atmosphere by setting clear expectations for behavior, supporting students in developing self-regulation skills, and promoting respect for others.",
        "Coordinate with parents for regular updates on students’ academic and personal growth, building strong partnerships for student success.",
        "Contribute to extracurricular activities and school events, further enhancing students' learning experiences."
      ]
    },
    {
      id: "tutoring",
      role: "Private Tutor & Academic Coach",
      organization: "Private Tutoring",
      location: "Doha, Qatar",
      duration: "2020 - Present",
      description: [
        "Provide personalized tutoring sessions addressing individual student needs.",
        "Create customized lesson plans tailored to each student's learning style and requirements.",
        "Assist students in improving their understanding and performance in specific subjects, including Islamic studies.",
        "Conduct online tutoring sessions in Islamic studies, adapting teaching methods to virtual platforms while maintaining quality instruction."
      ]
    },
    {
      id: "noorify",
      role: "Arabic and Islamic Teacher",
      organization: "Noorify Online Academy",
      location: "Online / Remote",
      duration: "2023 - Present",
      description: [
        "Develop and deliver engaging online lessons for students in Arabic language and Islamic studies.",
        "Utilize interactive teaching methods and multimedia resources to enhance student learning and engagement.",
        "Implement personalized learning strategies to accommodate diverse student needs and learning styles.",
        "Foster a positive and inclusive online learning environment conducive to student success.",
        "Provide timely feedback and support to students to facilitate their academic progress and development.",
        "Collaborate with colleagues and administrators to continuously improve instructional practices and curriculum alignment."
      ]
    }
  ];

  const [activeExpId, setActiveExpId] = useState<string>(experiences[0].id);

  return (
    <section 
      id="experience" 
      className="relative min-h-screen py-24 md:py-32 bg-transparent overflow-hidden px-6 md:px-12 border-t border-white/10"
    >
      {/* Decorative background grid line coordinates */}
      <div className="editorial-grid-line-v left-6 md:left-12" />
      <div className="editorial-grid-line-v right-6 md:right-12" />
      <div className="editorial-grid-line-v left-1/2 hidden xl:block" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-mint font-bold block mb-4">
              II. Professional Milestones
            </span>
            <div className="h-[1px] w-24 bg-brand-mint mb-6" />
            <h2 className="font-display text-[2.5rem] md:text-[4rem] leading-none text-brand-offwhite tracking-tight animate-fade-in">
              Shaping classrooms near <span className="font-display italic text-brand-mint font-normal">and</span> far.
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-brand-offwhite/85 text-lg font-light leading-relaxed max-w-2xl">
              Fathima Vakkayil's professional footprint stretches from traditional campus-based foundational schools in Qatar to progressive virtual hubs. In every role, she converts curriculums into personalized learning quests.
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-12">
          
          {/* Left Side: Professional Switchers */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-mint block mb-2">
              Select Experience
            </span>

            {experiences.map((exp) => {
              const isSelected = activeExpId === exp.id;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExpId(exp.id)}
                  className={`relative p-8 rounded-2xl text-left transition-all duration-500 flex flex-col gap-2 border cursor-pointer ${
                    isSelected 
                      ? "bg-white/10 border-brand-mint/30 shadow-[0_10px_30px_rgba(159,203,179,0.15)] backdrop-blur-md" 
                      : "bg-transparent border-white/5 hover:border-brand-mint/30 hover:bg-white/5"
                  }`}
                >
                  {/* Left border line indicating choice */}
                  {isSelected && (
                    <motion.div 
                      layoutId="experienceIndicatorLine"
                      className="absolute left-0 top-0 bottom-0 w-[4px] bg-brand-mint shadow-[0_0_10px_rgba(159,203,179,0.8)]"
                    />
                  )}

                  <div className="flex justify-between items-start flex-wrap gap-2 text-xs font-semibold text-brand-mint tracking-wider">
                    <span className="uppercase text-[9px] px-2.5 py-1 bg-brand-mint/15 rounded-full border border-brand-mint/30">
                      {exp.duration}
                    </span>
                    <span className="font-mono text-[11px] text-brand-mint/80 font-light flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-brand-offwhite mt-2 leading-tight">
                    {exp.organization}
                  </h3>
                  
                  <span className="font-sans text-sm text-brand-offwhite/80 font-medium">
                    {exp.role.split(" - ")[0]}
                  </span>

                  <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-brand-mint group">
                    <span>Explore responsibilities</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Side: Deep-Dive Description panel */}
          <div className="lg:col-span-7 backdrop-blur-xl bg-white/5 p-8 md:p-12 border border-white/10 rounded-2xl shadow-xl">
            <AnimatePresence mode="wait">
              {experiences.map((exp) => {
                if (exp.id !== activeExpId) return null;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-6"
                  >
                    {/* Role Header */}
                    <div className="flex flex-col gap-2 pb-6 border-b border-white/10 text-left">
                      <div className="flex items-center gap-2 text-brand-mint">
                        <Briefcase className="w-5 h-5 text-brand-mint" />
                        <span className="font-mono text-xs uppercase tracking-[0.2em] font-semibold">Active Profile Review</span>
                      </div>
                      <h4 className="font-display text-3xl font-light text-brand-offwhite mt-1 leading-snug">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-brand-offwhite/70 mt-1">
                        <span className="font-semibold text-brand-offwhite/90">{exp.organization}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Bullet list items with premium bullet shapes */}
                    <div className="flex flex-col gap-5 text-left">
                      <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-brand-mint block">
                        Core Contributions & Impact
                      </span>
                      {exp.description.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex gap-4 items-start">
                          <div className="w-2.5 h-2.5 rounded-full bg-brand-mint mt-1.5 shrink-0 shadow-[0_0_8px_rgba(159,203,179,0.8)]" />
                          <p className="text-brand-offwhite/85 text-base leading-relaxed font-light font-sans">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Stamp bottom right */}
                    <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 mt-4">
                      <div className="flex items-center gap-2 text-brand-mint/80">
                        <Milestone className="w-4 h-4" />
                        <span className="font-sans text-[11px] font-bold uppercase tracking-wider">Qatar Educational Standard Compliant</span>
                      </div>
                      <span className="font-serif text-xs italic text-brand-mint font-bold">CBSE Certified Pedagogy</span>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
