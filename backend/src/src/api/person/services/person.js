'use strict';

/**
 * person service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::person.person');
