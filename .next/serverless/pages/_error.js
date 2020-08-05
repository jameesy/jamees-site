module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "KOk9");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/F5":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/api-utils");

/***/ }),

/***/ "/a9y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

const statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps({
  res,
  err
}) {
  const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


class Error extends _react.default.Component {
  render() {
    const {
      statusCode
    } = this.props;
    const title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
    return /*#__PURE__*/_react.default.createElement("div", {
      style: styles.error
    }, /*#__PURE__*/_react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("title", null, statusCode, ": ", title)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: 'body { margin: 0 }'
      }
    }), statusCode ? /*#__PURE__*/_react.default.createElement("h1", {
      style: styles.h1
    }, statusCode) : null, /*#__PURE__*/_react.default.createElement("div", {
      style: styles.desc
    }, /*#__PURE__*/_react.default.createElement("h2", {
      style: styles.h2
    }, title, "."))));
  }

}

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
const styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

/***/ }),

/***/ "/y8f":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/router");

/***/ }),

/***/ "01KS":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/lib/path-match");

/***/ }),

/***/ "0mNJ":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(r,e){"use strict";var n={};function __webpack_require__(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,__webpack_require__);t.l=true;return t.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(148)}return startup()}({148:function(r){"use strict";var e=function(r){var e=r.ignoreProcessEnv?{}:process.env;var n=function(t){var s=t.match(/(.?\${?(?:[a-zA-Z0-9_]+)?}?)/g)||[];return s.reduce(function(t,s){var a=/(.?)\${?([a-zA-Z0-9_]+)?}?/g.exec(s);var u=a[1];var _,o;if(u==="\\"){o=a[0];_=o.replace("\\$","$")}else{var i=a[2];o=a[0].substring(u.length);_=e.hasOwnProperty(i)?e[i]:r.parsed[i]||"";_=n(_)}return t.replace(o,_)},t)};for(var t in r.parsed){var s=e.hasOwnProperty(t)?e[t]:r.parsed[t];r.parsed[t]=n(s)}for(var a in r.parsed){e[a]=r.parsed[a]}return r};r.exports=e}});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "10NG":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(n,r){"use strict";var t={};function __webpack_require__(r){if(t[r]){return t[r].exports}var c=t[r]={i:r,l:false,exports:{}};n[r].call(c.exports,c,c.exports,__webpack_require__);c.l=true;return c.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(548)}return startup()}({548:function(n,r,t){const c=t(747);const s=t(622);function log(n){console.log(`[dotenv][DEBUG] ${n}`)}const o="\n";const f=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;const p=/\\n/g;const e=/\n|\r|\r\n/;function parse(n,r){const t=Boolean(r&&r.debug);const c={};n.toString().split(e).forEach(function(n,r){const s=n.match(f);if(s!=null){const n=s[1];let r=s[2]||"";const t=r.length-1;const f=r[0]==='"'&&r[t]==='"';const e=r[0]==="'"&&r[t]==="'";if(e||f){r=r.substring(1,t);if(f){r=r.replace(p,o)}}else{r=r.trim()}c[n]=r}else if(t){log(`did not match key and value when parsing line ${r+1}: ${n}`)}});return c}function config(n){let r=s.resolve(process.cwd(),".env");let t="utf8";let o=false;if(n){if(n.path!=null){r=n.path}if(n.encoding!=null){t=n.encoding}if(n.debug!=null){o=true}}try{const n=parse(c.readFileSync(r,{encoding:t}),{debug:o});Object.keys(n).forEach(function(r){if(!Object.prototype.hasOwnProperty.call(process.env,r)){process.env[r]=n[r]}else if(o){log(`"${r}" is already defined in \`process.env\` and will not be overwritten`)}});return{parsed:n}}catch(n){return{error:n}}}n.exports.config=config;n.exports.parse=parse},622:function(n){n.exports=__webpack_require__("oyvS")},747:function(n){n.exports=__webpack_require__("mw/K")}});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "1yX1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.wait=wait;exports.error=error;exports.warn=warn;exports.ready=ready;exports.info=info;exports.event=event;var _chalk=_interopRequireDefault(__webpack_require__("49VC"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const prefixes={wait:_chalk.default.cyan('wait')+'  -',error:_chalk.default.red('error')+' -',warn:_chalk.default.yellow('warn')+'  -',ready:_chalk.default.green('ready')+' -',info:_chalk.default.cyan('info')+'  -',event:_chalk.default.magenta('event')+' -'};function wait(...message){console.log(prefixes.wait,...message);}function error(...message){console.log(prefixes.error,...message);}function warn(...message){console.log(prefixes.warn,...message);}function ready(...message){console.log(prefixes.ready,...message);}function info(...message){console.log(prefixes.info,...message);}function event(...message){console.log(prefixes.event,...message);}
//# sourceMappingURL=log.js.map

/***/ }),

