"use strict";

/**
 * product service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::product.product", ({ strapi }) => ({
  async customService(...arg) {
    console.log("custom service");
  },
  async findWithTotalInventory(...arg) {
    const { results, pagination } = await super.find(...arg);
    pagination.totalInventory = results.reduce((acc, current) => {
      return acc + parseInt(current.inventory);
    }, 0);
    return { results, pagination };
  },
  async testFindOne(entityId, params) {
    const result = await super.findOne(entityId, params);
    console.log("a", result);
    return result;
  },
}));
