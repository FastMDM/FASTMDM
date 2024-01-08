'use strict';

/**
 * service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service.service');
