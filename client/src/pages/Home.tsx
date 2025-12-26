import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, ExternalLink, Rocket, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();
  const contractAddress = ""; // Boş bırakıldı - kullanıcı ekleyecek
  const twitterLink = ""; // Boş bırakıldı - kullanıcı ekleyecek
  const tokenLink = ""; // Boş bırakıldı - kullanıcı ekleyecek

  const copyToClipboard = () => {
    if (!contractAddress) {
      toast.info("Contract Address yakında açıklanacak!");
      return;
    }
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
            <a href="#about" className="hover:text-primary transition-colors">{t("nav.about")}</a>
            <a href="#tokenomics" className="hover:text-primary transition-colors">{t("nav.tokenomics")}</a>
            <a href="#roadmap" className="hover:text-primary transition-colors">{t("nav.roadmap")}</a>
            <Link href="/staking" className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {t("nav.staking")}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-6 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">
              {t("nav.buy")}
            </Button>
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
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4 animate-pulse">
              {t("hero.solana")} NETWORK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight font-display">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                {t("hero.cta1")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 border-primary/50 text-primary hover:bg-primary/10 rounded-full">
                <ExternalLink className="mr-2 h-5 w-5" />
                {t("hero.cta2")}
              </Button>
              <Link href="/staking">
                <Button size="lg" variant="secondary" className="text-lg h-14 px-8 bg-accent/10 text-accent hover:bg-accent/20 border border-accent/20 rounded-full">
                  {t("hero.cta3")}
                </Button>
              </Link>
            </div>

            {/* Contract Address Box */}
            <div className="mt-8 p-4 rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm max-w-md mx-auto lg:mx-0">
              <p className="text-xs text-muted-foreground mb-2 font-mono">{t("hero.ca")}</p>
              <div className="flex items-center justify-between gap-2 bg-black/30 p-3 rounded-lg border border-white/5">
                <code className="text-sm md:text-base font-mono text-primary truncate">
                  {contractAddress || t("hero.ca_placeholder")}
                </code>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 hover:text-primary hover:bg-primary/10"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mascot Image */}
          <div className="relative h-96 lg:h-full flex items-center justify-center">
            <img 
              src="/images/mascot.png" 
              alt="TUNAMI Mascot" 
              className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-card/20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">{t("about.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("about.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{t("about.feature1")}</h3>
                <p className="text-muted-foreground">{t("about.feature1_desc")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{t("about.feature2")}</h3>
                <p className="text-muted-foreground">{t("about.feature2_desc")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-chart-3/10 text-chart-3 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">{t("about.feature3")}</h3>
                <p className="text-muted-foreground">{t("about.feature3_desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">{t("tokenomics.title")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm">
                <p className="text-muted-foreground text-sm mb-2">{t("tokenomics.total_supply")}</p>
                <p className="text-3xl font-bold text-primary font-mono">Yakında Açıklanacak</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm">
                <p className="text-muted-foreground text-sm mb-2">{t("tokenomics.tax")}</p>
                <p className="text-3xl font-bold text-accent font-mono">0%</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 border border-white/10 backdrop-blur-sm">
                <p className="text-muted-foreground text-sm mb-2">{t("tokenomics.lp")}</p>
                <p className="text-3xl font-bold text-chart-3 font-mono">✅ Evet</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-primary font-bold">{t("tokenomics.benefit1")}</p>
              </div>
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                <p className="text-accent font-bold">{t("tokenomics.benefit2")}</p>
              </div>
              <div className="p-4 rounded-lg bg-chart-3/10 border border-chart-3/20">
                <p className="text-chart-3 font-bold">{t("tokenomics.benefit3")}</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <p className="text-purple-400 font-bold">{t("tokenomics.benefit4")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-20 bg-card/20 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">{t("roadmap.title")}</h2>
            <p className="text-xl text-muted-foreground">{t("roadmap.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4 font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{t("roadmap.phase1_title")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t("roadmap.phase1_item1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t("roadmap.phase1_item2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t("roadmap.phase1_item3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {t("roadmap.phase1_item4")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center mb-4 font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{t("roadmap.phase2_title")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {t("roadmap.phase2_item1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {t("roadmap.phase2_item2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {t("roadmap.phase2_item3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    {t("roadmap.phase2_item4")}
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="bg-card/50 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-chart-3/20 text-chart-3 flex items-center justify-center mb-4 font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4 font-display">{t("roadmap.phase3_title")}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-chart-3"></span>
                    {t("roadmap.phase3_item1")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-chart-3"></span>
                    {t("roadmap.phase3_item2")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-chart-3"></span>
                    {t("roadmap.phase3_item3")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-chart-3"></span>
                    {t("roadmap.phase3_item4")}
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-card/20 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t("footer.disclaimer")}</p>
          <p className="mt-4">© 2025 TUNAMI. All rights reserved. 🍣</p>
        </div>
      </footer>
    </div>
  );
}
