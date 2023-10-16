'use strict';

/**
 *  todo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo');
