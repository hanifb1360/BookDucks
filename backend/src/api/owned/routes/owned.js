'use strict';

/**
 * owned router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::owned.owned');
