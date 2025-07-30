import React, { useState, useRef, useEffect, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

interface Language {
  code: string;
  name: string;
  flag: ReactElement;
}

const languages: Language[] = [
  { 
    code: 'en', 
    name: 'English', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 7410 3900" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M0,0h7410v3900H0" fill="#b31942"/>
        <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#FFF" strokeWidth="300"/>
        <path d="M0,0h2964v2100H0" fill="#0a3161"/>
        <g fill="#FFF">
          <g id="s18">
            <g id="s9">
              <g id="s5">
                <g id="s4">
                  <path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"/>
                  <use xlinkHref="#s" y="420"/>
                  <use xlinkHref="#s" y="840"/>
                  <use xlinkHref="#s" y="1260"/>
                </g>
                <use xlinkHref="#s" y="1680"/>
              </g>
              <use xlinkHref="#s4" x="247" y="210"/>
            </g>
            <use xlinkHref="#s9" x="494"/>
          </g>
          <use xlinkHref="#s18" x="988"/>
          <use xlinkHref="#s9" x="1976"/>
          <use xlinkHref="#s5" x="2470"/>
        </g>
      </svg>
    )
  },
  { 
    code: 'es', 
    name: 'Español', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 750 500" xmlns="http://www.w3.org/2000/svg">
        <rect width="750" height="500" fill="#c60b1e"/>
        <rect width="750" height="250" y="125" fill="#ffc400"/>
      </svg>
    )
  },
  { 
    code: 'fr', 
    name: 'Français', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="600" fill="#ED2939"/>
        <rect width="600" height="600" fill="#fff"/>
        <rect width="300" height="600" fill="#002395"/>
      </svg>
    )
  },
  { 
    code: 'de', 
    name: 'Deutsch', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="1000" height="600" fill="#ffce00"/>
        <rect width="1000" height="400" y="200" fill="#d00"/>
        <rect width="1000" height="200" y="400" fill="#000"/>
      </svg>
    )
  },
  { 
    code: 'nl', 
    name: 'Nederlands', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="600" fill="#AE1C28"/>
        <rect width="900" height="400" y="200" fill="#fff"/>
        <rect width="900" height="200" y="400" fill="#21468B"/>
      </svg>
    )
  },
  { 
    code: 'ja', 
    name: '日本語', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="600" fill="#fff"/>
        <circle cx="450" cy="300" r="180" fill="#bc002d"/>
      </svg>
    )
  },
  { 
    code: 'zh', 
    name: '中文', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
        <rect width="900" height="600" fill="#de2910"/>
        <polygon points="225,150 255,200 315,200 270,230 285,290 225,260 165,290 180,230 135,200 195,200" fill="#ffde00"/>
        <polygon points="450,100 480,150 540,150 495,180 510,240 450,210 390,240 405,180 360,150 420,150" fill="#ffde00"/>
        <polygon points="675,150 705,200 765,200 720,230 735,290 675,260 615,290 630,230 585,200 645,200" fill="#ffde00"/>
        <polygon points="225,350 255,400 315,400 270,430 285,490 225,460 165,490 180,430 135,400 195,400" fill="#ffde00"/>
        <polygon points="450,300 480,350 540,350 495,380 510,440 450,410 390,440 405,380 360,350 420,350" fill="#ffde00"/>
        <polygon points="675,350 705,400 765,400 720,430 735,490 675,460 615,490 630,430 585,400 645,400" fill="#ffde00"/>
        <polygon points="225,550 255,600 315,600 270,630 285,690 225,660 165,690 180,630 135,600 195,600" fill="#ffde00"/>
        <polygon points="450,500 480,550 540,550 495,580 510,640 450,610 390,640 405,580 360,550 420,550" fill="#ffde00"/>
        <polygon points="675,550 705,600 765,600 720,630 735,690 675,660 615,690 630,630 585,600 645,600" fill="#ffde00"/>
      </svg>
    )
  },
  { 
    code: 'no', 
    name: 'Norsk', 
    flag: (
      <svg className="w-5 h-4" viewBox="0 0 1100 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1100" height="800" fill="#ef2b2d"/>
        <rect width="200" height="800" x="300" fill="#fff"/>
        <rect width="1100" height="200" y="300" fill="#fff"/>
        <rect width="100" height="800" x="350" fill="#002868"/>
        <rect width="1100" height="100" y="350" fill="#002868"/>
      </svg>
    )
  },
];

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isScrolled 
            ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100' 
            : 'text-white hover:text-primary-600 hover:bg-white/10'
        }`}
        aria-label={t('common.selectLanguage')}
      >
        <GlobeAltIcon className="h-5 w-5" />
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:block text-sm font-medium">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md shadow-lg border border-gray-200 rounded-lg py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                i18n.language === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span className="text-sm font-medium">{language.name}</span>
              {i18n.language === language.code && (
                <div className="ml-auto w-2 h-2 bg-primary-600 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 