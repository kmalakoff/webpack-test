module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  externals: {
    async1: "(function() { throw new Error('test'); }())"
  }
};
