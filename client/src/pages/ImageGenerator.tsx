import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";

// Bu bileşen, kullanıcıların fotoğraf yükleyip Tunami logosu eklemesini sağlar.
export default function ImageGenerator() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);

  // Tunami logosunu yükle
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/tunami_ship_logo.png"; // Public dizine taşıdığımız logo
    img.onload = () => {
      logoImageRef.current = img;
      if (imageFile) {
        generateImage(imageFile); // Logo yüklendikten sonra görseli tekrar oluştur
      }
    };
    img.onerror = () => {
      toast.error("Tunami logosu yüklenemedi.");
    };
  }, []);

  const generateImage = useCallback((file: File) => {
    if (!logoImageRef.current) {
      toast.info("Logo yükleniyor, lütfen bekleyin...");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const userImg = new Image();
      userImg.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Canvas boyutunu kullanıcı görseline göre ayarla
        const width = userImg.width;
        const height = userImg.height;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 1. Kullanıcı görselini çiz
        ctx.drawImage(userImg, 0, 0, width, height);

        // 2. Tunami logosunu yerleştir
        const logo = logoImageRef.current!;
        const logoSize = Math.min(width, height) * 0.3; // Görselin %30'u kadar
        const logoX = width - logoSize - 20; // Sağ alt köşe
        const logoY = height - logoSize - 20;

        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

        // 3. Sonucu kaydet
        setGeneratedImage(canvas.toDataURL("image/png"));
      };
      userImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      generateImage(file);
    } else {
      toast.error("Lütfen geçerli bir resim dosyası yükleyin.");
      setImageFile(null);
      setGeneratedImage(null);
    }
  };

  const handleDownload = () => {
    if (generatedImage) {
      const link = document.createElement("a");
      link.href = generatedImage;
      link.download = "tunami-visual.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Görsel başarıyla indirildi!");
    } else {
      toast.error("Önce bir görsel oluşturmalısınız.");
    }
  };

  const handleReset = () => {
    setImageFile(null);
    setGeneratedImage(null);
    const input = document.getElementById("image-upload") as HTMLInputElement;
    if (input) input.value = "";
    toast.info("Sıfırlandı.");
  };

  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col items-center bg-black/40">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold font-display mb-4 gradient-text text-center">
          Tunami Görsel Oluşturucu 🌊
        </h1>
        <p className="text-lg text-white/80 text-center mb-10">
          Kendi fotoğrafınızı yükleyin ve Tunami logosu ile kişiselleştirin!
        </p>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 md:p-10 max-w-3xl mx-auto">
          <CardContent className="p-0 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <label htmlFor="image-upload" className="cursor-pointer">
                <Button asChild className="bg-primary hover:bg-primary/90 text-black font-bold rounded-full neon-glow transition-all duration-300">
                  <div className="flex items-center">
                    <Upload className="mr-2 h-5 w-5" />
                    {imageFile ? "Görseli Değiştir" : "Görsel Yükle"}
                  </div>
                </Button>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              
              <Button 
                onClick={handleDownload} 
                disabled={!generatedImage}
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                İndir
              </Button>

              <Button 
                onClick={handleReset} 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-bold rounded-full transition-all duration-300"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Sıfırla
              </Button>
            </div>

            <div className="flex justify-center">
              {generatedImage ? (
                <img 
                  src={generatedImage} 
                  alt="Oluşturulan Görsel" 
                  className="max-w-full h-auto rounded-lg shadow-2xl border border-primary/50"
                />
              ) : (
                <div className="w-full max-w-md h-64 flex items-center justify-center border-2 border-dashed border-white/30 rounded-lg text-white/60">
                  {imageFile ? "Görsel oluşturuluyor..." : "Lütfen bir görsel yükleyin."}
                </div>
              )}
            </div>
            
            {/* Canvas gizli kalacak */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
