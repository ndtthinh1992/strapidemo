'use strict';

/**
 * system-text service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::system-text.system-text');
