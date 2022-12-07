const isDev =
  process.env.ELEVENTY_ENV === "development" ||
  process.env.NODE_ENV === "development";

const baseUrl = isDev
  ? `http://localhost:8080`
  : `https://blog-spotify.netlify.app`;

const site = {
  baseUrl,
};

module.exports = site;
