(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{463:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_s3_text",(function(){return h}));var n=r(16),o=r(63),i=r(9),a=r(157),c=r(8),l=(r(29),r(509),r(511)),u=function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(t){i(t)}}function c(t){try{l(n.throw(t))}catch(t){i(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,c)}l((n=n.apply(t,e||[])).next())}))},s=function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},f=new o.a("S3Text"),h=function(){function t(t){Object(n.k)(this,t),this.contentType="text/*",this.level=a.a.Public,this.fallbackText=c.a.TEXT_FALLBACK_CONTENT}return t.prototype.watchHandler=function(){return u(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.componentWillLoad=function(){return u(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.load()];case 1:return t.sent(),[2]}}))}))},t.prototype.load=function(){return u(this,void 0,void 0,(function(){var t,e,r,n,o,i,a,c,u,h,p;return s(this,(function(s){switch(s.label){case 0:return e=(t=this).path,r=t.textKey,n=t.body,o=t.contentType,i=t.level,a=t.track,c=t.identityId,r||e?(u=r||e,f.debug("loading "+u+"..."),n?[4,Object(l.e)(r,n,i,a,o,f)]:[3,2]):(f.debug("empty textKey and path"),[2]);case 1:s.sent(),s.label=2;case 2:return s.trys.push([2,4,,5]),h=this,[4,Object(l.a)(u,i,a,c,f)];case 3:return h.src=s.sent(),[3,5];case 4:throw p=s.sent(),f.debug(p),new Error(p);case 5:return[2]}}))}))},t.prototype.render=function(){return Object(n.i)("div",null,Object(n.i)("div",{class:"text-container"},this.src?Object(n.i)("pre",null,this.src):Object(n.i)("pre",null,i.a.get(this.fallbackText))))},Object.defineProperty(t,"watchers",{get:function(){return{textKey:["watchHandler"],body:["watchHandler"]}},enumerable:!1,configurable:!0}),t}();h.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"}}]);
//# sourceMappingURL=33.bundle.js.map