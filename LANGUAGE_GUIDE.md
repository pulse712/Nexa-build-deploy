# Language Transfer (i18n) Implementation Guide

## Overview
This project now supports multiple languages using `react-i18next`. Currently implemented languages:
- English (en) 🇺🇸
- Chinese (zh) 🇨🇳

## Features
- Automatic language detection from browser settings
- Language preference saved in localStorage
- Language switcher in the navigation bar
- Fully translated About page (example implementation)

## How to Use

### For Users
1. Click the language switcher button (🌐) in the top navigation bar
2. Select your preferred language from the dropdown
3. The page will instantly update to show content in the selected language
4. Your preference is saved and will persist across sessions

### For Developers

#### Adding New Languages
1. Create a new translation file in `src/i18n/locales/` (e.g., `fr.json` for French)
2. Copy the structure from `en.json` and translate all values
3. Import and add the new language in `src/i18n/config.ts`:
```typescript
import fr from './locales/fr.json';

i18n.init({
  resources: {
    en: { translation: en },
    zh: { translation: zh },
    fr: { translation: fr }, // Add new language
  },
  // ...
});
```
4. Add the language option in `src/components/LanguageSwitcher.tsx`:
```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }, // Add new language
];
```

#### Using Translations in Components
1. Import the `useTranslation` hook:
```typescript
import { useTranslation } from 'react-i18next';
```

2. Use the hook in your component:
```typescript
const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('about.title')}</h1>
      <p>{t('about.subtitle')}</p>
    </div>
  );
};
```

#### Adding New Translation Keys
1. Add the key-value pairs to all language files in `src/i18n/locales/`
2. Use the translation key in your component with `t('key.path')`

## File Structure
```
src/
├── i18n/
│   ├── config.ts           # i18n configuration
│   └── locales/
│       ├── en.json         # English translations
│       └── zh.json         # Chinese translations
├── components/
│   └── LanguageSwitcher.tsx # Language switcher component
└── pages/
    └── About.tsx           # Example page with translations
```

## Example Translation File Structure
```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "about": {
    "title": "About Us",
    "description": "We are a technology company"
  }
}
```

## Next Steps
To translate other pages:
1. Add translation keys to the JSON files in `src/i18n/locales/`
2. Import `useTranslation` in the page component
3. Replace hardcoded text with `t('translation.key')`

## Notes
- The language switcher is visible in the desktop navigation bar
- Language detection order: localStorage → browser language → fallback to English
- All translations are loaded at app startup for optimal performance
