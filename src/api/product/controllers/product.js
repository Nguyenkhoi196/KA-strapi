// @ts-nocheck
"use strict";

/**
 * product controller
 */
const { sanitize, validate } = require("@strapi/utils");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  // async find(ctx) {
  //   try {
  //     const sanitizedQueryParams = await this.sanitizeQuery(ctx);
  //     const { results, pagination } = await strapi
  //       .service("api::product.product")
  //       .find(sanitizedQueryParams);
  //     const totalInventory = results.reduce((acc, current) => {
  //       return acc + parseInt(current.inventory);
  //     }, 0);
  //     return { totalInventory, data: results, meta: { pagination } };
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  async findMany(ctx) {
    try {
      const entries = await strapi.db.query("api::product.product").findMany({
        where: {
          name: {
            $eq: "hihi",
          },
        },
      });
      ctx.body = entries;
    } catch (error) {}
  },
}));
