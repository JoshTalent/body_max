import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Shield,
  Target,
  Users,
  Heart,
  Star,
  Award,
  Zap,
  CheckCircle2,
  PlayCircle,
  ArrowRight,
  Sparkles,
  Trophy,
  Activity,
  Smile,
} from "lucide-react";

const KidsTeens = () => {
  const ageGroups = [
    {
      title: "Junior Warriors",
      ages: "6 - 12 Years Old",
      desc: "Focus on fundamental movement, coordination, and building confidence through fun boxing drills.",
      features: [
        "Coordination & Balance",
        "Discipline & Focus",
        "Non-Contact Training",
        "Fun Team Games",
      ],
      icon: Smile,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Teen Champions",
      ages: "13 - 17 Years Old",
      desc: "More technical training focusing on boxing fundamentals, strength, and mental resilience.",
      features: [
        "Technical Boxing Skills",
        "Strength & Conditioning",
        "Leadership Development",
        "Controlled Sparring (Optional)",
      ],
      icon: Trophy,
      color: "from-blue-600 to-blue-800",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Safety First",
      desc: "Our youth programs are strictly supervised by expert coaches with a primary focus on safe technique and controlled environments.",
    },
    {
      icon: Heart,
      title: "Confidence & Respect",
      desc: "We teach more than boxing; we build character. Students learn to respect themselves and others while gaining self-assurance.",
    },
    {
      icon: Activity,
      title: "Physical Fitness",
      desc: "Combat childhood obesity and improve overall health with high-energy workouts that kids actually enjoy.",
    },
    {
      icon: Target,
      title: "Mental Focus",
      desc: "Boxing requires intense concentration. Our drills help kids improve their focus, which often translates to better school performance.",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16 bg-gradient-to-br from-blue-50 to-white relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-black text-xs uppercase tracking-widest">
                The Next Generation of Champions
              </span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-slate-950 leading-[0.9] mb-8 tracking-tighter">
              KIDS & TEENS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                BOXING
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              Building discipline, confidence, and strength in a fun, safe, and
              supportive environment. Our youth programs are designed to help
              kids thrive both inside and outside the ring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-3">
                Start Free Trial
                <PlayCircle className="w-5 h-5" />
              </button>
              <button className="px-10 py-5 border-2 border-blue-600 text-blue-600 font-black text-lg rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                View Schedule
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-slate-950">
            <img
              src="https://i.postimg.cc/YCjZBPJf/Screenshot_2026_03_01_170658.png"
              alt="Kids training"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:hidden"></div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] hidden lg:block">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white text-2xl font-black">Join 100+ Youth</p>
                <p className="text-blue-200 font-bold uppercase text-xs tracking-widest">
                  Active Program Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 tracking-tight">
              Programs For <span className="text-blue-600">Every Stage</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              We've tailored our training to meet the developmental needs of
              different age groups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {ageGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative p-10 lg:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-3xl transition-all group overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${group.color} opacity-10 rounded-bl-[5rem] transition-all group-hover:scale-150`}
                ></div>
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${group.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}
                >
                  <group.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-950 mb-2">
                  {group.title}
                </h3>
                <p className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">
                  {group.ages}
                </p>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  {group.desc}
                </p>
                <ul className="space-y-4 mb-10">
                  {group.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-700 font-bold"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-950 hover:text-white transition-all shadow-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-slate-50 text-slate-950 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-black tracking-widest text-xs uppercase mb-6">
                <div className="w-8 h-[2px] bg-blue-600"></div>
                Why Boxing?
              </div>
              <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter text-slate-950">
                BUILDING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  CHARACTER
                </span>{" "}
                <br />
                THROUGH COMBAT
              </h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                Our mission is to empower youth with the tools they need to
                succeed. Boxing is the ultimate vehicle for teaching resilience,
                focus, and respect.
              </p>
              <div className="flex items-center gap-8">
                <div>
                  <p className="text-4xl font-black text-slate-950">100%</p>
                  <p className="text-blue-600 font-bold text-xs uppercase">
                    Safe Environment
                  </p>
                </div>
                <div className="w-[1px] h-12 bg-slate-200"></div>
                <div>
                  <p className="text-4xl font-black text-slate-950">5.0 ★</p>
                  <p className="text-blue-600 font-bold text-xs uppercase">
                    Parent Rating
                  </p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-xl transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-black text-slate-950 mb-3">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parents Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-3xl">
                <img
                  src="https://i.postimg.cc/wv6DS1vD/Screenshot_2026_03_01_174550.png"
                  alt="Coaching session"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full -z-10"></div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-slate-50 rounded-[3rem] -z-10"></div>
            </div>

            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-blue-600 font-black tracking-widest text-xs uppercase">
                <Shield className="w-5 h-5" />
                Parents' Peace of Mind
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1] tracking-tight">
                Your Child's <span className="text-blue-600">Safety</span> Is
                Our Priority
              </h2>
              <div className="space-y-6">
                <SafetyPoint
                  title="Professional Supervision"
                  desc="All youth classes are lead by certified coaches with extensive experience working with children."
                />
                <SafetyPoint
                  title="Age-Appropriate Training"
                  desc="We never push kids beyond their developmental capabilities. Training is scaled to match each child's level."
                />
                <SafetyPoint
                  title="Zero Tolerance Policy"
                  desc="We maintain a strictly positive environment. Bullying or aggressive behavior is not permitted at BodyMax."
                />
              </div>
              <div className="pt-8 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-slate-700">Certified Coaches</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="font-bold text-slate-700">Safe Equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto rounded-[4rem] bg-gradient-to-br from-blue-600 to-blue-800 p-12 lg:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              READY TO EMPOWER <br /> YOUR CHILD?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
              Join the BodyMax family and watch your child grow into a confident, 
              disciplined, and healthy champion.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl transition-all hover:scale-105 shadow-2xl">
                Claim Free Trial Class
              </button>
              <button className="px-12 py-6 bg-blue-700 text-white font-black text-xl rounded-2xl border-2 border-blue-400/30 hover:bg-blue-600 transition-all">
                Contact Program Director
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const SafetyPoint = ({ title, desc }) => (
  <div className="flex gap-6">
    <div className="w-1 h-auto bg-blue-600 rounded-full flex-shrink-0"></div>
    <div>
      <h4 className="text-xl font-black text-slate-950 mb-2">{title}</h4>
      <p className="text-slate-500 font-medium">{desc}</p>
    </div>
  </div>
);

export default KidsTeens;
