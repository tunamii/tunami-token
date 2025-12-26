import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function TunaVerse() {
  const [selectedTuna, setSelectedTuna] = useState<number | null>(null);
  
  const tunaImages = Array.from({ length: 53 }, (_, i) => ({
    id: i + 1,
    src: `/images/tuna-${i + 1}.png`,
    alt: `TUNAMI Mascot ${i + 1}`
  }));

  const handleSelectTuna = (id: number) => {
    setSelectedTuna(id);
    // Scroll to selected section
    const element = document.getElementById("selected-tuna");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleShare = () => {
    if (selectedTuna) {
      const text = `🍣 I just chose TUNA #${String(selectedTuna).padStart(2, '0')} as my Cyber-Sushi hero! Join the Tuna-Verse on @tunamiisolana 🌊`;
      const url = window.location.href;
      
      if (navigator.share) {
        navigator.share({
          title: "My Tunami",
          text: text,
          url: url
        });
      } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text);
        alert("Paylaşım metni panoya kopyalandı!");
      }
    }
  };

  const selectedTunaData = selectedTuna ? tunaImages.find(t => t.id === selectedTuna) : null;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden text-white selection:bg-primary selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm md:text-base font-medium">Back</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text font-display">
              TUNA-VERSE
            </span>
            <span className="text-2xl">🍣</span>
          </div>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs md:text-sm font-mono mb-4 animate-pulse">
              OUR CYBER-SUSHI HEROES
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display mb-4">
              Choose Your <span className="gradient-text">Tunami</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Pick your favorite Cyber-Sushi hero from our collection of 53 unique mascots. Each one is special! 🌊
            </p>
          </div>
        </div>
      </section>

      {/* Selected Tuna Display Section */}
      {selectedTunaData && (
        <section id="selected-tuna" className="relative py-12 md:py-16 bg-gradient-to-b from-primary/10 to-transparent border-t border-b border-primary/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Large Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-primary/50 flex items-center justify-center">
                <img 
                  src={selectedTunaData.src}
                  alt={selectedTunaData.alt}
                  className="w-full h-full object-contain p-8 drop-shadow-[0_0_30px_rgba(0,255,136,0.2)]"
                />
              </div>

              {/* Info Section */}
              <div className="space-y-6">
                <div>
                  <p className="text-primary font-mono text-sm mb-2">YOUR CHOSEN HERO</p>
                  <h2 className="text-5xl md:text-6xl font-bold font-display gradient-text">
                    #{String(selectedTuna).padStart(2, '0')}
                  </h2>
                  <p className="text-xl text-white/80 mt-2">Cyber-Sushi Champion</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white/60 text-sm mb-1">RARITY LEVEL</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i}
                          className={`h-2 flex-1 rounded-full ${i < 4 ? 'bg-primary' : 'bg-white/20'}`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white/60 text-sm mb-2">SPECIAL TRAITS</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">Cyber</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">Sushi</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-mono">Unique</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-6 h-12 neon-glow transition-all duration-300 flex items-center justify-center gap-2"
                    onClick={handleShare}
                  >
                    <Share2 className="h-4 w-4" />
                    Share My Choice
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-6 h-12 flex items-center justify-center gap-2"
                    onClick={() => setSelectedTuna(null)}
                  >
                    <Heart className="h-4 w-4" />
                    Choose Another
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="relative py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-display mb-2">
              {selectedTuna ? "Choose Another Hero" : "All 53 Cyber-Sushi Heroes"}
            </h2>
            <p className="text-white/60">Click on any mascot to select it as your Tunami!</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {tunaImages.map((tuna) => (
              <div 
                key={tuna.id}
                className={`group relative aspect-square rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  selectedTuna === tuna.id
                    ? 'ring-2 ring-primary bg-primary/20 border-primary/50'
                    : 'bg-white/5 border border-white/10 hover:border-primary/50'
                } hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]`}
                onClick={() => handleSelectTuna(tuna.id)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-black/40 to-black/60">
                  <img 
                    src={tuna.src}
                    alt={tuna.alt}
                    className="w-full h-full object-contain p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="text-center">
                      <p className="text-primary font-bold text-lg">#TUNA-{String(tuna.id).padStart(2, '0')}</p>
                      <p className="text-white/80 text-xs">Click to Select</p>
                    </div>
                  </div>

                  {/* Selected Badge */}
                  {selectedTuna === tuna.id && (
                    <div className="absolute top-2 right-2 bg-primary text-black rounded-full p-2">
                      <Heart className="h-4 w-4 fill-current" />
                    </div>
                  )}
                </div>

                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-center">
              <p className="text-white/60 text-sm mb-2 font-mono">TOTAL HEROES</p>
              <p className="text-4xl md:text-5xl font-bold text-primary font-mono">53</p>
            </div>
            <div className="p-6 md:p-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-center">
              <p className="text-white/60 text-sm mb-2 font-mono">YOUR CHOICE</p>
              <p className="text-4xl md:text-5xl font-bold text-primary font-mono">
                {selectedTuna ? `#${String(selectedTuna).padStart(2, '0')}` : '-'}
              </p>
            </div>
            <div className="p-6 md:p-8 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm text-center">
              <p className="text-white/60 text-sm mb-2 font-mono">COLLECTIBILITY</p>
              <p className="text-4xl md:text-5xl font-bold text-primary font-mono">∞</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to Join the Wave?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
            These Cyber-Sushi heroes are waiting for you on Solana. Be part of the revolution!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-8 h-12 md:h-14 text-base md:text-lg neon-glow transition-all duration-300">
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-primary/50 text-primary hover:bg-primary/10 rounded-full px-8 h-12 md:h-14 text-base md:text-lg"
              onClick={() => window.open("https://twitter.com/tunamiisolana", '_blank')}
            >
              Follow Us on Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-8 md:py-12">
        <div className="container mx-auto px-4 text-center text-sm md:text-base text-white/60">
          <p className="mb-4 text-xs text-red-400/80">
            Yasal Uyarı: Bu tamamen eğlence amaçlı, spekülatif bir varlıktır ve finansal bir değeri yoktur. Kendi araştırmanızı yapın (DYOR). Crypto yatırımları yüksek risk taşır. Bu site yatırım tavsiyesi değildir.
          </p>
          <p>© 2025 TUNAMI. All rights reserved. 🍣</p>
        </div>
      </footer>
    </div>
  );
}
