// @ts-nocheck
"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({

  async find(ctx) {
    try {
      ctx.query = { ...ctx.query }
      const { data, meta } = await super.find(ctx)
      const totalInventory = data.reduce((acc, current) => {
        return acc + parseInt(current.attributes.inventory);
      }, 0);
      return { totalInventory, data, meta }

    } catch (error) {
      throw (error)
    }
  },
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const entity = await strapi.db
      .query("api::product.product")
      .findOne({ where: { slug } });
    const sanitizedEntity = await this.sanitizeOutput(entity);
    return this.transformResponse(sanitizedEntity);
  },

}));
