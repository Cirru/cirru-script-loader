
cirru = require('cirru-script')
loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable()
  request = loaderUtils.getRemainingRequest(this)
  options = {
    path: request,
    base: './',
    relativePath: request
  }
  res = cirru.compile(source, options)
  map = res.mapping
  map.sourcesContent = [source]
  this.callback(null, res.js, res.mapping)
}
