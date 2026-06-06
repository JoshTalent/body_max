import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Users, Star, Dumbbell, Target, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Abouts from "../components/about/About";

const stats = [
  { number: "15+", label: "Champions", icon: Award },
  { number: "1000+", label: "Members", icon: Users },
  { number: "4.9★", label: "Rating", icon: Star },
  { number: "12", label: "Years", icon: Dumbbell },
];

const features = [
  { icon: Shield, title: "Elite Coaching", desc: "Learn from certified professional coaches with championship experience" },
  { icon: Target, title: "Proven System", desc: "Structured training programs designed for measurable results at every level" },
  { icon: Zap, title: "Modern Facility", desc: "State-of-the-art equipment and dedicated spaces for all training disciplines" },
  { icon: Users, title: "Strong Community", desc: "Join a supportive family of athletes committed to pushing each other" },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* CTA moved up - between Hero and Abouts */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-200 font-black text-xs uppercase tracking-[0.3em]">Start Today</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
              Join Rwanda's premier boxing club and train with champions. Your first class is on us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-blue-600 font-black text-sm rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-3"
              >
                Claim Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/programs/fundamentals"
                className="px-10 py-5 bg-blue-700 text-white font-black text-sm rounded-2xl border-2 border-blue-400/30 hover:bg-blue-500 transition-all"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Abouts />

      {/* Features Grid - now uses 2x2 instead of 4 columns */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em]">Why BodyMax</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 tracking-tight">
              Everything You Need to <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              From world-class coaching to premium equipment, we provide all the tools for your transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 group flex items-start gap-6"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar - moved to bottom with different layout */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <stat.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl font-black text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
