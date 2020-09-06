const axios = require("axios");

const netlifyWebhook = strapi.config.get("custom.netlifyWebhook", null);

export const afterCreateHook = () => {
  netlifyWebhook && axios.post(netlifyWebhook);
};

export const afterUpdateHook = () => {
  netlifyWebhook && axios.post(netlifyWebhook);
};
