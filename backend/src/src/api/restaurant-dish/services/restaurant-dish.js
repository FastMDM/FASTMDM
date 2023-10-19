'use strict';

/**
 * restaurant-dish service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-dish.restaurant-dish');
