'use strict';

/**
 * auto-size service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-size.auto-size');
