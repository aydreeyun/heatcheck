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
var api = 'https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2020-04-01';
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

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImQzIiwiY3N2IiwidGhlbiIsImRhdGEiLCJwbGF5ZXJJbWciLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibmFtZSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwicG9pbnRzIiwicmVib3VuZHMiLCJhc3Npc3RzIiwic3RlYWxzIiwiYmxvY2tzIiwidHVybm92ZXJzIiwiYWRkU3RhdHMiLCJpbm5lckhUTUwiLCJwb3MiLCJodCIsInB0cyIsInJlYiIsImFzdCIsInN0bCIsImJsayIsInRvIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWciLCJjbG9zZVN0YXRzIiwiaWR4IiwiYWRkIiwiYnV0dG9ucyIsImZvckVhY2giLCJidXR0b24iLCJpbmRleE9mIiwiZmluZCIsImVsIiwiYXBpIiwiZXZlbnQiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlZERhdGEiLCJwYXJzZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZHJhd0NoYXJ0IiwiY2F0Y2giLCJlcnIiLCJhcnIiLCJpIiwiYnBpIiwicHVzaCIsImRhdGUiLCJEYXRlIiwidmFsdWUiLCJzdmdXaWR0aCIsInN2Z0hlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsIndpZHRoIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImciLCJ4Iiwic2NhbGVUaW1lIiwicmFuZ2VSb3VuZCIsInkiLCJzY2FsZUxpbmVhciIsImxpbmUiLCJkIiwiZG9tYWluIiwiZXh0ZW50IiwiY2FsbCIsImF4aXNCb3R0b20iLCJheGlzTGVmdCIsInRleHQiLCJkYXR1bSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ0ZBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEQyxJQUFFLENBQUNDLEdBQUgsQ0FBTyxxQkFBUCxFQUNHQyxJQURILENBQ1EsVUFBQUMsSUFBSSxFQUFJO0FBQ1o7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXUixRQUFRLENBQUNTLGdCQUFULENBQTBCLGVBQTFCLENBQVgsQ0FBbEI7QUFFQSxRQUFNQyxJQUFJLEdBQUdILEtBQUssQ0FBQ0MsSUFBTixDQUFXUixRQUFRLENBQUNTLGdCQUFULENBQTBCLGNBQTFC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LElBTkwsQ0FNVSxJQU5WLEVBTWdCLFFBTmhCLEVBT0tBLElBUEwsQ0FPVSxhQVBWLEVBT3lCLEtBUHpCLEVBUUtjLElBUkwsQ0FRVSxXQVJWO0FBVUFiLEdBQUMsQ0FBQ0YsTUFBRixDQUFTLE1BQVQsRUFDS2dCLEtBREwsQ0FDV25GLElBRFgsRUFFS29FLElBRkwsQ0FFVSxNQUZWLEVBRWtCLE1BRmxCLEVBR0tBLElBSEwsQ0FHVSxRQUhWLEVBR29CLFdBSHBCLEVBSUtBLElBSkwsQ0FJVSxpQkFKVixFQUk2QixPQUo3QixFQUtLQSxJQUxMLENBS1UsZ0JBTFYsRUFLNEIsT0FMNUIsRUFNS0EsSUFOTCxDQU1VLGNBTlYsRUFNMEIsR0FOMUIsRUFPS0EsSUFQTCxDQU9VLEdBUFYsRUFPZU8sSUFQZjtBQVFELEMsQ0FHRCxLOzs7Ozs7Ozs7OztBQzlJQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuXG5pbXBvcnQgJy4vc2NyaXB0cy9jYXJkJztcbmltcG9ydCAnLi9zY3JpcHRzL2dyYXBoJzsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkMy5jc3YoXCJzcmMvZGF0YS9jYXJlZXIuY3N2XCIpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAvLyBQTEFZRVIgQ0FSRCBFTEVNRU5UU1xuICAgICAgY29uc3QgcGxheWVySW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXBob3RvJykpO1xuXG4gICAgICBjb25zdCBuYW1lID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1uYW1lXCIpKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1wb3NcIikpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1oZWlnaHRcIikpO1xuICAgICAgY29uc3QgcG9pbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvaW50c1wiKSk7XG4gICAgICBjb25zdCByZWJvdW5kcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWJvdW5kc1wiKSk7XG4gICAgICBjb25zdCBhc3Npc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFzc2lzdHNcIikpO1xuICAgICAgY29uc3Qgc3RlYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0ZWFsc1wiKSk7XG4gICAgICBjb25zdCBibG9ja3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tzXCIpKTtcbiAgICAgIGNvbnN0IHR1cm5vdmVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50dXJub3ZlcnNcIikpO1xuXG4gICAgICAvLyBQTEFZRVIgQ0FSRCBNRVRIT0RTXG4gICAgICBjb25zdCBhZGRTdGF0cyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChwb2ludHNbMF0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMV0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIEZJUlNUIENBUkQgREFUQVxuICAgICAgICAgIG5hbWVbMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgICBwb3NpdGlvblswXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICAgICAgaGVpZ2h0WzBdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAgIHBvaW50c1swXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgICByZWJvdW5kc1swXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgICAgICBhc3Npc3RzWzBdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAgIHN0ZWFsc1swXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgICBibG9ja3NbMF0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICAgICAgdHVybm92ZXJzWzBdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcblxuICAgICAgICAgIG5hbWVbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBwb3NpdGlvblswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIGhlaWdodFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgICAgICAgcGxheWVySW1nWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYFxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50c1sxXS5pbm5lckhUTUwgPT09IFwiUFRTOlwiICYmIGRhdGEubmFtZSAhPT0gbmFtZVswXS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAvLyBTRVQgMk5EIENBUkQgREFUQVxuICAgICAgICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgICBwb3NpdGlvblsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICAgICAgaGVpZ2h0WzFdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgICByZWJvdW5kc1sxXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgICAgICBhc3Npc3RzWzFdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgICBibG9ja3NbMV0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICAgICAgdHVybm92ZXJzWzFdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcblxuICAgICAgICAgIG5hbWVbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBwb3NpdGlvblsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIGhlaWdodFsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgICAgICAgcGxheWVySW1nWzFdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYFxuICAgICAgICB9IFxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAvLyBSRVBMQUNFIDJORCBDQVJEIERBVEFcbiAgICAgICAgLy8gICBpZiAobmFtZVswXS5pbm5lckhUTUwgIT09IGRhdGEubmFtZSkge1xuICAgICAgICAvLyAgICAgbmFtZVsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9YFxuICAgICAgICAvLyAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAvLyAgICAgaGVpZ2h0WzFdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAvLyAgICAgcG9pbnRzWzFdLmlubmVySFRNTCA9IGBQVFM6ICR7ZGF0YS5wdHN9YFxuICAgICAgICAvLyAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgIC8vICAgICBhc3Npc3RzWzFdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAvLyAgICAgc3RlYWxzWzFdLmlubmVySFRNTCA9IGBTVEw6ICR7ZGF0YS5zdGx9YFxuICAgICAgICAvLyAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAvLyAgICAgdHVybm92ZXJzWzFdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNsb3NlU3RhdHMgPSAoaWR4KSA9PiB7XG4gICAgICAgIG5hbWVbaWR4XS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBoZWlnaHRbaWR4XS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHBvaW50c1tpZHhdLmlubmVySFRNTCA9IFwiUFRTOlwiXG4gICAgICAgIHJlYm91bmRzW2lkeF0uaW5uZXJIVE1MID0gXCJSRUI6XCJcbiAgICAgICAgYXNzaXN0c1tpZHhdLmlubmVySFRNTCA9IFwiQVNUOlwiXG4gICAgICAgIHN0ZWFsc1tpZHhdLmlubmVySFRNTCA9IFwiU1RMOlwiXG4gICAgICAgIGJsb2Nrc1tpZHhdLmlubmVySFRNTCA9IFwiQkxLOlwiXG4gICAgICAgIHR1cm5vdmVyc1tpZHhdLmlubmVySFRNTCA9IFwiVE86XCJcblxuICAgICAgICBuYW1lW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgcG9zaXRpb25baWR4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBoZWlnaHRbaWR4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuXG4gICAgICAgIHBsYXllckltZ1tpZHhdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCJcbiAgICAgIH1cblxuICAgICAgLy8gUExBWUVSIEJVVFRPTlNcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYnV0dG9uJykpO1xuXG4gICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgY29uc3QgaWR4ID0gZGF0YS5pbmRleE9mKGRhdGEuZmluZChlbCA9PiBlbC5uYW1lID09PSBidXR0b24uaW5uZXJIVE1MKSlcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAobmFtZVswXS5pbm5lckhUTUwgID09PSBkYXRhW2lkeF0ubmFtZSkge1xuICAgICAgICAgICAgY2xvc2VTdGF0cygwKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWVbMV0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMSk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghbmFtZVswXS5pbm5lckhUTUwgfHwgIW5hbWVbMV0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgYWRkU3RhdHMoZGF0YVtpZHhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG59KSIsIi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYnV0dG9uXCIpO1xuXG4gIC8vIGNvbnN0IHNhbXBsZSA9IFtcbiAgLy8gICBbODAsIDQwLCAzMCwgOTAsIDUwLCAxMDBdLFxuICAvLyAgIFs3MCwgMTAwLCA5MCwgMjAsIDUwLCAxMCwgODBdXG4gIC8vIF1cblxuICAvLyBjb25zdCB3aWR0aCA9IDYyNSwgaGVpZ2h0ID0gNTAwO1xuXHQvLyBjb25zdCBkYXRhID0gWzEwLCAxNSwgMjAsIDI1LCAzMF07XG5cdFxuXHQvLyBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjZ3JhcGhcIilcblx0Ly8gXHQuYXBwZW5kKFwic3ZnXCIpXG5cdC8vIFx0LmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgLy8gICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gIC8vICAgLnN0eWxlKCdjb2xvcicsICcjZmZmJylcblxuXHQvLyBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG5cdC8vIFx0LmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcblx0Ly8gXHQucmFuZ2UoWzAsIHdpZHRoIC0gNTBdKTtcblxuXHQvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gIC8vICAgLmRvbWFpbihbMCwgZDMubWF4KGRhdGEpXSlcbiAgLy8gICAucmFuZ2UoW2hlaWdodCAtIDUwLCAwXSk7XG5cblx0Ly8gY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgLy8gICAuc2NhbGUoeFNjYWxlKVxuICAvLyAgIC50aWNrU2l6ZSg3KVxuICAvLyAgIC50aWNrUGFkZGluZyg1KVxuXG5cdC8vIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAvLyAgIC5zY2FsZSh5U2NhbGUpXG4gIC8vICAgLnRpY2tTaXplKDUpXG5cbiAgLy8gc3ZnLmFwcGVuZChcImdcIilcbiAgLy8gICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMCwgMTApXCIpXG4gIC8vICAgLmNhbGwoeUF4aXMpO1xuXG5cdC8vIGNvbnN0IHhBeGlzVHJhbnNsYXRlID0gaGVpZ2h0IC0gNTAgKyAxMDtcblxuICAvLyBzdmcuYXBwZW5kKFwiZ1wiKVxuICAvLyAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDMwLCBcIiArIHhBeGlzVHJhbnNsYXRlICArXCIpXCIpXG4gIC8vICAgLmNhbGwoeEF4aXMpXG5cbiAgLy8gY29uc3QgbGluZSA9IHN2Zy5hcHBlbmQoXCJsaW5lXCIpXG4gIC8vICAgLmF0dHIoXCJ4MVwiLCAzMilcbiAgLy8gICAuYXR0cihcIngyXCIsIDUwMClcbiAgLy8gICAuYXR0cihcInkxXCIsIDUwKVxuICAvLyAgIC5hdHRyKFwieTJcIiwgMTAwKVxuICAvLyAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiYmxhY2tcIilcbiAgLy8gICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCA1KTtcblxuICBjb25zdCBhcGkgPSAnaHR0cHM6Ly9hcGkuY29pbmRlc2suY29tL3YxL2JwaS9oaXN0b3JpY2FsL2Nsb3NlLmpzb24/c3RhcnQ9MjAxNy0xMi0zMSZlbmQ9MjAyMC0wNC0wMSc7XG5cbi8qKlxuICogTG9hZGluZyBkYXRhIGZyb20gQVBJIHdoZW4gRE9NIENvbnRlbnQgaGFzIGJlZW4gbG9hZGVkJy5cbiAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbmZldGNoKGFwaSlcbiAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkgeyByZXR1cm4gcmVzcG9uc2UuanNvbigpOyB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhcnNlZERhdGEgPSBwYXJzZURhdGEoZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZERhdGEpXG4gICAgICAgIGRyYXdDaGFydChwYXJzZWREYXRhKTtcbiAgICB9KVxuICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHsgY29uc29sZS5sb2coZXJyKTsgfSlcbn0pO1xuXG4vKipcbiAqIFBhcnNlIGRhdGEgaW50byBrZXktdmFsdWUgcGFpcnNcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIE9iamVjdCBjb250YWluaW5nIGhpc3RvcmljYWwgZGF0YSBvZiBCUElcbiAqL1xuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yICh2YXIgaSBpbiBkYXRhLmJwaSkge1xuICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShpKSwgLy9kYXRlXG4gICAgICAgICAgICB2YWx1ZTogK2RhdGEuYnBpW2ldIC8vY29udmVydCBzdHJpbmcgdG8gbnVtYmVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjaGFydCB1c2luZyBEM1xuICogQHBhcmFtIHtvYmplY3R9IGRhdGEgT2JqZWN0IGNvbnRhaW5pbmcgaGlzdG9yaWNhbCBkYXRhIG9mIEJQSVxuICovXG5mdW5jdGlvbiBkcmF3Q2hhcnQoZGF0YSkge1xuICB2YXIgc3ZnV2lkdGggPSA2MDAsIHN2Z0hlaWdodCA9IDQwMDtcbiAgdmFyIG1hcmdpbiA9IHsgdG9wOiAyMCwgcmlnaHQ6IDIwLCBib3R0b206IDMwLCBsZWZ0OiA1MCB9O1xuICB2YXIgd2lkdGggPSBzdmdXaWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICB2YXIgaGVpZ2h0ID0gc3ZnSGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG5cbiAgdmFyIHN2ZyA9IGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgLmFwcGVuZCgnc3ZnJylcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgc3ZnV2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBzdmdIZWlnaHQpO1xuICAgICAgXG4gIHZhciBnID0gc3ZnLmFwcGVuZChcImdcIilcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgdmFyIHggPSBkMy5zY2FsZVRpbWUoKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoXSk7XG5cbiAgdmFyIHkgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgdmFyIGxpbmUgPSBkMy5saW5lKClcbiAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHgoZC5kYXRlKX0pXG4gICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5KGQudmFsdWUpfSlcbiAgICAgIHguZG9tYWluKGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLmRhdGUgfSkpO1xuICAgICAgeS5kb21haW4oZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSkpO1xuXG4gIGcuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4KSlcbiAgICAgIC5zZWxlY3QoXCIuZG9tYWluXCIpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgZy5hcHBlbmQoXCJnXCIpXG4gICAgICAuY2FsbChkMy5heGlzTGVmdCh5KSlcbiAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjMDAwXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjcxZW1cIilcbiAgICAgIC5hdHRyKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgIC50ZXh0KFwiUHJpY2UgKCQpXCIpO1xuXG4gIGcuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmRhdHVtKGRhdGEpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcInN0ZWVsYmx1ZVwiKVxuICAgICAgLmF0dHIoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKVxuICAgICAgLmF0dHIoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgICAuYXR0cihcImRcIiwgbGluZSk7XG59XG5cblxuLy8gfSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9