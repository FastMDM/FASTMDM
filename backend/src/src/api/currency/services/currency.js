'use strict';

/**
 * currency service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::currency.currency');
