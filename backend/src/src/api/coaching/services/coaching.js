'use strict';

/**
 * coaching service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coaching.coaching');
