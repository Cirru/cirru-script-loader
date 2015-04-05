
CirruScript Webpack Loader
----

### Usage

```text
npm i --save-dev cirru-script-loader
```

use in `webpack.config.js`:

```js
loaders: [
  { test: /\.cirru$/, loader: "cirru-script-loader" }
]
```

or in code:

```js
require('cirru-script!demo.cirru')
```

Add issues if you find bugs. PRs are welcome.

Read more at Webpack loader docs: http://webpack.github.io/docs/using-loaders.html

### License

MIT