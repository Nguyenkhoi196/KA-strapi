"use strict";

/**
 * introduce-page router
 */

import { factories } from "@strapi/strapi";
const { createCoreRouter } = factories;

export default createCoreRouter("api::introduce-page.introduce-page");
