// @ts-nocheck
"use strict";

/**
 * product service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::product.product", ({ strapi }) => ({
  async find(...args) {
    const query = {
      // populate: {
      //   supplier: {
      //     fields: ["name"],
      //   },
      // },
      ...args,
    };
    console.log(query);
    const { results, pagination } = await super.find(query);
    return { results, pagination };
  },
}));
