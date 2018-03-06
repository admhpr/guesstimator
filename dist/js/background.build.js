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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nfunction Background() {\n\n  this.storage = window.localStorage, this.openNewTab = function (newUrl) {\n    chrome.tabs.create({ url: newUrl });\n  }, this.getCookies = function (domain, callback) {\n    chrome.cookies.getAll({ url: domain }, function (cookie) {\n      if (callback) {\n        callback(cookie);\n      }\n    });\n  }, this.getLocalStorage = function (key) {\n    return this.storage.getItem(key);\n  }, this.setLocalStorage = function (key, value) {\n    this.storage.setItem(key, value);\n  }, this.removeLocalStorage = function (key) {\n    this.storage.removeItem(key);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz82NDBmIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJzdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwib3Blbk5ld1RhYiIsIm5ld1VybCIsImNocm9tZSIsInRhYnMiLCJjcmVhdGUiLCJ1cmwiLCJnZXRDb29raWVzIiwiZG9tYWluIiwiY2FsbGJhY2siLCJjb29raWVzIiwiZ2V0QWxsIiwiY29va2llIiwiZ2V0TG9jYWxTdG9yYWdlIiwia2V5IiwiZ2V0SXRlbSIsInNldExvY2FsU3RvcmFnZSIsInZhbHVlIiwic2V0SXRlbSIsInJlbW92ZUxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsU0FBU0EsVUFBVCxHQUFzQjs7QUFFcEIsT0FBS0MsT0FBTCxHQUFlQyxPQUFPQyxZQUF0QixFQUVBLEtBQUtDLFVBQUwsR0FBa0IsVUFBU0MsTUFBVCxFQUFpQjtBQUNqQ0MsV0FBT0MsSUFBUCxDQUFZQyxNQUFaLENBQW1CLEVBQUVDLEtBQUtKLE1BQVAsRUFBbkI7QUFDRCxHQUpELEVBTUEsS0FBS0ssVUFBTCxHQUFrQixVQUFTQyxNQUFULEVBQWlCQyxRQUFqQixFQUEyQjtBQUMxQ04sV0FBT08sT0FBUCxDQUFlQyxNQUFmLENBQXNCLEVBQUVMLEtBQUtFLE1BQVAsRUFBdEIsRUFBdUMsVUFBU0ksTUFBVCxFQUFpQjtBQUN0RCxVQUFJSCxRQUFKLEVBQWM7QUFDWkEsaUJBQVNHLE1BQVQ7QUFDRDtBQUNGLEtBSkQ7QUFLRixHQVpELEVBY0EsS0FBS0MsZUFBTCxHQUF1QixVQUFTQyxHQUFULEVBQWE7QUFDbEMsV0FBTyxLQUFLaEIsT0FBTCxDQUFhaUIsT0FBYixDQUFxQkQsR0FBckIsQ0FBUDtBQUNELEdBaEJELEVBa0JBLEtBQUtFLGVBQUwsR0FBdUIsVUFBU0YsR0FBVCxFQUFhRyxLQUFiLEVBQW1CO0FBQ3hDLFNBQUtuQixPQUFMLENBQWFvQixPQUFiLENBQXFCSixHQUFyQixFQUF5QkcsS0FBekI7QUFDRCxHQXBCRCxFQXNCQSxLQUFLRSxrQkFBTCxHQUEwQixVQUFTTCxHQUFULEVBQWE7QUFDckMsU0FBS2hCLE9BQUwsQ0FBYXNCLFVBQWIsQ0FBd0JOLEdBQXhCO0FBQ0QsR0F4QkQ7QUF5QkQ7O0FBRUQsK0RBQWVqQixVQUFmIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gQmFja2dyb3VuZCgpIHtcbiAgXG4gIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UsXG5cbiAgdGhpcy5vcGVuTmV3VGFiID0gZnVuY3Rpb24obmV3VXJsKSB7XG4gICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBuZXdVcmwgfSk7XG4gIH0sXG5cbiAgdGhpcy5nZXRDb29raWVzID0gZnVuY3Rpb24oZG9tYWluLCBjYWxsYmFjaykge1xuICAgICBjaHJvbWUuY29va2llcy5nZXRBbGwoeyB1cmw6IGRvbWFpbiB9LCBmdW5jdGlvbihjb29raWUpIHtcbiAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgIGNhbGxiYWNrKGNvb2tpZSk7XG4gICAgICAgfVxuICAgICB9KTtcbiAgfSxcblxuICB0aGlzLmdldExvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gIH0sXG5cbiAgdGhpcy5zZXRMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbihrZXksdmFsdWUpe1xuICAgIHRoaXMuc3RvcmFnZS5zZXRJdGVtKGtleSx2YWx1ZSk7XG4gIH0sXG5cbiAgdGhpcy5yZW1vdmVMb2NhbFN0b3JhZ2UgPSBmdW5jdGlvbihrZXkpe1xuICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFja2dyb3VuZDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ })

/******/ });