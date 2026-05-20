import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Award,
  Users,
  Target,
  Mail,
  Phone,
  MapPin,
  Clock,
  Star,
  Twitter,
  Trophy,
  Calendar,
  CheckCircle,
  ArrowRight,
  Plus,
  Instagram,
  Linkedin,
  User,
  Globe,
  Facebook,
  Download,
  Share2,
  Shield,
  Zap,
  TrendingUp,
  History,
  MoveRight,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const testimonials = [
    {
      name: "Alice N.",
      role: "National Competitor",
      content: "BodyMax boxing club transformed my life! I lost 15kg, gained confidence, and now I'm competing at national level. The coaches' dedication is incredible.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Jean M.",
      role: "Parent",
      content: "Amazing coaches, great community, and top-notch facilities. My son loves the kids' program and has gained so much confidence!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    },
    {
      name: "Marie U.",
      role: "Fitness Enthusiast",
      content: "As a complete beginner, I was nervous, but the supportive environment and professional coaching made all the difference. Lost 10kg in 3 months!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const platinumPartners = [
    {
      name: "Rwanda Boxing Federation",
      logo: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400&auto=format&fit=crop",
      description: "Governing body for boxing in Rwanda, supporting talent development.",
      category: "Sports Federation",
      since: "2019",
      collaborationAreas: ["Talent Development", "Competitions", "Coaching"],
      website: "https://rwandaboxing.org",
      jointAchievements: 12,
    },
    {
      name: "Nike Sports Rwanda",
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop",
      description: "Official sports apparel partner providing premium equipment.",
      category: "Sports Apparel",
      since: "2020",
      collaborationAreas: ["Equipment Supply", "Athlete Sponsorship"],
      website: "https://nike.com/rw",
      jointAchievements: 8,
    },
    {
      name: "GNA IntelleX",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&auto=format&fit=crop",
      description: "Technology and connectivity partner for digital initiatives.",
      category: "Technology",
      since: "2021",
      collaborationAreas: ["Digital Solutions", "Online Training"],
      website: "https://gnaintellex.netlify.app",
      jointAchievements: 6,
    },
  ];

  const executiveTeam = [
    {
      name: "EMMA Asumini",
      role: "Founder & President",
      bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
      email: "Ezikiel@realboxing.com",
      phone: "+250 788 123 456",
      experience: 15,
      expertise: ["Technical Boxing", "Strategy"],
      achievements: ["National Champion 2015-17", "Coach of the Year 2020"],
    },
    {
      name: "passion of boxing",
      role: "Vice President & Head Coach",
      bio: "Former professional boxer with 15+ years coaching experience. Trained 3 national champions and specializes in technical boxing.",
      email: "Ezikiel@realboxing.com",
      phone: "+250 788 123 456",
      experience: 15,
      expertise: ["Strategy", "Conditioning"],
      achievements: ["National Champion 2015-17", "Master Trainer"],
    },
    {
      name: "Passion of boxing",
      role: "Executive Secretary",
      bio: "10+ years in sports management. Oversees all club operations and member experience.",
      email: "sarah@realboxing.com",
      phone: "+250 788 123 457",
      experience: 10,
      expertise: ["Management", "Operations"],
      achievements: ["Management Excellence", "Member Satisfaction Leader"],
    },
  ];

  const timeline = [
    { year: "2010", title: "The Foundation", desc: "BodyMax was born from a single bag and a dream to bring professional boxing to Rwanda." },
    { year: "2015", title: "Championship Era", desc: "Produced our first national champion and expanded to our current elite facility." },
    { year: "2019", title: "Strategic Growth", desc: "Formed key partnerships with the Rwanda Boxing Federation to scout national talent." },
    { year: "2023", title: "Modern Legacy", desc: "Serving over 1000 members with world-class technical boxing programs." },
  ];

  return (
    <div ref={containerRef} className="bg-white min-h-screen selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* PREMIUM WHITE HERO: MAXIMUM CLARITY */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[50%] h-full bg-slate-50 skew-x-[-10deg] translate-x-20"></div>
           <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left Side: Bold High-Contrast Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full text-blue-600 text-xs font-black tracking-[0.3em] uppercase mb-8">
                <Zap className="w-4 h-4" />
                OUR LEGACY
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter mb-8">
                BEYOND THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  SQUARE RING
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12 max-w-xl">
                At BodyMax, we cultivate champions through technical discipline 
                and world-class coaching. Join a community where strength meets 
                strategy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <button className="group px-12 py-5 bg-blue-600 text-white font-black text-sm rounded-2xl transition-all hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/30 flex items-center gap-3">
                    START TRAINING
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="px-12 py-5 bg-white text-slate-900 font-black text-sm rounded-2xl border-2 border-slate-200 transition-all hover:border-blue-600 hover:text-blue-600">
                    LEARN MORE
                 </button>
              </div>
            </motion.div>

            {/* Right Side: High-Visibility Image Composition */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
               <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white">
                  <img 
                    src="https://i.postimg.cc/zXx6MNPd/Screenshot_2026_03_01_171657.png" 
                    className="w-full h-full object-cover" 
                    alt="boxing training"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
               </div>
               
               {/* Floating Stats Badge */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-6 -left-6 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 hidden md:block"
               >
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                        <Trophy className="w-6 h-6" />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Champions Trained</p>
                        <p className="text-2xl font-black text-slate-900">15+</p>
                     </div>
                  </div>
               </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent"></div>
        </motion.div>
      </section>

      {/* INTERACTIVE LEGACY TIMELINE */}
      <section className="py-40 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-end justify-between mb-32 gap-8">
              <div>
                 <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Our History</span>
                 <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none">
                    FORGED IN <br />
                    <span className="text-slate-300">THE RING</span>
                 </h2>
              </div>
              <p className="text-xl text-slate-600 max-w-md font-medium leading-relaxed">
                 Twelve years of relentless pursuit of excellence. From a single heavy bag to Rwanda's premier fight factory.
              </p>
           </div>

           <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                 {timeline.map((item, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.2 }}
                     className="relative group"
                   >
                      <div className="w-16 h-16 bg-white border-4 border-slate-100 rounded-2xl flex items-center justify-center mb-10 group-hover:border-blue-600 transition-all duration-500 group-hover:-translate-y-2 shadow-sm">
                         <span className="text-blue-600 font-black text-xl italic">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* ADVANCED PARTNERSHIP BOARD */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-32">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Global Network</span>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-10">
                 STRATEGIC <br />
                 <span className="text-slate-300">PARTNERS</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                 Collaborating with industry leaders to elevate the sport of boxing and athlete wellness across Rwanda.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platinumPartners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group"
                >
                   <div className="w-24 h-24 bg-white rounded-3xl p-4 shadow-xl mb-12 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4">{partner.name}</h3>
                   <p className="text-slate-500 mb-8 font-medium leading-relaxed">{partner.description}</p>
                   
                   <div className="flex flex-wrap gap-2 mb-10">
                      {partner.collaborationAreas.map((area, i) => (
                        <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                           {area}
                        </span>
                      ))}
                   </div>
                   
                   <a href={partner.website} target="_blank" className="inline-flex items-center gap-3 text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-blue-600 transition-colors">
                      VISIT PARTNER
                      <MoveRight className="w-4 h-4" />
                   </a>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* ELITE LEADERSHIP TEAM */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center justify-between mb-32 gap-12">
              <div className="max-w-2xl">
                 <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">The Leadership</span>
                 <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter leading-none mb-10">
                    BATTLE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">ARCHITECTS</span>
                 </h2>
              </div>
              <div className="flex items-center gap-12">
                 <div className="text-center">
                    <p className="text-4xl font-black text-slate-950 mb-2">45+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Combined Years</p>
                 </div>
                 <div className="h-12 w-[1px] bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-4xl font-black text-slate-950 mb-2">15+</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Champions Trained</p>
                 </div>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {executiveTeam.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="group bg-white rounded-[4rem] p-12 border border-slate-100 hover:border-blue-600/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                   <div className="relative w-32 h-32 mb-12">
                      <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
                      <div className="relative w-full h-full bg-slate-50 rounded-full flex items-center justify-center text-slate-400 border border-slate-100 group-hover:scale-110 transition-transform overflow-hidden">
                         <User className="w-16 h-16" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white">
                         <Shield className="w-4 h-4 text-white" />
                      </div>
                   </div>
                   
                   <h3 className="text-3xl font-black text-slate-950 mb-2 uppercase tracking-tight">{member.name}</h3>
                   <p className="text-blue-600 font-black text-xs uppercase tracking-widest mb-8 italic">{member.role}</p>
                   
                   <p className="text-slate-600 font-medium leading-relaxed mb-10 line-clamp-3">
                      {member.bio}
                   </p>
                   
                   <div className="space-y-4 mb-12">
                      {member.achievements.map((acc, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                           <span className="text-xs font-bold text-slate-700 tracking-tight">{acc}</span>
                        </div>
                      ))}
                   </div>
                   
                   <div className="flex gap-3">
                      <button className="flex-1 py-4 bg-slate-50 hover:bg-slate-950 hover:text-white text-slate-950 font-black text-[10px] uppercase tracking-widest rounded-2xl border border-slate-100 transition-all">
                         LINKEDIN
                      </button>
                      <button className="w-14 h-14 bg-slate-50 hover:bg-blue-600 flex items-center justify-center text-slate-950 hover:text-white rounded-2xl border border-slate-100 transition-all">
                         <Mail className="w-5 h-5" />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* IMMERSIVE TESTIMONIAL STAGE */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                 <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-6 block">Real Stories</span>
                 <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-12">
                    TRUE <br />
                    <span className="text-slate-200">ASCENSION</span>
                 </h2>
                 
                 <div className="space-y-12">
                    {testimonials.map((t, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative pl-12"
                      >
                         <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 group-hover:bg-blue-600 transition-colors"></div>
                         <p className="text-2xl font-black text-slate-900 leading-tight mb-6 italic">"{t.content}"</p>
                         <div className="flex items-center gap-4">
                            <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover shadow-xl" />
                            <div>
                               <p className="font-black text-slate-900 text-sm uppercase tracking-widest">{t.name}</p>
                               <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{t.role}</p>
                            </div>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>

              <div className="relative">
                 <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[100px]"></div>
                 <motion.div 
                   whileHover={{ scale: 0.98 }}
                   className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)]"
                 >
                    <img 
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop" 
                      className="w-full h-full object-cover" 
                      alt="video thumb"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors"></div>
                    <button className="absolute inset-0 flex items-center justify-center group">
                       <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl scale-100 group-hover:scale-110 transition-transform">
                          <Play className="w-10 h-10 text-blue-600 fill-current ml-2" />
                       </div>
                    </button>
                    <div className="absolute bottom-12 left-12 right-12">
                       <p className="text-white font-black text-xs uppercase tracking-[0.4em] mb-4">Featured Story</p>
                       <h3 className="text-4xl font-black text-white tracking-tighter leading-none">MARIE'S JOURNEY <br /> TO THE TOP</h3>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
