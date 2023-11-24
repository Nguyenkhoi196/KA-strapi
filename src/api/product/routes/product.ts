"use strict";

/**
 * product router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::product.product", {
  config: {
    find: {
      auth: false,
    },
    findOne: {
      auth: false,
    },
    create: {},
    update: {},
    delete: {},
  },
});
