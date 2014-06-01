//make sure input is jSON
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function process(input, options) {
  var parse = null;
  if (options && options.parse) {
    if (isJson(input)) {
      parse = JSON.parse(input);
    } else {
      throw new Error('Input string is not valid JSON');
    };
  }
  var str = JSON.stringify(parse ? parse : input, null, 2);
  str = str.replace(/ /gi, "&nbsp;");
  str = str.replace(/\n/gi, "<br/>");
  return '<pre>' + JSON.stringify(str) + '</pre>';
}

module.exports = {
  convert: function (input) {
    if (typeof input === 'string') {
      return process(input, {
        parse: true
      });
    } else {
      return process(input);
    }
  }
};