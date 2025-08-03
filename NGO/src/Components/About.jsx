import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">👥 About Us</h2>

      {/* Our Story */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-gray-700 leading-relaxed space-y-4">
          At <strong>Udaan Foundation</strong>, our journey began with a simple belief — every child deserves a fair chance to dream, grow, and succeed.

          In many parts of our country, children face barriers like hunger, lack of access to education, and limited opportunities. Witnessing this firsthand, a small group of passionate individuals came together in 2025 with a mission to bring about change — one meal, one child, and one classroom at a time.

          What started as a small initiative to support school-going children with nutritious mid-day meals has now grown into a broader movement to empower communities through education, nutrition, and care. Over time, we’ve seen the incredible impact of consistent support — students who once skipped school are now regular learners, some even pursuing higher education and inspiring their own communities.

          Our work is rooted in compassion, transparency, and a deep commitment to social equality. Each child we support is not just a beneficiary, but a future leader, doctor, artist, teacher — a dreamer with limitless potential.

          Today, Udaan Foundation stands as a symbol of hope — giving wings to thousands of dreams across India.
        </p>
      </section>

      {/* Our Team */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <img className="h-72 w-[300px] object-cover rounded-lg" src="/team1.webp" alt="Team Member 1" />
          <img className="h-72 w-[300px] object-cover rounded-lg" src="/team3.webp" alt="Team Member 2" />
          <img className="h-72 w-[300px] object-cover rounded-lg" src="/team2.webp" alt="Team Member 3" />
        </div>
      </section>

      {/* Campaigns */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Our Campaigns</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <img className="h-64 w-80 object-cover rounded-lg" src="/ngo1.webp" alt="Campaign 1" />
          <img className="h-64 w-80 object-cover rounded-lg" src="/ngo2.webp" alt="Campaign 2" />
          <img className="h-64 w-80 object-cover rounded-lg" src="/ngo3.jpeg" alt="Campaign 3" />
          <img className="h-64 w-80 object-cover rounded-lg" src="/ngo4.jpeg" alt="Campaign 4" />
        </div>
      </section>

      {/* Why Join Us */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Why You Should Join Us</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          At <strong>Udaan Foundation</strong>, we don’t just serve — we transform lives. By joining us, you become a part of a mission that’s building a better, more equal world. Every effort you make — whether it's donating, volunteering, or spreading awareness — directly helps children access food, education, and a brighter future.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>You bring hope to a child who dreams of learning.</li>
          <li>You help break the cycle of poverty and hunger.</li>
          <li>You support long-term development through education.</li>
          <li>You become part of a transparent, people-driven movement.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
