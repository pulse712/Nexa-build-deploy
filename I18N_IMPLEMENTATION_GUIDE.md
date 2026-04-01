# i18n Implementation Guide

## Overview
This guide explains how to add internationalization (i18n) to all pages in the project so that when users change the language, all text updates automatically.

## What's Already Done

### ✅ Completed
1. **i18n Configuration** - `src/i18n/config.ts` is set up with English and Chinese
2. **Translation Files** - `src/i18n/locales/en.json` and `zh.json` have been expanded with keys for:
   - Navigation (nav)
   - Home page (home)
   - Services page (services)
   - About page (about)
3. **Components Updated**:
   - `Navbar.tsx` - Now uses translations for buttons
   - `About.tsx` - Already fully translated
   - `LanguageSwitcher.tsx` - Working correctly

## How to Add i18n to a Page

### Step 1: Import the hook
```typescript
import { useTranslation } from 'react-i18next';
```

### Step 2: Use the hook in your component
```typescript
const YourPage = () => {
  const { t } = useTranslation();
  
  return (
    // Your JSX
  );
};
```

### Step 3: Replace hardcoded text with translation keys
```typescript
// Before:
<h1>Welcome to Our Company</h1>

// After:
<h1>{t('pageName.welcomeTitle')}</h1>
```

### Step 4: Add translation keys to both JSON files

In `src/i18n/locales/en.json`:
```json
{
  "pageName": {
    "welcomeTitle": "Welcome to Our Company"
  }
}
```

In `src/i18n/locales/zh.json`:
```json
{
  "pageName": {
    "welcomeTitle": "欢迎来到我们公司"
  }
}
```

## Pages That Need Translation

### High Priority (Main Pages)
- [ ] `src/pages/Index.tsx` - Home page (PARTIALLY DONE - see example below)
- [ ] `src/pages/Services.tsx` - Services page (PARTIALLY DONE - see example below)
- [ ] `src/pages/Contact.tsx` - Contact page
- [ ] `src/pages/Technologies.tsx` - Technologies page
- [ ] `src/components/Footer.tsx` - Footer component

### Medium Priority (Company Pages)
- [ ] `src/pages/company/OurTeam.tsx`
- [ ] `src/pages/company/MissionVision.tsx`
- [ ] `src/pages/company/PartnersClients.tsx`
- [ ] `src/pages/company/CompanyHistory.tsx`
- [ ] `src/pages/company/Offices.tsx`

### Medium Priority (Career Pages)
- [ ] `src/pages/careers/CareersIndex.tsx`
- [ ] `src/pages/careers/LifeAtNexaTech.tsx`
- [ ] `src/pages/careers/OpenPositions.tsx`
- [ ] `src/pages/careers/InternshipProgram.tsx`
- [ ] `src/pages/careers/HiringProcess.tsx`

### Lower Priority (Industry Pages)
- [ ] `src/pages/industries/IndustriesIndex.tsx`
- [ ] `src/pages/industries/BankingFinance.tsx`
- [ ] `src/pages/industries/Healthcare.tsx`
- [ ] `src/pages/industries/RetailEcommerce.tsx`
- [ ] `src/pages/industries/Logistics.tsx`
- [ ] `src/pages/industries/Education.tsx`
- [ ] `src/pages/industries/Manufacturing.tsx`
- [ ] `src/pages/industries/BlockchainTrading.tsx`
- [ ] `src/pages/industries/WebAppDevelopment.tsx`

### Lower Priority (Solution Pages)
- [ ] `src/pages/solutions/SolutionsIndex.tsx`
- [ ] `src/pages/solutions/EnterpriseSolutions.tsx`
- [ ] `src/pages/solutions/FinTechSolutions.tsx`
- [ ] `src/pages/solutions/HealthcareSolutions.tsx`
- [ ] `src/pages/solutions/EcommerceSolutions.tsx`
- [ ] `src/pages/solutions/SaasDevelopment.tsx`
- [ ] `src/pages/solutions/LegacyModernization.tsx`
- [ ] `src/pages/solutions/AIMLSolutions.tsx`
- [ ] `src/pages/solutions/CloudNativeSolutions.tsx`
- [ ] `src/pages/solutions/CybersecuritySolutions.tsx`
- [ ] `src/pages/solutions/DataAnalyticsSolutions.tsx`
- [ ] `src/pages/solutions/IoTSolutions.tsx`
- [ ] `src/pages/solutions/DevOpsSolutions.tsx`

### Other Pages
- [ ] `src/pages/Blog.tsx`
- [ ] `src/pages/BlogNews.tsx`
- [ ] `src/pages/Auth.tsx`
- [ ] `src/pages/NotFound.tsx`

## Translation Key Naming Convention

Use a hierarchical structure:
```
{
  "pageName": {
    "sectionName": {
      "elementName": "Translation text"
    }
  }
}
```

Examples:
- `home.hero.title` - Home page hero section title
- `services.cloudDevops.description` - Services page cloud section description
- `nav.contactUs` - Navigation contact button

## Tips

1. **Keep keys organized** - Group related translations together
2. **Use descriptive names** - Make it clear what each key represents
3. **Handle dynamic content** - For arrays of data (like service cards), you can either:
   - Keep them in the component and translate individual fields
   - Move them entirely to translation files
4. **Test both languages** - Always switch languages to verify translations work
5. **Handle special characters** - Use proper escaping in JSON files

## Common Patterns

### Pattern 1: Simple Text
```typescript
<h1>{t('home.title')}</h1>
```

### Pattern 2: Text with Variables
```typescript
<p>{t('home.welcome', { name: userName })}</p>
```

In JSON:
```json
{
  "home": {
    "welcome": "Welcome, {{name}}!"
  }
}
```

### Pattern 3: Lists/Arrays
For static lists, you can use indexed keys:
```json
{
  "features": {
    "0": "Feature One",
    "1": "Feature Two",
    "2": "Feature Three"
  }
}
```

Then map over them:
```typescript
{[0, 1, 2].map(i => (
  <li key={i}>{t(`features.${i}`)}</li>
))}
```

## Next Steps

1. Start with high-priority pages (Index, Services, Contact)
2. Add translation keys to both en.json and zh.json
3. Update components to use `useTranslation` hook
4. Test language switching on each page
5. Move to medium and lower priority pages

## Need Help?

- Check `src/pages/About.tsx` for a complete example
- Check `src/components/Navbar.tsx` for component translation example
- The translation files are in `src/i18n/locales/`
