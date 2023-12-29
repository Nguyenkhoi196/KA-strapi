"use strict";

/**
 * introduce-page service
 */

import { factories } from "@strapi/strapi";
const { createCoreService } = factories;

export default createCoreService("api::introduce-page.introduce-page");
