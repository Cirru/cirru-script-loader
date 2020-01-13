
cirru = require('cirru-script')

module.exports = function(source) {
  this.cacheable()
  return cirru.compile(source)
}
