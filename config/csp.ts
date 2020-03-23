export default {
  directives: {
    defaultSrc: ["'self'", "utteranc.es", "*.utteranc.es", "fonts.gstatic.com"],
    scriptSrc: [
      "'self'",
      "www.google-analytics.com",
      "*.sentry.io",
      "'unsafe-inline'",
      "utteranc.es",
      "*.utteranc.es",
      "*.cloudflareinsights.com"
    ],
    imgSrc: ["*", "data:", "*.cloudflareinsights.com"],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
      "utteranc.es",
      "*.utteranc.es",
      "cdn.jsdelivr.net",
      "fonts.googleapis.com"
    ]
  }
};
