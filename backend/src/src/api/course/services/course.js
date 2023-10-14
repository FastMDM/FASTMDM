'use strict';

/**
 * course service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course.course');
