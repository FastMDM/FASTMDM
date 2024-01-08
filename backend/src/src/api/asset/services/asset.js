'use strict';

/**
 * asset service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asset.asset');
