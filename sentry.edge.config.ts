import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://60c5699d30c3a3f99edb5975f6c2c27e@o4507535622471680.ingest.us.sentry.io/4507535625289728",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
