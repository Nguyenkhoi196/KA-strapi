"use strict";

/**
 * product router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::product.product", {
  config: {
    find: {
      middlewares: ["api::product.response-public"],
    },
    findOne: {
      auth: false,
    },
    create: {},
    update: {},
    delete: {},
  },
});
