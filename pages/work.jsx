// pages/work.js
import React, { useState } from 'react';

const videos = [
  {
    title: "Tale of the Tape",
    type: "Docs & Series",
    thumbnail: "/TOT_CoverArt.jpeg",
    url: "https://www.amazon.com/dp/B08XYZ123", // placeholder
    isExternal: true,
  },
  {
    title: "Demario’s Devoted Dreamers",
    type: "Docs & Series",
    url: "https://f.io/YOUR_LINK1"
  },
  {
    title: "In Our DNA: Hip House",
    type: "Docs & Series",
    url: "https://f.io/YOUR_LINK2"
  },
  {
    title: "Smoke: Marijuana + Black America",
    type: "Docs & Series",
    url: "https://f.io/EVifcSy"
  },
  {
    title: "NABJ Post Floyd Moments",
    type: "News Specials",
    url: "https://f.io/hXXI7v9G"
  },
  {
    title: "Beyond Limits (Portion)",
    type: "News Specials",
    url: "https://f.io/8fnKAjle"
  },
  {
    title: "Beyond Limits (Trailer)",
    type: "News Specials",
    url: "https://f.io/d_AUTAYo"
  },
  {
    title: "Burger King – Rule Models",
    type: "Branded Content",
    url: "https://f.io/o_H4fdfD"
  },
  {
    title: "Essence Recap & Impact Reel",
    type: "Branded Content",
    url: "https://f.io/ZdJ0Orca"
  },
  {
    title: "Cheetos Rap Boyz",
    type: "Branded Content",
    url: "https://f.io/HgsoPVFa"
  },
  {
    title: "Sway in the Morning – Doomsday Cypher",
    type: "Podcast / Social",
    url: "https://f.io/CTVYTp_m"
  },
  {
    title: "Remy Martin Producer Series",
    type: "Podcast / Social",
    url: "https://f.io/amjaKzdF"
  },
  {
    title: "300 U Sizzle Reel",
    type: "Podcast / Social",
    url: "https://f.io/i7DGRllY"
  },
  {
    title: "PJ Morton – First Began",
    type: "Music Video",
    url: "https://youtu.be/C1fRIyBW4kk?si=YRHXtRC_3dAhYU0a",
    isExternal: true
  },
];

export default function Work() {
  const [activeVideo, setActiveVideo] = useState(null);

  const grouped = videos.reduce((acc, video) => {
    if (!acc[video.type]) acc[video.type] = [];
    acc[video.type].push(video);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-5xl font-bold mb-10 text-center">Work</h1>

      {Object.keys(grouped).map((section) => (
        <div key={section} className="mb-14">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">{section}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {grouped[section].map((video, idx) => (
              <div
                key={idx}
                onClick={() => !video.isExternal && setActiveVideo(video.url)}
                className="bg-gray-900 rounded-lg p-4 cursor-pointer hover:ring-2 hover:ring-blue-500"
              >
                <div className="h-48 bg-gray-800 rounded mb-3 flex items-center justify-center text-center text-sm text-gray-400">
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover rounded"
                    />
                  ) : (
                    <span>{video.title}</span>
                  )}
                </div>
                {!video.thumbnail && <p className="text-sm text-gray-400">{video.title}</p>}
                {video.isExternal && (
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                  >
                    Watch Now
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl p-6">
            <iframe
              src={activeVideo}
              className="w-full aspect-video rounded-lg"
              frameBorder="0"
              allowFullScreen
              title="WHF Video Preview"
            ></iframe>
            <button
              className="absolute top-2 right-4 text-white text-2xl"
              onClick={() => setActiveVideo(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
