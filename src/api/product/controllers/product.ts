// @ts-nocheck
"use strict";
import _ from "lodash";
/**
 * product controller
 */
import { errors } from "@strapi/utils";
import { Strapi } from "@strapi/strapi";

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }: { strapi: Strapi }) => ({
    async find(ctx) {
      try {
        let totalInventory: number;
        ctx.query = {
          populate: {
            img: {
              fields: ["url"],
            },
          },
        };
        const { data, meta } = await super.find(ctx);
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
        ctx.throw(500, "Internal Server Error");
      }
    },
    async findOne(ctx) {
      const response = await super.findOne(ctx);

      return response;
    },
    async create(ctx) {
      try {
        const { user } = ctx.state;
        if (!user) {
          throw new errors.UnauthorizedError({
            message: "You have roles but not user",
          });
        }

        ctx.request.body.data.created_by_user = _.toString(user.id);
        return await super.create(ctx);
      } catch (error) {
        throw error;
      }
    },

    async update(ctx) {
      try {
        const { user } = ctx.state;
        if (user) {
          ctx.request.body.data.updated_by_user = _.toString(user.id);
        }
        const response = await super.update(ctx);

        return response;
      } catch (error) {
        throw error;
      }
    },

    async updateProduct(ctx) {
      try {
        const { id } = ctx.params;
        const { files } = ctx.request.files;

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
        await super.update(ctx);
        ctx.response.status = 200;
        return {
          status: ctx.response.status,
          message: "Cập nhật sản phẩm thành công",
        };
      } catch (error) {
        throw error;
      }
    },
  })
);
