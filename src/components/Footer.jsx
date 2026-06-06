import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Dumbbell,
  Trophy,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "PROGRAMS",
      links: [
        { name: "Boxing Fundamentals", to: "/programs/fundamentals" },
        { name: "Advanced Competition", to: "/programs/advanced" },
        { name: "Boxing for Fitness", to: "/programs/fitness" },
        { name: "Kids & Teens Boxing", to: "/programs/kids-teens" },
        { name: "Private Training", to: "/programs/private" },
      ],
    },
    {
      title: "CLUB INFO",
      links: [
        { name: "About Us", to: "/about" },
        { name: "Our Coaches", to: "/coaches" },
        { name: "Events & Fight Nights", to: "/events" },
        { name: "Schedule & Pricing", to: "/schedule" },
        { name: "Gallery", to: "/gallery" },
        { name: "Blog & News", to: "/blog" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact Us", to: "/" },
        { name: "FAQs", to: "/" },
        { name: "Membership", to: "/" },
        { name: "Privacy Policy", to: "/" },
        { name: "Terms of Service", to: "/" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "KG 456 St, Sports District",
      subtext: "Kigali, Rwanda",
    },
    {
      icon: Phone,
      text: "+250 781 288 442",
      subtext: "Mon-Fri 5AM-10PM",
    },
    {
      icon: Mail,
      text: "bodymaxboxingclub@gmail.com",
      subtext: "We reply within 24h",
    },
    {
      icon: Clock,
      text: "5:00 AM - 10:00 PM",
      subtext: "7 Days a Week",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:bg-blue-500 hover:border-blue-500",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:bg-pink-500 hover:border-pink-500",
    },
    {
      icon: Twitter,
      href: "#",
      color: "hover:bg-blue-400 hover:border-blue-400",
    },
    {
      icon: Youtube,
      href: "#",
      color: "hover:bg-red-500 hover:border-red-500",
    },
  ];

  return (
    <footer className="relative bg-white text-gray-900 border-t border-gray-200 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 opacity-40"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Links Sections - Left Side (takes 7 cols) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-gray-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2 group relative w-fit"
                        >
                          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-blue-600" />
                          <span className="relative">
                            {link.name}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Brand Section - Right Side (takes 5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 lg:pl-12 lg:border-l border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg border border-blue-500">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-gray-900">
                  BodyMax boxing club
                </span>
                <span className="text-xs text-blue-600 font-semibold tracking-wider">
                  CHAMPIONSHIP CLUB
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Rwanda's premier boxing club training champions since 2010.
              Professional coaching, elite facilities, and a community dedicated
              to excellence in the heart of Kigali.
            </p>

            {/* Contact Info inline */}
            <div className="space-y-3 mb-6">
              {contactInfo.slice(0, 2).map((contact, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  <contact.icon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-medium">{contact.text}</span>
                    <span className="text-xs text-gray-400 ml-1">• {contact.subtext}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats inline */}
            <div className="flex items-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">15+</div>
                <div className="text-xs text-gray-500">Champions</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">1K+</div>
                <div className="text-xs text-gray-500">Members</div>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">12</div>
                <div className="text-xs text-gray-500">Years</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -4, rotate: [0, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 transition-all duration-300 text-gray-600 ${social.color} hover:text-white shadow-sm hover:shadow-lg`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Remaining Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 pt-12 border-t border-gray-200"
        >
          {contactInfo.slice(2, 4).map((contact, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 group"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-700 transition-colors duration-300">
                <contact.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-gray-900 font-semibold">
                  {contact.text}
                </p>
                <p className="text-gray-600 text-sm mt-0.5">{contact.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-10 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-3xl border border-blue-100 shadow-lg shadow-blue-100/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight">
                Stay Connected
              </h3>
              <p className="text-gray-600">
                Get exclusive training tips, event updates, and special offers
                delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-300 shadow-sm"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm flex items-center gap-2">
              <span>
                © {currentYear} BodyMax boxing club. All rights reserved.
              </span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.span>
            </div>

            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-blue-500" />
                Built with passion for boxing
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
