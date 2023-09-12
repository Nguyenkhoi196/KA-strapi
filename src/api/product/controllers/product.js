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
      const { data, meta } = await super.find(ctx);
      const totalInventory = data.reduce((acc, current) => {
        return acc + parseInt(current.attributes.inventory);
      }, 0);
      return { totalInventory, data, meta };
    } catch (error) {
      throw error;
    }
  },
}));
