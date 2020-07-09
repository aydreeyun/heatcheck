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
  var modalBackground = document.querySelector(".modal-background");
  var modalChild = document.querySelector(".modal-child");
  modalBackground.classList.remove('hidden');
  modalBackground.addEventListener("click", function () {
    modalBackground.classList.add('hidden');
  });
  modalChild.addEventListener('click', function (e) {
    return e.stopPropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwibW9kYWxCYWNrZ3JvdW5kIiwicXVlcnlTZWxlY3RvciIsIm1vZGFsQ2hpbGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiZDMiLCJjc3YiLCJ0aGVuIiwiZGF0YSIsInBsYXllckltZyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYW1lIiwicG9zaXRpb24iLCJoZWlnaHQiLCJwb2ludHMiLCJyZWJvdW5kcyIsImFzc2lzdHMiLCJzdGVhbHMiLCJibG9ja3MiLCJ0dXJub3ZlcnMiLCJhZGRTdGF0cyIsImlubmVySFRNTCIsInBvcyIsImh0IiwicHRzIiwicmViIiwiYXN0Iiwic3RsIiwiYmxrIiwidG8iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltZyIsImNsb3NlU3RhdHMiLCJpZHgiLCJidXR0b25zIiwiZm9yRWFjaCIsImJ1dHRvbiIsImluZGV4T2YiLCJmaW5kIiwiZWwiLCJtYXJnaW4iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJ3aWR0aCIsImdyYXBoV2lkdGgiLCJncmFwaEhlaWdodCIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjdXJyWEF4aXNWYWwiLCJjdXJyWEF4aXMiLCJjdXJyUGxheWVycyIsImRyYXdMaW5lIiwic3RhdCIsImNvbG9yIiwiZGF0YU5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwic2VsZWN0QWxsIiwicGFyc2VkRGF0YSIsInBhcnNlRGF0YSIsInhWYWx1ZXMiLCJtYXAiLCJvYmoiLCJzZWFzb24iLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiZmlyc3RQbGF5ZXIiLCJmaXJzdFBsYXllck5hbWUiLCJyZWRyYXdMaW5lIiwieFNjYWxlIiwic2NhbGVQb2ludCIsImRvbWFpbiIsInJhbmdlIiwiY2FsbCIsImF4aXNCb3R0b20iLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsImF4aXNMZWZ0IiwidGlja1ZhbHVlcyIsImRhdHVtIiwibGluZSIsIngiLCJkIiwieSIsImVudGVyIiwiYXJyIiwicHVzaCIsInBhcnNlRmxvYXQiLCJsZWdlbmQiLCJhZGRMZWdlbmQiLCJsZWdlbmRFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwicGxheWVyQnV0dG9ucyIsImNvbG9ycyIsInJlZCIsImRvZGdlcmJsdWUiLCJhbGxMaW5lcyIsImluY2x1ZGVzIiwibm9kZSIsImxpbmVDb2xvciIsImxlZ2VuZEl0ZW0iLCJ2YWx1ZXMiLCJldmVyeSIsImJvb2wiLCJjdXJyZW50U3RhdCIsImdyYXBoQnV0dG9ucyIsInBsYXllciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBC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QixRQUF4QjtBQUNELE9BRkQ7QUFJQWdILGlCQUFXLEdBQUcxRSxNQUFNLENBQUNoQixTQUFQLENBQWlCd0MsV0FBakIsRUFBZDtBQUNBeEIsWUFBTSxDQUFDdkMsU0FBUCxDQUFpQkUsR0FBakIsQ0FBcUIsUUFBckI7QUFFQWlELFNBQUcsQ0FBQ2EsU0FBSixDQUFjLE9BQWQsRUFBdUIvRCxNQUF2QjtBQUNBa0QsU0FBRyxDQUFDYSxTQUFKLENBQWMsTUFBZCxFQUFzQi9ELE1BQXRCO0FBRUF1RSxZQUFNLENBQUNDLElBQVAsQ0FBWWhCLFdBQVosRUFBeUJuQixPQUF6QixDQUFpQyxVQUFBNkUsTUFBTSxFQUFJO0FBQ3pDekQsZ0JBQVEsQ0FBQ3lELE1BQUQsRUFBU0YsV0FBVCxFQUFzQnhELFdBQVcsQ0FBQzBELE1BQUQsQ0FBWCxDQUFvQnZELEtBQTFDLENBQVI7QUFDRCxPQUZEO0FBR0QsS0FkRDtBQWVELEdBaEJEO0FBaUJELENBOVBELEU7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL3N0eWxlcy9pbmRleC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvY2FyZCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ncmFwaCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgbW9kYWxCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1iYWNrZ3JvdW5kXCIpO1xuICBjb25zdCBtb2RhbENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jaGlsZFwiKTtcblxuICBtb2RhbEJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgbW9kYWxCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxCYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICB9KTtcblxuICBtb2RhbENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpKTtcbn0pIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZDMuY3N2KFwic3JjL2RhdGEvY2FyZWVyLmNzdlwiKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgLy8gUExBWUVSIENBUkQgRUxFTUVOVFNcbiAgICAgIGNvbnN0IHBsYXllckltZyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1waG90bycpKTtcblxuICAgICAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKSk7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItcG9zXCIpKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItaGVpZ2h0XCIpKTtcbiAgICAgIGNvbnN0IHBvaW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb2ludHNcIikpO1xuICAgICAgY29uc3QgcmVib3VuZHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucmVib3VuZHNcIikpO1xuICAgICAgY29uc3QgYXNzaXN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hc3Npc3RzXCIpKTtcbiAgICAgIGNvbnN0IHN0ZWFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVhbHNcIikpO1xuICAgICAgY29uc3QgYmxvY2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2Nrc1wiKSk7XG4gICAgICBjb25zdCB0dXJub3ZlcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHVybm92ZXJzXCIpKTtcblxuICAgICAgLy8gUExBWUVSIENBUkQgTUVUSE9EU1xuICAgICAgY29uc3QgYWRkU3RhdHMgPSAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAocG9pbnRzWzBdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgIC8vIFNFVCBGSVJTVCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzBdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFswXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMF0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMF0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1swXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMF0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzBdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1swXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMF0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1swXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBlbHNlIGlmIChwb2ludHNbMV0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMF0uaW5uZXJIVE1MKSB7XG4gICAgICAgICAgLy8gU0VUIDJORCBDQVJEIERBVEFcbiAgICAgICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICAgICAgcG9zaXRpb25bMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5wb3N9YFxuICAgICAgICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICAgICAgcmVib3VuZHNbMV0uaW5uZXJIVE1MID0gYFJFQjogJHtkYXRhLnJlYn1gXG4gICAgICAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICAgICAgYmxvY2tzWzFdLmlubmVySFRNTCA9IGBCTEs6ICR7ZGF0YS5ibGt9YFxuICAgICAgICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgICAgICBuYW1lWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgcG9zaXRpb25bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICBoZWlnaHRbMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgIHBsYXllckltZ1sxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICAgICAgfSBcbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgLy8gUkVQTEFDRSAyTkQgQ0FSRCBEQVRBXG4gICAgICAgIC8vICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICE9PSBkYXRhLm5hbWUpIHtcbiAgICAgICAgLy8gICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgICAgLy8gICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgICAgLy8gICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgICAgLy8gICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgICAgLy8gICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgICAvLyAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgICAgLy8gICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgICAgLy8gICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgICAgLy8gICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbG9zZVN0YXRzID0gKGlkeCkgPT4ge1xuICAgICAgICBuYW1lW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb3NpdGlvbltpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgaGVpZ2h0W2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBwb2ludHNbaWR4XS5pbm5lckhUTUwgPSBcIlBUUzpcIlxuICAgICAgICByZWJvdW5kc1tpZHhdLmlubmVySFRNTCA9IFwiUkVCOlwiXG4gICAgICAgIGFzc2lzdHNbaWR4XS5pbm5lckhUTUwgPSBcIkFTVDpcIlxuICAgICAgICBzdGVhbHNbaWR4XS5pbm5lckhUTUwgPSBcIlNUTDpcIlxuICAgICAgICBibG9ja3NbaWR4XS5pbm5lckhUTUwgPSBcIkJMSzpcIlxuICAgICAgICB0dXJub3ZlcnNbaWR4XS5pbm5lckhUTUwgPSBcIlRPOlwiXG5cbiAgICAgICAgbmFtZVtpZHhdLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIHBvc2l0aW9uW2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgaGVpZ2h0W2lkeF0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcblxuICAgICAgICBwbGF5ZXJJbWdbaWR4XS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiXG4gICAgICB9XG5cbiAgICAgIC8vIFBMQVlFUiBCVVRUT05TXG4gICAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWVyLWJ1dHRvbicpKTtcblxuICAgICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRhdGEuaW5kZXhPZihkYXRhLmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gYnV0dG9uLmlubmVySFRNTCkpXG5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG5hbWVbMF0uaW5uZXJIVE1MICA9PT0gZGF0YVtpZHhdLm5hbWUpIHtcbiAgICAgICAgICAgIGNsb3NlU3RhdHMoMCk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChuYW1lWzFdLmlubmVySFRNTCAgPT09IGRhdGFbaWR4XS5uYW1lKSB7XG4gICAgICAgICAgICBjbG9zZVN0YXRzKDEpO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIW5hbWVbMF0uaW5uZXJIVE1MIHx8ICFuYW1lWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICBcbiAgICAgICAgICAgIGFkZFN0YXRzKGRhdGFbaWR4XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xufSkiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBtYXJnaW4gPSB7IHRvcDogMTUsIHJpZ2h0OiAxNSwgYm90dG9tOiAzMCwgbGVmdDogMzAgfTtcbiAgY29uc3Qgd2lkdGggPSA2ODcuNTtcbiAgY29uc3QgaGVpZ2h0ID0gNTUwO1xuICBjb25zdCBncmFwaFdpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgZ3JhcGhIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgXG4gIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdCgnI2dyYXBoJylcbiAgICAuYXBwZW5kKCdzdmcnKVxuICAgIC5hdHRyKCd3aWR0aCcsIHdpZHRoKVxuICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG4gICAgLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIG1hcmdpbi5ib3R0b20gKyAnLCcgKyBtYXJnaW4udG9wICsgJyknKVxuXG4gIC8vIERSQVcgTElORVxuICBsZXQgY3VyclhBeGlzVmFsID0gMDtcbiAgbGV0IGN1cnJYQXhpcztcbiAgY29uc3QgY3VyclBsYXllcnMgPSB7fTtcblxuICBjb25zdCBkcmF3TGluZSA9IChuYW1lLCBzdGF0LCBjb2xvcikgPT4ge1xuICAgIGNvbnN0IGRhdGFOYW1lID0gbmFtZS5zcGxpdChcIiBcIilbMV0udG9Mb3dlckNhc2UoKTtcbiAgICBjdXJyUGxheWVyc1tuYW1lXSA9IHsgY29sb3I6IGNvbG9yIH07XG5cbiAgICBzdmcuc2VsZWN0QWxsKCcuYXhpcycpLnJlbW92ZSgpO1xuICAgIGQzLmNzdihgc3JjL2RhdGEvJHtkYXRhTmFtZX0uY3N2YClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gcGFyc2VEYXRhKGRhdGEsIHN0YXQpO1xuICAgICAgICBcbiAgICAgICAgLy8gWC1BWElTXG4gICAgICAgIGNvbnN0IHhWYWx1ZXMgPSBwYXJzZWREYXRhLm1hcChvYmogPT4gb2JqLnNlYXNvbilcblxuICAgICAgICBpZiAoeFZhbHVlcy5sZW5ndGggPiBjdXJyWEF4aXNWYWwpIHtcbiAgICAgICAgICBjdXJyWEF4aXNWYWwgPSB4VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgICBjdXJyWEF4aXMgPSB4VmFsdWVzO1xuXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGN1cnJQbGF5ZXJzKS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0UGxheWVyID0gT2JqZWN0LmtleXMoY3VyclBsYXllcnMpWzBdO1xuICAgICAgICAgICAgY29uc3QgZmlyc3RQbGF5ZXJOYW1lID0gZmlyc3RQbGF5ZXIuc3BsaXQoXCIgXCIpWzFdLnRvTG93ZXJDYXNlKCk7XG4gIFxuICAgICAgICAgICAgcmVkcmF3TGluZShmaXJzdFBsYXllck5hbWUsIHN0YXQsIGN1cnJQbGF5ZXJzW2ZpcnN0UGxheWVyXS5jb2xvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVQb2ludCgpXG4gICAgICAgICAgLmRvbWFpbihjdXJyWEF4aXMpXG4gICAgICAgICAgLnJhbmdlKFswLCBncmFwaFdpZHRoXSlcblxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBncmFwaEhlaWdodCArIFwiKVwiKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHgtYXhpcycpXG4gICAgICAgICAgLmNhbGwoZDMuYXhpc0JvdHRvbSh4U2NhbGUpKTtcblxuICAgICAgICAvLyBZLUFYSVNcbiAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAgIC5yYW5nZShbZ3JhcGhIZWlnaHQsIDBdKVxuICAgICAgICBpZiAoc3RhdCA9PT0gXCJwdHNcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDUwXSlcblxuICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyB5LWF4aXMnKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAxMCwgMjAsIDMwLCA0MCwgNTBdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJyZWJcIiB8fCBzdGF0ID09PSBcImFzdFwiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgMTVdKVxuXG4gICAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHktYXhpcycpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDMsIDYsIDksIDEyLCAxNV0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInN0bFwiIHx8IHN0YXQgPT09IFwiYmxrXCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCA0XSlcblxuICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyB5LWF4aXMnKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAxLCAyLCAzLCA0XSkpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXQgPT09IFwidG9cIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDZdKVxuXG4gICAgICAgICAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdheGlzIHktYXhpcycpXG4gICAgICAgICAgICAuY2FsbChkMy5heGlzTGVmdCh5U2NhbGUpLnRpY2tWYWx1ZXMoWzAsIDIsIDQsIDZdKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJmZyVcIiB8fCBzdGF0ID09PSBcIjNwJVwiIHx8IHN0YXQgPT09IFwiZnQlXCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCAxXSlcblxuICAgICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAuYXR0cignY2xhc3MnLCAnYXhpcyB5LWF4aXMnKVxuICAgICAgICAgICAgLmNhbGwoZDMuYXhpc0xlZnQoeVNjYWxlKS50aWNrVmFsdWVzKFswLCAwLjIsIDAuNCwgMC42LCAwLjgsIDEuMF0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFERCBMSU5FXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgLmRhdHVtKHBhcnNlZERhdGEpXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGAke2NvbG9yfWApXG4gICAgICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMS41KVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBsaW5lICR7ZGF0YU5hbWV9YClcbiAgICAgICAgICAuYXR0cihcImRcIiwgZDMubGluZSgpXG4gICAgICAgICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiB4U2NhbGUoZC5zZWFzb24pIH0pXG4gICAgICAgICAgICAueShmdW5jdGlvbihkKSB7IHJldHVybiB5U2NhbGUoZFtzdGF0XSkgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgLy8gQUREIENJUkNMRVxuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5zZWxlY3RBbGwoXCJkb3RcIilcbiAgICAgICAgICAuZGF0YShwYXJzZWREYXRhKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgIC5hdHRyKCdjbGFzcycsIGBkb3QgJHtkYXRhTmFtZX1gKVxuICAgICAgICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4geFNjYWxlKGQuc2Vhc29uKSB9IClcbiAgICAgICAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHlTY2FsZShkW3N0YXRdKSB9IClcbiAgICAgICAgICAuYXR0cihcInJcIiwgMi41KVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBgJHtjb2xvcn1gKVxuICAgICAgfSlcbiAgfVxuXG4gIGNvbnN0IHJlZHJhd0xpbmUgPSAobmFtZSwgc3RhdCwgY29sb3IpID0+IHtcbiAgICBzdmcuc2VsZWN0QWxsKGBwYXRoLiR7bmFtZX1gKS5yZW1vdmUoKTtcbiAgICBzdmcuc2VsZWN0QWxsKGBjaXJjbGUuJHtuYW1lfWApLnJlbW92ZSgpO1xuXG4gICAgZDMuY3N2KGBzcmMvZGF0YS8ke25hbWV9LmNzdmApXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IHBhcnNlRGF0YShkYXRhLCBzdGF0KTtcblxuICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVBvaW50KClcbiAgICAgICAgLmRvbWFpbihjdXJyWEF4aXMpXG4gICAgICAgIC5yYW5nZShbMCwgZ3JhcGhXaWR0aF0pXG5cbiAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgICAucmFuZ2UoW2dyYXBoSGVpZ2h0LCAwXSlcblxuICAgICAgICBpZiAoc3RhdCA9PT0gXCJwdHNcIikge1xuICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsIDUwXSlcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ID09PSBcInJlYlwiIHx8IHN0YXQgPT09IFwiYXN0XCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCAxNV0pXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJzdGxcIiB8fCBzdGF0ID09PSBcImJsa1wiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgNF0pXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJ0b1wiKSB7XG4gICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgNl0pXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdCA9PT0gXCJmZyVcIiB8fCBzdGF0ID09PSBcIjNwJVwiIHx8IHN0YXQgPT09IFwiZnQlXCIpIHtcbiAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCAxXSlcbiAgICAgICAgfVxuXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5kYXR1bShwYXJzZWREYXRhKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJub25lXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIGAke2NvbG9yfWApXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDEuNSlcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGxpbmUgJHtuYW1lfWApXG4gICAgICAgIC5hdHRyKFwiZFwiLCBkMy5saW5lKClcbiAgICAgICAgICAueChmdW5jdGlvbihkKSB7IHJldHVybiB4U2NhbGUoZC5zZWFzb24pIH0pXG4gICAgICAgICAgLnkoZnVuY3Rpb24oZCkgeyByZXR1cm4geVNjYWxlKGRbc3RhdF0pIH0pXG4gICAgICAgIClcblxuICAgICAgICAvLyBBREQgQ0lSQ0xFXG4gICAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgLnNlbGVjdEFsbChcImRvdFwiKVxuICAgICAgICAgIC5kYXRhKHBhcnNlZERhdGEpXG4gICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgLmF0dHIoJ2NsYXNzJywgYGRvdCAke25hbWV9YClcbiAgICAgICAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIHhTY2FsZShkLnNlYXNvbikgfSApXG4gICAgICAgICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB5U2NhbGUoZFtzdGF0XSkgfSApXG4gICAgICAgICAgLmF0dHIoXCJyXCIsIDIuNSlcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgYCR7Y29sb3J9YClcbiAgICAgIH0pXG4gIH1cblxuICAvLyBQQVJTRSBEQVRBXG4gIGNvbnN0IHBhcnNlRGF0YSA9IChkYXRhLCBzdGF0KSA9PiB7XG4gICAgY29uc3QgYXJyID0gW107XG5cbiAgICBkYXRhLmZvckVhY2goZWwgPT4ge1xuICAgICAgYXJyLnB1c2goe1xuICAgICAgICBzZWFzb246IGVsLnNlYXNvbixcbiAgICAgICAgW3N0YXRdOiBwYXJzZUZsb2F0KGVsW3N0YXRdKVxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICAvLyBMRUdFTkRcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyYXBoLWxlZ2VuZCcpXG5cbiAgY29uc3QgYWRkTGVnZW5kID0gKG5hbWUsIGNvbG9yKSA9PiB7XG4gICAgY29uc3QgbGVnZW5kRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsZWdlbmRFbGVtZW50LmlubmVySFRNTCA9IG5hbWU7XG4gICAgbGVnZW5kRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsZWdlbmQtaXRlbScsIGAke2NvbG9yfWApO1xuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChsZWdlbmRFbGVtZW50KTtcbiAgfVxuXG4gIC8vIFBMQVlFUiBCVVRUT05TXG4gIGNvbnN0IHBsYXllckJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItYnV0dG9uJykpO1xuICBjb25zdCBjb2xvcnMgPSB7IHJlZDogZmFsc2UsIGRvZGdlcmJsdWU6IGZhbHNlIH07XG5cbiAgcGxheWVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGJ1dHRvbi5pbm5lckhUTUw7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhbGxMaW5lcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpbmUnKSk7XG5cbiAgICAgIGlmIChhbGxMaW5lcy5pbmNsdWRlcyhkMy5zZWxlY3QoYC4ke25hbWUuc3BsaXQoXCIgXCIpWzFdLnRvTG93ZXJDYXNlKCl9YCkubm9kZSgpKSkge1xuICAgICAgICBjb25zdCBsaW5lQ29sb3IgPSBkMy5zZWxlY3QoYC4ke25hbWUuc3BsaXQoXCIgXCIpWzFdLnRvTG93ZXJDYXNlKCl9YCkuYXR0cignc3Ryb2tlJyk7XG4gICAgICAgIGNvbnN0IGxlZ2VuZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JhcGgtbGVnZW5kIC4ke2xpbmVDb2xvcn1gKTtcblxuICAgICAgICAvLyBSRU1PVkUgTElORSBBTkQgQ0lSQ0xFXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoYHBhdGguJHtuYW1lLnNwbGl0KFwiIFwiKVsxXS50b0xvd2VyQ2FzZSgpfWApLnJlbW92ZSgpXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoYGNpcmNsZS4ke25hbWUuc3BsaXQoXCIgXCIpWzFdLnRvTG93ZXJDYXNlKCl9YCkucmVtb3ZlKClcblxuICAgICAgICAvLyBSRU1PVkUgTEVHRU5EIElURU1cbiAgICAgICAgbGVnZW5kSXRlbS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBERUxFVEUgUExBWUVSIEZST00gQ1VSUkVOVCBQTEFZRVIgT0JKRUNUXG4gICAgICAgIGRlbGV0ZSBjdXJyUGxheWVyc1tuYW1lXTtcblxuICAgICAgICAvLyBUT0dHTEUgRkFMU0UgREVMRVRFRCBDT0xPUlxuICAgICAgICBjb2xvcnNbbGluZUNvbG9yXSA9IGZhbHNlO1xuICAgICAgfSBlbHNlIGlmIChhbGxMaW5lcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIGxldCBsaW5lQ29sb3I7XG4gICAgICAgIGlmIChPYmplY3QudmFsdWVzKGNvbG9ycykuZXZlcnkoYm9vbCA9PiAhYm9vbCkpIHtcbiAgICAgICAgICBsaW5lQ29sb3IgPSBcInJlZFwiXG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzWydyZWQnXSkge1xuICAgICAgICAgIGxpbmVDb2xvciA9IFwiZG9kZ2VyYmx1ZVwiXG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzWydkb2RnZXJibHVlJ10pIHtcbiAgICAgICAgICBsaW5lQ29sb3IgPSBcInJlZFwiXG4gICAgICAgIH1cblxuICAgICAgICBjb2xvcnNbbGluZUNvbG9yXSA9IHRydWU7XG4gICAgICAgIGRyYXdMaW5lKG5hbWUsIGN1cnJlbnRTdGF0LCBsaW5lQ29sb3IpO1xuICAgICAgICBhZGRMZWdlbmQobmFtZSwgbGluZUNvbG9yKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG4gIFxuICAvLyBHUkFQSCBCVVRUT05TXG4gIGxldCBjdXJyZW50U3RhdCA9IFwicHRzXCJcblxuICBjb25zdCBncmFwaEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JhcGgtYnV0dG9uJyk7XG5cbiAgZ3JhcGhCdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBncmFwaEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9KVxuXG4gICAgICBjdXJyZW50U3RhdCA9IGJ1dHRvbi5pbm5lckhUTUwudG9Mb3dlckNhc2UoKTtcbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblxuICAgICAgc3ZnLnNlbGVjdEFsbCgnLmxpbmUnKS5yZW1vdmUoKTtcbiAgICAgIHN2Zy5zZWxlY3RBbGwoJy5kb3QnKS5yZW1vdmUoKTtcblxuICAgICAgT2JqZWN0LmtleXMoY3VyclBsYXllcnMpLmZvckVhY2gocGxheWVyID0+IHtcbiAgICAgICAgZHJhd0xpbmUocGxheWVyLCBjdXJyZW50U3RhdCwgY3VyclBsYXllcnNbcGxheWVyXS5jb2xvcik7XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG59KSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=