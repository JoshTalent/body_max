
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
  Users,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post("https://bodymax-bc-backend.onrender.com/api/messages", formData);

      if (response.data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert(response.data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(
        error.response?.data?.message ||
        "Failed to connect to the server. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+250 788 531 112",
      description: "Mon-Fri, 8am - 6pm",
      link: "tel:+250788531112",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: "bodymaxboxingclub@gmail.com",
      description: "Response within 24h",
      link: "mailto:bodymaxboxingclub@gmail.com",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "KG 123 St, Kigali",
      description: "Nyarugenge, Kimisagara",
      link: "https://maps.google.com",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Sun: 6am-9pm",
      description: "Weekends: 8am-6pm",
      link: "/schedule",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const faqs = [
    {
      question: "Do I need experience to join?",
      answer:
        "No experience needed! We have programs for all levels, from complete beginners to advanced competitors.",
    },
    {
      question: "What should I bring to my first class?",
      answer:
        "Just wear comfortable workout clothes and bring water. We provide all boxing equipment for trial classes.",
    },
    {
      question: "Are there age restrictions?",
      answer:
        "We welcome ages 6 and up! We have specialized programs for kids (6-12), teens (13-17), and adults.",
    },
    {
      question: "Can I try a class before signing up?",
      answer:
        "Absolutely! We offer a free trial class so you can experience our training and meet the coaches first.",
    },
  ];

  const stats = [
    { value: "50+", label: "Active Members" },
    { value: "8", label: "Pro Coaches" },
    { value: "24/7", label: "Access" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section - Clean Split */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                  Get in Touch
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Connect
                </span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Ready to start your boxing journey? We're here to answer your questions and help you take the first step.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-3 bg-slate-50 rounded-xl">
                    <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2"
                >
                  Book Free Trial
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
                <motion.a
                  href="tel:+250788531112"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
              </div>
            </motion.div>

            {/* Right - Contact Cards Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.link}
                    className="group p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 mb-0.5">{item.title}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-1">{item.details}</p>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Map & Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Visit Our Gym</h2>
                <p className="text-slate-600">Come experience the energy of BodyMax Boxing Club in person.</p>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <MapPin className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                    <p className="font-bold text-lg">BodyMax Boxing Club</p>
                    <p className="text-slate-300 text-sm">Nyarugenge, Kimisagara</p>
                    <p className="text-slate-300 text-sm">Kigali, Rwanda</p>
                    <button className="mt-4 px-5 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition">
                      Open in Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Directions */}
              <div className="bg-white rounded-2xl p-5 border border-slate-100">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Getting Here
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>📍 Located in the heart of Kimisagara</p>
                  <p>🚗 Free parking available for members</p>
                  <p>🚌 Bus stop: Kimisagara Stage (2 min walk)</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-50 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-500 mb-6">
                    Thanks for reaching out. We'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                        placeholder="hello@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                        placeholder="+250 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
                      >
                        <option value="">Select subject</option>
                        <option value="membership">Membership Inquiry</option>
                        <option value="trial">Free Trial Class</option>
                        <option value="training">Private Training</option>
                        <option value="kids">Kids Program</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition resize-none"
                      placeholder="Tell us about your goals or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    We typically respond within 2-4 hours during business hours.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full mb-4">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500">Quick answers about training, memberships, and getting started.</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-50 rounded-xl p-5 hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100"
              >
                <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2 group cursor-pointer">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">?</span>
                  {faq.question}
                </h3>
                <p className="text-slate-600 text-sm pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-10 pt-6 border-t border-slate-100"
          >
            <p className="text-slate-500 mb-4">Still have questions? We're here to help.</p>
            <a
              href="tel:+250788531112"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Book your free trial class today and experience the BodyMax difference.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition shadow-sm"
              >
                Book Free Trial
              </motion.button>
              <motion.a
                href="tel:+250788531112"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-800 text-white text-sm font-semibold rounded-xl hover:bg-slate-700 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +250 788 531 112
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;