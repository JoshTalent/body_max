import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  // Hero & Stats
  Users,
  Trophy,
  Medal,
  Crown,

  // Filter & Search
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,

  // View Toggle
  Grid,
  List,

  // Boxer Cards
  MapPin,
  Ruler,
  Activity,
  Zap,

  // Social Media
  Instagram,
  Twitter,

  // Achievements
  Star,
  Award,
  Sparkles,

  // Benefits & Features
  Shield,
  Target,
  Heart,
  CheckCircle,

  // CTA & Actions
  Play,
  Download,

  // Modal Close
  Maximize2,
  Minimize2,
} from "lucide-react";

const Boxers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBoxer, setSelectedBoxer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("all");
  const [selectedStance, setSelectedStance] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Sample boxers data
  const boxers = [
    // Professional Boxers
    {
      id: 1,
      name: "Mike 'Iron' Rodriguez",
      age: 28,
      category: "professional",
      level: "elite",
      weight: "Heavyweight",
      weightClass: "201+ lbs",
      stance: "Orthodox",
      nationality: "USA",
      hometown: "Brooklyn, NY",
      ranking: "#3 WBC, #5 WBA",
      record: {
        wins: 15,
        losses: 2,
        draws: 0,
        knockouts: 12,
        decisions: 3,
      },
      physicalStats: {
        height: "6'3\" (191 cm)",
        reach: '78" (198 cm)',
        weight: "235 lbs (107 kg)",
      },
      career: {
        debut: "2018",
        trainer: "Roberto 'Master' Sanchez",
      },
      achievements: [
        {
          title: "WBC Heavyweight Champion",
          year: "2023",
          icon: Crown,
        },
        {
          title: "Golden Gloves Winner",
          year: "2019",
          icon: Trophy,
        },
      ],
      bio: "Mike 'Iron' Rodriguez is a devastating power puncher with knockout power in both hands. Rising through the ranks with explosive performances.",
      fightingStyle: {
        description: "Aggressive pressure fighter",
        signature: "Devastating right hook",
      },
      recentFights: [
        {
          opponent: "James Wilson",
          result: "KO",
          round: "3",
          date: "Jan 2024",
        },
        {
          opponent: "Andre Thompson",
          result: "UD",
          round: "10",
          date: "Sep 2023",
        },
      ],
      social: {
        instagram: "@mike_iron_rodriguez",
        twitter: "@mike_iron_boxing",
      },
      image: "https://i.postimg.cc/fyymR1YW/Screenshot_2026_03_01_174723.png",
    },

    // Amateur Boxers
    {
      id: 6,
      name: "James 'The Gentleman' Brooks",
      age: 23,
      category: "amateur",
      level: "elite_amateur",
      weight: "Middleweight",
      weightClass: "165 lbs",
      stance: "Southpaw",
      nationality: "USA",
      hometown: "Philadelphia, PA",
      amateurRank: "#2 USA Boxing",
      amateurRecord: {
        fights: 52,
        wins: 48,
        losses: 4,
        knockouts: 25,
        tournaments: 10,
      },
      physicalStats: {
        height: "6'1\" (185 cm)",
        reach: '76" (193 cm)',
        weight: "165 lbs (75 kg)",
      },
      career: {
        startedBoxing: "2017",
        coach: "Professor Michael Chen",
        club: "BodyMax Boxing Club",
      },
      achievements: [
        {
          title: "National Elite Champion",
          year: "2023",
          icon: Trophy,
        },
        {
          title: "University Champion",
          year: "2022, 2023",
          icon: Award,
        },
      ],
      bio: "James Brooks applies scientific principles to his boxing, earning him the nickname 'The Gentleman.'",
      fightingStyle: {
        description: "Scientific boxer-puncher",
        signature: "Southpaw cross counter",
      },
      recentResults: [
        {
          event: "National Elite Championships",
          result: "Gold",
          date: "Oct 2023",
        },
        {
          event: "Regional Olympic Trials",
          result: "1st Place",
          date: "Aug 2023",
        },
      ],
      social: {
        instagram: "@james_gentleman_brooks",
      },
      image: "https://i.postimg.cc/wv6DS1vD/Screenshot_2026_03_01_174550.png",
    },
    {
      id: 7,
      name: "Danny 'The Kid' Martinez",
      age: 17,
      category: "amateur",
      level: "junior",
      weight: "Light Flyweight",
      weightClass: "108 lbs",
      stance: "Orthodox",
      nationality: "USA",
      hometown: "Miami, FL",
      amateurRank: "#1 Junior Division",
      amateurRecord: {
        fights: 28,
        wins: 26,
        losses: 2,
        knockouts: 12,
        tournaments: 5,
      },
      physicalStats: {
        height: "5'2\" (157 cm)",
        reach: '62" (157 cm)',
        weight: "108 lbs (49 kg)",
      },
      career: {
        startedBoxing: "2021",
        coach: "Tony 'Tiger' Williams",
        club: "BodyMax Boxing Club",
      },
      achievements: [
        {
          title: "Junior National Champion",
          year: "2023",
          icon: Trophy,
        },
        {
          title: "Promising Youngster Award",
          year: "2023",
          icon: Sparkles,
        },
      ],
      bio: "The youngest member of BodyMax's elite squad, Danny shows incredible potential with his speed and ring IQ.",
      fightingStyle: {
        description: "Lightning fast out-fighter",
        signature: "Double jab - straight right",
      },
      recentResults: [
        { event: "Junior Nationals", result: "Gold", date: "Dec 2023" },
        { event: "Youth Regional Cup", result: "Gold", date: "Sep 2023" },
      ],
      social: {
        instagram: "@danny_kid_martinez",
      },
      image: "https://i.postimg.cc/gJY3fxJM/Screenshot_2026_03_01_174534.png",
    },
    {
      id: 8,
      name: "Sofia 'The Scientist' Petrova",
      age: 22,
      category: "amateur",
      level: "elite_amateur",
      weight: "Lightweight",
      weightClass: "132 lbs",
      stance: "Orthodox",
      nationality: "Russia/USA",
      hometown: "Boston, MA",
      amateurRank: "#4 Women's Rankings",
      amateurRecord: {
        fights: 32,
        wins: 30,
        losses: 2,
        knockouts: 12,
        tournaments: 7,
      },
      physicalStats: {
        height: "5'7\" (170 cm)",
        reach: '68" (173 cm)',
        weight: "132 lbs (60 kg)",
      },
      career: {
        startedBoxing: "2020",
        coach: "Dr. James Morrison",
        club: "BodyMax Boxing Club",
      },
      achievements: [
        {
          title: "European University Champion",
          year: "2023",
          icon: Trophy,
        },
        {
          title: "International Cup Winner",
          year: "2023",
          icon: Award,
        },
      ],
      bio: "Sofia Petrova applies biomechanics and physics to perfect her technique, making her a unique talent.",
      fightingStyle: {
        description: "Technical precision boxer",
        signature: "Perfectly timed cross counters",
      },
      recentResults: [
        {
          event: "European University Games",
          result: "Gold",
          date: "Nov 2023",
        },
        {
          event: "International Women's Cup",
          result: "Gold",
          date: "Aug 2023",
        },
      ],
      social: {
        instagram: "@sofia_scientist_boxing",
      },
      image: "https://i.postimg.cc/xC0LWXCp/Screenshot_2026_03_01_174609.png",
    },
    {
      id: 9,
      name: "Frank Kalisa",
      age: 20,
      category: "amateur",
      level: "elite_amateur",
      weight: "Lightweight",
      weightClass: "135 lbs",
      stance: "Orthodox",
      nationality: "Rwanda",
      hometown: "Kigali, Rwanda",
      amateurRank: "#1 Rwanda Boxing",
      amateurRecord: {
        fights: 25,
        wins: 23,
        losses: 2,
        knockouts: 15,
        tournaments: 4,
      },
      physicalStats: {
        height: "5'8\" (173 cm)",
        reach: '70" (178 cm)',
        weight: "135 lbs (61 kg)",
      },
      career: {
        startedBoxing: "2019",
        coach: "Jean Pierre",
        club: "BodyMax Boxing Club",
      },
      achievements: [
        {
          title: "East African Champion",
          year: "2023",
          icon: Trophy,
        },
        {
          title: "National Champion",
          year: "2022, 2023",
          icon: Award,
        },
      ],
      bio: "Frank Kalisa is Rwanda's rising star, known for his explosive power and technical precision.",
      fightingStyle: {
        description: "Explosive boxer-puncher",
        signature: "Straight right hand",
      },
      recentResults: [
        {
          event: "East African Championships",
          result: "Gold",
          date: "Dec 2023",
        },
        { event: "National Championships", result: "Gold", date: "Oct 2023" },
      ],
      social: {
        instagram: "@frank_kalisa",
      },
      image: "https://i.postimg.cc/fyymR1YW/Screenshot_2026_03_01_174723.png",
    },
    {
      id: 10,
      name: "Anelica Nsabimana",
      age: 19,
      category: "amateur",
      level: "elite_amateur",
      weight: "Featherweight",
      weightClass: "126 lbs",
      stance: "Southpaw",
      nationality: "Rwanda",
      hometown: "Kigali, Rwanda",
      amateurRank: "#1 Women's Division",
      amateurRecord: {
        fights: 18,
        wins: 17,
        losses: 1,
        knockouts: 9,
        tournaments: 3,
      },
      physicalStats: {
        height: "5'5\" (165 cm)",
        reach: '66" (168 cm)',
        weight: "126 lbs (57 kg)",
      },
      career: {
        startedBoxing: "2020",
        coach: "Marie Claire",
        club: "BodyMax Boxing Club",
      },
      achievements: [
        {
          title: "African Youth Champion",
          year: "2023",
          icon: Trophy,
        },
        {
          title: "National Women's Champion",
          year: "2022, 2023",
          icon: Award,
        },
      ],
      bio: "Anelica Nsabimana is breaking barriers in Rwandan women's boxing with her speed and technical ability.",
      fightingStyle: {
        description: "Technical southpaw",
        signature: "Southpaw jab-cross",
      },
      recentResults: [
        {
          event: "African Youth Championships",
          result: "Gold",
          date: "Nov 2023",
        },
        {
          event: "National Women's Championships",
          result: "Gold",
          date: "Sep 2023",
        },
      ],
      social: {
        instagram: "@anelica_nsabimana",
      },
      image: "https://i.postimg.cc/fyymR1YW/Screenshot_2026_03_01_174723.png",
    },
  ];

  // Calculate stats
  const stats = {
    totalBoxers: boxers.length,
    professionals: boxers.filter((b) => b.category === "professional").length,
    amateurs: boxers.filter((b) => b.category === "amateur").length,
    totalWins: boxers.reduce((acc, b) => {
      if (b.category === "professional") {
        return acc + (b.record?.wins || 0);
      } else {
        return acc + (b.amateurRecord?.wins || 0);
      }
    }, 0),
    champions: boxers.filter((b) =>
      b.achievements?.some((a) => a.title.includes("Champion")),
    ).length,
  };

  // Filter categories
  const categories = [
    { id: "all", label: "All Boxers", icon: Users, color: "blue" },
    {
      id: "professional",
      label: "Professional",
      icon: Trophy,
      color: "purple",
    },
    { id: "amateur", label: "Amateur", icon: Medal, color: "green" },
  ];

  // Weight classes
  const weightClasses = [
    "all",
    "Heavyweight",
    "Light Heavyweight",
    "Middleweight",
    "Welterweight",
    "Lightweight",
    "Featherweight",
    "Bantamweight",
  ];

  // Stances
  const stances = ["all", "Orthodox", "Southpaw"];

  // Sort options
  const sortOptions = [
    { value: "name", label: "Name A-Z" },
    { value: "nameDesc", label: "Name Z-A" },
    { value: "wins", label: "Most Wins" },
    { value: "age", label: "Youngest First" },
  ];

  // Simulate loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Filter and sort boxers
  const filteredBoxers = boxers
    .filter((boxer) => {
      const matchesCategory =
        selectedCategory === "all" || boxer.category === selectedCategory;
      const matchesWeight =
        selectedWeight === "all" || boxer.weight === selectedWeight;
      const matchesStance =
        selectedStance === "all" || boxer.stance === selectedStance;
      const matchesSearch =
        boxer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.weight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        boxer.nationality.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesWeight && matchesStance && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "nameDesc":
          return b.name.localeCompare(a.name);
        case "wins":
          const winsA =
            a.category === "professional"
              ? a.record.wins
              : a.amateurRecord.wins;
          const winsB =
            b.category === "professional"
              ? b.record.wins
              : b.amateurRecord.wins;
          return winsB - winsA;
        case "age":
          return a.age - b.age;
        default:
          return 0;
      }
    });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBoxers = filteredBoxers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredBoxers.length / itemsPerPage);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Fixed: Using a simple pattern instead of SVG string to avoid parsing issues */}
          <div
            className="absolute inset-0 bg-white/5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <Users className="w-4 h-4 text-yellow-300" />
              <span className="text-white/90 text-sm font-semibold tracking-wide">
                BODYMAX FIGHT TEAM
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">MEET THE </span>
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent">
                WARRIORS
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              From rising amateurs to championship professionals. Discover the
              stories behind our elite fighters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  document
                    .getElementById("boxers-grid")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Explore Boxers
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                Watch Highlights
              </motion.button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {[
              { label: "Total Boxers", value: stats.totalBoxers, icon: Users },
              {
                label: "Professionals",
                value: stats.professionals,
                icon: Trophy,
              },
              { label: "Amateurs", value: stats.amateurs, icon: Medal },
              { label: "Champions", value: stats.champions, icon: Crown },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <stat.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <div className="text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 md:h-24"
            viewBox="0 0 1440 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#F9FAFB"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section
        id="boxers-grid"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, weight, or country..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 1rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.5em 1.5em",
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`lg:w-auto px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 justify-center ${
                showFilters
                  ? "bg-blue-600 text-white"
                  : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown
                className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
              />
            </button>

            {/* View Mode Toggle */}
            <div className="flex gap-1 bg-gray-50 rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "grid"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === "list"
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-6 border-t border-gray-200 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-all ${
                              selectedCategory === cat.id
                                ? `bg-${cat.color}-600 text-white`
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {cat.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Weight Filter */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Weight Class
                      </label>
                      <select
                        value={selectedWeight}
                        onChange={(e) => setSelectedWeight(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {weightClasses.map((weight) => (
                          <option key={weight} value={weight}>
                            {weight === "all" ? "All Weights" : weight}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Stance Filter */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Stance
                      </label>
                      <select
                        value={selectedStance}
                        onChange={(e) => setSelectedStance(e.target.value)}
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {stances.map((stance) => (
                          <option key={stance} value={stance}>
                            {stance === "all" ? "All Stances" : stance}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? `bg-${category.color}-600 text-white shadow-lg`
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">
            Showing{" "}
            <span className="font-bold text-blue-600">
              {filteredBoxers.length}
            </span>{" "}
            boxers
          </p>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white rounded-2xl border border-gray-200 p-6 animate-pulse"
              >
                <div className="aspect-square bg-gray-200 rounded-xl mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Grid View */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentBoxers.map((boxer, idx) => (
                  <motion.div
                    key={boxer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setSelectedBoxer(boxer)}
                    className="group relative cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                    <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      {/* Image */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
                        <img
                          src={boxer.image}
                          alt={boxer.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Category Badge */}
                        <div
                          className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                            boxer.category === "professional"
                              ? "bg-purple-600 text-white"
                              : "bg-green-600 text-white"
                          }`}
                        >
                          {boxer.category === "professional"
                            ? "PRO"
                            : "AMATEUR"}
                        </div>

                        {/* Level Badge */}
                        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-800 shadow-lg">
                          {boxer.level === "elite"
                            ? "⭐ ELITE"
                            : boxer.level === "elite_amateur"
                              ? "🏆 TOP AM"
                              : boxer.level === "contender"
                                ? "⚡ CONTENDER"
                                : "🌟 PROSPECT"}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">
                              {boxer.name}
                            </h3>
                            <p className="text-blue-600 font-medium">
                              {boxer.weight} • {boxer.nationality}
                            </p>
                          </div>
                        </div>

                        {/* Record */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          {boxer.category === "professional" ? (
                            <>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-gray-900">
                                  {boxer.record.wins}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Wins
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-purple-600">
                                  {boxer.record.knockouts}
                                </div>
                                <div className="text-xs text-gray-500">KO</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-gray-900">
                                  {boxer.record.losses}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Losses
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-gray-900">
                                  {boxer.amateurRecord.fights}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Fights
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-green-600">
                                  {boxer.amateurRecord.wins}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Wins
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-blue-600">
                                  {boxer.amateurRecord.tournaments}
                                </div>
                                <div className="text-xs text-gray-500">
                                  Titles
                                </div>
                              </div>
                            </>
                          )}
                        </div>

                        {/* Bio Preview */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {boxer.bio}
                        </p>

                        {/* View Profile Button */}
                        <button className="w-full py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-sm border border-blue-200 hover:border-blue-600 flex items-center justify-center gap-2">
                          View Full Profile
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {currentBoxers.map((boxer) => (
                  <motion.div
                    key={boxer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => setSelectedBoxer(boxer)}
                    className="bg-white rounded-2xl border border-gray-200 p-4 cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all"
                  >
                    <div className="flex gap-6">
                      {/* Avatar */}
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={boxer.image}
                          alt={boxer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">
                              {boxer.name}
                            </h3>
                            <p className="text-blue-600">
                              {boxer.weight} • {boxer.nationality}
                            </p>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              boxer.category === "professional"
                                ? "bg-purple-100 text-purple-700"
                                : "bg-green-100 text-green-700"
                            }`}
                          >
                            {boxer.category === "professional"
                              ? "PROFESSIONAL"
                              : "AMATEUR"}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {boxer.bio}
                        </p>

                        {/* Stats Row */}
                        <div className="flex gap-6">
                          {boxer.category === "professional" ? (
                            <>
                              <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  <span className="font-bold text-gray-900">
                                    {boxer.record.wins}
                                  </span>{" "}
                                  Wins
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  <span className="font-bold text-purple-600">
                                    {boxer.record.knockouts}
                                  </span>{" "}
                                  KO
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  <span className="font-bold text-gray-900">
                                    {boxer.amateurRecord.fights}
                                  </span>{" "}
                                  Fights
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Trophy className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                  <span className="font-bold text-green-600">
                                    {boxer.amateurRecord.tournaments}
                                  </span>{" "}
                                  Titles
                                </span>
                              </div>
                            </>
                          )}
                          <div className="flex items-center gap-2">
                            <Ruler className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">
                              {boxer.physicalStats.height}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="w-6 h-6 text-gray-400 self-center" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Pagination */}
        {filteredBoxers.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition-all ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredBoxers.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No boxers found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your filters or search terms
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
                setSelectedWeight("all");
                setSelectedStance("all");
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              READY TO START YOUR JOURNEY?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join BodyMax Boxing Club today and train alongside champions.
              Whether you're a beginner or aspiring pro, we have a place for
              you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all">
                Start Your Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all">
                View Programs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Boxer Profile Modal - Enhanced for perfect centering */}
      <AnimatePresence>
        {selectedBoxer && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
              onClick={() => setSelectedBoxer(null)}
            />

            {/* Modal - Perfectly centered */}
            <div className="fixed inset-0 z-[10000] overflow-y-auto">
              <div className="min-h-screen flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        {selectedBoxer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {selectedBoxer.name}
                        </h2>
                        <p className="text-blue-600">
                          {selectedBoxer.weight} Division •{" "}
                          {selectedBoxer.nationality}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBoxer(null)}
                      className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Left Column */}
                      <div className="space-y-4">
                        {/* Profile Image */}
                        <div className="aspect-square rounded-xl overflow-hidden">
                          <img
                            src={selectedBoxer.image}
                            alt={selectedBoxer.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Quick Stats */}
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-3">
                            Quick Stats
                          </h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Age</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.age}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Stance</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.stance}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Height</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.physicalStats.height}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Reach</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.physicalStats.reach}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Social Links */}
                        {selectedBoxer.social && (
                          <div className="bg-gray-50 rounded-xl p-4">
                            <h3 className="font-bold text-gray-900 mb-3">
                              Connect
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedBoxer.social.instagram && (
                                <a
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-pink-50 transition-colors border border-gray-200"
                                >
                                  <Instagram className="w-4 h-4 text-pink-600" />
                                  <span className="text-sm text-gray-700">
                                    Instagram
                                  </span>
                                </a>
                              )}
                              {selectedBoxer.social.twitter && (
                                <a
                                  href="#"
                                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-blue-50 transition-colors border border-gray-200"
                                >
                                  <Twitter className="w-4 h-4 text-blue-400" />
                                  <span className="text-sm text-gray-700">
                                    Twitter
                                  </span>
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="md:col-span-2 space-y-6">
                        {/* Bio */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">
                            Biography
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {selectedBoxer.bio}
                          </p>
                        </div>

                        {/* Record */}
                        <div className="bg-blue-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-3">
                            {selectedBoxer.category === "professional"
                              ? "Professional Record"
                              : "Amateur Record"}
                          </h3>
                          <div className="grid grid-cols-4 gap-4">
                            {selectedBoxer.category === "professional" ? (
                              <>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-gray-900">
                                    {selectedBoxer.record.wins}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Wins
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-purple-600">
                                    {selectedBoxer.record.knockouts}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    KO
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-gray-900">
                                    {selectedBoxer.record.losses}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Losses
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-gray-900">
                                    {selectedBoxer.record.draws}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Draws
                                  </div>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-gray-900">
                                    {selectedBoxer.amateurRecord.fights}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Fights
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-green-600">
                                    {selectedBoxer.amateurRecord.wins}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Wins
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-red-600">
                                    {selectedBoxer.amateurRecord.losses}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Losses
                                  </div>
                                </div>
                                <div className="text-center">
                                  <div className="text-2xl font-bold text-blue-600">
                                    {selectedBoxer.amateurRecord.tournaments}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    Titles
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            Achievements
                          </h3>
                          <div className="space-y-3">
                            {selectedBoxer.achievements?.map(
                              (achievement, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 bg-gray-50 rounded-xl p-4"
                                >
                                  <achievement.icon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                                  <div>
                                    <div className="font-bold text-gray-900">
                                      {achievement.title}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      {achievement.year}
                                    </div>
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Recent Fights/Results */}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3">
                            {selectedBoxer.category === "professional"
                              ? "Recent Fights"
                              : "Recent Results"}
                          </h3>
                          <div className="space-y-2">
                            {(
                              selectedBoxer.recentFights ||
                              selectedBoxer.recentResults
                            )?.map((item, i) => (
                              <div
                                key={i}
                                className="flex justify-between items-center bg-gray-50 rounded-lg p-4"
                              >
                                <div>
                                  <div className="font-bold text-gray-900">
                                    {item.opponent || item.event}
                                  </div>
                                  <div className="text-sm text-gray-600">
                                    {item.date}
                                  </div>
                                </div>
                                <div
                                  className={`px-4 py-2 rounded-lg font-bold ${
                                    item.result.includes("Gold") ||
                                    item.result === "KO" ||
                                    item.result === "TKO"
                                      ? "bg-green-100 text-green-700"
                                      : item.result.includes("Silver")
                                        ? "bg-gray-100 text-gray-700"
                                        : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {item.result}{" "}
                                  {item.round && `(${item.round})`}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Fighting Style */}
                        {selectedBoxer.fightingStyle && (
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">
                              Fighting Style
                            </h3>
                            <div className="bg-gray-50 rounded-xl p-4">
                              <p className="text-gray-700 mb-3 italic">
                                "{selectedBoxer.fightingStyle.description}"
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-900">
                                  Signature:
                                </span>
                                <span className="text-blue-600">
                                  {selectedBoxer.fightingStyle.signature}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Career Info */}
                        <div className="bg-gray-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-3">
                            Career Info
                          </h3>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Debut</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.career.debut ||
                                  selectedBoxer.career.startedBoxing}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">
                                Trainer/Coach
                              </span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.career.trainer ||
                                  selectedBoxer.career.coach}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Club</span>
                              <span className="font-bold text-gray-900">
                                {selectedBoxer.career.club ||
                                  "BodyMax Boxing Club"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Boxers;
