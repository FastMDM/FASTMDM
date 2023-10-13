'use strict';

/**
 * auto-fuel service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-fuel.auto-fuel');
