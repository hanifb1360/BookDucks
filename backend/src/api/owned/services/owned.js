'use strict';

/**
 * owned service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::owned.owned');
