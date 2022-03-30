/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aoto.js":
/*!*********************!*\
  !*** ./src/aoto.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aotobaDeta\": () => (/* binding */ aotobaDeta)\n/* harmony export */ });\nlet aotobaDeta=()=>{\r\n  const yy='◎';\r\n  const y='〇';\r\n  const n='-';\r\n\r\n  let aoto_deta={\r\n    correct:[\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [y,y,n,n,y],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],//5\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [n,n,n,n,n],//10\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [yy,yy,yy,yy,yy],//15\r\n              [y,y,y,y,y],\r\n              [n,n,n,n,n],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,n,n,n,n],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,y,y,y,y],\r\n              [y,y,n,n,y],\r\n              [yy,yy,yy,yy,yy],\r\n              [y,n,n,y,y],\r\n              [n,n,n,n,n],\r\n              [n,y,n,y,n],\r\n              [n,n,n,n,n],\r\n              [n,n,n,n,n],\r\n              [n,n,n,n,n],\r\n            ],\r\n    one:'oneaoto',\r\n    two:'twoaoto',\r\n    three:'threeaoto',\r\n    four:'fouraoto',\r\n    five:'fiveaoto'\r\n  };\r\n\r\n  return aoto_deta;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/aoto.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sinkiba_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sinkiba.js */ \"./src/sinkiba.js\");\n/* harmony import */ var _aoto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aoto.js */ \"./src/aoto.js\");\n/* harmony import */ var _simizu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simizu.js */ \"./src/simizu.js\");\n \r\n\r\n\r\nlet sinkiba_deta=(0,_sinkiba_js__WEBPACK_IMPORTED_MODULE_0__.sinkibaDeta)();\r\nlet aoto_deta=(0,_aoto_js__WEBPACK_IMPORTED_MODULE_1__.aotobaDeta)();\r\nlet simizu_deta=(0,_simizu_js__WEBPACK_IMPORTED_MODULE_2__.simizuDeta)();\r\nclass Accordion{\r\n    //初期化\r\n    constructor(obj){\r\n\r\n      \r\n      const $elm=document.querySelector(obj.hookName);\r\n      const $trigger=$elm.getElementsByTagName(obj.tagName); \r\n      const triggerLen=$trigger.length;\r\n      for(let i=0;i<triggerLen;i++)\r\n      {\r\n        $trigger[i].addEventListener('click',(e)=>this.clickHandler(e));//thisはクラスそのものを参照する\r\n      }\r\n    }\r\n    //クリックしたら実行される処理\r\n    clickHandler=(e)=>{\r\n      e.preventDefault();\r\n      const $target =e.currentTarget;\r\n      const $content=$target.nextElementSibling;//これの次の要素とってくるよん\r\n      if($content.style.display=='block'){\r\n        $content.style.display='none';\r\n      }\r\n      else{\r\n        $content.style.display='block';\r\n      }\r\n    }\r\n  }\r\n  const fuckingAccordion=new Accordion({\r\n    hookName: '#js-faq',\r\n    tagName: 'p'\r\n  });\r\n\r\n  const $doc=document;\r\n  class Table{\r\n    constructor(obj){\r\n      let $AM=$doc.getElementsByClassName(obj.AM);\r\n      let $PM=$doc.getElementsByClassName(obj.PM);\r\n      const AMlen=$AM.length;\r\n      const PMlen=$PM.length;\r\n      for(let i=0;i<AMlen;i++)\r\n      {\r\n        $AM[i].textContent=obj.correct[i][0];\r\n        $PM[i].textContent=obj.correct[i][1];\r\n      }\r\n    }\r\n  }\r\n  class AotoTable{\r\n    constructor(obj){\r\n      let $one=$doc.getElementsByClassName(obj.one);\r\n      let $two=$doc.getElementsByClassName(obj.two);\r\n      let $three=$doc.getElementsByClassName(obj.three);\r\n      let $four=$doc.getElementsByClassName(obj.four);\r\n      let $five=$doc.getElementsByClassName(obj.five);\r\n      const len=31;\r\n      for(let i=0;i<len;i++)\r\n      {\r\n        $one[i].textContent=obj.correct[i][0];\r\n        $two[i].textContent=obj.correct[i][1];\r\n        $three[i].textContent=obj.correct[i][2];\r\n        $four[i].textContent=obj.correct[i][3];\r\n        $five[i].textContent=obj.correct[i][4];\r\n      }\r\n    }\r\n  }\r\n  class ShimizuTable{\r\n    constructor(obj){\r\n      let $one=$doc.getElementsByClassName(obj.one);\r\n      const len=31;\r\n      for(let i=0;i<len;i++)\r\n      {\r\n        $one[i].textContent=obj.correct[i];\r\n      }\r\n    }\r\n  }\r\n  const sinkiba=new Table(sinkiba_deta);\r\n  const aoto=new AotoTable(aoto_deta);\r\n  const simizu=new ShimizuTable(simizu_deta);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/simizu.js":
/*!***********************!*\
  !*** ./src/simizu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"simizuDeta\": () => (/* binding */ simizuDeta)\n/* harmony export */ });\nlet simizuDeta=()=>{\r\n  const y='〇';\r\n  const n='-';\r\n  let simizu_deta={\r\n    correct:[\r\n              [y],\r\n              [n],\r\n              [n],\r\n              [y],\r\n              [n],//5\r\n              [y],\r\n              [y],\r\n              [y],\r\n              [y],\r\n              [n],//10\r\n              [y],\r\n              [n],\r\n              [y],\r\n              [y],\r\n              [y],//15\r\n              [y],\r\n              [n],\r\n              [y],\r\n              [n],\r\n              [y],//20\r\n              [y],\r\n              [y],\r\n              [n],\r\n              [n],\r\n              [y],//25\r\n              [n],\r\n              [y],\r\n              [y],\r\n              [y],\r\n              [n],//30\r\n              [n],\r\n            ],\r\n    one:'simizu'    \r\n  };\r\n\r\n  return simizu_deta;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/simizu.js?");

/***/ }),

/***/ "./src/sinkiba.js":
/*!************************!*\
  !*** ./src/sinkiba.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sinkibaDeta\": () => (/* binding */ sinkibaDeta)\n/* harmony export */ });\nlet sinkibaDeta=()=>{\r\n  const y='〇';\r\n  const n='-';\r\n  const s='☆';\r\n  let sinkiba_deta={\r\n    correct:[\r\n              [y,y],\r\n              [n,n],\r\n              [n,n],\r\n              [y,y],\r\n              [y,y],\r\n              [y,y],\r\n              [y,y],\r\n              [y,y],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [y,y],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],//ここから\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n              [n,n],\r\n            ],\r\n    AM:'amsinkiba',\r\n    PM:'pmsinkiba'\r\n  };\r\n\r\n  return sinkiba_deta;\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/sinkiba.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;