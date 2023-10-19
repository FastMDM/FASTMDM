'use strict';

/**
 * restaurant-cuisine service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-cuisine.restaurant-cuisine');
