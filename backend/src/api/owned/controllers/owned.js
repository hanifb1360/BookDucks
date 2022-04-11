'use strict';

/**
 *  owned controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::owned.owned');
