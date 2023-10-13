'use strict';

/**
 * auto-cylinder service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-cylinder.auto-cylinder');
