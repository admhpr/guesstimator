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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nfunction Background() {\n\n  this.storage = window.localStorage, this.openNewTab = function (newUrl) {\n    chrome.tabs.create({ url: newUrl });\n  }, this.getCookies = function (domain, name, callback) {\n    chrome.cookies.getAll({ url: domain, name: name }, function (cookie) {\n      var loggedIn = false;\n      console.log(cookie);\n      cookie.length ? loggedIn = true : loggedIn = false;\n\n      if (callback) {\n        return callback(loggedIn);\n      }\n    });\n  }, this.getLocalStorage = function (key) {\n    return this.storage.getItem(key);\n  }, this.setLocalStorage = function (key, value) {\n    this.storage.setItem(key, value);\n  }, this.removeLocalStorage = function (key) {\n    this.storage.removeItem(key);\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Background);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC5qcz82NDBmIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJzdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwib3Blbk5ld1RhYiIsIm5ld1VybCIsImNocm9tZSIsInRhYnMiLCJjcmVhdGUiLCJ1cmwiLCJnZXRDb29raWVzIiwiZG9tYWluIiwibmFtZSIsImNhbGxiYWNrIiwiY29va2llcyIsImdldEFsbCIsImNvb2tpZSIsImxvZ2dlZEluIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImdldExvY2FsU3RvcmFnZSIsImtleSIsImdldEl0ZW0iLCJzZXRMb2NhbFN0b3JhZ2UiLCJ2YWx1ZSIsInNldEl0ZW0iLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLFNBQVNBLFVBQVQsR0FBc0I7O0FBRXBCLE9BQUtDLE9BQUwsR0FBZUMsT0FBT0MsWUFBdEIsRUFFQSxLQUFLQyxVQUFMLEdBQWtCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakNDLFdBQU9DLElBQVAsQ0FBWUMsTUFBWixDQUFtQixFQUFFQyxLQUFLSixNQUFQLEVBQW5CO0FBQ0QsR0FKRCxFQU1BLEtBQUtLLFVBQUwsR0FBa0IsVUFBU0MsTUFBVCxFQUFpQkMsSUFBakIsRUFBdUJDLFFBQXZCLEVBQWlDO0FBQ2hEUCxXQUFPUSxPQUFQLENBQWVDLE1BQWYsQ0FBc0IsRUFBRU4sS0FBS0UsTUFBUCxFQUFlQyxNQUFPQSxJQUF0QixFQUF0QixFQUFvRCxVQUFTSSxNQUFULEVBQWlCO0FBQ2xFLFVBQUlDLFdBQVcsS0FBZjtBQUNBQyxjQUFRQyxHQUFSLENBQVlILE1BQVo7QUFDQUEsYUFBT0ksTUFBUCxHQUFnQkgsV0FBVyxJQUEzQixHQUFrQ0EsV0FBVyxLQUE3Qzs7QUFFQSxVQUFJSixRQUFKLEVBQWM7QUFDWixlQUFPQSxTQUFVSSxRQUFWLENBQVA7QUFDRDtBQUNGLEtBUkY7QUFTRixHQWhCRCxFQWtCQSxLQUFLSSxlQUFMLEdBQXVCLFVBQVNDLEdBQVQsRUFBYTtBQUNsQyxXQUFPLEtBQUtyQixPQUFMLENBQWFzQixPQUFiLENBQXFCRCxHQUFyQixDQUFQO0FBQ0QsR0FwQkQsRUFzQkEsS0FBS0UsZUFBTCxHQUF1QixVQUFTRixHQUFULEVBQWFHLEtBQWIsRUFBbUI7QUFDeEMsU0FBS3hCLE9BQUwsQ0FBYXlCLE9BQWIsQ0FBcUJKLEdBQXJCLEVBQXlCRyxLQUF6QjtBQUNELEdBeEJELEVBMEJBLEtBQUtFLGtCQUFMLEdBQTBCLFVBQVNMLEdBQVQsRUFBYTtBQUNyQyxTQUFLckIsT0FBTCxDQUFhMkIsVUFBYixDQUF3Qk4sR0FBeEI7QUFDRCxHQTVCRDtBQTZCRDs7QUFFRCwrREFBZXRCLFVBQWYiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBCYWNrZ3JvdW5kKCkge1xuICBcbiAgdGhpcy5zdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZSxcblxuICB0aGlzLm9wZW5OZXdUYWIgPSBmdW5jdGlvbihuZXdVcmwpIHtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IG5ld1VybCB9KTtcbiAgfSxcblxuICB0aGlzLmdldENvb2tpZXMgPSBmdW5jdGlvbihkb21haW4sIG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgIGNocm9tZS5jb29raWVzLmdldEFsbCh7IHVybDogZG9tYWluLCBuYW1lIDogbmFtZSB9LCBmdW5jdGlvbihjb29raWUpIHtcbiAgICAgICAgbGV0IGxvZ2dlZEluID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZSlcbiAgICAgICAgY29va2llLmxlbmd0aCA/IGxvZ2dlZEluID0gdHJ1ZSA6IGxvZ2dlZEluID0gZmFsc2U7XG5cbiAgICAgICAgaWYoIGNhbGxiYWNrICl7XG4gICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCBsb2dnZWRJbiApXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9LFxuXG4gIHRoaXMuZ2V0TG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgfSxcblxuICB0aGlzLnNldExvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKGtleSx2YWx1ZSl7XG4gICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LHZhbHVlKTtcbiAgfSxcblxuICB0aGlzLnJlbW92ZUxvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uKGtleSl7XG4gICAgdGhpcy5zdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JhY2tncm91bmQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ })

/******/ });