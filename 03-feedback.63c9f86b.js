!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e,t,n){var r,o,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function x(e){return l=e,f=setTimeout(O,t),d?b(e):a}function S(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=y();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?b(e):(r=o=void 0,a)}function w(){var e=y(),n=S(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return x(c);if(s)return f=setTimeout(O,t),b(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=j(t)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},w.flush=function(){return void 0===f?a:h(y())},w}function g(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(g(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=a.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:r,maxWait:t,trailing:o})};var x={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")},S="feedback-form-state",O={};x.form.addEventListener("input",e(t)((function(){O[x.input.name]=x.input.value,O[x.textarea.name]=x.textarea.value,localStorage.setItem(S,JSON.stringify(O))}),1e3)),x.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(S)})),function(){var e=JSON.parse(localStorage.getItem(S));if(null===e)return;x.textarea.value=e.message||"",x.input.value=e.email||""}()}();
//# sourceMappingURL=03-feedback.63c9f86b.js.map