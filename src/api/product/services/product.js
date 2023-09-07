// @ts-nocheck
"use strict";

/**
 * product service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::product.product", ({ strapi }) => ({
  async find(...args) {
    const { results, pagination } = await super.find(...args);
    // const sanitizedResults = await this.sanitizeOutput(results);
    return { results, pagination };
  },
}));
