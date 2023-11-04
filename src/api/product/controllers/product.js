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

  async updateProduct(ctx) {
    try {
      const { id } = ctx.params;
      const { data } = ctx.request.body;

      console.log(ctx.request.body);
      const { files } = ctx.request.files;
      if (files) {
        const response = await strapi
          .service("api::product.product")
          .updateImage({ id, files });
      }
      const res = await strapi.entityService.update(
        "api::product.product",
        id,
        data
      );
      console.log(res);
      ctx.response.status = 200;
    } catch (error) {}
  },
}));
