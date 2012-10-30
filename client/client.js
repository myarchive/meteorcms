// Plugins
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());
function setCookie(a,b,c){var d=new Date;d.setDate(d.getDate()+c);var e=escape(b)+(c==null?"":"; expires="+d.toUTCString());document.cookie=a+"="+e}
function getCookie(a){var b,c,d,e=document.cookie.split(";");for(b=0;b<e.length;b++){c=e[b].substr(0,e[b].indexOf("="));d=e[b].substr(e[b].indexOf("=")+1);c=c.replace(/^\s+|\s+$/g,"");if(c==a){return unescape(d)}}return null}
function loadModal(a){var b=$(".in").val();$("#modal").load(a);if(b==undefined){$("#modal").modal({keyboard:true,backdrop:true,show:true})}}

// Session variable initialize
Session.set('info', null);
Session.set('page', null);
Session.set('role', null);

// To Do:
console.log("### TODO: Body & Page templating needs to be dynamic");
console.log("### TODO: Loop through all .navitems and strip .active then add to matching page name in the alt attribute");
