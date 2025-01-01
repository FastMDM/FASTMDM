'use strict';

/**
 * business service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business.business');
