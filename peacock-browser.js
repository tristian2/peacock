/*
 * Copyright 2012 Thorsten Lorenz. 
 * All rights reserved.
 * 
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

(function (exports) {
  'use strict';
  //@ sourceMappingURL=spans.js.map
  var classes = {
        String                   :  's'
      , Number                   :  'f'
  
      , Keyword                  :  'k'
      , 'Keyword.Constant'       :  'kc'
      , 'Keyword.Declaration'    :  'kd'
      , 'Keyword.Namespace'      :  'kn'
      , 'Keyword.Pseudo'         :  'kp'
      , 'Keyword.Reserved'       :  'kr'
      , 'Keyword.Type'           :  'kt'
  
      , Name                     :  'n'
      , 'Name.Attribute'         :  'na'
      , 'Name.Builtin'           :  'nb'
      , 'Name.Builtin.Pseudo'    :  'bp'
      , 'Name.Class'             :  'nc'
      , 'Name.Constant'          :  'no'
      , 'Name.Decorator'         :  'nd'
      , 'Name.Entity'            :  'ni'
      , 'Name.Exception'         :  'ne'
      , 'Name.Function'          :  'nf'
      , 'Name.Property'          :  'py'
      , 'Name.Label'             :  'nl'
      , 'Name.Namespace'         :  'nn'
      , 'Name.Other'             :  'nx'
      , 'Name.Tag'               :  'nt'
      , 'Name.Variable'          :  'nv'
      , 'Name.Variable.Class'    :  'vc'
      , 'Name.Variable.Global'   :  'vg'
      , 'Name.Variable.Instance' :  'vi'
  
  
      , Literal                  :  'l'
      , 'Literal.Date'           :  'ld'
  
      , Operator                 :  'o'
      , Punctuation              :  'p'
  
      , Comment                  :  'c'
      , 'Comment.Multiline'      :  'cm'
      , 'Comment.Preproc'        :  'cp'
      , 'Comment.Single'         :  'c1'
      , 'Comment.Special'        :  'cs'
  
      , Generic                  :  'g'
      , 'Generic.Deleted'        :  'gd'
      , 'Generic.Emph'           :  'ge'
      , 'Generic.Error'          :  'gr'
      , 'Generic.Heading'        :  'gh'
      , 'Generic.Inserted'       :  'gi'
      , 'Generic.Output'         :  'go'
      , 'Generic.Prompt'         :  'gp'
      , 'Generic.Strong'         :  'gs'
      , 'Generic.Subheading'     :  'gu'
      , 'Generic.Traceback'      :  'gt'
      }
    , spans = {};
    
  function escapeHtml (s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); 
  }
  
  function wrap (clazz) {
    return function escapeAndWrap (s) {
      return [ 
          '<span class="'
        , clazz 
        , '">' 
        , escapeHtml(s) 
        , '</span>'
        ].join('');
    };
  }
  
  Object.keys(classes)
    .forEach(function (k) {
      spans[k] = wrap(classes[k]);
    });
  
  
  //@ sourceMappingURL=themes/default.js.map
  
  var defaultTheme = {
  
      'Boolean': {
        'true'   :  undefined
      , 'false'  :  undefined
      , _default :  spans['Keyword.Constant']
      }
  
    , 'Identifier': {
        'Date': spans['Literal.Date']
      , 'Error': spans['Generic.Error']
      , _default: spans.Name.Other
      }
  
    , 'Null': {
        _default :  spans['Keyword.Constant']
      }
  
    , 'Numeric': {
        _default: spans.Number
      }
  
    , 'String': {
        _default: spans.String
      }
  
    , 'Keyword': {
        'break'       :  undefined
  
      , 'case'        :  undefined
      , 'catch'       :  undefined
      , 'continue'    :  undefined
  
      , 'debugger'    :  undefined
      , 'default'     :  undefined
      , 'delete'      :  undefined
      , 'do'          :  undefined
  
      , 'else'        :  undefined
  
      , 'finally'     :  undefined
      , 'for'         :  undefined
      , 'function'    :  undefined
  
      , 'if'          :  undefined
      , 'in'          :  undefined
      , 'instanceof'  :  undefined
  
      , 'new'         :  undefined
      , 'return'      :  undefined
      , 'switch'      :  undefined
  
      , 'this'        :  undefined
      , 'throw'       :  undefined
      , 'try'         :  undefined
      , 'typeof'      :  undefined
  
      , 'var'         :  undefined
      , 'void'        :  undefined
  
      , 'while'       :  undefined
      , 'with'        :  undefined
      , _default      :  spans.Keyword
    }
    , 'Punctuator': {
        ';': spans.Punctuation  
      , '.': spans.Punctuation  
      , ',': spans.Punctuation  
  
      , '{': spans.Punctuation  
      , '}': spans.Punctuation  
      , '(': spans.Punctuation  
      , ')': spans.Punctuation  
      , '[': spans.Punctuation
      , ']': spans.Punctuation
  
      , '<': undefined
      , '>': undefined
      , '+': undefined
      , '-': undefined
      , '*': undefined
      , '%': undefined
      , '&': undefined
      , '|': undefined
      , '^': undefined
      , '!': undefined
      , '~': undefined
      , '?': undefined
      , ':': undefined
      , '=': undefined
  
      , '<=': undefined
      , '>=': undefined
      , '==': undefined
      , '!=': undefined
      , '++': undefined
      , '--': undefined
      , '<<': undefined
      , '>>': undefined
      , '&&': undefined
      , '||': undefined
      , '+=': undefined
      , '-=': undefined
      , '*=': undefined
      , '%=': undefined
      , '&=': undefined
      , '|=': undefined
      , '^=': undefined
      , '/=': undefined
  
      , '===': undefined
      , '!==': undefined
      , '>>>': undefined
      , '<<=': undefined
      , '>>=': undefined
      
      , '>>>=': undefined
  
      , _default: spans.Operator  
    }
    , Line: {
       _default: spans['Comment.Single']
      }
  
    , Block: {
       _default: spans.Comment
      }
  
    , _default: undefined
  };
  
  //@ sourceMappingURL=peacock.js.map

  function resolveTheme() { 
    throw new Error('Resolving a theme by filename only works server side. \n' + 
                    'Manually resolve or create a theme {Object} and pass that to "highlight" instead.');
  }


var redeyed = redeyed || exports.redeyed;

  function highlight(code, theme_) {
    var toString = Object.prototype.toString;
  
    function isObject (obj) {
      return toString.call(obj) === '[object Object]';
    }
  
    var theme;
  
    if(theme_) 
      theme = isObject(theme_) ? theme_ : resolveTheme(theme_);
    else
      theme = defaultTheme;
  
    var highlightedCode = redeyed(code, theme).code;
  
    return [
        '<div class="highlight"><pre>'
      , highlightedCode
      , '</pre></div>'
    ].join('\n');
  }

  exports.peacock = { highlight: highlight };

})(window);