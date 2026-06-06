import React from "react";
import Navbar from "../components/Navbar";
import Abouts from "../components/about/About";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <Abouts />
    </motion.div>
  );
};

export default About;
