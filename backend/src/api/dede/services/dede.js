'use strict';

/**
 * dede service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dede.dede');
