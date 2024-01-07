export default ({ env }) => ({
  // ...
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
  },
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
    "auth": {
      "providers": {
        "google": {
          "provider": "google",
          "secret": env('GOOGLE_CLIENT_SECRET'), // Sử dụng biến môi trường để bảo mật thông tin
          "clientId": env('GOOGLE_CLIENT_ID'),   // Sử dụng biến môi trường để bảo mật thông tin
          "redirect_uri": "/connect/google/callback"  // URI chuyển hướng đã đặt khi tạo OAuth Client ID
        }
      }
    },
  },
  "copy-component": {
    config: {
      contentTypes: [
        "api::mycollection.mycollection",
        {
          uid: "api::mycollection2.mycollection2",
          source: [
            "api::mycollection2.mycollection2",
            "api::mycollection3.mycollection3",
          ],
        },
      ],
    },
  },
  "location-field": {
    enabled: true,
    config: {
      fields: ["photo", "rating"], // optional
      googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      autocompletionRequestOptions: {},
    },
  },
  email: {
    //   config: {
    //     provider: 'nodemailer',
    //     providerOptions: {
    //       host: 'localhost',
    //       port: 1025,
    //       ignoreTLS: true,
    //     },
    //   },
    // config: {
    //   provider: 'sendgrid',
    //   providerOptions: {
    //     apiKey: env('SENDGRID_API_KEY'),
    //   },
    //   settings: {
    //     defaultFrom: 'myemail@protonmail.com',
    //     defaultReplyTo: 'myemail@protonmail.com',
    //     testAddress: 'nguyenkhoi196@gmail.com',
    //   },

    // },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {
          folder: env("CLOUDINARY_FOLDER", "KhoiAnh"),
        },
        delete: {},
      },
      sizeLimit: 250 * 1024 * 1024,
    },
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
  comments: {
    enabled: true,
    config: {
      badWords: false,
      moderatorRoles: ["Authenticated"],
      approvalFlow: ["api::page.page"],
      entryLabel: {
        "*": ["Title", "title", "Name", "name", "Subject", "subject"],
        "api::page.page": ["MyField"],
      },
      blockedAuthorProps: ["name", "email"],
      reportReasons: {
        MY_CUSTOM_REASON: "MY_CUSTOM_REASON",
      },
      gql: {},
    },
  },
  // ...
});
