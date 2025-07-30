# Language Switcher Implementation

This document describes the multilingual implementation added to the React app.

## Features

- **Language Switcher**: A dropdown component in the navbar that allows users to switch between languages
- **Supported Languages**: English, Spanish, French, and German
- **Automatic Detection**: Uses browser language detection with localStorage persistence
- **Responsive Design**: Works on both desktop and mobile devices

## Files Added/Modified

### New Files
- `src/i18n.ts` - i18n configuration
- `src/components/LanguageSwitcher.tsx` - Language switcher component
- `src/locales/en.json` - English translations
- `src/locales/es.json` - Spanish translations
- `src/locales/fr.json` - French translations
- `src/locales/de.json` - German translations

### Modified Files
- `src/App.tsx` - Added i18n import
- `src/components/Navbar.tsx` - Added language switcher and translations

## Dependencies Installed

```bash
npm install react-i18next i18next i18next-browser-languagedetector --legacy-peer-deps
```

## Usage

The language switcher is automatically available in the navbar. Users can:

1. Click on the globe icon with the current language flag
2. Select a language from the dropdown
3. The language preference is saved in localStorage

## Adding New Languages

To add a new language:

1. Create a new translation file in `src/locales/` (e.g., `it.json` for Italian)
2. Add the language to the `languages` array in `LanguageSwitcher.tsx`
3. Import and add the translation to the resources in `i18n.ts`

## Adding New Translations

To add new translatable content:

1. Add the translation keys to all language files in `src/locales/`
2. Use the `useTranslation` hook in your component
3. Replace hardcoded text with `t('key')` calls

## Example

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return <h1>{t('navigation.home')}</h1>;
};
```

## Current Translation Keys

- `navigation.home` - Home
- `navigation.services` - Services
- `navigation.technologies` - Technologies
- `navigation.projects` - Projects
- `navigation.caseStudies` - Case Studies
- `navigation.about` - About
- `navigation.contact` - Contact
- `navigation.getStarted` - Get Started
- `navigation.clientLogin` - Client Login
- `common.language` - Language
- `common.selectLanguage` - Select Language 