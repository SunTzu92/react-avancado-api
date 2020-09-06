"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const { afterCreateHook, afterUpdateHook } = require("../../../hooks/netlify");

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      afterCreateHook();
    },

    async afterUpdate(result, params, data) {
      afterUpdateHook();
    },
  },
};