/***/ "2+G7":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "49VC":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(r,e){"use strict";var n={};function __webpack_require__(e){if(n[e]){return n[e].exports}var t=n[e]={i:e,l:false,exports:{}};r[e].call(t.exports,t,t.exports,__webpack_require__);t.l=true;return t.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(313)}e(__webpack_require__);return startup()}({83:function(r,e,n){var t=n(161);var a=n(840);var o={};var i=Object.keys(t);function wrapRaw(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}return r(e)};if("conversion"in r){e.conversion=r.conversion}return e}function wrapRounded(r){var e=function(e){if(e===undefined||e===null){return e}if(arguments.length>1){e=Array.prototype.slice.call(arguments)}var n=r(e);if(typeof n==="object"){for(var t=n.length,a=0;a<t;a++){n[a]=Math.round(n[a])}}return n};if("conversion"in r){e.conversion=r.conversion}return e}i.forEach(function(r){o[r]={};Object.defineProperty(o[r],"channels",{value:t[r].channels});Object.defineProperty(o[r],"labels",{value:t[r].labels});var e=a(r);var n=Object.keys(e);n.forEach(function(n){var t=e[n];o[r][n]=wrapRounded(t);o[r][n].raw=wrapRaw(t)})});r.exports=o},87:function(r){r.exports=__webpack_require__("jle/")},149:function(r){r.exports=__webpack_require__("V8Zh")},161:function(r,e,n){var t=n(694);var a={};for(var o in t){if(t.hasOwnProperty(o)){a[t[o]]=o}}var i=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var l in i){if(i.hasOwnProperty(l)){if(!("channels"in i[l])){throw new Error("missing channels property: "+l)}if(!("labels"in i[l])){throw new Error("missing channel labels property: "+l)}if(i[l].labels.length!==i[l].channels){throw new Error("channel and label counts mismatch: "+l)}var s=i[l].channels;var c=i[l].labels;delete i[l].channels;delete i[l].labels;Object.defineProperty(i[l],"channels",{value:s});Object.defineProperty(i[l],"labels",{value:c})}}i.rgb.hsl=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a=Math.min(e,n,t);var o=Math.max(e,n,t);var i=o-a;var l;var s;var c;if(o===a){l=0}else if(e===o){l=(n-t)/i}else if(n===o){l=2+(t-e)/i}else if(t===o){l=4+(e-n)/i}l=Math.min(l*60,360);if(l<0){l+=360}c=(a+o)/2;if(o===a){s=0}else if(c<=.5){s=i/(o+a)}else{s=i/(2-o-a)}return[l,s*100,c*100]};i.rgb.hsv=function(r){var e;var n;var t;var a;var o;var i=r[0]/255;var l=r[1]/255;var s=r[2]/255;var c=Math.max(i,l,s);var u=c-Math.min(i,l,s);var v=function(r){return(c-r)/6/u+1/2};if(u===0){a=o=0}else{o=u/c;e=v(i);n=v(l);t=v(s);if(i===c){a=t-n}else if(l===c){a=1/3+e-t}else if(s===c){a=2/3+n-e}if(a<0){a+=1}else if(a>1){a-=1}}return[a*360,o*100,c*100]};i.rgb.hwb=function(r){var e=r[0];var n=r[1];var t=r[2];var a=i.rgb.hsl(r)[0];var o=1/255*Math.min(e,Math.min(n,t));t=1-1/255*Math.max(e,Math.max(n,t));return[a,o*100,t*100]};i.rgb.cmyk=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a;var o;var i;var l;l=Math.min(1-e,1-n,1-t);a=(1-e-l)/(1-l)||0;o=(1-n-l)/(1-l)||0;i=(1-t-l)/(1-l)||0;return[a*100,o*100,i*100,l*100]};function comparativeDistance(r,e){return Math.pow(r[0]-e[0],2)+Math.pow(r[1]-e[1],2)+Math.pow(r[2]-e[2],2)}i.rgb.keyword=function(r){var e=a[r];if(e){return e}var n=Infinity;var o;for(var i in t){if(t.hasOwnProperty(i)){var l=t[i];var s=comparativeDistance(r,l);if(s<n){n=s;o=i}}}return o};i.keyword.rgb=function(r){return t[r]};i.rgb.xyz=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92;n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92;t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var a=e*.4124+n*.3576+t*.1805;var o=e*.2126+n*.7152+t*.0722;var i=e*.0193+n*.1192+t*.9505;return[a*100,o*100,i*100]};i.rgb.lab=function(r){var e=i.rgb.xyz(r);var n=e[0];var t=e[1];var a=e[2];var o;var l;var s;n/=95.047;t/=100;a/=108.883;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;a=a>.008856?Math.pow(a,1/3):7.787*a+16/116;o=116*t-16;l=500*(n-t);s=200*(t-a);return[o,l,s]};i.hsl.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;var a;var o;var i;var l;var s;if(n===0){s=t*255;return[s,s,s]}if(t<.5){o=t*(1+n)}else{o=t+n-t*n}a=2*t-o;l=[0,0,0];for(var c=0;c<3;c++){i=e+1/3*-(c-1);if(i<0){i++}if(i>1){i--}if(6*i<1){s=a+(o-a)*6*i}else if(2*i<1){s=o}else if(3*i<2){s=a+(o-a)*(2/3-i)*6}else{s=a}l[c]=s*255}return l};i.hsl.hsv=function(r){var e=r[0];var n=r[1]/100;var t=r[2]/100;var a=n;var o=Math.max(t,.01);var i;var l;t*=2;n*=t<=1?t:2-t;a*=o<=1?o:2-o;l=(t+n)/2;i=t===0?2*a/(o+a):2*n/(t+n);return[e,i*100,l*100]};i.hsv.rgb=function(r){var e=r[0]/60;var n=r[1]/100;var t=r[2]/100;var a=Math.floor(e)%6;var o=e-Math.floor(e);var i=255*t*(1-n);var l=255*t*(1-n*o);var s=255*t*(1-n*(1-o));t*=255;switch(a){case 0:return[t,s,i];case 1:return[l,t,i];case 2:return[i,t,s];case 3:return[i,l,t];case 4:return[s,i,t];case 5:return[t,i,l]}};i.hsv.hsl=function(r){var e=r[0];var n=r[1]/100;var t=r[2]/100;var a=Math.max(t,.01);var o;var i;var l;l=(2-n)*t;o=(2-n)*a;i=n*a;i/=o<=1?o:2-o;i=i||0;l/=2;return[e,i*100,l*100]};i.hwb.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;var a=n+t;var o;var i;var l;var s;if(a>1){n/=a;t/=a}o=Math.floor(6*e);i=1-t;l=6*e-o;if((o&1)!==0){l=1-l}s=n+l*(i-n);var c;var u;var v;switch(o){default:case 6:case 0:c=i;u=s;v=n;break;case 1:c=s;u=i;v=n;break;case 2:c=n;u=i;v=s;break;case 3:c=n;u=s;v=i;break;case 4:c=s;u=n;v=i;break;case 5:c=i;u=n;v=s;break}return[c*255,u*255,v*255]};i.cmyk.rgb=function(r){var e=r[0]/100;var n=r[1]/100;var t=r[2]/100;var a=r[3]/100;var o;var i;var l;o=1-Math.min(1,e*(1-a)+a);i=1-Math.min(1,n*(1-a)+a);l=1-Math.min(1,t*(1-a)+a);return[o*255,i*255,l*255]};i.xyz.rgb=function(r){var e=r[0]/100;var n=r[1]/100;var t=r[2]/100;var a;var o;var i;a=e*3.2406+n*-1.5372+t*-.4986;o=e*-.9689+n*1.8758+t*.0415;i=e*.0557+n*-.204+t*1.057;a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a*12.92;o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92;i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92;a=Math.min(Math.max(0,a),1);o=Math.min(Math.max(0,o),1);i=Math.min(Math.max(0,i),1);return[a*255,o*255,i*255]};i.xyz.lab=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;e/=95.047;n/=100;t/=108.883;e=e>.008856?Math.pow(e,1/3):7.787*e+16/116;n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;a=116*n-16;o=500*(e-n);i=200*(n-t);return[a,o,i]};i.lab.xyz=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;o=(e+16)/116;a=n/500+o;i=o-t/200;var l=Math.pow(o,3);var s=Math.pow(a,3);var c=Math.pow(i,3);o=l>.008856?l:(o-16/116)/7.787;a=s>.008856?s:(a-16/116)/7.787;i=c>.008856?c:(i-16/116)/7.787;a*=95.047;o*=100;i*=108.883;return[a,o,i]};i.lab.lch=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;a=Math.atan2(t,n);o=a*360/2/Math.PI;if(o<0){o+=360}i=Math.sqrt(n*n+t*t);return[e,i,o]};i.lch.lab=function(r){var e=r[0];var n=r[1];var t=r[2];var a;var o;var i;i=t/360*2*Math.PI;a=n*Math.cos(i);o=n*Math.sin(i);return[e,a,o]};i.rgb.ansi16=function(r){var e=r[0];var n=r[1];var t=r[2];var a=1 in arguments?arguments[1]:i.rgb.hsv(r)[2];a=Math.round(a/50);if(a===0){return 30}var o=30+(Math.round(t/255)<<2|Math.round(n/255)<<1|Math.round(e/255));if(a===2){o+=60}return o};i.hsv.ansi16=function(r){return i.rgb.ansi16(i.hsv.rgb(r),r[2])};i.rgb.ansi256=function(r){var e=r[0];var n=r[1];var t=r[2];if(e===n&&n===t){if(e<8){return 16}if(e>248){return 231}return Math.round((e-8)/247*24)+232}var a=16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(t/255*5);return a};i.ansi16.rgb=function(r){var e=r%10;if(e===0||e===7){if(r>50){e+=3.5}e=e/10.5*255;return[e,e,e]}var n=(~~(r>50)+1)*.5;var t=(e&1)*n*255;var a=(e>>1&1)*n*255;var o=(e>>2&1)*n*255;return[t,a,o]};i.ansi256.rgb=function(r){if(r>=232){var e=(r-232)*10+8;return[e,e,e]}r-=16;var n;var t=Math.floor(r/36)/5*255;var a=Math.floor((n=r%36)/6)/5*255;var o=n%6/5*255;return[t,a,o]};i.rgb.hex=function(r){var e=((Math.round(r[0])&255)<<16)+((Math.round(r[1])&255)<<8)+(Math.round(r[2])&255);var n=e.toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(r){var e=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e){return[0,0,0]}var n=e[0];if(e[0].length===3){n=n.split("").map(function(r){return r+r}).join("")}var t=parseInt(n,16);var a=t>>16&255;var o=t>>8&255;var i=t&255;return[a,o,i]};i.rgb.hcg=function(r){var e=r[0]/255;var n=r[1]/255;var t=r[2]/255;var a=Math.max(Math.max(e,n),t);var o=Math.min(Math.min(e,n),t);var i=a-o;var l;var s;if(i<1){l=o/(1-i)}else{l=0}if(i<=0){s=0}else if(a===e){s=(n-t)/i%6}else if(a===n){s=2+(t-e)/i}else{s=4+(e-n)/i+4}s/=6;s%=1;return[s*360,i*100,l*100]};i.hsl.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=1;var a=0;if(n<.5){t=2*e*n}else{t=2*e*(1-n)}if(t<1){a=(n-.5*t)/(1-t)}return[r[0],t*100,a*100]};i.hsv.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=e*n;var a=0;if(t<1){a=(n-t)/(1-t)}return[r[0],t*100,a*100]};i.hcg.rgb=function(r){var e=r[0]/360;var n=r[1]/100;var t=r[2]/100;if(n===0){return[t*255,t*255,t*255]}var a=[0,0,0];var o=e%1*6;var i=o%1;var l=1-i;var s=0;switch(Math.floor(o)){case 0:a[0]=1;a[1]=i;a[2]=0;break;case 1:a[0]=l;a[1]=1;a[2]=0;break;case 2:a[0]=0;a[1]=1;a[2]=i;break;case 3:a[0]=0;a[1]=l;a[2]=1;break;case 4:a[0]=i;a[1]=0;a[2]=1;break;default:a[0]=1;a[1]=0;a[2]=l}s=(1-n)*t;return[(n*a[0]+s)*255,(n*a[1]+s)*255,(n*a[2]+s)*255]};i.hcg.hsv=function(r){var e=r[1]/100;var n=r[2]/100;var t=e+n*(1-e);var a=0;if(t>0){a=e/t}return[r[0],a*100,t*100]};i.hcg.hsl=function(r){var e=r[1]/100;var n=r[2]/100;var t=n*(1-e)+.5*e;var a=0;if(t>0&&t<.5){a=e/(2*t)}else if(t>=.5&&t<1){a=e/(2*(1-t))}return[r[0],a*100,t*100]};i.hcg.hwb=function(r){var e=r[1]/100;var n=r[2]/100;var t=e+n*(1-e);return[r[0],(t-e)*100,(1-t)*100]};i.hwb.hcg=function(r){var e=r[1]/100;var n=r[2]/100;var t=1-n;var a=t-e;var o=0;if(a<1){o=(t-a)/(1-a)}return[r[0],a*100,o*100]};i.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]};i.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]};i.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]};i.gray.hsl=i.gray.hsv=function(r){return[0,0,r[0]]};i.gray.hwb=function(r){return[0,100,r[0]]};i.gray.cmyk=function(r){return[0,0,0,r[0]]};i.gray.lab=function(r){return[r[0],0,0]};i.gray.hex=function(r){var e=Math.round(r[0]/100*255)&255;var n=(e<<16)+(e<<8)+e;var t=n.toString(16).toUpperCase();return"000000".substring(t.length)+t};i.rgb.gray=function(r){var e=(r[0]+r[1]+r[2])/3;return[e/255*100]}},285:function(r,e,n){"use strict";r=n.nmd(r);const t=n(83);const a=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${n+e}m`});const o=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${38+e};5;${n}m`});const i=(r,e)=>(function(){const n=r.apply(t,arguments);return`[${38+e};2;${n[0]};${n[1]};${n[2]}m`});function assembleStyles(){const r=new Map;const e={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}};e.color.grey=e.color.gray;for(const n of Object.keys(e)){const t=e[n];for(const n of Object.keys(t)){const a=t[n];e[n]={open:`[${a[0]}m`,close:`[${a[1]}m`};t[n]=e[n];r.set(a[0],a[1])}Object.defineProperty(e,n,{value:t,enumerable:false});Object.defineProperty(e,"codes",{value:r,enumerable:false})}const n=r=>r;const l=(r,e,n)=>[r,e,n];e.color.close="[39m";e.bgColor.close="[49m";e.color.ansi={ansi:a(n,0)};e.color.ansi256={ansi256:o(n,0)};e.color.ansi16m={rgb:i(l,0)};e.bgColor.ansi={ansi:a(n,10)};e.bgColor.ansi256={ansi256:o(n,10)};e.bgColor.ansi16m={rgb:i(l,10)};for(let r of Object.keys(t)){if(typeof t[r]!=="object"){continue}const n=t[r];if(r==="ansi16"){r="ansi"}if("ansi16"in n){e.color.ansi[r]=a(n.ansi16,0);e.bgColor.ansi[r]=a(n.ansi16,10)}if("ansi256"in n){e.color.ansi256[r]=o(n.ansi256,0);e.bgColor.ansi256[r]=o(n.ansi256,10)}if("rgb"in n){e.color.ansi16m[r]=i(n.rgb,0);e.bgColor.ansi16m[r]=i(n.rgb,10)}}return e}Object.defineProperty(r,"exports",{enumerable:true,get:assembleStyles})},313:function(r,e,n){"use strict";const t=n(149);const a=n(285);const o=n(933).stdout;const i=n(341);const l=process.platform==="win32"&&!(process.env.TERM||"").toLowerCase().startsWith("xterm");const s=["ansi","ansi","ansi256","ansi16m"];const c=new Set(["gray"]);const u=Object.create(null);function applyOptions(r,e){e=e||{};const n=o?o.level:0;r.level=e.level===undefined?n:e.level;r.enabled="enabled"in e?e.enabled:r.level>0}function Chalk(r){if(!this||!(this instanceof Chalk)||this.template){const e={};applyOptions(e,r);e.template=function(){const r=[].slice.call(arguments);return chalkTag.apply(null,[e.template].concat(r))};Object.setPrototypeOf(e,Chalk.prototype);Object.setPrototypeOf(e.template,e);e.template.constructor=Chalk;return e.template}applyOptions(this,r)}if(l){a.blue.open="[94m"}for(const r of Object.keys(a)){a[r].closeRe=new RegExp(t(a[r].close),"g");u[r]={get(){const e=a[r];return build.call(this,this._styles?this._styles.concat(e):[e],this._empty,r)}}}u.visible={get(){return build.call(this,this._styles||[],true,"visible")}};a.color.closeRe=new RegExp(t(a.color.close),"g");for(const r of Object.keys(a.color.ansi)){if(c.has(r)){continue}u[r]={get(){const e=this.level;return function(){const n=a.color[s[e]][r].apply(null,arguments);const t={open:n,close:a.color.close,closeRe:a.color.closeRe};return build.call(this,this._styles?this._styles.concat(t):[t],this._empty,r)}}}}a.bgColor.closeRe=new RegExp(t(a.bgColor.close),"g");for(const r of Object.keys(a.bgColor.ansi)){if(c.has(r)){continue}const e="bg"+r[0].toUpperCase()+r.slice(1);u[e]={get(){const e=this.level;return function(){const n=a.bgColor[s[e]][r].apply(null,arguments);const t={open:n,close:a.bgColor.close,closeRe:a.bgColor.closeRe};return build.call(this,this._styles?this._styles.concat(t):[t],this._empty,r)}}}}const v=Object.defineProperties(()=>{},u);function build(r,e,n){const t=function(){return applyStyle.apply(t,arguments)};t._styles=r;t._empty=e;const a=this;Object.defineProperty(t,"level",{enumerable:true,get(){return a.level},set(r){a.level=r}});Object.defineProperty(t,"enabled",{enumerable:true,get(){return a.enabled},set(r){a.enabled=r}});t.hasGrey=this.hasGrey||n==="gray"||n==="grey";t.__proto__=v;return t}function applyStyle(){const r=arguments;const e=r.length;let n=String(arguments[0]);if(e===0){return""}if(e>1){for(let t=1;t<e;t++){n+=" "+r[t]}}if(!this.enabled||this.level<=0||!n){return this._empty?"":n}const t=a.dim.open;if(l&&this.hasGrey){a.dim.open=""}for(const r of this._styles.slice().reverse()){n=r.open+n.replace(r.closeRe,r.open)+r.close;n=n.replace(/\r?\n/g,`${r.close}$&${r.open}`)}a.dim.open=t;return n}function chalkTag(r,e){if(!Array.isArray(e)){return[].slice.call(arguments,1).join(" ")}const n=[].slice.call(arguments,2);const t=[e.raw[0]];for(let r=1;r<e.length;r++){t.push(String(n[r-1]).replace(/[{}\\]/g,"\\$&"));t.push(String(e.raw[r]))}return i(r,t.join(""))}Object.defineProperties(Chalk.prototype,u);r.exports=Chalk();r.exports.supportsColor=o;r.exports.default=r.exports},341:function(r){"use strict";const e=/(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;const n=/(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;const t=/^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;const a=/\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi;const o=new Map([["n","\n"],["r","\r"],["t","\t"],["b","\b"],["f","\f"],["v","\v"],["0","\0"],["\\","\\"],["e",""],["a",""]]);function unescape(r){if(r[0]==="u"&&r.length===5||r[0]==="x"&&r.length===3){return String.fromCharCode(parseInt(r.slice(1),16))}return o.get(r)||r}function parseArguments(r,e){const n=[];const o=e.trim().split(/\s*,\s*/g);let i;for(const e of o){if(!isNaN(e)){n.push(Number(e))}else if(i=e.match(t)){n.push(i[2].replace(a,(r,e,n)=>e?unescape(e):n))}else{throw new Error(`Invalid Chalk template style argument: ${e} (in style '${r}')`)}}return n}function parseStyle(r){n.lastIndex=0;const e=[];let t;while((t=n.exec(r))!==null){const r=t[1];if(t[2]){const n=parseArguments(r,t[2]);e.push([r].concat(n))}else{e.push([r])}}return e}function buildStyle(r,e){const n={};for(const r of e){for(const e of r.styles){n[e[0]]=r.inverse?null:e.slice(1)}}let t=r;for(const r of Object.keys(n)){if(Array.isArray(n[r])){if(!(r in t)){throw new Error(`Unknown Chalk style: ${r}`)}if(n[r].length>0){t=t[r].apply(t,n[r])}else{t=t[r]}}}return t}r.exports=((r,n)=>{const t=[];const a=[];let o=[];n.replace(e,(e,n,i,l,s,c)=>{if(n){o.push(unescape(n))}else if(l){const e=o.join("");o=[];a.push(t.length===0?e:buildStyle(r,t)(e));t.push({inverse:i,styles:parseStyle(l)})}else if(s){if(t.length===0){throw new Error("Found extraneous } in Chalk template literal")}a.push(buildStyle(r,t)(o.join("")));o=[];t.pop()}else{o.push(c)}});a.push(o.join(""));if(t.length>0){const r=`Chalk template literal is missing ${t.length} closing bracket${t.length===1?"":"s"} (\`}\`)`;throw new Error(r)}return a.join("")})},694:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},804:function(r){"use strict";r.exports=((r,e)=>{e=e||process.argv;const n=r.startsWith("-")?"":r.length===1?"-":"--";const t=e.indexOf(n+r);const a=e.indexOf("--");return t!==-1&&(a===-1?true:t<a)})},840:function(r,e,n){var t=n(161);function buildGraph(){var r={};var e=Object.keys(t);for(var n=e.length,a=0;a<n;a++){r[e[a]]={distance:-1,parent:null}}return r}function deriveBFS(r){var e=buildGraph();var n=[r];e[r].distance=0;while(n.length){var a=n.pop();var o=Object.keys(t[a]);for(var i=o.length,l=0;l<i;l++){var s=o[l];var c=e[s];if(c.distance===-1){c.distance=e[a].distance+1;c.parent=a;n.unshift(s)}}}return e}function link(r,e){return function(n){return e(r(n))}}function wrapConversion(r,e){var n=[e[r].parent,r];var a=t[e[r].parent][r];var o=e[r].parent;while(e[o].parent){n.unshift(e[o].parent);a=link(t[e[o].parent][o],a);o=e[o].parent}a.conversion=n;return a}r.exports=function(r){var e=deriveBFS(r);var n={};var t=Object.keys(e);for(var a=t.length,o=0;o<a;o++){var i=t[o];var l=e[i];if(l.parent===null){continue}n[i]=wrapConversion(i,e)}return n}},933:function(r,e,n){"use strict";const t=n(87);const a=n(804);const o=process.env;let i;if(a("no-color")||a("no-colors")||a("color=false")){i=false}else if(a("color")||a("colors")||a("color=true")||a("color=always")){i=true}if("FORCE_COLOR"in o){i=o.FORCE_COLOR.length===0||parseInt(o.FORCE_COLOR,10)!==0}function translateLevel(r){if(r===0){return false}return{level:r,hasBasic:true,has256:r>=2,has16m:r>=3}}function supportsColor(r){if(i===false){return 0}if(a("color=16m")||a("color=full")||a("color=truecolor")){return 3}if(a("color=256")){return 2}if(r&&!r.isTTY&&i!==true){return 0}const e=i?1:0;if(process.platform==="win32"){const r=t.release().split(".");if(Number(process.versions.node.split(".")[0])>=8&&Number(r[0])>=10&&Number(r[2])>=10586){return Number(r[2])>=14931?3:2}return 1}if("CI"in o){if(["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI"].some(r=>r in o)||o.CI_NAME==="codeship"){return 1}return e}if("TEAMCITY_VERSION"in o){return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(o.TEAMCITY_VERSION)?1:0}if(o.COLORTERM==="truecolor"){return 3}if("TERM_PROGRAM"in o){const r=parseInt((o.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(o.TERM_PROGRAM){case"iTerm.app":return r>=3?3:2;case"Apple_Terminal":return 2}}if(/-256(color)?$/i.test(o.TERM)){return 2}if(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(o.TERM)){return 1}if("COLORTERM"in o){return 1}if(o.TERM==="dumb"){return e}return e}function getSupportLevel(r){const e=supportsColor(r);return translateLevel(e)}r.exports={supportsColor:getSupportLevel,stdout:getSupportLevel(process.stdout),stderr:getSupportLevel(process.stderr)}}},function(r){"use strict";!function(){r.nmd=function(r){r.paths=[];if(!r.children)r.children=[];Object.defineProperty(r,"loaded",{enumerable:true,get:function(){return r.l}});Object.defineProperty(r,"id",{enumerable:true,get:function(){return r.i}});return r}}()});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "4VNc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.processEnv=processEnv;exports.loadEnvConfig=loadEnvConfig;var _fs=_interopRequireDefault(__webpack_require__("mw/K"));var _path=_interopRequireDefault(__webpack_require__("oyvS"));var log=_interopRequireWildcard(__webpack_require__("1yX1"));var _dotenvExpand=_interopRequireDefault(__webpack_require__("0mNJ"));var _dotenv=_interopRequireDefault(__webpack_require__("10NG"));function _getRequireWildcardCache(){if(typeof WeakMap!=="function")return null;var cache=new WeakMap();_getRequireWildcardCache=function(){return cache;};return cache;}function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache();if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}let combinedEnv=undefined;let loadedEnvFiles=[];function processEnv(loadedEnvFiles,dir){// don't reload env if we already have since this breaks escaped
// environment values e.g. \$ENV_FILE_KEY
if(combinedEnv||process.env.__NEXT_PROCESSED_ENV||!loadedEnvFiles.length){return process.env;}// flag that we processed the environment values in case a serverless
// function is re-used or we are running in `next start` mode
process.env.__NEXT_PROCESSED_ENV='true';for(const envFile of loadedEnvFiles){try{let result={};result.parsed=_dotenv.default.parse(envFile.contents);result=(0,_dotenvExpand.default)(result);if(result.parsed){log.info(`Loaded env from ${_path.default.join(dir||'',envFile.path)}`);}Object.assign(process.env,result.parsed);}catch(err){log.error(`Failed to load env from ${_path.default.join(dir||'',envFile.path)}`,err);}}return process.env;}function loadEnvConfig(dir,dev){// don't reload env if we already have since this breaks escaped
// environment values e.g. \$ENV_FILE_KEY
if(combinedEnv)return{combinedEnv,loadedEnvFiles};const isTest="production"==='test';const mode=isTest?'test':dev?'development':'production';const dotenvFiles=[`.env.${mode}.local`,// Don't include `.env.local` for `test` environment
// since normally you expect tests to produce the same
// results for everyone
mode!=='test'&&`.env.local`,`.env.${mode}`,'.env'].filter(Boolean);for(const envFile of dotenvFiles){// only load .env if the user provided has an env config file
const dotEnvPath=_path.default.join(dir,envFile);try{const stats=_fs.default.statSync(dotEnvPath);// make sure to only attempt to read files
if(!stats.isFile()){continue;}const contents=_fs.default.readFileSync(dotEnvPath,'utf8');loadedEnvFiles.push({path:envFile,contents});}catch(err){if(err.code!=='ENOENT'){log.error(`Failed to load env from ${envFile}`,err);}}}combinedEnv=processEnv(loadedEnvFiles,dir);return{combinedEnv,loadedEnvFiles};}
//# sourceMappingURL=load-env-config.js.map

