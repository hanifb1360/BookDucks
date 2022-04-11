'use strict';

/**
 * lend service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lend.lend');
