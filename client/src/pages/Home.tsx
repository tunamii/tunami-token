import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Rocket, Shield, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { toast } from "sonner";


export default function Home() {
  const [randomTuna, setRandomTuna] = useState("/images/tuna-1.png");
  
  const twitterLink = "https://twitter.com/tunamiisolana"; // User will add this

  // Set random TUNA image on page load
  useEffect(() => {
    const tunaImages = Array.from({ length: 53 }, (_, i) => `/images/tuna-${i + 1}.png`);
    const randomIndex = Math.floor(Math.random() * tunaImages.length);
    setRandomTuna(tunaImages[randomIndex]);
  }, []);



  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden text-white selection:bg-primary selection:text-black">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-black/40">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text font-display">
              TUNAMI
            </span>
            <span className="text-2xl">🍣</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm md:text-base">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            
            <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
            <a href="/generator" className="hover:text-primary transition-colors">Generator</a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Cyberpunk Sushi Background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/50 bg-primary/20 text-primary text-xs md:text-sm font-mono mb-4 animate-pulse mx-auto lg:mx-0">
              SOLANA NETWORK
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-display">
              The <span className="gradient-text">Cyber-Sushi</span><br />
              Revolution on <span className="text-primary">Solana</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0">
              TUNAMI combines the fun of meme culture with the speed of Solana. A next-generation AI Agent token. Ready for the wave? 🌊
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="outline" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 border-primary/50 text-primary hover:bg-primary/10 rounded-full" onClick={() => window.open(twitterLink, '_blank')}>
                <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                TWITTER
              </Button>
            </div>
          </div>

          {/* Mascot Image - Random TUNA */}
          <div className="relative h-64 md:h-96 lg:h-full flex items-center justify-center order-first lg:order-last">
            <img 
              src={randomTuna}
              alt="TUNAMI Mascot" 
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-in fade-in duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-16 md:py-20 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 gradient-text">Why TUNAMI?</h2>
            <p className="text-lg md:text-xl text-white/80">Not just a meme token, but a technological revolution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">Lightning Fast</h3>
                <p className="text-white/80">Transaction confirmation in seconds with Solana's power. No waiting, just speed.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">100% Safe</h3>
                <p className="text-white/80">Mint authority revoked. Community-driven and fully transparent.</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">AI-Powered</h3>
                <p className="text-white/80">Future technology integrated with AI Agents, smart and autonomous features.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-16 md:py-20 bg-black/40 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 gradient-text">Roadmap</h2>
            <p className="text-lg md:text-xl text-white/80">Moving forward with confidence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Phase 1 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Launch</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Website Launch
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Community Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Marketing Start
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Fair Launch
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Growth</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    CoinGecko Listing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    CoinMarketCap Listing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    10,000 Holders Goal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    CEX Discussions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">Dominance</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Tier 1 CEX Listing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    TUNAMI NFT Collection
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    AI Agent Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Global Marketing
                  </li>
                </ul>
              </CardContent>
            </Card>
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
