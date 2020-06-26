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
    top: 15,
    right: 15,
    bottom: 30,
    left: 30
  };
  var width = 687.5;
  var height = 550;
  var graphWidth = width - margin.left - margin.right;
  var graphHeight = height - margin.top - margin.bottom;
  var svg = d3.select('#graph').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + margin.bottom + ',' + margin.top + ')'); // X-AXIS

  var xScale = d3.scaleLinear().range([0, graphWidth]);
  svg.append("g").attr("transform", "translate(0," + graphHeight + ")").call(d3.axisBottom(xScale)); // Y-AXIS

  var yScale = d3.scaleLinear().range([graphHeight, 0]);
  svg.append("g").call(d3.axisLeft(yScale)); // DRAW LINE

  var drawLine = function drawLine(name, stat) {
    var dataName = name.split(" ")[1].toLowerCase();
    svg.selectAll('g').remove();
    d3.csv("src/data/".concat(dataName, ".csv")).then(function (data) {
      var parsedData = parseData(data, stat); // X-AXIS

      var xValues = parsedData.map(function (obj) {
        return obj.season;
      });
      var xScale = d3.scalePoint().domain(xValues).range([0, graphWidth]);
      svg.append("g").attr("transform", "translate(0," + graphHeight + ")").call(d3.axisBottom(xScale)); // Y-AXIS

      if (stat === "pts") {
        var _yScale = d3.scaleLinear().domain([0, 50]).range([graphHeight, 0]);

        svg.append("g").call(d3.axisLeft(_yScale).tickValues([0, 10, 20, 30, 40, 50]));
      } else if (stat === "reb" || stat === "ast") {
        var _yScale2 = d3.scaleLinear().domain([0, 12]).range([graphHeight, 0]);

        svg.append("g").call(d3.axisLeft(_yScale2).tickValues([0, 2, 4, 6, 8, 10, 12]));
      } else if (stat === "stl" || stat === "blk") {
        var _yScale3 = d3.scaleLinear().domain([0, 4]).range([graphHeight, 0]);

        svg.append("g").call(d3.axisLeft(_yScale3).tickValues([0, 1, 2, 3, 4]));
      } else if (stat === "to") {
        var _yScale4 = d3.scaleLinear().domain([0, 6]).range([graphHeight, 0]);

        svg.append("g").call(d3.axisLeft(_yScale4).tickValues([0, 2, 4, 6]));
      } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
        var _yScale5 = d3.scaleLinear().domain([0, 1]).range([graphHeight, 0]);

        svg.append("g").call(d3.axisLeft(_yScale5).tickValues([0, 0.2, 0.4, 0.6, 0.8, 1.0]));
      }
    }); // svg.selectAll('.node')
    //   .data(parsedData)
    //   .enter()
    //   .append('circle')
    //   .attr('class', 'node')
    //   .attr("r", '3') // radius property of node
    //   .attr('fill', '#00ffff')
    //   // .attr("fill", "none")
    //   // .attr("stroke", "steelblue")
    //   // .attr("stroke-width", 1.5)
    //   // .attr("d", d3.line()
    //   //   .x(d => { debugger; return x(d.season) })
    //   //   .y(d => { debugger; return y(d[stat]) })
    //   // )
    // })
  }; // PARSE DATA


  var parseData = function parseData(data, stat) {
    var arr = [];
    data.forEach(function (el) {
      arr.push(_defineProperty({
        season: el.season
      }, stat, parseFloat(el[stat])));
    });
    return arr;
  }; // PLAYER BUTTONS


  var buttons = document.querySelectorAll('.player-button');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      drawLine(button.innerHTML, "pts");
    });
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsInBsYXllckltZyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJwb2ludHMiLCJyZWJvdW5kcyIsImFzc2lzdHMiLCJzdGVhbHMiLCJibG9ja3MiLCJ0dXJub3ZlcnMiLCJhZGRTdGF0cyIsImlubmVySFRNTCIsInBvcyIsImh0IiwicHRzIiwicmViIiwiYXN0Iiwic3RsIiwiYmxrIiwidG8iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltZyIsImNsb3NlU3RhdHMiLCJpZHgiLCJhZGQiLCJidXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4T2YiLCJmaW5kIiwiZWwiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImdyYXBoV2lkdGgiLCJncmFwaEhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ5U2NhbGUiLCJheGlzTGVmdCIsImRyYXdMaW5lIiwic3RhdCIsImRhdGFOYW1lIiwic3BsaXQiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdEFsbCIsInBhcnNlZERhdGEiLCJwYXJzZURhdGEiLCJ4VmFsdWVzIiwibWFwIiwib2JqIiwic2Vhc29uIiwic2NhbGVQb2ludCIs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTCxHQTNFRCxDQTlCa0QsQ0EyR2xEOzs7QUFDQSxNQUFNUCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDaEUsSUFBRCxFQUFPMEQsSUFBUCxFQUFnQjtBQUNoQyxRQUFNYyxHQUFHLEdBQUcsRUFBWjtBQUVBeEUsUUFBSSxDQUFDaUMsT0FBTCxDQUFhLFVBQUFJLEVBQUUsRUFBSTtBQUNqQm1DLFNBQUcsQ0FBQ0MsSUFBSjtBQUNFTCxjQUFNLEVBQUUvQixFQUFFLENBQUMrQjtBQURiLFNBRUdWLElBRkgsRUFFVWdCLFVBQVUsQ0FBQ3JDLEVBQUUsQ0FBQ3FCLElBQUQsQ0FBSCxDQUZwQjtBQUlELEtBTEQ7QUFPQSxXQUFPYyxHQUFQO0FBQ0QsR0FYRCxDQTVHa0QsQ0F5SGxEOzs7QUFDQSxNQUFNeEMsT0FBTyxHQUFHckMsUUFBUSxDQUFDUyxnQkFBVCxDQUEwQixnQkFBMUIsQ0FBaEI7QUFFQTRCLFNBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDeEJBLFVBQU0sQ0FBQ3RDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckM2RCxjQUFRLENBQUN2QixNQUFNLENBQUNuQixTQUFSLEVBQW1CLEtBQW5CLENBQVI7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQU1ELENBbElELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvY2FyZCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ncmFwaCc7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZDMuY3N2KFwic3JjL2RhdGEvY2FyZWVyLmNzdlwiKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgLy8gUExBWUVSIENBUkQgRUxFTUVOVFNcbiAgICAgIGNvbnN0IHBsYXllckltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1waG90bycpKTtcblxuICAgICAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKSk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItcG9zXCIpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItaGVpZ2h0XCIpKTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb2ludHNcIikpO1xuICAgICAgY29uc3QgcmVib3VuZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVib3VuZHNcIikpO1xuICAgICAgY29uc3QgYXNzaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hc3Npc3RzXCIpKTtcbiAgICAgIGNvbnN0IHN0ZWFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVhbHNcIikpO1xuICAgICAgY29uc3QgYmxvY2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2Nrc1wiKSk7XG4gICAgICBjb25zdCB0dXJub3ZlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHVybm92ZXJzXCIpKTtcblxuICAgICAgLy8gUExBWUVSIENBUkQgTUVUSE9EU1xuICAgICAgY29uc3QgYWRkU3RhdHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAocG9pbnRzWzBdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgIC8vIFNFVCBGSVJTVCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzBdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFswXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMF0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMF0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1swXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMF0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzBdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1swXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1swXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHNbMV0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMF0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIDJORCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1sxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgLy8gUkVQTEFDRSAyTkQgQ0FSRCBEQVRBXG4gICAgICAgIC8vICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICE9PSBkYXRhLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgLy8gICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgLy8gICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgLy8gICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAvLyAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgLy8gICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgLy8gICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgLy8gICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVN0YXRzID0gKGlkeCkgPT4ge1xuICAgICAgICBuYW1lW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb3NpdGlvbltpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgaGVpZ2h0W2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb2ludHNbaWR4XS5pbm5lckhUTUwgPSBcIlBUUzpcIlxuICAgICAgICByZWJvdW5kc1tpZHhdLmlubmVySFRNTCA9IFwiUkVCOlwiXG4gICAgICAgIGFzc2lzdHNbaWR4XS5pbm5lckhUTUwgPSBcIkFTVDpcIlxuICAgICAgICBzdGVhbHNbaWR4XS5pbm5lckhUTUwgPSBcIlNUTDpcIlxuICAgICAgICBibG9ja3NbaWR4XS5pbm5lckhUTUwgPSBcIkJMSzpcIlxuICAgICAgICB0dXJub3ZlcnNbaWR4XS5pbm5lckhUTUwgPSBcIlRPOlwiXG5cbiAgICAgICAgbmFtZVtpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgaGVpZ2h0W2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxuICAgICAgICBwbGF5ZXJJbWdbaWR4XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiXG4gICAgICB9XG5cbiAgICAgIC8vIFBMQVlFUiBCVVRUT05TXG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJ1dHRvbicpKTtcblxuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRhdGEuaW5kZXhPZihkYXRhLmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gYnV0dG9uLmlubmVySFRNTCkpXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMCk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lWzFdLmlubmVySFRNTCAgPT09IGRhdGFbaWR4XS5uYW1lKSB7XG4gICAgICAgICAgICBjbG9zZVN0YXRzKDEpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVbMF0uaW5uZXJIVE1MIHx8ICFuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGFkZFN0YXRzKGRhdGFbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAxNSwgYm90dG9tOiAzMCwgbGVmdDogMzAgfTtcbiAgY29uc3Qgd2lkdGggPSA2ODcuNTtcbiAgY29uc3QgaGVpZ2h0ID0gNTUwO1xuICBjb25zdCBncmFwaFdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgZ3JhcGhIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgXG4gIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG1hcmdpbi5ib3R0b20gKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuXG4gIC8vIFgtQVhJU1xuICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgLnJhbmdlKFswLCBncmFwaFdpZHRoXSlcblxuICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBncmFwaEhlaWdodCArIFwiKVwiKVxuICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeFNjYWxlKSk7XG5cbiAgLy8gWS1BWElTXG4gIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAucmFuZ2UoW2dyYXBoSGVpZ2h0LCAwXSlcblxuICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkpO1xuXG4gIC8vIERSQVcgTElORVxuICBjb25zdCBkcmF3TGluZSA9IChuYW1lLCBzdGF0KSA9PiB7XG4gICAgY29uc3QgZGF0YU5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKVsxXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgc3ZnLnNlbGVjdEFsbCgnZycpLnJlbW92ZSgpO1xuICAgIGQzLmNzdihgc3JjL2RhdGEvJHtkYXRhTmFtZX0uY3N2YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gcGFyc2VEYXRhKGRhdGEsIHN0YXQpO1xuICAgICAgICBcbiAgICAgICAgLy8gWC1BWElTXG4gICAgICAgIGNvbnN0IHhWYWx1ZXMgPSBwYXJzZWREYXRhLm1hcChvYmogPT4gb2JqLnNlYXNvbilcbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVQb2ludCgpXG4gICAgICAgICAgLmRvbWFpbih4VmFsdWVzKVxuICAgICAgICAgIC5yYW5nZShbMCwgZ3JhcGhXaWR0aF0pXG5cbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgZ3JhcGhIZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gICAgICAgIC8vIFktQVhJU1xuICAgICAgICBpZiAoc3RhdCA9PT0gXCJwdHNcIikge1xuICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAuZG9tYWluKFswLCA1MF0pXG4gICAgICAgICAgLnJhbmdlKFtncmFwaEhlaWdodCwgMF0pXG5cbiAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAxMCwgMjAsIDMwLCA0MCwgNTBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJyZWJcIiB8fCBzdGF0ID09PSBcImFzdFwiKSB7XG4gICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5kb21haW4oWzAsIDEyXSlcbiAgICAgICAgICAucmFuZ2UoW2dyYXBoSGVpZ2h0LCAwXSlcblxuICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDIsIDQsIDYsIDgsIDEwLCAxMl0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInN0bFwiIHx8IHN0YXQgPT09IFwiYmxrXCIpIHtcbiAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihbMCwgNF0pXG4gICAgICAgICAgLnJhbmdlKFtncmFwaEhlaWdodCwgMF0pXG5cbiAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAxLCAyLCAzLCA0XSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXQgPT09IFwidG9cIikge1xuICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKClcbiAgICAgICAgICAuZG9tYWluKFswLCA2XSlcbiAgICAgICAgICAucmFuZ2UoW2dyYXBoSGVpZ2h0LCAwXSlcblxuICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDIsIDQsIDZdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJmZyVcIiB8fCBzdGF0ID09PSBcIjNwJVwiIHx8IHN0YXQgPT09IFwiZnQlXCIpIHtcbiAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLmRvbWFpbihbMCwgMV0pXG4gICAgICAgICAgLnJhbmdlKFtncmFwaEhlaWdodCwgMF0pXG5cbiAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAwLjIsIDAuNCwgMC42LCAwLjgsIDEuMF0pKTtcbiAgICAgICAgfVxuXG4gICAgICB9KVxuXG5cbiAgICAgICAgLy8gc3ZnLnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAvLyAgIC5kYXRhKHBhcnNlZERhdGEpXG4gICAgICAgIC8vICAgLmVudGVyKClcbiAgICAgICAgLy8gICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAvLyAgIC5hdHRyKCdjbGFzcycsICdub2RlJylcbiAgICAgICAgLy8gICAuYXR0cihcInJcIiwgJzMnKSAvLyByYWRpdXMgcHJvcGVydHkgb2Ygbm9kZVxuICAgICAgICAvLyAgIC5hdHRyKCdmaWxsJywgJyMwMGZmZmYnKVxuICAgICAgICAvLyAgIC8vIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLy8gICAvLyAuYXR0cihcInN0cm9rZVwiLCBcInN0ZWVsYmx1ZVwiKVxuICAgICAgICAvLyAgIC8vIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAgICAgLy8gICAvLyAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgIC8vICAgLy8gICAueChkID0+IHsgZGVidWdnZXI7IHJldHVybiB4KGQuc2Vhc29uKSB9KVxuICAgICAgICAvLyAgIC8vICAgLnkoZCA9PiB7IGRlYnVnZ2VyOyByZXR1cm4geShkW3N0YXRdKSB9KVxuICAgICAgICAvLyAgIC8vIClcbiAgICAgICAgLy8gfSlcblxuICB9XG5cbiAgLy8gUEFSU0UgREFUQVxuICBjb25zdCBwYXJzZURhdGEgPSAoZGF0YSwgc3RhdCkgPT4ge1xuICAgIGNvbnN0IGFyciA9IFtdO1xuXG4gICAgZGF0YS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgc2Vhc29uOiBlbC5zZWFzb24sXG4gICAgICAgIFtzdGF0XTogcGFyc2VGbG9hdChlbFtzdGF0XSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgLy8gUExBWUVSIEJVVFRPTlNcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYnV0dG9uJylcblxuICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkcmF3TGluZShidXR0b24uaW5uZXJIVE1MLCBcInB0c1wiKTtcbiAgICB9KVxuICB9KVxuXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=