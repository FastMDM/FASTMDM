'use strict';

/**
 * animal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animal.animal');
