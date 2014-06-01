var should = require('should');
var assert = require('assert');
var convert = require('../index').convert;

describe('it should exist', function () {
  it('should load', function (done) {
    should.exist(convert);
    done();
  });

  it('should work with a valid JSON string', function (done) {
    var JSON = '{"test":"string"}';
    var html = convert(JSON);
    html.should.equal('<pre>"{<br/>&nbsp;&nbsp;\\\"test\\\":&nbsp;\\\"string\\\"<br/>}"</pre>');
    done();
  });

  it('should work with a JSON object', function (done) {
    var JSON = {
      test: 'string'
    };
    var html = convert(JSON);
    html.should.equal('<pre>"{<br/>&nbsp;&nbsp;\\\"test\\\":&nbsp;\\\"string\\\"<br/>}"</pre>');
    done();
  });

  it('should fail with an invalid JSON string', function (done) {
    var JSON = '{invalidtest:"string"}';

    function convertBlock() {
      convert(JSON);
    }

    assert.throws(function () {
      convertBlock();
    }, /Input string is not valid JSON/);
    done();
  });
});