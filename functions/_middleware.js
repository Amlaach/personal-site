// Cloudflare Pages Edge Middleware for security headers & performance tuning

export async function onRequest(context) {
  const response = await context.next();
  const newHeaders = new Headers(response.headers);

  // Security Headers for Cloudflare Edge
  newHeaders.set('X-Frame-Options', 'DENY');
  newHeaders.set('X-Content-Type-Options', 'nosniff');
  newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  newHeaders.set('Permissions-Policy', 'accelerometer=(), camera=(), microphone=(), geolocation=()');
  newHeaders.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Cloudflare CDN cache optimization
  const url = new URL(context.request.url);
  if (url.pathname.endsWith('.css') || url.pathname.endsWith('.js') || url.pathname.endsWith('.svg')) {
    newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders,
  });
}
