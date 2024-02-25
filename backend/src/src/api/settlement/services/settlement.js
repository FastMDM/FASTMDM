'use strict';

/**
 * settlement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::settlement.settlement');
