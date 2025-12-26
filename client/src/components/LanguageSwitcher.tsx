import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "tr", label: "TR", flag: "🇹🇷" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "de", label: "DE", flag: "🇩🇪" },
  ];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          size="sm"
          variant={language === lang.code ? "default" : "outline"}
          className={`h-8 px-2 text-xs font-bold ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "border-white/20 text-muted-foreground hover:text-foreground"
          }`}
          onClick={() => setLanguage(lang.code as any)}
        >
          {lang.flag} {lang.label}
        </Button>
      ))}
    </div>
  );
}
