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
  const [randomTunaImage, setRandomTunaImage] = useState<string | null>(null);

  const tunaImages = Array.from({ length: 50 }, (_, i) => `/images/tuna_gen_${(i + 1).toString().padStart(2, '0')}.png`);

  const getRandomTunaImage = () => {
    const randomIndex = Math.floor(Math.random() * tunaImages.length);
    return tunaImages[randomIndex];
  };

  // Rastgele Tuna görselini yükle
  // Rastgele Tuna görselini yükle
  useEffect(() => {
    const randomImageSrc = getRandomTunaImage();
    setRandomTunaImage(randomImageSrc);
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = randomImageSrc;
    img.onload = () => {
      logoImageRef.current = img;
      if (imageFile) {
        generateImage(imageFile, img); // Görsel yüklendikten sonra resmi oluştur
      }
    };
    img.onerror = () => {
      toast.error("Tuna görseli yüklenemedi.");
    };
  }, []); // Sadece ilk yüklemede bir Tuna görseli yükle. Yeni resim yüklenince değil.

  const generateImage = useCallback((file: File, tunaImage: HTMLImageElement) => {
    // Görsel işleme hızını artırmak için, FileReader'ı sadece bir kez kullanıp
    // canvas'ı doğrudan kullanıcının yüklediği resim verisiyle güncelleyeceğiz.
    // Ancak, mevcut yapı zaten FileReader kullanıyor. Optimizasyon için
    // görsel boyutunu küçültme mantığını ekledik.
    // Ayrıca, tunaImage'in yüklenip yüklenmediğini kontrol etmeye gerek yok,
    // çünkü useEffect içinde zaten kontrol ediliyor ve yüklenmiş bir img objesi
    // olarak generateImage'e gönderiliyor.

    const reader = new FileReader();
    reader.onload = (e) => {
      const userImg = new Image();
      userImg.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Canvas boyutunu kullanıcı görseline göre ayarla
        // Canvas boyutunu optimize et: Maksimum 1000x1000'e küçült
        const maxWidth = 1000;
        const maxHeight = 1000;
        let width = userImg.width;
        let height = userImg.height;

        if (width > height) {
          if (width > maxWidth) {
            height = height * (maxWidth / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = width * (maxHeight / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 1. Kullanıcı görselini çiz
        ctx.drawImage(userImg, 0, 0, width, height);

        // 2. Tuna görselini yerleştir
        const logo = tunaImage;
        // Mobil uyumluluk için logo boyutunu ve kenar boşluğunu dinamik yap
        const isMobile = width < 600;
        const logoSize = Math.min(width, height) * (isMobile ? 0.25 : 0.4); // Mobil için %25, masaüstü için %40
        const padding = isMobile ? 10 : 20;
        const logoX = width - logoSize - padding; // Sağ alt köşe
        const logoY = height - logoSize - padding; // Sağ alt köşe

        ctx.drawImage(logo, logoX, logoY, logoSize, logoSize);

        // 3. Sonucu kaydet
        setGeneratedImage(canvas.toDataURL("image/png"));
      };
      // Kullanıcı görselini daha hızlı yüklemek için boyutlandırma yapmadan önce çiz
      userImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
      if (logoImageRef.current) {
        generateImage(file, logoImageRef.current);
      } else {
        // Eğer logo hala yüklenmediyse, kullanıcıya bilgi ver.
        toast.info("Tuna görseli hala yükleniyor, lütfen tekrar deneyin.");
      }
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
          Kendi fotoğrafınızı yükleyin ve üzerine rastgele bir Tuna/Sushi görseli ekleyin!
        </p>

        <Card className="bg-white/10 border-white/20 backdrop-blur-sm p-6 md:p-10 max-w-3xl mx-auto">
          <CardContent className="p-0 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <label htmlFor="image-upload" className="cursor-pointer w-full sm:w-auto">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-black font-bold rounded-full neon-glow transition-all duration-300">
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
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                İndir
              </Button>

              <Button 
                onClick={handleReset} 
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold rounded-full transition-all duration-300"
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
