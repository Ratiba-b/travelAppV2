//configure cors pour que ce soit bien relier a l"url de l"api back

module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
};
