'use strict';

/**
 * time-zone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::time-zone.time-zone');
