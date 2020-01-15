!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).vSkeleton={})}(this,function(e){"use strict";function k(n){return function(t){t&&Object.keys(n).forEach(function(e){t.style[e]=n[e]})}}var C=function(){return(C=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},t=document.createElement("style");t.id="skeletonKeyframes",t.textContent="\n@keyframes skeletonGb {\n  0% { background-position: 100% 0;}\n  100% { background-position: 0% 0;}\n}\n@keyframes skeletonOpa {\n  0% { opacity: 1;}\n  50% { opacity: 0.62;}\n  100% {opacity: 1;}\n}\n.skeleton-safe-top {\n  padding-top: constant(safe-area-inset-top);\n  padding-top: env(safe-area-inset-top);\n}\n.skeleton-safe-bottom {\n  padding-bottom: constant(safe-area-inset-bottom);\n  padding-bottom: env(safe-area-inset-bottom);\n}\n",document.head.appendChild(t);var n={render:function(e){var t=document.createElement("div");t.id=e.id||"skeletion-base";var n=e.onClose,i=e.ref,o=e.style,a=void 0===o?{}:o;n&&(t.onClose=n);var d=function(e){if(!e.header)return null;var t=e.header,n=t.title,i=void 0===n?"":n,o=t.titleStyle,a=t.backStyle,d=t.rightStyle,r=t.onBack,l=t.isShowBackButton,s=void 0===l||l,c=t.safeTop,p=t.style,f=void 0===p?{}:p,m=document.createElement("section");"auto"===c&&m.setAttribute("class","skeleton-safe-top"),k(C({height:"54px",width:"100%",background:"#88f",color:"#fff",display:"flex",justifyContent:"space-between",padding:"0px 8px",alignItems:"center",paddingTop:c&&"auto"!==c?c:void 0},f))(m);var u=document.createElement("div");k(C({width:"50px",height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},a))(u),s&&(u.innerHTML=function(e,t){return void 0===t&&(t=1),'\n<?xml version="1.0" standalone="no"?><svg t="1577104161089" class="icon" viewBox="0 0 1024 1024" version="1.1" p-id="4478" width="'+100*t+'%" height="'+100*t+'%"><defs><style type="text/css"></style></defs><path d="M519.581 0.771l-511.821 511.744 512.162 510.715 69.656-69.756-442.225-441.474 442.225-441.98z" p-id="4479" fill="'+e+'"></path></svg>\n'}(f.color||"#fff",.37)),u.onclick=r||function(){window.history.back(),setTimeout(function(){window.vSkeleton.close()})},m.append(u);var h=document.createElement("div");h.textContent=i,k(C({fontWeight:"normal",fontSize:"17px"},o))(h),m.append(h);var g=document.createElement("div");return k(C({width:a?a.width:"50px",height:a?a.height:"50px",display:"flex",justifyContent:"center",alignItems:"center"},d))(g),m.append(g),m}(e);d&&t.appendChild(d);var r=function(e){var g,t=e.cells,n=e.cellStyle,i=e.space,v=void 0===i?"4px":i,o=e.useAnimeTypes,y=void 0===o?{title:!0,info:!0,image:!0}:o,a=e.gradientAnimeColor,d=e.gradientAnimeTime,r=void 0===d?3:d,l=e.opacityAnime,s=e.opacityAnimeTime,c=void 0===s?2:s,p=e.eleStyle,x=void 0===p?{background:"#e8e8e8"}:p,b="4px",f=document.createElement("section");return t=t||[{layout:"title-info",style:{height:"50px"}}],a?g=C({animation:"skeletonGb "+r+"s infinite linear"},x,{backgroundPosition:"0% 0",background:"linear-gradient(90deg,  "+x.background+" 0%, "+x.background+" 30%, "+a+" 40%, "+x.background+" 50%, "+x.background+" 100%)",backgroundSize:"300% 100%"}):l&&(g=C({animation:"skeletonOpa "+c+"s infinite linear",opacity:1},x)),t.forEach(function(m){var t=document.createElement("section"),e=m.layout.replace(/ /g,""),u=m.style&&m.style.height||"1px",h=e.split(",");h.forEach(function(e,c){var p=document.createElement("div");k({marginRight:c<h.length-1?v:void 0,flex:-1<e.indexOf("image")||-1<e.indexOf("empty")?void 0:1,display:"flex",flexDirection:"column",position:"relative"})(p);var f=e.split("-");f.forEach(function(e,t){var n=.5*c+"s",i=c<h.length-1?v:void 0,o=t<f.length-1?v:void 0;if("empty"===e){var a=document.createElement("div");k(C({marginBottom:o,marginRight:i,width:u,height:u},m.emptyStyle))(a),p.appendChild(a)}else if("image"===e){a=document.createElement("div");k(C({animationDelay:n,marginBottom:o,marginRight:i},x,y.image?g:{},{borderRadius:"150px",width:u,height:u},m.imageStyle))(a),p.appendChild(a)}else if("title"===e){a=document.createElement("div");k(C({animationDelay:n,borderRadius:b,marginBottom:o,marginRight:i,height:"40px"},x,m.titleStyle,y.title?g:{}))(a),p.appendChild(a)}else if(-1<e.indexOf("info")){a=document.createElement("div");for(var d=Number(e.replace("info",""))||3,r=0;r<d;r++){var l=document.createElement("span"),s=Math.floor(10*Math.random());k(C({borderRadius:b,marginRight:r<d-1?v:void 0,flex:s<3?3:s,height:"100%"},x,y.info?g:{}))(l),a.appendChild(l)}k(C({animationDelay:n,display:"flex",flexDirection:"row",justifyContent:"space-between",borderRadius:b,marginBottom:o,marginRight:i,height:"20px"},m.infoStyle))(a),p.appendChild(a)}}),t.appendChild(p)}),k(C({height:u,display:"flex",flexDirection:"row",justifyContent:"space-between"},n,m.style))(t),f.appendChild(t)}),f}(e);r&&t.appendChild(r);var l=function(e){if(!e.bottomBar)return null;var t=e.bottomBar,n=t.safeBottom,i=t.count,o=void 0===i?3:i,a=t.style,d=void 0===a?{}:a,r=t.itemStyle,l=document.createElement("section");"auto"===n&&l.setAttribute("class","skeleton-safe-bottom"),k(C({minHeight:"54px",background:"#fff",color:"#fff",display:"flex",justifyContent:"space-around",alignItems:"center",position:"fixed",bottom:"0px",left:"0px",width:"100%",borderTop:"1px solid #e8e8e8",paddingTop:"6px",paddingBottom:n&&"auto"!==n?n:void 0},d))(l);for(var s=0;s<o;s++){var c=document.createElement("div");k(C({width:"36px",height:"36px",display:"flex",justifyContent:"center",background:"#e9e9e9",borderRadius:"50px",alignItems:"center"},r))(c),l.appendChild(c)}return l}(e);return l&&t.appendChild(l),k(C({padding:"0px",margin:"0px",width:"100vw",height:"100vh",zIndex:"9999",position:"fixed",left:"0px",top:"0px",overflow:"auto",background:"#fff"},a))(t),i&&i(t),t},close:function(t){void 0===t&&(t="skeletion-base"),setTimeout(function(){var e=document.getElementById(t);e&&(e.onClose&&(e.onClose(),e.onClose=void 0),e.parentNode&&e.parentNode.removeChild(e))},20)},cell:function(e){return e}};window.vSkeleton=n,e.vSkeleton=n,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=vSkeleton.js.map