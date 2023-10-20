'use strict';

/**
 * restaurant-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::restaurant-price.restaurant-price');
