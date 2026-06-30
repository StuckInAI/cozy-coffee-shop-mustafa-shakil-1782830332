import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setSubmitted(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-900/20 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-orange-900/15 rounded-full blur-3xl opacity-30" />
        </div>

        <div className="relative max-w-2xl text-center space-y-8">
          {/* Logo/Title */}
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 border border-amber-700/40 rounded-full text-amber-600 text-sm font-medium">
              ☕ Coming Soon
            </div>
            <h1 className="text-6xl sm:text-7xl font-bold bg-gradient-to-b from-amber-50 to-amber-200 bg-clip-text text-transparent leading-tight">
              Brew & Vibe
            </h1>
            <p className="text-xl text-amber-100/80 font-light tracking-wide">
              Where every cup tells a story
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-zinc-400 max-w-md mx-auto leading-relaxed">
            Indie coffee roasted with intention, served with warmth. Cozy vibes, exceptional taste, and good people.
          </p>

          {/* Waitlist Form */}
          <form onSubmit={handleWaitlist} className="max-w-sm mx-auto space-y-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-orange-900/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="relative w-full px-6 py-4 bg-zinc-900 border border-amber-700/30 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-600/60 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-105 active:scale-100"
            >
              {submitted ? '✓ You\'re on the list!' : 'Join the Waitlist'}
            </button>
          </form>

          {submitted && (
            <p className="text-sm text-amber-300 animate-pulse">
              Thanks! We'll reach out soon with opening details.
            </p>
          )}
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h2 className="text-5xl font-bold text-amber-50">Our Menu</h2>
            <p className="text-amber-100/70 text-lg">
              Handpicked blends & seasonal specials
            </p>
          </div>

          {/* Scrollable Menu Cards */}
          <div className="overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-6 min-w-max px-4">
              {/* Espresso Classics */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Ritual</h3>
                    <p className="text-amber-200/60 text-sm">Espresso</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Single-origin pour. Bold, smooth, uncompromising. A moment to yourself.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$4</p>
                  </div>
                </div>
              </div>

              {/* Cappuccino */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Warmth</h3>
                    <p className="text-amber-200/60 text-sm">Cappuccino</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Creamy, velvety, balanced. Steamed milk meets perfect espresso.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$5.50</p>
                  </div>
                </div>
              </div>

              {/* Flat White */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Vibe</h3>
                    <p className="text-amber-200/60 text-sm">Flat White</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Silky microfoam, espresso forward. For those who know what they want.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$5.50</p>
                  </div>
                </div>
              </div>

              {/* Cortado */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Balance</h3>
                    <p className="text-amber-200/60 text-sm">Cortado</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Equal parts espresso and steamed milk. The perfect golden ratio.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$4.50</p>
                  </div>
                </div>
              </div>

              {/* Latte */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Comfort</h3>
                    <p className="text-amber-200/60 text-sm">Latte</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Smooth, gentle, enveloping. Like a warm hug in a cup.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$5</p>
                  </div>
                </div>
              </div>

              {/* Americano */}
              <div className="group relative w-80 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                <div className="relative h-full p-8 bg-zinc-900/50 border border-amber-700/20 rounded-2xl backdrop-blur-sm hover:border-amber-600/40 transition duration-300 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-amber-50">The Long Game</h3>
                    <p className="text-amber-200/60 text-sm">Americano</p>
                  </div>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    Espresso, hot water, time to breathe. Simple perfection.
                  </p>
                  <div className="pt-4 border-t border-amber-700/20">
                    <p className="text-amber-500 font-semibold">$4.50</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-zinc-400 mt-8">
            👈 Scroll for more
          </p>
        </div>
      </section>
    </div>
  );
}
