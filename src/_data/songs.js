const { default: axios } = require("axios");

module.exports = async () => {
  try {
    const res = await axios.get("https://content.mayamachtmusik.at/api/songs", {
      headers: {
        Authorization:
          "Bearer 9faccbb725e516eae0f9271598e397b08e1822853685a13ad04f84e26875eb87ec5ee18f259c8c7908e21eedcdf2548ce20d17b30602458601cbfcbf74f950a8395d688e3b8d108bf4645a24f8b4f18cb70b3e39419c79e2e020ba1f0ec9bc25423bef7391775f399109f6583021b1165532be089f80e484024d7190773a88f6",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
