# Next.js Boilerplate

A modern, full-stack Next.js boilerplate with TypeScript, Prisma, Clerk authentication, shadcn/ui components, and Tailwind CSS. This boilerplate is designed to kickstart your Next.js projects with best practices and essential tools for rapid development.

## Features

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** for type safety
- **Prisma** with PostgreSQL and Accelerate for database management
- **Clerk** for authentication and user management
- **shadcn/ui** components built on Radix UI primitives
- **Tailwind CSS v4** for styling
- **ESLint** and **Prettier** for code quality
- **Husky** and **Commitlint** for Git hooks and conventional commits
- **Commitizen** for standardized commit messages
- Custom scripts for feature development workflow
- Theme provider with next-themes
- Responsive UI components

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git**
- **PostgreSQL** database (local or cloud)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/The-Lone-Druid/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Fill in the required values (see Environment Variables section below)

4. Set up the database:
   - Ensure your PostgreSQL database is running
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev
     ```
   - Generate Prisma client:
     ```bash
     npx prisma generate
     ```

5. Set up Clerk authentication:
   - Create a Clerk application at [clerk.com](https://clerk.com)
   - Copy your publishable key and secret key to `.env.local`

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Optional: Customize Clerk routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

## Usage

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Code Quality

- **Linting**: `npm run lint`
- **Fix linting issues**: `npm run lint:fix`
- **Formatting**: `npm run format`
- **Check formatting**: `npm run format:check`
- **Type checking**: `npm run type-check`

### Database Management

- **View database**: `npx prisma studio`
- **Create migration**: `npx prisma migrate dev --name <migration_name>`
- **Reset database**: `npx prisma migrate reset`

### Git Workflow

This boilerplate includes Git hooks and commit conventions:

- **Commit**: Use `npm run commit` for interactive conventional commits
- **Husky** will run pre-commit hooks for linting and formatting

### Feature Development Scripts

The `scripts/` directory contains utilities for structured feature development:

- **Create new feature**: `./scripts/create-new-feature.sh "feature description"`
- **Setup plan**: `./scripts/setup-plan.sh`
- **Update agent context**: `./scripts/update-agent-context.sh`

These scripts help maintain a consistent development workflow with specifications, plans, and tasks.

## Project Structure

```
nextjs-boilerplate/
├── .husky/                 # Git hooks
├── memory/                 # AI/memory related files
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── scripts/                # Development scripts
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── auth/           # Authentication pages
│   │   ├── globals.css     # Global styles
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── providers/      # Context providers
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility libraries
│   └── middleware.ts       # Next.js middleware
├── templates/              # Template files for features
├── .env.example            # Environment variables template
├── components.json         # shadcn/ui configuration
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## Customization

### Adding New Components

Use shadcn/ui to add new components:

```bash
npx shadcn@latest add <component-name>
```

### Database Schema

Edit `prisma/schema.prisma` to modify your database schema, then run:

```bash
npx prisma migrate dev
npx prisma generate
```

### Authentication

Clerk is pre-configured. Customize authentication flows in `src/middleware.ts` and authentication pages in `src/app/auth/`.

### Theming

The app uses `next-themes` for theme switching. Customize themes in `src/components/providers/theme-provider.tsx`.

## Deployment

### Vercel

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Other Platforms

Ensure your deployment platform supports:
- Node.js 18+
- Environment variables
- PostgreSQL database

## Contributing

1. Follow the feature development workflow using the provided scripts
2. Use conventional commits
3. Ensure all tests pass and code is linted

## License

This project is licensed under the MIT License.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Clerk Documentation](https://clerk.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
