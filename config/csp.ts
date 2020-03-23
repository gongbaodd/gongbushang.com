export default {
  addMeta: true,
  policies: {
    "default-src": [
      "'self'",
      "utteranc.es",
      "*.utteranc.es",
      "fonts.gstatic.com"
    ],
    "script-src": [
      "'self'",
      "www.google-analytics.com",
      "*.sentry.io",
      "'unsafe-inline'",
      "utteranc.es",
      "*.utteranc.es",
      "*.cloudflareinsights.com"
    ],
    "img-src": ["*", "data:", "*.cloudflareinsights.com"],
    "style-src": [
      "'self'",
      "'unsafe-inline'",
      "utteranc.es",
      "*.utteranc.es",
      "cdn.jsdelivr.net",
      "fonts.googleapis.com"
    ]
  }
};
