(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JLoA:function(n,e,t){n.exports=t.p+"static/phone-ios-ac683f3a41bf4577b27cd23b000c8047.png"},PA6t:function(n,e,t){n.exports=t.p+"static/phone-android-dc613b0f8daec3e5f2dd7418894b390c.png"},RXBc:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),o=t.n(a),r=t("nDcO"),c=(t("VRzm"),t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("KKXr"),t("TSYQ")),i=t.n(c),s=t("qkX5"),u=t("+e4l");t("HEwt"),t("a1Th"),t("rE2o"),t("ioFf");function l(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p=function(n){for(var e=l(n),t=n.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),o=[e[a],e[t]];e[t]=o[0],e[a]=o[1]}return e},f=function(n){return new Promise((function(e){var t=new Image;t.addEventListener("load",(function(){e(t)})),t.src=n}))},d=t("mP2M"),m=t.n(d),g=t("JLoA"),v=t.n(g),b=t("PA6t"),h=t.n(b),L=function(n){var e,t,r,c=n.sloganDuration,l=n.slogans,d=n.appLinks,g=Object(a.useState)((function(){return p(l)}))[0],b=Object(a.useState)(!0),L=b[0],y=b[1],E=Object(a.useRef)(0),O=g[E.current].split("\n"),k=Object(a.useState)(null),w=k[0],A=k[1],j=Object(a.useRef)(null);return Object(a.useEffect)((function(){var n=!0;return Promise.all([f(v.a),f(h.a)]).then((function(){n&&y(!1)})),function(){n=!1}}),[]),Object(a.useEffect)((function(){if(!L){var n=setTimeout((function(){A("Out")}),c);return function(){clearTimeout(n)}}}),[L,c]),Object(a.useEffect)((function(){if(j.current!==w){var n,e;j.current=w,"In"===w?(n="Active",e=400):"Active"===w?(n="Out",e=c):"Out"===w&&(n="In",e=800);var t=setTimeout((function(){"Out"===w&&(E.current=E.current>=g.length-1?0:E.current+1),A(n)}),e);return function(){clearTimeout(t)}}}),[w,c,E,g.length]),o.a.createElement("div",{className:m.a.root},o.a.createElement(u.a,{className:m.a.container},o.a.createElement("div",{className:i()([m.a.slogan,(e={},e[m.a.sloganIn]=L,e[m.a["slogan"+w]]=w,e)])},O.map((function(n){return o.a.createElement("div",{key:n},n)}))),o.a.createElement(s.a,{className:i()([m.a.appLinks,(t={},t[m.a.appLinksHidden]=L,t),"d-md-none"]),appLinks:d})),o.a.createElement("div",{className:i()([m.a.product,(r={},r[m.a.productHidden]=L,r)])},o.a.createElement("div",{className:m.a.productAndroid}),o.a.createElement("div",{className:m.a.productIos})))};L.defaultProps={sloganDuration:6e3};var y=L;e.default=function(){var n={description:"Applications for anonymous story publishing and discussion",appLinks:{appStore:"https://apple.com",googlePlay:"https://google.com"},footerLogoLink:"https://yandex.ru",sloganDuration:6e3,slogans:["Keep calm\n                you are\n                anonymous","Keep calm\n                & discuss other\n                people's stories","Keep calm\n                & Write your\n                own story"]};return o.a.createElement(r.a,{description:n.description,appLinks:n.appLinks,footerLogoLink:n.footerLogoLink},o.a.createElement(y,{sloganDuration:n.sloganDuration,appLinks:n.appLinks,slogans:n.slogans}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fe24f780ece70bcf631c.js.map