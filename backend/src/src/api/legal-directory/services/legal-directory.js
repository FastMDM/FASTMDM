'use strict';

/**
 * legal-directory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::legal-directory.legal-directory');
