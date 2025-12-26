import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Coins, Lock, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Staking() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [isStaking, setIsStaking] = useState(true);

  const handleStake = () => {
    if (!stakeAmount) return;
    toast.success(isStaking ? "Başarıyla Stake edildi! 🍣" : "Unstake işlemi başlatıldı!");
    setStakeAmount("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-hidden relative">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-white/10 bg-background/50 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5 text-primary" />
            <span className="font-bold font-display">Ana Sayfaya Dön</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-display">
              TUNAMI
            </span>
            <span className="text-xl">🍣</span>
            <span className="ml-2 px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-mono border border-primary/30">
              STAKING V1
            </span>
          </div>
        </div>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-display">
              Stake <span className="text-primary">$TUNAMI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Tokenlarını kilitle, <span className="text-accent font-bold">Sushi Rewards</span> kazan.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Güncel APY</p>
                  <p className="text-2xl font-bold font-mono text-primary">%125.4</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Lock className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Toplam Kilitli (TVL)</p>
                  <p className="text-2xl font-bold font-mono text-accent">$452,890</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-chart-3/10 text-chart-3">
                  <Coins className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kazanılan Ödül</p>
                  <p className="text-2xl font-bold font-mono text-chart-3">0.00 TUNAMI</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Staking Interface */}
          <div className="grid lg:grid-cols-5 gap-8">
            
            {/* Main Action Panel */}
            <Card className="lg:col-span-3 bg-card/50 border-primary/20 backdrop-blur-md shadow-[0_0_50px_rgba(0,240,255,0.1)]">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Staking Paneli</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="stake" className="w-full" onValueChange={(v) => setIsStaking(v === "stake")}>
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-black/40">
                    <TabsTrigger value="stake" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-bold">STAKE</TabsTrigger>
                    <TabsTrigger value="unstake" className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground font-bold">UNSTAKE</TabsTrigger>
                  </TabsList>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Miktar</span>
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Wallet className="h-3 w-3" /> Bakiye: <span className="text-foreground font-mono">0.00</span>
                        </span>
                      </div>
                      <div className="relative">
                        <Input 
                          type="number" 
                          placeholder="0.00" 
                          className="h-14 text-lg bg-black/20 border-white/10 focus:border-primary/50 pr-20 font-mono"
                          value={stakeAmount}
                          onChange={(e) => setStakeAmount(e.target.value)}
                        />
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="absolute right-2 top-2 h-10 text-primary hover:text-primary hover:bg-primary/10 font-bold"
                          onClick={() => setStakeAmount("1000")}
                        >
                          MAX
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tahmini Getiri (Yıllık)</span>
                        <span className="font-mono text-primary">%125.4</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Kilit Süresi</span>
                        <span className="font-mono text-foreground">7 Gün</span>
                      </div>
                    </div>

                    <Button 
                      className={`w-full h-12 text-lg font-bold shadow-lg transition-all ${
                        isStaking 
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20" 
                          : "bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-destructive/20"
                      }`}
                      onClick={handleStake}
                    >
                      {isStaking ? "STAKE ET 🍣" : "UNSTAKE ET 💸"}
                    </Button>
                  </div>
                </Tabs>
              </CardContent>
            </Card>

            {/* Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-card/30 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-display">Nasıl Çalışır?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    1. <span className="text-primary font-bold">Cüzdanını Bağla:</span> Solana cüzdanını (Phantom, Solflare) bağlayarak başla.
                  </p>
                  <p>
                    2. <span className="text-primary font-bold">Stake Et:</span> Elindeki $TUNAMI tokenları havuza kilitle.
                  </p>
                  <p>
                    3. <span className="text-primary font-bold">Kazan:</span> Her saniye ödül kazanmaya başla. İstediğin zaman (7 gün kilit süresinden sonra) çekim yap.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/20 to-transparent border-accent/20">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-accent mb-2 font-display">VIP Havuzlar 🌊</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Çok yakında NFT sahiplerine özel yüksek getirili havuzlar açılacak!
                  </p>
                  <Button variant="outline" className="w-full border-accent/50 text-accent hover:bg-accent/10" disabled>
                    Çok Yakında
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
