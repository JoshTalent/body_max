import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Trophy,
  Users,
  Award,
  Dumbbell,
  ArrowRight,
  ChevronRight,
  Search,
  X,
  Sparkles,
  Share2,
  Bell,
  CheckCircle,
  Mail,
  User,
  Ticket,
  Grid,
  List,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import axios from "axios";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("upcoming"); // 'upcoming' or 'past'
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("strip"); // 'strip' (horizontal card) or 'roster' (table list)
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  // Advanced Interactive RSVP states
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [ticketRef, setTicketRef] = useState("");

  const API_BASE_URL = "https://bodymax-bc-backend.onrender.com/api";

  const categoriesList = [
    { id: "all", name: "All Showdowns", icon: Compass },
    { id: "fight-night", name: "Fight Nights", icon: Trophy },
    { id: "training-seminar", name: "Training Seminars", icon: Dumbbell },
    { id: "club-event", name: "Club Events", icon: Users },
    { id: "championship", name: "Championships", icon: Award },
  ];

  const categories = {
    "fight-night": { name: "Fight Night", icon: Trophy, color: "text-red-600 bg-red-50 border-red-100" },
    "training-seminar": { name: "Training Seminar", icon: Dumbbell, color: "text-blue-600 bg-blue-50 border-blue-100" },
    "club-event": { name: "Club Event", icon: Users, color: "text-purple-600 bg-purple-50 border-purple-100" },
    "championship": { name: "Championship", icon: Award, color: "text-amber-600 bg-amber-50 border-amber-100" },
  };

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/events?status=published`);
        if (response.data.success) {
          setEvents(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  // Filter events based on active tab, search, and category
  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const isUpcoming = eventDate >= today;
    const tabMatch = activeTab === "upcoming" ? isUpcoming : !isUpcoming;

    const categoryMatch = selectedCategory === "all" || event.category === selectedCategory;

    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());

    return tabMatch && categoryMatch && matchesSearch;
  });

  // Calculate next spotlight event (absolute soonest upcoming featured or normal event)
  const spotlightEvent = events
    .filter((e) => new Date(e.date) >= new Date().setHours(0, 0, 0, 0))
    .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

  const getCatDetails = (catId) => {
    return categories[catId] || { name: "Fight Night", icon: Trophy, color: "text-red-600 bg-red-50 border-red-100" };
  };

  const openDetails = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    setRegisterSuccess(false);
    setBookingName("");
    setBookingEmail("");
    setTicketRef("");
    document.body.style.overflow = "hidden";
  };

  const closeDetails = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = "unset";
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail) return;

    setIsRegistering(true);
    setTimeout(() => {
      setIsRegistering(false);
      const randomRef = `BM-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
      setTicketRef(randomRef);
      setRegisterSuccess(true);
    }, 1200);
  };

  // Date Formatter
  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    return {
      month: dateObj.toLocaleDateString("en-US", { month: "short" }),
      day: dateObj.getDate(),
      weekday: dateObj.toLocaleDateString("en-US", { weekday: "short" }),
      full: dateObj.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Spotlight Section */}
      <section className="relative pt-32 pb-16 bg-white border-b border-slate-100 overflow-hidden">
        {/* Background grids */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-70"></div>
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-blue-50/50 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[24rem] h-[24rem] bg-indigo-50/40 rounded-full blur-3xl translate-y-16 -translate-x-16 opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 font-bold text-[10px] uppercase tracking-widest"
              >
                <Sparkles size={12} className="animate-pulse" />
                <span>Rwanda's Elite Boxing League</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]"
              >
                Experience the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ultimate Showdowns</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
              >
                Witness intense championship ringside action, training masterclasses led by elite fighters, and amateur sparring galas. Complete schedules, bookings, and live fight cards inside Rwanda's premier club.
              </motion.p>

              {/* Quick stats indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="grid grid-cols-3 gap-4 pt-4 max-w-md border-t border-slate-100"
              >
                {[
                  { value: "Fight Nights", label: "Monthly Bouts" },
                  { value: "Elite Coaches", label: "Guest Lectures" },
                  { value: "Open Spots", label: "RSVP Active" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-sm font-black text-slate-900 leading-none">{stat.value}</p>
                    <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1.5">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Next Spotlight Event Card */}
            <div className="lg:col-span-5">
              {spotlightEvent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", damping: 25 }}
                  onClick={() => openDetails(spotlightEvent)}
                  className="bg-black text-white rounded-3rem p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden group cursor-pointer border border-white/5 hover:border-blue-500/30 transition-all duration-500"
                >
                  {/* Spotlight background graphics */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700" 
                    style={{ backgroundImage: `url(${spotlightEvent.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/30"></div>

                  <div className="relative space-y-6 flex flex-col h-full justify-between min-h-[300px]">
                    <div className="flex justify-between items-start">
                      <span className="px-3.5 py-1.5 bg-amber-500/10 text-amber-400 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-amber-500/30">
                        <Sparkles size={10} className="animate-spin text-amber-400" />
                        Next Spotlight
                      </span>
                      <div className="bg-black/55 backdrop-blur-md px-3.5 py-2.5 rounded-2xl flex flex-col items-center justify-center min-w-[3.2rem] border border-white/10">
                        <span className="text-[9px] text-blue-400 font-black uppercase tracking-widest">{formatDate(spotlightEvent.date).month}</span>
                        <span className="text-lg font-black text-white leading-none mt-0.5">{formatDate(spotlightEvent.date).day}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest flex items-center gap-1">
                        <Trophy size={12} className="text-blue-400" />
                        {getCatDetails(spotlightEvent.category).name}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                        {spotlightEvent.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-blue-500" />{spotlightEvent.time.split("-")[0]}</span>
                        <span className="flex items-center gap-1.5 truncate"><MapPin size={14} className="text-blue-500" />{spotlightEvent.location.split(",")[0]}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-bold">
                      <span className="flex items-center gap-1.5 group-hover:text-blue-300 transition-colors">
                        Secure Admission Pass
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="w-full h-80 rounded-3rem bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center text-slate-400 shadow-xl">
                  <Calendar className="text-slate-600 mb-3" size={32} />
                  <p className="text-sm font-semibold text-slate-400">All showdowns registered</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Control & Filtering Panel */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-16 z-[100] shadow-sm shadow-slate-100/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
            
            {/* Search and Timeframe Tab */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
              {/* Glassmorphic Tabs */}
              <div className="flex gap-1.5 p-1 bg-slate-100 rounded-xl w-full sm:w-auto font-medium">
                {[
                  { id: "upcoming", label: "Upcoming" },
                  { id: "past", label: "Completed" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white text-blue-600 shadow-sm font-black scale-105"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* View Switchers */}
              <div className="flex gap-1 p-1 bg-slate-100 rounded-xl">
                <button
                  onClick={() => setViewMode("strip")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "strip" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
                  }`}
                  title="Widescreen Strip View"
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("roster")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "roster" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-900"
                  }`}
                  title="Minimalist Table Roster View"
                >
                  <List size={16} />
                </button>
              </div>

              {/* Search */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Filter by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:border-blue-500 transition-all focus:bg-white"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto w-full xl:w-auto pb-2 xl:pb-0 scrollbar-none">
              {categoriesList.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                
                // Count items matching this category and current tab
                const count = events.filter((e) => {
                  const eventDate = new Date(e.date);
                  const isUpcoming = eventDate >= new Date().setHours(0, 0, 0, 0);
                  const tabMatch = activeTab === "upcoming" ? isUpcoming : !isUpcoming;
                  return tabMatch && (cat.id === "all" || e.category === cat.id);
                }).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-900/10"
                        : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
                    }`}
                  >
                    <Icon size={14} className={isSelected ? "text-blue-400" : "text-slate-400"} />
                    <span>{cat.name}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-black ${isSelected ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Main Roster Body */}
      <section className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        {isLoading ? (
          <div className="py-24 text-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-slate-500 font-semibold uppercase tracking-wider text-sm">Gathering fighting rosters...</p>
          </div>
        ) : filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center bg-white rounded-3rem border border-slate-100 shadow-sm"
          >
            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900">No Events Discovered</h3>
            <p className="text-slate-500 font-medium text-sm mt-2 max-w-sm mx-auto leading-relaxed">
              We couldn't find any match schedules for this category or filter. Check back soon for fresh registrations!
            </p>
          </motion.div>
        ) : viewMode === "strip" ? (
          /* STRIP VIEW: Widescreen Horizontal Split Card layout (Premium & Clean) */
          <div className="space-y-6">
            {filteredEvents.map((event, index) => {
              const formattedDate = formatDate(event.date);
              const catDetails = getCatDetails(event.category);
              const CatIcon = catDetails.icon;

              return (
                <motion.div
                  key={event.id || event._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => openDetails(event)}
                  className="bg-white rounded-2xl md:rounded-3rem border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all cursor-pointer flex flex-col md:flex-row items-center p-5 md:p-6 gap-6 relative group overflow-hidden"
                >
                  {/* Left Date indicator */}
                  <div className="flex-shrink-0 flex md:flex-col items-center justify-center text-center p-3 md:p-4 bg-slate-50 rounded-2xl min-w-[120px] md:min-w-[140px] border border-slate-100">
                    <span className="text-lg md:text-3xl font-black text-slate-900 leading-none">{formattedDate.day}</span>
                    <span className="text-xs font-black uppercase text-blue-600 tracking-wider md:mt-1 ml-2 md:ml-0">{formattedDate.month}</span>
                    <span className="text-[10px] text-slate-400 font-semibold md:mt-1 ml-2 md:ml-0">{formattedDate.weekday}</span>
                  </div>

                  {/* Middle widescreen image */}
                  <div className="w-full md:w-56 aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden relative flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/600x400?text=Event+Image";
                      }}
                    />
                  </div>

                  {/* Right description column */}
                  <div className="flex-1 min-w-0 space-y-2 text-left pr-0 md:pr-8">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border inline-flex items-center gap-1 bg-white shadow-sm ${catDetails.color}`}>
                        <CatIcon size={10} />
                        {catDetails.name}
                      </span>
                    </div>

                    <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-slate-500 font-medium text-xs line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-slate-400 font-semibold pt-1">
                      <span className="flex items-center gap-1.5"><Clock size={13} className="text-blue-500" />{event.time}</span>
                      <span className="flex items-center gap-1.5 truncate"><MapPin size={13} className="text-blue-500" />{event.location}</span>
                    </div>
                  </div>

                  {/* End Chevron Register indicator */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-slate-50 group-hover:bg-blue-600 group-hover:text-white rounded-full transition-all text-slate-400 shadow-sm border border-slate-100">
                    <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* ROSTER VIEW: Minimalist Table List layout (Extremely Clean) */
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-[10px] text-slate-400 font-black uppercase tracking-widest border-b border-slate-100">
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Showdown / Title</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Venue & Time</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold text-xs">
                  {filteredEvents.map((event) => {
                    const dateDetails = formatDate(event.date);
                    const catDetails = getCatDetails(event.category);
                    const CatIcon = catDetails.icon;

                    return (
                      <tr
                        key={event.id || event._id}
                        onClick={() => openDetails(event)}
                        className="hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <td className="px-6 py-4.5 whitespace-nowrap text-slate-900">
                          <span className="font-extrabold">{dateDetails.day} {dateDetails.month}</span>
                          <span className="text-[10px] text-slate-400 ml-1.5">{dateDetails.weekday}</span>
                        </td>
                        <td className="px-6 py-4.5 text-slate-900 font-bold max-w-xs truncate group-hover:text-blue-600 transition-colors">
                          {event.title}
                        </td>
                        <td className="px-6 py-4.5 whitespace-nowrap">
                          <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border inline-flex items-center gap-1 bg-white shadow-sm ${catDetails.color}`}>
                            <CatIcon size={10} />
                            {catDetails.name}
                          </span>
                        </td>
                        <td className="px-6 py-4.5 text-slate-500 font-medium">
                          <div className="flex items-center gap-1.5 truncate max-w-[200px]" title={event.location}>
                            <MapPin size={12} className="text-slate-400 flex-shrink-0" />
                            <span>{event.location.split(",")[0]}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mt-1">
                            <Clock size={10} />
                            <span>{event.time.split("-")[0]}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4.5 text-right whitespace-nowrap">
                          <span className="text-blue-600 font-bold hover:underline inline-flex items-center gap-1">
                            Details
                            <ArrowUpRight size={12} />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {/* Details Dialog Drawer (NEW MODAL VIEW: RIGHT SIDE-SLIDER PANEL) */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <div className="fixed inset-0 z-[999999] flex justify-end overflow-hidden">
            {/* Background Backdrop Glass Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetails}
              className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            />

            {/* Sliding Righthand Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full sm:w-[500px] bg-white h-full shadow-2xl flex flex-col z-10 border-l border-slate-100"
            >
              {/* Drawer Close Button */}
              <button
                onClick={closeDetails}
                className="absolute top-4 left-4 z-50 p-2.5 bg-slate-900/60 hover:bg-slate-900/80 rounded-full text-white transition-colors shadow-md backdrop-blur-sm"
              >
                <X size={18} />
              </button>

              {/* Cover image header */}
              <div className="relative h-64 bg-slate-900 flex-shrink-0">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                {/* Floating tags */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="px-2.5 py-1 bg-blue-600/90 backdrop-blur-sm rounded-lg text-[9px] font-black uppercase tracking-widest border border-blue-400/20 inline-block mb-2">
                    {getCatDetails(selectedEvent.category).name}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    {selectedEvent.title}
                  </h2>
                </div>
              </div>

              {/* Scrollable Information Body */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
                
                {/* Meta schedule details list */}
                <div className="grid grid-cols-3 gap-3 border-b border-slate-100 pb-5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <Calendar className="text-blue-600 mx-auto" size={16} />
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1.5">Date</p>
                    <p className="text-[11px] font-extrabold text-slate-800 mt-0.5 leading-none">{formatDate(selectedEvent.date).month} {formatDate(selectedEvent.date).day}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <Clock className="text-blue-600 mx-auto" size={16} />
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1.5">Time</p>
                    <p className="text-[11px] font-extrabold text-slate-800 mt-0.5 leading-none">{selectedEvent.time.split("-")[0]}</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <MapPin className="text-blue-600 mx-auto" size={16} />
                    <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1.5">Venue</p>
                    <p className="text-[11px] font-extrabold text-slate-800 mt-0.5 leading-none truncate">{selectedEvent.location.split(",")[0]}</p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-none">Overview</h4>
                  <p className="text-slate-600 font-medium leading-relaxed text-xs whitespace-pre-line">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Full Location details info */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <h5 className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Venue Address</h5>
                  <p className="text-xs font-bold text-slate-800">{selectedEvent.location}</p>
                </div>

                {/* ADVANCED RSVP TICKETING ENGINE */}
                <div className="pt-6 border-t border-slate-100">
                  {activeTab === "upcoming" ? (
                    <div>
                      {registerSuccess ? (
                        /* Modern Admission Ticket component */
                        <motion.div
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-xl p-5 shadow-xl relative overflow-hidden border border-slate-800"
                        >
                          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                          
                          {/* Ticket header */}
                          <div className="flex justify-between items-start border-b border-white/10 pb-3 mb-3">
                            <div className="flex items-center gap-1.5">
                              <Ticket className="text-blue-400" size={16} />
                              <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">Admission Pass</span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-blue-400">{ticketRef}</span>
                          </div>

                          {/* Ticket Grid content */}
                          <div className="grid grid-cols-2 gap-3 text-[11px] mb-3">
                            <div>
                              <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest leading-none">Attendee</p>
                              <p className="font-bold text-slate-100 mt-1 truncate">{bookingName}</p>
                            </div>
                            <div>
                              <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest leading-none">Event Category</p>
                              <p className="font-bold text-slate-100 mt-1 capitalize">{selectedEvent.category.replace("-", " ")}</p>
                            </div>
                            <div>
                              <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest leading-none">Venue</p>
                              <p className="font-bold text-slate-100 mt-1 truncate">{selectedEvent.location.split(",")[0]}</p>
                            </div>
                            <div>
                              <p className="text-[8px] text-slate-400 font-black uppercase tracking-widest leading-none">Pass Issued</p>
                              <p className="font-bold text-slate-100 mt-1 flex items-center gap-1">
                                <CheckCircle className="text-emerald-400" size={10} />
                                <span>Confirmed</span>
                              </p>
                            </div>
                          </div>

                          {/* Coupon dashed divide cutouts */}
                          <div className="relative border-t border-dashed border-white/20 pt-3 flex justify-between items-center text-[9px] text-slate-400">
                            <span>Show pass at entrance.</span>
                            <span className="font-mono text-white/50">{formatDate(selectedEvent.date).full}</span>
                            <div className="absolute -left-7 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                            <div className="absolute -right-7 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                          </div>
                        </motion.div>
                      ) : (
                        /* Advanced Booking details form input */
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <Bell className="text-blue-600 animate-pulse" size={14} />
                            <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">
                              Secure Spot / RSVP Ticket
                            </h4>
                          </div>

                          <form onSubmit={handleRegister} className="space-y-3">
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
                              <input
                                type="text"
                                placeholder="Attendee Full Name"
                                value={bookingName}
                                onChange={(e) => setBookingName(e.target.value)}
                                required
                                className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-4 py-2 text-xs font-semibold focus:outline-none focus:border-blue-500 transition-colors"
                              />
                            </div>

                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={12} />
                              <input
                                type="email"
                                placeholder="Email Address"
                                value={bookingEmail}
                                onChange={(e) => setBookingEmail(e.target.value)}
                                required
                                className="w-full bg-white border border-slate-200 rounded-lg pl-8 pr-4 py-2 text-xs font-semibold focus:outline-none focus:border-blue-500 transition-colors"
                              />
                            </div>

                            <motion.button
                              type="submit"
                              disabled={isRegistering}
                              whileHover={!isRegistering ? { scale: 1.02 } : {}}
                              whileTap={!isRegistering ? { scale: 0.98 } : {}}
                              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-400 disabled:to-blue-400 text-white rounded-lg py-2.5 font-bold text-[10px] shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
                            >
                              {isRegistering ? (
                                <>
                                  <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  <span>Generating Spot Pass...</span>
                                </>
                              ) : (
                                <span>Confirm Spot & Get Pass</span>
                              )}
                            </motion.button>
                          </form>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Past showdown complete banner */
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-center">
                      <Trophy className="text-amber-500 mx-auto mb-1.5" size={20} />
                      <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest leading-none">Showdown Concluded</h4>
                      <p className="text-slate-400 font-semibold text-[10px] mt-1.5 max-w-xs mx-auto leading-normal">
                        Amateur rounds, guest seminars, and fight results are posted directly on our press blog and media gallery lists.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventsPage;
