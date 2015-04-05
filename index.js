
cirru = require('cirru-script')
loaderUtils = require('loader-utils')

module.exports = function(source) {
  this.cacheable()
  return cirru.compile(source)
}
