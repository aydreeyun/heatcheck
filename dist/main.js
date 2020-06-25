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
  var width = 687.5;
  var height = 550;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsInBsYXllckltZyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJwb2ludHMiLCJyZWJvdW5kcyIsImFzc2lzdHMiLCJzdGVhbHMiLCJibG9ja3MiLCJ0dXJub3ZlcnMiLCJhZGRTdGF0cyIsImlubmVySFRNTCIsInBvcyIsImh0IiwicHRzIiwicmViIiwiYXN0Iiwic3RsIiwiYmxrIiwidG8iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltZyIsImNsb3NlU3RhdHMiLCJpZHgiLCJhZGQiLCJidXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4T2YiLCJmaW5kIiwiZWwiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImdyYXBoV2lkdGgiLCJncmFwaEhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwieVNjYWxlIiwiYWRkTGluZSIsInN0YXQiLCJkYXRhTmFtZSIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJwYXJzZWREYXRhIiwicGFyc2VEYXRhIiwiYXJyIiwicHVzaCIsInNlYXNvbiIsInBhcnNlRmxvYXQiLCJkcmF3R3JhcGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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bUIwRCxRQUFuQixXQUNHekQsSUFESCxDQUNRLFVBQUFDLElBQUksRUFBSTtBQUNaLFVBQU0yRCxVQUFVLEdBQUdDLFNBQVMsQ0FBQzVELElBQUQsRUFBT3VELElBQVAsQ0FBNUI7QUFHRCxLQUxIO0FBTUQsR0FURDs7QUFXQSxNQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDNUQsSUFBRCxFQUFPdUQsSUFBUCxFQUFnQjtBQUNoQyxRQUFNTSxHQUFHLEdBQUcsRUFBWjtBQUVBN0QsUUFBSSxDQUFDaUMsT0FBTCxDQUFhLFVBQUFJLEVBQUUsRUFBSTtBQUNqQndCLFNBQUcsQ0FBQ0MsSUFBSjtBQUNFQyxjQUFNLEVBQUUxQixFQUFFLENBQUMwQjtBQURiLFNBRUdSLElBRkgsRUFFVVMsVUFBVSxDQUFDM0IsRUFBRSxDQUFDa0IsSUFBRCxDQUFILENBRnBCO0FBSUQsS0FMRDtBQU9BLFdBQU9NLEdBQVA7QUFDRCxHQVhEOztBQVlBOztBQUNBLE1BQU1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUFqRSxJQUFJLEVBQUksQ0FFekIsQ0FGRDtBQUdELENBOUNELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvY2FyZCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ncmFwaCc7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZDMuY3N2KFwic3JjL2RhdGEvY2FyZWVyLmNzdlwiKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgLy8gUExBWUVSIENBUkQgRUxFTUVOVFNcbiAgICAgIGNvbnN0IHBsYXllckltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1waG90bycpKTtcblxuICAgICAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKSk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItcG9zXCIpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItaGVpZ2h0XCIpKTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb2ludHNcIikpO1xuICAgICAgY29uc3QgcmVib3VuZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVib3VuZHNcIikpO1xuICAgICAgY29uc3QgYXNzaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hc3Npc3RzXCIpKTtcbiAgICAgIGNvbnN0IHN0ZWFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVhbHNcIikpO1xuICAgICAgY29uc3QgYmxvY2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2Nrc1wiKSk7XG4gICAgICBjb25zdCB0dXJub3ZlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHVybm92ZXJzXCIpKTtcblxuICAgICAgLy8gUExBWUVSIENBUkQgTUVUSE9EU1xuICAgICAgY29uc3QgYWRkU3RhdHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAocG9pbnRzWzBdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgIC8vIFNFVCBGSVJTVCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzBdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFswXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMF0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMF0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1swXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMF0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzBdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1swXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1swXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHNbMV0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMF0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIDJORCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1sxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgLy8gUkVQTEFDRSAyTkQgQ0FSRCBEQVRBXG4gICAgICAgIC8vICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICE9PSBkYXRhLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgLy8gICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgLy8gICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgLy8gICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAvLyAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgLy8gICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgLy8gICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgLy8gICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVN0YXRzID0gKGlkeCkgPT4ge1xuICAgICAgICBuYW1lW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb3NpdGlvbltpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgaGVpZ2h0W2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb2ludHNbaWR4XS5pbm5lckhUTUwgPSBcIlBUUzpcIlxuICAgICAgICByZWJvdW5kc1tpZHhdLmlubmVySFRNTCA9IFwiUkVCOlwiXG4gICAgICAgIGFzc2lzdHNbaWR4XS5pbm5lckhUTUwgPSBcIkFTVDpcIlxuICAgICAgICBzdGVhbHNbaWR4XS5pbm5lckhUTUwgPSBcIlNUTDpcIlxuICAgICAgICBibG9ja3NbaWR4XS5pbm5lckhUTUwgPSBcIkJMSzpcIlxuICAgICAgICB0dXJub3ZlcnNbaWR4XS5pbm5lckhUTUwgPSBcIlRPOlwiXG5cbiAgICAgICAgbmFtZVtpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgaGVpZ2h0W2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxuICAgICAgICBwbGF5ZXJJbWdbaWR4XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiXG4gICAgICB9XG5cbiAgICAgIC8vIFBMQVlFUiBCVVRUT05TXG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJ1dHRvbicpKTtcblxuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRhdGEuaW5kZXhPZihkYXRhLmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gYnV0dG9uLmlubmVySFRNTCkpXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMCk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lWzFdLmlubmVySFRNTCAgPT09IGRhdGFbaWR4XS5uYW1lKSB7XG4gICAgICAgICAgICBjbG9zZVN0YXRzKDEpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVbMF0uaW5uZXJIVE1MIHx8ICFuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGFkZFN0YXRzKGRhdGFbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogNTAsIHJpZ2h0OiA1MCwgYm90dG9tOiA1MCwgbGVmdDogNTAgfTtcbiAgY29uc3Qgd2lkdGggPSA2ODcuNTtcbiAgY29uc3QgaGVpZ2h0ID0gNTUwO1xuICBjb25zdCBncmFwaFdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgZ3JhcGhIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgXG4gIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsICcxMDAlJylcbiAgICAuYXR0cignaGVpZ2h0JywgaGVpZ2h0KVxuICAgIC5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBtYXJnaW4uYm90dG9tICsgJywnICsgbWFyZ2luLnRvcCArICcpJylcblxuICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgLnJhbmdlKFswLCBncmFwaFdpZHRoXSlcbiAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIC5yYW5nZShbZ3JhcGhIZWlnaHQsIDBdKVxuXG4gIGNvbnN0IGFkZExpbmUgPSAobmFtZSwgc3RhdCkgPT4ge1xuICAgIGNvbnN0IGRhdGFOYW1lID0gbmFtZS5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKTtcblxuICAgIGQzLmNzdihgc3JjL2RhdGEvJHtkYXRhTmFtZX0uY3N2YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gcGFyc2VEYXRhKGRhdGEsIHN0YXQpO1xuXG5cbiAgICAgIH0pXG4gIH07XG5cbiAgY29uc3QgcGFyc2VEYXRhID0gKGRhdGEsIHN0YXQpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICBhcnIucHVzaCh7XG4gICAgICAgIHNlYXNvbjogZWwuc2Vhc29uLFxuICAgICAgICBbc3RhdF06IHBhcnNlRmxvYXQoZWxbc3RhdF0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIGRlYnVnZ2VyXG4gIGNvbnN0IGRyYXdHcmFwaCA9IGRhdGEgPT4ge1xuICAgIFxuICB9XG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=