'use strict';

/**
 * puck controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::puck.puck');
