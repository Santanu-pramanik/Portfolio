import React, { useState } from "react";

function Certifications() {
  const [zoomImg, setZoomImg] = useState(null);

  const certificates = [
    {
      src: "https://i.postimg.cc/s1CBtZCn/NPTELCIRTIFIACTE.jpg",
      alt: "NPTEL Certificate",
      name: "Enhancing Soft Skills and Personality (NPTEL)",
    },
    {
      src: "https://i.postimg.cc/1zW893qK/DELOITTE.jpg",
      alt: "Deloitte Data Analyst Certificate",
      name: "Deloitte Data Analyst (Tableau)",
    },
  ];

  return (
    <section className="pt-24 py-8 px-4 min-h-screen flex flex-col justify-center" id="certifications">
      <h2 className="text-2xl font-bold mb-4 text-center">Certifications</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-72 cursor-pointer group"
            onClick={() => setZoomImg(cert)}
          >
            <img
              src={cert.src}
              alt={cert.alt}
              className="w-56 h-36 object-contain mb-4 rounded transition-transform duration-300 group-hover:scale-110"
            />
            <div className="text-blue-700 font-semibold text-lg text-center">
              {cert.name}
            </div>
          </div>
        ))}
      </div>
      {/* Zoom Modal */}
      {zoomImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-600 transition"
            onClick={() => setZoomImg(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={zoomImg.src}
            alt={zoomImg.alt}
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </section>
  );
}

export default Certifications;