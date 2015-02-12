
CirruScript Webpack Loader
----

This project is in early stage. Add an issue if you find bugs. PRs are welcome.

### Usage

```
npm i --save-dev cirru-script-loader
```

```js
require('cirru-script!demo.cirru')
```

or

```js
loaders: [
  { test: /\.cirru$/, loader: "cirru-script-loader" }
]
```

Read more at Webpack loader docs: http://webpack.github.io/docs/using-loaders.html

### License

MIT