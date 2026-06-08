import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Zap,
  Trophy,
  Target,
  Users,
  Award,
  ArrowRight,
  Quote,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Clock,
  Star,
  CheckCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ExternalLink,
  Heart,
  TrendingUp,
  Play,
  User,
  Briefcase,
  Crown,
  Sparkles,
  Activity,
  BarChart3,
  Gem,
  Flame,
  Mic2,
  BadgeCheck,
  Handshake,
} from "lucide-react";
import Navbar from "../Navbar";

// Custom useInView hook
const useInView = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    
    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return [setRef, inView];
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const [heroRef, heroInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });
  const [leadershipRef, leadershipInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  const timelineEvents = [
    {
      year: "2010",
      title: "The Foundation",
      description: "BodyMax opens its doors with a single boxing ring and a big dream.",
    },
    {
      year: "2015",
      title: "First Champion",
      description: "Produces Rwanda's first national boxing champion under our banner.",
    },
    {
      year: "2019",
      title: "Strategic Alliance",
      description: "Partners with Rwanda Boxing Federation for elite talent development.",
    },
    {
      year: "2023",
      title: "Modern Legacy",
      description: "State-of-the-art facility serving over 1,000 active members.",
    },
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Discipline",
      description: "The foundation of every champion's journey.",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Technical mastery over raw power.",
    },
    {
      icon: Users,
      title: "Community",
      description: "A brotherhood that pushes you forward.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Continuous evolution of mind and body.",
    },
  ];

  const stats = [
    { value: "12+", label: "Years of Excellence", icon: Award },
    { value: "15+", label: "Champions Trained", icon: Trophy },
    { value: "1,000+", label: "Active Members", icon: Users },
    { value: "98%", label: "Member Satisfaction", icon: Star },
  ];

  const promoterCredentials = [
    {
      icon: BadgeCheck,
      title: "Licensed Promoter",
      description: "Official certification from Rwanda Boxing Commission",
    },
    {
      icon: Handshake,
      title: "10+ Major Events",
      description: "Successfully organized national & regional tournaments",
    },
    {
      icon: Trophy,
      title: "Rising Stars Discovered",
      description: "Launched careers of 5+ professional boxers",
    },
    {
      icon: Mic2,
      title: "Media Recognition",
      description: "Featured on Rwanda TV, New Times, and KT Press",
    },
  ];

  const pastEvents = [
    {
      name: "Kigali Fight Night 2024",
      date: "March 2024",
      venue: "Kigali Arena",
      attendance: "2,500+",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&h=400&fit=crop",
    },
    {
      name: "Rwanda Boxing Gala",
      date: "October 2023",
      venue: "Camp Kigali",
      attendance: "1,800+",
      image: "https://images.unsplash.com/photo-1599058917765-e2014a0963ac?w=600&h=400&fit=crop",
    },
    {
      name: "East Africa Rising Stars",
      date: "June 2023",
      venue: "Petit Stade",
      attendance: "3,000+",
      image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=600&h=400&fit=crop",
    },
  ];

  const leadership = [
    {
      name: "Emma Asumini",
      role: "Founder & Head Coach",
      bio: "Former professional boxer with 15+ years of experience. Trained 3 national champions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Sarah Uwimana",
      role: "Executive Director",
      bio: "Sports management expert driving operational excellence and member experience.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop",
    },
    {
      name: "David Nkurunziza",
      role: "Performance Director",
      bio: "Conditioning specialist with a focus on athlete longevity and peak performance.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Alice Niyonshuti",
      role: "National Competitor",
      content: "BodyMax transformed my life. The coaches' dedication is unmatched.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop",
    },
    {
      name: "Jean Mugabo",
      role: "Parent",
      content: "My son has gained incredible confidence. Amazing community!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      name: "Marie Uwase",
      role: "Fitness Enthusiast",
      content: "From nervous beginner to feeling unstoppable. Best decision ever.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    },
  ];

  const partners = [
    {
      name: "Rwanda Boxing Federation",
      logo: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=120&h=120&fit=crop",
      focus: "Governing Body",
    },
    {
      name: "Nike Sports Rwanda",
      logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=120&h=120&fit=crop",
      focus: "Official Apparel",
    },
    {
      name: "KWANDA GROUP LTD",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=120&fit=crop",
      focus: "Digital Partner",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div ref={containerRef} className="bg-white min-h-screen font-poppins overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center justify-center pt-28"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-white to-white -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full mb-8">
                <span className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Since 2010</span>
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                Forging
                <span className="text-blue-600 block">Champions</span>
                <span className="text-slate-400">Beyond the Ring</span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
                BodyMax is Rwanda's premier boxing destination — a place where discipline meets world-class coaching.
                We don't just train fighters; we build character, resilience, and champions.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-blue-600 text-white font-semibold text-sm rounded-full transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white text-slate-700 font-semibold text-sm rounded-full border border-slate-200 transition-all hover:border-blue-300 hover:text-blue-600">
                  Our Programs
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                <div className="absolute inset-0 bg-blue-600 rounded-3xl -z-10 translate-x-4 translate-y-4" />
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=1000&fit=crop"
                  className="w-full h-full object-cover rounded-3xl relative z-10"
                  alt="Boxer training"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-20 rounded-3xl" />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl border border-blue-100 hidden md:block z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Champions</p>
                    <p className="text-2xl font-bold text-slate-900">15+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <section ref={statsRef} className="py-16 border-y border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section ref={valuesRef} className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 text-sm font-medium mb-4">
              <span className="w-8 h-px bg-blue-200" />
              OUR FOUNDATION
              <span className="w-8 h-px bg-blue-200" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-5">
              Core Principles
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Every punch thrown, every drop of sweat — guided by our unwavering values.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:border-blue-200 border border-transparent group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <value.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BODYMAX PROMOTIONS SECTION */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 text-sm font-medium mb-4">
              <span className="w-8 h-px bg-blue-200" />
              EVENT PRODUCTION
              <span className="w-8 h-px bg-blue-200" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-5">
              BODYMAX <span className="text-blue-600">PROMOTIONS</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Elevating boxing in Rwanda through world-class event production, athlete management, and unforgettable fight nights.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {promoterCredentials.map((cred, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <cred.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cred.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{cred.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop"
                alt="Lead Promoter"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-full px-5 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span className="text-sm font-bold">Lead Promoter</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full">
                <BadgeCheck className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-700">Licensed Professional Promoter</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900">John Mugisha</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                With over a decade of experience in combat sports promotion, John has successfully organized
                more than 15 major boxing events across Rwanda and East Africa. His vision has brought
                international attention to Rwandan boxing talent and created platforms for athletes to shine.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="text-2xl font-bold text-blue-600">15+</p>
                  <p className="text-xs text-slate-500 font-medium">Events Organized</p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <p className="text-2xl font-bold text-blue-600">5</p>
                  <p className="text-xs text-slate-500 font-medium">Pro Fighters Signed</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Flagship Events</h3>
              <p className="text-slate-500">Memorable nights that put Rwandan boxing on the map</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:border-blue-200 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{event.name}</h4>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" /> {event.attendance}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {event.venue}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:scale-105 shadow-lg">
              <Mic2 className="w-4 h-4" />
              Partner with BodyMax Promotions
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef} className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-blue-600 text-sm font-medium mb-4">
                <span className="w-8 h-px bg-blue-200" />
                OUR JOURNEY
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-5">
                From a Single Bag to a Legacy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                Twelve years of relentless pursuit of excellence. We've grown, but our mission remains the same.
              </p>

              <div className="space-y-6">
                {timelineEvents.map((event, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5 group"
                  >
                    <div className="flex-shrink-0 w-16">
                      <p className="text-lg font-bold text-blue-600">{event.year}</p>
                      <div className="w-px h-full bg-slate-200 ml-2 mt-2 group-last:hidden" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">{event.title}</h3>
                      <p className="text-slate-500 text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-3xl -z-10" />
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=900&fit=crop"
                alt="Boxing gym interior"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section ref={leadershipRef} className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 text-sm font-medium mb-4">
              <span className="w-8 h-px bg-blue-200" />
              THE TEAM
              <span className="w-8 h-px bg-blue-200" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mt-3 mb-5">
              Leadership
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Guided by experts who have lived the sport and dedicated their lives to coaching excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-slate-100"
              >
                <div className="aspect-square overflow-hidden bg-slate-100 relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex gap-3 mt-5 pt-4 border-t border-slate-100">
                    <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-4 h-4 text-slate-600" />
                    </button>
                    <button className="p-2 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <Mail className="w-4 h-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 text-sm font-medium mb-4">
              <span className="w-8 h-px bg-blue-200" />
              COLLABORATIONS
              <span className="w-8 h-px bg-blue-200" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Trusted Partners</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-50 transition-colors overflow-hidden border border-slate-200 shadow-sm">
                  <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-cover rounded-full" />
                </div>
                <p className="text-sm font-medium text-slate-800">{partner.name}</p>
                <p className="text-xs text-slate-400">{partner.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={testimonialsRef} className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 text-blue-600 text-sm font-medium mb-4">
              <span className="w-8 h-px bg-blue-200" />
              TESTIMONIALS
              <span className="w-8 h-px bg-blue-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Members Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Quote className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-slate-600 leading-relaxed mb-5 text-sm">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-blue-600 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section ref={ctaRef} className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-10 h-10 text-blue-600 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join Rwanda's premier boxing community. Whether you're a beginner or aspiring champion,
              we have a place for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3.5 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;