'use strict';

/**
 * auto-drive service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auto-drive.auto-drive');
