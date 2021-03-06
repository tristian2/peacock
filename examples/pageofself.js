/* 
 * Creates html version of itself and wraps it inside html page tags.
 * Finally opens it in the browser.
 */

var peacock  =  require('..')
  , fs       =  require('fs')
  , path     =  require('path')
  , exec     =  require('child_process').exec
  , styles   =  path.join(__dirname, '..', 'styles')
  , code     =  fs.readFileSync(__filename, 'utf-8')
  , htmlFile =  './pageofself.html'
  ;


// Highlight code and generate html with style reference included
function highlight (code) {

  var highlightedCode = peacock.highlight(code);

  return [
      '<!DOCTYPE HTML>'
    , '<html>'
    , '<head>'
    , '   <meta http-equiv="content-type" content="text/html; charset=utf-8"/>'
    , '   <title>Page of Self</title>'
    , ' <link rel="stylesheet" href="' + styles + '/tango.css" type="text/css" media="screen" charset="utf-8" />'
    , '</head>'
    , '<body>'
    , highlightedCode
    , '</body>'
    , '</html'
    ].join('\n');
}

var html = highlight(code);

// write html page
fs.writeFileSync(htmlFile, html);

exec('open ' + htmlFile);
