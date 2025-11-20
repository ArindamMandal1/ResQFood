// src/pages/Landing.jsx
import React from "react";

const Feature = ({ title, body }) => (
  <div className="bg-white/90 rounded-xl p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{body}</p>
  </div>
);

const TestimonialCard = ({ quote, author }) => (
  <div className="bg-white rounded-xl p-10 shadow-2xl">
    <p className="text-lg leading-relaxed text-gray-700">“{quote}”</p>
    <div className="mt-6 font-semibold text-sm text-gray-900">{author}</div>
  </div>
);

export default function Landing() {
  return (
    <div className="min-h-screen relative bg-gray-50 pt-8">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1733306621909-1d63c088a93e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2QlMjBiYW5rfGVufDB8fDB8fHww')" }}
      />
      <div className="absolute inset-0 bg-black/55" />

      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-32 flex items-start gap-6">
          {/* left hero content */}
          <div className="w-full md:w-2/3 lg:w-1/2 text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">Rescue Food. Feed Communities.</h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-xl">
              Connect restaurants and food providers with NGOs and volunteers to redistribute surplus meals to those who need them.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#features" className="inline-block bg-white/90 text-green-700 px-5 py-3 rounded-lg font-medium shadow">Learn more</a>
              <a href="#testimonials" className="inline-block border border-white/30 text-white px-5 py-3 rounded-lg">Testimonials</a>
            </div>

            {/* metrics row under CTA for mobile */}
            <div className="mt-12 grid grid-cols-3 gap-4 md:hidden">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold">10K+</div>
                <div className="text-xs text-white/80">Meals Shared</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold">500+</div>
                <div className="text-xs text-white/80">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold">200+</div>
                <div className="text-xs text-white/80">NGOs</div>
              </div>
            </div>
          </div>

          {/* right: BIG metrics card (only on md+) */}
          <div className="hidden md:block md:w-1/2 lg:w-2/5 relative">
            <div
              className="absolute -top-8 right-0 w-96 rounded-xl p-8 shadow-2xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.6)"
              }}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-7xl md:text-5xl font-extrabold text-orange-600">10K+</div>
                    <div className="text-7xl md:text-4xl font-extrabold text-gray-700">Meals shared</div>
                   
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-7xl md:text-5xl font-extrabold text-green-600">500+</div>
                    <div className="text-7xl md:text-4xl font-extrabold text-gray-700">Restraunts</div>
                  </div>
                  
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-7xl md:text-5xl font-extrabold text-cyan-600">200+</div>
                    <div className="text-5xl md:text-5xl font-extrabold text-gray-700">NGO Partners</div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <section id="features" className="max-w-7xl mx-auto px-6 py-16 -mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">Why ResQFood</h2>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Feature title="Real-time Matching" body="Restaurants post surplus food and nearby NGOs are notified instantly for pickup."/>
            <Feature title="Simple Workflow" body="Create a post in seconds — add quantity, pickup time and location."/>
            <Feature title="Track & Report" body="Track collections, measure impact and get reports to help reduce waste and feed people."/>
          </div>
        </section>

        {/* Testimonials — bigger cards, column-first feel */}
        <section id="testimonials" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-left">What partners say</h3>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard quote="ResQFood helped us stop wasting perfectly good meals and feed people in our area." author="— Green Leaf Restaurant" />
            <TestimonialCard quote="Super easy to claim posts and coordinate pickups — game changer." author="— Helping Hands NGO" />
            <TestimonialCard quote="Fast matching and clear information — saved time and food." author="— Community Kitchen" />
          </div>
        </section>
      </main>
    </div>
  );
}
