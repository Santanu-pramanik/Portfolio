import React from "react";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const barData = {
  labels: ["SQL", "Python", "Power BI", "Excel"],
  datasets: [
    {
      label: "Skill Level",
      data: [90, 85, 80, 75],
      backgroundColor: ["#3b82f6", "#6366f1", "#10b981", "#f59e0b"],
    },
  ],
};

const pieData = {
  labels: ["SQL", "Python", "Power BI", "Excel"],
  datasets: [
    {
      data: [25, 25, 25, 25],
      backgroundColor: ["#3b82f6", "#6366f1", "#10b981", "#f59e0b"],
    },
  ],
};

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />
      <LandingPage />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;