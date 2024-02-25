'use strict';

/**
 * region service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::region.region');
