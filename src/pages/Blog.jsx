import React, { useState, useEffect } from "react";
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
  Hash,
  X
} from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"
  const [activePost, setActivePost] = useState(null);

  const renderBlogStory = (post) => {
    switch (post.id) {
      case 1:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              When it comes to shedding pounds, traditional cardio workouts like jogging or cycling can quickly become repetitive and yield plateaued results. Enter boxing: a high-octane, full-body metabolic powerhouse that challenges your muscles, mind, and cardiovascular capacity simultaneously.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. Full-Body Muscle Activation</h4>
            <p className="leading-relaxed">
              Unlike workouts that isolate specific body parts, every single punch in boxing recruits your entire kinetic chain. A jab starts from the ground, travels through your calves and thighs, engages your core, and releases through your shoulder and arm. This total-body recruitment burns up to 30% more calories than isolated weight training.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. The Legendary EPOC Afterburn Effect</h4>
            <p className="leading-relaxed">
              Thanks to the high-intensity interval training (HIIT) nature of boxing rounds, your body enters a state of oxygen debt. This triggers Excess Post-exercise Oxygen Consumption (EPOC), meaning your body continues to incinerate calories for up to 24 to 36 hours after you hang up your gloves.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. Fat Shredding Without Muscle Loss</h4>
            <p className="leading-relaxed">
              One of the primary concerns with pure calorie restriction or heavy steady-state cardio is muscle wasting. Boxing acts as natural resistance training. The high-resistance impact on heavy bags preserves and builds lean muscle mass while burning body fat, resulting in a shredded, athletic physique.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Extreme Stress Reduction</h4>
            <p className="leading-relaxed">
              Stress produces cortisol, a hormone that actively promotes visceral fat storage. Hitting a heavy bag is one of the most effective physical releases of stress and tension. By lowering cortisol levels, you naturally prime your body to burn fat more efficiently.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">5. Unmatched Cardiovascular Endurance</h4>
            <p className="leading-relaxed">
              Boxing demands quick bursts of speed combined with sustained movement. This unique blend of aerobic and anaerobic training optimizes your resting heart rate and lung capacity, giving you the stamina of a true champion.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              Your hands are your primary tools inside the ring. Proper hand wrapping is not just a boxing ritual—it's a critical safety measure that stabilizes the small bones, tendons, and joints in your hands and wrists against heavy impacts.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Step 1: The Thumb Anchor</h4>
            <p className="leading-relaxed">
              Hook the loop around your thumb, ensuring you wrap across the back of your hand rather than the palm. Wrapping the back of the hand ensures the wrap tightens automatically when you form a closed fist.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Step 2: Wrist Stability</h4>
            <p className="leading-relaxed">
              Make three to four solid wraps around your wrist. This forms the foundation of support, preventing hyper-flexion or hyperextension when landing heavy hooks and crosses.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Step 3: Knuckle Protection</h4>
            <p className="leading-relaxed">
              Bring the wrap up across the back of your hand and wrap around your knuckles three to four times. Make sure your fingers are slightly spread while wrapping to keep the padding comfortable and prevent pinching.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Step 4: Inter-Finger Locking</h4>
            <p className="leading-relaxed">
              Weave the wrap between each of your fingers, starting from the pinky-ring gap. Loop back down to the wrist after each finger. This secures the knuckles in place, ensuring they do not collide or fracture upon impact.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Step 5: Lock and Fasten</h4>
            <p className="leading-relaxed">
              Finish the remaining length of the wrap around the wrist and fasten the Velcro securely. Clench your fist a few times to test: it should feel snug and secure, without cutting off your circulation.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              A boxer's body is a high-performance machine. To survive grueling rounds of bag work, sparring, and conditioning, you must fuel yourself with high-grade nutrition. Here's how to structure your diet like a professional fighter.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. Pre-Workout Fuel: Complex Carbohydrates</h4>
            <p className="leading-relaxed">
              Carbohydrates are your primary energy source. Consume slow-digesting complex carbs like oatmeal, brown rice, or sweet potatoes 2 to 3 hours before training. This delivers a steady release of glucose to keep you running strong through the final round.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. Post-Workout Recovery: The Golden Ratio</h4>
            <p className="leading-relaxed">
              After a grueling session, your muscle glycogen is depleted and muscle fibers have micro-tears. Aim for a 3:1 ratio of carbohydrates to clean protein within 45 minutes of training (e.g., grilled chicken breast with quinoa, or a premium whey protein shake with a banana).
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. High-Quality Lean Proteins</h4>
            <p className="leading-relaxed">
              Support lean muscle repair with top-tier protein sources. Incorporate wild-caught fish, organic chicken, lean beef, eggs, and plant-based options like lentils and tofu into your daily meals.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Tactical Hydration</h4>
            <p className="leading-relaxed">
              Dehydration of just 2% can reduce your punch power and decision-making speed by up to 20%. Drink at least 3-4 liters of pure water daily, and replenish electrolytes during high-intensity training sessions.
            </p>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              Eighteen months ago, Marie walked through the doors of BodyMax Boxing Club with no martial arts experience, seeking a fun way to get in shape. Today, she is a gold-medal amateur champion representing the club at national tournaments. This is her extraordinary story.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 1: Overcoming the Initial Fear</h4>
            <p className="leading-relaxed">
              "I remember standing outside the gym for ten minutes before building up the courage to go in," Marie recalls. "I thought boxing was only for aggressive, experienced fighters. But the coaches welcomed me with open arms and focused entirely on teaching me basic footwork and breathing."
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 2: Falling in Love with the Discipline</h4>
            <p className="leading-relaxed">
              Within three months, Marie went from attending beginner classes to training four times a week. The structured routine of skipping rope, hitting speedbags, and perfecting the jab built not only a phenomenal physique but an unbreakable mental focus.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 3: The Spark of Competition</h4>
            <p className="leading-relaxed">
              Coach ALI noticed Marie's natural timing and intense drive. Under his guidance, Marie entered the sparring circle. "Sparring taught me how to stay calm under pressure. It's the ultimate chess match," she explains.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">Phase 4: Championship Glory</h4>
            <p className="leading-relaxed">
              After months of rigorous preparation, Marie entered her first official tournament. Winning by unanimous decision, she stood at the top of the podium. Her journey is living proof that with passion, dedication, and elite coaching, anyone can achieve greatness.
            </p>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              Walking into your very first boxing class can feel intimidating, but knowing what to expect can turn that anxiety into pure excitement. Here is your ultimate beginner's guide to crushing your first day at BodyMax.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. What to Wear and Bring</h4>
            <p className="leading-relaxed">
              Wear comfortable, breathable athletic apparel (t-shirt, shorts or leggings) and supportive athletic sneakers. Bring a personal water bottle and a sweat towel. Don't worry about buying gloves yet—the club provides high-quality sanitized training gloves for beginners!
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. The Warm-Up Foundation</h4>
            <p className="leading-relaxed">
              Class begins with a dynamic warm-up designed to prime your shoulders, hips, and core. Expect a mix of light jogging, shadowboxing, jumping jacks, and dynamic stretches.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. Mastering the Basic Stance and Punching</h4>
            <p className="leading-relaxed">
              Your coach will teach you the orthodox or southpaw stance, showing you how to balance your weight. You will then practice the basic punches: the Jab (1), Cross (2), Hook (3), and Uppercut (4).
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Heavy Bag Work and Conditioning</h4>
            <p className="leading-relaxed">
              You will put your punches to the test on the heavy bag, learning how to control impact and distance. The class wraps up with a high-energy conditioning circle and a relaxing cool-down stretch. You'll leave feeling exhausted, empowered, and ready for more!
            </p>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              While the physical changes from boxing are easily visible in the mirror, the most profound transformations happen inside the mind. Boxing is an incredibly therapeutic and mentally strengthening discipline.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. Dynamic Stress and Anxiety Relief</h4>
            <p className="leading-relaxed">
              There is no better outlet for daily frustrations than channeling that energy into a heavy bag workout. The physical act of striking releases endorphins, instantly elevating your mood and melting away mental fatigue.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. Active Mindfulness and Flow State</h4>
            <p className="leading-relaxed">
              Boxing requires 100% of your attention. When a glove is coming at you or you are executing complex combinations, you cannot think about work stress or bills. You are forced into the absolute present—a form of active meditation that clears mental clutter.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. Building Unshakeable Self-Confidence</h4>
            <p className="leading-relaxed">
              Learning how to punch, slip, and defend yourself builds a deep sense of capability. As you master complex technical skills, your self-image expands, translating directly into how you carry yourself in business and personal life.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Developing Grit and Resilience</h4>
            <p className="leading-relaxed">
              Boxing pushes you to your physical limits. Overcoming the urge to quit when your shoulders burn and lungs scream builds a formidable mental resilience that helps you navigate life's toughest challenges with absolute grace.
            </p>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              Investing in the right gear is essential to keep you safe, comfortable, and performing at your best as you advance in your training. Here is a curated guide to the absolute essentials for every new boxer.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. Boxing Gloves: Finding Your Size</h4>
            <p className="leading-relaxed">
              For general training, heavy bag work, and pad work, beginners should look for 12oz or 14oz gloves. If you plan to spar in the future, a heavier 16oz glove is mandatory to ensure safety for both you and your partner. Look for reputable brands with solid wrist support.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. Hand Wraps: Non-Negotiable Protection</h4>
            <p className="leading-relaxed">
              Never hit a bag without hand wraps! Standard 180-inch semi-elastic (Mexican style) wraps are perfect. They provide the right balance of knuckle padding and wrist stability.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. Mouthguard: Protect Your Smile</h4>
            <p className="leading-relaxed">
              Even if you are only doing light technical partner drills without full contact, a high-quality "boil-and-bite" mouthguard is crucial. It protects your teeth and absorbs impact, minimizing concussion risks.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Footwear: Speed and Stability</h4>
            <p className="leading-relaxed">
              While standard running shoes work initially, their thick, cushioned soles can cause ankle rolls during rapid pivots. Transitioning to dedicated boxing shoes or minimalist training shoes with thin flat soles will dramatically improve your balance and footwork.
            </p>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              In boxing, your progress doesn't actually happen during the workout—it happens during the recovery. Hard training breaks down muscle fibers; proper recovery builds them back stronger. Optimize your gains with these professional recovery protocols.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">1. The Art of the Warm-Down</h4>
            <p className="leading-relaxed">
              Never walk straight out of the gym after a hard session. Spend 10 minutes performing static stretches for your calves, hamstrings, shoulders, and hip flexors. This helps flush out lactic acid and maintains functional flexibility.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">2. Contrast Therapy (Hot/Cold)</h4>
            <p className="leading-relaxed">
              Alternating between hot and cold water (or using ice baths) constricts and dilates blood vessels, acting as a natural pump that sweeps metabolic waste out of your muscles and dramatically accelerates tissue repair.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">3. Sleep Optimization</h4>
            <p className="leading-relaxed">
              Sleep is the ultimate performance-enhancing drug. Human Growth Hormone (HGH) release peaks during deep sleep. Aim for 8 hours of quality rest in a cool, dark room to maximize neurological and muscular recovery.
            </p>
            <h4 className="text-xl font-bold text-slate-900 mt-8">4. Active Recovery Days</h4>
            <p className="leading-relaxed">
              On rest days, avoid complete couch-potato mode. Engage in light, low-impact activities like swimming, walking, or mobility work. This maintains blood flow to sore muscles without adding cumulative stress.
            </p>
          </div>
        );
      default:
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
        return <p className="leading-relaxed">{post.excerpt}</p>;
    }
  };

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

  const [posts, setPosts] = useState(blogPosts);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://bodymax-bc-backend.onrender.com/api/blog?limit=100");
        const resData = await response.json();
        if (resData.success && resData.data && resData.data.length > 0) {
          setPosts(resData.data);
        }
      } catch (err) {
        console.error("Error fetching dynamic blogs, falling back to static:", err);
      } finally {
        setIsLoadingBlogs(false);
      }
    };
    fetchPosts();
  }, []);

  const popularPosts = posts.filter((post) => post.featured).slice(0, 3);

  const filteredPosts = posts.filter((post) => {
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
              {/* Soft Ambient Radial Lights (No high-contrast white blurs) */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl" />

              <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1000&auto=format&fit=crop"
                  alt="Boxing training"
                  className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating Stats Widget (High Contrast Dark Slate Badge) */}
              <div className="absolute -bottom-6 -left-6 bg-slate-900 border border-slate-800 text-white p-5 rounded-3xl shadow-2xl flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 rounded-2xl">
                  <Dumbbell className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Training Style</p>
                  <p className="text-xs font-black uppercase tracking-wider">Championship Ready</p>
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
                      const postCount = blogPosts.filter(
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
                                <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                                <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {post.readTime}</span>
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
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-all border border-white/10 group shadow-lg"
              >
                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Modal Body (Scrollable) */}
              <div className="overflow-y-auto flex-1 scroll-smooth">
                {/* Hero Header Banner */}
                <div className="relative h-64 sm:h-96 w-full">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Category and Title */}
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
                        {activePost.readTime}
                      </span>
                      <span className="flex items-center gap-2">
                        <User size={12} className="text-blue-400" />
                        {activePost.author}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="p-6 sm:p-12 space-y-8 text-slate-700 leading-relaxed text-base">
                  <p className="text-lg font-semibold text-slate-900 border-l-4 border-blue-600 pl-4 italic bg-slate-50 py-4 pr-4 rounded-r-2xl">
                    "{activePost.excerpt}"
                  </p>

                  {/* Rich Editorial Body */}
                  {renderBlogStory(activePost)}
                </div>

                {/* Editorial Footer */}
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

    </div>
  );
};

export default Blog;
