// @ts-nocheck
"use strict";
import _ from "lodash";
/**
 * product controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::product.product",
  ({ strapi }) => ({
    async find(ctx: any) {
      try {
        const { data, meta } = await super.find(ctx);
        const totalInventory = data.reduce(
          (acc: any, current: { attributes: { inventory: any } }) => {
            return acc + current.attributes.inventory;
          },
          0
        );
        return { totalInventory, data, meta };
      } catch (error) {
        throw error;
      }
    },

    async updateProduct(ctx: {
      params: { id: any };
      request: { body: { data: any }; files: { files: any } };
      response: { status: number };
    }) {
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
        console.log({
          a: strapi.plugins.upload.service,
          b: strapi.plugins.upload.controller,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async test(ctx) {
      try {
        console.log("a", strapi.plugins.upload);
        const res = await strapi
          .service("api::product.product")
          .getTotalProducts()
          .catch((error: any) => {
            throw error;
          });
        const totalInventory = res.reduce(
          (acc: any, current: { inventory: any }) => {
            return acc + current.inventory;
          },
          0
        );
        return { totalInventory, data: res };
      } catch (error) {
        console.log(error);
      }
    },
  })
);
