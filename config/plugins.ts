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
  io: {
    enabled: true,
    config: {
      // This will listen for all supported events on the article content type
      contentTypes: ["api::product.product"],
      // socket: {
      //   serverOptions: {
      //     cors: {
      //       origin: "http://localhost:3000",
      //       methods: ["GET", "POST"],
      //     },
      //   },
      // },
      events: [
        {
          name: "test-io",
          handler({ strapi, io }, socket) {
            // will log whenever a socket connects
            strapi.log.info(`[io] new connection with id ${socket.id}`);
            return 'test-io';
          },
        },
      ],
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
