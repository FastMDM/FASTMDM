'use strict';

/**
 * city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city.city');