/***/ }),

/***/ "4lsC":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/send-payload");

/***/ }),

/***/ "67Bq":
/***/ (function(module) {

module.exports = JSON.parse("{\"./code\":[{\"id\":\"3niX\",\"name\":\"./node_modules/styled-jsx/dist/style.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"8oxB\",\"name\":\"./node_modules/process/browser.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"9kyW\",\"name\":\"./node_modules/string-hash/index.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"CjHp\",\"name\":\"./node_modules/prismjs/components/prism-jsx.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"F1I5\",\"name\":\"./src/components/code.tsx\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"MX0m\",\"name\":\"./node_modules/styled-jsx/style.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"SevZ\",\"name\":\"./node_modules/styled-jsx/dist/stylesheet-registry.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"bVZc\",\"name\":\"./node_modules/styled-jsx/dist/lib/stylesheet.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"wZee\",\"name\":\"./node_modules/prismjs/prism.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"},{\"id\":\"yLpj\",\"name\":\"./node_modules/webpack/buildin/global.js\",\"file\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\",\"publicPath\":\"static/chunks/12.2000cc5d6e95f6fc5371.js\"}],\"./counter\":[{\"id\":\"HY/B\",\"name\":\"./src/components/counter.tsx\",\"file\":\"static/chunks/13.230fe15173e8b9f47e16.js\",\"publicPath\":\"static/chunks/13.230fe15173e8b9f47e16.js\"}]}");

/***/ }),

