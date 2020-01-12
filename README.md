
CirruScript Webpack Loader
----

### Usage

```text
npm i --save-dev cirru-script-loader
```

use in `webpack.config.js`:

```js
module: {
  rules: [
    { test: /\.cirru$/, use: "cirru-script-loader" }
  ]
}
```

Add issues if you find bugs. PRs are welcome.

Read more at Webpack loader docs: http://webpack.github.io/docs/using-loaders.html

### License

MIT
