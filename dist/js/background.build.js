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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nvar Background = {\n  openNewTab: function openNewTab() {\n    chrome.browserAction.onClicked.addListener(function (newUrl) {\n      chrome.tabs.create({ url: newURL });\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n\nconsole.log(\"here\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz82NDBmIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJvcGVuTmV3VGFiIiwiY2hyb21lIiwiYnJvd3NlckFjdGlvbiIsIm9uQ2xpY2tlZCIsImFkZExpc3RlbmVyIiwibmV3VXJsIiwidGFicyIsImNyZWF0ZSIsInVybCIsIm5ld1VSTCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsSUFBTUEsYUFBYTtBQUNqQkMsWUFEaUIsd0JBQ0o7QUFDWEMsV0FBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JDLFdBQS9CLENBQTJDLFVBQVNDLE1BQVQsRUFBaUI7QUFDMURKLGFBQU9LLElBQVAsQ0FBWUMsTUFBWixDQUFtQixFQUFFQyxLQUFLQyxNQUFQLEVBQW5CO0FBQ0QsS0FGRDtBQUdEO0FBTGdCLENBQW5COztBQVFBLCtEQUFlVixVQUFmOztBQUVBVyxRQUFRQyxHQUFSLENBQVksTUFBWiIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJhY2tncm91bmQgPSB7XG4gIG9wZW5OZXdUYWIoKSB7XG4gICAgY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKG5ld1VybCkge1xuICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBuZXdVUkwgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7XG5cbmNvbnNvbGUubG9nKFwiaGVyZVwiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ })

/******/ });