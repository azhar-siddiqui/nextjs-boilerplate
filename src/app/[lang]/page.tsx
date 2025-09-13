import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
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
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  SiClerk,
  SiEslint,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { CheckCircle, Code, Palette } from 'lucide-react';
import { getDictionary } from './dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' | 'fr' }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

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
          <AnimatedThemeToggler />
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

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            {dict.features.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {dict.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SiNextdotjs className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.nextjs.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.nextjs.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Server Components</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>App Router</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Turbopack</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SiPrisma className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.prisma.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.prisma.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Type Safety</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Migrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Accelerate</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SiClerk className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.clerk.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.clerk.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Social Logins</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>User Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Security</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Palette className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.shadcn.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.shadcn.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Accessible</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Customizable</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Theme-aware</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SiTypescript className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.typescript.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.typescript.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Type Safety</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>IntelliSense</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Refactoring</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <SiEslint className="text-primary h-5 w-5" />
                <CardTitle>{dict.features.tools.title}</CardTitle>
              </div>
              <CardDescription>
                {dict.features.tools.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Code Quality</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Git Hooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Conventional Commits</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold">
            {dict.demo.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            Interactive components powered by the theme system
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="components" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="components">
                {dict.demo.components}
              </TabsTrigger>
              <TabsTrigger value="progress">{dict.demo.progress}</TabsTrigger>
              <TabsTrigger value="alerts">{dict.demo.alerts}</TabsTrigger>
            </TabsList>

            <TabsContent value="components" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.components.buttonVariants.title}</CardTitle>
                  <CardDescription>
                    {dict.components.buttonVariants.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{dict.components.badgeVariants.title}</CardTitle>
                  <CardDescription>
                    {dict.components.badgeVariants.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    {dict.components.progressIndicators.title}
                  </CardTitle>
                  <CardDescription>
                    {dict.components.progressIndicators.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{dict.setup.setupProgress}</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{dict.setup.databaseMigration}</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Build Process</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="alerts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{dict.components.alertVariants.title}</CardTitle>
                  <CardDescription>
                    {dict.components.alertVariants.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                      Your project has been set up successfully.
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <SiClerk className="h-4 w-4" />
                    <AlertTitle>Authentication Required</AlertTitle>
                    <AlertDescription>
                      Please sign in to access this feature.
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <SiPostgresql className="h-4 w-4" />
                    <AlertTitle>Database Connected</AlertTitle>
                    <AlertDescription>
                      Successfully connected to PostgreSQL database.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-foreground mb-4 text-3xl font-bold">
              {dict.setup.title}
            </h2>
            <p className="text-muted-foreground text-lg">
              {dict.setup.subtitle}
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-semibold">
                  1
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    {dict.setup.clone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.setup.clone.description}
                  </p>
                  <code className="bg-card mt-2 block rounded p-2 text-sm">
                    git clone
                    https://github.com/The-Lone-Druid/nextjs-boilerplate.git
                  </code>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-semibold">
                  2
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    {dict.setup.env.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.setup.env.description}
                  </p>
                  <code className="bg-card mt-2 block rounded p-2 text-sm">
                    cp .env.example .env.local
                  </code>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-semibold">
                  3
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    {dict.setup.database.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.setup.database.description}
                  </p>
                  <code className="bg-card mt-2 block rounded p-2 text-sm">
                    npx prisma migrate dev && npx prisma generate
                  </code>
                </div>
              </div>

              <Separator />

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-semibold">
                  4
                </div>
                <div>
                  <h3 className="text-foreground font-semibold">
                    {dict.setup.dev.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.setup.dev.description}
                  </p>
                  <code className="bg-card mt-2 block rounded p-2 text-sm">
                    npm run dev
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <Code className="text-primary h-5 w-5" />
            <span className="text-card-foreground font-semibold">
              Next.js Boilerplate
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            {dict.footer.description}
          </p>
        </div>
      </footer>
    </div>
  );
}
