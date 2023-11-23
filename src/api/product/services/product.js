// @ts-nocheck
"use strict";

/**
 * product service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::product.product", ({ strapi }) => ({
  updateImage: async (args) => {
    const { id, files } = args;
    const res = await strapi.plugins.upload.services.upload.upload({
      data: {
        ref: "api::product.product",
        refId: id,
        field: "img",
      },
      files,
    });
    return res;
  },
  async getTotalProducts() {
    const entries = await strapi.entityService.findMany(
      "api::product.product",
      { sort: { id: "asc" } }
    );
    return entries;
  },
}));
