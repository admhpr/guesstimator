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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nfunction Background() {\n  this.openNewTab = function (newUrl) {\n    chrome.tabs.create({ url: newUrl });\n  }, this.getCookies = function (domain, name, callback) {\n    chrome.cookies.getAll({ url: domain, name: name }, function (cookie) {\n      var loggedIn = false;\n      console.log(cookie);\n      cookie.length ? loggedIn = true : loggedIn = false;\n\n      if (callback) {\n        return callback(loggedIn);\n      }\n    });\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz82NDBmIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJvcGVuTmV3VGFiIiwibmV3VXJsIiwiY2hyb21lIiwidGFicyIsImNyZWF0ZSIsInVybCIsImdldENvb2tpZXMiLCJkb21haW4iLCJuYW1lIiwiY2FsbGJhY2siLCJjb29raWVzIiwiZ2V0QWxsIiwiY29va2llIiwibG9nZ2VkSW4iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLFNBQVNBLFVBQVQsR0FBc0I7QUFDcEIsT0FBS0MsVUFBTCxHQUFrQixVQUFTQyxNQUFULEVBQWlCO0FBQ2pDQyxXQUFPQyxJQUFQLENBQVlDLE1BQVosQ0FBbUIsRUFBRUMsS0FBS0osTUFBUCxFQUFuQjtBQUNELEdBRkQsRUFHQSxLQUFLSyxVQUFMLEdBQWtCLFVBQVNDLE1BQVQsRUFBaUJDLElBQWpCLEVBQXVCQyxRQUF2QixFQUFpQztBQUNoRFAsV0FBT1EsT0FBUCxDQUFlQyxNQUFmLENBQXNCLEVBQUVOLEtBQUtFLE1BQVAsRUFBZUMsTUFBT0EsSUFBdEIsRUFBdEIsRUFBb0QsVUFBU0ksTUFBVCxFQUFpQjtBQUNsRSxVQUFJQyxXQUFXLEtBQWY7QUFDQUMsY0FBUUMsR0FBUixDQUFZSCxNQUFaO0FBQ0FBLGFBQU9JLE1BQVAsR0FBZ0JILFdBQVcsSUFBM0IsR0FBa0NBLFdBQVcsS0FBN0M7O0FBRUEsVUFBSUosUUFBSixFQUFjO0FBQ1osZUFBT0EsU0FBVUksUUFBVixDQUFQO0FBQ0Q7QUFDRixLQVJGO0FBU0YsR0FiRDtBQWNEOztBQUVELCtEQUFlZCxVQUFmIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQmFja2dyb3VuZCgpIHtcbiAgdGhpcy5vcGVuTmV3VGFiID0gZnVuY3Rpb24obmV3VXJsKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBuZXdVcmwgfSk7XG4gIH0sXG4gIHRoaXMuZ2V0Q29va2llcyA9IGZ1bmN0aW9uKGRvbWFpbiwgbmFtZSwgY2FsbGJhY2spIHtcbiAgICAgY2hyb21lLmNvb2tpZXMuZ2V0QWxsKHsgdXJsOiBkb21haW4sIG5hbWUgOiBuYW1lIH0sIGZ1bmN0aW9uKGNvb2tpZSkge1xuICAgICAgICBsZXQgbG9nZ2VkSW4gPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coY29va2llKVxuICAgICAgICBjb29raWUubGVuZ3RoID8gbG9nZ2VkSW4gPSB0cnVlIDogbG9nZ2VkSW4gPSBmYWxzZTtcblxuICAgICAgICBpZiggY2FsbGJhY2sgKXtcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2soIGxvZ2dlZEluIClcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ })

/******/ });