// @ts-nocheck
"use strict";
import _ from "lodash";
/**
 * product controller
 */
import { sanitize } from "@strapi/utils";
import { Strapi } from "@strapi/strapi";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }: { strapi: Strapi }) => ({
    async find(ctx) {
      try {
        let totalInventory: number;

        const { data, meta } = await super.find(ctx);
        const entries = await strapi.entityService.findMany(
          "api::product.product",
          {}
        );
        if (_.isEmpty(ctx.request.query)) {
          totalInventory = await strapi
            .service("api::product.product")
            .getTotalProductsInventory();
        } else {
          totalInventory = data.reduce(
            (acc: any, current: { attributes: { inventory: any } }) => {
              return acc + current.attributes.inventory;
            },
            0
          );
        }
        return { totalInventory, data, meta };
      } catch (error) {
        throw error;
      }
    },
    async findOne(ctx) {
      const response = await super.findOne(ctx);
      return response;
    },
    async create(ctx) {
      try {
        const response = await super.create(ctx);
        return response;
      } catch (error) {}
    },

    async update(ctx) {
      try {
        const response = await super.create(ctx);
        const { user } = ctx.state;
        response.data.attributes.updateBy = {
          id: user.id,
          name: user.username,
        };

        return response;
      } catch (error) {
        return ctx.send(error);
      }
    },

    async updateProduct(ctx) {
      try {
        const { id } = ctx.params;
        const { data } = ctx.request.body;
        const { files } = ctx.request.files;
        console.log(ctx.params, ctx.request.body);

        if (!_.isEmpty(files) && files.length > 0) {
          if (id) {
            await strapi
              .service("api::product.product")
              .updateImage({ id, files })
              .catch((err: any) => {
                throw err;
              });
          }
          return ctx.babRequest("id is missing");
        }

        await strapi.entityService.update("api::product.product", id, { data })
          .catch;
        ctx.response.status = 200;
        return {
          status: ctx.response.status,
          message: "Cập nhật sản phẩm thành công",
        };
      } catch (error) {
        return ctx.send(error);
      }
    },
  })
);
