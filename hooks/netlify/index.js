const axios = require("axios");
const netlifyWebhook = strapi.config.get("custom.netlifyWebhook", null);

module.exports = {
  afterCreateHook: () => {
    netlifyWebhook && axios.post(netlifyWebhook);
  },

  afterUpdateHook: () => {
    netlifyWebhook && axios.post(netlifyWebhook);
  },
};
