 var loadIcon = "//cdn.shopify.com/s/files/1/0557/5996/2248/t/4/assets/loading.gif?v=7432101183344956148";
 var isFilterAjaxClick = !1;
$(document).ready(function() {
  	initApollo();
	  initQuickView();
    initWishlist();
  	//initSelectors();
    bindUIActions();
    getfirstvalue();
    activateItemsInWishlist();
    loadWishlist();
  	productImage();
  	//responsiveProductZoom();
  	//$(window).resize(responsiveProductZoom);
  	backtotop();
  	panelTool();
  	floatHeader();
	 floatTopbar();
  	responsiveAccordion();
    responsiveFilter();
    $(window).resize(responsiveFilter);
	 $(window).resize(responsiveAccordion);
  	offCanvas();
  	linkDropdown();
  	//userLogin();
    //fix_responsiveproduct();
    hover_product();
    grid_view();
    filter_bar();
    $('[data-toggle="tooltip"]').tooltip();  
  	lawCookie();
    //var height_header = $('#header').outerHeight(true);
    //$('.slideshow.slideshow--large').css({ 'height': 'calc(100vh - ' + height_header + 'px)' });
});

////cookie poup
function lawCookie(){
  if($.cookie('popup-cookie-law') != 'accept-cookie' ){
    var mainCookie = $("#virtue-cookies");
    setTimeout(function(){
      $(mainCookie).addClass('show-popup');
      $(mainCookie).find('#virtue-cookies-ok').click(function(e){
        acceptCookie();
        e.preventDefault();
        return false;
      });
      $(mainCookie).find('#virtue-cookies-close').click(function(e){
        skipCookie();
        e.preventDefault();
        return false;
      });
    },1000);
  }
  function acceptCookie(){
    $(mainCookie).addClass('hide-popup');
    $.cookie('popup-cookie-law', 'accept-cookie', {expires: 100, path: '/'});
  }
  function skipCookie(){
    $(mainCookie).addClass('hide-popup');
    $.cookie('popup-cookie-law', null, {path: '/'});
  }

}

//fucntion product
function hover_product(){
  $('.product_block_var .cart').hover(function() {
    $('.product_block_var').addClass('hover');
  }, function() {
    $('.product_block_var').removeClass('hover');
  }); 
}
//function grid 
function grid_view(){
  $('.view-grid').each(function(){
    $('.view-grid').on('click', function(){
        var index = $(this).attr("data-num");
        $(this).addClass('active').siblings().removeClass('active');
        $("#product_list").removeClass().addClass('grid_'+ index + ' product-border product_list');
    });
  });
}
//function filter bar
function filter_bar(){
  $('.filter_bar').click(function(){
    $(this).toggleClass('active');
    $('.sidebar, .overlay_sidebar').toggleClass('active');
  })
  $('.overlay_sidebar').click(function(){
    $(this).removeClass('active');
    $('.sidebar, .filter_bar').removeClass('active');
  })
}

/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */
!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=parseInt(e,10),h=parseInt(f,10),i=this.layout.size;g=-1!=e.indexOf("%")?g/100*i.width:g,h=-1!=f.indexOf("%")?h/100*i.height:h,g=isNaN(g)?0:g,h=isNaN(h)?0:h,g-=c?i.paddingLeft:i.paddingRight,h-=d?i.paddingTop:i.paddingBottom,this.position.x=g,this.position.y=h},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,a=this.getXValue(a),b=this.getYValue(b),n?"translate3d("+a+", "+b+", 0)":"translate("+a+", "+b+")"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
//animation
!function(e){e.fn.hover3d=function(t){var r=e.extend({selector:null,perspective:1e3,sensitivity:20,invert:!1,shine:!1,hoverInClass:"hover-in",hoverOutClass:"hover-out",hoverClass:"hover-3d"},t);return this.each(function(){function t(e){i.addClass(r.hoverInClass+" "+r.hoverClass),currentX=currentY=0,setTimeout(function(){i.removeClass(r.hoverInClass)},1e3)}function s(e){var t=i.innerWidth(),s=i.innerHeight(),n=Math.round(e.pageX-i.offset().left),o=Math.round(e.pageY-i.offset().top),v=r.invert?(t/2-n)/r.sensitivity:-(t/2-n)/r.sensitivity,c=r.invert?-(s/2-o)/r.sensitivity:(s/2-o)/r.sensitivity,u=n-t/2,p=o-s/2,f=Math.atan2(p,u),h=180*f/Math.PI-90;0>h&&(h+=360),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateY("+v+"deg) rotateX("+c+"deg)"}),a.css("background","linear-gradient("+h+"deg, rgba(255,255,255,"+e.offsetY/s*.5+") 0%,rgba(255,255,255,0) 80%)")}function n(){i.addClass(r.hoverOutClass+" "+r.hoverClass),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d",transform:"rotateX(0) rotateY(0)"}),setTimeout(function(){i.removeClass(r.hoverOutClass+" "+r.hoverClass),currentX=currentY=0},1e3)}var o=e(this),i=o.find(r.selector);currentX=0,currentY=0,r.shine&&i.append('<div class="shine"></div>');var a=e(this).find(".shine");o.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),i.css({perspective:r.perspective+"px",transformStyle:"preserve-3d"}),a.css({position:"absolute",top:0,left:0,bottom:0,right:0,transform:"translateZ(1px)","z-index":9}),o.on("mouseenter",function(){return t()}),o.on("mousemove",function(e){return s(e)}),o.on("mouseleave",function(){return n()})})}}(jQuery);
//----- countdown.js

!function(){$.fn.lofCountDown=function(a){return this.each(function(){new $.lofCountDown(this,a)})},$.lofCountDown=function(a,b){if(this.options=$.extend({autoStart:!0,LeadingZero:!0,DisplayFormat:"<div>%%D%% Days</div><div>%%H%% Hours</div><div>%%M%% Minutes</div><div>%%S%% Seconds</div>",FinishMessage:"Expired",CountActive:!0,TargetDate:null},b||{}),null!=this.options.TargetDate&&""!=this.options.TargetDate){this.timer=null,this.element=a,this.CountStepper=-1,this.CountStepper=Math.ceil(this.CountStepper),this.SetTimeOutPeriod=1e3*(Math.abs(this.CountStepper)-1)+990;var c=new Date(this.options.TargetDate),d=new Date;ddiff=new Date(this.CountStepper>0?d-c:c-d),gsecs=Math.floor(ddiff.valueOf()/1e3),this.CountBack(gsecs,this)}},$.lofCountDown.fn=$.lofCountDown.prototype,$.lofCountDown.fn.extend=$.lofCountDown.extend=$.extend,$.lofCountDown.fn.extend({calculateDate:function(a,b,c){var d=(Math.floor(a/b)%c).toString();return this.options.LeadingZero&&d.length<2&&(d="0"+d),"<b>"+d+"</b>"},CountBack:function(a,b){return a<0?void(b.element.innerHTML='<div class="lof-labelexpired"> '+b.options.FinishMessage+"</div>"):(clearInterval(b.timer),DisplayStr=b.options.DisplayFormat.replace(/%%D%%/g,b.calculateDate(a,86400,1e5)),DisplayStr=DisplayStr.replace(/%%H%%/g,b.calculateDate(a,3600,24)),DisplayStr=DisplayStr.replace(/%%M%%/g,b.calculateDate(a,60,60)),DisplayStr=DisplayStr.replace(/%%S%%/g,b.calculateDate(a,1,60)),b.element.innerHTML=DisplayStr,void(b.options.CountActive&&(b.timer=null,b.timer=setTimeout(function(){b.CountBack(a+b.CountStepper,b)},b.SetTimeOutPeriod))))}})}(jQuery);

////----- jquery.cookie.js
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(a){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(void 0!==f&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)&&(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
//----- jquery.scrollTo-min.js
;(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||typeof a=='object'?a:{top:a,left:a}};return j}));
//----- jquery.serialScroll.js
!function(a){var b=".serialScroll",c=a.serialScroll=function(b){return a(window).serialScroll(b)};c.defaults={duration:1e3,axis:"x",event:"click",start:0,step:1,lock:!0,cycle:!0,constant:!0},a.fn.serialScroll=function(d){return this.each(function(){function q(a){a.data+=m,r(a,this)}function r(a,b){isNaN(b)&&(b=a.data);var c,d=a.type,f=e.exclude?u().slice(0,-e.exclude):u(),h=f.length-1,i=f[b],k=e.duration;if(d&&a.preventDefault(),n&&(t(),p=setTimeout(s,e.interval)),!i){if(c=b<0?0:h,m!==c)b=c;else{if(!e.cycle)return;b=h-c}i=f[b]}!i||e.lock&&j._scrollable().is(":animated")||d&&e.onBefore&&e.onBefore(a,i,j,u(),b)===!1||(e.stop&&j._scrollable().stop(!0),e.constant&&(k=Math.abs(k/g*(m-b))),j.scrollTo(i,k,e),v("notify",b))}function s(){v("next")}function t(){clearTimeout(p)}function u(){return a(l,k)}function v(a){j.trigger(a+b,[].slice.call(arguments,1))}function w(a){if(!isNaN(a))return a;for(var c,b=u();-1===(c=b.index(a))&&a!==k;)a=a.parentNode;return c}var p,e=a.extend({},c.defaults,d),f=e.event,g=e.step,h=e.lazy,i=e.target?this:document,j=a(e.target||this,i),k=j[0],l=e.items,m=e.start,n=e.interval,o=e.navigation;k&&(h||(l=u()),(e.force||n)&&r({},m),a(e.prev||[],i).bind(f,-g,q),a(e.next||[],i).bind(f,g,q),k.ssbound||j.bind("prev"+b,-g,q).bind("next"+b,g,q).bind("goto"+b,r),n&&j.bind("start"+b,function(){n||(t(),n=!0,s())}).bind("stop"+b,function(){t(),n=!1}),j.bind("notify"+b,function(a,b){var c=w(b);c>-1&&(m=c)}),k.ssbound=!0,e.jump&&(h?j:u()).bind(f,function(a){r(a,w(a.target))}),o&&(o=a(o,i).bind(f,function(a){a.data=Math.round(u().length/o.length)*o.index(this),r(a,this)})))})}}(jQuery);
//----- bootstrap.min.js
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown")}return e.focus(),!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b).on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("shown.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.options.delay&&c.options.delay.show?(c.hoverState="in",void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show))):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.options.delay&&c.options.delay.hide?(c.hoverState="out",void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide))):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){c.detach()}var c=this.tip(),d=a.Event("hide.bs."+this.type);return this.$element.trigger(d),d.isDefaultPrevented()?void 0:(c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?c.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
//
 var $wishlistButton = $('.wishlist-btn');
  var $wishlistTile = $('.wishlist-tile-container');
  var numProductTiles = $wishlistTile.length;
  var wishlist = localStorage.getItem('user_wishlist') || [];
  if (wishlist.length > 0) {
    wishlist = JSON.parse(localStorage.getItem('user_wishlist'));
  }

  /*
   * Update button to show current state (gold for active)
   */   
  var animateWishlist = function (self) {
    var isRemove = $(self).hasClass('is-active');
    if(isRemove){
      $('<div id="alert-success" class="alert alert-danger" >Remove Wishlist</div>').insertBefore('#page').delay(1500).fadeOut(function() {$(this).remove(); });
    }
    else{
      $('<div id="alert-success" class="alert alert-success" >Add to Wishlist</div>').insertBefore('#page').delay(1500).fadeOut(function() {$(this).remove(); });
    }
    $(self).toggleClass('is-active');
  };
  /*
   * Add/Remove selected item to the user's wishlist array in localStorage
   * Wishlist button class 'is-active' determines whether or not to add or remove
   * If 'is-active', remove the item, otherwise add it
   */   
   var getfirstvalue = function (self){
    
     var x = wishlist.length;   
      if($('#totle-product-wishlist').length == 0){
              $('.whishlist-head.popup-over a').append('<span id="totle-product-wishlist">'+x+'</span>');
      }
  
  }
  var updateWishlist = function (self) {
    var productHandle = $(self).attr('data-product-handle');
    var isRemove = $(self).hasClass('is-active');
    /* Remove */
    if (isRemove) {
      var removeIndex = wishlist.indexOf(productHandle);
      if($('.wishlist-container').hasClass('page-wishlist')){
        wishlist.splice(removeIndex, 1);
        localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
        $(self).closest('.product-tile-container').remove();
        if($('.product-tile-container').length == 0 ){
          location.reload();
        }
      }
      else{
        wishlist.splice(removeIndex, 1);
        localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
        $(self).find('.txt_w').text('Add to Wishlist');
        $(self).attr("title", "Add to Wishlist");
      }
    }
    /* Add */ 
    else {
      wishlist.push(productHandle);
      localStorage.setItem('user_wishlist', JSON.stringify(wishlist));
      $(self).find('.txt_w').text('Remove Wishlist');
      $(self).attr("title", "Remove Wishlist");

    }
    console.log(JSON.stringify(wishlist));
    var x = wishlist.length;  
    $('#totle-product-wishlist').text(x);
  };

  /*
   * Loop through wishlist buttons and activate any items that are already in user's wishlist
   * Activate by adding class 'is-active'
   * Run on initialization
   */   
  var activateItemsInWishlist = function () {
    $wishlistButton.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) > -1) {
        $(this).addClass('is-active');
        $(this).find('.txt_w').text('Remove Wishlist');
        $(this).attr("title", "Remove Wishlist");
        //countitem();
      }
    });
  };

  /*
   * Loop through product titles and remove any that aren't a part of the wishlist
   * Decrement numProductTiles on removal
   */   
  var displayOnlyWishlistItems = function () {
    $wishlistTile.each(function () {
      var productHandle = $(this).attr('data-product-handle');
      if (wishlist.indexOf(productHandle) === -1) {
        $(this).remove();
        numProductTiles--;
      }

    });
  };

  /*
   * Check if on the wishlist page and hide any items that aren't a part of the wishlist
   * If no wishlist items exist, show the empty wishlist notice
   */   
  var loadWishlist = function () {
    if (window.location.href.indexOf('pages/wishlist') > -1) {
      displayOnlyWishlistItems();
      $('.wishlist-loader').fadeOut(2000, function () {
        $('.wishlist-grid').addClass('is_visible');
        $('.wishlist-hero').addClass('is_visible');
        if (numProductTiles == 0) {
          $('.wishlist-grid--empty-list').addClass('is_visible');
        } else {
          $('.wishlist-grid--empty-list').hide();
        }
      });
    }
  };

  var bindUIActions = function () {
   
    $($wishlistButton).on('click',function (e) {
      e.preventDefault();
      updateWishlist(this);
      animateWishlist(this);
      getfirstvalue();
      
    });
  };