/***/ "8cZr":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VDXt")


/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "AXZJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "GX0O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "KK5V":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/render");

/***/ }),

/***/ "KOk9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticParams", function() { return unstable_getStaticParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticProps", function() { return unstable_getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getStaticPaths", function() { return unstable_getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_getServerProps", function() { return unstable_getServerProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_app", function() { return _app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReqToHTML", function() { return renderReqToHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("GX0O");
/* harmony import */ var next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KqAr");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mctB");
/* harmony import */ var next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_2__);

    
    
    

    
    const { processEnv } = __webpack_require__("4VNc")
    processEnv([])
  
    
    const runtimeConfig = {}
    const {parse} = __webpack_require__("bzos")
    const {parse: parseQs} = __webpack_require__("8xkj")
    const {renderToHTML} = __webpack_require__("KK5V");
    const { tryGetPreviewData } = __webpack_require__("+/F5");
    const {sendHTML} = __webpack_require__("ef3A");
    const {sendPayload} = __webpack_require__("4lsC");
    const buildManifest = __webpack_require__("LZ9C");
    const reactLoadableManifest = __webpack_require__("67Bq");
    const Document = __webpack_require__("mT+M").default;
    const Error = __webpack_require__("/a9y").default;
    const App = __webpack_require__("hUgY").default;
    
    
    const { rewrites } = __webpack_require__("Skye")
    const { pathToRegexp, default: pathMatch } = __webpack_require__("01KS")
  

    const ComponentInfo = __webpack_require__("/a9y")

    const Component = ComponentInfo.default
    /* harmony default export */ __webpack_exports__["default"] = (Component);
    const unstable_getStaticParams = ComponentInfo['unstable_getStaticParam' + 's']
    const getStaticProps = ComponentInfo['getStaticProp' + 's']
    const getStaticPaths = ComponentInfo['getStaticPath' + 's']
    const getServerSideProps = ComponentInfo['getServerSideProp' + 's']

    // kept for detecting legacy exports
    const unstable_getStaticProps = ComponentInfo['unstable_getStaticProp' + 's']
    const unstable_getStaticPaths = ComponentInfo['unstable_getStaticPath' + 's']
    const unstable_getServerProps = ComponentInfo['unstable_getServerProp' + 's']

    
    
    const getCustomRouteMatcher = pathMatch(true)
    const {prepareDestination} = __webpack_require__("/y8f")

    function handleRewrites(parsedUrl) {
      for (const rewrite of rewrites) {
        const matcher = getCustomRouteMatcher(rewrite.source)
        const params = matcher(parsedUrl.pathname)

        if (params) {
          const { parsedDestination } = prepareDestination(
            rewrite.destination,
            params,
            parsedUrl.query
          )
          Object.assign(parsedUrl.query, parsedDestination.query, params)
          delete parsedDestination.query

          Object.assign(parsedUrl, parsedDestination)

          if (parsedUrl.pathname === '/_error'){
            break
          }
          
        }
      }

      return parsedUrl
    }
  

    const config = ComponentInfo['confi' + 'g'] || {}
    const _app = App
    async function renderReqToHTML(req, res, renderMode, _renderOpts, _params) {
      const fromExport = renderMode === 'export' || renderMode === true;
      
      const options = {
        App,
        Document,
        buildManifest,
        getStaticProps,
        getServerSideProps,
        getStaticPaths,
        reactLoadableManifest,
        canonicalBase: "",
        buildId: "0fozeq-8u2YxtXNn1siRI",
        assetPrefix: "",
        runtimeConfig: runtimeConfig.publicRuntimeConfig || {},
        previewProps: {previewModeId:"b629795ffeb8c4a63d9d7d44a4074405",previewModeSigningKey:"5a7e850dfcfd4eb151451746ef0de0e4dbcbdda1a964b2d83e411d514dd0f511",previewModeEncryptionKey:"4aba5d3cb9e712adb86d18ced3f5a8f7afcf703cb8b8515fc231f0b8346db2ea"},
        env: process.env,
        basePath: "",
        ..._renderOpts
      }
      let _nextData = false
      let parsedUrl

      try {
        parsedUrl = handleRewrites(parse(req.url, true))

        if (parsedUrl.pathname.match(/_next\/data/)) {
          _nextData = true
          parsedUrl.pathname = parsedUrl.pathname
            .replace(new RegExp('/_next/data/0fozeq\-8u2YxtXNn1siRI/'), '/')
            .replace(/\.json$/, '')
        }

        const renderOpts = Object.assign(
          {
            Component,
            pageConfig: config,
            nextExport: fromExport,
            isDataReq: _nextData,
          },
          options,
        )

        
          if (!res.statusCode) {
            res.statusCode = 404
          }
        

        const params = {};
        const nowParams = null;
        // make sure to set renderOpts to the correct params e.g. _params
        // if provided from worker or params if we're parsing them here
        renderOpts.params = _params || params

        const isFallback = parsedUrl.query.__nextFallback

        const previewData = tryGetPreviewData(req, res, options.previewProps)
        const isPreviewMode = previewData !== false

        let result = await renderToHTML(req, res, "/_error", Object.assign({}, getStaticProps ? { ...(parsedUrl.query.amp ? { amp: '1' } : {}) } : parsedUrl.query, nowParams ? nowParams : params, _params, isFallback ? { __nextFallback: 'true' } : {}), renderOpts)

        if (!renderMode) {
          if (_nextData || getStaticProps || getServerSideProps) {
            sendPayload(res, _nextData ? JSON.stringify(renderOpts.pageData) : result, _nextData ? 'json' : 'html', {
              private: isPreviewMode,
              stateful: !!getServerSideProps,
              revalidate: renderOpts.revalidate,
            })
            return null
          }
        } else if (isPreviewMode) {
          res.setHeader(
            'Cache-Control',
            'private, no-cache, no-store, max-age=0, must-revalidate'
          )
        }

        if (renderMode) return { html: result, renderOpts }
        return result
      } catch (err) {
        if (!parsedUrl) {
          parsedUrl = parse(req.url, true)
        }

        if (err.code === 'ENOENT') {
          res.statusCode = 404
        } else if (err.code === 'DECODE_FAILED') {
          res.statusCode = 400
        } else {
          console.error(err)
          res.statusCode = 500
        }

        const result = await renderToHTML(req, res, "/_error", parsedUrl.query, Object.assign({}, options, {
          getStaticProps: undefined,
          getStaticPaths: undefined,
          getServerSideProps: undefined,
          Component: Error,
          err: res.statusCode === 404 ? undefined : err
        }))
        return result
      }
    }
    async function render (req, res) {
      try {
        await Object(next_plugin_loader_middleware_on_init_server___WEBPACK_IMPORTED_MODULE_0__["default"])()
        const html = await renderReqToHTML(req, res)
        if (html) {
          sendHTML(req, res, html, {generateEtags: true})
        }
      } catch(err) {
        await Object(next_plugin_loader_middleware_on_error_server___WEBPACK_IMPORTED_MODULE_1__["default"])(err)
        console.error(err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    }
  

/***/ }),

/***/ "KqAr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

    

    /* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
      return Promise.all([])
    });
  

/***/ }),

