'use strict';

/**
 * puck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::puck.puck');
