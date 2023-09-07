// @ts-nocheck
"use strict";

/**
 * product controller
 */
const { sanitize, validate } = require("@strapi/utils");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async find(ctx) {
    try {
      const sanitizedQueryParams = await this.sanitizeQuery(ctx);

      const { results, pagination } = await strapi
        .service("api::product.product")
        .find(sanitizedQueryParams);

      const sanitizedResults = await this.sanitizeOutput(results);

      const totalInventory = results.reduce((acc, current) => {
        return acc + parseInt(current.inventory);
      }, 0);
      return { totalInventory, data: results, meta: { pagination } };
    } catch (error) {
      throw error;
    }
  },
}));
