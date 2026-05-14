import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Menu,
  Phone,
  Clock,
  Dumbbell,
  Trophy,
  Users,
  Zap,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Shield,
  Search,
  Globe,
  Award,
  Image,
  BookOpen,
} from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setIsProgramsOpen(false);
  }, [location]);

  const programs = [
    {
      name: "Fundamentals",
      to: "/programs/fundamentals",
      icon: Dumbbell,
      tag: "Beginner",
      desc: "Perfect your form and stance",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Fitness Boxing",
      to: "/programs/fitness",
      icon: Zap,
      tag: "Burn 800+ Cal",
      desc: "High-intensity cardio training",
      color: "from-orange-500 to-red-600",
    },
    {
      name: "Youth Program",
      to: "/programs/kids-teens",
      icon: Users,
      tag: "Ages 8-16",
      desc: "Discipline and coordination",
      color: "from-purple-500 to-indigo-700",
    },
  ];

  const clubLinks = [
    { name: "About", to: "/about" },
    { name: "Gallery", to: "/gallery" },
    { name: "Coaches", to: "/coaches" },
    { name: "Blog", to: "/blog" },
    { name: "Fighters", to: "/boxers" },
  ];
  const menuItems = [
    { name: "About", to: "/about", icon: Users },
    { name: "Gallery", to: "/gallery", icon: Image },
    { name: "Coaches", to: "/coaches", icon: Award },
    { name: "Blog", to: "/blog", icon: BookOpen },
    { name: "Fighters", to: "/boxers", icon: Trophy },
    { name: "Programs", to: "/programs", icon: Dumbbell },
  ];
  return (
    <>
      <div className="fixed top-2 left-0 right-0 z-[10000] flex justify-center pointer-events-none lg:pl-20 lg:pr-20 px-4 sm:p-0">
        <motion.nav
          initial={false}
          animate={{
            y: isScrolled ? 0 : 0,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={`pointer-events-auto relative flex items-center justify-between px-6 lg:px-10 h-16 lg:h-20 transition-all duration-500 w-full rounded-2xl ${
            isScrolled
              ? "bg-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          {/* LEFT: Logo Section */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500 border border-slate-200 p-1.5 rounded-2xl">
                <img
                  src="https://i.postimg.cc/wTwZPzb0/Screenshot-2026-03-01-170506.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span
                  className={`text-xl font-black tracking-tighter leading-none ${isScrolled ? "text-white" : "text-slate-950"}`}
                >
                  BODYMAX
                </span>
                <span
                  className={`text-[10px] font-black tracking-widest uppercase mt-0.5 ${isScrolled ? "text-blue-400" : "text-blue-600"}`}
                >
                  Boxing club
                </span>
              </div>
            </Link>
          </div>

          {/* CENTER: Navigation Links (Only on Desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            {clubLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-4 py-2 text-[10px] font-black tracking-[0.2em] transition-all duration-300 rounded-full hover:bg-white/10 ${
                  location.pathname === link.to
                    ? isScrolled
                      ? "text-blue-400"
                      : "text-blue-600"
                    : isScrolled
                      ? "text-white/70 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}

            {/* MEGA MENU TRIGGER */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-2 px-5 py-2 text-[10px] font-black tracking-[0.2em] rounded-full transition-all ${
                  activeDropdown === "programs"
                    ? "bg-blue-600 text-white"
                    : isScrolled
                      ? "text-white/70"
                      : "text-slate-600"
                }`}
              >
                PROGRAMS
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === "programs" ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === "programs" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 pointer-events-auto"
                  >
                    <div className="w-[600px] bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] p-8 overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl rounded-full" />

                      <div className="grid grid-cols-2 gap-8 relative z-10">
                        <div className="space-y-6">
                          <h4 className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">
                            Featured Programs
                          </h4>
                          <div className="space-y-3">
                            {programs.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group"
                              >
                                <div
                                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                                >
                                  <item.icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between mb-0.5">
                                    <span className="text-sm font-black text-white">
                                      {item.name}
                                    </span>
                                    <span className="text-[8px] font-black bg-blue-600 text-white px-2 py-0.5 rounded-full">
                                      {item.tag}
                                    </span>
                                  </div>
                                  <p className="text-[10px] text-slate-400 truncate">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6 bg-white/5 p-6 rounded-[1.5rem] border border-white/5">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-blue-500" />
                            <h4 className="text-[10px] font-black text-white tracking-[0.2em] uppercase">
                              Club Benefits
                            </h4>
                          </div>
                          <ul className="space-y-4">
                            {[
                              {
                                label: "Elite Coaching",
                                desc: "Professional trainers only",
                              },
                              {
                                label: "Pro Equipment",
                                desc: "Premium gear provided",
                              },
                              {
                                label: "24/7 Access",
                                desc: "Train when you want",
                              },
                            ].map((benefit) => (
                              <li key={benefit.label} className="flex gap-3">
                                <Shield className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                                <div>
                                  <p className="text-xs font-black text-white uppercase tracking-tight">
                                    {benefit.label}
                                  </p>
                                  <p className="text-[10px] text-slate-500 mt-0.5">
                                    {benefit.desc}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <Link
                            to="/membership"
                            className="mt-6 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-[10px] font-black tracking-widest transition-all"
                          >
                            JOIN NOW <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-xl text-[10px] font-black tracking-[0.2em] transition-all shadow-lg ${
                  isScrolled
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-600"
                }`}
              >
                CONTACT
              </motion.button>
            </Link>

            <button
              onClick={() => setIsMobileOpen(true)}
              className={`lg:hidden w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                isScrolled
                  ? "bg-white text-slate-950"
                  : "bg-white text-blue-600 shadow-xl"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Modern Mobile Overlay Navigation */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] bg-black/80 backdrop-blur-xl flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="w-10 h-10 bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200">
                <img
                  src="https://i.postimg.cc/wTwZPzb0/Screenshot-2026-03-01-170506.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-3">
              {menuItems.map((item, i) => {
                if (item.name === "Programs") {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <button
                        onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                        className="flex items-center justify-between w-full p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <div className="flex items-center gap-4">
                          <item.icon className="w-5 h-5 text-blue-500" />
                          <span className="text-xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter">
                            {item.name}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-white transition-transform duration-300 ${isProgramsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isProgramsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-10 mt-2 space-y-2 overflow-hidden"
                          >
                            {programs.map((prog, j) => (
                              <motion.div
                                key={prog.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.05, duration: 0.3 }}
                              >
                                <Link
                                  to={prog.to}
                                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                                >
                                  <prog.icon className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                                    {prog.name}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.to}
                        className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                      >
                        <item.icon className="w-5 h-5 text-blue-500" />
                        <span className="text-xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-tighter">
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                }
              })}
            </nav>

            <div className="pt-12 border-t border-white/5 space-y-8">
              <div className="flex justify-center">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Follow Us
                  </p>
                  <div className="flex gap-4 p-4">
                    <Instagram className="w-5 h-5 text-white/50" />
                    <Facebook className="w-5 h-5 text-white/50" />
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <button className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg tracking-widest shadow-2xl shadow-blue-600/20">
                  CONTACT US
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
