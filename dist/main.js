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
/* harmony import */ var _scripts_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/search */ "./src/scripts/search.js");
/* harmony import */ var _scripts_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/graph */ "./src/scripts/graph.js");
/* harmony import */ var _scripts_graph__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_graph__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/scripts/graph.js":
/*!******************************!*\
  !*** ./src/scripts/graph.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// document.addEventListener('DOMContentLoaded', () => {
// const svg = d3.select('#graph')
// const button = document.querySelector(".player-button");
// const sample = [
//   [80, 40, 30, 90, 50, 100],
//   [70, 100, 90, 20, 50, 10, 80]
// ]
// const width = 625, height = 500;
// const data = [10, 15, 20, 25, 30];
// const svg = d3.select("#graph")
// 	.append("svg")
// 	.attr("width", width)
//   .attr("height", height)
//   .style('color', '#fff')
// const xScale = d3.scaleLinear()
// 	.domain([0, d3.max(data)])
// 	.range([0, width - 50]);
// const yScale = d3.scaleLinear()
//   .domain([0, d3.max(data)])
//   .range([height - 50, 0]);
// const xAxis = d3.axisBottom()
//   .scale(xScale)
//   .tickSize(7)
//   .tickPadding(5)
// const yAxis = d3.axisLeft()
//   .scale(yScale)
//   .tickSize(5)
// svg.append("g")
//   .attr("transform", "translate(30, 10)")
//   .call(yAxis);
// const xAxisTranslate = height - 50 + 10;
// svg.append("g")
//   .attr("transform", "translate(30, " + xAxisTranslate  +")")
//   .call(xAxis)
// const line = svg.append("line")
//   .attr("x1", 32)
//   .attr("x2", 500)
//   .attr("y1", 50)
//   .attr("y2", 100)
//   .attr("stroke", "black")
//   .attr("stroke-width", 5);
var api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2019-04-01';
/**
 * Loading data from API when DOM Content has been loaded'.
 */

document.addEventListener("DOMContentLoaded", function (event) {
  fetch(api).then(function (response) {
    return response.json();
  }).then(function (data) {
    var parsedData = parseData(data);
    console.log(data);
    console.log(parsedData);
    drawChart(parsedData);
  }).catch(function (err) {
    console.log(err);
  });
});
/**
 * Parse data into key-value pairs
 * @param {object} data Object containing historical data of BPI
 */

function parseData(data) {
  var arr = [];

  for (var i in data.bpi) {
    arr.push({
      date: new Date(i),
      //date
      value: +data.bpi[i] //convert string to number

    });
  }

  return arr;
}
/**
 * Creates a chart using D3
 * @param {object} data Object containing historical data of BPI
 */


