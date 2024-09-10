const contentful = require("contentful");

export const contentfulClient = contentful.createClient({
  space: "aly420otq74v",
  accessToken: process.env.ACCESS_TOKEN_CONTENTFUL,
  environment: "master",
});
