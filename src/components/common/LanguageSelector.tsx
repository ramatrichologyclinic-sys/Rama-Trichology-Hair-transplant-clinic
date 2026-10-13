"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", flag: "🇮🇳" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [isLoaded, setIsLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize and read existing language preference from cookies / localStorage
  useEffect(() => {
    // 1. Read existing cookie
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const cookieLang = getCookie("googtrans");
    if (cookieLang) {
      const code = cookieLang.split("/").pop();
      if (code && LANGUAGES.some((l) => l.code === code)) {
        setCurrentLang(code);
      }
    } else {
      const stored = localStorage.getItem("rama_selected_lang");
      if (stored && LANGUAGES.some((l) => l.code === stored)) {
        setCurrentLang(stored);
      }
    }

    // 2. Define global Google Translate initialization callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr,gu,pa",
            autoDisplay: false,
          },
          "google_translate_element"
        );
        setIsLoaded(true);
      }
    };

    // 3. Inject Google Translate script if not present
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      setIsLoaded(true);
    }

    // 4. Actively suppress Google Translate banner and body offset
    const suppressGoogleBanner = () => {
      if (document.body.style.top && document.body.style.top !== "0px") {
        document.body.style.top = "0px";
      }
      if (document.documentElement.style.top && document.documentElement.style.top !== "0px") {
        document.documentElement.style.top = "0px";
      }
      const bannerElements = document.querySelectorAll(
        "body > .skiptranslate, body > iframe.skiptranslate, iframe.skiptranslate, .goog-te-banner-frame, .VIpgJd-ZVi9od-aZ2wEe-wOHMyf, .VIpgJd-ZVi9od-ORHb-OEVmcd, .VIpgJd-ZVi9od-xl07Ob-OEVmcd"
      );
      bannerElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.id !== "google_translate_element") {
          htmlEl.style.setProperty("display", "none", "important");
          htmlEl.style.setProperty("visibility", "hidden", "important");
          htmlEl.style.setProperty("height", "0", "important");
          htmlEl.style.setProperty("width", "0", "important");
          htmlEl.style.setProperty("opacity", "0", "important");
          htmlEl.style.setProperty("pointer-events", "none", "important");
        }
      });
    };

    suppressGoogleBanner();
    const bannerObserver = new MutationObserver(() => {
      suppressGoogleBanner();
    });
    bannerObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style", "class"],
      childList: true,
    });

    // 5. Click outside listener
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // 6. Escape key listener
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    // 7. Listen for custom sync event across multiple selector instances
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail && LANGUAGES.some((l) => l.code === customEvent.detail)) {
        setCurrentLang(customEvent.detail);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("rama_lang_change", handleSync);

    return () => {
      bannerObserver.disconnect();
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("rama_lang_change", handleSync);
    };
  }, []);

  // Handle switching language
  const handleSelectLanguage = (langCode: string) => {
    setCurrentLang(langCode);
    localStorage.setItem("rama_selected_lang", langCode);
    window.dispatchEvent(new CustomEvent("rama_lang_change", { detail: langCode }));
    setIsOpen(false);

    const domain = window.location.hostname;
    const cookieValue = `/en/${langCode}`;

    if (langCode === "en") {
      // Clear cookie completely
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      document.cookie = `googtrans=/en/en; path=/;`;
      if (domain && domain !== "localhost") {
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
        document.cookie = `googtrans=/en/en; path=/; domain=.${domain};`;
      }
    } else {
      // Set translation cookie
      document.cookie = `googtrans=${cookieValue}; path=/;`;
      if (domain && domain !== "localhost") {
        document.cookie = `googtrans=${cookieValue}; path=/; domain=.${domain};`;
      }
    }

    // Trigger translation through Google's native combo select if available
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (selectEl) {
      if (langCode === "en") {
        selectEl.value = "en";
        if (selectEl.value !== "en") {
          selectEl.selectedIndex = 0;
        }
      } else {
        selectEl.value = langCode;
      }
      selectEl.dispatchEvent(new Event("change", { bubbles: true }));
    } else {
      // Reload so Google Translate applies cookie on page load
      window.location.reload();
    }

    // Run banner suppression immediately and after brief timeouts
    const suppress = () => {
      if (document.body.style.top) document.body.style.top = "0px";
      const banners = document.querySelectorAll(
        "body > .skiptranslate, body > iframe.skiptranslate, iframe.skiptranslate, .goog-te-banner-frame, .VIpgJd-ZVi9od-aZ2wEe-wOHMyf"
      );
      banners.forEach((el) => {
        const htmlEl = el as HTMLElement;
        if (htmlEl.id !== "google_translate_element") {
          htmlEl.style.setProperty("display", "none", "important");
          htmlEl.style.setProperty("visibility", "hidden", "important");
          htmlEl.style.setProperty("height", "0", "important");
        }
      });
    };
    suppress();
    setTimeout(suppress, 50);
    setTimeout(suppress, 200);
    setTimeout(suppress, 500);
  };

  const currentLangObj =
    LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  return (
    <div ref={dropdownRef} className="relative inline-block text-left notranslate">
      {/* Sleek Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-full border border-sky-200/80 bg-white/95 hover:bg-sky-50 text-navy-950 font-semibold text-xs sm:text-sm shadow-xs hover:border-[#007baa]/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007baa]"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`Current language: ${currentLangObj.name}. Click to change language`}
      >
        <Globe className="w-4 h-4 text-[#007baa] flex-shrink-0" />
        <span className="font-bold tracking-wide uppercase text-navy-950">
          {currentLangObj.code}
        </span>
        <span className="hidden xl:inline text-xs font-normal text-slate-500">
          {currentLangObj.nativeName}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>

      {/* Sleek Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 sm:w-56 rounded-2xl bg-white shadow-2xl border border-sky-100 p-2 z-50 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-label="Select language"
          >
            <div className="px-2.5 py-1.5 border-b border-gray-100 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800">
                Select Website Language
              </span>
            </div>

            <div className="space-y-0.5">
              {LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    role="menuitem"
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs sm:text-sm font-medium transition-colors ${
                      isSelected
                        ? "bg-sky-100/80 text-blue-800 font-bold"
                        : "text-navy-950 hover:bg-sky-50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{lang.flag}</span>
                      <div className="flex flex-col">
                        <span className="leading-tight">{lang.nativeName}</span>
                        <span className="text-[10px] text-slate-500 font-normal leading-tight">
                          {lang.name}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check className="w-4 h-4 text-blue-700 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
