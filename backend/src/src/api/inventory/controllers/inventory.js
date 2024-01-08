'use strict';

/**
 * inventory controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::inventory.inventory');
