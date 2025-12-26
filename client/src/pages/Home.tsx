import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, ExternalLink, Rocket, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "8xG7...PLACEHOLDER...9jK2"; // Placeholder CA

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    toast.success("Contract Address kopyalandı!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-background/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
              TUNAMI
            </span>
            <span className="text-2xl">🍣</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#about" className="hover:text-primary transition-colors">Hakkında</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">
            BUY $TUNAMI
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Cyberpunk Sushi Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4 animate-pulse">
              SOLANA NETWORK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display">
              The <span className="text-primary">Cyber-Sushi</span><br />
              Revolution on <span className="text-accent">Solana</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              TUNAMI, meme kültürünün eğlencesini Solana'nın hızıyla birleştiren yeni nesil bir AI Agent tokenidir. Dalgalara hazır mısın? 🌊
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                HEMEN AL
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                <ExternalLink className="mr-2 h-5 w-5" />
                TELEGRAM
              </Button>
            </div>

            {/* Contract Address Box */}
            <div className="mt-8 p-4 rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm max-w-md mx-auto lg:mx-0">
              <p className="text-xs text-muted-foreground mb-2 font-mono">CONTRACT ADDRESS (CA)</p>
              <div className="flex items-center justify-between gap-2 bg-black/30 p-3 rounded-lg border border-white/5">
                <code className="text-sm md:text-base font-mono text-primary truncate">
                  {contractAddress}
                </code>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                  onClick={copyToClipboard}
                >
                  {copied ? <span className="text-green-500">✓</span> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]"></div>
              <img 
                src="/images/mascot.png" 
                alt="Tunami Mascot" 
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.3)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Neden <span className="text-primary">TUNAMI?</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sadece bir meme token değil, aynı zamanda teknolojik bir devrim.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-10 w-10 text-primary" />,
                title: "Işık Hızında",
                desc: "Solana ağının gücüyle saniyeler içinde işlem onayı. Beklemek yok, sadece hız var."
              },
              {
                icon: <Shield className="h-10 w-10 text-accent" />,
                title: "%100 Güvenli",
                desc: "Liquidity yakıldı, mint yetkisi iptal edildi. Topluluk odaklı ve tamamen şeffaf."
              },
              {
                icon: <Rocket className="h-10 w-10 text-chart-3" />,
                title: "AI Destekli",
                desc: "Geleceğin teknolojisi AI Agent'lar ile entegre, akıllı ve otonom özellikler."
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/30 border-white/10 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-24 bg-black/20 relative">
        <div className="absolute inset-0 z-0">
           <img 
            src="/images/tokenomics-bg.jpg" 
            alt="Tokenomics Background" 
            className="w-full h-full object-cover opacity-10 mix-blend-screen"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">
                Tokenomics <span className="text-accent">Yapısı</span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-card/30 border border-white/10 backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">Toplam Arz</span>
                    <span className="text-2xl font-bold font-mono text-primary">1,000,000,000</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-full"></div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl bg-card/30 border border-white/10 backdrop-blur-sm">
                    <span className="text-accent text-4xl font-bold block mb-2">0%</span>
                    <span className="text-muted-foreground">Alış/Satış Vergisi</span>
                  </div>
                  <div className="p-6 rounded-xl bg-card/30 border border-white/10 backdrop-blur-sm">
                    <span className="text-chart-3 text-4xl font-bold block mb-2">100%</span>
                    <span className="text-muted-foreground">LP Kilitli</span>
                  </div>
                </div>

                <ul className="space-y-4 mt-8">
                  {[
                    "Liquidity Pool Yakıldı 🔥",
                    "Mint Yetkisi İptal Edildi 🚫",
                    "Team Token Yok 🤝",
                    "Tamamen Topluluk Odaklı 🌍"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg">
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Abstract Chart Representation */}
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 rounded-full border-[20px] border-primary/20 animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-[20px] border-accent/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-6xl font-bold font-display text-white">1B</span>
                  <span className="text-xl text-primary font-mono">$TUNAMI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Yol <span className="text-primary">Haritası</span></h2>
            <p className="text-muted-foreground">Geleceğe doğru emin adımlarla.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>

            {[
              {
                phase: "Faz 1",
                title: "Başlangıç",
                items: ["Website Lansmanı", "Topluluk Kurulumu", "Marketing Başlangıcı", "Fair Launch"],
                image: "/images/roadmap-icon-1.png"
              },
              {
                phase: "Faz 2",
                title: "Büyüme",
                items: ["CoinGecko Listeleme", "CoinMarketCap Listeleme", "10,000 Holder Hedefi", "CEX Görüşmeleri"],
                image: "/images/mascot.png" // Reusing mascot for variety
              },
              {
                phase: "Faz 3",
                title: "Hakimiyet",
                items: ["Tier 1 CEX Listeleme", "TUNAMI NFT Koleksiyonu", "AI Agent Entegrasyonu", "Global Marketing"],
                image: "/images/roadmap-icon-2.png"
              }
            ].map((phase, i) => (
              <div key={i} className="relative pt-8 group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 shadow-[0_0_20px_var(--primary)]"></div>
                <Card className="bg-card/30 border-white/10 backdrop-blur-sm h-full hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative h-32 w-32 mx-auto">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all"></div>
                      <img src={phase.image} alt={phase.title} className="relative z-10 w-full h-full object-contain" />
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                      {phase.phase}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-display">{phase.title}</h3>
                    <ul className="space-y-2 text-left mx-auto max-w-[200px]">
                      {phase.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/40">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
              TUNAMI
            </span>
            <span className="text-3xl">🍣</span>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
              <ExternalLink className="h-6 w-6" />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all">
              <Rocket className="h-6 w-6" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            © 2025 TUNAMI Token. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50 max-w-md mx-auto">
            Yasal Uyarı: Kripto para yatırımları yüksek risk içerir. Lütfen kendi araştırmanızı yapın (DYOR). 
            Bu site yatırım tavsiyesi değildir.
          </p>
        </div>
      </footer>
    </div>
  );
}
