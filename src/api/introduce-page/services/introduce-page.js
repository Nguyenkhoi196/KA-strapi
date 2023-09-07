'use strict';

/**
 * introduce-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::introduce-page.introduce-page');
