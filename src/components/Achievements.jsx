import React from 'react';

const Achievements = () => {
  const images = [
    { id: 1, url: 'img4.png', caption: '@_masum_ at Codeforces' },
    { id: 2, url: 'img2.jpg', caption: 'Unlock The Algorithm – 9th Place' },
    { id: 3, url: 'img1.jpg', caption: 'Receiving Award at the Ceremony' },
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-[#0f0f1a]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-[#6c63ff] to-[#ff6b9d] mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-[#9a9ab0] max-w-2xl mx-auto">
            Highlights from my competitive programming journey
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6c63ff]/10">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white">Codeforces</h3>
            <p className="text-[#c4c4d4] text-sm mt-1">Pupil · Max Rating 1220</p>
            <p className="text-[#9a9ab0] text-sm mt-2">500+ problems solved</p>
          </div>

          <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6c63ff]/10">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold text-white">Multi‑Judge</h3>
            <p className="text-[#c4c4d4] text-sm mt-1">1000+ total problems</p>
            <p className="text-[#9a9ab0] text-sm mt-2">CodeChef · LeetCode · CSES · more</p>
          </div>

          <div className="bg-[#1a1a2e] rounded-2xl p-6 border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#6c63ff]/10">
            <div className="text-4xl mb-3">🏅</div>
            <h3 className="text-xl font-semibold text-white">Unlock The Algorithm</h3>
            <p className="text-[#c4c4d4] text-sm mt-1">9th place (Final Ranking)</p>
            <p className="text-[#9a9ab0] text-sm mt-2">Daffodil International University</p>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            📸 Achievement Gallery
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="rounded-xl overflow-hidden border border-[#2a2a42] hover:border-[#6c63ff]/50 transition-all duration-300 group"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {img.caption && (
                  <div className="p-3 bg-[#1a1a2e] text-center text-sm text-[#c4c4d4]">
                    {img.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;