function drawChart(data) {
  var svgWidth = 600,
      svgHeight = 400;
  var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
  };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;
  var svg = d3.select('#graph').append('svg').attr("width", svgWidth).attr("height", svgHeight);
  var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([height, 0]);
  var line = d3.line().x(function (d) {
    return x(d.date);
  }).y(function (d) {
    return y(d.value);
  });
  x.domain(d3.extent(data, function (d) {
    return d.date;
  }));
  y.domain(d3.extent(data, function (d) {
    return d.value;
  }));
  g.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(x)).select(".domain").remove();
  g.append("g").call(d3.axisLeft(y)).append("text").attr("fill", "#000").attr("transform", "rotate(-90)").attr("y", 6).attr("dy", "0.71em").attr("text-anchor", "end").text("Price ($)");
  g.append("path").datum(data).attr("fill", "none").attr("stroke", "steelblue").attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1.5).attr("d", line);
} // })

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJhcGkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJwYXJzZWREYXRhIiwicGFyc2VEYXRhIiwiY29uc29sZSIsImxvZyIsImRyYXdDaGFydCIsImNhdGNoIiwiZXJyIiwiYXJyIiwiaSIsImJwaSIsInB1c2giLCJkYXRlIiwiRGF0ZSIsInZhbHVlIiwic3ZnV2lkdGgiLCJzdmdIZWlnaHQiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImciLCJ4Iiwic2NhbGVUaW1lIiwicmFuZ2VSb3VuZCIsInkiLCJzY2FsZUxpbmVhciIsImxpbmUiLCJkIiwiZG9tYWluIiwiZXh0ZW50IiwiY2FsbCIsImF4aXNCb3R0b20iLCJyZW1vdmUiLCJheGlzTGVmdCIsInRleHQiLCJkYXR1bSIsImNzdiIsInBsYXllckltZyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYW1lIiwicG9zaXRpb24iLCJwb2ludHMiLCJyZWJvdW5kcyIsImFzc2lzdHMiLCJzdGVhbHMiLCJibG9ja3MiLCJ0dXJub3ZlcnMiLCJhZGRTdGF0cyIsImlubmVySFRNTCIsInBvcyIsImh0IiwicHRzIiwicmViIiwiYXN0Iiwic3RsIiwiYmxrIiwidG8iLCJjbGFzc0xpc3QiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltZyIsImNsb3NlU3RhdHMiLCJpZHgiLCJhZGQiLCJidXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4T2YiLCJmaW5kIiwiZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNGQTtBQUNFO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0Q7QUFFQTtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBRUQ7QUFDQTtBQUNBO0FBRUE7QUFDQztBQUNBO0FBRUQ7QUFDQztBQUNBO0FBQ0E7QUFFRDtBQUNDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFRDtBQUVDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLHVGQUFaO0FBRUY7Ozs7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEw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LElBQUksQ0FBQ3lFLEdBQUQsQ0FBSixDQUFVdkIsSUFBckMsRUFBMkM7QUFDaERzQixvQkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNBSyxnQkFBTSxDQUFDVCxTQUFQLENBQWlCM0IsTUFBakIsQ0FBd0IsUUFBeEI7QUFDRCxTQUhNLE1BR0E7QUFDTCxjQUFJLENBQUNTLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUVMsU0FBVCxJQUFzQixDQUFDVCxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFTLFNBQW5DLEVBQThDO0FBQzVDa0Isa0JBQU0sQ0FBQ1QsU0FBUCxDQUFpQk0sR0FBakIsQ0FBcUIsUUFBckI7QUFDRDs7QUFFRGhCLGtCQUFRLENBQUMxRCxJQUFJLENBQUN5RSxHQUFELENBQUwsQ0FBUjtBQUNEO0FBQ0YsT0FkRDtBQWVELEtBbEJEO0FBbUJELEdBNUdIO0FBNkdELENBOUdELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvc2VhcmNoJztcbmltcG9ydCAnLi9zY3JpcHRzL2dyYXBoJzsiLCIvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJyNncmFwaCcpXG4gIC8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJ1dHRvblwiKTtcblxuICAvLyBjb25zdCBzYW1wbGUgPSBbXG4gIC8vICAgWzgwLCA0MCwgMzAsIDkwLCA1MCwgMTAwXSxcbiAgLy8gICBbNzAsIDEwMCwgOTAsIDIwLCA1MCwgMTAsIDgwXVxuICAvLyBdXG5cbiAgLy8gY29uc3Qgd2lkdGggPSA2MjUsIGhlaWdodCA9IDUwMDtcblx0Ly8gY29uc3QgZGF0YSA9IFsxMCwgMTUsIDIwLCAyNSwgMzBdO1xuXHRcblx0Ly8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2dyYXBoXCIpXG5cdC8vIFx0LmFwcGVuZChcInN2Z1wiKVxuXHQvLyBcdC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gIC8vICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAvLyAgIC5zdHlsZSgnY29sb3InLCAnI2ZmZicpXG5cblx0Ly8gY29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHQvLyBcdC5kb21haW4oWzAsIGQzLm1heChkYXRhKV0pXG5cdC8vIFx0LnJhbmdlKFswLCB3aWR0aCAtIDUwXSk7XG5cblx0Ly8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAvLyAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhKV0pXG4gIC8vICAgLnJhbmdlKFtoZWlnaHQgLSA1MCwgMF0pO1xuXG5cdC8vIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gIC8vICAgLnNjYWxlKHhTY2FsZSlcbiAgLy8gICAudGlja1NpemUoNylcbiAgLy8gICAudGlja1BhZGRpbmcoNSlcblxuXHQvLyBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgLy8gICAuc2NhbGUoeVNjYWxlKVxuICAvLyAgIC50aWNrU2l6ZSg1KVxuXG4gIC8vIHN2Zy5hcHBlbmQoXCJnXCIpXG4gIC8vICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMzAsIDEwKVwiKVxuICAvLyAgIC5jYWxsKHlBeGlzKTtcblxuXHQvLyBjb25zdCB4QXhpc1RyYW5zbGF0ZSA9IGhlaWdodCAtIDUwICsgMTA7XG5cbiAgLy8gc3ZnLmFwcGVuZChcImdcIilcbiAgLy8gICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMCwgXCIgKyB4QXhpc1RyYW5zbGF0ZSAgK1wiKVwiKVxuICAvLyAgIC5jYWxsKHhBeGlzKVxuXG4gIC8vIGNvbnN0IGxpbmUgPSBzdmcuYXBwZW5kKFwibGluZVwiKVxuICAvLyAgIC5hdHRyKFwieDFcIiwgMzIpXG4gIC8vICAgLmF0dHIoXCJ4MlwiLCA1MDApXG4gIC8vICAgLmF0dHIoXCJ5MVwiLCA1MClcbiAgLy8gICAuYXR0cihcInkyXCIsIDEwMClcbiAgLy8gICAuYXR0cihcInN0cm9rZVwiLCBcImJsYWNrXCIpXG4gIC8vICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgNSk7XG5cbiAgY29uc3QgYXBpID0gJ2h0dHBzOi8vYXBpLmNvaW5kZXNrLmNvbS92MS9icGkvaGlzdG9yaWNhbC9jbG9zZS5qc29uP3N0YXJ0PTIwMTctMTItMzEmZW5kPTIwMTktMDQtMDEnO1xuXG4vKipcbiAqIExvYWRpbmcgZGF0YSBmcm9tIEFQSSB3aGVuIERPTSBDb250ZW50IGhhcyBiZWVuIGxvYWRlZCcuXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5mZXRjaChhcGkpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHsgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgfSlcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHZhciBwYXJzZWREYXRhID0gcGFyc2VEYXRhKGRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWREYXRhKVxuICAgICAgICBkcmF3Q2hhcnQocGFyc2VkRGF0YSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUubG9nKGVycik7IH0pXG59KTtcblxuLyoqXG4gKiBQYXJzZSBkYXRhIGludG8ga2V5LXZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSBPYmplY3QgY29udGFpbmluZyBoaXN0b3JpY2FsIGRhdGEgb2YgQlBJXG4gKi9cbmZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvciAodmFyIGkgaW4gZGF0YS5icGkpIHtcbiAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoaSksIC8vZGF0ZVxuICAgICAgICAgICAgdmFsdWU6ICtkYXRhLmJwaVtpXSAvL2NvbnZlcnQgc3RyaW5nIHRvIG51bWJlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycjtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2hhcnQgdXNpbmcgRDNcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIE9iamVjdCBjb250YWluaW5nIGhpc3RvcmljYWwgZGF0YSBvZiBCUElcbiAqL1xuZnVuY3Rpb24gZHJhd0NoYXJ0KGRhdGEpIHtcbiAgdmFyIHN2Z1dpZHRoID0gNjAwLCBzdmdIZWlnaHQgPSA0MDA7XG4gIHZhciBtYXJnaW4gPSB7IHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAzMCwgbGVmdDogNTAgfTtcbiAgdmFyIHdpZHRoID0gc3ZnV2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgdmFyIGhlaWdodCA9IHN2Z0hlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4gIHZhciBzdmcgPSBkMy5zZWxlY3QoJyNncmFwaCcpXG4gIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIHN2Z1dpZHRoKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgc3ZnSGVpZ2h0KTtcbiAgICAgIFxuICB2YXIgZyA9IHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIG1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBtYXJnaW4udG9wICsgXCIpXCIpO1xuXG4gIHZhciB4ID0gZDMuc2NhbGVUaW1lKClcbiAgICAgIC5yYW5nZVJvdW5kKFswLCB3aWR0aF0pO1xuXG4gIHZhciB5ID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gIHZhciBsaW5lID0gZDMubGluZSgpXG4gICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiB4KGQuZGF0ZSl9KVxuICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geShkLnZhbHVlKX0pXG4gICAgICB4LmRvbWFpbihkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC5kYXRlIH0pKTtcbiAgICAgIHkuZG9tYWluKGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0pKTtcblxuICBnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgIC5jYWxsKGQzLmF4aXNCb3R0b20oeCkpXG4gICAgICAuc2VsZWN0KFwiLmRvbWFpblwiKVxuICAgICAgLnJlbW92ZSgpO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeSkpXG4gICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiIzAwMFwiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAuYXR0cihcImR5XCIsIFwiMC43MWVtXCIpXG4gICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAudGV4dChcIlByaWNlICgkKVwiKTtcblxuICBnLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5kYXR1bShkYXRhKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCJzdGVlbGJsdWVcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxuICAgICAgLmF0dHIoXCJkXCIsIGxpbmUpO1xufVxuXG5cbi8vIH0pIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZDMuY3N2KFwic3JjL2RhdGEvY2FyZWVyLmNzdlwiKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgLy8gUExBWUVSIENBUkQgRUxFTUVOVFNcbiAgICAgIGNvbnN0IHBsYXllckltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1waG90bycpKTtcblxuICAgICAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKSk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItcG9zXCIpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItaGVpZ2h0XCIpKTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb2ludHNcIikpO1xuICAgICAgY29uc3QgcmVib3VuZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVib3VuZHNcIikpO1xuICAgICAgY29uc3QgYXNzaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hc3Npc3RzXCIpKTtcbiAgICAgIGNvbnN0IHN0ZWFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVhbHNcIikpO1xuICAgICAgY29uc3QgYmxvY2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2Nrc1wiKSk7XG4gICAgICBjb25zdCB0dXJub3ZlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHVybm92ZXJzXCIpKTtcblxuICAgICAgLy8gUExBWUVSIENBUkQgTUVUSE9EU1xuICAgICAgY29uc3QgYWRkU3RhdHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAocG9pbnRzWzBdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgIC8vIFNFVCBGSVJTVCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzBdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFswXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMF0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMF0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1swXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMF0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzBdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1swXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1swXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHNbMV0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMF0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIDJORCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1sxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgLy8gUkVQTEFDRSAyTkQgQ0FSRCBEQVRBXG4gICAgICAgIC8vICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICE9PSBkYXRhLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgLy8gICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgLy8gICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgLy8gICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAvLyAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgLy8gICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgLy8gICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgLy8gICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVN0YXRzID0gKGlkeCkgPT4ge1xuICAgICAgICBuYW1lW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb3NpdGlvbltpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgaGVpZ2h0W2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb2ludHNbaWR4XS5pbm5lckhUTUwgPSBcIlBUUzpcIlxuICAgICAgICByZWJvdW5kc1tpZHhdLmlubmVySFRNTCA9IFwiUkVCOlwiXG4gICAgICAgIGFzc2lzdHNbaWR4XS5pbm5lckhUTUwgPSBcIkFTVDpcIlxuICAgICAgICBzdGVhbHNbaWR4XS5pbm5lckhUTUwgPSBcIlNUTDpcIlxuICAgICAgICBibG9ja3NbaWR4XS5pbm5lckhUTUwgPSBcIkJMSzpcIlxuICAgICAgICB0dXJub3ZlcnNbaWR4XS5pbm5lckhUTUwgPSBcIlRPOlwiXG5cbiAgICAgICAgbmFtZVtpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgaGVpZ2h0W2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxuICAgICAgICBwbGF5ZXJJbWdbaWR4XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiXG4gICAgICB9XG5cbiAgICAgIC8vIFBMQVlFUiBCVVRUT05TXG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJ1dHRvbicpKTtcblxuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRhdGEuaW5kZXhPZihkYXRhLmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gYnV0dG9uLmlubmVySFRNTCkpXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMCk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lWzFdLmlubmVySFRNTCAgPT09IGRhdGFbaWR4XS5uYW1lKSB7XG4gICAgICAgICAgICBjbG9zZVN0YXRzKDEpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVbMF0uaW5uZXJIVE1MIHx8ICFuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGFkZFN0YXRzKGRhdGFbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9