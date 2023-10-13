'use strict';

/**
 * auto-status service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-status.auto-status');
