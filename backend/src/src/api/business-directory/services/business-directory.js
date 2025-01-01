'use strict';

/**
 * business-directory service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-directory.business-directory');
