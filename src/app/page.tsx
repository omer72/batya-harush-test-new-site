import React from "react";

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-16 bg-white">
        <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0fdef751204647a3bbd7eaa2827ed4f9.png" alt="Batya Harush" className="mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-[#080808]">קריינות | Batya Harush</h1>
        <p className="mt-4 text-lg text-[#20303c]">Welcome to Batya Harush's showcase! Dive into the world of a seasoned radio broadcaster and talented narrator.</p>
      </section>
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-8">בתיה הרוש | קריינית ושדרנית רדיו</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p>שמי בתיה הרוש, ואני שדרנית ומגישת רדיו בתחנות הרדיו המובילות בישראל: רדיו תל אביב, 99FM ורדיו דרום. קבלו השראה ממגוון פרסומות, פרומואים ותוכניות.</p>
          <p>ניתן להקליט קריינות באולפן או מהבית.</p>
        </div>
      </section>
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Sample Highlights</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p>Explore captivating voice samples through a curated selection of highlights.</p>
        </div>
      </section>
    </div>
  );
}
