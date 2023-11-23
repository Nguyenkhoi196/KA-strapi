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
        return acc + current.attributes.inventory;
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

      const { files } = ctx.request.files;
      if (files) {
        await strapi
          .service("api::product.product")
          .updateImage({ id, files })
          .catch((error) => {
            throw error;
          });
      }
      const res = await strapi.entityService.update(
        "api::product.product",
        id,
        data
      );
      console.log(res);
      ctx.response.status = 200;
    } catch (error) {
      console.log(error);
    }
  },
  async getTotalProducts(ctx) {
    try {
      const res = await strapi
        .service("api::product.product")
        .getTotalProducts()
        .catch((error) => {
          throw error;
        });
      const totalInventory = res.reduce((acc, current) => {
        return acc + current.inventory;
      }, 0);
      return { totalInventory, data: res };
    } catch (error) {
      console.log(error);
    }
  },
}));
