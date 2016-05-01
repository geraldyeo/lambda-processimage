var validate = require('@smallwins/validate')
var lambda = require('@smallwins/lambda')

function valid(event, callback) {
  var schema = {
    op: {required:true, type:String},
    x: {required:true, type:Number},
    y: {required:true, type:Number}
  }
  validate(event, schema, callback)
}

function fn(event, callback) {
  // callback(Error('name failed'))
  var val;
  switch (event.op) {
    case 'ADD':
    default:
      val = event.x + event.y;
      break;
  }

  callback(null, {ok: true, value: val})
}

exports.handler = lambda(valid, fn)
