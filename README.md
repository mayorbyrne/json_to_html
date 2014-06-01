json_to_html
============

Ever needed a JSON string inside an HTML page, with all the prettiness?  I did.

# USAGE

There are two ways to use json_to_html.

You can use it programmatically, by requiring index.js, or you can use it from the command line.

From the command line, run

`cli.js -s '{"WHATEVER": "STRING", "YOU": "NEED CONVERTED"}'`

### please note the single quotes
		
The resulting html string will be copied to your clipboard, with `<pre>` tags attached, ready for use in your javascript code:

`<pre>"{<br/>&nbsp;&nbsp;\"WHATEVER\":&nbsp;\"STRING\",<br/>&nbsp;&nbsp;\"YOU\":&nbsp;\"NEED&nbsp;CONVERTED\"<br/>}"</pre>`

