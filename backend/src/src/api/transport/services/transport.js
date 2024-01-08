'use strict';

/**
 * transport service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transport.transport');
