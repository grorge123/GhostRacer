(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{449:function(e,t,i){"use strict";i.r(t),i.d(t,"amplify_federated_sign_in",(function(){return r}));var a=i(16),n=i(63),d=i(39),o=i(141),s=i(29),f=new n.a("amplify-federated-sign-in"),r=function(){function e(e){Object(a.k)(this,e),this.authState=d.a.SignIn,this.federated={}}return e.prototype.componentWillLoad=function(){if(!o.a||"function"!=typeof o.a.configure)throw new Error(s.d);var e=o.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))},e.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(a.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(a.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(a.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},e}()}}]);
//# sourceMappingURL=21.bundle.js.map