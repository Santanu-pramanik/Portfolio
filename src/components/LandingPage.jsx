import { Bar, Pie } from "react-chartjs-2";


const barData = {
  labels: ["SQL", "Python", "Excel", "Power BI"],
  datasets: [
    {
      label: "Skill Level",
      data: [90, 85, 80, 75],
      backgroundColor: ["#60a5fa", "#34d399", "#fbbf24", "#f87171"],
    },
  ],
};

// Updated pie chart for project details
const pieData = {
  labels: ["Python", "Excel", "PowerBI ","SQL"],
  datasets: [
    {
      data: [60, 20, 80,90],
      backgroundColor: ["#6366f1", "#fbbf24", "#34d399","#07defbff"],
    },
  ],
};

function LandingPage() {
  return (
    <section className="flex flex-col items-center justify-center py-12 bg-white min-h-screen" id="home" >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {/* Left: Text & Stats */}
        <div className="flex-1 flex flex-col items-start justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">
            Creative <span className="text-blue-500">Data Analyst</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6 max-w-lg">
            Skilled in data collection, cleaning, and analysis. Proficient in Excel, SQL, and Python. Experienced in identifying trends, generating insights, and creating visual reports using Power BI. Strong problem-solver with a focus on data-driven decision-making and business optimization.
          </p>
          <div className="flex gap-8 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700">3</span>
              <span className="text-gray-500 text-sm">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700">0</span>
              <span className="text-gray-500 text-sm">Years Experience</span>
            </div>
          </div>
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-50 transition"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-700">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-700">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl hover:text-blue-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        {/* Right: Profile & Charts */}
        <div className="flex-1 flex flex-col items-center justify-center relative px-4">
          <div className="relative">
            <img
              src="https://i.postimg.cc/y8fz0WFS/image.jpg"
              alt="Profile"
              className="w-72 h-72 rounded-2xl shadow-lg object-cover border-8 border-blue-100"
            />
            {/* Removed skill cards around the image */}
          </div>
          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1BSHCBbU6HS6ku0nKTS9bTCgyZLbTEDrH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition mt-8"
          >
            Download Resume
          </a>
          {/* Charts below resume button */}
          <div className="flex gap-8 mt-8">
            <div className="w-64 h-40 bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center">
              <div className="font-semibold text-gray-700 mb-2">Skill Levels</div>
              <Bar data={barData} />
            </div>
            <div className="w-64 h-40 bg-white rounded-lg shadow p-2 flex flex-col items-center justify-center">
              <div className="font-semibold text-gray-700 mb-2">Project Details</div>
              <Pie
                data={pieData}
                options={{
                  plugins: {
                    legend: {
                      position: "right",
                      labels: {
                        boxWidth: 20,
                        font: { size: 14 },
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;