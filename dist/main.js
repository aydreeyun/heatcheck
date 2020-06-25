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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card */ "./src/scripts/card.js");
/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/graph */ "./src/scripts/graph.js");
/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_graph__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  d3.csv("src/data/career.csv").then(function (data) {
    // PLAYER CARD ELEMENTS
    var playerImg = Array.from(document.querySelectorAll('.player-photo'));
    var name = Array.from(document.querySelectorAll(".player-name"));
    var position = Array.from(document.querySelectorAll(".player-pos"));
    var height = Array.from(document.querySelectorAll(".player-height"));
    var points = Array.from(document.querySelectorAll(".points"));
    var rebounds = Array.from(document.querySelectorAll(".rebounds"));
    var assists = Array.from(document.querySelectorAll(".assists"));
    var steals = Array.from(document.querySelectorAll(".steals"));
    var blocks = Array.from(document.querySelectorAll(".blocks"));
    var turnovers = Array.from(document.querySelectorAll(".turnovers")); // PLAYER CARD METHODS

    var addStats = function addStats(data) {
      if (points[0].innerHTML === "PTS:" && data.name !== name[1].innerHTML) {
        // SET FIRST CARD DATA
        name[0].innerHTML = "".concat(data.name);
        position[0].innerHTML = "".concat(data.pos);
        height[0].innerHTML = "".concat(data.ht);
        points[0].innerHTML = "PTS: ".concat(data.pts);
        rebounds[0].innerHTML = "REB: ".concat(data.reb);
        assists[0].innerHTML = "AST: ".concat(data.ast);
        steals[0].innerHTML = "STL: ".concat(data.stl);
        blocks[0].innerHTML = "BLK: ".concat(data.blk);
        turnovers[0].innerHTML = "TO: ".concat(data.to);
        name[0].classList.remove('hidden');
        position[0].classList.remove('hidden');
        height[0].classList.remove('hidden');
        playerImg[0].style.backgroundImage = "url(".concat(data.img, ")");
      } else if (points[1].innerHTML === "PTS:" && data.name !== name[0].innerHTML) {
        // SET 2ND CARD DATA
        name[1].innerHTML = "".concat(data.name);
        position[1].innerHTML = "".concat(data.pos);
        height[1].innerHTML = "".concat(data.ht);
        points[1].innerHTML = "PTS: ".concat(data.pts);
        rebounds[1].innerHTML = "REB: ".concat(data.reb);
        assists[1].innerHTML = "AST: ".concat(data.ast);
        steals[1].innerHTML = "STL: ".concat(data.stl);
        blocks[1].innerHTML = "BLK: ".concat(data.blk);
        turnovers[1].innerHTML = "TO: ".concat(data.to);
        name[1].classList.remove('hidden');
        position[1].classList.remove('hidden');
        height[1].classList.remove('hidden');
        playerImg[1].style.backgroundImage = "url(".concat(data.img, ")");
      } // else {
      //   // REPLACE 2ND CARD DATA
      //   if (name[0].innerHTML !== data.name) {
      //     name[1].innerHTML = `${data.name}`
      //     position[1].innerHTML = `${data.pos}`
      //     height[1].innerHTML = `${data.ht}`
      //     points[1].innerHTML = `PTS: ${data.pts}`
      //     rebounds[1].innerHTML = `REB: ${data.reb}`
      //     assists[1].innerHTML = `AST: ${data.ast}`
      //     steals[1].innerHTML = `STL: ${data.stl}`
      //     blocks[1].innerHTML = `BLK: ${data.blk}`
      //     turnovers[1].innerHTML = `TO: ${data.to}`
      //   }
      // }

    };

    var closeStats = function closeStats(idx) {
      name[idx].innerHTML = "";
      position[idx].innerHTML = "";
      height[idx].innerHTML = "";
      points[idx].innerHTML = "PTS:";
      rebounds[idx].innerHTML = "REB:";
      assists[idx].innerHTML = "AST:";
      steals[idx].innerHTML = "STL:";
      blocks[idx].innerHTML = "BLK:";
      turnovers[idx].innerHTML = "TO:";
      name[idx].classList.add('hidden');
      position[idx].classList.add('hidden');
      height[idx].classList.add('hidden');
      playerImg[idx].style.backgroundImage = "";
    }; // PLAYER BUTTONS


    var buttons = Array.from(document.querySelectorAll('.player-button'));
    buttons.forEach(function (button) {
      var idx = data.indexOf(data.find(function (el) {
        return el.name === button.innerHTML;
      }));
      button.addEventListener("click", function () {
        if (name[0].innerHTML === data[idx].name) {
          closeStats(0);
          button.classList.remove('active');
        } else if (name[1].innerHTML === data[idx].name) {
          closeStats(1);
          button.classList.remove('active');
        } else {
          if (!name[0].innerHTML || !name[1].innerHTML) {
            button.classList.add('active');
          }

          addStats(data[idx]);
        }
      });
    });
  });
});

