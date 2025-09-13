import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that don't require authentication
// This allows users to access the landing page and auth pages without logging in
const isPublicRoute = createRouteMatcher([
  '/', // Landing page - MUST be public for marketing/demo
  '/sign-in(.*)', // Sign-in page and related routes
  '/sign-up(.*)', // Sign-up page and related routes
  '/forgot-password(.*)', // Password reset pages
  '/verify-email(.*)', // Email verification pages
  '/api/webhooks/(.*)', // Webhook endpoints (should be public)
]);

export default clerkMiddleware(async (auth, req) => {
  // Only protect routes that are NOT in the public routes list
  // This ensures the landing page remains accessible to all visitors
  if (!isPublicRoute(req)) {
    await auth.protect();
  }

  return;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
