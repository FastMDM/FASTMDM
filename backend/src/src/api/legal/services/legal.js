'use strict';

/**
 * legal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legal.legal');
