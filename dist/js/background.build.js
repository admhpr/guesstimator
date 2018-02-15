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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nfunction Background() {\n  this.openNewTab = function (newUrl) {\n    chrome.tabs.create({ url: newUrl });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz82NDBmIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJvcGVuTmV3VGFiIiwibmV3VXJsIiwiY2hyb21lIiwidGFicyIsImNyZWF0ZSIsInVybCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxTQUFTQSxVQUFULEdBQXFCO0FBQ25CLE9BQUtDLFVBQUwsR0FBa0IsVUFBVUMsTUFBVixFQUFpQjtBQUMvQkMsV0FBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CLEVBQUVDLEtBQUtKLE1BQVAsRUFBbkI7QUFDSCxHQUZEO0FBR0Q7O0FBRUQsK0RBQWVGLFVBQWYiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCYWNrZ3JvdW5kKCl7XG4gIHRoaXMub3Blbk5ld1RhYiA9IGZ1bmN0aW9uIChuZXdVcmwpe1xuICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBuZXdVcmwgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ })

/******/ });