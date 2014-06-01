#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander'),
  clipboard = require('copy-paste');

program
	.option('-s, --string [string]', 'desc', '{"test":"string"}')
	.parse(process.argv);

var convert = function (input) {
  //make sure input is jSON
  function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
  if (isJson(input)){
    var parse = JSON.parse(input);
    var str = JSON.stringify(parse, null, 2);
    str = str.replace(/ /gi, "&nbsp;");
    str = str.replace(/\n/gi, "<br/>");
    clipboard.copy('<pre>'+JSON.stringify(str)+'</pre>');
  } else {
    throw new Error('Input string is not valid JSON');
  };
};

convert(program.string);