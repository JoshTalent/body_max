import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import axios from "axios";
import {
  Trophy,
  Crown,
  Search,
  X,
  ChevronRight,
  MapPin,
  Star,
  Award,
  Sparkles,
  Target,
  Flame,
  Globe,
  Instagram,
  Twitter,
  Activity,
  Zap,
} from "lucide-react";

const BoxersPage = () => {
  const [activeDivision, setActiveDivision] = useState("professional");
  const [selectedBoxer, setSelectedBoxer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Live boxers data fetched from database
  const [boxers, setBoxers] = useState([]);

  useEffect(() => {
    const fetchBoxers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://bodymax-bc-backend.onrender.com/api/boxers");
        if (response.data.success) {
          setBoxers(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching boxers from database:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBoxers();
  }, []);

  const filteredBoxers = boxers.filter(
    (b) =>
      b.category === activeDivision &&
      (b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.weight.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* CLEAN PROFESSIONAL HERO: WHITE THEME */}
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50 skew-x-[-15deg] translate-x-20"></div>
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-xs font-black tracking-widest uppercase mb-8">
                Official Fight Team
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 tracking-tighter leading-[0.9]">
                ELITE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">WARRIORS</span>
              </h1>
              <p className="text-xl text-slate-600 font-medium mb-12 max-w-xl">
                The heart and soul of BodyMax. From technical amateurs to elite professionals,
                meet the champions who define our legacy.
              </p>

              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Find a fighter..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl pl-12 pr-4 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-[450px] h-[550px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://i.postimg.cc/fyymR1YW/Screenshot_2026_03_01_174723.png"
                  className="w-full h-full object-cover"
                  alt="boxer hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              {/* Achievement Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Division</p>
                  <p className="text-xl font-black text-slate-900 uppercase">Pro Elite</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-16 md:top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <TabButton
              active={activeDivision === 'professional'}
              onClick={() => setActiveDivision('professional')}
              label="Professional Division"
              icon={Crown}
            />
            <TabButton
              active={activeDivision === 'amateur'}
              onClick={() => setActiveDivision('amateur')}
              label="Amateur Prospects"
              icon={Star}
            />
          </div>
        </div>
      </section>

      {/* FIGHTER GRID */}
      <main className="py-20 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDivision}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredBoxers.map((boxer, idx) => (
                <FighterCard key={boxer.id} boxer={boxer} idx={idx} onClick={() => setSelectedBoxer(boxer)} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredBoxers.length === 0 && (
            <div className="py-40 text-center">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-500">No fighters found. Try a different search term.</h3>
            </div>
          )}
        </div>
      </main>

      {/* CTA SECTION */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">READY TO JOIN THE SQUAD?</h2>
          <p className="text-xl text-slate-500 mb-10 leading-relaxed">
            We are always looking for dedicated talent to join our development program.
            Book an assessment session with our head coaches today.
          </p>
          <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-2xl transition-all shadow-xl shadow-blue-500/20">
            Book Your Assessment
          </button>
        </div>
      </section>

      {/* CENTERED MODAL */}
      <AnimatePresence>
        {selectedBoxer && <FighterModal boxer={selectedBoxer} onClose={() => setSelectedBoxer(null)} />}
      </AnimatePresence>
    </div>
  );
};

const TabButton = ({ active, onClick, label, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 py-6 px-4 border-b-2 font-bold text-sm transition-all ${active
        ? "border-blue-600 text-blue-600"
        : "border-transparent text-slate-500 hover:text-slate-900"
      }`}
  >
    <Icon className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
    {label}
  </button>
);

const FighterCard = ({ boxer, idx, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
  >
    <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
      <img
        src={boxer.image}
        alt={boxer.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">
          {boxer.weight}
        </span>
        {boxer.category === 'professional' && (
          <span className="px-3 py-1 bg-blue-600 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">
            PRO
          </span>
        )}
      </div>
    </div>

    <div className="p-8">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-black text-slate-900">{boxer.name}</h3>
        <span className="text-blue-600 font-bold text-xs uppercase italic">"{boxer.nickname}"</span>
      </div>
      <p className="text-slate-500 font-medium text-sm mb-6 flex items-center gap-1">
        <MapPin className="w-3 h-3" />
        {boxer.nationality} • {boxer.hometown}
      </p>

      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <div className="flex flex-col">
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Record</span>
          <span className="text-xl font-black text-slate-900 tracking-tighter">{boxer.record}</span>
        </div>
        <button className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.div>
);

const FighterModal = ({ boxer, onClose }) => (
  <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      className="relative w-full max-w-4xl bg-white rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
    >
      <button onClick={onClose} className="absolute top-6 right-6 z-10 p-2 bg-slate-100 rounded-full hover:bg-slate-200 text-slate-900 transition-colors">
        <X className="w-6 h-6" />
      </button>

      <div className="grid md:grid-cols-2">
        <div className="h-[400px] md:h-auto overflow-hidden">
          <img src={boxer.image} alt={boxer.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-10 lg:p-14">
          <div className="mb-8">
            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-2 block">
              {boxer.category === 'professional' ? 'PRO DIVISION' : 'AMATEUR PROSPECT'}
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-1 leading-tight">{boxer.name}</h2>
            <p className="text-lg text-slate-500 font-bold italic">"{boxer.nickname}"</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <ModalStat label="Weight Class" value={boxer.weight} icon={Trophy} />
            <ModalStat label="Official Record" value={boxer.record} icon={Activity} />
            <ModalStat label="Height" value={boxer.stats.height} icon={Target} />
            <ModalStat label="Hometown" value={boxer.hometown} icon={Globe} />
          </div>

          <div className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Biography</h4>
            <p className="text-slate-600 leading-relaxed font-medium">{boxer.bio}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Major Achievements</h4>
            <div className="space-y-3">
              {boxer.achievements.map((acc, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold text-slate-900">{acc}</span>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full mt-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm uppercase tracking-widest rounded-2xl shadow-xl transition-all">
            Book Assessment Session
          </button>
        </div>
      </div>
    </motion.div>
  </div>
);

const ModalStat = ({ label, value, icon: Icon }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
      <p className="text-sm font-black text-slate-900">{value}</p>
    </div>
  </div>
);

export default BoxersPage;
