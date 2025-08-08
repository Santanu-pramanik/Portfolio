import React from "react";

const milestones = [
	{
		title: "10th Board",
		board: "WBBSE",
		percentage: "64%",
		year: "2020",
		icon: "🎒",
		color: "bg-blue-100 border-blue-300",
	},
	{
		title: "12th Board",
		board: "WBCHSE",
		percentage: "89%",
		year: "2022",
		icon: "📚",
		color: "bg-purple-100 border-purple-300",
	},
	{
		title: "B.Tech CSE",
		board: "Computer Science & Engineering",
		percentage: "",
		year: "2022–2026",
		icon: "💻",
		color: "bg-green-100 border-green-300",
	},
];

export default function EducationJourney() {
	return (
		<section
			className="bg-white pt-24 py-12 px-4 md:px-20 min-h-screen flex flex-col"
			id="education"
		>
			<h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
				🏫 Education Journey
			</h2>
			<div className="relative flex items-end justify-center min-h-[400px] mt-auto mb-auto">
				{/* Decorative pastel icons */}
				<div className="absolute left-10 top-10 w-16 h-16 rounded-full bg-blue-100 opacity-60" />
				<div className="absolute right-24 top-24 w-20 h-20 rounded-full bg-purple-100 opacity-60" />
				<div className="absolute left-1/2 top-0 -translate-x-1/2 w-32 h-16 bg-blue-200 rounded-b-full opacity-40" />
				<div className="absolute right-10 bottom-32 w-16 h-16 rounded-full bg-green-100 opacity-60" />
				{/* Winding SVG path */}
				<svg
					className="absolute left-0 top-0 w-full h-full pointer-events-none"
					viewBox="0 0 1000 400"
					fill="none"
				>
					<path
						d="M 80 350 Q 250 250 400 350 Q 600 450 800 200"
						stroke="#a7c7e7"
						strokeWidth="8"
						fill="none"
					/>
				</svg>
				{/* Milestone Cards */}
				<div className="flex w-full justify-between items-end relative z-10">
					{milestones.map((m, idx) => (
						<div
							key={idx}
							className={`flex flex-col items-center ${m.color} border-2 rounded-xl shadow-lg px-6 py-4 mx-2`}
							style={{ minWidth: 180 }}
						>
							<span className="text-3xl mb-2">{m.icon}</span>
							<h3 className="font-bold text-blue-700 text-lg mb-1">
								{m.title}
							</h3>
							<p className="text-sm text-gray-600">{m.board}</p>
							{m.percentage && (
								<p className="text-sm text-gray-500">
									Percentage: {m.percentage}
								</p>
							)}
							<p className="text-xs text-gray-400 mt-1">{m.year}</p>
						</div>
					))}
				</div>
				{/* Student Character */}
			</div>
		</section>
	);
}
