"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async testApi(ctx) {
    try {
      await strapi.service("api::product.product").customService();
      ctx.body = "ok, aaa";
    } catch (error) {
      ctx.body = error;
    }
  },
  async find(ctx) {
    try {
      const { results, pagination } = await strapi
        .service("api::product.product")
        .findWithTotalInventory();
      const sanitizedEntity = await this.sanitizeOutput(results, ctx);
      return this.transformResponse(sanitizedEntity, { pagination });
    } catch (error) {
      ctx.body = error;
    }
  },
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db
      .query("api::product.product")
      .findOne({ where: { slug } });

    console.log("a");

    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