//---------- jquery.tmpl.min.js
(function(a){var r=a.fn.domManip,d="_tmplitem",q=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,b={},f={},e,p={key:0,data:{}},h=0,c=0,l=[];function g(e,d,g,i){var c={data:i||(d?d.data:{}),_wrap:d?d._wrap:null,tmpl:null,parent:d||null,nodes:[],calls:u,nest:w,wrap:x,html:v,update:t};e&&a.extend(c,e,{nodes:[],parent:d});if(g){c.tmpl=g;c._ctnt=c._ctnt||c.tmpl(a,c);c.key=++h;(l.length?f:b)[h]=c}return c}a.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(f,d){a.fn[f]=function(n){var g=[],i=a(n),k,h,m,l,j=this.length===1&&this[0].parentNode;e=b||{};if(j&&j.nodeType===11&&j.childNodes.length===1&&i.length===1){i[d](this[0]);g=this}else{for(h=0,m=i.length;h<m;h++){c=h;k=(h>0?this.clone(true):this).get();a.fn[d].apply(a(i[h]),k);g=g.concat(k)}c=0;g=this.pushStack(g,f,i.selector)}l=e;e=null;a.tmpl.complete(l);return g}});a.fn.extend({tmpl:function(d,c,b){return a.tmpl(this[0],d,c,b)},tmplItem:function(){return a.tmplItem(this[0])},template:function(b){return a.template(b,this[0])},domManip:function(d,l,j){if(d[0]&&d[0].nodeType){var f=a.makeArray(arguments),g=d.length,i=0,h;while(i<g&&!(h=a.data(d[i++],"tmplItem")));if(g>1)f[0]=[a.makeArray(d)];if(h&&c)f[2]=function(b){a.tmpl.afterManip(this,b,j)};r.apply(this,f)}else r.apply(this,arguments);c=0;!e&&a.tmpl.complete(b);return this}});a.extend({tmpl:function(d,h,e,c){var j,k=!c;if(k){c=p;d=a.template[d]||a.template(null,d);f={}}else if(!d){d=c.tmpl;b[c.key]=c;c.nodes=[];c.wrapped&&n(c,c.wrapped);return a(i(c,null,c.tmpl(a,c)))}if(!d)return[];if(typeof h==="function")h=h.call(c||{});e&&e.wrapped&&n(e,e.wrapped);j=a.isArray(h)?a.map(h,function(a){return a?g(e,c,d,a):null}):[g(e,c,d,h)];return k?a(i(c,null,j)):j},tmplItem:function(b){var c;if(b instanceof a)b=b[0];while(b&&b.nodeType===1&&!(c=a.data(b,"tmplItem"))&&(b=b.parentNode));return c||p},template:function(c,b){if(b){if(typeof b==="string")b=o(b);else if(b instanceof a)b=b[0]||{};if(b.nodeType)b=a.data(b,"tmpl")||a.data(b,"tmpl",o(b.innerHTML));return typeof c==="string"?(a.template[c]=b):b}return c?typeof c!=="string"?a.template(null,c):a.template[c]||a.template(null,q.test(c)?c:a(c)):null},encode:function(a){return(""+a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}});a.extend(a.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){b={}},afterManip:function(f,b,d){var e=b.nodeType===11?a.makeArray(b.childNodes):b.nodeType===1?[b]:[];d.call(f,b);m(e);c++}});function i(e,g,f){var b,c=f?a.map(f,function(a){return typeof a==="string"?e.key?a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+d+'="'+e.key+'" $2'):a:i(a,e,a._ctnt)}):e;if(g)return c;c=c.join("");c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(f,c,e,d){b=a(e).get();m(b);if(c)b=j(c).concat(b);if(d)b=b.concat(j(d))});return b?b:j(c)}function j(c){var b=document.createElement("div");b.innerHTML=c;return a.makeArray(b.childNodes)}function o(b){return new Function("jQuery","$item","var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('"+a.trim(b).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(m,l,j,d,b,c,e){var i=a.tmpl.tag[j],h,f,g;if(!i)throw"Template command not found: "+j;h=i._default||[];if(c&&!/\w$/.test(b)){b+=c;c=""}if(b){b=k(b);e=e?","+k(e)+")":c?")":"";f=c?b.indexOf(".")>-1?b+c:"("+b+").call($item"+e:b;g=c?f:"(typeof("+b+")==='function'?("+b+").call($item):("+b+"))"}else g=f=h.$1||"null";d=k(d);return"');"+i[l?"close":"open"].split("$notnull_1").join(b?"typeof("+b+")!=='undefined' && ("+b+")!=null":"true").split("$1a").join(g).split("$1").join(f).split("$2").join(d?d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(d,c,b,a){a=a?","+a+")":b?")":"";return a?"("+c+").call($item"+a:d}):h.$2||"")+"_.push('"})+"');}return _;")}function n(c,b){c._wrap=i(c,true,a.isArray(b)?b:[q.test(b)?b:a(b).html()]).join("")}function k(a){return a?a.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(b){var a=document.createElement("div");a.appendChild(b.cloneNode(true));return a.innerHTML}function m(o){var n="_"+c,k,j,l={},e,p,i;for(e=0,p=o.length;e<p;e++){if((k=o[e]).nodeType!==1)continue;j=k.getElementsByTagName("*");for(i=j.length-1;i>=0;i--)m(j[i]);m(k)}function m(j){var p,i=j,k,e,m;if(m=j.getAttribute(d)){while(i.parentNode&&(i=i.parentNode).nodeType===1&&!(p=i.getAttribute(d)));if(p!==m){i=i.parentNode?i.nodeType===11?0:i.getAttribute(d)||0:0;if(!(e=b[m])){e=f[m];e=g(e,b[i]||f[i],null,true);e.key=++h;b[h]=e}c&&o(m)}j.removeAttribute(d)}else if(c&&(e=a.data(j,"tmplItem"))){o(e.key);b[e.key]=e;i=a.data(j.parentNode,"tmplItem");i=i?i.key:0}if(e){k=e;while(k&&k.key!=i){k.nodes.push(j);k=k.parent}delete e._ctnt;delete e._wrap;a.data(j,"tmplItem",e)}function o(a){a=a+n;e=l[a]=l[a]||g(e,b[e.parent.key+n]||e.parent,null,true)}}}function u(a,d,c,b){if(!a)return l.pop();l.push({_:a,tmpl:d,item:this,data:c,options:b})}function w(d,c,b){return a.tmpl(a.template(d),c,b,this)}function x(b,d){var c=b.options||{};c.wrapped=d;return a.tmpl(a.template(b.tmpl),b.data,c,b.item)}function v(d,c){var b=this._wrap;return a.map(a(a.isArray(b)?b.join(""):b).filter(d||"*"),function(a){return c?a.innerText||a.textContent:a.outerHTML||s(a)})}function t(){var b=this.nodes;a.tmpl(null,null,null,this).insertBefore(b[0]);a(b).remove()}})(jQuery)
//---------- jquery.products.js
Shopify.Products=function(){var a={howManyToShow:3,howManyToStoreInMemory:10,wrapperId:"recently-products",templateId:"recently-template",viewedId:"products_viewed_block",onComplete:null},b=[],c=null,d=null,e=null,f=0,g={configuration:{expires:90,path:"/",domain:window.location.hostname},name:"shopify_recently_viewed",write:function(a){$.cookie(this.name,a.join(" "),this.configuration)},read:function(){var a=[],b=$.cookie(this.name);return null!==b&&"undefined"!=typeof b&&(a=b.split(" ")),a},destroy:function(){$.cookie(this.name,null,this.configuration)},remove:function(a){var b=this.read(),c=$.inArray(a,b);-1!==c&&(b.splice(c,1),this.write(b))}},h=function(){if(d.show(),a.onComplete)try{a.onComplete()}catch(b){}},i=function(){b.length&&f<a.howManyToShow?$.ajax({dataType:"json",url:"/products/"+b[0]+".js",cache:!1,success:function(a){c.show(),e.tmpl(a).appendTo(d),b.shift(),f++,i()},error:function(){g.remove(b[0]),b.shift(),i()}}):h()};return{resizeImage:function(a,b){if(null==b)return a;if("master"==b)return a.replace(/http(s)?:/,"");var c=a.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);if(null!=c){var d=a.split(c[0]),e=c[0];return(d[0]+"_"+b+e).replace(/http(s)?:/,"")}return null},showRecentlyViewed:function(f){var f=f||{};$.extend(a,f),b=g.read(),e=$("#"+a.templateId),d=$("#"+a.wrapperId),c=$("#"+a.viewedId),a.howManyToShow=Math.min(b.length,a.howManyToShow),a.howManyToShow&&e.length&&d.length&&i()},getConfig:function(){return a},clearList:function(){g.destroy()},recordRecentlyViewed:function(b){var b=b||{};$.extend(a,b);var c=g.read();if(-1!==window.location.pathname.indexOf("/products/")){var d=window.location.pathname.match(/\/products\/([a-z0-9\-]+)/)[1],e=$.inArray(d,c);-1===e?(c.unshift(d),c=c.splice(0,a.howManyToStoreInMemory)):(c.splice(e,1),c.unshift(d)),g.write(c)}}}}();
//---------- jquery.history.js
"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(a){return a<10?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,h,g=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,h=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;c<f;c+=1)h[c]=str(c,i)||"null";return e=0===h.length?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;c<f;c+=1)"string"==typeof rep[c]&&(d=rep[c],e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=0===h.length?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;d<c;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,!b||"function"==typeof b||"object"==typeof b&&"number"==typeof b.length)return str("",{"":a});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.prototype.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(a,b){"use strict";var c=a.History=a.History||{},d=a.jQuery;if("undefined"!=typeof c.Adapter)throw new Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(a,b,c){d(a).bind(b,c)},trigger:function(a,b,c){d(a).trigger(b,c)},extractEventData:function(a,c,d){var e=c&&c.originalEvent&&c.originalEvent[a]||d&&d[a]||b;return e},onDomLoad:function(a){d(a)}},"undefined"!=typeof c.init&&c.init()}(window),function(a){"use strict";var c=a.document,d=a.setTimeout||d,e=a.clearTimeout||e,f=a.setInterval||f,g=a.History=a.History||{};if("undefined"!=typeof g.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");g.initHtml4=function(){return"undefined"!=typeof g.initHtml4.initialized?!1:(g.initHtml4.initialized=!0,g.enabled=!0,g.savedHashes=[],g.isLastHash=function(a){var c,b=g.getHashByIndex();return c=a===b},g.isHashEqual=function(a,b){return a=encodeURIComponent(a).replace(/%25/g,"%"),b=encodeURIComponent(b).replace(/%25/g,"%"),a===b},g.saveHash=function(a){return g.isLastHash(a)?!1:(g.savedHashes.push(a),!0)},g.getHashByIndex=function(a){var b=null;return b="undefined"==typeof a?g.savedHashes[g.savedHashes.length-1]:a<0?g.savedHashes[g.savedHashes.length+a]:g.savedHashes[a]},g.discardedHashes={},g.discardedStates={},g.discardState=function(a,b,c){var e,d=g.getHashByState(a);return e={discardedState:a,backState:c,forwardState:b},g.discardedStates[d]=e,!0},g.discardHash=function(a,b,c){var d={discardedHash:a,backState:c,forwardState:b};return g.discardedHashes[a]=d,!0},g.discardedState=function(a){var c,b=g.getHashByState(a);return c=g.discardedStates[b]||!1},g.discardedHash=function(a){var b=g.discardedHashes[a]||!1;return b},g.recycleState=function(a){var b=g.getHashByState(a);return g.discardedState(a)&&delete g.discardedStates[b],!0},g.emulated.hashChange&&(g.hashChangeInit=function(){g.checkerFunction=null;var d,e,h,i,b="",j=Boolean(g.getHash());return g.isInternetExplorer()?(d="historyjs-iframe",e=c.createElement("iframe"),e.setAttribute("id",d),e.setAttribute("src","#"),e.style.display="none",c.body.appendChild(e),e.contentWindow.document.open(),e.contentWindow.document.close(),h="",i=!1,g.checkerFunction=function(){if(i)return!1;i=!0;var c=g.getHash(),d=g.getHash(e.contentWindow.document);return c!==b?(b=c,d!==c&&(h=d=c,e.contentWindow.document.open(),e.contentWindow.document.close(),e.contentWindow.document.location.hash=g.escapeHash(c)),g.Adapter.trigger(a,"hashchange")):d!==h&&(h=d,j&&""===d?g.back():g.setHash(d,!1)),i=!1,!0}):g.checkerFunction=function(){var c=g.getHash()||"";return c!==b&&(b=c,g.Adapter.trigger(a,"hashchange")),!0},g.intervalList.push(f(g.checkerFunction,g.options.hashChangeInterval)),!0},g.Adapter.onDomLoad(g.hashChangeInit)),g.emulated.pushState&&(g.onHashChange=function(b){var i,c=b&&b.newURL||g.getLocationHref(),d=g.getHashByUrl(c),e=null,f=null;return g.isLastHash(d)?(g.busy(!1),!1):(g.doubleCheckComplete(),g.saveHash(d),d&&g.isTraditionalAnchor(d)?(g.Adapter.trigger(a,"anchorchange"),g.busy(!1),!1):(e=g.extractState(g.getFullUrl(d||g.getLocationHref()),!0),g.isLastSavedState(e)?(g.busy(!1),!1):(f=g.getHashByState(e),i=g.discardedState(e),i?(g.getHashByIndex(-2)===g.getHashByState(i.forwardState)?g.back(!1):g.forward(!1),!1):(g.pushState(e.data,e.title,encodeURI(e.url),!1),!0))))},g.Adapter.bind(a,"hashchange",g.onHashChange),g.pushState=function(b,c,d,e){if(d=encodeURI(d).replace(/%25/g,"%"),g.getHashByUrl(d))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(e!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.pushState,args:arguments,queue:e}),!1;g.busy(!0);var f=g.createStateObject(b,c,d),h=g.getHashByState(f),i=g.getState(!1),j=g.getHashByState(i),k=g.getHash(),l=g.expectedStateId==f.id;return g.storeState(f),g.expectedStateId=f.id,g.recycleState(f),g.setTitle(f),h===j?(g.busy(!1),!1):(g.saveState(f),l||g.Adapter.trigger(a,"statechange"),!g.isHashEqual(h,k)&&!g.isHashEqual(h,g.getShortUrl(g.getLocationHref()))&&g.setHash(h,!1),g.busy(!1),!0)},g.replaceState=function(b,c,d,e){if(d=encodeURI(d).replace(/%25/g,"%"),g.getHashByUrl(d))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(e!==!1&&g.busy())return g.pushQueue({scope:g,callback:g.replaceState,args:arguments,queue:e}),!1;g.busy(!0);var f=g.createStateObject(b,c,d),h=g.getHashByState(f),i=g.getState(!1),j=g.getHashByState(i),k=g.getStateByIndex(-2);return g.discardState(i,f,k),h===j?(g.storeState(f),g.expectedStateId=f.id,g.recycleState(f),g.setTitle(f),g.saveState(f),g.Adapter.trigger(a,"statechange"),g.busy(!1)):g.pushState(f.data,f.title,f.url,!1),!0}),g.emulated.pushState&&g.getHash()&&!g.emulated.hashChange&&g.Adapter.onDomLoad(function(){g.Adapter.trigger(a,"hashchange")}),void 0)},"undefined"!=typeof g.init&&g.init()}(window),function(a,b){"use strict";var c=a.console||b,d=a.document,e=a.navigator,f=!1,g=a.setTimeout,h=a.clearTimeout,i=a.setInterval,j=a.clearInterval,k=a.JSON,l=a.alert,m=a.History=a.History||{},n=a.history;try{f=a.sessionStorage,f.setItem("TEST","1"),f.removeItem("TEST")}catch(o){f=!1}if(k.stringify=k.stringify||k.encode,k.parse=k.parse||k.decode,"undefined"!=typeof m.init)throw new Error("History.js Core has already been loaded...");m.init=function(){return"undefined"==typeof m.Adapter?!1:("undefined"!=typeof m.initCore&&m.initCore(),"undefined"!=typeof m.initHtml4&&m.initHtml4(),!0)},m.initCore=function(){if("undefined"!=typeof m.initCore.initialized)return!1;if(m.initCore.initialized=!0,m.options=m.options||{},m.options.hashChangeInterval=m.options.hashChangeInterval||100,m.options.safariPollInterval=m.options.safariPollInterval||500,m.options.doubleCheckInterval=m.options.doubleCheckInterval||500,m.options.disableSuid=m.options.disableSuid||!1,m.options.storeInterval=m.options.storeInterval||1e3,m.options.busyDelay=m.options.busyDelay||250,m.options.debug=m.options.debug||!1,m.options.initialTitle=m.options.initialTitle||d.title,m.options.html4Mode=m.options.html4Mode||!1,m.options.delayInit=m.options.delayInit||!1,m.intervalList=[],m.clearAllIntervals=function(){var a,b=m.intervalList;if("undefined"!=typeof b&&null!==b){for(a=0;a<b.length;a++)j(b[a]);m.intervalList=null}},m.debug=function(){(m.options.debug||!1)&&m.log.apply(m,arguments)},m.log=function(){var e,f,g,h,i,a="undefined"!=typeof c&&"undefined"!=typeof c.log&&"undefined"!=typeof c.log.apply,b=d.getElementById("log");for(a?(h=Array.prototype.slice.call(arguments),e=h.shift(),"undefined"!=typeof c.debug?c.debug.apply(c,[e,h]):c.log.apply(c,[e,h])):e="\n"+arguments[0]+"\n",f=1,g=arguments.length;f<g;++f){if(i=arguments[f],"object"==typeof i&&"undefined"!=typeof k)try{i=k.stringify(i)}catch(j){}e+="\n"+i+"\n"}return b?(b.value+=e+"\n-----\n",b.scrollTop=b.scrollHeight-b.clientHeight):a||l(e),!0},m.getInternetExplorerMajorVersion=function(){var a=m.getInternetExplorerMajorVersion.cached="undefined"!=typeof m.getInternetExplorerMajorVersion.cached?m.getInternetExplorerMajorVersion.cached:function(){for(var a=3,b=d.createElement("div"),c=b.getElementsByTagName("i");(b.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&c[0];);return a>4?a:!1}();return a},m.isInternetExplorer=function(){var a=m.isInternetExplorer.cached="undefined"!=typeof m.isInternetExplorer.cached?m.isInternetExplorer.cached:Boolean(m.getInternetExplorerMajorVersion());return a},m.emulated=m.options.html4Mode?{pushState:!0,hashChange:!0}:{pushState:!Boolean(a.history&&a.history.pushState&&a.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),hashChange:Boolean(!("onhashchange"in a||"onhashchange"in d)||m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8)},m.enabled=!m.emulated.pushState,m.bugs={setHash:Boolean(!m.emulated.pushState&&"Apple Computer, Inc."===e.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),safariPoll:Boolean(!m.emulated.pushState&&"Apple Computer, Inc."===e.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),ieDoubleCheck:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(m.isInternetExplorer()&&m.getInternetExplorerMajorVersion()<7)},m.isEmptyObject=function(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0},m.cloneObject=function(a){var b,c;return a?(b=k.stringify(a),c=k.parse(b)):c={},c},m.getRootUrl=function(){var a=d.location.protocol+"//"+(d.location.hostname||d.location.host);return d.location.port&&(a+=":"+d.location.port),a+="/"},m.getBaseHref=function(){var a=d.getElementsByTagName("base"),b=null,c="";return 1===a.length&&(b=a[0],c=b.href.replace(/[^\/]+$/,"")),c=c.replace(/\/+$/,""),c&&(c+="/"),c},m.getBaseUrl=function(){var a=m.getBaseHref()||m.getBasePageUrl()||m.getRootUrl();return a},m.getPageUrl=function(){var c,a=m.getState(!1,!1),b=(a||{}).url||m.getLocationHref();return c=b.replace(/\/+$/,"").replace(/[^\/]+$/,function(a){return/\./.test(a)?a:a+"/"})},m.getBasePageUrl=function(){var a=m.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return a},m.getFullUrl=function(a,b){var c=a,d=a.substring(0,1);return b="undefined"==typeof b?!0:b,/[a-z]+\:\/\//.test(a)||(c="/"===d?m.getRootUrl()+a.replace(/^\/+/,""):"#"===d?m.getPageUrl().replace(/#.*/,"")+a:"?"===d?m.getPageUrl().replace(/[\?#].*/,"")+a:b?m.getBaseUrl()+a.replace(/^(\.\/)+/,""):m.getBasePageUrl()+a.replace(/^(\.\/)+/,"")),c.replace(/\#$/,"")},m.getShortUrl=function(a){var b=a,c=m.getBaseUrl(),d=m.getRootUrl();return m.emulated.pushState&&(b=b.replace(c,"")),b=b.replace(d,"/"),m.isTraditionalAnchor(b)&&(b="./"+b),b=b.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},m.getLocationHref=function(a){return a=a||d,a.URL===a.location.href?a.location.href:a.location.href===decodeURIComponent(a.URL)?a.URL:a.location.hash&&decodeURIComponent(a.location.href.replace(/^[^#]+/,""))===a.location.hash?a.location.href:-1==a.URL.indexOf("#")&&-1!=a.location.href.indexOf("#")?a.location.href:a.URL||a.location.href},m.store={},m.idToState=m.idToState||{},m.stateToId=m.stateToId||{},m.urlToId=m.urlToId||{},m.storedStates=m.storedStates||[],m.savedStates=m.savedStates||[],m.normalizeStore=function(){m.store.idToState=m.store.idToState||{},m.store.urlToId=m.store.urlToId||{},m.store.stateToId=m.store.stateToId||{}},m.getState=function(a,b){"undefined"==typeof a&&(a=!0),"undefined"==typeof b&&(b=!0);var c=m.getLastSavedState();return!c&&b&&(c=m.createStateObject()),a&&(c=m.cloneObject(c),c.url=c.cleanUrl||c.url),c},m.getIdByState=function(a){var c,b=m.extractId(a.url);if(!b)if(c=m.getStateString(a),"undefined"!=typeof m.stateToId[c])b=m.stateToId[c];else if("undefined"!=typeof m.store.stateToId[c])b=m.store.stateToId[c];else{for(;b=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof m.idToState[b]||"undefined"!=typeof m.store.idToState[b];);m.stateToId[c]=b,m.idToState[b]=a}return b},m.normalizeState=function(a){var b,c;return a&&"object"==typeof a||(a={}),"undefined"!=typeof a.normalized?a:(a.data&&"object"==typeof a.data||(a.data={}),b={},b.normalized=!0,b.title=a.title||"",b.url=m.getFullUrl(a.url?a.url:m.getLocationHref()),b.hash=m.getShortUrl(b.url),b.data=m.cloneObject(a.data),b.id=m.getIdByState(b),b.cleanUrl=b.url.replace(/\??\&_suid.*/,""),b.url=b.cleanUrl,c=!m.isEmptyObject(b.data),(b.title||c)&&m.options.disableSuid!==!0&&(b.hash=m.getShortUrl(b.url).replace(/\??\&_suid.*/,""),/\?/.test(b.hash)||(b.hash+="?"),b.hash+="&_suid="+b.id),b.hashedUrl=m.getFullUrl(b.hash),(m.emulated.pushState||m.bugs.safariPoll)&&m.hasUrlDuplicate(b)&&(b.url=b.hashedUrl),b)},m.createStateObject=function(a,b,c){var d={data:a,title:b,url:c};return d=m.normalizeState(d)},m.getStateById=function(a){a=String(a);var c=m.idToState[a]||m.store.idToState[a]||b;return c},m.getStateString=function(a){var b,c,d;return b=m.normalizeState(a),c={data:b.data,title:a.title,url:a.url},d=k.stringify(c)},m.getStateId=function(a){var b,c;return b=m.normalizeState(a),c=b.id},m.getHashByState=function(a){var b,c;return b=m.normalizeState(a),c=b.hash},m.extractId=function(a){var b,c,d,e;return e=-1!=a.indexOf("#")?a.split("#")[0]:a,c=/(.*)\&_suid=([0-9]+)$/.exec(e),d=c?c[1]||a:a,b=c?String(c[2]||""):"",b||!1},m.isTraditionalAnchor=function(a){var b=!/[\/\?\.]/.test(a);return b},m.extractState=function(a,b){var d,e,c=null;return b=b||!1,d=m.extractId(a),d&&(c=m.getStateById(d)),c||(e=m.getFullUrl(a),d=m.getIdByUrl(e)||!1,d&&(c=m.getStateById(d)),!c&&b&&!m.isTraditionalAnchor(a)&&(c=m.createStateObject(null,null,e))),c},m.getIdByUrl=function(a){var c=m.urlToId[a]||m.store.urlToId[a]||b;return c},m.getLastSavedState=function(){return m.savedStates[m.savedStates.length-1]||b},m.getLastStoredState=function(){return m.storedStates[m.storedStates.length-1]||b},m.hasUrlDuplicate=function(a){var c,b=!1;return c=m.extractState(a.url),b=c&&c.id!==a.id},m.storeState=function(a){return m.urlToId[a.url]=a.id,m.storedStates.push(m.cloneObject(a)),a},m.isLastSavedState=function(a){var c,d,e,b=!1;return m.savedStates.length&&(c=a.id,d=m.getLastSavedState(),e=d.id,b=c===e),b},m.saveState=function(a){return m.isLastSavedState(a)?!1:(m.savedStates.push(m.cloneObject(a)),!0)},m.getStateByIndex=function(a){var b=null;return b="undefined"==typeof a?m.savedStates[m.savedStates.length-1]:a<0?m.savedStates[m.savedStates.length+a]:m.savedStates[a]},m.getCurrentIndex=function(){var a=null;return a=m.savedStates.length<1?0:m.savedStates.length-1},m.getHash=function(a){var c,b=m.getLocationHref(a);return c=m.getHashByUrl(b)},m.unescapeHash=function(a){var b=m.normalizeHash(a);return b=decodeURIComponent(b)},m.normalizeHash=function(a){var b=a.replace(/[^#]*#/,"").replace(/#.*/,"");return b},m.setHash=function(a,b){var c,e;return b!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.setHash,args:arguments,queue:b}),!1):(m.busy(!0),c=m.extractState(a,!0),c&&!m.emulated.pushState?m.pushState(c.data,c.title,c.url,!1):m.getHash()!==a&&(m.bugs.setHash?(e=m.getPageUrl(),m.pushState(null,null,e+"#"+a,!1)):d.location.hash=a),m)},m.escapeHash=function(b){var c=m.normalizeHash(b);return c=a.encodeURIComponent(c),m.bugs.hashEscape||(c=c.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),c},m.getHashByUrl=function(a){var b=String(a).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return b=m.unescapeHash(b)},m.setTitle=function(a){var c,b=a.title;b||(c=m.getStateByIndex(0),c&&c.url===a.url&&(b=c.title||m.options.initialTitle));try{d.getElementsByTagName("title")[0].innerHTML=b.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return d.title=b,m},m.queues=[],m.busy=function(a){if("undefined"!=typeof a?m.busy.flag=a:"undefined"==typeof m.busy.flag&&(m.busy.flag=!1),!m.busy.flag){h(m.busy.timeout);var b=function(){var a,c,d;if(!m.busy.flag)for(a=m.queues.length-1;a>=0;--a)c=m.queues[a],0!==c.length&&(d=c.shift(),m.fireQueueItem(d),m.busy.timeout=g(b,m.options.busyDelay))};m.busy.timeout=g(b,m.options.busyDelay)}return m.busy.flag},m.busy.flag=!1,m.fireQueueItem=function(a){return a.callback.apply(a.scope||m,a.args||[])},m.pushQueue=function(a){return m.queues[a.queue||0]=m.queues[a.queue||0]||[],m.queues[a.queue||0].push(a),m},m.queue=function(a,b){return"function"==typeof a&&(a={callback:a}),"undefined"!=typeof b&&(a.queue=b),m.busy()?m.pushQueue(a):m.fireQueueItem(a),m},m.clearQueue=function(){return m.busy.flag=!1,m.queues=[],m},m.stateChanged=!1,m.doubleChecker=!1,m.doubleCheckComplete=function(){return m.stateChanged=!0,m.doubleCheckClear(),m},m.doubleCheckClear=function(){return m.doubleChecker&&(h(m.doubleChecker),m.doubleChecker=!1),m},m.doubleCheck=function(a){return m.stateChanged=!1,m.doubleCheckClear(),m.bugs.ieDoubleCheck&&(m.doubleChecker=g(function(){return m.doubleCheckClear(),m.stateChanged||a(),!0},m.options.doubleCheckInterval)),m},m.safariStatePoll=function(){var c,b=m.extractState(m.getLocationHref());return m.isLastSavedState(b)?void 0:(c=b,c||(c=m.createStateObject()),m.Adapter.trigger(a,"popstate"),m)},m.back=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.back,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.back(!1)}),n.go(-1),!0)},m.forward=function(a){return a!==!1&&m.busy()?(m.pushQueue({scope:m,callback:m.forward,args:arguments,queue:a}),!1):(m.busy(!0),m.doubleCheck(function(){m.forward(!1)}),n.go(1),!0)},m.go=function(a,b){var c;if(a>0)for(c=1;c<=a;++c)m.forward(b);else{if(!(a<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(c=-1;c>=a;--c)m.back(b)}return m},m.emulated.pushState){var p=function(){};m.pushState=m.pushState||p,m.replaceState=m.replaceState||p}else m.onPopState=function(b,c){var f,g,d=!1,e=!1;return m.doubleCheckComplete(),f=m.getHash(),f?(g=m.extractState(f||m.getLocationHref(),!0),g?m.replaceState(g.data,g.title,g.url,!1):(m.Adapter.trigger(a,"anchorchange"),m.busy(!1)),m.expectedStateId=!1,!1):(d=m.Adapter.extractEventData("state",b,c)||!1,e=d?m.getStateById(d):m.expectedStateId?m.getStateById(m.expectedStateId):m.extractState(m.getLocationHref()),e||(e=m.createStateObject(null,null,m.getLocationHref())),m.expectedStateId=!1,m.isLastSavedState(e)?(m.busy(!1),!1):(m.storeState(e),m.saveState(e),m.setTitle(e),m.Adapter.trigger(a,"statechange"),m.busy(!1),!0))},m.Adapter.bind(a,"popstate",m.onPopState),m.pushState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.pushState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.pushState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0},m.replaceState=function(b,c,d,e){if(m.getHashByUrl(d)&&m.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(e!==!1&&m.busy())return m.pushQueue({scope:m,callback:m.replaceState,args:arguments,queue:e}),!1;m.busy(!0);var f=m.createStateObject(b,c,d);return m.isLastSavedState(f)?m.busy(!1):(m.storeState(f),m.expectedStateId=f.id,n.replaceState(f.id,f.title,f.url),m.Adapter.trigger(a,"popstate")),!0};if(f){try{m.store=k.parse(f.getItem("History.store"))||{}}catch(q){m.store={}}m.normalizeStore()}else m.store={},m.normalizeStore();m.Adapter.bind(a,"unload",m.clearAllIntervals),m.saveState(m.storeState(m.extractState(m.getLocationHref(),!0))),f&&(m.onUnload=function(){var a,b,c;try{a=k.parse(f.getItem("History.store"))||{}}catch(d){a={}}a.idToState=a.idToState||{},a.urlToId=a.urlToId||{},a.stateToId=a.stateToId||{};for(b in m.idToState)m.idToState.hasOwnProperty(b)&&(a.idToState[b]=m.idToState[b]);for(b in m.urlToId)m.urlToId.hasOwnProperty(b)&&(a.urlToId[b]=m.urlToId[b]);for(b in m.stateToId)m.stateToId.hasOwnProperty(b)&&(a.stateToId[b]=m.stateToId[b]);m.store=a,m.normalizeStore(),c=k.stringify(a);try{f.setItem("History.store",c)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;f.length&&(f.removeItem("History.store"),f.setItem("History.store",c))}},m.intervalList.push(i(m.onUnload,m.options.storeInterval)),m.Adapter.bind(a,"beforeunload",m.onUnload),m.Adapter.bind(a,"unload",m.onUnload)),m.emulated.pushState||(m.bugs.safariPoll&&m.intervalList.push(i(m.safariStatePoll,m.options.safariPollInterval)),("Apple Computer, Inc."===e.vendor||"Mozilla"===(e.appCodeName||""))&&(m.Adapter.bind(a,"hashchange",function(){m.Adapter.trigger(a,"popstate")}),m.getHash()&&m.Adapter.onDomLoad(function(){m.Adapter.trigger(a,"hashchange")})))},(!m.options||!m.options.delayInit)&&m.init()}(window);

(function(d, s, id) {
  	var js, fjs = d.getElementsByTagName(s)[0];
  	if (d.getElementById(id)) return;
  	js = d.createElement(s); js.id = id;
  	js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/*
*
* 2016 Apollo Theme
*
*/
var loadIcon = "//cdn.shopify.com/s/files/1/0557/5996/2248/t/4/assets/loading.gif?v=7432101183344956148";
var productQuickview = {};
function initApollo() {$(".swatch :radio").change(function() {var t = $(this).closest(".swatch").attr("data-option-index");var n = $(this).val();$(this).closest("form").find(".single-option-selector").eq(t).val(n).trigger("change")});$(".hover-bimg").mouseenter(function() {$(this).closest('.product-image-container').find('.product_img_link').first().find('img').first().attr('src', $(this).data('bimg'));});$(".nav-verticalmenu .caret").click(function(e) {$(this).closest("li").toggleClass("menu-open");e.stopPropagation();});}
function updatePricing() {var regex = /([0-9]+[.|,][0-9]+[.|,][0-9]+)/g;var unitPriceTextMatch = $('#ProductPrice span').text().match(regex);if (!unitPriceTextMatch) {regex = /([0-9]+[.|,][0-9]+)/g;unitPriceTextMatch = $('#ProductPrice span').text().match(regex);}if (unitPriceTextMatch) {var unitPriceText = unitPriceTextMatch[0]; var unitPrice = unitPriceText.replace(/[.|,]/g,'');var quantity = parseInt($('#Quantity').val());var totalPrice = unitPrice * quantity;var totalPriceText = Shopify.formatMoney(totalPrice, theme.money_currency_format);var textPrice = totalPriceText.match(regex);totalPriceText = (textPrice && textPrice.length > 0) ? textPrice[0] : "0";var regInput = new RegExp(unitPriceText, "g");  var totalPriceHtml = $('#ProductPrice span').html().replace(regInput ,totalPriceText); $('.product .total-price span').html(totalPriceHtml);}}
function updatePricingQuickView(){var a=/([0-9]+[.|,][0-9]+[.|,][0-9]+)/g,b=jQuery(".quick-view-product .price").text().match(a);if(b||(a=/([0-9]+[.|,][0-9]+)/g,b=jQuery(".quick-view-product .price").text().match(a)),b){var c=b[0],d=c.replace(/[.|,]/g,""),e=parseInt(jQuery(".quick-view-product input[name=quantity]").val()),f=d*e,g=Shopify.formatMoney(f,theme.money_currency_format),h=g.match(a);g=h&&h.length>0?h[0]:"0";var i=new RegExp(c,"g"),k=(jQuery(".quick-view-product .price").html().replace(i,g),jQuery('.quick-view-product [name="id"]').val());if(k>0)var l=getPriceByVariant(k),f=l*e;var m=Shopify.formatMoney(f,theme.money_currency_format);jQuery(".quick-view-product .total-price span").html(m)}Currency.convertAll(theme.shop_currency,$("#currencies a.selected").data("currency"),"span.money","money_format")}
function getPriceByVariant(a){for(var b=productQuickview.variants.length,c=0,d=0;d<b;d++){var e=productQuickview.variants[d];if(e.id==a)return e.price}return c}
function updateOptionsInSelector(t, sel) {
    var from = (sel != "quickview") ? "" : ".quick-view-product ";
    switch (t) {
        case 0:
            var n = "root";
            var r = $(from + ".single-option-selector:eq(0)");
            break;
        case 1:
            var n = $(from + ".single-option-selector:eq(0)").val();
            var r = $(from + ".single-option-selector:eq(1)");
            break;
        case 2:
            var n = $(from + ".single-option-selector:eq(0)").val();
            n += " / " + $(from + ".single-option-selector:eq(1)").val();
            var r = $(from + ".single-option-selector:eq(2)")
    }
    var i = r.val();
    r.empty();
    var s = (sel != "quickview") ? Shopify.optionsMap[n] : Shopify.optionsMapQuickview[n];
    if (typeof s != "undefined") {
        for (var o = 0; o < s.length; o++) {
            var u = s[o];
            var a = $("<option></option>").val(u).html(u);
            r.append(a)
        }
    }
    $(from + '.swatch[data-option-index="' + t + '"] .swatch-element').each(function() {
        if ($.inArray($(this).attr("data-value"), s) !== -1) {
            $(this).removeClass("soldout").show().find(":radio").removeAttr("disabled", "disabled");
        } else {}
    });
    if ($.inArray(i, s) !== -1) {
        r.val(i)
    }
    r.trigger("change")
}
function linkOptionSelectorsQuickview(t) {
    for (var n = 0; n < t.variants.length; n++) {
        var r = t.variants[n];
        if (r.available) {
            Shopify.optionsMapQuickview["root"] = Shopify.optionsMapQuickview["root"] || [];
            Shopify.optionsMapQuickview["root"].push(r.option1);
            Shopify.optionsMapQuickview["root"] = Shopify.uniq(Shopify.optionsMapQuickview["root"]);
            if (t.options.length > 1) {
                var i = r.option1;
                Shopify.optionsMapQuickview[i] = Shopify.optionsMapQuickview[i] || [];
                Shopify.optionsMapQuickview[i].push(r.option2);
                Shopify.optionsMapQuickview[i] = Shopify.uniq(Shopify.optionsMapQuickview[i])
            }
            if (t.options.length === 3) {
                var i = r.option1 + " / " + r.option2;
                Shopify.optionsMapQuickview[i] = Shopify.optionsMapQuickview[i] || [];
                Shopify.optionsMapQuickview[i].push(r.option3);
                Shopify.optionsMapQuickview[i] = Shopify.uniq(Shopify.optionsMapQuickview[i])
            }
        }
    }
    updateOptionsInSelector(0, "quickview");
    if (t.options.length > 1) updateOptionsInSelector(1, "quickview");
    if (t.options.length === 3) updateOptionsInSelector(2, "quickview");
    $(".single-option-selector:eq(0)").change(function() {
        updateOptionsInSelector(1, "quickview");
        if (t.options.length === 3) updateOptionsInSelector(2, "quickview");
        return true
    });
    $(".single-option-selector:eq(1)").change(function() {
        if (t.options.length === 3) updateOptionsInSelector(2, "quickview");
        return true
    });
}
var product = {};var currentLinkQuickView = '';var option1 = '';var option2 = '';function validateQty(qty) {if((parseFloat(qty) == parseInt(qty)) && !isNaN(qty)) {} else {qty = 1;}return qty;}
function initQuickView(){
	if (theme.quickview_enable){
      	$(document).on("click", "#thumblist_quickview li", function() {
            changeImageQuickView($(this).find("img:first-child"), "#product-featured-image-quickview");
        });
		$(document).on('click', '.quick-view', function(e){
          	e.preventDefault();
			var producthandle = $(this).data("handle");
          	currentLinkQuickView = $(this);
			Shopify.getProduct(producthandle,function(product) {
                
              	productQuickview = product;
				var qvhtml = $("#quickview-modal").html();
				$(".quick-view-product").html(qvhtml);
				var quickview= $(".quick-view-product");
				var str = product.description;
              	str = str.substr(str.indexOf("[shortdesc]"),str.indexOf("[/shortdesc]"));
              	str = str.replace("[shortdesc]","").replace(/(<([^>]+)>)/ig,"");
                str = str.replace("[/shortdesc]","");
              	
              	if(str.length > 0){
              		var productdes = str;
                  str = str.replace("[tab]","");
                  str = str.replace("[/tab]","");
                  var productdes = str.replace(/(<([^>]+)>)/ig,""); 
                }else{
                  var str = product.description;
                  str = str.replace("[tab]","");
                  str = str.replace("[/tab]","");
                  var productdes = str.replace(/(<([^>]+)>)/ig,""); 
                }         
              	var featured_image = product.featured_image;
				productdes = productdes.split(" ").splice(0,20).join(" ")+"...";
				quickview.find(".view_full_size img").attr("src",featured_image);
				quickview.find(".view_full_size img").attr("alt",product.title);
              	quickview.find(".view_full_size a").attr("title",product.title);
              	quickview.find(".view_full_size a").attr("href",product.url);               
				quickview.find(".price").html(Shopify.formatMoney(product.price, theme.money_currency_format));
                quickview.find(".product-item").attr("id", "product-" + product.id);
                quickview.find(".variants").attr("id", "product-actions-" + product.id);              	
				quickview.find(".variants select").attr("id", "product-select-" + product.id);
				quickview.find(".product-info .qwp-name").text(product.title);
              	quickview.find(".product-info .brand").append("<span>Vendor: </span>" + product.vendor);
                if(product.available){
                  	quickview.find(".product-info .availability").append("<p class=\"available instock\">Available</p>");
                }else{
                  	quickview.find(".product-info .availability").append("<p class=\"available outstock\">Unavailable</p>");
                }
				quickview.find(".product-info .product-sku").append("<p>SKU: <span>"+product.variants[0].sku+"</span></p>");
				quickview.find(".product-description").text(productdes);
                if (product.compare_at_price > product.price) {
                    quickview.find(".compare-price").html(Shopify.formatMoney(product.compare_at_price_max, theme.money_currency_format)).show();
                    quickview.find(".price").addClass("on-sale")
                }
                else {
                    quickview.find(".compare-price").html("");
                    quickview.find(".price").removeClass("on-sale")
                }
                if (!product.available) {
                    quickview.find("select, input, .dec, .inc, .variants label").remove();
                    quickview.find(".add_to_cart_detail").text("Sold Out").addClass("disabled").attr("disabled", "disabled");
                  	$(".quantity_wanted_p").css("display", "none");
                }
                else {
                  	quickViewVariantsSwatch(product, quickview);
                }
                $("#quick-view-product").fadeIn(500).addClass('active');
                
                $(".view_scroll_spacer").removeClass("hidden");
                loadQuickViewSlider(product, quickview);
                  
                $(".quick-view").fadeIn(500);
                if ($(".quick-view .total-price").length > 0) {
                  	$(".quick-view input[name=quantity]").on("change", updatePricingQuickView)
                }
              	updatePricingQuickView();
                $(".js-qty__adjust").on("click", function() {
                  	var el = $(this),
                      	id = el.data("id"),
                      	qtySelector = el.siblings(".js-qty__num"),
                      	qty = parseInt(qtySelector.val().replace(/\D/g, ''));
                  	var qty = validateQty(qty);
                  	if (el.hasClass("js-qty__adjust--plus")) {
                    	qty = qty + 1;
                  	} else {
                    	qty = qty - 1;
                    	if (qty <= 1) qty = 1;
                  	}
                  	qtySelector.val(qty);
                  	updatePricingQuickView();
                });
                $(".apQtyNum").on("change", function() {
                  	updatePricingQuickView();
                });
			});
			return false;
		});
	}
}
function loadQuickViewSlider(n, r) {
    productImage();
    var loadingImgQuickView = $('.loading-imgquickview');
    var s = Shopify.resizeImage(n.featured_image, "grande");
    r.find(".quickview-featured-image").append('<a href="' + n.url + '"><img src="' + s + '" title="' + n.title + '"/><div style="height: 100%; width: 100%; top:0; left:0 z-index: 2000; position: absolute; display: none; background: url(' + window.loading_url + ') 50% 50% no-repeat;"></div></a>');
    if (n.images.length > 0) {
        var o = r.find(".more-view-wrapper ul");
        for (i in n.images) {
            var u = Shopify.resizeImage(n.images[i], "grande");
            var a = Shopify.resizeImage(n.images[i], "500x");
            var f = '<li><a href="' + n.url + '" class="img-quick" data-imageid="' + n.id + '" data-image="' + n.images[i] + '" data-zoom-image="' + u + '" ><img src="' + a + '" alt="Proimage" /></a></li>';
            o.append(f)
        }
        o.find("a").click(function() {
            var t = r.find("#product-featured-image-quickview");
            if (t.attr("src") != $(this).attr("data-image")) {
                t.attr("src", $(this).attr("data-image"));
                loadingImgQuickView.show();
                t.load(function(t) {
                    loadingImgQuickView.hide();
                    $(this).unbind("load");
                    loadingImgQuickView.hide()
                })
            }
        });
        o.slick({
            dots: true,
          	arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        }).css("visibility", "visible")
    } else {        
        r.find(".quickview-more-views").remove();
        r.find(".quickview-more-view-wrapper-jcarousel").remove()
    }
}
var convertToSlug = function (e) {return e.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")}
var selectCallbackQuickView = function(variant, selector) {};
function quickViewVariantsSwatch(t, quickview) {
    if (t.variants.length > 1) {
        for (var r = 0; r < t.variants.length; r++) {
            var i = t.variants[r];
            var s = '<option value="' + i.id + '">' + i.title + "</option>";
            quickview.find("form.variants > select").append(s)
        }
      	var ps = "product-select-" + t.id;
        new Shopify.OptionSelectors( ps, { 
          	product: t, 
          	onVariantSelected: selectCallbackQuickView
        });
      	/*if (t.options.length == 1) {
          	$(".selector-wrapper:eq(0)").prepend("<label>" + t.options[0].name + "</label>")
        }*/
      	quickview.find("form.variants .selector-wrapper label").each(function(n, r) {
          if(typeof t.options[n] != 'undefined' ){
          	$(this).html(t.options[n].name);
          }
        })
        
            var o = theme.file_url.substring(0, theme.file_url.lastIndexOf("?"));
            var u = theme.asset_url.substring(0, theme.asset_url.lastIndexOf("?"));
            var a = "";
            for (var r = 0; r < t.options.length; r++) {
                a += '<div class="swatch clearfix item_circle " data-option-index="' + r + '">';
                a += '<div class="header">' + t.options[r].name + "</div>";
                var f = false;
                if (/Color|Colour/i.test(t.options[r].name)) { f = true }
                var l = new Array;
                for (var c = 0; c < t.variants.length; c++) {
                    var i = t.variants[c]; var h = i.options[r];
                    var p = this.convertToSlug(h);
                    var d = "quickview-swatch-" + r + "-" + p;
                    if (l.indexOf(h) < 0) {
                        a += '<div data-value="' + h + '" class="swatch-element  ' + (f ? "color " : "") + p + (i.available ? " available " : " soldout ") + '">';
                        if (f) {
                            a += '<div class="tooltip">' + h + "</div>"
                        }
                        a += '<input id="' + d + '" type="radio" name="option-' + r + '" value="' + h + '" ' + (c == 0 ? " checked " : "") + (i.available ? "" : " disabled") + " />";
                        if (f) {
                          	
							a += '<label class= " swatch_circle '+ p +'" for="' + d + '" style="background-color: ' + p + "; background-image: url(" + o + p + '.png )"><img class="crossed-out" src="' + u + 'soldout.png" /><i></i></label>'
                            
                        }
                        else {
                            a += '<label class="'+ p +'" for="' + d + '">' + h + '<img class="crossed-out" src="' + u + 'soldout.png" /></label>'
                        }
                        a += "</div>";
                        if (i.available) {
                            $('.quick-view .swatch[data-option-index="' + r + '"] .' + p).removeClass("soldout").addClass("available").find(":radio").removeAttr("disabled")
                        } l.push(h)
                    }
                } a += "</div>"
            }
            quickview.find("form.variants > select").after(a);
            quickview.find(".swatch :radio").change(function () {
                var t = $(this).closest(".swatch").attr("data-option-index");
                var q = $(this).val();
                $(this).closest("form").find(".single-option-selector").eq(t).val(q).trigger("change");

            });
      		if (t.available) {
              	Shopify.optionsMapQuickview = {};
              	linkOptionSelectorsQuickview(t);
            }
            addCheckedSwatch();
      	
    }
    else {
        quickview.find("form.variants > select").remove();
        var v = '<input type="hidden" name="id" value="' + t.variants[0].id + '">';
        quickview.find("form.variants").append(v)
    }
}
function addCheckedSwatch(){$('.swatch .color label').on('click', function () {$('.swatch .color').each(function(){$(this).find('label').removeClass('checkedBox');});$(this).addClass('checkedBox');});}
$(document).on('click', '.quickview-close, #quick-view-product .quickview-overlay', function(e){$("#quick-view-product").fadeOut(500);});
function productImage() {
	$('#thumbs_list').slick({dots: true,infinite: false,speed: 300,slidesToShow: 2,slidesToScroll: 2,responsive: [{breakpoint: 1024,settings: {slidesToShow: 2,slidesToScroll: 2,infinite: true,dots: true}},{breakpoint: 600,settings: {slidesToShow: 2,slidesToScroll: 2}},{breakpoint: 480,settings: {slidesToShow: 1,slidesToScroll: 1}}]});
    $('.thumbs_list_frame').height(parseInt($('.thumbs_list_frame >li').outerHeight(true) * $('.thumbs_list_frame >li').height) + 'px');
    $('.thumbs_list').serialScroll({items:'li:visible',prev:'.view_scroll_left',next:'.view_scroll_right',axis:'y',start:0,stop:true,duration:700,step: 2,lazy: true,lock: false,force:false,cycle:false});
	if (!!$.prototype.fancybox){$('li:visible .fancybox, .fancybox.shown').fancybox({'hideOnContentClick': true,'openEffect'	: 'elastic','closeEffect'	: 'elastic'});}
}
/*
 Sticky-kit v1.1.3 | MIT | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var c,f;c=window.jQuery;f=c(window);c.fn.stick_in_parent=function(b){var A,w,J,n,B,K,p,q,L,k,E,t;null==b&&(b={});t=b.sticky_class;B=b.inner_scrolling;E=b.recalc_every;k=b.parent;q=b.offset_top;p=b.spacer;w=b.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=c(document);null==w&&(w=!0);L=function(a){var b;return window.getComputedStyle?(a=window.getComputedStyle(a[0]),b=parseFloat(a.getPropertyValue("width"))+parseFloat(a.getPropertyValue("margin-left"))+
parseFloat(a.getPropertyValue("margin-right")),"border-box"!==a.getPropertyValue("box-sizing")&&(b+=parseFloat(a.getPropertyValue("border-left-width"))+parseFloat(a.getPropertyValue("border-right-width"))+parseFloat(a.getPropertyValue("padding-left"))+parseFloat(a.getPropertyValue("padding-right"))),b):a.outerWidth(!0)};J=function(a,b,n,C,F,u,r,G){var v,H,m,D,I,d,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));if(!g.length)throw"failed to find stick parent";
v=m=!1;(h=null!=p?p&&a.closest(p):c("<div />"))&&h.css("position",a.css("position"));x=function(){var d,f,e;if(!G&&(I=A.height(),d=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),b=parseInt(g.css("padding-bottom"),10),n=g.offset().top+d+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:L(a),
height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,d=q,z=E,l=function(){var c,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+d>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:d}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,d=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.detach()),c={position:"",width:"",top:""},a.css(c).removeClass(t).trigger("sticky_kit:unstick")),
B&&(c=f.height(),u+q>c&&!v&&(d-=l,d=Math.max(c-u,d),d=Math.min(q,d),m&&a.css({top:d+"px"})))):e>F&&(m=!0,c={position:"fixed",top:d},c.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(c).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+d>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),a.css({position:"absolute",bottom:b,top:"auto"}).trigger("sticky_kit:bottom")},
y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);c(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",y),c(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,
0)}};n=0;for(K=this.length;n<K;n++)b=this[n],J(c(b));return this}}).call(this);
//jquery.fancybox-media
!function(a){"use strict";var b=a.fancybox,c=function(b,c,d){return d=d||"","object"===a.type(d)&&(d=a.param(d,!0)),a.each(c,function(a,c){b=b.replace("$"+a,c||"")}),d.length&&(b+=(b.indexOf("?")>0?"&":"?")+d),b};b.helpers.media={defaults:{youtube:{matcher:/(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"opaque",enablejsapi:1},type:"iframe",url:"//www.youtube.com/embed/$3"},vimeo:{matcher:/(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},type:"iframe",url:"//player.vimeo.com/video/$1"},metacafe:{matcher:/metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,params:{autoPlay:"yes"},type:"swf",url:function(b,c,d){return d.swf.flashVars="playerVars="+a.param(c,!0),"//www.metacafe.com/fplayer/"+b[1]+"/.swf"}},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"swf",url:"//www.dailymotion.com/swf/video/$1"},twitvid:{matcher:/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,params:{autoplay:0},type:"iframe",url:"//www.twitvid.com/embed.php?guid=$1"},twitpic:{matcher:/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,type:"image",url:"//twitpic.com/show/full/$1/"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,type:"iframe",url:function(a){return"//maps.google."+a[1]+"/"+a[3]+a[4]+"&output="+(a[4].indexOf("layer=c")>0?"svembed":"embed")}}},beforeLoad:function(b,d){var g,h,i,j,e=d.href||"",f=!1;for(g in b)if(b.hasOwnProperty(g)&&(h=b[g],i=e.match(h.matcher))){f=h.type,j=a.extend(!0,{},h.params,d[g]||(a.isPlainObject(b[g])?b[g].params:null)),e="function"===a.type(h.url)?h.url.call(this,i,j,d):c(h.url,i,j);break}f&&(d.href=e,d.type=f,d.autoHeight=!1)}}}(jQuery);
function backtotop(){$("#back-top").hide();$(function () {$(window).scroll(function () {if ($(this).scrollTop() > 100) {$('#back-top').fadeIn();} else {$('#back-top').fadeOut();}});$('#back-top a').click(function () {$('body,html').animate({scrollTop: 0}, 800);return false;});});}
//---------- PANELTOOLS ----------//
function panelTool(){$('#paneltool .panelbutton').click(function(){$('#paneltool .paneltool').toggleClass('active');});changeFloatHeader();changeLayoutMode();changeHeaderStyle();}
function changeFloatHeader(){$('#floatHeader').click(function(){if ($('body').hasClass('keep-header')) {$('body').removeClass('keep-header');processFloatHeader(0,0);}else{processFloatTopbar(0,0);$('body').addClass('keep-header');$('body').removeClass('keep-topbar');$("#floatTopbar").prop("checked", false);};});$('#floatTopbar').click(function(){if ($('body').hasClass('keep-topbar')) {$('body').removeClass('keep-topbar');processFloatTopbar(0,0);}else{processFloatHeader(0,0);$('body').addClass('keep-topbar');$('body').removeClass('keep-header');$("#floatHeader").prop("checked", false);};});}
function changeLayoutMode(){$('.dynamic-update-layout').click(function(){var currentLayoutMode = $('.dynamic-update-layout.selected').data('layout-mode');if(!$(this).hasClass('selected')){$('.dynamic-update-layout').removeClass('selected');$(this).addClass('selected');selectedLayout = $(this).data('layout-mode');$('body').removeClass(currentLayoutMode);$('body').addClass(selectedLayout);}});}
function changeHeaderStyle(){$('.dynamic-update-header').click(function(){var currentHeaderMode = $('.dynamic-update-header.selected').data('header-style');if(!$(this).hasClass('selected')){$('.dynamic-update-header').removeClass('selected');$(this).addClass('selected');selectedHeaderStyle = $(this).data('header-style');$('body').removeClass(currentHeaderMode);$('body').addClass(selectedHeaderStyle);}});}
function processFloatHeader(a,b){
	if(a){
		$("#header").addClass( "navbar-fixed-top" );
	    $("#page").css( "padding-top", $("#header").height());
	    var hideheight =  $("#header").height()+120;
	    var pos = $(window).scrollTop();
	    if( b && pos >= hideheight ){
	        $("#topbar").addClass('hide-bar');
	        $(".hide-bar").css( "margin-top", - $("#topbar").height() );
            $("#header").addClass('mini-header');
	    }else {
	        $("#topbar").css( "margin-top", 0 );
          $("#header").removeClass('mini-header');
	    }
	}else{
		$("#header").removeClass( "navbar-fixed-top" );
      $("#header").removeClass('mini-header');
	    $("#page").css( "padding-top", '');
        $("#header-main").removeClass('hidden');
        $("#apollo-menu").removeClass('hidden');
        $("#topbar").css( "margin-top", 0 );
	}
	
}
function processFloatTopbar(topbarAdd, scroolAction){
	if(topbarAdd){
		$("#header").addClass( "navbar-fixed-top" );
	    $("#page").css( "padding-top", $("#header").height());
	    var hideheightBar =  $("#header").height()+120;
	    var pos = $(window).scrollTop();
	    if( scroolAction && pos >= hideheightBar ){
	        $("#header-main").addClass('hidden');
			$("#apollo-menu").addClass('hidden');
          	$("#header-main").addClass("mini-header");
	    }else {
	        $("#header-main").removeClass('hidden');
	        $("#apollo-menu").removeClass('hidden');
          	$("#header-main").removeClass("mini-header");
	    }
	}else{
		$("#header").removeClass("navbar-fixed-top");
	    $("#page").css( "padding-top", '');
	    $("#header-main").removeClass('hidden');
	    $("#apollo-menu").removeClass('hidden');
      	$("header-main").removeClass( "mini-header" );
        $("#topbar").css( "margin-top", 0 );
	}

}
function floatHeader(){
	$(window).resize(function(){
		if (!$("body").hasClass("keep-header") || $(window).width() <= 990){
			return;
		}
		if ($(window).width() <= 990)
		{
			processFloatHeader(0,0);
		}
		else if ($(window).width() > 990)
		{
			if ($("body").hasClass("keep-header"))
				processFloatHeader(1,1);
		}
	});
    $(window).scroll(function() {
    	if (!$("body").hasClass("keep-header")) return;
    	if($(window).width() > 990){
	         processFloatHeader(1,1);

    	}
    });
}
function floatTopbar(){
	$(window).resize(function(){
		if (!$("body").hasClass("keep-topbar") || $(window).width() <= 990){
			return;
		}
		if ($(window).width() <= 990)
		{
			processFloatTopbar(0,0);
		}
		else if ($(window).width() > 990)
		{
			if ($("body").hasClass("keep-topbar"))
				processFloatTopbar(1,1);
		}
	});
    $(window).scroll(function() {
    	if (!$("body").hasClass("keep-topbar")) return;
    	if($(window).width() > 990){
	         processFloatTopbar(1,1);

    	}
    });
}
! function(a) {
    var b = function() {
        return window.location.hash
    };
    a(".template-collection") && History.Adapter.bind(window, "statechange", function() {
        History.getState();      	
        if (!isFilterAjaxClick) {
            d.filterParams();
            var b = d.filterCreateUrl();
            d.filterGetContent(b), d.reloadFilter()
        }
        isFilterAjaxClick = !1
    }), a(function() {
        a("body").on("touchstart.dropdown", ".dropdown-menu", function(a) {
            a.stopPropagation()
        }), a(document.body).on("click", '[data-toggle="dropdown"]', function() {
            !a(this).parent().hasClass("open") && this.href && "#" != this.href && (window.location.href = this.href)
        })
    }), a(document).ready(function() {
        d.init()
    });
    var d = {
        init: function() {
          this.loginForms(), this.initFilter(),this.ajaxSearch()
        },
        collectionViews: function() {
            a("#catalog_block").length && a("#catalog_block").hasClass("ajax-filter") || a(".change-view").length && a(".change-view").on("click", function(b) {
                b.preventDefault();
                var c = a(this).data("view"),
                    d = document.URL,
                    e = d.indexOf("?") > -1;
                e ? window.location = replaceUrlParam(d, "view", c) : window.location = d + "?view=" + c
            })
        },
        loginForms: function() {
            function c() {
                a("#RecoverPasswordForm").show(), a("#CustomerLoginForm").hide()
            }

            function d() {
                a("#RecoverPasswordForm").hide(), a("#CustomerLoginForm").show()
            }
            a("#RecoverPassword").on("click", function(a) {
                a.preventDefault(), c()
            }), a("#HideRecoverPasswordLink").on("click", function(a) {
                a.preventDefault(), d()
            }), "#recover" == b() && c()
        },
        resetPasswordSuccess: function() {
            a("#ResetSuccess").show()
        },
        showLoading: function() {
            a("#loading").show()
        },
        hideLoading: function() {
            a("#loading").hide()
        },
        initFilter: function() {
            d.filterParams(), d.filterSortby(), d.filterMapSidebar()
        },
        filterParams: function() {
            if (Shopify.queryParams = {}, location.search.length)
                for (var a, b = 0, c = location.search.substr(1).split("&"); b < c.length; b++) a = c[b].split("="), a.length > 1 && (Shopify.queryParams[decodeURIComponent(a[0])] = decodeURIComponent(a[1]))
        },
        filterSortby: function() {
            if (Shopify.queryParams.sort_by) {
                var b = Shopify.queryParams.sort_by;
                a("#SortBy").val(b)
            }
        },
        filterCreateUrl: function(b) {
            var c = a.param(Shopify.queryParams).replace(/%2B/g, "+");
            return b ? "" != c ? b + "?" + c : b : location.pathname + "?" + c
        },
       filterMapData: function(b) {
          if(typeof(Shopify.queryParams.view) == 'undefined' && $(".list-current-tag li").length==0 ){
            if(typeof(Shopify.queryParams.page) != 'undefined' || typeof(Shopify.queryParams.sort_by) != 'undefined'){
              a("#product_list").html(a(".product_list", b.responseText).html());
              a("#pagination").remove();
              a(".content_sortPagiBar").html(a(".content_sortPagiBar", b.responseText).html());
              a("#catalog_block").html(a("#catalog_block", b.responseText).html());          	  
              var c = a(".change-view.change-view--active").data("view");
              a("#product_list").removeClass("list").removeClass("grid").addClass(c);
             initApollo();
             productImage();
              jQuery(document.body).on('afterCartLoad.ajaxCart', function(evt, cart) {
                // Bind to 'afterCartLoad.ajaxCart' to run any javascript after the cart has loaded in the DOM
                timber.RightDrawer.open();
              });
            }
          }else{

           a("#product_list").html(a(".product_list", b.responseText).html());
          
          	a("#pagination").remove();
          	a(".content_sortPagiBar").html(a(".content_sortPagiBar", b.responseText).html());
          	a("#catalog_block").html(a("#catalog_block", b.responseText).html());          	  
          	var c = a(".change-view.change-view--active").data("view");
            a("#product_list").removeClass("list").removeClass("grid").addClass(c);
           initApollo();
           productImage();
            jQuery(document.body).on('afterCartLoad.ajaxCart', function(evt, cart) {
              // Bind to 'afterCartLoad.ajaxCart' to run any javascript after the cart has loaded in the DOM
              timber.RightDrawer.open();
            });
          }
        },
        filterAjaxClick: function(a) {
            delete Shopify.queryParams.page;
            var b = d.filterCreateUrl(a);
          	
            console.log("Link: " + b), isFilterAjaxClick = !0, History.pushState({
                param: Shopify.queryParams
            }, b, b), d.filterGetContent(b);
          	updateInitAjax();
        },
        filterGetContent: function(b) {
            a.ajax({
                type: "GET",
                url: b,
                data: {},
                beforeSend: function() {
                    d.showLoading()
                },
                complete: function(a) {
                d.filterMapData(a), d.hideLoading(), d.filterMapPaging(), d.sidebarMapTagEvents();
                updateInitAjax();
               $('.wishlist-btn').bind('click',function(selector) {
                selector.preventDefault();
                updateWishlist(this);
                animateWishlist(this);
               
                  });
                getfirstvalue();
                activateItemsInWishlist();
         
                },
                error: function(b, c) {
                    d.hideLoading(), a("#errorJs .modal-content").text(a.parseJSON(b.responseText).description), a("#errorJs").modal("show")
                }
            })
        },
        sidebarMapTagEvents: function() {
            a(".advanced-filter a").click(function(b) {
                b.preventDefault();
                var c = [];
                if (Shopify.queryParams.constraint && (c = Shopify.queryParams.constraint.split("+")), !theme.multiple_filter_sidebar_enable && !a(this).parent().hasClass("active-filter")) {
                    console.log("No multichoise");
                    var e = a(this).parents(".catalog_filter_ul").find("li.active-filter");
                    if (e.length > 0) {
                        var f = e.data("handle");
                        if (f) {
                            var g = c.indexOf(f);
                            g >= 0 && c.splice(g, 1)
                        }
                    }
                }
                var h = a(this).parent().data("handle");
                if (h) {
                    var g = c.indexOf(h);
                    g >= 0 ? c.splice(g, 1) : c.push(h)
                }
                c.length ? Shopify.queryParams.constraint = c.join("+") : delete Shopify.queryParams.constraint, d.filterAjaxClick()
            })
        },
        sidebarMapTypeEvents: function() {},
        sidebarMapVendorEvents: function() {},
        filterMapView: function() {
            a(".change-view").click(function(b) {
                b.preventDefault(),
                  a(this).hasClass("change-view--active") || ("list" == a(this).data("view") ? Shopify.queryParams.view = "list" : Shopify.queryParams.view = "grid",
                  a(".change-view").removeClass("change-view--active"), a(this).addClass("change-view--active"), d.filterAjaxClick())
            	
            })
        },
        filterMapSorting: function() {
            a("#SortBy").change(function(b) {
                Shopify.queryParams.sort_by = a(this).val(), d.filterAjaxClick()
            })
        },
        filterMapPaging: function() {
            $(".content_sortPagiBar .pagination a").click(function(b) {
                b.preventDefault();
                var c = a(this).attr("href").match(/page=\d+/g);
                if (c && (Shopify.queryParams.page = parseInt(c[0].match(/\d+/g)), Shopify.queryParams.page)) {
                    var e = d.filterCreateUrl();
                    isFilterAjaxClick = !0, History.pushState({
                        param: Shopify.queryParams
                    }, e, e), console.log("Link: " + e), d.filterGetContent(e),countproducttop(e), a("body,html").animate({
                        scrollTop: 0
                    }, 600)
                }
            })
        },
        filterMapSidebar: function() {
            d.sidebarMapTagEvents(), d.sidebarMapTypeEvents(), d.sidebarMapVendorEvents(), d.filterMapView(), d.filterMapSorting(), d.filterMapPaging()
        },
        reloadFilter: function() {
            if (a(".advanced-filter.active-filter").removeClass("active-filter"), Shopify.queryParams.view) {
                a(".change-view.change-view--active").removeClass("change-view--active");
                var b = Shopify.queryParams.view;
                b.indexOf("list") >= 0 ? a("[data-view='list']").addClass("change-view--active") : a("[data-view='list']").data("view", "grid").addClass("change-view--active")
            }
        },
      	ajaxProductItems : function(){
            var result = new Array();
            var search_url = '/collections/all?view=ajaxsearch';
            $.ajax({
                type: 'GET',
                url: search_url,
                success: function (data) {
                    data = '<div>' + data + '</div>';
                    data = data.trim();
                    var elements = $(data).find('.aps-ajax');
                    if( 0 < elements.length ){
                        elements.each(function() {
                            var title = $.trim(this.getAttribute('data-title'));
                            var price = $.trim(this.getAttribute('data-price'));
                            var handle = $.trim(this.getAttribute('data-handle'));
                            var image = $.trim(this.getAttribute('data-img'));
                            var item = new Object();
                                item.title = title;
                                item.price = price;
                                item.handle = handle;
                                item.featured_image = image;
                            result.push(item);
                        });
                    }else{
                        //todo : return not found here
                    }  
                },
                dataType: 'html'
            });
            return result;
        },
        ajaxSearch: function() {
          var products = d.ajaxProductItems();
          $("#search_query_top").keyup(function() {
            var $this = $(this);
            var keyword = $this.val().toLowerCase();
            $('#ap-ajax-search').hide();
            if (keyword.length >= 2) {
              $(this).removeClass('error warning valid').addClass('valid');
              var result = $('#ap-ajax-search .aps-results').empty();
              var j = 0;
              for (var i = 0; i < products.length; i++) {
                var item = products[i];
                var title = item.title;
                var price = item.price;
                var handle = item.handle;
                var image = item.featured_image;
                if (title.toLowerCase().indexOf(keyword) > -1) {
                  var j = j + 1;
                  var markedString = title.replace(new RegExp('(' + keyword + ')', 'gi'), '<span class="marked">$1</span>');
                  var template = '<li class="product-block"><a class="product_img_link" href="/products/' + handle + '">' + '<img style="max-width: 80px; float: left;margin-right: 5px" src="' + image + '" />' + '</a><a class="product-name" href="/products/' + handle + '">' + markedString + '</a><div class="content_price"><span class="price product-price">' + price + '</span></div></li>';
                  if (j <= 10) {
                    result.append(template);
                  }
                }
              }
              if ($('#ap-ajax-search .aps-results li').length < 1) {
                result.append('<li><p>No result found for your search.</p></li>')
              }
              if ($('#ap-ajax-search .aps-results li').length) {
                $('#ap-ajax-search').show();
              }
            } else {
              if (keyword.length == 1) {
                $(this).removeClass('error warning valid').addClass('error');
                var text = '<li><p>You must enter at least 2 characters.</p></li>';
                var result = $('#ap-ajax-search .aps-results').empty();
                result.append(text);
                $('#ap-ajax-search').show();
              } else {
                $('#ap-ajax-search').hide();
              }
            }
          });
          $(document).on('click', '#page_content', function(e) {
            $('#ap-ajax-search').hide();
          });
        }
    }
}(jQuery);

//---------- Fixed Click Link Dropdown ----------//
function linkDropdown(){$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });$(document.body).on('click', '[data-toggle="dropdown"]' ,function(){if(!$(this).parent().hasClass('open') && this.href && this.href != '#'){window.location.href = this.href;}});}
//---------- AJAX Filter Sidebar + FORM Account ----------//
      
//-------------------accordion-----------------------//
function offCanvas(){
        $('[data-toggle="offcanvas"]').click(function (event) {
          var menuCanvas = $(this).data('target');
          $(this).toggleClass('open');
          $(menuCanvas).toggleClass('active');
          $('body').toggleClass('off-canvas-active');
          var heightCanvas = $(window).height();
          $(menuCanvas).css({'min-height' : heightCanvas});
          event.stopPropagation();
        });
        $('.off-canvas-nav').click(function () {
          $('[data-toggle="offcanvas"]').click();
        });
        $('#off-canvas-nav .megamenu').find('.dropdown-toggle').click(function (e) {
          e.stopPropagation();
          $(this).parent().find('.dropdown-menu').first().slideToggle('medium');
          $(this).parent().toggleClass("open");
        });
        $('#page').click(function(){
          if ($('body').hasClass('off-canvas-active')){
            $('[data-toggle="offcanvas"]').click();
          }
        });
        $(document).on('click','.menu_mobile',function(){
         $(".navbar-toggle").trigger("click");
        })
      }
function scrollCompensate(){
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";
    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;
    document.body.removeChild(outer);
    return (w1 - w2);
}
function responsiveAccordion(){
	compensante = scrollCompensate();
	if (($(window).width()+scrollCompensate()) <= 767)
	{
      	accordion('disable');
        //fix_product('disable');
	    //accordionFooter('disable');
	}
	else if (($(window).width()+scrollCompensate()) >= 768)
	{
		accordion('disable');
    //fix_product('enable');
		//accordionFooter('disable');
	}
}
/*function fix_responsiveproduct(){
  compensante = scrollCompensate();
  if (($(window).width()+scrollCompensate()) <= 1200)
  {
        fix_product('disable');
  }
  else if (($(window).width()+scrollCompensate()) >= 1200)
  {
    fix_product('enable');
  }
}*/
function responsiveFilter(){
  	compensante = scrollCompensate();
	if (($(window).width()+scrollCompensate()) <= 767)
	{
      	accordionFilter('enable');	    
	}
	else if (($(window).width()+scrollCompensate()) >= 768)
	{
		accordionFilter('enable');		
	}  
}
function accordion(status){
 	if(status == 'enable')
 	{      	
      	if(!$('#left_column').hasClass('accordion')){                  	
        	$('#left_column .block .title_block').on('click', function(){
   				$(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
  			});
      	}
      	if(!$('#right_column').hasClass('accordion')){
        	$('#right_column .block .title_block').on('click', function(){
   				$(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
  			});
      	}        
      	$('#left_column').addClass('accordion').find('.block .block_content').slideUp('fast');
  		$('#right_column').addClass('accordion').find('.block .block_content').slideUp('fast');         	      	
 	}
 	else
 	{
  		$('#right_column .block .title_block, #left_column .block .title_block').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');      	
  		$('#left_column, #right_column').removeClass('accordion');  
	
 	}
}
function accordionFilter(status){
  if(status == 'enable'){    
    $('.filter-group .block .title_block').on('click', function(){
      $(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
    });
    //$('.filter-group').addClass('accordion').find('.block .block_content').slideUp('fast');
  }else{
    $('.filter-group .block .title_block').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
    $('.filter-group').removeClass('accordion');
  }
}
/*function accordionFooter(status){
 	if(status == 'enable') {
       	if(!$('.footerAccordion').hasClass('accordion')){
          	$('.footerAccordion h4').on('click', function(){
              	$(this).toggleClass('active').parent().find('.block_content').stop().slideToggle('medium');
          	})
        }
  		$('.footerAccordion').addClass('accordion').find('.block_content').slideUp('fast');
 	}
 	else {
  		$('.footerAccordion h4').removeClass('active').off().parent().find('.block_content').removeAttr('style').slideDown('fast');
  		$('.footerAccordion').removeClass('accordion');
 	}
}*/


/*---------- Smooth Scroll ------------*/
!function(){function e(){var e=!1;e&&c("keydown",r),v.keyboardSupport&&!e&&u("keydown",r)}function t(){if(document.body){var t=document.body,n=document.documentElement,o=window.innerHeight,r=t.scrollHeight;if(S=document.compatMode.indexOf("CSS")>=0?n:t,w=t,e(),x=!0,top!=self)y=!0;else if(r>o&&(t.offsetHeight<=o||n.offsetHeight<=o)){var a=!1,i=function(){a||n.scrollHeight==document.height||(a=!0,setTimeout(function(){n.style.height=document.height+"px",a=!1},500))};if(n.style.height="auto",setTimeout(i,10),S.offsetHeight<=o){var l=document.createElement("div");l.style.clear="both",t.appendChild(l)}}v.fixedBackground||b||(t.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll")}}function n(e,t,n,o){if(o||(o=1e3),d(t,n),1!=v.accelerationMax){var r=+new Date,a=r-C;if(a<v.accelerationDelta){var i=(1+30/a)/2;i>1&&(i=Math.min(i,v.accelerationMax),t*=i,n*=i)}C=+new Date}if(M.push({x:t,y:n,lastX:0>t?.99:-.99,lastY:0>n?.99:-.99,start:+new Date}),!T){var l=e===document.body,u=function(r){for(var a=+new Date,i=0,c=0,s=0;s<M.length;s++){var d=M[s],f=a-d.start,h=f>=v.animationTime,m=h?1:f/v.animationTime;v.pulseAlgorithm&&(m=p(m));var w=d.x*m-d.lastX>>0,g=d.y*m-d.lastY>>0;i+=w,c+=g,d.lastX+=w,d.lastY+=g,h&&(M.splice(s,1),s--)}l?window.scrollBy(i,c):(i&&(e.scrollLeft+=i),c&&(e.scrollTop+=c)),t||n||(M=[]),M.length?N(u,e,o/v.frameRate+1):T=!1};N(u,e,0),T=!0}}function o(e){x||t();var o=e.target,r=l(o);if(!r||e.defaultPrevented||s(w,"embed")||s(o,"embed")&&/\.pdf/i.test(o.src))return!0;var a=e.wheelDeltaX||0,i=e.wheelDeltaY||0;return a||i||(i=e.wheelDelta||0),!v.touchpadSupport&&f(i)?!0:(Math.abs(a)>1.2&&(a*=v.stepSize/120),Math.abs(i)>1.2&&(i*=v.stepSize/120),n(r,-a,-i),void e.preventDefault())}function r(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==H.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||o)return!0;if(s(t,"button")&&e.keyCode===H.spacebar)return!0;var r,a=0,i=0,u=l(w),c=u.clientHeight;switch(u==document.body&&(c=window.innerHeight),e.keyCode){case H.up:i=-v.arrowScroll;break;case H.down:i=v.arrowScroll;break;case H.spacebar:r=e.shiftKey?1:-1,i=-r*c*.9;break;case H.pageup:i=.9*-c;break;case H.pagedown:i=.9*c;break;case H.home:i=-u.scrollTop;break;case H.end:var d=u.scrollHeight-u.scrollTop-c;i=d>0?d+10:0;break;case H.left:a=-v.arrowScroll;break;case H.right:a=v.arrowScroll;break;default:return!0}n(u,a,i),e.preventDefault()}function a(e){w=e.target}function i(e,t){for(var n=e.length;n--;)E[A(e[n])]=t;return t}function l(e){var t=[],n=S.scrollHeight;do{var o=E[A(e)];if(o)return i(t,o);if(t.push(e),n===e.scrollHeight){if(!y||S.clientHeight+10<n)return i(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return i(t,e)}while(e=e.parentNode)}function u(e,t,n){window.addEventListener(e,t,n||!1)}function c(e,t,n){window.removeEventListener(e,t,n||!1)}function s(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function d(e,t){e=e>0?1:-1,t=t>0?1:-1,(k.x!==e||k.y!==t)&&(k.x=e,k.y=t,M=[],C=0)}function f(e){if(e){e=Math.abs(e),D.push(e),D.shift(),clearTimeout(z);var t=h(D[0],120)&&h(D[1],120)&&h(D[2],120);return!t}}function h(e,t){return Math.floor(e/t)==e/t}function m(e){var t,n,o;return e*=v.pulseScale,1>e?t=e-(1-Math.exp(-e)):(n=Math.exp(-1),e-=1,o=1-Math.exp(-e),t=n+o*(1-n)),t*v.pulseNormalize}function p(e){return e>=1?1:0>=e?0:(1==v.pulseNormalize&&(v.pulseNormalize/=m(1)),m(e))}var w,g={frameRate:150,animationTime:850,stepSize:110,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},v=g,b=!1,y=!1,k={x:0,y:0},x=!1,S=document.documentElement,D=[120,120,120],H={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},v=g,M=[],T=!1,C=+new Date,E={};setInterval(function(){E={}},1e4);var z,A=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),N=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}(),K=/chrome/i.test(window.navigator.userAgent),L=null;"onwheel"in document.createElement("div")?L="wheel":"onmousewheel"in document.createElement("div")&&(L="mousewheel"),L&&K&&(u(L,o),u("mousedown",a),u("load",t))}();
/*---------- End Smooth Scroll ------------*/

/*
 FastClick: polyfill to remove click delays on browsers with touch UIs.
*/
(function(){"use strict";function e(t,r){function s(e,t){return function(){return e.apply(t,arguments)}}var i;r=r||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=r.touchBoundary||10;this.layer=t;this.tapDelay=r.tapDelay||200;this.tapTimeout=r.tapTimeout||700;if(e.notNeeded(t)){return}var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var u=this;for(var a=0,f=o.length;a<f;a++){u[o[a]]=s(u[o[a]],u)}if(n){t.addEventListener("mouseover",this.onMouse,true);t.addEventListener("mousedown",this.onMouse,true);t.addEventListener("mouseup",this.onMouse,true)}t.addEventListener("click",this.onClick,true);t.addEventListener("touchstart",this.onTouchStart,false);t.addEventListener("touchmove",this.onTouchMove,false);t.addEventListener("touchend",this.onTouchEnd,false);t.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){t.removeEventListener=function(e,n,r){var i=Node.prototype.removeEventListener;if(e==="click"){i.call(t,e,n.hijacked||n,r)}else{i.call(t,e,n,r)}};t.addEventListener=function(e,n,r){var i=Node.prototype.addEventListener;if(e==="click"){i.call(t,e,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(t,e,n,r)}}}if(typeof t.onclick==="function"){i=t.onclick;t.addEventListener("click",function(e){i(e)},false);t.onclick=null}}var t=navigator.userAgent.indexOf("Windows Phone")>=0;var n=navigator.userAgent.indexOf("Android")>0&&!t;var r=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t;var i=r&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var s=r&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);var o=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(r&&e.type==="file"||e.disabled){return true}break;case"label":case"iframe":case"video":return true}return/\bneedsclick\b/.test(e.className)};e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};e.prototype.sendClick=function(e,t){var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};e.prototype.determineEventType=function(e){if(n&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};e.prototype.focus=function(e){var t;if(r&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};e.prototype.onTouchStart=function(e){var t,n,s;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(r){s=window.getSelection();if(s.rangeCount&&!s.isCollapsed){return true}if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(e){var t,o,u,a,f,l=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}if(e.timeStamp-this.trackingClickStart>this.tapTimeout){return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;o=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(s){f=e.changedTouches[0];l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l;l.fastClickScrollParent=this.targetElement.fastClickScrollParent}u=l.tagName.toLowerCase();if(u==="label"){t=this.findControl(l);if(t){this.focus(l);if(n){return false}l=t}}else if(this.needsFocus(l)){if(e.timeStamp-o>100||r&&window.top!==window&&u==="input"){this.targetElement=null;return false}this.focus(l);this.sendClick(l,e);if(!r||u!=="select"){this.targetElement=null;e.preventDefault()}return false}if(r&&!i){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop){return true}}if(!this.needsClick(l)){e.preventDefault();this.sendClick(l,e)}return false};e.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};e.prototype.onClick=function(e){var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};e.prototype.destroy=function(){var e=this.layer;if(n){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};e.notNeeded=function(e){var t;var r;var i;if(typeof window.ontouchstart==="undefined"){return true}r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(r){if(n){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(r>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(o){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"){return true}if(e.style.touchAction==="none"){return true}return false};e.attach=function(t,n){return new e(t,n)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return e})}else if(typeof module!=="undefined"&&module.exports){module.exports=e.attach;module.exports.FastClick=e}else{window.FastClick=e}})()

function countproducttop(url){
  var content = $("div.pagination-top-showing").data("content");
  var page = url.split("?page=");
  if(page.length == 1) page = url.split("&page=");
  
  if(page.length == 1 || page[1] == 0 || page[1]==1){
    content = content.replace("%1%","1");
    content = content.replace("%2%",$("div.pagination-top-showing").data("per-page"));
  }else{
    content = content.replace("%1%",$("div.pagination-top-showing").data("per-page") * (page[1] -1) + 1 );
    if(($("div.pagination-top-showing").data("per-page") * page[1]) <= $("div.pagination-top-showing").data("all-product"))
    	content = content.replace("%2%",$("div.pagination-top-showing").data("per-page") * page[1]);
    else
      content = content.replace("%2%",$("div.pagination-top-showing").data("all-product"));
  }
  content = content.replace("%3%",$("div.pagination-top-showing").data("all-product"));
  $("div.pagination-top-showing").html("<p>" + content + "</p>");
}
function productVariantsChange(){
  $(".product-single__variants").change(function() {
    var iSize = "700x";
    var pid= $(this).val();
    var el = $(this);
    var url = "/products/" + $(this).data("handle") + ".js" ;        
    $(function() {
      $.getJSON( url , {
        format: "json"
      })
      .done(function( data ) {              
        for(i=0;i<data.variants.length;i++){
          if(pid == data.variants[i].id){                  
            if(data.variants[i].featured_image != null){
              var re = /(?:\.([^.]+))?$/;
              var img_ext = re.exec(data.variants[i].featured_image.src)[0];
              var src_image = data.variants[i].featured_image.src.split(img_ext)[0] + "_" + iSize + img_ext;
              $(el).closest('div.product-container').find(".img-product").attr("src", src_image); 
              console.log('xx');         
            }
            var price = (Shopify.formatMoney(data.variants[i].price, theme.moneyFormat));
            if(data.variants[i].compare_at_price != null){              
                var oldprice = (Shopify.formatMoney(data.variants[i].compare_at_price, theme.moneyFormat));
              $(el).closest('div.product-container').find(".old-price.product-price").html(oldprice);
            }
            console.log(data.variants[i]);
            $(el).closest('div.product-container').find(".price.product-price").html(price);
            Currency.convertAll(theme.shop_currency, jQuery('#currencies a.selected').attr('data-currency'));
          }
        }        
      });
    });
  });
}
function updateInitAjax(){
  if(true){
     addSwatchToItem();
  }
  productVariantsChange();
  
  create_filter_price_bar();
  
  jQuery(function($) {
    ajaxCart.init({
      formSelector: '.form-ajaxtocart',
      cartContainer: '#CartContainer',
      addToCartSelector: '.ajax_addtocart',
      cartCountSelector: '#CartCount',
      cartCostSelector: '#CartCost',
      moneyFormat: null
    });
    });
    SPR.initRatingHandler(), SPR.initDomEls(), SPR.loadProducts(), SPR.loadBadges()
}

