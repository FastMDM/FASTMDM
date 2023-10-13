'use strict';

/**
 * auto-size router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::auto-size.auto-size');