/***/ "LZ9C":
/***/ (function(module) {

module.exports = JSON.parse("{\"devFiles\":[],\"lowPriorityFiles\":[\"static/0fozeq-8u2YxtXNn1siRI/_buildManifest.js\",\"static/0fozeq-8u2YxtXNn1siRI/_ssgManifest.js\"],\"pages\":{\"/\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/chunks/1c864bc1275770406d7c7f414b970e3a0035a44a.15412ce6fc54db7849aa.js\",\"static/chunks/28df783941d443de55542423f7e21a42d9c44157.c3ea9b27222984a8c5dd.js\",\"static/runtime/main-0566ad87607a75ce1750.js\"],\"/_app\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/css/4459e9a04b77b6c213a1.css\",\"static/runtime/main-0566ad87607a75ce1750.js\"],\"/_error\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/runtime/main-0566ad87607a75ce1750.js\"],\"/_polyfills\":[\"static/runtime/polyfills-788a592a52ba46c11fcc.js\"],\"/blog\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/chunks/1c864bc1275770406d7c7f414b970e3a0035a44a.15412ce6fc54db7849aa.js\",\"static/runtime/main-0566ad87607a75ce1750.js\"],\"/blog/[slug]\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/chunks/1c864bc1275770406d7c7f414b970e3a0035a44a.15412ce6fc54db7849aa.js\",\"static/chunks/28df783941d443de55542423f7e21a42d9c44157.c3ea9b27222984a8c5dd.js\",\"static/runtime/main-0566ad87607a75ce1750.js\"],\"/index\":[\"static/runtime/webpack-2ebfd411654c3efa4f00.js\",\"static/chunks/framework.1df04bfc28cd98b55ec4.js\",\"static/chunks/commons.34684228d50c6c140f9e.js\",\"static/chunks/1c864bc1275770406d7c7f414b970e3a0035a44a.15412ce6fc54db7849aa.js\",\"static/chunks/28df783941d443de55542423f7e21a42d9c44157.c3ea9b27222984a8c5dd.js\",\"static/runtime/main-0566ad87607a75ce1750.js\"]}}");

/***/ }),

