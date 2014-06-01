#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
var clipboard = require('copy-paste');

program
	.option('-s, --string [string]', 'desc', '{"test":"string"}')
	.parse(process.argv);

var cool = function (jsonstring) {
	var parse = JSON.parse(jsonstring);
	var strung = JSON.stringify(parse, null, 2);
	strung = strung.replace(/ /gi, "&nbsp;");
	strung = strung.replace(/\n/gi, "<br/>");
	clipboard.copy('"<pre>'+JSON.stringify(strung)+'"</pre>"');
}

cool(program.string);
