/* ================= Ajax cart ===================== */

/* replaceUrlParam - http://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery */
function replaceUrlParam(e,r,a){var n=new RegExp("("+r+"=).*?(&|$)"),c=e;return c=e.search(n)>=0?e.replace(n,"$1"+a+"$2"):c+(c.indexOf("?")>0?"&":"?")+r+"="+a};
// Timber functions
window.timber = window.timber || {};

timber.cacheSelectors = function () {
  timber.cache = {
    // General
    $html                    : $('html'),
    $body                    : $(document.body),
    $changeView              : $('.change-view')
  };
};
timber.init = function () {
  FastClick.attach(document.body);
  timber.cacheSelectors();

  timber.drawersInit();
};
timber.drawersInit = function () {
  timber.LeftDrawer = new timber.Drawers('NavDrawer', 'left');
  
    timber.RightDrawer = new timber.Drawers('CartDrawer', 'right', {
      'onDrawerOpen': ajaxCart.load
    });
  
};
/*============================================================================
  Drawer modules
  - Docs http://shopify.github.io/Timber/#drawers
==============================================================================*/
timber.Drawers=function(){var a=function(a,b,c){var d={close:".js-drawer-close",open:".js-drawer-open-"+b,openClass:$("tr.cart__row").data("line")?"":"js-drawer-open",dirOpenClass:"js-drawer-open-"+b};return this.$nodes={parent:$("body, html"),page:$("#PageContainer"),moved:$(".is-moved-by-drawer")},this.config=$.extend(d,c),this.position=b,this.$drawer=$("#"+a),!!this.$drawer.length&&(this.drawerIsOpen=!1,void this.init())};return a.prototype.init=function(){$(this.config.open).on("click",$.proxy(this.open,this)),this.$drawer.find(this.config.close).on("click",$.proxy(this.close,this))},a.prototype.open=function(a){var b=!1;return a?a.preventDefault():b=!0,a&&a.stopPropagation&&(a.stopPropagation(),this.$activeSource=$(a.currentTarget)),this.drawerIsOpen&&!b?this.close():(timber.cache.$body.trigger("beforeDrawerOpen.timber",this),this.$nodes.moved.addClass("is-transitioning"),this.$drawer.prepareTransition(),this.$nodes.parent.addClass(this.config.openClass+" "+this.config.dirOpenClass),this.drawerIsOpen=!0,this.trapFocus(this.$drawer,"drawer_focus"),this.config.onDrawerOpen&&"function"==typeof this.config.onDrawerOpen&&(b||this.config.onDrawerOpen()),this.$activeSource&&this.$activeSource.attr("aria-expanded")&&this.$activeSource.attr("aria-expanded","true"),this.$nodes.page.on("touchmove.drawer",function(){return!1}),this.$nodes.page.on("click.drawer",$.proxy(function(){return this.close(),!1},this)),void timber.cache.$body.trigger("afterDrawerOpen.timber",this))},a.prototype.close=function(){this.drawerIsOpen&&(timber.cache.$body.trigger("beforeDrawerClose.timber",this),$(document.activeElement).trigger("blur"),this.$nodes.moved.prepareTransition({disableExisting:!0}),this.$drawer.prepareTransition({disableExisting:!0}),this.$nodes.parent.removeClass(this.config.dirOpenClass+" "+this.config.openClass),this.drawerIsOpen=!1,this.removeTrapFocus(this.$drawer,"drawer_focus"),this.$nodes.page.off(".drawer"),timber.cache.$body.trigger("afterDrawerClose.timber",this))},a.prototype.trapFocus=function(a,b){var c=b?"focusin."+b:"focusin";a.attr("tabindex","-1"),a.focus(),$(document).on(c,function(b){a[0]===b.target||a.has(b.target).length||a.focus()})},a.prototype.removeTrapFocus=function(a,b){var c=b?"focusin."+b:"focusin";a.removeAttr("tabindex"),$(document).off(c)},a}();
// Initialize Timber's JS on docready
$(timber.init);



  var Handlebars=function(){var e=function(){"use strict";function t(e){this.string=e}var e;t.prototype.toString=function(){return""+this.string};e=t;return e}();var t=function(e){"use strict";function o(e){return r[e]||"&"}function u(e,t){for(var n in t){if(Object.prototype.hasOwnProperty.call(t,n)){e[n]=t[n]}}}function c(e){if(e instanceof n){return e.toString()}else if(!e&&e!==0){return""}e=""+e;if(!s.test(e)){return e}return e.replace(i,o)}function h(e){if(!e&&e!==0){return true}else if(l(e)&&e.length===0){return true}else{return false}}var t={};var n=e;var r={"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var i=/[&<>"'`]/g;var s=/[&<>"'`]/;t.extend=u;var a=Object.prototype.toString;t.toString=a;var f=function(e){return typeof e==="function"};if(f(/x/)){f=function(e){return typeof e==="function"&&a.call(e)==="[object Function]"}}var f;t.isFunction=f;var l=Array.isArray||function(e){return e&&typeof e==="object"?a.call(e)==="[object Array]":false};t.isArray=l;t.escapeExpression=c;t.isEmpty=h;return t}(e);var n=function(){"use strict";function n(e,n){var r;if(n&&n.firstLine){r=n.firstLine;e+=" - "+r+":"+n.firstColumn}var i=Error.prototype.constructor.call(this,e);for(var s=0;s<t.length;s++){this[t[s]]=i[t[s]]}if(r){this.lineNumber=r;this.column=n.firstColumn}}var e;var t=["description","fileName","lineNumber","message","name","number","stack"];n.prototype=new Error;e=n;return e}();var r=function(e,t){"use strict";function h(e,t){this.helpers=e||{};this.partials=t||{};p(this)}function p(e){e.registerHelper("helperMissing",function(e){if(arguments.length===2){return undefined}else{throw new i("Missing helper: '"+e+"'")}});e.registerHelper("blockHelperMissing",function(t,n){var r=n.inverse||function(){},i=n.fn;if(f(t)){t=t.call(this)}if(t===true){return i(this)}else if(t===false||t==null){return r(this)}else if(a(t)){if(t.length>0){return e.helpers.each(t,n)}else{return r(this)}}else{return i(t)}});e.registerHelper("each",function(e,t){var n=t.fn,r=t.inverse;var i=0,s="",o;if(f(e)){e=e.call(this)}if(t.data){o=m(t.data)}if(e&&typeof e==="object"){if(a(e)){for(var u=e.length;i<u;i++){if(o){o.index=i;o.first=i===0;o.last=i===e.length-1}s=s+n(e[i],{data:o})}}else{for(var l in e){if(e.hasOwnProperty(l)){if(o){o.key=l;o.index=i;o.first=i===0}s=s+n(e[l],{data:o});i++}}}}if(i===0){s=r(this)}return s});e.registerHelper("if",function(e,t){if(f(e)){e=e.call(this)}if(!t.hash.includeZero&&!e||r.isEmpty(e)){return t.inverse(this)}else{return t.fn(this)}});e.registerHelper("unless",function(t,n){return e.helpers["if"].call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})});e.registerHelper("with",function(e,t){if(f(e)){e=e.call(this)}if(!r.isEmpty(e))return t.fn(e)});e.registerHelper("log",function(t,n){var r=n.data&&n.data.level!=null?parseInt(n.data.level,10):1;e.log(r,t)})}function v(e,t){d.log(e,t)}var n={};var r=e;var i=t;var s="1.3.0";n.VERSION=s;var o=4;n.COMPILER_REVISION=o;var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};n.REVISION_CHANGES=u;var a=r.isArray,f=r.isFunction,l=r.toString,c="[object Object]";n.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:d,log:v,registerHelper:function(e,t,n){if(l.call(e)===c){if(n||t){throw new i("Arg not supported with multiple helpers")}r.extend(this.helpers,e)}else{if(n){t.not=n}this.helpers[e]=t}},registerPartial:function(e,t){if(l.call(e)===c){r.extend(this.partials,e)}else{this.partials[e]=t}}};var d={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(e,t){if(d.level<=e){var n=d.methodMap[e];if(typeof console!=="undefined"&&console[n]){console[n].call(console,t)}}}};n.logger=d;n.log=v;var m=function(e){var t={};r.extend(t,e);return t};n.createFrame=m;return n}(t,n);var i=function(e,t,n){"use strict";function a(e){var t=e&&e[0]||1,n=o;if(t!==n){if(t<n){var r=u[n],i=u[t];throw new s("Template was precompiled with an older version of Handlebars than the current runtime. "+"Please update your precompiler to a newer version ("+r+") or downgrade your runtime to an older version ("+i+").")}else{throw new s("Template was precompiled with a newer version of Handlebars than the current runtime. "+"Please update your runtime to a newer version ("+e[1]+").")}}}function f(e,t){if(!t){throw new s("No environment passed to template")}var n=function(e,n,r,i,o,u){var a=t.VM.invokePartial.apply(this,arguments);if(a!=null){return a}if(t.compile){var f={helpers:i,partials:o,data:u};o[n]=t.compile(e,{data:u!==undefined},t);return o[n](r,f)}else{throw new s("The partial "+n+" could not be compiled when running in runtime-only mode")}};var r={escapeExpression:i.escapeExpression,invokePartial:n,programs:[],program:function(e,t,n){var r=this.programs[e];if(n){r=c(e,t,n)}else if(!r){r=this.programs[e]=c(e,t)}return r},merge:function(e,t){var n=e||t;if(e&&t&&e!==t){n={};i.extend(n,t);i.extend(n,e)}return n},programWithDepth:t.VM.programWithDepth,noop:t.VM.noop,compilerInfo:null};return function(n,i){i=i||{};var s=i.partial?i:t,o,u;if(!i.partial){o=i.helpers;u=i.partials}var a=e.call(r,s,n,o,u,i.data);if(!i.partial){t.VM.checkRevision(r.compilerInfo)}return a}}function l(e,t,n){var r=Array.prototype.slice.call(arguments,3);var i=function(e,i){i=i||{};return t.apply(this,[e,i.data||n].concat(r))};i.program=e;i.depth=r.length;return i}function c(e,t,n){var r=function(e,r){r=r||{};return t(e,r.data||n)};r.program=e;r.depth=0;return r}function h(e,t,n,r,i,o){var u={partial:true,helpers:r,partials:i,data:o};if(e===undefined){throw new s("The partial "+t+" could not be found")}else if(e instanceof Function){return e(n,u)}}function p(){return""}var r={};var i=e;var s=t;var o=n.COMPILER_REVISION;var u=n.REVISION_CHANGES;r.checkRevision=a;r.template=f;r.programWithDepth=l;r.program=c;r.invokePartial=h;r.noop=p;return r}(t,n,r);var s=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n;var f=r;var l=i;var c=function(){var e=new o.HandlebarsEnvironment;f.extend(e,o);e.SafeString=u;e.Exception=a;e.Utils=f;e.VM=l;e.template=function(t){return l.template(t,e)};return e};var h=c();h.create=c;s=h;return s}(r,e,n,t,i);var o=function(e){"use strict";function r(e){e=e||{};this.firstLine=e.first_line;this.firstColumn=e.first_column;this.lastColumn=e.last_column;this.lastLine=e.last_line}var t;var n=e;var i={ProgramNode:function(e,t,n,s){var o,u;if(arguments.length===3){s=n;n=null}else if(arguments.length===2){s=t;t=null}r.call(this,s);this.type="program";this.statements=e;this.strip={};if(n){u=n[0];if(u){o={first_line:u.firstLine,last_line:u.lastLine,last_column:u.lastColumn,first_column:u.firstColumn};this.inverse=new i.ProgramNode(n,t,o)}else{this.inverse=new i.ProgramNode(n,t)}this.strip.right=t.left}else if(t){this.strip.left=t.right}},MustacheNode:function(e,t,n,s,o){r.call(this,o);this.type="mustache";this.strip=s;if(n!=null&&n.charAt){var u=n.charAt(3)||n.charAt(2);this.escaped=u!=="{"&&u!=="&"}else{this.escaped=!!n}if(e instanceof i.SexprNode){this.sexpr=e}else{this.sexpr=new i.SexprNode(e,t)}this.sexpr.isRoot=true;this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(e,t,n){r.call(this,n);this.type="sexpr";this.hash=t;var i=this.id=e[0];var s=this.params=e.slice(1);var o=this.eligibleHelper=i.isSimple;this.isHelper=o&&(s.length||t)},PartialNode:function(e,t,n,i){r.call(this,i);this.type="partial";this.partialName=e;this.context=t;this.strip=n},BlockNode:function(e,t,i,s,o){r.call(this,o);if(e.sexpr.id.original!==s.path.original){throw new n(e.sexpr.id.original+" doesn't match "+s.path.original,this)}this.type="block";this.mustache=e;this.program=t;this.inverse=i;this.strip={left:e.strip.left,right:s.strip.right};(t||i).strip.left=e.strip.right;(i||t).strip.right=s.strip.left;if(i&&!t){this.isInverse=true}},ContentNode:function(e,t){r.call(this,t);this.type="content";this.string=e},HashNode:function(e,t){r.call(this,t);this.type="hash";this.pairs=e},IdNode:function(e,t){r.call(this,t);this.type="ID";var i="",s=[],o=0;for(var u=0,a=e.length;u<a;u++){var f=e[u].part;i+=(e[u].separator||"")+f;if(f===".."||f==="."||f==="this"){if(s.length>0){throw new n("Invalid path: "+i,this)}else if(f===".."){o++}else{this.isScoped=true}}else{s.push(f)}}this.original=i;this.parts=s;this.string=s.join(".");this.depth=o;this.isSimple=e.length===1&&!this.isScoped&&o===0;this.stringModeValue=this.string},PartialNameNode:function(e,t){r.call(this,t);this.type="PARTIAL_NAME";this.name=e.original},DataNode:function(e,t){r.call(this,t);this.type="DATA";this.id=e},StringNode:function(e,t){r.call(this,t);this.type="STRING";this.original=this.string=this.stringModeValue=e},IntegerNode:function(e,t){r.call(this,t);this.type="INTEGER";this.original=this.integer=e;this.stringModeValue=Number(e)},BooleanNode:function(e,t){r.call(this,t);this.type="BOOLEAN";this.bool=e;this.stringModeValue=e==="true"},CommentNode:function(e,t){r.call(this,t);this.type="comment";this.comment=e}};t=i;return t}(n);var u=function(){"use strict";var e;var t=function(){function t(e,t){return{left:e.charAt(2)==="~",right:t.charAt(0)==="~"||t.charAt(1)==="~"}}function r(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(n,r,i,s,o,u,a){var f=u.length-1;switch(o){case 1:return new s.ProgramNode(u[f-1],this._$);break;case 2:return new s.ProgramNode([],this._$);break;case 3:this.$=new s.ProgramNode([],u[f-1],u[f],this._$);break;case 4:this.$=new s.ProgramNode(u[f-2],u[f-1],u[f],this._$);break;case 5:this.$=new s.ProgramNode(u[f-1],u[f],[],this._$);break;case 6:this.$=new s.ProgramNode(u[f],this._$);break;case 7:this.$=new s.ProgramNode([],this._$);break;case 8:this.$=new s.ProgramNode([],this._$);break;case 9:this.$=[u[f]];break;case 10:u[f-1].push(u[f]);this.$=u[f-1];break;case 11:this.$=new s.BlockNode(u[f-2],u[f-1].inverse,u[f-1],u[f],this._$);break;case 12:this.$=new s.BlockNode(u[f-2],u[f-1],u[f-1].inverse,u[f],this._$);break;case 13:this.$=u[f];break;case 14:this.$=u[f];break;case 15:this.$=new s.ContentNode(u[f],this._$);break;case 16:this.$=new s.CommentNode(u[f],this._$);break;case 17:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 18:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 19:this.$={path:u[f-1],strip:t(u[f-2],u[f])};break;case 20:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 21:this.$=new s.MustacheNode(u[f-1],null,u[f-2],t(u[f-2],u[f]),this._$);break;case 22:this.$=new s.PartialNode(u[f-2],u[f-1],t(u[f-3],u[f]),this._$);break;case 23:this.$=t(u[f-1],u[f]);break;case 24:this.$=new s.SexprNode([u[f-2]].concat(u[f-1]),u[f],this._$);break;case 25:this.$=new s.SexprNode([u[f]],null,this._$);break;case 26:this.$=u[f];break;case 27:this.$=new s.StringNode(u[f],this._$);break;case 28:this.$=new s.IntegerNode(u[f],this._$);break;case 29:this.$=new s.BooleanNode(u[f],this._$);break;case 30:this.$=u[f];break;case 31:u[f-1].isHelper=true;this.$=u[f-1];break;case 32:this.$=new s.HashNode(u[f],this._$);break;case 33:this.$=[u[f-2],u[f]];break;case 34:this.$=new s.PartialNameNode(u[f],this._$);break;case 35:this.$=new s.PartialNameNode(new s.StringNode(u[f],this._$),this._$);break;case 36:this.$=new s.PartialNameNode(new s.IntegerNode(u[f],this._$));break;case 37:this.$=new s.DataNode(u[f],this._$);break;case 38:this.$=new s.IdNode(u[f],this._$);break;case 39:u[f-2].push({part:u[f],separator:u[f-1]});this.$=u[f-2];break;case 40:this.$=[{part:u[f]}];break;case 43:this.$=[];break;case 44:u[f-1].push(u[f]);break;case 47:this.$=[u[f]];break;case 48:u[f-1].push(u[f]);break}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(t,n){throw new Error(t)},parse:function(t){function v(e){r.length=r.length-2*e;i.length=i.length-e;s.length=s.length-e}function m(){var e;e=n.lexer.lex()||1;if(typeof e!=="number"){e=n.symbols_[e]||e}return e}var n=this,r=[0],i=[null],s=[],o=this.table,u="",a=0,f=0,l=0,c=2,h=1;this.lexer.setInput(t);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;if(typeof this.lexer.yylloc=="undefined")this.lexer.yylloc={};var p=this.lexer.yylloc;s.push(p);var d=this.lexer.options&&this.lexer.options.ranges;if(typeof this.yy.parseError==="function")this.parseError=this.yy.parseError;var g,y,b,w,E,S,x={},T,N,C,k;while(true){b=r[r.length-1];if(this.defaultActions[b]){w=this.defaultActions[b]}else{if(g===null||typeof g=="undefined"){g=m()}w=o[b]&&o[b][g]}if(typeof w==="undefined"||!w.length||!w[0]){var L="";if(!l){k=[];for(T in o[b])if(this.terminals_[T]&&T>2){k.push("'"+this.terminals_[T]+"'")}if(this.lexer.showPosition){L="Parse error on line "+(a+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[g]||g)+"'"}else{L="Parse error on line "+(a+1)+": Unexpected "+(g==1?"end of input":"'"+(this.terminals_[g]||g)+"'")}this.parseError(L,{text:this.lexer.match,token:this.terminals_[g]||g,line:this.lexer.yylineno,loc:p,expected:k})}}if(w[0]instanceof Array&&w.length>1){throw new Error("Parse Error: multiple actions possible at state: "+b+", token: "+g)}switch(w[0]){case 1:r.push(g);i.push(this.lexer.yytext);s.push(this.lexer.yylloc);r.push(w[1]);g=null;if(!y){f=this.lexer.yyleng;u=this.lexer.yytext;a=this.lexer.yylineno;p=this.lexer.yylloc;if(l>0)l--}else{g=y;y=null}break;case 2:N=this.productions_[w[1]][1];x.$=i[i.length-N];x._$={first_line:s[s.length-(N||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(N||1)].first_column,last_column:s[s.length-1].last_column};if(d){x._$.range=[s[s.length-(N||1)].range[0],s[s.length-1].range[1]]}S=this.performAction.call(x,u,f,a,this.yy,w[1],i,s);if(typeof S!=="undefined"){return S}if(N){r=r.slice(0,-1*N*2);i=i.slice(0,-1*N);s=s.slice(0,-1*N)}r.push(this.productions_[w[1]][0]);i.push(x.$);s.push(x._$);C=o[r[r.length-2]][r[r.length-1]];r.push(C);break;case 3:return true}}return true}};var n=function(){var e={EOF:1,parseError:function(t,n){if(this.yy.parser){this.yy.parser.parseError(t,n)}else{throw new Error(t)}},setInput:function(e){this._input=e;this._more=this._less=this.done=false;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};if(this.options.ranges)this.yylloc.range=[0,0];this.offset=0;return this},input:function(){var e=this._input[0];this.yytext+=e;this.yyleng++;this.offset++;this.match+=e;this.matched+=e;var t=e.match(/(?:\r\n?|\n).*/g);if(t){this.yylineno++;this.yylloc.last_line++}else{this.yylloc.last_column++}if(this.options.ranges)this.yylloc.range[1]++;this._input=this._input.slice(1);return e},unput:function(e){var t=e.length;var n=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-t-1);this.offset-=t;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);if(n.length-1)this.yylineno-=n.length-1;var i=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-t};if(this.options.ranges){this.yylloc.range=[i[0],i[0]+this.yyleng-t]}return this},more:function(){this._more=true;return this},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;if(e.length<20){e+=this._input.substr(0,20-e.length)}return(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput();var t=(new Array(e.length+1)).join("-");return e+this.upcomingInput()+"\n"+t+"^"},next:function(){if(this.done){return this.EOF}if(!this._input)this.done=true;var e,t,n,r,i,s;if(!this._more){this.yytext="";this.match=""}var o=this._currentRules();for(var u=0;u<o.length;u++){n=this._input.match(this.rules[o[u]]);if(n&&(!t||n[0].length>t[0].length)){t=n;r=u;if(!this.options.flex)break}}if(t){s=t[0].match(/(?:\r\n?|\n).*/g);if(s)this.yylineno+=s.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:s?s[s.length-1].length-s[s.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length};this.yytext+=t[0];this.match+=t[0];this.matches=t;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._input=this._input.slice(t[0].length);this.matched+=t[0];e=this.performAction.call(this,this.yy,this,o[r],this.conditionStack[this.conditionStack.length-1]);if(this.done&&this._input)this.done=false;if(e)return e;else return}if(this._input===""){return this.EOF}else{return this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}},lex:function(){var t=this.next();if(typeof t!=="undefined"){return t}else{return this.lex()}},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(t){this.begin(t)}};e.options={};e.performAction=function(t,n,r,i){function s(e,t){return n.yytext=n.yytext.substr(e,n.yyleng-t)}var o=i;switch(r){case 0:if(n.yytext.slice(-2)==="\\\\"){s(0,1);this.begin("mu")}else if(n.yytext.slice(-1)==="\\"){s(0,1);this.begin("emu")}else{this.begin("mu")}if(n.yytext)return 14;break;case 1:return 14;break;case 2:this.popState();return 14;break;case 3:s(0,4);this.popState();return 15;break;case 4:return 35;break;case 5:return 36;break;case 6:return 25;break;case 7:return 16;break;case 8:return 20;break;case 9:return 19;break;case 10:return 19;break;case 11:return 23;break;case 12:return 22;break;case 13:this.popState();this.begin("com");break;case 14:s(3,5);this.popState();return 15;break;case 15:return 22;break;case 16:return 41;break;case 17:return 40;break;case 18:return 40;break;case 19:return 44;break;case 20:break;case 21:this.popState();return 24;break;case 22:this.popState();return 18;break;case 23:n.yytext=s(1,2).replace(/\\"/g,'"');return 32;break;case 24:n.yytext=s(1,2).replace(/\\'/g,"'");return 32;break;case 25:return 42;break;case 26:return 34;break;case 27:return 34;break;case 28:return 33;break;case 29:return 40;break;case 30:n.yytext=s(1,2);return 40;break;case 31:return"INVALID";break;case 32:return 5;break}};e.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];e.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:false},emu:{rules:[2],inclusive:false},com:{rules:[3],inclusive:false},INITIAL:{rules:[0,1,32],inclusive:true}};return e}();e.lexer=n;r.prototype=e;e.Parser=r;return new r}();e=t;return e}();var a=function(e,t){"use strict";function s(e){if(e.constructor===i.ProgramNode){return e}r.yy=i;return r.parse(e)}var n={};var r=e;var i=t;n.parser=r;n.parse=s;return n}(u,o);var f=function(e){"use strict";function r(){}function i(e,t,r){if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i=r.parse(e);var s=(new r.Compiler).compile(i,t);return(new r.JavaScriptCompiler).compile(s,t)}function s(e,t,r){function s(){var n=r.parse(e);var i=(new r.Compiler).compile(n,t);var s=(new r.JavaScriptCompiler).compile(i,t,undefined,true);return r.template(s)}if(e==null||typeof e!=="string"&&e.constructor!==r.AST.ProgramNode){throw new n("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+e)}t=t||{};if(!("data"in t)){t.data=true}var i;return function(e,t){if(!i){i=s()}return i.call(this,e,t)}}var t={};var n=e;t.Compiler=r;r.prototype={compiler:r,disassemble:function(){var e=this.opcodes,t,n=[],r,i;for(var s=0,o=e.length;s<o;s++){t=e[s];if(t.opcode==="DECLARE"){n.push("DECLARE "+t.name+"="+t.value)}else{r=[];for(var u=0;u<t.args.length;u++){i=t.args[u];if(typeof i==="string"){i='"'+i.replace("\n","\\n")+'"'}r.push(i)}n.push(t.opcode+" "+r.join(" "))}}return n.join("\n")},equals:function(e){var t=this.opcodes.length;if(e.opcodes.length!==t){return false}for(var n=0;n<t;n++){var r=this.opcodes[n],i=e.opcodes[n];if(r.opcode!==i.opcode||r.args.length!==i.args.length){return false}for(var s=0;s<r.args.length;s++){if(r.args[s]!==i.args[s]){return false}}}t=this.children.length;if(e.children.length!==t){return false}for(n=0;n<t;n++){if(!this.children[n].equals(e.children[n])){return false}}return true},guid:0,compile:function(e,t){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=t;var n=this.options.knownHelpers;this.options.knownHelpers={helperMissing:true,blockHelperMissing:true,each:true,"if":true,unless:true,"with":true,log:true};if(n){for(var r in n){this.options.knownHelpers[r]=n[r]}}return this.accept(e)},accept:function(e){var t=e.strip||{},n;if(t.left){this.opcode("strip")}n=this[e.type](e);if(t.right){this.opcode("strip")}return n},program:function(e){var t=e.statements;for(var n=0,r=t.length;n<r;n++){this.accept(t[n])}this.isSimple=r===1;this.depths.list=this.depths.list.sort(function(e,t){return e-t});return this},compileProgram:function(e){var t=(new this.compiler).compile(e,this.options);var n=this.guid++,r;this.usePartial=this.usePartial||t.usePartial;this.children[n]=t;for(var i=0,s=t.depths.list.length;i<s;i++){r=t.depths.list[i];if(r<2){continue}else{this.addDepth(r-1)}}return n},block:function(e){var t=e.mustache,n=e.program,r=e.inverse;if(n){n=this.compileProgram(n)}if(r){r=this.compileProgram(r)}var i=t.sexpr;var s=this.classifySexpr(i);if(s==="helper"){this.helperSexpr(i,n,r)}else if(s==="simple"){this.simpleSexpr(i);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("blockValue")}else{this.ambiguousSexpr(i,n,r);this.opcode("pushProgram",n);this.opcode("pushProgram",r);this.opcode("emptyHash");this.opcode("ambiguousBlockValue")}this.opcode("append")},hash:function(e){var t=e.pairs,n,r;this.opcode("pushHash");for(var i=0,s=t.length;i<s;i++){n=t[i];r=n[1];if(this.options.stringParams){if(r.depth){this.addDepth(r.depth)}this.opcode("getContext",r.depth||0);this.opcode("pushStringParam",r.stringModeValue,r.type);if(r.type==="sexpr"){this.sexpr(r)}}else{this.accept(r)}this.opcode("assignToHash",n[0])}this.opcode("popHash")},partial:function(e){var t=e.partialName;this.usePartial=true;if(e.context){this.ID(e.context)}else{this.opcode("push","depth0")}this.opcode("invokePartial",t.name);this.opcode("append")},content:function(e){this.opcode("appendContent",e.string)},mustache:function(e){this.sexpr(e.sexpr);if(e.escaped&&!this.options.noEscape){this.opcode("appendEscaped")}else{this.opcode("append")}},ambiguousSexpr:function(e,t,n){var r=e.id,i=r.parts[0],s=t!=null||n!=null;this.opcode("getContext",r.depth);this.opcode("pushProgram",t);this.opcode("pushProgram",n);this.opcode("invokeAmbiguous",i,s)},simpleSexpr:function(e){var t=e.id;if(t.type==="DATA"){this.DATA(t)}else if(t.parts.length){this.ID(t)}else{this.addDepth(t.depth);this.opcode("getContext",t.depth);this.opcode("pushContext")}this.opcode("resolvePossibleLambda")},helperSexpr:function(e,t,r){var i=this.setupFullMustacheParams(e,t,r),s=e.id.parts[0];if(this.options.knownHelpers[s]){this.opcode("invokeKnownHelper",i.length,s)}else if(this.options.knownHelpersOnly){throw new n("You specified knownHelpersOnly, but used the unknown helper "+s,e)}else{this.opcode("invokeHelper",i.length,s,e.isRoot)}},sexpr:function(e){var t=this.classifySexpr(e);if(t==="simple"){this.simpleSexpr(e)}else if(t==="helper"){this.helperSexpr(e)}else{this.ambiguousSexpr(e)}},ID:function(e){this.addDepth(e.depth);this.opcode("getContext",e.depth);var t=e.parts[0];if(!t){this.opcode("pushContext")}else{this.opcode("lookupOnContext",e.parts[0])}for(var n=1,r=e.parts.length;n<r;n++){this.opcode("lookup",e.parts[n])}},DATA:function(e){this.options.data=true;if(e.id.isScoped||e.id.depth){throw new n("Scoped data references are not supported: "+e.original,e)}this.opcode("lookupData");var t=e.id.parts;for(var r=0,i=t.length;r<i;r++){this.opcode("lookup",t[r])}},STRING:function(e){this.opcode("pushString",e.string)},INTEGER:function(e){this.opcode("pushLiteral",e.integer)},BOOLEAN:function(e){this.opcode("pushLiteral",e.bool)},comment:function(){},opcode:function(e){this.opcodes.push({opcode:e,args:[].slice.call(arguments,1)})},declare:function(e,t){this.opcodes.push({opcode:"DECLARE",name:e,value:t})},addDepth:function(e){if(e===0){return}if(!this.depths[e]){this.depths[e]=true;this.depths.list.push(e)}},classifySexpr:function(e){var t=e.isHelper;var n=e.eligibleHelper;var r=this.options;if(n&&!t){var i=e.id.parts[0];if(r.knownHelpers[i]){t=true}else if(r.knownHelpersOnly){n=false}}if(t){return"helper"}else if(n){return"ambiguous"}else{return"simple"}},pushParams:function(e){var t=e.length,n;while(t--){n=e[t];if(this.options.stringParams){if(n.depth){this.addDepth(n.depth)}this.opcode("getContext",n.depth||0);this.opcode("pushStringParam",n.stringModeValue,n.type);if(n.type==="sexpr"){this.sexpr(n)}}else{this[n.type](n)}}},setupFullMustacheParams:function(e,t,n){var r=e.params;this.pushParams(r);this.opcode("pushProgram",t);this.opcode("pushProgram",n);if(e.hash){this.hash(e.hash)}else{this.opcode("emptyHash")}return r}};t.precompile=i;t.compile=s;return t}(n);var l=function(e,t){"use strict";function u(e){this.value=e}function a(){}var n;var r=e.COMPILER_REVISION;var i=e.REVISION_CHANGES;var s=e.log;var o=t;a.prototype={nameLookup:function(e,t){var n,r;if(e.indexOf("depth")===0){n=true}if(/^[0-9]+$/.test(t)){r=e+"["+t+"]"}else if(a.isValidJavaScriptVariableName(t)){r=e+"."+t}else{r=e+"['"+t+"']"}if(n){return"("+e+" && "+r+")"}else{return r}},compilerInfo:function(){var e=r,t=i[e];return"this.compilerInfo = ["+e+",'"+t+"'];\n"},appendToBuffer:function(e){if(this.environment.isSimple){return"return "+e+";"}else{return{appendToBuffer:true,content:e,toString:function(){return"buffer += "+e+";"}}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(e,t,n,r){this.environment=e;this.options=t||{};s("debug",this.environment.disassemble()+"\n\n");this.name=this.environment.name;this.isChild=!!n;this.context=n||{programs:[],environments:[],aliases:{}};this.preamble();this.stackSlot=0;this.stackVars=[];this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(e,t);var i=e.opcodes,u;this.i=0;for(var a=i.length;this.i<a;this.i++){u=i[this.i];if(u.opcode==="DECLARE"){this[u.name]=u.value}else{this[u.opcode].apply(this,u.args)}if(u.opcode!==this.stripNext){this.stripNext=false}}this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new o("Compile completed with content left on stack")}return this.createFunctionContext(r)},preamble:function(){var e=[];if(!this.isChild){var t=this.namespace;var n="helpers = this.merge(helpers, "+t+".helpers);";if(this.environment.usePartial){n=n+" partials = this.merge(partials, "+t+".partials);"}if(this.options.data){n=n+" data = data || {};"}e.push(n)}else{e.push("")}if(!this.environment.isSimple){e.push(", buffer = "+this.initializeBuffer())}else{e.push("")}this.lastContext=0;this.source=e},createFunctionContext:function(e){var t=this.stackVars.concat(this.registers.list);if(t.length>0){this.source[1]=this.source[1]+", "+t.join(", ")}if(!this.isChild){for(var n in this.context.aliases){if(this.context.aliases.hasOwnProperty(n)){this.source[1]=this.source[1]+", "+n+"="+this.context.aliases[n]}}}if(this.source[1]){this.source[1]="var "+this.source[1].substring(2)+";"}if(!this.isChild){this.source[1]+="\n"+this.context.programs.join("\n")+"\n"}if(!this.environment.isSimple){this.pushSource("return buffer;")}var r=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var i=0,o=this.environment.depths.list.length;i<o;i++){r.push("depth"+this.environment.depths.list[i])}var u=this.mergeSource();if(!this.isChild){u=this.compilerInfo()+u}if(e){r.push(u);return Function.apply(this,r)}else{var a="function "+(this.name||"")+"("+r.join(",")+") {\n  "+u+"}";s("debug",a+"\n\n");return a}},mergeSource:function(){var e="",t;for(var n=0,r=this.source.length;n<r;n++){var i=this.source[n];if(i.appendToBuffer){if(t){t=t+"\n    + "+i.content}else{t=i.content}}else{if(t){e+="buffer += "+t+";\n  ";t=undefined}e+=i+"\n  "}}return e},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);this.replaceStack(function(t){e.splice(1,0,t);return"blockHelperMissing.call("+e.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var e=["depth0"];this.setupParams(0,e);var t=this.topStack();e.splice(1,0,t);this.pushSource("if (!"+this.lastHelper+") { "+t+" = blockHelperMissing.call("+e.join(", ")+"); }")},appendContent:function(e){if(this.pendingContent){e=this.pendingContent+e}if(this.stripNext){e=e.replace(/^\s+/,"")}this.pendingContent=e},strip:function(){if(this.pendingContent){this.pendingContent=this.pendingContent.replace(/\s+$/,"")}this.stripNext="strip"},append:function(){this.flushInline();var e=this.popStack();this.pushSource("if("+e+" || "+e+" === 0) { "+this.appendToBuffer(e)+" }");if(this.environment.isSimple){this.pushSource("else { "+this.appendToBuffer("''")+" }")}},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(e){if(this.lastContext!==e){this.lastContext=e}},lookupOnContext:function(e){this.push(this.nameLookup("depth"+this.lastContext,e,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"';this.replaceStack(function(e){return"typeof "+e+" === functionType ? "+e+".apply(depth0) : "+e})},lookup:function(e){this.replaceStack(function(t){return t+" == null || "+t+" === false ? "+t+" : "+this.nameLookup(t,e,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(e,t){this.pushStackLiteral("depth"+this.lastContext);this.pushString(t);if(t!=="sexpr"){if(typeof e==="string"){this.pushString(e)}else{this.pushStackLiteral(e)}}},emptyHash:function(){this.pushStackLiteral("{}");if(this.options.stringParams){this.push("{}");this.push("{}")}},pushHash:function(){if(this.hash){this.hashes.push(this.hash)}this.hash={values:[],types:[],contexts:[]}},popHash:function(){var e=this.hash;this.hash=this.hashes.pop();if(this.options.stringParams){this.push("{"+e.contexts.join(",")+"}");this.push("{"+e.types.join(",")+"}")}this.push("{\n    "+e.values.join(",\n    ")+"\n  }")},pushString:function(e){this.pushStackLiteral(this.quotedString(e))},push:function(e){this.inlineStack.push(e);return e},pushLiteral:function(e){this.pushStackLiteral(e)},pushProgram:function(e){if(e!=null){this.pushStackLiteral(this.programExpression(e))}else{this.pushStackLiteral(null)}},invokeHelper:function(e,t,n){this.context.aliases.helperMissing="helpers.helperMissing";this.useRegister("helper");var r=this.lastHelper=this.setupHelper(e,t,true);var i=this.nameLookup("depth"+this.lastContext,t,"context");var s="helper = "+r.name+" || "+i;if(r.paramsInit){s+=","+r.paramsInit}this.push("("+s+",helper "+"? helper.call("+r.callParams+") "+": helperMissing.call("+r.helperMissingParams+"))");if(!n){this.flushInline()}},invokeKnownHelper:function(e,t){var n=this.setupHelper(e,t);this.push(n.name+".call("+n.callParams+")")},invokeAmbiguous:function(e,t){this.context.aliases.functionType='"function"';this.useRegister("helper");this.emptyHash();var n=this.setupHelper(0,e,t);var r=this.lastHelper=this.nameLookup("helpers",e,"helper");var i=this.nameLookup("depth"+this.lastContext,e,"context");var s=this.nextStack();if(n.paramsInit){this.pushSource(n.paramsInit)}this.pushSource("if (helper = "+r+") { "+s+" = helper.call("+n.callParams+"); }");this.pushSource("else { helper = "+i+"; "+s+" = typeof helper === functionType ? helper.call("+n.callParams+") : helper; }")},invokePartial:function(e){var t=[this.nameLookup("partials",e,"partial"),"'"+e+"'",this.popStack(),"helpers","partials"];if(this.options.data){t.push("data")}this.context.aliases.self="this";this.push("self.invokePartial("+t.join(", ")+")")},assignToHash:function(e){var t=this.popStack(),n,r;if(this.options.stringParams){r=this.popStack();n=this.popStack()}var i=this.hash;if(n){i.contexts.push("'"+e+"': "+n)}if(r){i.types.push("'"+e+"': "+r)}i.values.push("'"+e+"': ("+t+")")},compiler:a,compileChildren:function(e,t){var n=e.children,r,i;for(var s=0,o=n.length;s<o;s++){r=n[s];i=new this.compiler;var u=this.matchExistingProgram(r);if(u==null){this.context.programs.push("");u=this.context.programs.length;r.index=u;r.name="program"+u;this.context.programs[u]=i.compile(r,t,this.context);this.context.environments[u]=r}else{r.index=u;r.name="program"+u}}},matchExistingProgram:function(e){for(var t=0,n=this.context.environments.length;t<n;t++){var r=this.context.environments[t];if(r&&r.equals(e)){return t}}},programExpression:function(e){this.context.aliases.self="this";if(e==null){return"self.noop"}var t=this.environment.children[e],n=t.depths.list,r;var i=[t.index,t.name,"data"];for(var s=0,o=n.length;s<o;s++){r=n[s];if(r===1){i.push("depth0")}else{i.push("depth"+(r-1))}}return(n.length===0?"self.program(":"self.programWithDepth(")+i.join(", ")+")"},register:function(e,t){this.useRegister(e);this.pushSource(e+" = "+t+";")},useRegister:function(e){if(!this.registers[e]){this.registers[e]=true;this.registers.list.push(e)}},pushStackLiteral:function(e){return this.push(new u(e))},pushSource:function(e){if(this.pendingContent){this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));this.pendingContent=undefined}if(e){this.source.push(e)}},pushStack:function(e){this.flushInline();var t=this.incrStack();if(e){this.pushSource(t+" = "+e+";")}this.compileStack.push(t);return t},replaceStack:function(e){var t="",n=this.isInline(),r,i,s;if(n){var o=this.popStack(true);if(o instanceof u){r=o.value;s=true}else{i=!this.stackSlot;var a=!i?this.topStackName():this.incrStack();t="("+this.push(a)+" = "+o+"),";r=this.topStack()}}else{r=this.topStack()}var f=e.call(this,r);if(n){if(!s){this.popStack()}if(i){this.stackSlot--}this.push("("+t+f+")")}else{if(!/^stack/.test(r)){r=this.nextStack()}this.pushSource(r+" = ("+t+f+");")}return r},nextStack:function(){return this.pushStack()},incrStack:function(){this.stackSlot++;if(this.stackSlot>this.stackVars.length){this.stackVars.push("stack"+this.stackSlot)}return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var e=this.inlineStack;if(e.length){this.inlineStack=[];for(var t=0,n=e.length;t<n;t++){var r=e[t];if(r instanceof u){this.compileStack.push(r)}else{this.pushStack(r)}}}},isInline:function(){return this.inlineStack.length},popStack:function(e){var t=this.isInline(),n=(t?this.inlineStack:this.compileStack).pop();if(!e&&n instanceof u){return n.value}else{if(!t){if(!this.stackSlot){throw new o("Invalid stack pop")}this.stackSlot--}return n}},topStack:function(e){var t=this.isInline()?this.inlineStack:this.compileStack,n=t[t.length-1];if(!e&&n instanceof u){return n.value}else{return n}},quotedString:function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(e,t,n){var r=[],i=this.setupParams(e,r,n);var s=this.nameLookup("helpers",t,"helper");return{params:r,paramsInit:i,name:s,callParams:["depth0"].concat(r).join(", "),helperMissingParams:n&&["depth0",this.quotedString(t)].concat(r).join(", ")}},setupOptions:function(e,t){var n=[],r=[],i=[],s,o,u;n.push("hash:"+this.popStack());if(this.options.stringParams){n.push("hashTypes:"+this.popStack());n.push("hashContexts:"+this.popStack())}o=this.popStack();u=this.popStack();if(u||o){if(!u){this.context.aliases.self="this";u="self.noop"}if(!o){this.context.aliases.self="this";o="self.noop"}n.push("inverse:"+o);n.push("fn:"+u)}for(var a=0;a<e;a++){s=this.popStack();t.push(s);if(this.options.stringParams){i.push(this.popStack());r.push(this.popStack())}}if(this.options.stringParams){n.push("contexts:["+r.join(",")+"]");n.push("types:["+i.join(",")+"]")}if(this.options.data){n.push("data:data")}return n},setupParams:function(e,t,n){var r="{"+this.setupOptions(e,t).join(",")+"}";if(n){this.useRegister("options");t.push("options");return"options="+r}else{t.push(r);return""}}};var f=("break else new var"+" case finally return void"+" catch for switch while"+" continue function this with"+" default if throw"+" delete in try"+" do instanceof typeof"+" abstract enum int short"+" boolean export interface static"+" byte extends long super"+" char final native synchronized"+" class float package throws"+" const goto private transient"+" debugger implements protected volatile"+" double import public let yield").split(" ");var l=a.RESERVED_WORDS={};for(var c=0,h=f.length;c<h;c++){l[f[c]]=true}a.isValidJavaScriptVariableName=function(e){if(!a.RESERVED_WORDS[e]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)){return true}return false};n=a;return n}(r,n);var c=function(e,t,n,r,i){"use strict";var s;var o=e;var u=t;var a=n.parser;var f=n.parse;var l=r.Compiler;var c=r.compile;var h=r.precompile;var p=i;var d=o.create;var v=function(){var e=d();e.compile=function(t,n){return c(t,n,e)};e.precompile=function(t,n){return h(t,n,e)};e.AST=u;e.Compiler=l;e.JavaScriptCompiler=p;e.Parser=a;e.parse=f;return e};o=v();o.create=v;s=o;return s}(s,o,a,f,l);return c}();
  if ((typeof ShopifyAPI) === 'undefined') { ShopifyAPI = {}; }

  /*============================================================================
    API Helper Functions
  ==============================================================================*/
  function attributeToString(a){return"string"!=typeof a&&(a+="","undefined"===a&&(a="")),jQuery.trim(a)}
  /*============================================================================
    API Functions
  ==============================================================================*/
  ShopifyAPI.onCartUpdate = function(cart) {
    // alert('There are now ' + cart.item_count + ' items in the cart.');
  };

  ShopifyAPI.updateCartNote=function(a,b){var c=$(document.body),d={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(a),dataType:"json",beforeSend:function(){c.trigger("beforeUpdateCartNote.ajaxCart",a)},success:function(d){"function"==typeof b?b(d):ShopifyAPI.onCartUpdate(d),c.trigger("afterUpdateCartNote.ajaxCart",[a,d])},error:function(a,b){c.trigger("errorUpdateCartNote.ajaxCart",[a,b]),ShopifyAPI.onError(a,b)},complete:function(a,b){c.trigger("completeUpdateCartNote.ajaxCart",[this,a,b])}};jQuery.ajax(d)};

  ShopifyAPI.onError=function(XMLHttpRequest,textStatus){var data=eval("("+XMLHttpRequest.responseText+")");data.message&&alert(data.message+"("+data.status+"): "+data.description)};

  /*============================================================================
    POST to cart/add.js returns the JSON of the cart
      - Allow use of form element instead of just id
      - Allow custom error callback
  ==============================================================================*/
  ShopifyAPI.addItemFromForm=function(a,b,c){var d=$(document.body),e={type:"POST",url:"/cart/add.js",data:jQuery(a).serialize(),dataType:"json",beforeSend:function(b,c){d.trigger("beforeAddItem.ajaxCart",a)},success:function(c){"function"==typeof b?b(c,a):ShopifyAPI.onItemAdded(c,a),d.trigger("afterAddItem.ajaxCart",[c,a])},error:function(a,b){"function"==typeof c?c(a,b):ShopifyAPI.onError(a,b),d.trigger("errorAddItem.ajaxCart",[a,b])},complete:function(a,b){d.trigger("completeAddItem.ajaxCart",[this,a,b])}};jQuery.ajax(e)};

  // Get from cart.js returns the cart in JSON
  ShopifyAPI.getCart = function(callback) {
    $(document.body).trigger('beforeGetCart.ajaxCart');
    jQuery.getJSON('/cart.js', function (cart, textStatus) {
      if ((typeof callback) === 'function') {
        callback(cart);
      }
      else {
        ShopifyAPI.onCartUpdate(cart);
      }
      $(document.body).trigger('afterGetCart.ajaxCart', cart);
    });
  };

  ShopifyAPI.changeItem=function(a,b,c){var d=$(document.body),e={type:"POST",url:"/cart/change.js",data:"quantity="+b+"&line="+a,dataType:"json",beforeSend:function(){d.trigger("beforeChangeItem.ajaxCart",[a,b])},success:function(e){"function"==typeof c?c(e):ShopifyAPI.onCartUpdate(e),d.trigger("afterChangeItem.ajaxCart",[a,b,e])},error:function(a,b){d.trigger("errorChangeItem.ajaxCart",[a,b]),ShopifyAPI.onError(a,b)},complete:function(a,b){d.trigger("completeChangeItem.ajaxCart",[this,a,b]),"undefined"!=typeof ajax_request&&ajax_request.abort(),ajax_request=$.getJSON("/cart.js",{format:"json"}).done(function(a){updatecartpage(a)})}};jQuery.ajax(e)};

  /*============================================================================
    Ajax Shopify Add To Cart
  ==============================================================================*/
  var ajaxCart = (function(module, $) {

    'use strict';

    // Public functions
    var init, loadCart;

    // Private general variables
    var settings, isUpdating, $body;

    // Private plugin variables
    var $formContainer, $addToCart, $cartCountSelector, $cartCostSelector, $cartContainer, $drawerContainer;

    // Private functions
    var updateCountPrice, formOverride, itemAddedCallback, itemErrorCallback, cartUpdateCallback, buildCart, cartCallback, adjustCart, adjustCartCallback, createQtySelectors, qtySelectors, validateQty;

    /*============================================================================
      Initialise the plugin and define global options
    ==============================================================================*/
    init = function (options) {

      // Default settings
      settings = {
        formSelector       : 'form[action^="/cart/add"]',
        cartContainer      : '#CartContainer',
        addToCartSelector  : 'input[type="submit"]',
        cartCountSelector  : null,
        cartCostSelector   : null,
        moneyFormat        : theme.moneyFormat,
        disableAjaxCart    : false,
        enableQtySelectors : true
      };
      // Override defaults with arguments
      $.extend(settings, options);

      // Select DOM elements
      $formContainer     = $(settings.formSelector);
      $cartContainer     = $(settings.cartContainer);
      $addToCart         = $formContainer.find(settings.addToCartSelector);
      $cartCountSelector = $(settings.cartCountSelector);
      $cartCostSelector  = $(settings.cartCostSelector);

      // General Selectors
      $body = $(document.body);

      // Track cart activity status
      isUpdating = false;

      // Setup ajax quantity selectors on the any template if enableQtySelectors is true
      if (settings.enableQtySelectors) {
        qtySelectors();
      }

      // Take over the add to cart form submit action if ajax enabled
      if (!settings.disableAjaxCart && $addToCart.length) {
        formOverride();
      }

      // Run this function in case we're using the quantity selector outside of the cart
      adjustCart();
    };

    loadCart = function () {
      $body.addClass('drawer--is-loading');
      ShopifyAPI.getCart(cartUpdateCallback);
    };

    updateCountPrice = function (cart) {
      if ($cartCountSelector) {
        $cartCountSelector.html(cart.item_count).removeClass('hidden-count');

        if (cart.item_count === 0) {
          $cartCountSelector.addClass('hidden-count');
        }
      }
      if ($cartCostSelector) {        
        $cartCostSelector.html(Shopify.formatMoney(cart.total_price, theme.moneyFormat));
        
        Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
        
      }      
    };

    formOverride = function () {
      $formContainer.on('submit', function(evt) {
        evt.preventDefault();
        $formContainer = $(this).parent().find('form');
        // Add class to be styled if desired
        $addToCart.removeClass('is-added').addClass('is-adding');

        // Remove any previous quantity errors
        $('.qty-error').remove();

        ShopifyAPI.addItemFromForm(evt.target, itemAddedCallback, itemErrorCallback);
      });
    };

    itemAddedCallback = function (product) {
      $addToCart.removeClass('is-adding').addClass('is-added');

      ShopifyAPI.getCart(cartUpdateCallback);
    };

    itemErrorCallback = function (XMLHttpRequest, textStatus) {
      var data = eval('(' + XMLHttpRequest.responseText + ')');
      $addToCart.removeClass('is-adding is-added');

      if (!!data.message) {
        if (data.status == 422) {
          $formContainer.after('<div class="errors qty-error">'+ data.description +'</div>')
        }
      }
    };

    cartUpdateCallback = function (cart) {
      // Update quantity and price
      updateCountPrice(cart);
      buildCart(cart);
    };

    buildCart = function (cart) {
      // Start with a fresh cart div
      $cartContainer.empty();
      var source_empty = $("#emtycart").html()
      // Show empty cart
      if (cart.item_count === 0) {
        $cartContainer
        .append(source_empty);
        cartCallback(cart);
        return;
      }

      // Handlebars.js cart layout
      var items = [],
          item = {},
          data = {},
          source = $("#CartTemplate").html(),
          template = Handlebars.compile(source);

      // Add each item to our handlebars.js data
      $.each(cart.items, function(index, cartItem) {

        /* Hack to get product image thumbnail
         *   - If image is not null
         *     - Remove file extension, add _small, and re-add extension
         *     - Create server relative link
         *   - A hard-coded url of no-image
        */
        if (cartItem.image != null){
          var prodImg = cartItem.image.replace(/(\.[^.]*)$/, "_small$1").replace('http:', '');
        } else {
          var prodImg = "//cdn.shopify.com/s/assets/admin/no-image-medium-cc9732cb976dd349a0df1d39816fbcc7.gif";
        }

        // Create item's data object and add to 'items' array
        item = {
          key: cartItem.key,
          line: index + 1, // Shopify uses a 1+ index in the API
          url: cartItem.url,
          img: prodImg,
          name: cartItem.product_title,
          variation: cartItem.variant_title,
          properties: cartItem.properties,
          itemAdd: cartItem.quantity + 1,
          itemMinus: cartItem.quantity - 1,
          itemQty: cartItem.quantity,
          price: Shopify.formatMoney(cartItem.price, theme.moneyFormat),
          vendor: cartItem.vendor,
          linePrice: Shopify.formatMoney(cartItem.line_price, theme.moneyFormat),
          originalLinePrice: Shopify.formatMoney(cartItem.original_line_price, theme.moneyFormat),
          discounts: cartItem.discounts,
          discountsApplied: cartItem.line_price === cartItem.original_line_price ? false : true
        };

        items.push(item);
      });

      // Gather all cart data and add to DOM
      data = {
        items: items,
        note: cart.note,
        totalPrice: Shopify.formatMoney(cart.total_price, theme.moneyFormat),
        totalCartDiscount: cart.total_discount === 0 ? 0 : "translation missing: en.cart.general.savings_html".replace('[savings]', Shopify.formatMoney(cart.total_discount, theme.moneyFormat)),
        totalCartDiscountApplied: cart.total_discount === 0 ? false : true
      }
      $cartContainer.append(template(data));

      //$('#CartContainer .cart').css('max-height', $( window ).height() - $('.ajaxcart__footer_height').height() - 127 );
      cartCallback(cart);
      
      
      Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
      
    };
    cartCallback = function(cart) {
      $body.removeClass('drawer--is-loading');
      $body.trigger('afterCartLoad.ajaxCart', cart);

      if (window.Shopify && Shopify.StorefrontExpressButtons) {
        Shopify.StorefrontExpressButtons.initialize();
      }
    };

adjustCart = function () {
$body.on("click", ".ajaxcart__qty-adjust", function() {
  if (!isUpdating) {
    var a = $(this),
        b = a.data("line"),
        c = $(this).closest(".ajaxcart__row").find(".ajaxcart__qty-num"),
        d = parseInt(c.val().replace(/\D/g, "")),
        d = validateQty(d);
    a.hasClass("ajaxcart__qty--detete") ? d = 0 : a.hasClass("ajaxcart__qty--plus") ? d += 1 : (d -= 1, d <= 0 && (d = 0)), b ? updateQuantity(b, d) : c.val(d)
  }
});
$body.on("change",".ajaxcart__qty-num",function(){if(!isUpdating){var a=$(this),b=a.data("line"),c=parseInt(a.val().replace(/\D/g,"")),c=validateQty(c);b&&updateQuantity(b,c)}});
$body.on("submit","form.ajaxcart",function(a){isUpdating&&a.preventDefault()});
$body.on("focus",".ajaxcart__qty-adjust",function(){var a=$(this);setTimeout(function(){a.select()},50)});
function updateQuantity(a,b){isUpdating=!0;var c=$('.ajaxcart__row[data-line="'+a+'"]').addClass("is-loading");0===b&&c.parent().addClass("is-removed"),setTimeout(function(){ShopifyAPI.changeItem(a,b,adjustCartCallback)},250)}
$body.on("click","td.cart__update-wrapper a.cart__remove",function(){var a=$(this).closest("tr").data("line");return setTimeout(function(){ShopifyAPI.changeItem(a,0,adjustCartCallback)},250),$(this).closest("tr").remove(),$("tr.cart__row").each(function(a){a++,$(this).attr("data-line",a)}),!1});
$body.on("change","input.js-qty__num",function(){var a=$(this).closest("tr").data("line"),b=$(this).val(),b=validateQty(b);a&&updateQuantity(a,b)});
$body.on("click","div.js-qty button.apQtyAdjust ",function(){var a=$(this).closest("tr").data("line"),b=$(this).parent().children("input.js-qty__num").val(),b=validateQty(b);a&&updateQuantity(a,b)});
$body.on("change",'textarea[name="note"]',function(){var a=$(this).val();ShopifyAPI.updateCartNote(a,function(a){})});
  
  Currency.convertAll(theme.shop_currency, $("#currencies a.selected").data("currency"), "span.money", "money_format");
  
};

adjustCartCallback=function(a){updateCountPrice(a),$("tr.cart__row").data("line")||setTimeout(function(){isUpdating=!1,ShopifyAPI.getCart(buildCart)},150)};
createQtySelectors=function(){$('input[type="number"]',$cartContainer).length&&$('input[type="number"]',$cartContainer).each(function(){var a=$(this),b=a.val(),c=b+1,d=b-1,e=b,f=$("#AjaxQty").html(),g=Handlebars.compile(f),h={key:a.data("id"),itemQty:e,itemAdd:c,itemMinus:d};a.after(g(h)).remove()})};
qtySelectors=function(){var a=$('input[type="number"]');a.length&&(a.each(function(){var a=$(this),b=a.val(),c=a.attr("name"),d=a.attr("id"),e=b+1,f=b-1,g=b,h=$("#JsQty").html(),i=Handlebars.compile(h),j={key:a.data("id"),itemQty:g,itemAdd:e,itemMinus:f,inputName:c,inputId:d};a.after(i(j)).remove()}),$(".js-qty__adjust").on("click",function(){var a=$(this),c=(a.data("id"),a.siblings(".js-qty__num")),d=parseInt(c.val().replace(/\D/g,"")),d=validateQty(d);a.hasClass("js-qty__adjust--plus")?d+=1:(d-=1,d<=1&&(d=1)),c.val(d)}))};
validateQty=function(a){return(parseFloat(a)!=parseInt(a)||isNaN(a))&&(a=1),a};

    module = {
      init: init,
      load: loadCart
    };

    return module;

  }(ajaxCart || {}, jQuery));

  jQuery(function($) {
    ajaxCart.init({
      formSelector: '.form-ajaxtocart',
      cartContainer: '#CartContainer',
      addToCartSelector: '.ajax_addtocart',
      cartCountSelector: '#CartCount',
      cartCostSelector: '#CartCost',
      moneyFormat: theme.moneyFormat
    });
  });

  jQuery(document.body).on('afterCartLoad.ajaxCart', function(evt, cart) {
      // Bind to 'afterCartLoad.ajaxCart' to run any javascript after the cart has loaded in the DOM
      timber.RightDrawer.open();
  });



function fetchMiniCart(){
	$.getJSON("/cart.js", {
        format: "json"
    })
    .done(function( data ) {
      $("#minicard").html("");
      if(data.items.length){
        var source = $("#MiniCartTemplate").html(),
            template = Handlebars.compile(source);            
        for($i=0;$i<data.items.length;$i++){
          var extendFile = "_small." + /[^\.]*$/.exec(data.items[$i].image)[0];
          data.items[$i].image = data.items[$i].image.replace(/\.[^/.]+$/,extendFile);
          data.items[$i].line = $i + 1;
          data.items[$i].price = Shopify.formatMoney(data.items[$i].price, theme.moneyFormat)
        }

        $("#minicard").append(template(data));
        //$(".mini-cart-total").html((Shopify.formatMoney($(".mini-cart-total .money").html(), theme.moneyFormat)));
        
          
        Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));   
          
      }
      else{
          $("#minicard").append('<p>' + 'Your cart is currently empty.' + '</p>');  
      }
      $('#CartCount').text(data.item_count);
    });            
}
$(function(){
  $( "div.cart_mini" )
    .hover(function(){
       $(function() {
        fetchMiniCart();
        $('.cart_mini').addClass('open-cart');
      });
    },function(){
      $('.cart_mini').removeClass('open-cart');
    });

    $( "body .apQtyAdjust " ).click(function() {
      console.log( "Handler for .click() called." );
    }); 
    
});


/* ================= User login =================== */  
function userLogin(){
	$(".customer_login_wrapper input[type='submit']").click(function(e){
      e.preventDefault();
      var d = $(this).parent().parent();
      $.ajax({
        type:"POST",
        url:"/account/login",
        data:d.serialize(),
        beforeSend:function(){},
        success:function(n){
          d.html('Login suceess!');
          if (!!$.prototype.fancybox)
            $.fancybox.open([{
              type: 'inline',
              autoScale: true,
              minHeight: 30,
              content: '<p class="fancybox-error">' + 'You are logged' + '</p>'
            }], {
              padding: 50
            });
          else{
            	alert('You are logged');
              }
        },
        error:function(){
          console.log("Login failed");          
        }
      })
    });
}
/* ================= Wishlist ===================== */
function initWishlist(){
  	if (theme.wishlist_enable) {
        $(".wishlist button.btn-wishlist").click(function(e){
            e.preventDefault();
            var d = $(this).parent();
            $.ajax({
                type:"POST",
                url:"/contact",
                data:d.serialize(),
                beforeSend:function(){
                },
                success:function(n){
                  d.html('<a class="btn btn-outline-inverse btn-wishlist added" href="'+ theme.wishlist_url +'"><i class="fa fa-heart"></i><span>Go to Wishlist</span></a>');
                  if (!!$.prototype.fancybox)
                        $.fancybox.open([{
                            type: 'inline',
                            autoScale: true,
                            minHeight: 30,
                            content: '<p class="fancybox-error">' + 'Added to your wishlist.' + '</p>'
                        }], {
                            padding: 0
                        });
                  else{
                    getAllWishlist();
                    alert('Added to your wishlist.');
                  }
                },
                error:function(){
                }
            })
        });
    }
}
function addSwatchToItem() {
    $('.product-block').each(function() {
        $(this).find('.proVariants select').hide();
        $(this).find('.proVariants input[type="radio"]').hide();
    });
    $('.product-block .swatch-element label').bind("click touchstart", function(){
        var variantId = $(this).data("id");
        var dropSelect = $(this).closest('.proVariants').find('select');
        $(dropSelect).val(variantId).trigger('change');
    });
}
/* ================= Compare ===================== */                   
function getCookieVal (offset) {
		var endstr = document.cookie.indexOf (";", offset);
		if (endstr == -1)
			endstr = document.cookie.length;
		return unescape(document.cookie.substring(offset, endstr));
	}
	function FixCookieDate (date) {
		var base = new Date(0);
		var skew = base.getTime();
		if (skew > 0)
			date.setTime (date.getTime() - skew);
	}
	function GetCookie (name) {
		var arg = name + "=";
		var alen = arg.length;
		var clen = document.cookie.length;
		var i = 0;
		while (i < clen) {
			var j = i + alen;
			if (document.cookie.substring(i, j) == arg)
				return getCookieVal (j);
			i = document.cookie.indexOf(" ", i) + 1;
			if (i == 0) break;
		}
		return null;
	}
	function SetCookie (name,value,expires,path,domain,secure) {
		document.cookie = name + "=" + escape (value) +
			((expires) ? "; expires=" + expires.toGMTString() : "") +
			((path) ? "; path=" + path : "") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	}
	function DeleteCookie (name,path,domain) {
		if (GetCookie(name)) {
			document.cookie = name + "=" +
				((path) ? "; path=" + path : "") +
				((domain) ? "; domain=" + domain : "") +
				"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
	}
	function CheckShowHidden() {
		if(jQuery('.ap_cp_item').length > 0){
			jQuery('#ap_compare_paneltool').show();
		} else {
			juery('#ap_compare_paneltool').hidden();
		}
	}
	function CountCookie() {
			var item = jQuery(".ap_cp_item").length - 1 ;
			var apCompare = '<a class="log-only" title="compare" href="'+apCompareUrl+'/pages/ap-compare-product">So S??nh('+ item +')</a>';
			jQuery("#ap_compare_item").html(apCompare);
	}
	function getCountCompare(listCompare) {
		// Hien thi link product  list compare
		var apCountCompare = 0;
		if (listCompare.length > 0) {
			apCountCompare = listCompare.match(/,/g || []);
			if(apCountCompare) {
				apCountCompare = apCountCompare.length;
			} else {
				apCountCompare = 1;
			}
			if (apCountCompare == undefined) apCountCompare = 0;
		}
		jQuery("#cart-count").html('<a href="'+apCompareUrl+'/pages/ap-compare-product">So s??nh('+apCountCompare+')</a>');
	}
	var apCompareUrl = document.location.origin;
	var ap_d = new Date();
	ap_d = ap_d.getTime() + 31536000000;
	ap_expires = new Date(ap_d);
	jQuery(document).ready(function() {
		//hien thi gt cu khi load trang
		var aplistCookie = GetCookie("apCpProduct");
		if(aplistCookie != null) {
		 getCountCompare(aplistCookie);
			var aplistCookie = aplistCookie.split(',');
			for(key in aplistCookie) {
        var apCpId = aplistCookie[key];
				if(apCpId.length) {
					//khong hien thi tren page comparation
					var apComparePath = window.location.pathname;
					if (apComparePath.search("/pages/ap-compare-product") < 0) {
						jQuery("#ap_compare_paneltool").show();
					}
					jQuery.ajax({
						url: apCompareUrl + "/products/" + apCpId + '.json',
						type: "GET",
						dataType: "json",
						success: function(result){
							var apCpHandle = result["product"]["handle"];
							if (result["product"]["image"] == null) {
								var apCpImg = "//hstatic.net/0/0/global/noDefaultImage6_large.gif";
							} else {
								var apCpImg = result["product"]["image"]["src"];
							}
							var apCpTitle = result["product"]["title"];
							var apCpElement = '<div class="ap_cp_item" data-id="'+apCpHandle+'"><div class="ap_cp_remove"><p class="ap-cp-image-trash"></p></div><div class="ap_cp_detail"><div class="ap_cp_img"><img src="'+apCpImg+'"></div> <div class="ap_cp_content">'+apCpTitle+'</div></div></div>';
							jQuery(".ap-cp-list-item").append(apCpElement);
							jQuery("input.ap-cp-add[data-id='" +apCpHandle+ "']").prop("checked", true);
						},
						complete: function() {
												CountCookie();	
											},
						error: function() {
							console.log("There have error data. Please refresh page and try again!");
						}
					});
				}
			}
		}
		jQuery(".ap_cp_btn").click(function() {
			if(jQuery("#ap_compare_paneltool").hasClass("ap-cp-active")) {
				jQuery("#ap_compare_paneltool").removeClass("ap-cp-active");
			} else {
				jQuery("#ap_compare_paneltool").addClass("ap-cp-active");
			}
		});
		jQuery(".ap-cp-add").click(function() {
			var apCpImg = $(this).attr("data-img");
			var apCpTitle = $(this).attr("data-title");
			var apCpId = $(this).attr("data-id");
			if(jQuery(this).is(':checked')) {
				var max = 4;
				if(jQuery(".ap_cp_item").length > max) {
					alert("You can only compare up "+ max + " product") ;
					jQuery(this).prop("checked", false);
				} else {
					//create Element
					var apCpElement = '<div class="ap_cp_item" data-id="'+apCpId+'"><div class="ap_cp_remove"><p class="ap-cp-image-trash"><i class="fa fa-trash-o" aria-hidden="true"></i></p></div><div class="ap_cp_detail"><div class="ap_cp_img"><img src="'+apCpImg+'"></div> <div class="ap_cp_content">'+apCpTitle+'</div></div></div>';
					jQuery(".ap-cp-list-item").append(apCpElement);
					//set cookie
					var aplistCookie = GetCookie("apCpProduct");
					if(aplistCookie == null) {
						var aplistCookie = [];
						aplistCookie.push(apCpId);
						SetCookie("apCpProduct", aplistCookie, ap_expires, "/");
					} else {
						var aplistCookie = aplistCookie.split(',');
						aplistCookie.push(apCpId);
						SetCookie("apCpProduct", aplistCookie, ap_expires, "/");
					}
				}
			} else {
				//delte cookie item product
				var aplistCookie = GetCookie("apCpProduct");
				var aplistCookie = aplistCookie.split(',');
				var index = aplistCookie.indexOf(apCpId);
				if (index > -1) {
					aplistCookie.splice(index, 1);
				}
				SetCookie("apCpProduct", aplistCookie, ap_expires, "/");
				//remove element
				jQuery(".ap-cp-list-item .ap_cp_item[data-id='" +apCpId+"']").remove();
			}
			CountCookie();
			CheckShowHidden();
			//hien thi element link list compare
			var aplistCookieElement = GetCookie("apCpProduct");
			getCountCompare(aplistCookieElement);
			$(".ap_cp_btn").addClass("ap_cp_shake");
			setTimeout(function() {
				$(".ap_cp_btn").removeClass("ap_cp_shake") }, 1000
			);
		});
	});
	//remove item product panel tool
	jQuery(document).on("click", ".ap_cp_remove", function(e) {
		e.stopPropagation();
		e.preventDefault();
		//delte cookie item product
		var apCpId = jQuery(this).parents(".ap_cp_item").first().attr("data-id");
		var aplistCookie = GetCookie("apCpProduct");
		var aplistCookie = aplistCookie.split(',');
		//check va bo gia tri product trong mang cookie
		var index = aplistCookie.indexOf(apCpId);
		if (index > -1) {
			aplistCookie.splice(index, 1);
		}
		SetCookie("apCpProduct", aplistCookie, ap_expires, "/");
		//remove element
		jQuery(this).parents(".ap_cp_item").first().remove();
		CountCookie();;
		CheckShowHidden();
		//hien thi element link list compare
		var aplistCookieElement = GetCookie("apCpProduct");
		getCountCompare(aplistCookieElement);
		//change checked
		jQuery("input.ap-cp-add[data-id='" +apCpId+ "']").prop("checked", false);
	});
	//redirect to page compare
	jQuery(".ap-cp-submit button.ap-cp-to-page").click(function() {
		window.location.href = apCompareUrl + "/pages/ap-compare-product";
	});

function create_filter_price_bar(){
    var min=0;
    var max=0;
    $( "div#center_column .product_block" ).each(function() {      
      if(eval($(this).data('price'))>max) max = eval($(this).data('price'));
      if(min==0) min =  eval($(this).data('price')); else if(eval($(this).data('price'))<min) min =  eval($(this).data('price'));      
    });

    $( "#slider-range" ).slider({
      range: true,
      min: min,
      max: max,
      values: [ min, max ],
      slide: function( event, ui ) {
        var price1 = (Shopify.formatMoney(ui.values[ 0 ], theme.moneyFormat));
        var price2 = (Shopify.formatMoney(ui.values[ 1 ], theme.moneyFormat));
        $("div.filter-price-bar span.min-price").html(price1);
        $("div.filter-price-bar span.max-price").html(price2);
        
        Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
        
        $( "div#product_list  div.product_block" ).each(function() {
          if(eval($(this).data('price'))>= ui.values[0] && eval($(this).data('price'))<=ui.values[1]){
            $(this).fadeIn();
          }else{
            $(this).fadeOut();
          }
        });
      }
    });
    var price1 = (Shopify.formatMoney(min, theme.moneyFormat));
    var price2 = (Shopify.formatMoney(max, theme.moneyFormat));
  	
    $("div.filter-price-bar span.min-price").html(price1);
    $("div.filter-price-bar span.max-price").html(price2);	  
  
    Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
  
  }
$( document ).ready(function() {
  create_filter_price_bar();
});    

//filter with tag          

function showLoading() {$('#loading').show();}
function hideLoading() {$('#loading').hide();}
var currentLink = "";
$(function(){
  	$(".template-collection")&&History.Adapter.bind(window,"statechange",function(){History.getState(),isFilterAjaxClick||(filterParams(),reloadFilter()),isFilterAjaxClick=!1});
    function get_pagecount(){var a=1;return $("div#pagination ul.pagination li a").each(function(){parseInt($(this).html())>a&&(a=parseInt($(this).html()))}),a}
    function assign_tag(arr_all_list_tag){
      var arr_all_tag = new Array();
      var tag_current = process_tag_current();
      if(tag_current.length){
        var lang = $("div.ap-multilang-box > div > a").data("lang");
        if(lang) lang = lang.replace("ap_multilang_","");
        if(lang) lang = lang + '_';
		
        var str_current = '<ul>';
        
        
        var constraint = (Shopify.queryParams.constraint);
        tag_current = constraint.split("+");
        console.log("tag_current" +  tag_current);
        for(i=0;i<tag_current.length;i++){
          var param='';
          for(j=0;j<tag_current.length;j++){
            if(tag_current[i] != tag_current[j]){
              if(param == '') param=tag_current[j]; else param+='+' + tag_current[j];
            }
          }
          if(param){
            var link =$("div.root-filter").data("url") + '?constraint=' + param;
          }else{
            var link =$("div.root-filter").data("url");
          }
            link = link.replace("=+","=").replace(" ","_");
          
          
          
          var arr1 = ["Color", "color_", "true"];
          var tag_current_name = tag_current[i].replace(lang,'').replace(arr1[1],'');
          
          arr1 = ["Product type", "type_"];
          tag_current_name = tag_current_name.replace(lang,'').replace(arr1[1],'');
          
          arr1 = ["Product Size", "size_"];
          tag_current_name = tag_current_name.replace(lang,'').replace(arr1[1],'');
          
          arr1 = ["Vender", "vender_"];
          tag_current_name = tag_current_name.replace(lang,'').replace(arr1[1],'');
          
          arr1 = ["Price", "price_"];          
          tag_current_name = tag_current_name.replace(lang,'').replace(arr1[1],'');          
          str_current +="<li>" + decodeURIComponent(tag_current_name.replace("_",' ').replace("_",' ')) + '<a href="'+link+'">x</a>' + "</li>";
        }
        str_current +='</ul>'
        console.log(str_current);
        $("div.list-current-tag").html(str_current);
      }
      var arr_tag = process_tag(arr_all_list_tag);
            
      	  
          var arr1 = ["Color", "color_", "true"];
          if(arr1.length){
              create_filter("product_" + arr1[1] + "_filter",arr1[1],arr_tag,arr1[2],arr1[0]);
          }
      
        
          
          var arr1 = ["Product type", "type_"];
          if(arr1.length){
              create_filter("product_" + arr1[1] + "_filter",arr1[1],arr_tag,arr1[2],arr1[0]);
          }
      
      
          
          var arr1 = ["Product Size", "size_"];
          if(arr1.length){
              create_filter("product_" + arr1[1] + "_filter",arr1[1],arr_tag,arr1[2],arr1[0]);
          }
      
        
          
          var arr1 = ["Vender", "vender_"];
          if(arr1.length){
              create_filter("product_" + arr1[1] + "_filter",arr1[1],arr_tag,arr1[2],arr1[0]);
          }
      
        
          
          var arr1 = ["Price", "price_"];
          if(arr1.length){
              create_filter("product_" + arr1[1] + "_filter",arr1[1],arr_tag,arr1[2],arr1[0]);
          }
      
      responsiveFilter();
      $(window).resize(responsiveFilter);
      
        //create_filter("product_type_filter","type_",arr_tag,false,'Product type');
        //create_filter("product_color_filter","ap_colour_",arr_tag,true,"Colour");
    }
    
    function process_all_list_tag(a, b, c) {
    return jQuery.getJSON(b + "/products.json?limit=250&page=" + c, function(d) {
        if (d.products.length) {
            for (i = 0; i < d.products.length; i++) a.push(d.products[i].tags);
            process_all_list_tag(a, b, c + 1)
        } else assign_tag(a)
    }), a
}
  function process_tag(a) {
    var b = $("div.ap-multilang-box > div > a").data("lang");
    b && (b = b.replace("ap_multilang_", "")), b && (b += "_");
    var c = new Array,
        e = (new Array, new Array),
        f = process_tag_current();
    if (b)
        for (i = 0; i < a.length; i++)
            for (j = 0; j < a[i].length; j++) 0 == a[i][j].trim().indexOf(b) && e.push(a[i][j].trim());
    if (!b)
        for (i = 0; i < a.length; i++)
            for (j = 0; j < a[i].length; j++) e.push(a[i][j].trim());
    for (i = 0; i < e.length; i++) {
        var g = 0,
            h = {};
        for (j = 0; j < c.length; j++) e[i] == c[j].tag && g++;
        if (!g) {
            h.tag = e[i].trim();
            var l = 0;
            for (k = 0; k < e.length; k++) h.tag == e[k] && l++;
            h.count = l, c.push(h)
        }
    }
    if (f.length) {
        var m = new Array;
        for (i = 0; i < a.length; i++) {
            var o = 0;
            for (j = 0; j < a[i].length; j++)
                for (k = 0; k < f.length; k++) a[i][j] == f[k] && o++;
            if (o == f.length)
                for (j = 0; j < a[i].length; j++) m.push(a[i][j].trim())
        }
        if (m.length > 1)
            for (i = 0; i < c.length; i++) {
                for (l = 0, j = 0; j < m.length; j++) m[j] == c[i].tag && l++;
                c[i].count = l
            }
        for (i = 0; i < e.length; i++) {
            var g = 0,
                h = {};
            for (j = 0; j < c.length; j++) e[i] == c[j].tag && g++;
            if (!g) {
                h.tag = e[i].trim();
                var l = 0;
                for (k = 0; k < e.length; k++) h.tag == e[k] && l++;
                h.count = l, c.push(h)
            }
        }
    }
    return c.sort(function(a, b) {
        return a.tag > b.tag ? 1 : b.tag > a.tag ? -1 : 0
    }), c
}

function filterParams() {
    if (Shopify.queryParams = {}, location.search.length)
        for (var a, b = 0, c = location.search.substr(1).split("&"); b < c.length; b++) a = c[b].split("="), a.length > 1 && (Shopify.queryParams[decodeURIComponent(a[0])] = decodeURIComponent(a[1]))
}

function filterCreateUrl(a) {
    var b = $("div.root-filter").data("url"),
        c = $.param(Shopify.queryParams).replace(/%2B/g, "+");
    return b ? "" != c ? b + "?" + c : b : location.pathname + "?" + c
}

function filterAjaxClick(a, b) {
    var c = a;
    return b > 0 && (c = filterCreateUrl(a)), console.log("Link: " + c), isFilterAjaxClick = !0, History.pushState({
        param: Shopify.queryParams
    }, c, c), c
}

function reloadFilter() {
    if (Shopify.queryParams.view) {
        $(".change-view.change-view--active").removeClass("change-view--active");
        var a = Shopify.queryParams.view;
        a.indexOf("list") >= 0 ? $("[data-view='list']").addClass("change-view--active") : $("[data-view='grid']").addClass("change-view--active")
    }
}

function filterMapView() {
    $(".change-view").click(function(a) {
        a.preventDefault(), $(this).hasClass("change-view--active") || ("list" == $(this).data("view") ? Shopify.queryParams.view = "list" : Shopify.queryParams.view = "grid", $(".change-view").removeClass("change-view--active"), $(this).addClass("change-view--active"))
    })
}

function filterMapPaging() {
    $(".content_sortPagiBar .pagination a").click(function(b) {
        b.preventDefault();
        var c = a(this).attr("href").match(/page=\d+/g);
        if (c && (Shopify.queryParams.page = parseInt(c[0].match(/\d+/g)), Shopify.queryParams.page)) {
         
            var d = currentLink;
            isFilterAjaxClick = !0, History.pushState({
                param: Shopify.queryParams
            }, d, d), console.log("currentLink: " + d),
               (function() {
                Wishlist.init();
              }()),
              countproducttop(d), $("body,html").animate({
                scrollTop: 500
            }, 600)
        }
    })
}
function process_tag_current() {
    var a = new Array,
        b = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, c, d) {
        b[c] = d
    });
    b.constraint && (a = b.constraint.split("+"));
    var d = window.location.pathname.replace($("div.root-filter").data("url"), "").replace("/", "");
    return d && a.push(d), a
}
  function create_filter(id,tag_type, value,img,name) {
      var lang = $("div.ap-multilang-box > div > a").data("lang");
      if(lang) lang = lang.replace("ap_multilang_","");
      if(lang) lang = lang + '_';
      var imgurl="//cdn.shopify.com/s/files/1/0557/5996/2248/t/4/assets/blue.jpg?v=6486455453073351114";
      var arr_current_tag = process_tag_current();
      var current_tag = '';
      var baseurl=$("div.root-filter").data("url");
      for(i=0;i<arr_current_tag.length;i++) {
        if(arr_current_tag[i].indexOf(tag_type)>=0) {
        	current_tag = decodeURIComponent(arr_current_tag[i]);          	
        }
      }
      var link =baseurl;
      if(typeof(Shopify.queryParams.constraint) != 'undefined'){
        var constraint = Shopify.queryParams.constraint;
        var array = constraint.split("+");
        var index = array.indexOf(current_tag);
        if (index > -1) {
            array.splice(index, 1);
        }
        if(array.length){
           link += '?constraint=' + array.join("+");
        }
      }
      console.log(Shopify.queryParams.constraint);
      
      var str='<div class="catalog_filters block sidebarCategories">';
      str += '<h4 class="title_block">'+ name + '</h4>';
      if(current_tag != ''){
        str += '<a href="'+ link +'" class="clear-filter">' + 'Clear ' + '</a>';
      }
      str += '<div class="block_content block_content_filter"><ul class="listSidebar list-unstyled">'
	 // console.log(arr_current_tag);
     // console.log(Shopify.queryParams.constraint);
      for(i=0;i<value.length;i++){
        if(value[i]["tag"].indexOf(tag_type)>=0){
          
          var param='';
          if(typeof(Shopify.queryParams.constraint) != 'undefined'){
            var constraint = Shopify.queryParams.constraint;
            var array = constraint.split("+");
            var index = array.indexOf(current_tag);
            if (index > -1) {
                array.splice(index, 1);
            }
            if(array.length){
               param = array.join("+");
            }

          }
          
          if(arr_current_tag.indexOf(value[i]["tag"]) >= 0){
            if(param){
              var link =baseurl + '?constraint=' + param;
            }else{
              var link =baseurl;
            }
          	
          }else{
            var link =baseurl + '?constraint=' + param + "+" + value[i]["tag"];
          }
          console.log(param);
          link = link.replace("=+","=");
          str += '<li class="advanced-filter">';
          if(value[i]["count"] > 0 ){            
            if(theme.multiple_filter_sidebar_enable){              
              if(arr_current_tag.indexOf(value[i]["tag"]) >= 0){
                str += '<a href="' + link + '" class="catalog_size filter-active">';
              }else{
                str += '<a href="' + link + '" class="catalog_size">';
              }
            }else{
              if(current_tag == value[i]["tag"]){
                str += '<a href="' + link + '" class="catalog_size filter-active">';
              }else{
                str += '<a href="' + link + '" class="catalog_size">';
              }
            }            
            if(img){
              var colorimg = value[i]["tag"].replace(lang,'').replace(tag_type,"").toLowerCase() + '.jpg';
              str += '<img src="'+ imgurl.replace("blue.jpg",colorimg) +'">';
            }
            str += ' ' + value[i]["tag"].replace(lang,'').replace(tag_type,"").replace("_"," ").replace("_"," ").replace("_"," ");
            str += '<span class="apolloQty">' + value[i]["count"] + '</span>';
            str += '</a>';
          }else{
            str += '<a class="catalog_size catalog_size_hidden" href="#">';
            if(img){
              var colorimg = value[i]["tag"].replace(lang,'').replace(tag_type,"").toLowerCase() + '.jpg';
              str += '<img src="'+ imgurl.replace("blue.jpg",colorimg) +'"> ';
            }
            str += ' ' + value[i]["tag"].replace(lang,'').replace(tag_type,"").replace("_"," ").replace("_"," ").replace("_"," ");
            str += '<span class="apolloQty">' + value[i]["count"] + '</span>';
            str += '</a>';
          }
          str += '</li>';
        }
      }
      str += '</ul></div></div>';
      $("img.loadding-filter").remove();
      $("#"+id).html(str);      

    }  	
	filterParams();
    $(document).on("click", ".filter-group a", function(a){
	currentLink = $(this).attr("href");
    var b = process_tag_current();
    b.length ? Shopify.queryParams.constraint = currentLink.replace($("div.root-filter").data("url"), "").replace("?constraint=", "") : delete Shopify.queryParams.constraint;
    var c = filterAjaxClick(currentLink, b.length);
    
    if(typeof(c)=="undefined") c = currentLink;
      
    console.log("c=" + c);
      if($("#product_list").hasClass('list')){
        c+='&view=list';
      }else{
        c+='&view=grid';
      }
    console.log("c=" + c);  
    return $.ajax({
        type: "GET",
        url: c,
        async:false,
        beforeSend: function() {
            showLoading()
        },
        complete: function(b) {
          	var constraint = Shopify.queryParams.constraint;
          	if(constraint.length == 0) $(".list-current-tag ul").remove();

            $("#product_list").html($("#product_list", b.responseText).html()), $(".pagi-block").empty(), $(".pagi-block").html($(".pagi-block", b.responseText).html()), $(a).closest("product_filter_item").html($($(a).closest(".product_filter_item"), b.responseText).html());
            var c = $(".change-view.change-view--active").data("view");
            $("#product_list").removeClass("list").removeClass("grid").addClass(c);
            var d = new Array;
          
            new Array;
            process_all_list_tag(d, $("div.root-filter").data("url"), 1), updateInitAjax(), reloadFilter(), initApollo();
          $("body,html").animate({
                scrollTop: 0
            }, 200), setTimeout(function() {
                hideLoading()
            }, 500)
   /*  var wishlist = localStorage.getItem('user_wishlist') || [];
          if (wishlist.length > 0) {
            wishlist = JSON.parse(localStorage.getItem('user_wishlist'));
          }
          $('.wishlist-btn').each(function () {
              var productHandle = $(this).attr('data-product-handle');
              if (wishlist.indexOf(productHandle) > -1) {
                $(this).addClass('is-active');
                $(this).find('.txt_w').text('Remove Wishlist');
                $(this).attr("title", "Remove Wishlist");
                //countitem();
              }
            });
                $(document).on('click', '.wishlist-btn', function(){
              event.preventDefault;
        	  var productHandle = $(this).attr('data-product-handle');
              var isRemove = $(this).hasClass('is-active');
              var x = wishlist.length; 
             if(isRemove){
                $('<div id="alert-success" class="alert alert-danger" >Remove Wishlist</div>').insertBefore('#page').delay(1500).fadeOut(function() {$(this).remove(); });
              }
              else{
                $('<div id="alert-success" class="alert alert-success" >Add to Wishlist</div>').insertBefore('#page').delay(1500).fadeOut(function() {$(this).remove(); });
              }
              $(this).toggleClass('is-active');
              if (isRemove) {
                var removeIndex = wishlist.indexOf(productHandle);
                  wishlist.splice(removeIndex, 1);
                  localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
                  $(self).find('.txt_w').text('Add to Wishlist');
                  $(self).attr("title", "Add to Wishlist");
                   var x = wishlist.length; 
                  $('#totle-product-wishlist').text(x);
                } */
                /* Add */ 
          /*
                else {
                  wishlist.push(productHandle);
                  localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
                  $(self).find('.txt_w').text('Remove Wishlist');
                  $(self).attr("title", "Remove Wishlist");
                   var x = wishlist.length; 
                  $('#totle-product-wishlist').text(x);

                }
               })  */
           $('.wishlist-btn').bind('click',function(selector) {
                selector.preventDefault();
                updateWishlist(this);
                animateWishlist(this);
               
                  });
                getfirstvalue();
                activateItemsInWishlist();
        },
        error: function(a, b) {
            hideLoading()
        }
    }), filterMapPaging(), create_filter_price_bar(), $("div#pagination ul.pagination li a").each(function() {
        if (window.location.href.indexOf("?constraint=") >= 0) {
            var a = $(this).attr("href").split("?"),
                b = window.location.href,
                c = get_pagecount();
            for (i = 0; i < c; i++) b = b.replace("&page=" + i, "");
            var d = b + "&" + a[1];
            $(this).attr("href", d)
        }
    }), !1
});
  var arr_current_tag=process_tag_current();arr_current_tag.length&&$("h4.clear-all-filter").addClass("clear-all-filter-active");  	

  	var arr_all_list_tag = new Array();
  	var tag_current = new Array();
   	if($("div.root-filter").data("url")) process_all_list_tag(arr_all_list_tag,$("div.root-filter").data("url"),1);    
    $("div.catalog_filters h4.title_block").click(function(){$("div.catalog_filters").removeClass("findter-active"),$(this).parent().addClass("findter-active")});
    $("div#pagination ul.pagination li a").each(function(){if(window.location.href.indexOf("?constraint=")>=0){var a=$(this).attr("href").split("?"),b=window.location.href,c=get_pagecount();for(i=0;i<c;i++)b=b.replace("&page="+i,"");var d=b+"&"+a[1];$(this).attr("href",d)}});
    if($(".top-filter").length > 0){$('.top-filter').hide();}
    $(".config-filter").click(function(){if($(this).hasClass("open")){$('.top-filter').fadeOut("medium");}else{$('.top-filter').fadeIn("medium");}$(this).toggleClass("open");})
});

function updatecartpage(a){$("tr.cart__row").each(function(a){var b=Shopify.formatMoney($(this).find("input.js-qty__num").val()*$(this).data("price"),theme.moneyFormat);$(this).find("div.total-price-row").html(b)});var b=Shopify.formatMoney(a.total_price,theme.moneyFormat);$("span.cart__subtotal").html(b),Currency.convertAll(theme.shop_currency,jQuery("#currencies a.selected").attr("data-currency"))}
function updateFreeShip(cart){
  var free_ship = Number(67) * 100;
  if(cart.total_price < free_ship){
   	$("div.free-ship-percen").css('width',((free_ship - cart.total_price)/free_ship) * 100 + '%');
    $("div.free-ship-lable").html($("div.free-ship-lable").html().replace("%1%",Shopify.formatMoney(free_ship - cart.total_price, theme.moneyFormat)));
  }else{
    $("div.free-ship-lable").html($("div.free-ship-lable").html().replace("%1%",0));
  }
     //console.log(Shopify.formatMoney(free_ship - cart.total_price, theme.moneyFormat));
    
  Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
  
}
       
$(function(){$(page).click(function(){$(document).find(".js-drawer-open").length>0&&$(".minicart_close").trigger("click")}),$(document).on("click",".mini-cart-delete",function(a){a.preventDefault();var b=$(this).data("id");$.ajax({type:"POST",url:"/cart/change.js",data:{quantity:0,id:b},success:function(a){}}),fetchMiniCart()})});
