export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          upgradeInsecureRequests: null,

          "connect-src": ["'self'", "https:"],
          "script-src": ["'self'", "https://maps.googleapis.com"],
          "media-src": [
            "'self'",
            "blob:",
            "data:",
            "'unsafe-inline'",
            "https://maps.gstatic.com",
            "https://maps.googleapis.com",
            "res.cloudinary.com",
          ],
          "img-src": [
            "'self'",
            "blob:",
            "data:",
            "https://maps.gstatic.com",
            "https://maps.googleapis.com",
            "khmdb0.google.com",
            "khmdb0.googleapis.com",
            "khmdb1.google.com",
            "khmdb1.googleapis.com",
            "khm.google.com",
            "khm.googleapis.com",
            "khm0.google.com",
            "khm0.googleapis.com",
            "khm1.google.com",
            "khm1.googleapis.com",
            "khms0.google.com",
            "khms0.googleapis.com",
            "khms1.google.com",
            "khms1.googleapis.com",
            "khms2.google.com",
            "khms2.googleapis.com",
            "khms3.google.com",
            "khms3.googleapis.com",
            "streetviewpixels-pa.googleapis.com",
            "market-assets.strapi.io",
            "res.cloudinary.com",
          ],
        },
      },
    },
  },

  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "256mb", // modify form body
      jsonLimit: "256mb", // modify JSON body
      textLimit: "256mb", // modify text body
      formidable: {
        maxFileSize: 250 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  "global::test",
];
