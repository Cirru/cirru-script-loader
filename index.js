
cirru = require('cirru-script')

module.exports = function(source) {
  this.cacheable()
  options = {
    path: 'fake-path',
    base: 'fake-base',
    relativePath: 'fake-relative'
  }
  res = cirru.compile(source, options)
  this.callback(null, res.js, res.mapping)
}
