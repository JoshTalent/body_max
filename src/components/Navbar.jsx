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
  Calendar,
  Sparkles,
  CheckCircle,
  Activity,
} from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const location = useLocation();
  const mobileMenuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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

  const handleMouseEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const programs = [
    {
      name: "Fundamentals",
      to: "/programs/fundamentals",
      icon: Shield,
      tag: "Beginner",
      desc: "Perfect your form and stance",
      color: "from-blue-500 to-indigo-600",
      duration: "8 Weeks",
    },
    {
      name: "Fitness Boxing",
      to: "/programs/fitness",
      icon: Zap,
      tag: "Burn 800+ Cal",
      desc: "High-intensity cardio training",
      color: "from-orange-500 to-red-600",
      duration: "6 Weeks",
    },
    {
      name: "Youth Program",
      to: "/programs/kids-teens",
      icon: Users,
      tag: "Ages 8-16",
      desc: "Discipline and coordination",
      color: "from-purple-500 to-indigo-700",
      duration: "12 Weeks",
    },
    {
      name: "Competitive",
      to: "/programs/competitive",
      icon: Trophy,
      tag: "Advanced",
      desc: "Tournament preparation",
      color: "from-amber-500 to-orange-600",
      duration: "Ongoing",
    },
  ];

  const clubLinks = [
    { name: "About", to: "/about" },
    { name: "Coaches", to: "/coaches" },
    { name: "Programs", to: "/programs", isDropdown: true },
    { name: "Gallery", to: "/gallery" },
    { name: "Events", to: "/events" },
    { name: "Blog", to: "/blog" },
  ];

  const benefits = [
    { label: "Elite Coaching", desc: "Professional trainers only", icon: Award },
    { label: "Pro Equipment", desc: "Premium gear provided", icon: Shield },
    { label: "Flexible Hours", desc: "Train when you want", icon: Clock },
    { label: "Community", desc: "Supportive environment", icon: Users },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[10000] flex justify-center pt-4 px-4 lg:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
          className={`pointer-events-auto relative flex items-center justify-between px-6 lg:px-8 h-16 lg:h-[72px] transition-all duration-500 w-full max-w-7xl rounded-2xl ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/20"
              : "bg-white/80 backdrop-blur-md shadow-sm border border-white/30"
          }`}
        >
          {/* LEFT: Logo Section */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-10 h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-all duration-500 border border-white/10 p-2">
                <img
                  src="https://i.postimg.cc/wTwZPzb0/Screenshot-2026-03-01-170506.png"
                  alt="BODYMAX Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                BODYMAX
              </span>
              <span className="text-[9px] font-semibold tracking-[0.2em] text-blue-600 uppercase mt-0.5">
                Boxing Club
              </span>
            </div>
          </Link>

          {/* CENTER: Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {clubLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter("programs")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300 rounded-full flex items-center gap-1.5 ${
                        activeDropdown === "programs"
                          ? "text-blue-600 bg-blue-50"
                          : isScrolled
                            ? "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                            : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "programs" ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === "programs" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                        >
                          <div className="w-[720px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                            <div className="p-5">
                              <div className="grid grid-cols-2 gap-4">
                                {/* Programs List */}
                                <div>
                                  <h4 className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase mb-3 px-2">
                                    Training Programs
                                  </h4>
                                  <div className="space-y-1">
                                    {programs.map((item) => (
                                      <Link
                                        key={item.name}
                                        to={item.to}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all group"
                                      >
                                        <div
                                          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
                                        >
                                          <item.icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-1">
                                          <div className="flex items-center gap-2">
                                            <span className="text-sm font-semibold text-slate-800">
                                              {item.name}
                                            </span>
                                            <span className="text-[8px] font-semibold bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded-full">
                                              {item.tag}
                                            </span>
                                          </div>
                                          <p className="text-[10px] text-slate-500">
                                            {item.desc}
                                          </p>
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                {/* Benefits & CTA */}
                                <div className="bg-slate-50 rounded-xl p-4">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="w-4 h-4 text-blue-600" />
                                    <h4 className="text-[10px] font-semibold text-slate-800 tracking-wider uppercase">
                                      Why Train With Us
                                    </h4>
                                  </div>
                                  <div className="space-y-3">
                                    {benefits.slice(0, 3).map((benefit) => (
                                      <div key={benefit.label} className="flex items-start gap-2">
                                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <div>
                                          <p className="text-xs font-medium text-slate-700">
                                            {benefit.label}
                                          </p>
                                          <p className="text-[9px] text-slate-500">
                                            {benefit.desc}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <Link
                                    to="/membership"
                                    className="mt-5 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-xl text-[10px] font-semibold tracking-wider transition-all"
                                  >
                                    VIEW MEMBERSHIP <ArrowRight className="w-3.5 h-3.5" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`px-5 py-2 text-[11px] font-semibold tracking-wide transition-all duration-300 rounded-full ${
                    location.pathname === link.to
                      ? "text-blue-600 bg-blue-50"
                      : isScrolled
                        ? "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                        : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold tracking-wide rounded-full transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              CONTACT
            </Link>
            <Link
              to="/join"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-semibold tracking-wide rounded-full transition-all shadow-sm"
            >
              JOIN NOW
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all"
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
            className="fixed inset-0 z-[10001] bg-white lg:hidden overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-slate-100">
                <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileOpen(false)}>
                  <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center p-1.5">
                    <img
                      src="https://i.postimg.cc/wTwZPzb0/Screenshot-2026-03-01-170506.png"
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-slate-900">BODYMAX</span>
                    <span className="block text-[8px] font-semibold text-blue-600 tracking-wider">BOXING CLUB</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 px-5 py-6">
                <nav className="flex flex-col gap-1">
                  {clubLinks.map((item, i) => {
                    if (item.name === "Programs") {
                      return (
                        <div key={item.name} className="mb-1">
                          <button
                            onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                            className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-slate-50 transition-all"
                          >
                            <div className="flex items-center gap-3">
                              <Activity className="w-5 h-5 text-blue-600" />
                              <span className="text-base font-semibold text-slate-800">
                                {item.name}
                              </span>
                            </div>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isProgramsOpen ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isProgramsOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-11 mt-1 space-y-1 overflow-hidden"
                              >
                                {programs.map((prog, j) => (
                                  <Link
                                    key={prog.name}
                                    to={prog.to}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-all"
                                    onClick={() => setIsMobileOpen(false)}
                                  >
                                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${prog.color} flex items-center justify-center`}>
                                      <prog.icon className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <div>
                                      <span className="text-sm font-medium text-slate-700">{prog.name}</span>
                                      <p className="text-[10px] text-slate-500">{prog.desc}</p>
                                    </div>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 transition-all"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span className="text-base font-semibold text-slate-800">{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Footer Actions */}
              <div className="p-5 border-t border-slate-100 space-y-4">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-slate-900 text-white text-sm font-semibold rounded-xl transition-all"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  CONTACT US
                </Link>
                <Link
                  to="/join"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 text-white text-sm font-semibold rounded-xl transition-all"
                  onClick={() => setIsMobileOpen(false)}
                >
                  JOIN NOW
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex justify-center gap-6 pt-2">
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
                  <Facebook className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
                  <Twitter className="w-5 h-5 text-slate-400 hover:text-slate-600 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;