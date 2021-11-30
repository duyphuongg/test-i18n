var context = require.context("./", true, /\.js$/);
context.keys().forEach((filename) => {
  if (filename === "./index.js") return;
  console.log(4444444, filename);
  context(filename);
});
