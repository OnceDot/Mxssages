!function(t){function e(e){for(var r,c,i=e[0],l=e[1],u=e[2],f=0,p=[];f<i.length;f++)c=i[f],o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(s&&s(e);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var s=l;a.push([13,1]),n()}({13:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(2),c=n.n(a);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=u(this,s(e).call(this,t))).input=o.a.createRef(),n}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"col col-3 p-3"},o.a.createElement("div",{className:"col-title"},"Contacts"),o.a.createElement("input",{className:"hide",type:"file",onChange:this.props.onImportContacts,ref:this.input}),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){return t.input.current.click()}},"Importer conversation"),this.props.contactList.map(function(e,n){return o.a.createElement("li",{key:n,onClick:function(){return t.props.onSelectContact(e)}},e.members[0].username)})))}}])&&l(n.prototype,a),c&&l(n,c),e}();function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,d(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){var t=this;return this.props.contact?o.a.createElement("div",{className:"col col-6 p-3"},o.a.createElement("div",{className:"col-title"},"Conversation"),o.a.createElement("ul",null,this.props.contact.messages.map(function(e,n){return o.a.createElement("li",{key:n,className:"message-wrapper"},o.a.createElement("div",{className:t.getClasses(e)},e.content))}))):null}},{key:"getClasses",value:function(t){return this.checkAuthor(t)?"message-content message-own":"message-content"}},{key:"checkAuthor",value:function(t){return this.props.contact.members[1].id===t.author}}])&&y(n.prototype,a),c&&y(n,c),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function E(t){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var _=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),O(this,E(e).apply(this,arguments))}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){return this.props.contact?o.a.createElement("div",{className:"col col-3 p-3"},o.a.createElement("div",{className:"col-title"},"Infos"),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"detail-title"},"Contact"),o.a.createElement("div",{className:"detail-value"},this.props.contact.members[0].username)),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"detail-title"},"Messages"),o.a.createElement("div",{className:"detail-value"},this.props.contact.messages.length)),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"detail-title"},"Messages auteur"),o.a.createElement("div",{className:"detail-value"},0)),o.a.createElement("div",{className:"detail"},o.a.createElement("div",{className:"detail-title"},"Messages répondant"),o.a.createElement("div",{className:"detail-value"},0))):null}}])&&w(n.prototype,a),c&&w(n,c),e}();function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return!e||"object"!==j(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var N=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=C(this,P(e).call(this,t))).state={contactList:[],contact:null},n}var n,a,c;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(e,r["Component"]),n=e,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement(p,{contactList:this.state.contactList,onSelectContact:this.onSelectContact.bind(this),onImportContacts:this.onImportContacts.bind(this)}),o.a.createElement(v,{contact:this.state.contact}),o.a.createElement(_,{contact:this.state.contact}))}},{key:"onImportContacts",value:function(t){var e=this,n=new FileReader;n.onload=function(){return e.setState({contactList:[JSON.parse(n.result)]})},n.readAsText(t.target.files[0])}},{key:"onSelectContact",value:function(t){this.setState({contact:t})}}])&&k(n.prototype,a),c&&k(n,c),e}();n(8);c.a.render(o.a.createElement(N,null),document.getElementById("root"))},8:function(t,e,n){var r=n(9);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(11)(r,o);r.locals&&(t.exports=r.locals)},9:function(t,e,n){(t.exports=n(10)(!1)).push([t.i,"* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\tfont-family: 'Roboto', sans-serif;\n\toverflow: hidden;\n\theight: 100vh;\n\tmargin: 0;\n\tcolor: #fff;\n}\n\n/**\n* SCROLLBAR\n**/\n\n::-webkit-scrollbar {\n\tbackground-color: #23272A;\n    width: 0.5rem;\n}\n\n::-webkit-scrollbar-thumb  {\n\tborder-radius: 2px;\n\tbackground-color: #9ee433;\n}\n\n/**\n* GRID\n**/\n\n.row {\n\tdisplay: flex;\n\theight: 100%;\n}\n\n.col {\n\tbox-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;\n\tbackground-color: #2C2F33;\n\toverflow-x: hidden;\n\toverflow-y: auto;\n\theight: 100vh;\n}\n\n.col-title {\n\tbackground-color: #23272A;\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n\tpadding: 1.25rem;\n}\n\n.col-3 {\n\tflex: 25%;\n}\n\n.col-6 {\n\tflex: 50%;\n}\n\n/**\n* LIST\n**/\n\nul {\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n}\n\nli {\n\tcursor: pointer;\n\ttransition: background-color .5s;\n\tpadding: 0.75rem 1.25rem;\n}\n\nli:hover {\n\tbackground-color: #9ee433;\n}\n\n.message-wrapper {\n\toverflow: hidden;\n    width: 100%;\n}\n\n.message-content {\n\tbackground-color: #23272a;\n\tborder-radius: 2px;\n\tmax-width: 75%;\n\tpadding: 0.75rem 1rem;\n}\n\n.message-own {\n\tbackground-color: #9ee433;\n\tfloat: right;\n}\n\n.right::after {\n\tcontent: '';\n\tclear: both;\n}\n\n.detail {\n\tdisplay: flex;\n\tpadding: 0.75rem 1.25rem;\n\tfont-size: .85rem;\n\tcolor: #99AAB5;\n}\n\n.detail-title {\n\ttext-transform: uppercase;\n\tfont-weight: 700;\n}\n\n.detail-value {\n\tmargin-left: auto;\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.btn {\n\tpadding: 1.25rem 2rem;\n\twidth: 100%;\n\tborder: 0;\n}",""])}});