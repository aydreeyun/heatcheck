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



document.addEventListener("DOMContentLoaded", function () {
  var modalBackground = document.createElement("div");
  var modalChild = document.createElement("div");
  modalBackground.classList.add('modal-background');
  modalChild.classList.add('modal-child');
  document.querySelector('body').append(modalBackground);
  modalBackground.append(modalChild);
  modalBackground.addEventListener("click", function () {
    modalBackground.style.display = 'none';
  });
  modalChild.addEventListener('click', function (e) {
    e.stopPropagation();
  });
});

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
  var svg = d3.select('#graph').append('svg').attr('width', width).attr('height', height).append('g').attr('transform', 'translate(' + margin.bottom + ',' + margin.top + ')'); // DRAW LINE

  var currXAxisVal = 0;
  var currXAxis;
  var currPlayers = {};

  var drawLine = function drawLine(name, stat, color) {
    var dataName = name.split(" ")[1].toLowerCase();
    currPlayers[name] = {
      color: color
    };
    svg.selectAll('.axis').remove();
    d3.csv("src/data/".concat(dataName, ".csv")).then(function (data) {
      var parsedData = parseData(data, stat); // X-AXIS

      var xValues = parsedData.map(function (obj) {
        return obj.season;
      });

      if (xValues.length > currXAxisVal) {
        currXAxisVal = xValues.length;
        currXAxis = xValues;

        if (Object.keys(currPlayers).length === 2) {
          var firstPlayer = Object.keys(currPlayers)[0];
          var firstPlayerName = firstPlayer.split(" ")[1].toLowerCase();
          redrawLine(firstPlayerName, stat, currPlayers[firstPlayer].color);
        }
      }

      var xScale = d3.scalePoint().domain(currXAxis).range([0, graphWidth]);
      svg.append("g").attr("transform", "translate(0," + graphHeight + ")").attr('class', 'axis x-axis').call(d3.axisBottom(xScale)); // Y-AXIS

      var yScale = d3.scaleLinear().range([graphHeight, 0]);

      if (stat === "pts") {
        yScale.domain([0, 50]);
        svg.append("g").attr('class', 'axis y-axis').call(d3.axisLeft(yScale).tickValues([0, 10, 20, 30, 40, 50]));
      } else if (stat === "reb" || stat === "ast") {
        yScale.domain([0, 15]);
        svg.append("g").attr('class', 'axis y-axis').call(d3.axisLeft(yScale).tickValues([0, 3, 6, 9, 12, 15]));
      } else if (stat === "stl" || stat === "blk") {
        yScale.domain([0, 4]);
        svg.append("g").attr('class', 'axis y-axis').call(d3.axisLeft(yScale).tickValues([0, 1, 2, 3, 4]));
      } else if (stat === "to") {
        yScale.domain([0, 6]);
        svg.append("g").attr('class', 'axis y-axis').call(d3.axisLeft(yScale).tickValues([0, 2, 4, 6]));
      } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
        yScale.domain([0, 1]);
        svg.append("g").attr('class', 'axis y-axis').call(d3.axisLeft(yScale).tickValues([0, 0.2, 0.4, 0.6, 0.8, 1.0]));
      } // ADD LINE


      svg.append("path").datum(parsedData).attr("fill", "none").attr("stroke", "".concat(color)).attr("stroke-width", 1.5).attr('class', "line ".concat(dataName)).attr("d", d3.line().x(function (d) {
        return xScale(d.season);
      }).y(function (d) {
        return yScale(d[stat]);
      })); // ADD CIRCLE

      svg.append("g").selectAll("dot").data(parsedData).enter().append("circle").attr('class', "dot ".concat(dataName)).attr("cx", function (d) {
        return xScale(d.season);
      }).attr("cy", function (d) {
        return yScale(d[stat]);
      }).attr("r", 2.5).attr("fill", "".concat(color));
    });
  };

  var redrawLine = function redrawLine(name, stat, color) {
    svg.selectAll("path.".concat(name)).remove();
    svg.selectAll("circle.".concat(name)).remove();
    d3.csv("src/data/".concat(name, ".csv")).then(function (data) {
      var parsedData = parseData(data, stat);
      var xScale = d3.scalePoint().domain(currXAxis).range([0, graphWidth]);
      var yScale = d3.scaleLinear().range([graphHeight, 0]);

      if (stat === "pts") {
        yScale.domain([0, 50]);
      } else if (stat === "reb" || stat === "ast") {
        yScale.domain([0, 15]);
      } else if (stat === "stl" || stat === "blk") {
        yScale.domain([0, 4]);
      } else if (stat === "to") {
        yScale.domain([0, 6]);
      } else if (stat === "fg%" || stat === "3p%" || stat === "ft%") {
        yScale.domain([0, 1]);
      }

      svg.append("path").datum(parsedData).attr("fill", "none").attr("stroke", "".concat(color)).attr("stroke-width", 1.5).attr('class', "line ".concat(name)).attr("d", d3.line().x(function (d) {
        return xScale(d.season);
      }).y(function (d) {
        return yScale(d[stat]);
      })); // ADD CIRCLE

      svg.append("g").selectAll("dot").data(parsedData).enter().append("circle").attr('class', "dot ".concat(name)).attr("cx", function (d) {
        return xScale(d.season);
      }).attr("cy", function (d) {
        return yScale(d[stat]);
      }).attr("r", 2.5).attr("fill", "".concat(color));
    });
  }; // PARSE DATA


  var parseData = function parseData(data, stat) {
    var arr = [];
    data.forEach(function (el) {
      arr.push(_defineProperty({
        season: el.season
      }, stat, parseFloat(el[stat])));
    });
    return arr;
  }; // LEGEND


  var legend = document.querySelector('.graph-legend');

  var addLegend = function addLegend(name, color) {
    var legendElement = document.createElement('p');
    legendElement.innerHTML = name;
    legendElement.classList.add('legend-item', "".concat(color));
    legend.appendChild(legendElement);
  }; // PLAYER BUTTONS


  var playerButtons = Array.from(document.querySelectorAll('.player-button'));
  var colors = {
    red: false,
    dodgerblue: false
  };
  playerButtons.forEach(function (button) {
    var name = button.innerHTML;
    button.addEventListener('click', function () {
      var allLines = Array.from(document.querySelectorAll('.line'));

      if (allLines.includes(d3.select(".".concat(name.split(" ")[1].toLowerCase())).node())) {
        var lineColor = d3.select(".".concat(name.split(" ")[1].toLowerCase())).attr('stroke');
        var legendItem = document.querySelector(".graph-legend .".concat(lineColor)); // REMOVE LINE AND CIRCLE

        svg.selectAll("path.".concat(name.split(" ")[1].toLowerCase())).remove();
        svg.selectAll("circle.".concat(name.split(" ")[1].toLowerCase())).remove(); // REMOVE LEGEND ITEM

        legendItem.remove(); // DELETE PLAYER FROM CURRENT PLAYER OBJECT

        delete currPlayers[name]; // TOGGLE FALSE DELETED COLOR

        colors[lineColor] = false;
      } else if (allLines.length < 2) {
        var _lineColor;

        if (Object.values(colors).every(function (bool) {
          return !bool;
        })) {
          _lineColor = "red";
        } else if (colors['red']) {
          _lineColor = "dodgerblue";
        } else if (colors['dodgerblue']) {
          _lineColor = "red";
        }

        colors[_lineColor] = true;
        drawLine(name, currentStat, _lineColor);
        addLegend(name, _lineColor);
      }
    });
  }); // GRAPH BUTTONS

  var currentStat = "pts";
  var graphButtons = document.querySelectorAll('.graph-button');
  graphButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      graphButtons.forEach(function (button) {
        button.classList.remove('active');
      });
      currentStat = button.innerHTML.toLowerCase();
      button.classList.add('active');
      svg.selectAll('.line').remove();
      svg.selectAll('.dot').remove();
      Object.keys(currPlayers).forEach(function (player) {
        drawLine(player, currentStat, currPlayers[player].color);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vZGFsQmFja2dyb3VuZCIsImNyZWF0ZUVsZW1lbnQiLCJtb2RhbENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwicXVlcnlTZWxlY3RvciIsImFwcGVuZCIsInN0eWxlIiwiZGlzcGxheSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJkMyIsImNzdiIsInRoZW4iLCJkYXRhIiwicGxheWVySW1nIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm5hbWUiLCJwb3NpdGlvbiIsImhlaWdodCIsInBvaW50cyIsInJlYm91bmRzIiwiYXNzaXN0cyIsInN0ZWFscyIsImJsb2NrcyIsInR1cm5vdmVycyIsImFkZFN0YXRzIiwiaW5uZXJIVE1MIiwicG9zIiwiaHQiLCJwdHMiLCJyZWIiLCJhc3QiLCJzdGwiLCJibGsiLCJ0byIsInJlbW92ZSIsImJhY2tncm91bmRJbWFnZSIsImltZyIsImNsb3NlU3RhdHMiLCJpZHgiLCJidXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4T2YiLCJmaW5kIiwiZWwiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImdyYXBoV2lkdGgiLCJncmFwaEhlaWdodCIsInN2ZyIsInNlbGVjdCIsImF0dHIiLCJjdXJyWEF4aXNWYWwiLCJjdXJyWEF4aXMiLCJjdXJyUGxheWVycyIsImRyYXdMaW5lIiwic3RhdCIsImNvbG9yIiwiZGF0YU5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwic2VsZWN0QWxsIiwicGFyc2VkRGF0YSIsInBhcnNlRGF0YSIsInhWYWx1ZXMiLCJtYXAiLCJvYmoiLCJzZWFzb24iLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RQbGF5ZXIiLCJmaXJzdFBsYXllck5hbWUiLCJyZWRyYXdMaW5lIiwieFNjYWxlIiwic2NhbGVQb2ludCIsImRvbWFpbiIsInJhbmdlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwidGlja1ZhbHVlcyIsImRhdHVtIiwibGluZSIsIngiLCJkIiwieSIsImVudGVyIiwiYXJyIiwicHVzaCIsInBhcnNlRmxvYXQiLCJsZWdlbmQiLCJhZGRMZWdlbmQiLCJsZWdlbmRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJwbGF5ZXJCdXR0b25zIiwiY29sb3JzIiwicmVkIiwiZG9kZ2VyYmx1ZSIsImFsbExpbmVzIiwiaW5jbHVkZXMiLCJub2RlIiwibGluZUNvbG9yIiwibGVnZW5kSXRlbSIsInZhbHVlcyIsImV2ZXJ5IiwiYm9vbCIsImN1cnJlbnRTdGF0IiwiZ3JhcGhCdXR0b25zIiwicGxheWVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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QixlQUExQixDQUFyQjtBQUVBb0csY0FBWSxDQUFDMUUsT0FBYixDQUFxQixVQUFBQyxNQUFNLEVBQUk7QUFDN0JBLFVBQU0sQ0FBQzlDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckN1SCxrQkFBWSxDQUFDMUUsT0FBYixDQUFxQixVQUFBQyxNQUFNLEVBQUk7QUFDN0JBLGNBQU0sQ0FBQzFDLFNBQVAsQ0FBaUJtQyxNQUFqQixDQUF3QixRQUF4QjtBQUNELE9BRkQ7QUFJQStFLGlCQUFXLEdBQUd4RSxNQUFNLENBQUNoQixTQUFQLENBQWlCdUMsV0FBakIsRUFBZDtBQUNBdkIsWUFBTSxDQUFDMUMsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsUUFBckI7QUFFQXFELFNBQUcsQ0FBQ1ksU0FBSixDQUFjLE9BQWQsRUFBdUIvQixNQUF2QjtBQUNBbUIsU0FBRyxDQUFDWSxTQUFKLENBQWMsTUFBZCxFQUFzQi9CLE1BQXRCO0FBRUF1QyxZQUFNLENBQUNDLElBQVAsQ0FBWWhCLFdBQVosRUFBeUJsQixPQUF6QixDQUFpQyxVQUFBMkUsTUFBTSxFQUFJO0FBQ3pDeEQsZ0JBQVEsQ0FBQ3dELE1BQUQsRUFBU0YsV0FBVCxFQUFzQnZELFdBQVcsQ0FBQ3lELE1BQUQsQ0FBWCxDQUFvQnRELEtBQTFDLENBQVI7QUFDRCxPQUZEO0FBR0QsS0FkRDtBQWVELEdBaEJEO0FBaUJELENBOVBELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvY2FyZCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ncmFwaCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbW9kYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbW9kYWxDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tncm91bmQnKTtcbiAgbW9kYWxDaGlsZC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jaGlsZCcpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmQobW9kYWxCYWNrZ3JvdW5kKTtcbiAgbW9kYWxCYWNrZ3JvdW5kLmFwcGVuZChtb2RhbENoaWxkKTtcblxuICBtb2RhbEJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbEJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgbW9kYWxDaGlsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkMy5jc3YoXCJzcmMvZGF0YS9jYXJlZXIuY3N2XCIpXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAvLyBQTEFZRVIgQ0FSRCBFTEVNRU5UU1xuICAgICAgY29uc3QgcGxheWVySW1nID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLXBob3RvJykpO1xuXG4gICAgICBjb25zdCBuYW1lID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1uYW1lXCIpKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1wb3NcIikpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1oZWlnaHRcIikpO1xuICAgICAgY29uc3QgcG9pbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvaW50c1wiKSk7XG4gICAgICBjb25zdCByZWJvdW5kcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWJvdW5kc1wiKSk7XG4gICAgICBjb25zdCBhc3Npc3RzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFzc2lzdHNcIikpO1xuICAgICAgY29uc3Qgc3RlYWxzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN0ZWFsc1wiKSk7XG4gICAgICBjb25zdCBibG9ja3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tzXCIpKTtcbiAgICAgIGNvbnN0IHR1cm5vdmVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50dXJub3ZlcnNcIikpO1xuXG4gICAgICAvLyBQTEFZRVIgQ0FSRCBNRVRIT0RTXG4gICAgICBjb25zdCBhZGRTdGF0cyA9IChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChwb2ludHNbMF0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMV0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIEZJUlNUIENBUkQgREFUQVxuICAgICAgICAgIG5hbWVbMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgICBwb3NpdGlvblswXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICAgICAgaGVpZ2h0WzBdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAgIHBvaW50c1swXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgICByZWJvdW5kc1swXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgICAgICBhc3Npc3RzWzBdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAgIHN0ZWFsc1swXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgICBibG9ja3NbMF0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICAgICAgdHVybm92ZXJzWzBdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcblxuICAgICAgICAgIG5hbWVbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBwb3NpdGlvblswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIGhlaWdodFswXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgICAgICAgcGxheWVySW1nWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYFxuICAgICAgICB9IGVsc2UgaWYgKHBvaW50c1sxXS5pbm5lckhUTUwgPT09IFwiUFRTOlwiICYmIGRhdGEubmFtZSAhPT0gbmFtZVswXS5pbm5lckhUTUwpIHtcbiAgICAgICAgICAvLyBTRVQgMk5EIENBUkQgREFUQVxuICAgICAgICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgICBwb3NpdGlvblsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICAgICAgaGVpZ2h0WzFdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgICByZWJvdW5kc1sxXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgICAgICBhc3Npc3RzWzFdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgICBibG9ja3NbMV0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICAgICAgdHVybm92ZXJzWzFdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcblxuICAgICAgICAgIG5hbWVbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBwb3NpdGlvblsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgIGhlaWdodFsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuXG4gICAgICAgICAgcGxheWVySW1nWzFdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYFxuICAgICAgICB9IFxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgLy8gICAvLyBSRVBMQUNFIDJORCBDQVJEIERBVEFcbiAgICAgICAgLy8gICBpZiAobmFtZVswXS5pbm5lckhUTUwgIT09IGRhdGEubmFtZSkge1xuICAgICAgICAvLyAgICAgbmFtZVsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9YFxuICAgICAgICAvLyAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAvLyAgICAgaGVpZ2h0WzFdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgICAgICAvLyAgICAgcG9pbnRzWzFdLmlubmVySFRNTCA9IGBQVFM6ICR7ZGF0YS5wdHN9YFxuICAgICAgICAvLyAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgIC8vICAgICBhc3Npc3RzWzFdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgICAgICAvLyAgICAgc3RlYWxzWzFdLmlubmVySFRNTCA9IGBTVEw6ICR7ZGF0YS5zdGx9YFxuICAgICAgICAvLyAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAvLyAgICAgdHVybm92ZXJzWzFdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNsb3NlU3RhdHMgPSAoaWR4KSA9PiB7XG4gICAgICAgIG5hbWVbaWR4XS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBoZWlnaHRbaWR4XS5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgIHBvaW50c1tpZHhdLmlubmVySFRNTCA9IFwiUFRTOlwiXG4gICAgICAgIHJlYm91bmRzW2lkeF0uaW5uZXJIVE1MID0gXCJSRUI6XCJcbiAgICAgICAgYXNzaXN0c1tpZHhdLmlubmVySFRNTCA9IFwiQVNUOlwiXG4gICAgICAgIHN0ZWFsc1tpZHhdLmlubmVySFRNTCA9IFwiU1RMOlwiXG4gICAgICAgIGJsb2Nrc1tpZHhdLmlubmVySFRNTCA9IFwiQkxLOlwiXG4gICAgICAgIHR1cm5vdmVyc1tpZHhdLmlubmVySFRNTCA9IFwiVE86XCJcblxuICAgICAgICBuYW1lW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgcG9zaXRpb25baWR4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBoZWlnaHRbaWR4XS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuXG4gICAgICAgIHBsYXllckltZ1tpZHhdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCJcbiAgICAgIH1cblxuICAgICAgLy8gUExBWUVSIEJVVFRPTlNcbiAgICAgIGNvbnN0IGJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYnV0dG9uJykpO1xuXG4gICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgY29uc3QgaWR4ID0gZGF0YS5pbmRleE9mKGRhdGEuZmluZChlbCA9PiBlbC5uYW1lID09PSBidXR0b24uaW5uZXJIVE1MKSlcblxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAobmFtZVswXS5pbm5lckhUTUwgID09PSBkYXRhW2lkeF0ubmFtZSkge1xuICAgICAgICAgICAgY2xvc2VTdGF0cygwKTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG5hbWVbMV0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMSk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghbmFtZVswXS5pbm5lckhUTUwgfHwgIW5hbWVbMV0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgYWRkU3RhdHMoZGF0YVtpZHhdKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG59KSIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IG1hcmdpbiA9IHsgdG9wOiAxNSwgcmlnaHQ6IDE1LCBib3R0b206IDMwLCBsZWZ0OiAzMCB9O1xuICBjb25zdCB3aWR0aCA9IDY4Ny41O1xuICBjb25zdCBoZWlnaHQgPSA1NTA7XG4gIGNvbnN0IGdyYXBoV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBncmFwaEhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBcbiAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZ3JhcGgnKVxuICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcbiAgICAuYXBwZW5kKCdnJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgbWFyZ2luLmJvdHRvbSArICcsJyArIG1hcmdpbi50b3AgKyAnKScpXG5cbiAgLy8gRFJBVyBMSU5FXG4gIGxldCBjdXJyWEF4aXNWYWwgPSAwO1xuICBsZXQgY3VyclhBeGlzO1xuICBjb25zdCBjdXJyUGxheWVycyA9IHt9O1xuXG4gIGNvbnN0IGRyYXdMaW5lID0gKG5hbWUsIHN0YXQsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgZGF0YU5hbWUgPSBuYW1lLnNwbGl0KFwiIFwiKVsxXS50b0xvd2VyQ2FzZSgpO1xuICAgIGN1cnJQbGF5ZXJzW25hbWVdID0geyBjb2xvcjogY29sb3IgfTtcblxuICAgIHN2Zy5zZWxlY3RBbGwoJy5heGlzJykucmVtb3ZlKCk7XG4gICAgZDMuY3N2KGBzcmMvZGF0YS8ke2RhdGFOYW1lfS5jc3ZgKVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBwYXJzZURhdGEoZGF0YSwgc3RhdCk7XG4gICAgICAgIFxuICAgICAgICAvLyBYLUFYSVNcbiAgICAgICAgY29uc3QgeFZhbHVlcyA9IHBhcnNlZERhdGEubWFwKG9iaiA9PiBvYmouc2Vhc29uKVxuXG4gICAgICAgIGlmICh4VmFsdWVzLmxlbmd0aCA+IGN1cnJYQXhpc1ZhbCkge1xuICAgICAgICAgIGN1cnJYQXhpc1ZhbCA9IHhWYWx1ZXMubGVuZ3RoO1xuICAgICAgICAgIGN1cnJYQXhpcyA9IHhWYWx1ZXM7XG5cbiAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3VyclBsYXllcnMpLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgY29uc3QgZmlyc3RQbGF5ZXIgPSBPYmplY3Qua2V5cyhjdXJyUGxheWVycylbMF07XG4gICAgICAgICAgICBjb25zdCBmaXJzdFBsYXllck5hbWUgPSBmaXJzdFBsYXllci5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKTtcbiAgXG4gICAgICAgICAgICByZWRyYXdMaW5lKGZpcnN0UGxheWVyTmFtZSwgc3RhdCwgY3VyclBsYXllcnNbZmlyc3RQbGF5ZXJdLmNvbG9yKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVBvaW50KClcbiAgICAgICAgICAuZG9tYWluKGN1cnJYQXhpcylcbiAgICAgICAgICAucmFuZ2UoWzAsIGdyYXBoV2lkdGhdKVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGdyYXBoSGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgeC1heGlzJylcbiAgICAgICAgICAuY2FsbChkMy5heGlzQm90dG9tKHhTY2FsZSkpO1xuXG4gICAgICAgIC8vIFktQVhJU1xuICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgLnJhbmdlKFtncmFwaEhlaWdodCwgMF0pXG4gICAgICAgIGlmIChzdGF0ID09PSBcInB0c1wiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgNTBdKVxuXG4gICAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHktYXhpcycpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDEwLCAyMCwgMzAsIDQwLCA1MF0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInJlYlwiIHx8IHN0YXQgPT09IFwiYXN0XCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCAxNV0pXG5cbiAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgeS1heGlzJylcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkudGlja1ZhbHVlcyhbMCwgMywgNiwgOSwgMTIsIDE1XSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXQgPT09IFwic3RsXCIgfHwgc3RhdCA9PT0gXCJibGtcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDRdKVxuXG4gICAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHktYXhpcycpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDEsIDIsIDMsIDRdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJ0b1wiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgNl0pXG5cbiAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2F4aXMgeS1heGlzJylcbiAgICAgICAgICAgIC5jYWxsKGQzLmF4aXNMZWZ0KHlTY2FsZSkudGlja1ZhbHVlcyhbMCwgMiwgNCwgNl0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcImZnJVwiIHx8IHN0YXQgPT09IFwiM3AlXCIgfHwgc3RhdCA9PT0gXCJmdCVcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDFdKVxuXG4gICAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHktYXhpcycpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDAuMiwgMC40LCAwLjYsIDAuOCwgMS4wXSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQUREIExJTkVcbiAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAuZGF0dW0ocGFyc2VkRGF0YSlcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgYCR7Y29sb3J9YClcbiAgICAgICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAxLjUpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGxpbmUgJHtkYXRhTmFtZX1gKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTY2FsZShkLnNlYXNvbikgfSlcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZShkW3N0YXRdKSB9KVxuICAgICAgICAgIClcblxuICAgICAgICAvLyBBREQgQ0lSQ0xFXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLnNlbGVjdEFsbChcImRvdFwiKVxuICAgICAgICAgIC5kYXRhKHBhcnNlZERhdGEpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGRvdCAke2RhdGFOYW1lfWApXG4gICAgICAgICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB4U2NhbGUoZC5zZWFzb24pIH0gKVxuICAgICAgICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geVNjYWxlKGRbc3RhdF0pIH0gKVxuICAgICAgICAgIC5hdHRyKFwiclwiLCAyLjUpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGAke2NvbG9yfWApXG4gICAgICB9KVxuICB9XG5cbiAgY29uc3QgcmVkcmF3TGluZSA9IChuYW1lLCBzdGF0LCBjb2xvcikgPT4ge1xuICAgIHN2Zy5zZWxlY3RBbGwoYHBhdGguJHtuYW1lfWApLnJlbW92ZSgpO1xuICAgIHN2Zy5zZWxlY3RBbGwoYGNpcmNsZS4ke25hbWV9YCkucmVtb3ZlKCk7XG5cbiAgICBkMy5jc3YoYHNyYy9kYXRhLyR7bmFtZX0uY3N2YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gcGFyc2VEYXRhKGRhdGEsIHN0YXQpO1xuXG4gICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlUG9pbnQoKVxuICAgICAgICAuZG9tYWluKGN1cnJYQXhpcylcbiAgICAgICAgLnJhbmdlKFswLCBncmFwaFdpZHRoXSlcblxuICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbZ3JhcGhIZWlnaHQsIDBdKVxuXG4gICAgICAgIGlmIChzdGF0ID09PSBcInB0c1wiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgNTBdKVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXQgPT09IFwicmViXCIgfHwgc3RhdCA9PT0gXCJhc3RcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDE1XSlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInN0bFwiIHx8IHN0YXQgPT09IFwiYmxrXCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCA0XSlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInRvXCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCA2XSlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcImZnJVwiIHx8IHN0YXQgPT09IFwiM3AlXCIgfHwgc3RhdCA9PT0gXCJmdCVcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDFdKVxuICAgICAgICB9XG5cbiAgICAgICAgc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmRhdHVtKHBhcnNlZERhdGEpXG4gICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcbiAgICAgICAgLmF0dHIoXCJzdHJva2VcIiwgYCR7Y29sb3J9YClcbiAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxuICAgICAgICAuYXR0cignY2xhc3MnLCBgbGluZSAke25hbWV9YClcbiAgICAgICAgLmF0dHIoXCJkXCIsIGQzLmxpbmUoKVxuICAgICAgICAgIC54KGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTY2FsZShkLnNlYXNvbikgfSlcbiAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5U2NhbGUoZFtzdGF0XSkgfSlcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIEFERCBDSVJDTEVcbiAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuc2VsZWN0QWxsKFwiZG90XCIpXG4gICAgICAgICAgLmRhdGEocGFyc2VkRGF0YSlcbiAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAuYXR0cignY2xhc3MnLCBgZG90ICR7bmFtZX1gKVxuICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKGQuc2Vhc29uKSB9IClcbiAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZShkW3N0YXRdKSB9IClcbiAgICAgICAgICAuYXR0cihcInJcIiwgMi41KVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBgJHtjb2xvcn1gKVxuICAgICAgfSlcbiAgfVxuXG4gIC8vIFBBUlNFIERBVEFcbiAgY29uc3QgcGFyc2VEYXRhID0gKGRhdGEsIHN0YXQpID0+IHtcbiAgICBjb25zdCBhcnIgPSBbXTtcblxuICAgIGRhdGEuZm9yRWFjaChlbCA9PiB7XG4gICAgICBhcnIucHVzaCh7XG4gICAgICAgIHNlYXNvbjogZWwuc2Vhc29uLFxuICAgICAgICBbc3RhdF06IHBhcnNlRmxvYXQoZWxbc3RhdF0pXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIC8vIExFR0VORFxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JhcGgtbGVnZW5kJylcblxuICBjb25zdCBhZGRMZWdlbmQgPSAobmFtZSwgY29sb3IpID0+IHtcbiAgICBjb25zdCBsZWdlbmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxlZ2VuZEVsZW1lbnQuaW5uZXJIVE1MID0gbmFtZTtcbiAgICBsZWdlbmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xlZ2VuZC1pdGVtJywgYCR7Y29sb3J9YCk7XG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGxlZ2VuZEVsZW1lbnQpO1xuICB9XG5cbiAgLy8gUExBWUVSIEJVVFRPTlNcbiAgY29uc3QgcGxheWVyQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1idXR0b24nKSk7XG4gIGNvbnN0IGNvbG9ycyA9IHsgcmVkOiBmYWxzZSwgZG9kZ2VyYmx1ZTogZmFsc2UgfTtcblxuICBwbGF5ZXJCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBjb25zdCBuYW1lID0gYnV0dG9uLmlubmVySFRNTDtcblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGFsbExpbmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluZScpKTtcblxuICAgICAgaWYgKGFsbExpbmVzLmluY2x1ZGVzKGQzLnNlbGVjdChgLiR7bmFtZS5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKX1gKS5ub2RlKCkpKSB7XG4gICAgICAgIGNvbnN0IGxpbmVDb2xvciA9IGQzLnNlbGVjdChgLiR7bmFtZS5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKX1gKS5hdHRyKCdzdHJva2UnKTtcbiAgICAgICAgY29uc3QgbGVnZW5kSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmFwaC1sZWdlbmQgLiR7bGluZUNvbG9yfWApO1xuXG4gICAgICAgIC8vIFJFTU9WRSBMSU5FIEFORCBDSVJDTEVcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChgcGF0aC4ke25hbWUuc3BsaXQoXCIgXCIpWzFdLnRvTG93ZXJDYXNlKCl9YCkucmVtb3ZlKClcbiAgICAgICAgc3ZnLnNlbGVjdEFsbChgY2lyY2xlLiR7bmFtZS5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKX1gKS5yZW1vdmUoKVxuXG4gICAgICAgIC8vIFJFTU9WRSBMRUdFTkQgSVRFTVxuICAgICAgICBsZWdlbmRJdGVtLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vIERFTEVURSBQTEFZRVIgRlJPTSBDVVJSRU5UIFBMQVlFUiBPQkpFQ1RcbiAgICAgICAgZGVsZXRlIGN1cnJQbGF5ZXJzW25hbWVdO1xuXG4gICAgICAgIC8vIFRPR0dMRSBGQUxTRSBERUxFVEVEIENPTE9SXG4gICAgICAgIGNvbG9yc1tsaW5lQ29sb3JdID0gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKGFsbExpbmVzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgbGV0IGxpbmVDb2xvcjtcbiAgICAgICAgaWYgKE9iamVjdC52YWx1ZXMoY29sb3JzKS5ldmVyeShib29sID0+ICFib29sKSkge1xuICAgICAgICAgIGxpbmVDb2xvciA9IFwicmVkXCJcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnNbJ3JlZCddKSB7XG4gICAgICAgICAgbGluZUNvbG9yID0gXCJkb2RnZXJibHVlXCJcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnNbJ2RvZGdlcmJsdWUnXSkge1xuICAgICAgICAgIGxpbmVDb2xvciA9IFwicmVkXCJcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbG9yc1tsaW5lQ29sb3JdID0gdHJ1ZTtcbiAgICAgICAgZHJhd0xpbmUobmFtZSwgY3VycmVudFN0YXQsIGxpbmVDb2xvcik7XG4gICAgICAgIGFkZExlZ2VuZChuYW1lLCBsaW5lQ29sb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbiAgXG4gIC8vIEdSQVBIIEJVVFRPTlNcbiAgbGV0IGN1cnJlbnRTdGF0ID0gXCJwdHNcIlxuXG4gIGNvbnN0IGdyYXBoQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmFwaC1idXR0b24nKTtcblxuICBncmFwaEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGdyYXBoQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0pXG5cbiAgICAgIGN1cnJlbnRTdGF0ID0gYnV0dG9uLmlubmVySFRNTC50b0xvd2VyQ2FzZSgpO1xuICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgICBzdmcuc2VsZWN0QWxsKCcubGluZScpLnJlbW92ZSgpO1xuICAgICAgc3ZnLnNlbGVjdEFsbCgnLmRvdCcpLnJlbW92ZSgpO1xuXG4gICAgICBPYmplY3Qua2V5cyhjdXJyUGxheWVycykuZm9yRWFjaChwbGF5ZXIgPT4ge1xuICAgICAgICBkcmF3TGluZShwbGF5ZXIsIGN1cnJlbnRTdGF0LCBjdXJyUGxheWVyc1twbGF5ZXJdLmNvbG9yKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==