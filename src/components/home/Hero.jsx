import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Star,
  Users,
  Target,
  ArrowRight,
  Award,
  Shield,
  Clock,
  MapPin,
  Flame,
  Crown,
  Zap,
  ChevronRight,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const backgroundSlides = [
    {
      image:
        "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1600&h=1000&fit=crop",
      title: "State-of-the-Art Facility",
      subtitle: "Professional equipment & environment",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?w=1600&h=1000&fit=crop",
      title: "Championship Training",
      subtitle: "Elite coaching for serious fighters",
    },
    {
      image:
        "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1600&h=1000&fit=crop",
      title: "Proven Results",
      subtitle: "Track record of creating champions",
    },
  ];

  const achievements = [
    { value: "15+", label: "National Champions", icon: Crown },
    { value: "1000+", label: "Active Members", icon: Users },
    { value: "50+", label: "Competition Wins", icon: Target },
    { value: "12", label: "Years of Excellence", icon: Award },
  ];

  const upcomingEvents = [
    { name: "National Championship", date: "Apr 15, 2024", spots: 24 },
    { name: "Fight Night", date: "Apr 28, 2024", spots: 16 },
    { name: "Training Camp", date: "May 5, 2024", spots: 32 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundSlides.length]);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundSlides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_transparent_0%,_black/40_100%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10">
        <div className="container mx-auto px-4 lg:px-12 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 w-full py-20">
            {/* LEFT COLUMN - Main Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-transparent backdrop-blur-sm border-l-4 border-blue-500 rounded-r-full px-4 py-2"
              >
                <Flame className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-semibold text-white/90 tracking-wide">
                  PREMIER BOXING DESTINATION IN RWANDA
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                  Forge Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                    Legacy Here
                  </span>
                </h1>
                <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                  Join Rwanda's most prestigious boxing club. World-class
                  coaching, championship facilities, and a community that pushes
                  you to greatness.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/programs"
                  className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-black font-bold rounded-full text-sm uppercase tracking-wider transition-all hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full text-sm uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Watch Story
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6 space-y-4"
              >
                <p className="text-xs text-white/50 uppercase tracking-wider">
                  TRUSTED BY ELITE ATHLETES
                </p>
                <div className="flex items-center gap-6 flex-wrap">
                  {achievements.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-blue-500" />
                      <div>
                        <span className="text-white font-bold">
                          {item.value}
                        </span>
                        <span className="text-white/50 text-xs ml-1">
                          {item.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN - Dynamic Content Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-white/10 to-black/40 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Card Header */}
                <div className="relative p-6 border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-blue-500" />
                      </div>
                      <span className="text-white font-semibold text-sm">
                        Upcoming Battles
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {backgroundSlides.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            currentSlide === idx
                              ? "bg-blue-500 w-6"
                              : "bg-white/30 w-2 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Event List */}
                <div className="p-6 space-y-4">
                  {upcomingEvents.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">
                            {event.name}
                          </p>
                          <p className="text-white/50 text-xs">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/50">
                          {event.spots} spots left
                        </span>
                        <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Stats Section */}
                <div className="p-6 border-t border-white/10 bg-black/30">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                        <Star className="w-4 h-4 text-blue-500 fill-current" />
                      </div>
                      <p className="text-white font-bold text-sm">5.0 Rating</p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">
                        From 500+ reviews
                      </p>
                    </div>
                    <div className="text-center border-l border-white/10">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                      </div>
                      <p className="text-white font-bold text-sm">
                        24/7 Access
                      </p>
                      <p className="text-white/40 text-[10px] uppercase tracking-wider">
                        Train anytime
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl" />
                <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-blue-500/20 rounded-full blur-xl" />
              </div>

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 left-8 right-8 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  <span className="text-white/80 text-sm">
                    KG 456 St, Kigali - Rwanda
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-white/60 text-xs">
                    Certified Facility
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-lg border-t border-white/10"
        >
          <div className="container mx-auto px-4 lg:px-12 py-3">
            <div className="flex flex-wrap justify-center items-center gap-8 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white/60">World-Class Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white/60">
                  Proven Championship Results
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white/60">State-of-the-Art Facility</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-white/60">Elite Training Programs</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl overflow-hidden max-w-4xl w-full border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-2xl"
                  >
                    <Play className="w-10 h-10 text-black" />
                  </motion.div>
                  <p className="text-white font-bold text-xl tracking-tight">
                    BodyMax Showcase
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Experience the champion's journey
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all border border-white/20"
              >
                <span className="text-xl">✕</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
