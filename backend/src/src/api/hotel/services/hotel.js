'use strict';

/**
 * hotel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hotel.hotel');