/***/ "Skye":
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":1,\"pages404\":true,\"basePath\":\"\",\"redirects\":[],\"rewrites\":[],\"headers\":[],\"dynamicRoutes\":[{\"page\":\"/blog/[slug]\",\"regex\":\"^\\\\/blog\\\\/([^/]+?)(?:\\\\/)?$\",\"namedRegex\":\"^/blog/(?<slug>[^/]+?)(?:/)?$\",\"routeKeys\":[\"slug\"]}]}");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UJjI":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "V8Zh":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports=function(r,e){"use strict";var t={};function __webpack_require__(e){if(t[e]){return t[e].exports}var _=t[e]={i:e,l:false,exports:{}};r[e].call(_.exports,_,_.exports,__webpack_require__);_.l=true;return _.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(766)}return startup()}({766:function(r){"use strict";const e=/[|\\{}()[\]^$+*?.-]/g;r.exports=(r=>{if(typeof r!=="string"){throw new TypeError("Expected a string")}return r.replace(e,"\\$&")})}});
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "VDXt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _server = _interopRequireDefault(__webpack_require__("2+G7"));

var _constants = __webpack_require__("UJjI");

var _documentContext = __webpack_require__("nMq/");

var _utils = __webpack_require__("kYf9");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__("ri/Y");

var _htmlescape = __webpack_require__("AXZJ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/vercel/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: false ? undefined : ''
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && false ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (true) {
        return null;
      }

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (false) {}

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ef3A":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/send-html");

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rMck");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  Component,
  pageProps
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Component, pageProps), __jsx("footer", null, ` ${new Date().getFullYear()} © James Bedford.`)));

/***/ }),

/***/ "jle/":
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mT+M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8cZr");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en"
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null), __jsx("body", null, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "mctB":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/node-polyfill-fetch");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nMq/":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rMck":
/***/ (function(module, exports) {



/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ri/Y":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ })

/******/ });