/***/ }),

/***/ "./src/scripts/graph.js":
/*!******************************!*\
  !*** ./src/scripts/graph.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };
  var width = 625;
  var height = 500;
  var graphWidth = width - margin.left - margin.right;
  var graphHeight = height - margin.top - margin.bottom;
  var svg = d3.select('#graph').append('svg').attr('width', '100%').attr('height', height).append('g').attr('transform', 'translate(' + margin.bottom + ',' + margin.top + ')');
  var xScale = d3.scaleLinear().range([0, graphWidth]);
  var yScale = d3.scaleLinear().range([graphHeight, 0]);

  var addLine = function addLine(name, stat) {
    var dataName = name.split(" ")[1].toLowerCase();
    d3.csv("src/data/".concat(dataName, ".csv")).then(function (data) {
      var parsedData = parseData(data, stat);
    });
  };

  var parseData = function parseData(data, stat) {
    var arr = [];
    data.forEach(function (el) {
      arr.push(_defineProperty({
        season: el.season
      }, stat, parseFloat(el[stat])));
    });
    return arr;
  };

  debugger;

  var drawGraph = function drawGraph(data) {};
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJwbGF5ZXJJbWciLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibmFtZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwicG9pbnRzIiwicmVib3VuZHMiLCJhc3Npc3RzIiwic3RlYWxzIiwiYmxvY2tzIiwidHVybm92ZXJzIiwiYWRkU3RhdHMiLCJpbm5lckhUTUwiLCJwb3MiLCJodCIsInB0cyIsInJlYiIsImFzdCIsInN0bCIsImJsayIsInRvIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWciLCJjbG9zZVN0YXRzIiwiaWR4IiwiYWRkIiwiYnV0dG9ucyIsImZvckVhY2giLCJidXR0b24iLCJpbmRleE9mIiwiZmluZCIsImVsIiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwid2lkdGgiLCJncmFwaFdpZHRoIiwiZ3JhcGhIZWlnaHQiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwieFNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZSIsInlTY2FsZSIsImFkZExpbmUiLCJzdGF0IiwiZGF0YU5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwicGFyc2VkRGF0YSIsInBhcnNlRGF0YSIsImFyciIsInB1c2giLCJzZWFzb24iLCJwYXJzZUZsb2F0IiwiZHJhd0dyYXBoIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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UUFBbkIsV0FDR3pELElBREgsQ0FDUSxVQUFBQyxJQUFJLEVBQUk7QUFDWixVQUFNMkQsVUFBVSxHQUFHQyxTQUFTLENBQUM1RCxJQUFELEVBQU91RCxJQUFQLENBQTVCO0FBR0QsS0FMSDtBQU1ELEdBVEQ7O0FBV0EsTUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzVELElBQUQsRUFBT3VELElBQVAsRUFBZ0I7QUFDaEMsUUFBTU0sR0FBRyxHQUFHLEVBQVo7QUFFQTdELFFBQUksQ0FBQ2lDLE9BQUwsQ0FBYSxVQUFBSSxFQUFFLEVBQUk7QUFDakJ3QixTQUFHLENBQUNDLElBQUo7QUFDRUMsY0FBTSxFQUFFMUIsRUFBRSxDQUFDMEI7QUFEYixTQUVHUixJQUZILEVBRVVTLFVBQVUsQ0FBQzNCLEVBQUUsQ0FBQ2tCLElBQUQsQ0FBSCxDQUZwQjtBQUlELEtBTEQ7QUFPQSxXQUFPTSxHQUFQO0FBQ0QsR0FYRDs7QUFZQTs7QUFDQSxNQUFNSSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFBakUsSUFBSSxFQUFJLENBRXpCLENBRkQ7QUFHRCxDQTlDRCxFOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3JpcHRzL2NhcmQnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZ3JhcGgnOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGQzLmNzdihcInNyYy9kYXRhL2NhcmVlci5jc3ZcIilcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIC8vIFBMQVlFUiBDQVJEIEVMRU1FTlRTXG4gICAgICBjb25zdCBwbGF5ZXJJbWcgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItcGhvdG8nKSk7XG5cbiAgICAgIGNvbnN0IG5hbWUgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLW5hbWVcIikpO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLXBvc1wiKSk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWhlaWdodFwiKSk7XG4gICAgICBjb25zdCBwb2ludHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9pbnRzXCIpKTtcbiAgICAgIGNvbnN0IHJlYm91bmRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlYm91bmRzXCIpKTtcbiAgICAgIGNvbnN0IGFzc2lzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXNzaXN0c1wiKSk7XG4gICAgICBjb25zdCBzdGVhbHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3RlYWxzXCIpKTtcbiAgICAgIGNvbnN0IGJsb2NrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ibG9ja3NcIikpO1xuICAgICAgY29uc3QgdHVybm92ZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnR1cm5vdmVyc1wiKSk7XG5cbiAgICAgIC8vIFBMQVlFUiBDQVJEIE1FVEhPRFNcbiAgICAgIGNvbnN0IGFkZFN0YXRzID0gKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKHBvaW50c1swXS5pbm5lckhUTUwgPT09IFwiUFRTOlwiICYmIGRhdGEubmFtZSAhPT0gbmFtZVsxXS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAvLyBTRVQgRklSU1QgQ0FSRCBEQVRBXG4gICAgICAgICAgbmFtZVswXS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9YFxuICAgICAgICAgIHBvc2l0aW9uWzBdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgICBoZWlnaHRbMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5odH1gXG4gICAgICAgICAgcG9pbnRzWzBdLmlubmVySFRNTCA9IGBQVFM6ICR7ZGF0YS5wdHN9YFxuICAgICAgICAgIHJlYm91bmRzWzBdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAgIGFzc2lzdHNbMF0uaW5uZXJIVE1MID0gYEFTVDogJHtkYXRhLmFzdH1gXG4gICAgICAgICAgc3RlYWxzWzBdLmlubmVySFRNTCA9IGBTVEw6ICR7ZGF0YS5zdGx9YFxuICAgICAgICAgIGJsb2Nrc1swXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgICB0dXJub3ZlcnNbMF0uaW5uZXJIVE1MID0gYFRPOiAke2RhdGEudG99YFxuXG4gICAgICAgICAgbmFtZVswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIHBvc2l0aW9uWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgaGVpZ2h0WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICAgICAgICBwbGF5ZXJJbWdbMF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RhdGEuaW1nfSlgXG4gICAgICAgIH0gZWxzZSBpZiAocG9pbnRzWzFdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzBdLmlubmVySFRNTCkge1xuICAgICAgICAgIC8vIFNFVCAyTkQgQ0FSRCBEQVRBXG4gICAgICAgICAgbmFtZVsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9YFxuICAgICAgICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgICBoZWlnaHRbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5odH1gXG4gICAgICAgICAgcG9pbnRzWzFdLmlubmVySFRNTCA9IGBQVFM6ICR7ZGF0YS5wdHN9YFxuICAgICAgICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAgIGFzc2lzdHNbMV0uaW5uZXJIVE1MID0gYEFTVDogJHtkYXRhLmFzdH1gXG4gICAgICAgICAgc3RlYWxzWzFdLmlubmVySFRNTCA9IGBTVEw6ICR7ZGF0YS5zdGx9YFxuICAgICAgICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgICB0dXJub3ZlcnNbMV0uaW5uZXJIVE1MID0gYFRPOiAke2RhdGEudG99YFxuXG4gICAgICAgICAgbmFtZVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIHBvc2l0aW9uWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgaGVpZ2h0WzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG5cbiAgICAgICAgICBwbGF5ZXJJbWdbMV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2RhdGEuaW1nfSlgXG4gICAgICAgIH0gXG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgIC8vIFJFUExBQ0UgMk5EIENBUkQgREFUQVxuICAgICAgICAvLyAgIGlmIChuYW1lWzBdLmlubmVySFRNTCAhPT0gZGF0YS5uYW1lKSB7XG4gICAgICAgIC8vICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgIC8vICAgICBwb3NpdGlvblsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICAgIC8vICAgICBoZWlnaHRbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5odH1gXG4gICAgICAgIC8vICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgIC8vICAgICByZWJvdW5kc1sxXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgICAgLy8gICAgIGFzc2lzdHNbMV0uaW5uZXJIVE1MID0gYEFTVDogJHtkYXRhLmFzdH1gXG4gICAgICAgIC8vICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgIC8vICAgICBibG9ja3NbMV0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICAgIC8vICAgICB0dXJub3ZlcnNbMV0uaW5uZXJIVE1MID0gYFRPOiAke2RhdGEudG99YFxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgY2xvc2VTdGF0cyA9IChpZHgpID0+IHtcbiAgICAgICAgbmFtZVtpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgcG9zaXRpb25baWR4XS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIGhlaWdodFtpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgcG9pbnRzW2lkeF0uaW5uZXJIVE1MID0gXCJQVFM6XCJcbiAgICAgICAgcmVib3VuZHNbaWR4XS5pbm5lckhUTUwgPSBcIlJFQjpcIlxuICAgICAgICBhc3Npc3RzW2lkeF0uaW5uZXJIVE1MID0gXCJBU1Q6XCJcbiAgICAgICAgc3RlYWxzW2lkeF0uaW5uZXJIVE1MID0gXCJTVEw6XCJcbiAgICAgICAgYmxvY2tzW2lkeF0uaW5uZXJIVE1MID0gXCJCTEs6XCJcbiAgICAgICAgdHVybm92ZXJzW2lkeF0uaW5uZXJIVE1MID0gXCJUTzpcIlxuXG4gICAgICAgIG5hbWVbaWR4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBwb3NpdGlvbltpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIGhlaWdodFtpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cbiAgICAgICAgcGxheWVySW1nW2lkeF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIlxuICAgICAgfVxuXG4gICAgICAvLyBQTEFZRVIgQlVUVE9OU1xuICAgICAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1idXR0b24nKSk7XG5cbiAgICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBjb25zdCBpZHggPSBkYXRhLmluZGV4T2YoZGF0YS5maW5kKGVsID0+IGVsLm5hbWUgPT09IGJ1dHRvbi5pbm5lckhUTUwpKVxuXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGlmIChuYW1lWzBdLmlubmVySFRNTCAgPT09IGRhdGFbaWR4XS5uYW1lKSB7XG4gICAgICAgICAgICBjbG9zZVN0YXRzKDApO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmFtZVsxXS5pbm5lckhUTUwgID09PSBkYXRhW2lkeF0ubmFtZSkge1xuICAgICAgICAgICAgY2xvc2VTdGF0cygxKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFuYW1lWzBdLmlubmVySFRNTCB8fCAhbmFtZVsxXS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgICBhZGRTdGF0cyhkYXRhW2lkeF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn0pIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgbWFyZ2luID0geyB0b3A6IDUwLCByaWdodDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwIH07XG4gIGNvbnN0IHdpZHRoID0gNjI1O1xuICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gIGNvbnN0IGdyYXBoV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBncmFwaEhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBcbiAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZ3JhcGgnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgJzEwMCUnKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG1hcmdpbi5ib3R0b20gKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuXG4gIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAucmFuZ2UoWzAsIGdyYXBoV2lkdGhdKVxuICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgLnJhbmdlKFtncmFwaEhlaWdodCwgMF0pXG5cbiAgY29uc3QgYWRkTGluZSA9IChuYW1lLCBzdGF0KSA9PiB7XG4gICAgY29uc3QgZGF0YU5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKVsxXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZDMuY3N2KGBzcmMvZGF0YS8ke2RhdGFOYW1lfS5jc3ZgKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZURhdGEoZGF0YSwgc3RhdCk7XG5cbiAgICAgICAgXG4gICAgICB9KVxuICB9O1xuXG4gIGNvbnN0IHBhcnNlRGF0YSA9IChkYXRhLCBzdGF0KSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgYXJyLnB1c2goe1xuICAgICAgICBzZWFzb246IGVsLnNlYXNvbixcbiAgICAgICAgW3N0YXRdOiBwYXJzZUZsb2F0KGVsW3N0YXRdKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBkZWJ1Z2dlclxuICBjb25zdCBkcmF3R3JhcGggPSBkYXRhID0+IHtcbiAgICBcbiAgfVxufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9