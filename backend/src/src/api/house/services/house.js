'use strict';

/**
 * house service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::house.house');
