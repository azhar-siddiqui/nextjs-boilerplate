'use client';

import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  SiClerk,
  SiCypress,
  SiEslint,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import {
  Clock,
  Code,
  Database,
  GitBranch,
  Globe,
  Moon,
  Palette,
  Settings,
  Star,
  Sun,
  TestTube,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

type Locale = 'en' | 'es' | 'fr';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('en');

  const changeLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  const features = [
    {
      icon: <SiNextdotjs className="h-6 w-6" />,
      title: 'Next.js 15',
      description:
        'Latest App Router with Turbopack for lightning-fast development',
      color: 'text-black dark:text-white',
    },
    {
      icon: <SiTypescript className="h-6 w-6" />,
      title: 'TypeScript',
      description:
        'Full type safety with strict type checking and IntelliSense',
      color: 'text-blue-600',
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: 'Prisma + PostgreSQL',
      description: 'Type-safe database ORM with Accelerate for edge computing',
      color: 'text-gray-600',
    },
    {
      icon: <SiClerk className="h-6 w-6" />,
      title: 'Clerk Auth',
      description: 'Complete authentication solution with social logins',
      color: 'text-black',
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'shadcn/ui',
      description: 'Beautiful, accessible components built on Radix UI',
      color: 'text-gray-700',
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Internationalization',
      description: 'Multi-language support with client-side switching',
      color: 'text-green-600',
    },
  ];

  const setupSteps = [
    {
      title: 'Clone & Install',
      description: 'Get the boilerplate and install dependencies',
      command:
        'git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git && cd nextjs-boilerplate && npm install',
      icon: <GitBranch className="h-5 w-5" />,
    },
    {
      title: 'Configure Environment',
      description: 'Set up your environment variables',
      command: 'cp .env.example .env.local',
      icon: <Settings className="h-5 w-5" />,
    },
    {
      title: 'Setup Database',
      description: 'Configure Prisma and PostgreSQL',
      command: 'npx prisma migrate dev && npx prisma generate',
      icon: <Database className="h-5 w-5" />,
    },
    {
      title: 'Start Development',
      description: 'Launch your development server',
      command: 'npm run dev',
      icon: <Zap className="h-5 w-5" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <header className="bg-card/50 sticky top-0 z-50 border-b backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <SiNextdotjs className="text-primary h-7 w-7" />
              <h1 className="text-card-foreground text-xl font-bold">
                Next.js Boilerplate
              </h1>
            </div>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              <Star className="mr-1 h-3 w-3" />
              v0.1.0
            </Badge>
          </div>
          <div className="space-4 flex items-center">
            {/* Language Dropdown */}
            <Select value={locale} onValueChange={changeLanguage}>
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">🇺🇸 English</SelectItem>
                <SelectItem value="es">🇪🇸 Español</SelectItem>
                <SelectItem value="fr">🇫🇷 Français</SelectItem>
              </SelectContent>
            </Select>
            <AnimatedThemeToggler />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            🚀 Production-Ready Boilerplate
          </Badge>
          <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Build Faster with
            <span className="text-primary mt-2 block">Next.js 15</span>
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-xl leading-relaxed">
            A comprehensive full-stack boilerplate with TypeScript, Prisma,
            Clerk authentication, shadcn/ui components, and modern development
            tools. Start building production-ready applications in minutes.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-lg">
              <Zap className="mr-2 h-5 w-5" />
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
              <Code className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">15+</div>
              <div className="text-muted-foreground text-sm">UI Components</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">3</div>
              <div className="text-muted-foreground text-sm">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">100%</div>
              <div className="text-muted-foreground text-sm">TypeScript</div>
            </div>
            <div className="text-center">
              <div className="text-primary text-2xl font-bold">Jest</div>
              <div className="text-muted-foreground text-sm">& Cypress</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Everything You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Pre-configured with industry-standard tools and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div
                  className={`mb-2 flex items-center space-x-3 ${feature.color}`}
                >
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold">
              Modern Tech Stack
            </h2>
            <p className="text-muted-foreground text-xl">
              Built with the latest technologies and best practices
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              {
                icon: <SiNextdotjs className="h-8 w-8" />,
                name: 'Next.js 15',
                color: 'text-black dark:text-white',
              },
              {
                icon: <SiTypescript className="h-8 w-8" />,
                name: 'TypeScript',
                color: 'text-blue-600',
              },
              {
                icon: <SiPrisma className="h-8 w-8" />,
                name: 'Prisma',
                color: 'text-gray-600',
              },
              {
                icon: <SiPostgresql className="h-8 w-8" />,
                name: 'PostgreSQL',
                color: 'text-blue-700',
              },
              {
                icon: <SiClerk className="h-8 w-8" />,
                name: 'Clerk',
                color: 'text-black',
              },
              {
                icon: <Palette className="h-8 w-8" />,
                name: 'Tailwind',
                color: 'text-cyan-500',
              },
            ].map((tech, index) => (
              <div key={index} className="group text-center">
                <div
                  className={`mx-auto mb-3 ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {tech.icon}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Get Started in Minutes
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Follow these simple steps to launch your project
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-primary text-primary-foreground flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-lg font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center space-x-3">
                    <h3 className="text-foreground text-xl font-semibold">
                      {step.title}
                    </h3>
                    <div className="text-muted-foreground">{step.icon}</div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {step.description}
                  </p>
                  <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                    <code>{step.command}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-foreground mb-4 text-4xl font-bold">
              Component Showcase
            </h2>
            <p className="text-muted-foreground text-xl">
              Beautiful, accessible components ready to use
            </p>
          </div>

          <Tabs defaultValue="components" className="mx-auto w-full max-w-4xl">
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="components">UI Components</TabsTrigger>
              <TabsTrigger value="theme">Theme System</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Button size="sm" variant="default">
                        Button
                      </Button>
                    </CardTitle>
                    <CardDescription>
                      Multiple variants and sizes
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Badge>Badge</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                    </CardTitle>
                    <CardDescription>
                      Status indicators and labels
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progress Bars</CardTitle>
                    <CardDescription>
                      <Progress value={75} className="mt-2" />
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="theme" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Theme Support</CardTitle>
                  <CardDescription>
                    Automatic dark/light mode with system preference detection
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>System</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="testing" className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <SiJest className="h-5 w-5" />
                      <span>Jest</span>
                    </CardTitle>
                    <CardDescription>
                      Unit testing with React Testing Library
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <SiCypress className="h-5 w-5" />
                      <span>Cypress</span>
                    </CardTitle>
                    <CardDescription>E2E and component testing</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-4xl font-bold">
            Development Workflow
          </h2>
          <p className="text-muted-foreground text-xl">
            Streamlined development with automated tools
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <SiEslint className="h-8 w-8" />,
              title: 'Code Quality',
              description: 'ESLint + Prettier for consistent code formatting',
            },
            {
              icon: <GitBranch className="h-8 w-8" />,
              title: 'Git Hooks',
              description: 'Husky + Commitlint for conventional commits',
            },
            {
              icon: <TestTube className="h-8 w-8" />,
              title: 'Testing',
              description: 'Jest for unit tests, Cypress for E2E',
            },
            {
              icon: <Clock className="h-8 w-8" />,
              title: 'Fast Development',
              description: 'Turbopack for lightning-fast builds',
            },
          ].map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-primary mx-auto mb-4">{item.icon}</div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Start your next project with this production-ready boilerplate and
            focus on what matters most - your application logic.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
              <GitBranch className="mr-2 h-5 w-5" />
              Clone Repository
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8 text-lg"
            >
              <Code className="mr-2 h-5 w-5" />
              View Source
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <SiNextdotjs className="text-primary h-6 w-6" />
                <h3 className="text-card-foreground font-bold">
                  Next.js Boilerplate
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                A modern full-stack boilerplate for building production-ready
                applications.
              </p>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                Quick Links
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Issues
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contributing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                Resources
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Next.js Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Prisma Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Clerk Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    shadcn/ui
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-card-foreground mb-4 font-semibold">
                Community
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />

          <div className="text-muted-foreground flex flex-col items-center justify-between text-sm sm:flex-row">
            <p>
              © 2025 Next.js Boilerplate. Built with ❤️ using modern web
              technologies.
            </p>
            <div className="mt-4 flex items-center space-x-4 sm:mt-0">
              <span>v0.1.0</span>
              <span>•</span>
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
