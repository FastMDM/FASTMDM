'use strict';

/**
 * todo router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::todo.todo');
