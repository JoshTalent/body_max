import React, { useState } from "react";
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
  ChevronRight,
  Mail,
  Zap,
  Star,
  Hash
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const categories = [
    { id: "all", name: "All Articles" },
    { id: "fitness", name: "Fitness & Weight Loss" },
    { id: "technique", name: "Boxing Technique" },
    { id: "nutrition", name: "Nutrition" },
    { id: "success", name: "Success Stories" },
    { id: "beginners", name: "Beginner Guides" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Benefits of Boxing for Weight Loss",
      excerpt:
        "Discover how boxing can help you burn up to 800 calories per session while building lean muscle and boosting metabolism.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-20",
      image: "https://i.postimg.cc/YCjZBPJf/Screenshot_2026_03_01_170658.png",
      featured: true,
      slug: "boxing-weight-loss-benefits",
    },
    {
      id: 2,
      title: "How to Properly Wrap Your Hands: A Step-by-Step Guide",
      excerpt:
        "Learn the correct way to wrap your hands to prevent injuries and maximize punching power during training.",
      category: "technique",
      readTime: "4 min read",
      author: "ALI The Coach",
      date: "2024-01-18",
      image: "https://i.postimg.cc/DwmH3N9n/Screenshot_2026_03_01_170739.png",
      featured: true,
      slug: "how-to-wrap-hands",
    },
    {
      id: 3,
      title: "Nutrition Tips for Boxers: Fueling Your Training",
      excerpt:
        "Essential nutrition strategies to optimize performance, recovery, and weight management for boxers.",
      category: "nutrition",
      readTime: "6 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-15",
      image: "https://i.postimg.cc/zXx6MNPR/Screenshot_2026_03_01_170810.png",
      featured: false,
      slug: "nutrition-tips-for-boxers",
    },
    {
      id: 4,
      title: "Meet Marie: From Beginner to National Competitor in 18 Months",
      excerpt:
        "Inspiring journey of how Marie transformed her life through boxing and became a national-level competitor.",
      category: "success",
      readTime: "8 min read",
      author: "Jean Claude",
      date: "2024-01-12",
      image: "https://i.postimg.cc/FsT8qvnK/Screenshot_2026_03_01_171211.png",
      featured: true,
      slug: "marie-success-story",
    },
    {
      id: 5,
      title: "What to Expect in Your First Boxing Class",
      excerpt:
        "A complete guide for beginners on what to bring, what to wear, and what happens during your first boxing session.",
      category: "beginners",
      readTime: "4 min read",
      author: "David Rodriguez",
      date: "2024-01-10",
      image: "https://i.postimg.cc/Kv0wVbs0/Screenshot_2026_03_01_171313.png",
      featured: false,
      slug: "first-boxing-class-guide",
    },
    {
      id: 6,
      title: "The Mental Benefits of Boxing: More Than Just Physical",
      excerpt:
        "Explore how boxing training can reduce stress, build confidence, and improve mental resilience.",
      category: "fitness",
      readTime: "5 min read",
      author: "Alice Kamali",
      date: "2024-01-08",
      image: "https://i.postimg.cc/zXx6MNPd/Screenshot_2026_03_01_171657.png",
      featured: false,
      slug: "mental-benefits-of-boxing",
    },
    {
      id: 7,
      title: "Essential Boxing Equipment for Beginners",
      excerpt:
        "Your complete checklist of must-have boxing gear and what to look for when making purchases.",
      category: "beginners",
      readTime: "6 min read",
      author: "ALI The Coach",
      date: "2024-01-05",
      image: "https://i.postimg.cc/wv6DS1vD/Screenshot_2026_03_01_174550.png",
      featured: false,
      slug: "beginner-boxing-equipment",
    },
    {
      id: 8,
      title: "Recovery Strategies for Boxers: Maximize Your Gains",
      excerpt:
        "Learn proper recovery techniques including stretching, nutrition, and rest to improve performance.",
      category: "fitness",
      readTime: "7 min read",
      author: "Sophie Niyonsaba",
      date: "2024-01-03",
      image: "https://i.postimg.cc/fyymR1YW/Screenshot_2026_03_01_174723.png",
      featured: false,
      slug: "boxing-recovery-strategies",
    },
  ];

  const popularPosts = blogPosts.filter((post) => post.featured).slice(0, 3);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
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

  return (
    <div className="bg-[#f8fafc] min-h-screen font-poppins">
      <Navbar />

      {/* MODERN CINEMATIC HERO */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop"
            alt="Boxing Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950/20" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600/10 backdrop-blur-md border border-blue-500/20 rounded-full">
                <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />
                <span className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em]">
                  The Knowledge Hub
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                BODYMAX <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  INSIGHTS.
                </span>
              </h1>

              <p className="text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
                Unlock your full potential with expert-led training techniques, 
                high-performance nutrition, and the raw stories that define 
                our championship culture.
              </p>

              {/* Advanced Search Bar */}
              <div className="relative max-w-2xl mt-12 pt-4">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="SEARCH ARTICLES, TECHNIQUES, GUIDES..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 text-white pl-16 pr-8 py-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-black text-[10px] tracking-[0.2em] placeholder:text-slate-500"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
          <span className="text-[8px] font-black text-slate-500 tracking-[0.4em] uppercase">Scroll</span>
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
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                        viewMode === "grid" ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      GRID VIEW
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-black tracking-widest transition-all ${
                        viewMode === "list" ? "bg-white text-blue-600 shadow-md" : "text-slate-500 hover:text-slate-900"
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
                      const postCount = blogPosts.filter(
                        (post) => post.category === category.id,
                      ).length;
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id === "all" ? "All" : category.id)}
                          className={`flex items-center justify-between p-4 rounded-2xl transition-all border group ${
                            (selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                              ? "bg-slate-900 border-slate-900 text-white shadow-xl shadow-slate-900/20"
                              : "bg-white border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-blue-50/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon className={`w-4 h-4 transition-colors ${
                              (selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                                ? "text-blue-400"
                                : "text-slate-400 group-hover:text-blue-500"
                            }`} />
                            <span className="text-[10px] font-black tracking-widest uppercase">{category.name}</span>
                          </div>
                          <span className={`text-[8px] font-black px-2 py-1 rounded-lg ${
                            (selectedCategory === "All" && category.id === "all") || selectedCategory === category.id
                              ? "bg-white/10 text-white"
                              : "bg-slate-100 text-slate-400"
                          }`}>
                            {category.id === "all" ? blogPosts.length : postCount}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Trending Section */}
                <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-700" />
                  <Star className="w-8 h-8 text-white/20 mb-6" />
                  <h4 className="text-2xl font-black leading-tight mb-4 tracking-tighter">Join the <br />Pro Inner Circle</h4>
                  <p className="text-blue-100 text-[10px] font-medium leading-relaxed mb-8 tracking-widest uppercase opacity-80">Get exclusive training drills and nutrition plans delivered weekly.</p>
                  <button className="w-full bg-white text-blue-600 py-4 rounded-2xl font-black text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-blue-900/20">
                    SUBSCRIBE NOW
                  </button>
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
                              <span>{post.readTime}</span>
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
                            <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] tracking-widest uppercase hover:translate-x-2 transition-transform">
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
                                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
                              </div>
                            </div>
                            <h3 className="text-3xl font-black text-slate-950 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">{post.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                              <span className="text-[10px] font-black text-slate-900 tracking-widest uppercase">{post.author}</span>
                              <button className="flex items-center gap-2 text-blue-600 font-black text-[10px] tracking-widest uppercase group-hover:translate-x-2 transition-transform">
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
                    onClick={() => {setSearchTerm(""); setSelectedCategory("All")}}
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
            {/* Background elements */}
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

      <Footer />
    </div>
  );
};

export default Blog;
