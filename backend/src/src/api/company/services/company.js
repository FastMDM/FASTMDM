'use strict';

/**
 * company service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company.company');
