'use strict';

/**
 * street service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::street.street');
