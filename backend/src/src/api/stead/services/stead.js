'use strict';

/**
 * stead service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stead.stead');
