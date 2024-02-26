'use strict';

/**
 * block service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::block.block');
