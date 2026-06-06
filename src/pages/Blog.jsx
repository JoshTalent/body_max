import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  TrendingUp,
  Heart,
  Dumbbell,
  Utensils,
  Users,
  BookOpen,
  Filter,
  Mail,
  Zap,
  Star,
  Hash,
  X
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [activePost, setActivePost] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://bodymax-bc-backend.onrender.com/api/blog?limit=100");
        const resData = await response.json();
        if (resData.success && resData.data && resData.data.length > 0) {
          setPosts(resData.data);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const renderBlogStory = (post) => {
    if (post.content) {
      return (
        <div className="space-y-6 text-slate-700">
          {post.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      );
    }
    
    return (
      <div className="space-y-6 text-slate-700">
        <p className="leading-relaxed italic text-slate-500">
          Full article content coming soon. Stay tuned for more insights from our coaching team!
        </p>
      </div>
    );
  };

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "fitness", name: "Fitness & Weight Loss" },
    { id: "technique", name: "Boxing Technique" },
    { id: "nutrition", name: "Nutrition" },
    { id: "success", name: "Success Stories" },
    { id: "beginners", name: "Beginner Guides" },
  ];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case "fitness":
        return TrendingUp;
      case "technique":
        return Dumbbell;
      case "nutrition":
        return Utensils;
      case "success":
        return Heart;
      case "beginners":
        return Users;
      default:
        return TrendingUp;
    }
  };

  if (isLoading) {
    return (
      <div ref={contentRef} className="bg-[#f8fafc] min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-600 font-medium">Loading insights...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div ref={contentRef} className="bg-[#f8fafc] min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[10001] h-[3px] bg-slate-200">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      <Navbar />

      {/* MODERN LIGHT-THEMED SPLIT HERO */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-white border-b border-slate-100 py-16">
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Branding & Search */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/5 border border-blue-500/10 rounded-full">
                <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span className="text-blue-700 font-black text-[10px] uppercase tracking-[0.3em]">
                  The Knowledge Hub
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter">
                BODYMAX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  INSIGHTS.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
                Unlock your full potential with expert-led training techniques,
                high-performance nutrition, and the raw stories that define
                our championship culture.
              </p>

              {/* Advanced Light-Themed Search Bar */}
              <div className="relative max-w-xl shadow-xl shadow-slate-100/80 rounded-2xl border border-slate-200/60 bg-white p-2">
                <div className="flex items-center">
                  <div className="pl-4 pr-2">
                    <Search className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="SEARCH ARTICLES, TECHNIQUES, GUIDES..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent text-slate-900 py-4 px-2 focus:outline-none font-bold text-[10px] tracking-[0.15em] placeholder:text-slate-400 uppercase"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />

              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 aspect-[4/3]">
                <img
                  src={posts[0]?.image || "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1000&auto=format&fit=crop"}
                  alt="Boxing training"
                  className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 text-white p-5 rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-2xl">
                  <Dumbbell className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Total Articles</p>
                  <p className="text-xl font-black uppercase tracking-wider">{posts.length}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Light Animated Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-10 bg-gradient-to-b from-blue-600 to-transparent" />
          <span className="text-[8px] font-black text-slate-400 tracking-[0.4em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="py-24 relative">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* STICKY SIDEBAR */}
            <aside className="lg:w-1/4 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-32 space-y-12"
              >
                {/* View Mode Toggle */}
                <div className="bg-white rounded-[2rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="flex p-1 bg-slate-100 rounded-2xl">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${viewMode === "grid" ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      GRID VIEW
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${viewMode === "list" ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-900"
                        }`}
                    >
                      LIST VIEW
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2">
                    <h3 className="text-[10px] font-black text-slate-900 tracking-[0.3em] uppercase">Categories</h3>
                    <Filter className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => {
                      const Icon = getCategoryIcon(category.id);
                      const postCount = posts.filter(
                        (post) => post.category === category.id,
                      ).length;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id === "all" ? "All" : category.id)}
                          className={`flex items-center justify-between p-4 rounded-2xl transition-all border group ${(selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                              ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20"
                              : "bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 transition-colors ${(selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                                ? "text-blue-400"
                                : "text-slate-400 group-hover:text-blue-500"
                              }`} />
                            <span className="text-[10px] font-black tracking-widest uppercase">{category.name}</span>
                          </div>
                          <span className={`text-[8px] font-black px-2 py-1 rounded-lg ${(selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                              ? "bg-white/10 text-white"
                              : "bg-slate-100 text-slate-400"
                            }`}>
                            {category.id === "all" ? posts.length : postCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Newsletter Section */}
                <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                  <Star className="w-8 h-8 text-white/20 mb-6" />
                  <h4 className="text-2xl font-black leading-tight mb-4 tracking-tighter">Join the <br />Pro Inner Circle</h4>
                  <p className="text-blue-100 text-[10px] font-medium leading-relaxed mb-8 tracking-widest uppercase opacity-80">Get exclusive training drills and nutrition plans delivered weekly.</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-blue-900/20"
                  >
                    SUBSCRIBE NOW
                  </motion.button>
                </div>
              </motion.div>
            </aside>

            {/* BLOG FEED */}
            <main className="lg:w-3/4">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
                    {selectedCategory === "All" ? "Latest Insights" : `${selectedCategory} GUIDES`}
                  </h2>
                  <p className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase mt-2">
                    Showing {filteredPosts.length} professional resources
                  </p>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Verified by Elite Coaches</span>
                </div>
              </div>

              {/* GRID VIEW */}
              <AnimatePresence mode="wait">
                {viewMode === "grid" ? (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                  >
                    {filteredPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 overflow-hidden flex flex-col"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute top-6 right-6">
                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 shadow-lg">
                              <Hash className="w-3 h-3 text-blue-600" />
                              <span className="text-[8px] font-black text-slate-900 uppercase tracking-widest">{post.category}</span>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="p-10 flex-1 flex flex-col">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <Calendar className="w-3 h-3 text-blue-500" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                              <Clock className="w-3 h-3 text-blue-500" />
                              <span>{post.readTime || "5 min read"}</span>
                            </div>
                          </div>

                          <h3 className="text-2xl font-black text-slate-950 mb-4 leading-tight tracking-tighter group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>

                          <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                                <User className="w-4 h-4 text-slate-400" />
                              </div>
                              <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{post.author}</span>
                            </div>
                            <button
                              onClick={() => setActivePost(post)}
                              className="flex items-center gap-2 text-blue-600 font-black text-[10px] tracking-widest uppercase hover:translate-x-2 transition-transform"
                            >
                              READ STORY <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                ) : (
                  /* LIST VIEW */
                  <motion.div
                    key="list"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {filteredPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                          <div className="md:w-2/3 p-10">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border border-blue-100">
                                {post.category}
                              </span>
                              <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString()}</span>
                                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime || "5 min read"}</span>
                              </div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">{post.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                              <span className="text-[10px] font-black text-slate-900 tracking-widest uppercase">{post.author}</span>
                              <button
                                onClick={() => setActivePost(post)}
                                className="flex items-center gap-2 text-blue-600 font-black text-[10px] tracking-widest uppercase group-hover:translate-x-2 transition-transform"
                              >
                                READ STORY <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
                  <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tighter uppercase">No Results Found</h3>
                  <p className="text-slate-400 text-[10px] font-black tracking-widest uppercase">Try adjusting your search or filters</p>
                  <button
                    onClick={() => { setSearchTerm(""); setSelectedCategory("All") }}
                    className="mt-8 px-8 py-4 bg-slate-950 text-white rounded-2xl font-black text-[10px] tracking-widest hover:bg-blue-600 transition-all"
                  >
                    RESET ALL FILTERS
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* PREMIUM NEWSLETTER CTA */}
      <section className="py-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img
                src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 to-transparent" />
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/20 border border-blue-500/20 rounded-full mb-8">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">Stay Ahead of the Game</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                LEVEL UP YOUR <br />
                <span className="text-blue-500">TRAINING IQ.</span>
              </h2>

              <p className="text-xl text-slate-400 mb-12 font-medium">
                Subscribe to our newsletter for exclusive technical breakdowns,
                advanced metabolic training, and early access to club events.
              </p>

              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  className="flex-1 bg-white/5 border border-white/10 text-white px-8 py-6 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-black text-[10px] tracking-widest placeholder:text-slate-600"
                />
                <button className="bg-blue-600 text-white px-10 py-6 rounded-3xl font-black text-[10px] tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-2xl shadow-blue-600/20">
                  GET ACCESS
                </button>
              </form>

              <p className="mt-8 text-[8px] font-black text-slate-600 tracking-[0.3em] uppercase">
                Zero spam. Only elite-level content. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM BLOG READ STORY MODAL */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePost(null)}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col relative"
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-all border border-white/10 group shadow-lg"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              <div className="overflow-y-auto flex-1 scroll-smooth">
                <div className="relative h-64 sm:h-96 w-full">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white px-4 py-1.5 rounded-xl text-[8px] font-black uppercase tracking-widest mb-4 border border-blue-500/20">
                      <Hash size={10} />
                      {activePost.category}
                    </span>
                    <h2 className="text-2xl sm:text-5xl font-black text-white leading-tight tracking-tighter uppercase mb-4 drop-shadow-md">
                      {activePost.title}
                    </h2>

                    <div className="flex flex-wrap items-center gap-6 text-[10px] font-black text-slate-300 uppercase tracking-widest">
                      <span className="flex items-center gap-2">
                        <Calendar size={12} className="text-blue-400" />
                        {new Date(activePost.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-blue-400" />
                        {activePost.readTime || "5 min read"}
                      </span>
                      <span className="flex items-center gap-2">
                        <User size={12} className="text-blue-400" />
                        {activePost.author}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-12 space-y-8 text-slate-700 leading-relaxed text-base">
                  <p className="text-lg font-semibold text-slate-900 border-l-4 border-blue-600 pl-4 italic bg-slate-50 py-4 pr-4 rounded-r-2xl">
                    "{activePost.excerpt}"
                  </p>

                  {renderBlogStory(activePost)}
                </div>

                <div className="bg-slate-50 px-6 py-8 sm:px-12 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Written By</p>
                      <h5 className="text-sm font-black text-slate-900 uppercase tracking-wide">{activePost.author}</h5>
                    </div>
                  </div>

                  <button
                    onClick={() => setActivePost(null)}
                    className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] tracking-widest hover:bg-blue-600 transition-all uppercase"
                  >
                    Close Story
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Blog;