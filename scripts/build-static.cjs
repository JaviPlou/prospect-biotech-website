const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { transformSync } = require("@babel/core");

const root = path.resolve(__dirname, "..");
const compiled = transformSync(
  fs.readFileSync(path.join(root, "src/App.js"), "utf8"),
  {
    filename: "App.js",
    babelrc: false,
    configFile: false,
    presets: [require.resolve("@babel/preset-react")],
    plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
  },
).code;
const appModule = { exports: {} };
vm.runInNewContext(compiled, {
  module: appModule,
  exports: appModule.exports,
  require,
  process: { env: { PUBLIC_URL: "." } },
});
const markup = renderToStaticMarkup(
  React.createElement(appModule.exports.default),
);
const css = fs.readFileSync(path.join(root, "src/site.css"), "utf8");
const template = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const html = template
  .replace("</head>", `    <style>${css}</style>\n  </head>`)
  .replace(/\s*<noscript>.*?<\/noscript>/s, "")
  .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
for (const name of ["index.html", "Prospect Biotech.html"]) {
  fs.writeFileSync(path.join(root, name), html);
}
fs.mkdirSync(path.join(root, "public/assets"), { recursive: true });
fs.copyFileSync(
  path.join(root, "assets/prospect-logo.png"),
  path.join(root, "public/assets/prospect-logo.png"),
);
console.log(
  "Generated both static pages from src/App.js. Navigation and disclosures work without JavaScript.",
);
