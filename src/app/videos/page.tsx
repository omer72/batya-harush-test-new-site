import React from "react";

export default function VideosPage() {
  return (
    <div className="py-16">
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8">קריינות טלוויזיה</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-8">Explore Batya Harush's works including commercials for brands like Nivea, Clinique, and more.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img src="https://i.ytimg.com/vi/vKBOZtSOB-Y/mqdefault.jpg" alt="Video thumbnail 1" className="w-full" />
            <img src="https://i.ytimg.com/vi/mk56HdeJWM4/mqdefault.jpg" alt="Video thumbnail 2" className="w-full" />
            <img src="https://i.ytimg.com/vi/z2mq4xyE3jo/mqdefault.jpg" alt="Video thumbnail 3" className="w-full" />
            <img src="https://i.ytimg.com/vi/UzoCsd4u8dk/mqdefault.jpg" alt="Video thumbnail 4" className="w-full" />
            <img src="https://i.ytimg.com/vi/hgDMn0VAZ28/mqdefault.jpg" alt="Video thumbnail 5" className="w-full" />
            <img src="https://i.ytimg.com/vi/Q66fzcBa028/mqdefault.jpg" alt="Video thumbnail 6" className="w-full" />
            <img src="https://i.ytimg.com/vi/ky2kwfpKj6g/mqdefault.jpg" alt="Video thumbnail 7" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
