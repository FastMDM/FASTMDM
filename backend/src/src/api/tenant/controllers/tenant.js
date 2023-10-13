'use strict';

/**
 *  tenant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tenant.tenant');
