import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  message: string;
  emoji: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Chen",
    role: "Crypto Analyst",
    message: "TUNAMI has the perfect balance of fun and utility. The staking mechanism is actually solid!",
    emoji: "👨‍💼",
  },
  {
    name: "Sarah Johnson",
    role: "DeFi Developer",
    message: "The smart contract audit was thorough. This is one of the safest meme tokens I've seen.",
    emoji: "👩‍💻",
  },
  {
    name: "Mike Rodriguez",
    role: "Community Manager",
    message: "The community is amazing. Real people, real engagement, no bots. That's rare in crypto.",
    emoji: "👨‍🔧",
  },
  {
    name: "Emma Wilson",
    role: "Solana Enthusiast",
    message: "Finally a token that respects Solana's speed. Transactions are instant, fees are minimal.",
    emoji: "👩‍🚀",
  },
  {
    name: "David Park",
    role: "AI Researcher",
    message: "The AI Agent integration is innovative. This is the future of autonomous trading.",
    emoji: "👨‍🔬",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    message: "TUNAMI's tokenomics are transparent. No hidden team tokens, no rug pull risk.",
    emoji: "👩‍💼",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text">
            What The Community Says
          </h2>
          <p className="text-xl text-white/80">
            Real feedback from real TUNAMI believers 🌊
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)]"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.emoji}</div>
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.message}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
