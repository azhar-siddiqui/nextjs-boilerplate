'use client';

import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SiNextdotjs } from '@icons-pack/react-simple-icons';
import { useState } from 'react';

// Import dictionaries
import en from './[lang]/dictionaries/en.json';
import es from './[lang]/dictionaries/es.json';
import fr from './[lang]/dictionaries/fr.json';

const dictionaries = { en, es, fr };

type Locale = 'en' | 'es' | 'fr';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');
  const dict = dictionaries[locale];

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-card border-b">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <SiNextdotjs className="text-primary h-6 w-6" />
            <h1 className="text-card-foreground text-xl font-bold">
              Next.js Boilerplate
            </h1>
          </div>
          <div className="space-4 flex items-center">
            {/* Language Dropdown */}
            <div className="relative">
              <select
                value={locale}
                onChange={e => changeLanguage(e.target.value as Locale)}
                className="bg-background border-input focus:ring-ring rounded border px-3 py-1 text-sm focus:ring-2 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <AnimatedThemeToggler />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            {dict.hero.badge}
          </Badge>
          <h1 className="text-foreground mb-6 text-4xl font-bold md:text-6xl">
            {dict.hero.title}
            <span className="text-primary"> {dict.hero.titleHighlight}</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            {dict.hero.description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 text-lg">
              {dict.hero.getStarted}
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-lg">
              {dict.hero.viewDocs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
