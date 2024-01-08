'use strict';

/**
 * animal controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::animal.animal');
