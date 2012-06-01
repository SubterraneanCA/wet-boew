/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(c){var a,b;a=(typeof window.pe!=="undefined"&&window.pe!==null)?window.pe:{fn:{}};b={language:(c("html").attr("lang")?(c("html").attr("lang").indexOf("en")===0?"eng":"fra"):c("meta[name='dc.language'], meta[name='dcterms.language']").attr("content")),touchscreen:"ontouchstart" in document.documentElement,theme:"gcwu",suffix:"",header:c("#wb-head"),menubar:c(".wet-boew-menubar"),leftcol:c("#wb-sec"),footer:c("#wb-foot"),html5:(function(){var d=false,e=/\s+(X?HTML)\s+([\d\.]+)\s*([^\/]+)*\//gi;if(typeof document.namespaces!=="undefined"){d=(document.all[0].nodeType===8)?e.test(document.all[0].nodeValue):false}else{d=(document.doctype!==null)?e.test(document.doctype.publicId):false}return(d)?false:true}()),ie:c.browser.msie?c.browser.version:0,_init:function(){var i,k,r,d,j,e,g,q,m,l,p,h,f,o,n;c("html").removeClass("no-js").addClass(a.theme+((a.touchscreen)?" touchscreen":""));p=a.url(document.getElementById("progressive").src).file;a.suffix=p.substr(p.length-7)==="-min.js"?"-min":"";if(a.mobilecheck()){a.mobile=true;c("body > div").attr("data-role","page")}c.when.apply(c,c.map(c("*[data-ajax-replace], *[data-ajax-append]"),function(u){n=c(u);var t=false,s;if(n.attr("data-ajax-replace")!==undefined){t=true;s=n.attr("data-ajax-replace")}else{if(n.attr("data-ajax-append")!==undefined){s=n.attr("data-ajax-append")}}return c.get(s,function(v){if(t){n.empty()}n.append(c(v))},"html")})).always(function(){c(document).bind("languageloaded",function(){a.dance()});a.add.language(a.language);if(a.mobile==true){if(a.menubar.length>0){i='<div data-role="page" id="jqmobile-wet-boew-menubar"><div data-role="header">';k=a.header.find("#gcwu-psnb > :header");i+="<h1>"+k.html()+"</h1></div>";i+='<div data-role="content" data-inset="true"><nav role="navigation">';r=a.header.find("#gcwu-bc");if(r.length>0){i+='<div id="jqm-mb-location-text">'+r.html()+"</div>";r.remove()}else{i+='<div id="jqm-mb-location-text"></div>'}if(a.leftcol.length>0){d="<h2>"+a.leftcol.find(":header").eq(0).html()+"</h2>";d+='<div data-role="collapsible-set">';d+=a.leftcol.find(".wb-sec-def").html().replace(/<section>/gi,'<div data-role="collapsible">').replace(/<\/section>/gi,"</div>");d=d.replace(/<h(.*?)>\s*<a/gmi,'<h$1><a class="ui-link" data-icon="arrow-r" data-theme="b"');d=d.replace(/<ul(.*?)>/gi,'<ul data-role="listview"$1>').replace(/<\/ul>/gi,"</ul>");d=d.replace(/<div class=\"top-level\"/gmi,'<div data-role="button" data-icon="arrow-r" class="top-level"');d+="</div>";i+=d;a.leftcol.remove()}i+="<h2>"+k.html()+"</h2>";i+='<div data-role="collapsible-set">';a.menubar.find("ul.mb-menu").clone().each(function(){c(this).find("div[class^=span]").each(function(){c(this).replaceWith(c(this).html())});c(this).find(".mb-sm").each(function(){c(this).html('<div data-role="collapsible-set">'+c(this).html()+"</div)")});c(this).children().children("div:first-child,h2,h3,h4,section").each(function(){var s=c(this);if(s.is("section")){s=s.children("h2,h3,h4").eq(0)}s.html(s.text());if(s.is("div")){i+='<div data-role="button" data-icon="arrow-r" data-corners="false" class="top-level'+(s.parent().is("li:first-child")?" ui-corner-top":((s.parent().is("li:last-child")?" ui-corner-bottom":"")))+'" data-theme="a">'+c(this).html()+"</div>"}else{s.parent().find("ul").attr("data-role","listview");s.parent().find(".mb-sm div > a,.mb-sm h2,.mb-sm h3,.mb-sm h4").each(function(){var t=c(this),u=t.parent();if(u.is("div")){u.html(u.text());u.attr("data-role","button").attr("data-icon","arrow-r").attr("data-corners","false").attr("data-theme","a").addClass("top-level"+(s.parent().is("li:first-child")?" ui-corner-top":((s.parent().is("li:last-child")?" ui-corner-bottom":""))))}else{if(u.is("section")){t.html(t.text());u.wrap('<div data-role="collapsible" data-theme="a">');u.parent().html(u.html())}}});i+='<div data-role="collapsible" data-theme="a">'+s.parent().html()+"</div>"}})});i+="</nav></div>";i+="</div></div>";a.pagecontainer().append(i);k.wrapInner('<a href="#jqmobile-wet-boew-menubar" data-rel="dialog"></a>')}j=a.header.find("#gcwu-srchbx");if(j.length>0){e=c('<div data-role="page" id="jqmobile-wet-boew-search"></div>');e.append(c('<div data-role="header"><h1>'+j.find(":header").text()+"</h1></div>")).append(c('<div data-role="content"></div>').append(j.find("form").clone()));a.pagecontainer().append(e);j.find(":header").wrapInner('<a href="#jqmobile-wet-boew-search" data-rel="dialog"></a>');g=c("<ul></ul>").hide().append('<li><a data-rel="dialog" data-theme="b"  data-icon="grid" href="'+k.find("a").attr("href")+'">'+k.find("a").text()+"</a></li>").append('<li><a data-rel="dialog" data-theme="b" data-icon="search" href="'+j.find(":header a").attr("href")+'">'+j.find(":header a").text()+"</a></li>");a.header.find("#gcwu-title").after(c('<div data-role="navbar" data-iconpos="right"></div>').append(g))}h=c("#gcwu-lang");if(h.length>0){q=h.find("a").attr("data-theme","a");f=c('<div data-role="navbar"><ul></ul></div>');l=f.children();q.each(function(){l.append(c("<li/>").append(this))});h.find("#gcwu-ef-lang").replaceWith(f.children().end());h.find("#gcwu-other-lang").remove()}if(a.footer.find("#gcwu-sft").length>0){q=a.footer.find("#gcwu-sft-in #gcwu-tctr a, #gcwu-sft-in .gcwu-col-head a").attr("data-theme","b");m=c('<div data-role="navbar"><ul></ul></div>');l=m.children();q.each(function(){l.append(c("<li/>").append(this))});a.footer.find("#gcwu-sft-in").replaceWith(m.children().end());a.footer.find("#gcwu-gcft").parent().remove()}else{if(a.footer.find("#gcwu-tc").length>0){q=a.footer.find("#gcwu-tc a").attr("data-theme","b");m=c('<div data-role="navbar"><ul></ul></div>');l=m.children();q.each(function(){l.append(c("<li/>").append(this))});a.footer.find("#gcwu-tc").replaceWith(m.children().end())}}a.footer.find("footer").append(c("#gcwu-wmms").detach());c(document).on("mobileinit",function(){c.mobile.ajaxEnabled=false;c.mobile.pushStateEnabled=false;if(a.menubar.length>0){a.header.find("#gcwu-psnb").parent().remove()}if(j.length>0){j.parent().remove();g.show()}});c(document).on("pageinit",function(){})}});a.polyfills()},depends:{_ind:[],is:function(d){return -1!==c.inArray(d,a.depends._ind)},put:function(d){a.depends._ind[a.depends._ind.length]=d},on:(function(){c(document).on("wet-boew-dependency-loaded",function(){var e,f;for(e=0,f=a.depends.on.length;e<f;e+=1){a.depends.on[e](e)}});return[]}())},mobile:false,mobilecheck:function(){return(window.innerWidth<768&&!(a.ie>0&&a.ie<9))},pagecontainer:function(){return c("#wb-body-sec-sup,#wb-body-sec,#wb-body").add("body").eq(0)},parameter:function(d,e){return(a.html5)?e.data(d):e.attr("class").replace("/.*"+d+"-([a-z0-9_]+).*/i","$1")},resize:function(d){ResizeEvents.initialise();ResizeEvents.eventElement.bind("x-text-resize x-zoom-resize x-window-resize",function(){d()});return},url:function(e){var d;d=document.createElement("a");d.href=e;return{source:e,protocol:d.protocol.replace(":",""),host:d.hostname,port:d.port==="0"?"80":d.port,query:d.search,params:(function(){var i,h,j,g,k,f;h={};g=d.search.replace(/^\?/,"").split("&");for(k=0,f=g.length;k<f;k+=1){i=g[k];if(i){j=i.split("=");h[j[0]]=j[1]}}return h}()),file:d.pathname.match(/\/([^\/?#]+)$/i)?d.pathname.match(/\/([^\/?#]+)$/i)[1]:"",hash:d.hash.replace("#",""),path:d.pathname.replace(/^([^\/])/,"/$1"),relative:d.href.match(/tps?:\/\/[^\/]+(.+)/)?d.href.match(/tps?:\/\/[^\/]+(.+)/)[1]:"",segments:d.pathname.replace(/^\//,"").split("/"),removehash:function(){return this.source.replace(/#([A-Za-z0-9-_=&]+)/,"")}}},_execute:function(e,f){var d=(typeof e._exec!=="undefined")?e._exec:e.exec;if(typeof e.depends!=="undefined"){a.add.js(e.depends,function(){d(f)})}else{d(f)}return},cssenabled:function(){return c("link").get(0).disabled},limit:function(e){var d;d=c(e).attr("class").match(/\blimit-\d+/);if(!d){return 0}return Number(d[0].replace(/limit-/i,""))},focus:function(d){setTimeout(function(){return(typeof d.jquery!=="undefined"?d.focus():c(d).focus())},0);return d},string:{ify:(function(){return{link:function(d){return d.replace(/[a-z]+:\/\/[a-z0-9-_]+\.[a-z0-9-_@:~%&\?\+#\/.=]+[^:\.,\)\s*$]/ig,function(e){return'<a href="'+e+'">'+((e.length>25)?e.substr(0,24)+"...":e)+"</a>"})},at:function(d){return d.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9-_]+)*)/g,function(e,g,f){return g+'@<a href="http://twitter.com/'+f+'">'+f+"</a>"})},hash:function(d){return d.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_]+)/g,function(e,g,f){return g+'#<a href="http://search.twitter.com/search?q=%23'+f+'">'+f+"</a>"})},clean:function(d){return this.hash(this.at(this.link(d)))}}}()),pad:function(e,d){var f;f=String(e);while(f.length<d){f="0"+f}return f}},date:{convert:function(e){if(e.constructor===Date){return e}if(e.constructor===Array){return new Date(e[0],e[1],e[2])}if(e.constructor===Number){return new Date(e)}if(e.constructor===String){return new Date(e)}if(typeof e==="object"){return new Date(e.year,e.month,e.date)}return NaN},compare:function(e,d){if(isFinite(e=this.convert(e).valueOf())&&isFinite(d=this.convert(d).valueOf())){return(e>d)-(e<d)}return NaN},in_range:function(f,g,e){if(isFinite(f=this.convert(f).valueOf())&&isFinite(g=this.convert(g).valueOf())&&isFinite(e=this.convert(e).valueOf())){return g<=f&&f<=e}return NaN},to_iso_format:function(g,f){var e;e=this.convert(g);if(f){return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")+" "+a.string.pad(e.getHours(),2,"0")+":"+a.string.pad(e.getMinutes(),2,"0")}return e.getFullYear()+"-"+a.string.pad(e.getMonth()+1,2,"0")+"-"+a.string.pad(e.getDate(),2,"0")}},polyfills:function(){var e=a.add.liblocation,d=(function(j){var h=j.createElement("details"),g,f,i;if(typeof h.open==="undefined"){return false}f=j.body||(function(){var k=j.documentElement;g=true;return k.insertBefore(j.createElement("body"),k.firstElementChild||k.firstChild)}());h.innerHTML="<summary>a</summary>b";h.style.display="block";f.appendChild(h);i=h.offsetHeight;h.open=true;i=i!==h.offsetHeight;f.removeChild(h);if(g){f.parentNode.removeChild(f)}return i}(document));if(!window.localStorage){a.add._load(e+"polyfills/localstorage"+a.suffix+".js")}if(typeof document.createElement("progress").position==="undefined"){a.add._load(e+"polyfills/progress"+a.suffix+".js")}if(!d){a.add._load(e+"polyfills/detailsummary"+a.suffix+".js")}},add:(function(){return{head:document.head||document.getElementsByTagName("head"),liblocation:(function(){var d=document.getElementById("progressive").src;return d.substr(0,d.lastIndexOf("/")+1)}()),staged:[],_load:function(e){var d=a.add.head;if(c.inArray(e,this.staged)>-1){return this}setTimeout(function(){if(typeof d.item!=="undefined"){if(!d[0]){setTimeout(arguments.callee,25);return}d=d[0]}var f=document.createElement("script"),g=false;a.add.set(f,"async",true);f.onload=f.onreadystatechange=function(){if((f.readyState&&f.readyState!=="complete"&&f.readyState!=="loaded")||g){return false}f.onload=f.onreadystatechange=null;g=true;a.depends.put(e);c(document).trigger({type:"wet-boew-dependency-loaded",js:e})};f.src=e;if((a.ie>0&&a.ie<9)||!d.insertBefore){c(f).appendTo(c(d))}else{d.insertBefore(f,d.firstChild)}},0);this.staged[this.staged.length]=e;return this},set:function(f,d,e){f.setAttribute(d,e);return this},css:function(f){var e=a.add.head,d=document.createElement("link");a.add.set(d,"rel","stylesheet").set(d,"href",f);if((a.ie>0&&a.ie<10)||!e.insertBefore){c(d).appendTo(c(e)).attr("href",f)}else{e.insertBefore(d,e.firstChild)}return this},depends:function(g){var f=a.add.liblocation,e=c.map(g,function(d){return(/^http(s)?/i.test(d))?d:f+"dependencies/"+d+a.suffix+".js"});return e},language:function(e){var d=a.add.liblocation+"i18n/"+e.substring(0,2)+a.suffix+".js";a.add._load(d)},js:function(f,e){var d;f=a.add.depends(f);for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){a.add._load(f[d])}}a.depends.on[a.depends.on.length]=function(g){var h=true;for(d=0;d<f.length;d+=1){if(!a.depends.is(f[d])){h=false}}if(h){a.depends.on[g]=function(){};e()}};c(document).trigger("wet-boew-dependency-loaded");return this},meta:function(e,f){var d;d=document.createElement("meta");a.add.set(d,"name",e).set(d,"content",f);a.add.head.appendChild(d);return this}}}()),dance:function(){var e,d=":not(a[href], input, button, textarea)",f=(typeof wet_boew_properties!=="undefined"&&wet_boew_properties!==null)?wet_boew_properties:false;c('[class^="wet-boew-"]').each(function(){var h,g;g=c(this);h=g.attr("class").replace(/^wet-boew-(\S*).*/i,"$1".toLowerCase());if(typeof a.fn[h]!=="undefined"){a._execute(a.fn[h],g)}});if(f){for(e=0;e<f.globals.length;e+=1){a._execute(a.fn[f.globals[e]],document)}}if(a.mobile){c("#wb-main a[href^='#']").click(function(){c("#"+c(this).attr("href").slice(1)+d).attr("tabindex","-1").focus()});a.add.css([a.add.liblocation+"../js/jquery.mobile/jquery.mobile.min.css"]);a.add._load([a.add.liblocation+"../js/jquery.mobile/jquery.mobile.min.js"])}else{c("#wb-skip a").click(function(){c("#"+c(this).attr("href").slice(1)+d).attr("tabindex","-1").focus()})}window.onresize=function(){if(a.mobile!==a.mobilecheck()){window.location.href=a.url(window.location.href).removehash()}}}};window.pe=c.extend(true,a,b);return window.pe}(jQuery))._init();(function(b){var a=window.pe||{fn:{}};a.fn.archived={type:"plugin",_exec:function(d){if(pe.mobile){return}var c=b('<div class="archived" role="toolbar"><a class="archived-top-page" href="#archived" role="link">'+pe.dic.get("%archived-page")+"</a></div>");b(window).on("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}pe.pagecontainer().append(c)}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.charts={type:"plugin",depends:["excanvas","flot"],_exec:function(i){var d,h,g,f,e,c;d=b(i);e=d.find(".chart-canvas");if(!e.hasClass("fixed-size")){e.height(Math.round(e.width()/1.61663))}c=b(i).find("table").eq(0);g=[];h=f=[];c.find("thead td, thead th").each(function(){return h.push(b(this).text())});c.find("tbody tr").each(function(){var j;j={label:"",data:[]};j.label=b(this).find("th").eq(0).text();b(this).find("td").each(function(k){return j.data.push([h[k+1],b(this).text()])});return g.push(j)});b.plot(e,g,{xaxis:{tickDecimals:0}})}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.mathlib={type:"plugin",support:(function(){var c=false,d,f,e;if(document.createElementNS){d="http://www.w3.org/1998/Math/MathML";f=document.createElement("div");f.style.position="absolute";f.style.color="#fff";e=f.appendChild(document.createElementNS(d,"math")).appendChild(document.createElementNS(d,"mfrac"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("xx"));e.appendChild(document.createElementNS(d,"mi")).appendChild(document.createTextNode("yy"));document.body.appendChild(f);c=f.offsetHeight>f.offsetWidth;f.style.display="none"}return c}()),_exec:function(c){if(pe.fn.mathlib.support){return}pe.add._load("http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML")}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.menubar={type:"plugin",depends:["resize","equalheights","hoverintent","outside"],_exec:function(k){var m,d,j,p,o,l,q,n,g,c,f,h,e;o=b(k);e=function(s){var r,i;r=b(s).closest("li");g();i=r.find(".mb-sm");i.attr("aria-expanded","true").attr("aria-hidden","false").toggleClass("mb-sm mb-sm-open");if((Math.floor(i.offset().left+i.width())-Math.floor(j.offset().left+j.width()))>=-1){i.css("right","0px")}r.addClass("mb-active");return};n=function(s){var r,i;e(s);r=b(s);i=r.closest("li").find(".mb-sm-open");pe.focus(i.find("a[href]:first"));return};c=function(s){var r,i;r=b(s).closest("li");i=r.find(".mb-sm-open");i.attr("aria-expanded","false").attr("aria-hidden","true").toggleClass("mb-sm mb-sm-open").css("right","auto");r.removeClass("mb-active");return};g=function(){d.find(".mb-sm-open").each(function(){var i;i=b(this).closest("li");return c(i)});return};q=function(){var r,i;i=d.children("li:last");r=(i.offset().top+i.outerHeight())-o.offset().top;return o.css("min-height",r)};j=o.children("div");d=j.children("ul");o.attr("role","application");d.attr("role","menubar");pe.resize(q);o.find(".mb-sm").parent().find("> :header a").on("click",function(i){if(b(this).closest("li").hasClass("mb-active")){c(this)}else{e(this)}return false});o.on("keydown focus section-next section-previous item-next item-previous close","li",function(w){var u,z,y,v,x,r,t,s,i;z=b(w.target);y=b.map(/\bknav-(\d+)-(\d+)-(\d+)/.exec(z.attr("class")),function(A){return parseInt(A,10)});if(w.type==="keydown"){if(!(w.ctrlKey||w.altKey||w.metaKey)){switch(w.keyCode){case 13:if(y[2]===0&&y[3]===0){z.trigger("item-next");return false}break;case 27:z.trigger("close");return false;case 32:if(y[2]===0&&y[3]===0){z.trigger("item-next")}else{window.location=z.attr("href")}return false;case 37:z.trigger("section-previous");return false;case 38:z.trigger("item-previous");return false;case 39:z.trigger("section-next");return false;case 40:z.trigger("item-next");return false;default:if((w.keyCode>47&&w.keyCode<58)||(w.keyCode>64&&w.keyCode<91)){v=String.fromCharCode(w.keyCode).toLowerCase();x=(y[2]!==0||y[3]!==0);r=z.text();t=d.find(".mb-sm-open a").filter(function(A){return(b(this).text().substring(0,1).toLowerCase()===v||(x&&b(this).text()===r))});if(t.length>0){if(x){t.each(function(A){if(b(this).text()===r){s=A;return false}});if(s<(t.length-1)){t.eq(s+1).focus();return false}}t.eq(0).focus()}return false}}}}else{if(w.type==="close"){pe.focus(o.find(".knav-"+y[1]+"-0-0"));setTimeout(function(){return g()},5)}else{if(w.type==="section-previous"){i=!!y[2]<<1|!!y[3];switch(i){case 0:case 1:u=o.find(".knav-"+(y[1]-1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}break;case 2:case 3:u=o.find(".knav-"+(y[1])+"-"+(y[2]-1)+"-0");if(u.length>0&&y[2]>1){pe.focus(u)}else{u=o.find(".knav-"+(y[1]-1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find("ul.mb-menu > li:last").find("a:eq(0)"))}}break}}else{if(w.type==="section-next"){i=!!y[2]<<1|!!y[3];switch(i){case 0:case 1:u=o.find(".knav-"+(y[1]+1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-0-0-0"))}break;case 2:case 3:u=o.find(".knav-"+(y[1])+"-"+(y[2]+1)+"-0");if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+(y[1]+1)+"-0-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-0-0-0"))}}break}}else{if(w.type==="item-next"){u=o.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]+1));if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+y[1]+"-"+(y[2]+1)+"-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-"+y[1]+"-0-0"))}}}else{if(w.type==="item-previous"){u=o.find(".knav-"+y[1]+"-"+(y[2])+"-"+(y[3]-1));if(u.length>0){pe.focus(u)}else{u=o.find(".knav-"+y[1]+"-"+(y[2]-1)+"-0");if(u.length>0){pe.focus(u)}else{pe.focus(o.find(".knav-"+y[1]+"-0-0"))}}}else{if(w.type==="focusin"&&y[2]===0&&y[3]===0){g();if(z.find(".expandicon").length>0){e(w.target)}return}}}}}}}});b(document).on("click",function(){o.trigger("focusoutside")});o.on("focusoutside",function(){return g()});o.find("ul.mb-menu > li").find("a:eq(0)").each(function(r,t){var s,i;i=b(t);i.addClass("knav-"+r+"-0-0");s=i.closest("li").find(".mb-sm");if(s.size()>0){i.attr("aria-haspopup","true").addClass("mb-has-sm").wrapInner('<span class="expandicon"><span class="sublink"></span></span>');s.attr("role","menu").attr("aria-expanded","false").attr("aria-hidden","true").find(":has(:header) ul").attr("role","menu");i.append('<span class="wb-invisible">'+(pe.dic.get("%sub-menu-help"))+"</span>");i.closest("li").hoverIntent(function(){return e(this)},function(){return c(this)});s.find("h4 a").each(function(u){b(this).addClass("knav-"+r+"-"+(u+1)+"-0");b(this).parent().next("ul").find("a").each(function(v){b(this).addClass("knav-"+r+"-"+(u+1)+"-"+(v+1));return});return});s.find("ul").not(function(){return(b(this).prev("h4").length?true:false)}).find("a").each(function(u){b(this).addClass("knav-"+r+"-0-"+(u+1))})}});if(pe.cssenabled){d.find("a").attr("role","menuitem").attr("tabindex","-1");d.find(".knav-0-0-0").attr("tabindex","0")}l=b("#gcwu-bc, #cn-bcrumb");if(l.size()>0&&!o.hasClass("page-match-off")){p=d.children("li").find('a[href="'+window.location.pathname+'"]');if(p.size()>0){p.eq(0).addClass("nav-current")}else{h=false;m=l.find('li a:not([href^="#"])');if(m.size()>0){f=0;while(f<=m.size()){p=d.children("li").find('a[href="'+m.eq(f).attr("href")+'"]');if(p.size()>0){p.eq(0).addClass("nav-current");h=true;break}f+=1}}if(!h){p=d.children("li").find('a:contains("'+l.find("li:last-child").text()+'")');if(p.size()>0){p.eq(0).addClass("nav-current")}}}}q();return o}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.share={type:"plugin",depends:["bookmark"],_exec:function(g){var c=b(g),d,e,f;d={url:c.attr("data-url")?c.attr("data-url"):"",sourceTag:c.attr("data-source-tag")?c.attr("data-source-tag"):"",title:c.attr("data-title")?c.attr("data-title"):"",description:c.attr("data-description")?c.attr("data-description"):"",sites:[],iconsStyle:c.hasClass("icons-none")?"":"bookmark_icons",icons:c.hasClass("icons-none")?"":"bookmarks.png",compact:c.hasClass("compact"),hint:pe.dic.get("%share-hint"),popup:!c.hasClass("popup-none"),popupText:pe.dic.get("%share-text"),hideText:(pe.dic.get("%hide")+" - "),addFavorite:c.hasClass("favourite"),favoriteText:pe.dic.get("%favourite"),addEmail:c.hasClass("email"),emailText:pe.dic.get("%email"),emailSubject:pe.dic.get("%share-email-subject"),emailBody:pe.dic.get("%share-email-body"),manualBookmark:pe.dic.get("%share-manual"),addShowAll:c.hasClass("showall"),showAllText:"Show all ({n})",showAllTitle:"All bookmarking sites",addAnalytics:c.hasClass("analytics"),analyticsName:c.attr("data-analytics-name")?c.attr("data-analytics-name"):"/share/{r}/{s}"};c.bookmark(d);e=c.find(".bookmark_popup").append(c.find(".bookmark_popup_text").clone().css("float","right").css("margin","5px")).attr("id","bookmark_popup").attr("aria-hidden","true").prepend('<p class="popup_title">'+pe.dic.get("%share-statement")+"</p>");f=c.find(".bookmark_popup_text").off("click");f.attr("role","button").attr("aria-controls","bookmark_popup").attr("aria-pressed","false").on("click keydown",function(h){if(h.type==="click"||(h.type==="keydown"&&!(h.ctrlKey||h.altKey||h.metaKey)&&(h.keyCode===13||h.keyCode===32))){if(b(h.target).attr("aria-pressed")==="false"){e.trigger("open")}else{e.trigger("close")}return false}});e.on("keydown open close",function(h){if(h.type==="keydown"){if(!(h.ctrlKey||h.altKey||h.metaKey)){switch(h.keyCode){case 27:e.trigger("close");return false}}}else{if(h.type==="open"){f.text(d.hideText+d.popupText).attr("aria-pressed","true");e.show().attr("aria-hidden","false")}else{if(h.type==="close"){pe.focus(f.text(d.popupText).attr("aria-pressed","false").eq(0));e.hide().attr("aria-hidden","true")}}}});b(document).on("click",function(h){e.trigger("close")});return c}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.tabbedinterface={type:"plugin",depends:["easytabs","equalheights"],mobile:function(h){var d,g,f,e,c;d=h.find(".tabs li > a");g=h.find(".tabs-panel").children();f=b('<div data-role="collapsible-set"/>');for(e=0;e<d.length;e+=1){c=b('<div data-role="collapsible" data-theme="b" data-content-theme="b"/>');c.append("<h1>"+d.eq(e).text()+"</h1>");c.append(g.eq(e).html());if(d.eq(e).parent().hasClass("default")){c.attr("data-collapsed","false")}f.append(c)}h.replaceWith(f);return h},_exec:function(m){if(pe.mobile){return a.fn.tabbedinterface.mobile(m)}var j,w,n,d,h,t,o,p,e,c,l,u,q,v,i,k,f,g,r,s;p={panelActiveClass:"active",tabActiveClass:"active",defaultTab:((m.find(".default").length)?".default":"li:first-child"),autoHeight:(m.hasClass("auto-height-none")?false:true),cycle:(m.hasClass("cycle-slow")?8000:(m.hasClass("cycle-fast")?2000:(m.hasClass("cycle")?6000:false))),carousel:(/style-carousel/i.test(m.attr("class")))?true:false,autoPlay:(m.hasClass("auto-play")?true:false),animate:(m.hasClass("animate")||m.hasClass("animate-slow")||m.hasClass("animate-fast")?true:false),animationSpeed:(m.hasClass("animate-slow")?"slow":(m.hasClass("animate-fast")?"fast":"normal")),updateHash:false};w=m.find(".tabs");d=w.find("li > a");n=m.find(".tabs-panel").children();j=(w.find(".default").length>0?w.find(".default"):w.find("li:first-child"));w.attr("role","tablist");w.find("li").each(function(){b(this).attr("role","presentation");return b(this).children("a").each(function(){return b(this).attr("role","tab").attr("aria-selected","false").attr("id",b(this).attr("href").substring(1)+"-link").bind("click",function(){b(this).parent().parent().children("."+p.tabActiveClass).children("a").each(function(){b(this).attr("aria-selected","false");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","true")});b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")})})});n.each(function(){return b(this).attr("role","tabpanel").attr("aria-hidden","true").attr("aria-labelledby",b('a[href*="#'+b(this).attr("id")+'"]').attr("id"))});j.children("a").each(function(){b(this).attr("aria-selected","true");return b("#"+b(this).attr("href").substring(1)).attr("aria-hidden","false")});w.find("li a").bind("focus",function(){n.stop(true,true);b(this).click()});w.find("li a").keydown(function(y){if(y.keyCode===13||y.keyCode===32){var x=n.filter(function(){return b(this).is("."+p.tabActiveClass)});x.attr("tabindex","0");if(y.stopPropagation){y.stopImmediatePropagation()}else{y.cancelBubble=true}return setTimeout(function(){return x.focus()},0)}});m.keydown(function(x){if(x.which===37||x.which===38){c(d,n,p,false);x.preventDefault()}else{if(x.which===39||x.which===40){e(d,n,p,false);x.preventDefault()}}});c=function(x,D,C,B){var A,y,z;D.stop(true,true);A=x.filter(function(){return b(this).is("."+C.tabActiveClass)});y=x.eq((x.index(A)-1)+x.size()%x.size());if(C.animate){D.filter("."+C.panelActiveClass).removeClass(C.panelActiveClass).attr("aria-hidden","true").fadeOut(C.animationSpeed,function(){return D.filter("#"+y.attr("href").substr(1)).fadeIn(C.animationSpeed,function(){return b(this).addClass(C.panelActiveClass).attr("aria-hidden","false")})})}else{D.removeClass(C.panelActiveClass).attr("aria-hidden","true").hide();D.filter("#"+y.attr("href").substr(1)).show().addClass(C.panelActiveClass).attr("aria-hidden","false")}x.parent().removeClass(C.tabActiveClass).children().removeClass(C.tabActiveClass).filter("a").attr("aria-selected","false");y.parent().addClass(C.tabActiveClass).children().addClass(C.tabActiveClass).filter("a").attr("aria-selected","true");z=A.parent().siblings(".tabs-toggle");if(!B&&(z.length===0||z.data("state")==="stopped")){return y.focus()}};e=function(x,D,C,B){var A,y,z;D.stop(true,true);A=x.filter(function(){return b(this).is("."+C.tabActiveClass)});y=x.eq((x.index(A)+1)%x.size());if(C.animate){D.filter("."+C.panelActiveClass).removeClass(C.panelActiveClass).attr("aria-hidden","true").fadeOut(C.animationSpeed,function(){return D.filter("#"+y.attr("href").substr(1)).fadeIn(C.animationSpeed,function(){return b(this).addClass(C.panelActiveClass).attr("aria-hidden","false")})})}else{D.removeClass(C.panelActiveClass).attr("aria-hidden","true").hide();D.filter("#"+y.attr("href").substr(1)).show().addClass(C.panelActiveClass).attr("aria-hidden","false")}x.parent().removeClass(C.tabActiveClass).children().removeClass(C.tabActiveClass).filter("a").attr("aria-selected","false");y.parent().addClass(C.tabActiveClass).children().addClass(C.tabActiveClass).filter("a").attr("aria-selected","true");z=A.parent().siblings(".tabs-toggle");if(!B&&(z.length===0||z.data("state")==="stopped")){return y.focus()}};v=function(){if(t.data("state")==="stopped"){e(d,n,p,true);o(d,n,p);h.removeClass(l["class"]).addClass(u["class"]).html(u.text+"<span class='wb-invisible'>"+u["hidden-text"]+"</span>").attr("aria-pressed",true);return b(".wb-invisible",h).text(u["hidden-text"])}if(t.data("state")==="started"){return q()}};if(p.autoHeight&&!m.hasClass("tabs-style-4")&&!m.hasClass("tabs-style-5")){n.show();b(".tabs-panel",m).equalHeights(true)}m.easytabs(b.extend({},p,{cycle:false}));if(p.cycle){o=function(x,A,z){var y,B;y=x.filter(function(){return b(this).is("."+z.tabActiveClass)});B=y.siblings(".tabs-roller");m.find(".tabs-toggle").data("state","started");return B.show().animate({width:y.parent().width()},z.cycle-200,"linear",function(){b(this).width(0).hide();e(x,A,z,true);return m.data("interval",setTimeout(function(){return o(x,A,z)},0))})};q=function(){clearTimeout(m.data("interval"));m.find(".tabs-roller").width(0).hide().stop();m.find(".tabs-toggle").data("state","stopped");h.removeClass(u["class"]).addClass(l["class"]).html(l.text+"<span class='wb-invisible'>"+l["hidden-text"]+"</span>").attr("aria-pressed",false);return b(".wb-invisible",h).text(l["hidden-text"])};i=b("<li class='tabs-toggle'>");r={"class":"tabs-prev",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%previous")};f=b("<a class='"+r["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+r.text+"<span class='wb-invisible'>"+r["hidden-text"]+"</span></a>");w.append(i.append(f));f.click(function(){c(d,n,p,true)});k=b("<li class='tabs-toggle'>");s={"class":"tabs-next",text:"&nbsp;&nbsp;&nbsp;","hidden-text":pe.dic.get("%next")};g=b("<a class='"+s["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+s.text+"<span class='wb-invisible'>"+s["hidden-text"]+"</span></a>");w.append(k.append(g));g.click(function(){e(d,n,p,true)});t=b("<li class='tabs-toggle'>");u={"class":"tabs-stop",text:pe.dic.get("%stop"),"hidden-text":pe.dic.get("%tab-rotation","disable")};l={"class":"tabs-start",text:pe.dic.get("%play"),"hidden-text":pe.dic.get("%tab-rotation","enable")};h=b("<a class='"+u["class"]+"' href='javascript:;' role='button' aria-pressed='true'>"+u.text+"<span class='wb-invisible'>"+u["hidden-text"]+"</span></a>");w.append(t.append(h));t.click(v).bind("keydown",function(x){if(x.keyCode===32){v();return x.preventDefault()}});w.find("li a").not(t.find("a")).click(function(){return q()});d.each(function(){var x;x=b('<div class="tabs-roller">').hide().click(function(){return b(this).siblings("a").click()}).hover(function(){return b(this).css("cursor","text")});if(b.browser.msie&&b.browser.version<8){b(".tabs-style-2 .tabs, .tabs-style-2 .tabs li").css("filter","")}return b(this).parent().append(x)});o(d,n,p);if(!p.autoPlay){q()}}m.find('a[href^="#"]').each(function(){var x,y;y=b(this).attr("href");if(y.length>1){x=b(y,n);if(x.length){return b(this).click(function(B){var z,A;z=x.parents('[role="tabpanel"]:hidden');if(z){B.preventDefault();A=z.attr("id");z.parent().siblings(".tabs").find('a[href="#'+A+'"]').click();return x.get(0).scrollIntoView(true)}})}}});return m.attr("class",m.attr("class").replace(/\bwidget-style-/,"style-"))}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.texthighlight={type:"plugin",_exec:function(f){var e,d=pe.url(document.location).params||"";function c(j,m){var g,l,h,k=0;j=j.replace(/^\s+|\s+$/g,"");j=j.replace(/\|+/g,"");g=j.split("+");if(g.length>0){j="";for(h=0;h<g.length;h+=1){j+=g[h]+" "}j=j.replace(/^\s+|\s+$|\"|\(|\)/g,"")}j=j.replace(/\s+/g,"|");j=decodeURIComponent(j);j="(?=([^>]*<))([\\s'])?("+j+")(?!>)";l=m.html().replace(new RegExp(j,"gi"),function(p,o,n,i){return n+'<span class="texthighlight"><mark>'+i+"</mark></span>"});m.html(l);return null}if(d.texthighlight!==null){c(d.texthighlight,f)}return this}};window.pe=a;return a}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.toolbar={scope:"plugin",_exec:function(d){var c=b('<div class="wet-boew-toolbar" role="toolbar"><ul><li class="toolbar-top-page"> <a href="#wb-tphp" role="link">'+pe.dic.get("%top-of-page")+"</a> </li></ul></div>");b("#wb-body-sec-sup, #wb-body-sec, #wb-body").add("body").first().append(c);c.hide();b(window).bind("scroll",function(){if(b(this).scrollTop()>10){c.fadeIn("normal").attr("aria-hidden","false")}else{c.fadeOut("normal").attr("aria-hidden","true")}});if(b(window).scrollTop()<10||b(window).scrollTop()==="undefined"){c.fadeOut("normal").attr("aria-hidden","true")}else{c.fadeIn("normal").attr("aria-hidden","false")}}};window.pe=b.extend(true,window.pe,a);return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.webwidget={type:"plugin",twitter:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.created_at.replace("+0000 ","")+" GMT",k.created_at.replace("+0000 ","")+" GMT")});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a class="float-left" href="http://www.twitter.com/';c+=f[g].user.name+"/status/"+f[g].user.id+'"><img class="widget-avatar" src="'+f[g].user.profile_image_url+'" /></a> ';c+=pe.string.ify.clean(f[g].text);c+=' <span class="widget-datestamp-accent">'+pe.dic.ago(f[g].created_at)+"</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},_json_request:function(c){if(c.toLowerCase().indexOf("!/search/")>-1){return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/search\/(.+$)/,function(g,f,e,d){return"http://search.twitter.com/search.json?q="+encodeURI(decodeURI(f))})}return c.replace("http://","https://").replace(/https:\/\/twitter.com\/#!\/(.+$)/i,function(g,f,e,d){return"http://twitter.com/status/user_timeline/"+encodeURI(decodeURI(f))+".json?callback=?"})},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.length){c.push(l[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d}},weather:{_parse_entries:function(d,e,f){var c;c='<ul class="widget-content">';c+='<li><a href="'+d[1].link+'">'+d[1].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(d[1].publishedDate,true)+"]</span></li>";c+="</ul>";return f.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;d=d.replace(/^.*?\.gc\.ca\/([a-z]+).+\/(.*?)_[a-z]+_([ef])\.html/i,"http://www.weatheroffice.gc.ca/rss/$1/$2_$3.xml");e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},rss:{_parse_entries:function(d,e,j){var h,g,c,f;h=(e>0&&e<d.length?e:d.length);f=d.sort(function(k,i){return pe.date.compare(i.publishedDate,k.publishedDate)});c='<ul class="widget-content">';g=0;while(g<h){c+='<li><a href="'+f[g].link+'">'+f[g].title+'</a><span class="widget-datestamp">['+pe.date.to_iso_format(f[g].publishedDate,true)+"]</span></li>";g+=1}c+="</ul>";return j.replaceWith(c)},exec:function(j,e,k){var c,g,h,f,d;h=j.length-1;c=[];f=this._parse_entries;g=j.length-1;d=[];while(g>=0){b.getJSON(this._json_request(j[g]),function(l){var i;i=0;while(i<l.responseData.feed.entries.length){c.push(l.responseData.feed.entries[i]);i+=1}if(!h){f(c,e,k)}h-=1;return h});d.push(g-=1)}return d},_json_request:function(d,c){var e;e="http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURI(decodeURI(d));if(c>0){e+="&num="+c}return e}},_exec:function(h,g){var f,d,c,e;f=b(h);e=pe.limit(f);c=f.find("a").map(function(){var i;i=b(this).attr("href");if(!g&&/twitter.com/i.test(i)){g="twitter"}if(!g&&/weatheroffice.gc.ca/i.test(i)){g="weather"}if(!g){g="rss"}return b(this).attr("href")});d=b('<ul class="widget-content"><li class="widget-state-loading"><img src="'+pe.add.liblocation+'/images/webfeeds/ajax-loader.gif" alt="'+pe.dic.get("%loading")+'" /></li></ul>');f.find(".widget-content").replaceWith(d);b.extend({},a.fn.webwidget[g]).exec(c,e,d);return}};window.pe=a;return window.pe}(jQuery));(function(b){var a=window.pe||{fn:{}};a.fn.zebra={type:"plugin",_exec:function(f){var c,d,e;if(f.is("table")){c=(f.children("tr").add(f.children("tbody").children("tr"))).filter(function(){return b(this).children("td").length>0});c.filter(":odd").addClass("table-even");c.filter(":even").addClass("table-odd");c.on("hover focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("table-hover")})}else{d=f.children("li");e=(f.parents("li").length+1)%2;d.filter(":odd").addClass(e===0?"list-odd":"list-even");d.filter(":even").addClass(e===1?"list-odd":"list-even");d.on("mouseover mouseout focusin focusout",function(g){g.stopPropagation();b(this).toggleClass("list-hover")})}}};window.pe=a;return a}(jQuery));