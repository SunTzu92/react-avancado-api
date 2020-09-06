module.exports = ({ env }) => ({
  upload: {
    provider: "cloudinary",
    providerOptions: {
      url: env("CLOUDINARY_URL"),
      cloud_name: env("CLOUDINARY_NAME"),
      api_key: env("CLOUDINARY_KEY"),
      api_secret: env("CLOUDINARY_SECRET"),
    },
  },
});
