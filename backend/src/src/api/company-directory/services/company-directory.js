'use strict';

/**
 * company-directory service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::company-directory.company-directory');
