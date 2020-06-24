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

document.addEventListener('DOMContentLoaded', function () {
  // const svg = d3.select('#graph')
  // const button = document.querySelector(".player-button");
  var sample = [[80, 40, 30, 90, 50, 100], [70, 100, 90, 20, 50, 10, 80]]; // console.log(svg)
  // console.log(svg.height)
  // console.log(svg.width)
  // console.log(sample)

  var width = 625,
      height = 500;
  var data = [10, 15, 20, 25, 30];
  var svg = d3.select("#graph").append("svg").attr("width", width).attr("height", height).style('color', '#f2f2f2');
  var xScale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width - 50]);
  var yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([height - 50, 0]);
  var xAxis = d3.axisBottom().scale(xScale).tickSize(5);
  var yAxis = d3.axisLeft().scale(yScale).tickSize(5);
  svg.append("g").attr("transform", "translate(30, 10)").call(yAxis);
  var xAxisTranslate = height - 50 + 10;
  svg.append("g").attr("transform", "translate(30, " + xAxisTranslate + ")").call(xAxis); // button.addEventListener('click', () => {
  //   console.log("poop")
  // })
});

/***/ }),

/***/ "./src/scripts/search.js":
/*!*******************************!*\
  !*** ./src/scripts/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  // DATA
  var sample = [{
    name: "bob bobson",
    pos: "SG",
    ht: "6'6",
    pts: "25",
    reb: "5",
    ast: "5",
    stl: "1",
    blk: "2",
    to: "3",
    img: 'src/images/jordan.png'
  }, {
    name: "rob robson",
    pos: "SF",
    ht: "6'7",
    pts: "26",
    reb: "6",
    ast: "6",
    stl: "2",
    blk: "3",
    to: "2",
    img: 'src/images/harden.png'
  }, {
    name: "dob dobson",
    pos: "PF",
    ht: "6'8",
    pts: "27",
    reb: "7",
    ast: "7",
    stl: "0",
    blk: "1",
    to: "4",
    img: 'src/images/lebron.png'
  }]; // PLAYER CARD STATS

  var player = Array.from(document.querySelectorAll('.player-card-details'));
  var playerImg = Array.from(document.querySelectorAll('.player-photo'));
  var name = Array.from(document.querySelectorAll(".player-name"));
  var position = Array.from(document.querySelectorAll(".player-pos"));
  var height = Array.from(document.querySelectorAll(".player-height"));
  var points = Array.from(document.querySelectorAll(".points"));
  var rebounds = Array.from(document.querySelectorAll(".rebounds"));
  var assists = Array.from(document.querySelectorAll(".assists"));
  var steals = Array.from(document.querySelectorAll(".steals"));
  var blocks = Array.from(document.querySelectorAll(".blocks"));
  var turnovers = Array.from(document.querySelectorAll(".turnovers"));

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
      turnovers[0].innerHTML = "TO: ".concat(data.to); // const img = document.query('img')
      // img.src = data.img
      // img.id = 'player-1-photo'
      // player[0].appendChild(img)

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
      turnovers[1].innerHTML = "TO: ".concat(data.to); // const img = document.createElement('img')
      // img.src = data.img
      // img.id = 'player-2-photo'
      // player[1].appendChild(img)

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
    playerImg[idx].style.backgroundImage = ""; // const playerImg = document.getElementById(`player-${idx + 1}-photo`)
    // player[idx].removeChild(playerImg)
  }; // PLAYER BUTTONS


  var buttons = Array.from(document.querySelectorAll('.player-button'));
  buttons.forEach(function (button) {
    var idx = sample.indexOf(sample.find(function (el) {
      return el.name === button.innerHTML;
    }));
    button.addEventListener("click", function () {
      if (name[0].innerHTML === sample[idx].name) {
        closeStats(0);
        button.classList.remove('active');
      } else if (name[1].innerHTML === sample[idx].name) {
        closeStats(1);
        button.classList.remove('active');
      } else {
        if (!name[0].innerHTML || !name[1].innerHTML) {
          button.classList.add('active');
        }

        addStats(sample[idx]);
      }
    });
  }); // d3.csv("src/data/career.csv")
  //   .then(data => {
  //     console.log(data)
  //     d3.select(".player-select")
  //       .append('button')
  //       .text("click me")
  //   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dyYXBoLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2FtcGxlIiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJ4U2NhbGUiLCJzY2FsZUxpbmVhciIsImRvbWFpbiIsIm1heCIsInJhbmdlIiwieVNjYWxlIiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrU2l6ZSIsInlBeGlzIiwiYXhpc0xlZnQiLCJjYWxsIiwieEF4aXNUcmFuc2xhdGUiLCJuYW1lIiwicG9zIiwiaHQiLCJwdHMiLCJyZWIiLCJhc3QiLCJzdGwiLCJibGsiLCJ0byIsImltZyIsInBsYXllciIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwbGF5ZXJJbWciLCJwb3NpdGlvbiIsInBvaW50cyIsInJlYm91bmRzIiwiYXNzaXN0cyIsInN0ZWFscyIsImJsb2NrcyIsInR1cm5vdmVycyIsImFkZFN0YXRzIiwiaW5uZXJIVE1MIiwiYmFja2dyb3VuZEltYWdlIiwiY2xvc2VTdGF0cyIsImlkeCIsImJ1dHRvbnMiLCJmb3JFYWNoIiwiYnV0dG9uIiwiaW5kZXhPZiIsImZpbmQiLCJlbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFH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Q0FBQyxDQUFELENBQUosQ0FBUXVCLFNBQVIsS0FBdUIvQyxNQUFNLENBQUNrRCxHQUFELENBQU4sQ0FBWTFCLElBQXZDLEVBQTZDO0FBQzNDeUIsa0JBQVUsQ0FBQyxDQUFELENBQVY7QUFDQUksY0FBTSxDQUFDSSxTQUFQLENBQWlCQyxNQUFqQixDQUF3QixRQUF4QjtBQUNELE9BSEQsTUFHTyxJQUFJbEMsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUIsU0FBUixLQUF1Qi9DLE1BQU0sQ0FBQ2tELEdBQUQsQ0FBTixDQUFZMUIsSUFBdkMsRUFBNkM7QUFDbER5QixrQkFBVSxDQUFDLENBQUQsQ0FBVjtBQUNBSSxjQUFNLENBQUNJLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0QsT0FITSxNQUdBO0FBQ0wsWUFBSSxDQUFDbEMsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUIsU0FBVCxJQUFzQixDQUFDdkIsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRdUIsU0FBbkMsRUFBOEM7QUFDNUNNLGdCQUFNLENBQUNJLFNBQVAsQ0FBaUJFLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0Q7O0FBRURiLGdCQUFRLENBQUM5QyxNQUFNLENBQUNrRCxHQUFELENBQVAsQ0FBUjtBQUNEO0FBQ0YsS0FkRDtBQWVELEdBbEJELEVBL0ZrRCxDQW1IbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRCxDQTFIRCxFOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5cbmltcG9ydCAnLi9zY3JpcHRzL3NlYXJjaCc7XG5pbXBvcnQgJy4vc2NyaXB0cy9ncmFwaCc7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCcjZ3JhcGgnKVxuICAvLyBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1idXR0b25cIik7XG5cbiAgY29uc3Qgc2FtcGxlID0gW1xuICAgIFs4MCwgNDAsIDMwLCA5MCwgNTAsIDEwMF0sXG4gICAgWzcwLCAxMDAsIDkwLCAyMCwgNTAsIDEwLCA4MF1cbiAgXVxuXG4gIC8vIGNvbnNvbGUubG9nKHN2ZylcbiAgLy8gY29uc29sZS5sb2coc3ZnLmhlaWdodClcbiAgLy8gY29uc29sZS5sb2coc3ZnLndpZHRoKVxuICAvLyBjb25zb2xlLmxvZyhzYW1wbGUpXG5cbiAgY29uc3Qgd2lkdGggPSA2MjUsIGhlaWdodCA9IDUwMDtcblx0Y29uc3QgZGF0YSA9IFsxMCwgMTUsIDIwLCAyNSwgMzBdO1xuXHRcblx0Y29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2dyYXBoXCIpXG5cdFx0LmFwcGVuZChcInN2Z1wiKVxuXHRcdC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5zdHlsZSgnY29sb3InLCAnI2YyZjJmMicpXG5cblx0Y29uc3QgeFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuXHRcdC5kb21haW4oWzAsIGQzLm1heChkYXRhKV0pXG5cdFx0LnJhbmdlKFswLCB3aWR0aCAtIDUwXSk7XG5cblx0Y29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhKV0pXG4gICAgLnJhbmdlKFtoZWlnaHQgLSA1MCwgMF0pO1xuXG5cdGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgLnNjYWxlKHhTY2FsZSlcbiAgICAudGlja1NpemUoNSlcblxuXHRjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAuc2NhbGUoeVNjYWxlKVxuICAgIC50aWNrU2l6ZSg1KVxuXG4gIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMzAsIDEwKVwiKVxuICAgIC5jYWxsKHlBeGlzKTtcblxuXHRjb25zdCB4QXhpc1RyYW5zbGF0ZSA9IGhlaWdodCAtIDUwICsgMTA7XG5cbiAgc3ZnLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgzMCwgXCIgKyB4QXhpc1RyYW5zbGF0ZSAgK1wiKVwiKVxuICAgIC5jYWxsKHhBeGlzKVxuXG4gIC8vIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcInBvb3BcIilcbiAgLy8gfSlcbn0pIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8gREFUQVxuICBjb25zdCBzYW1wbGUgPSBbXG4gICAgeyBuYW1lOiBcImJvYiBib2Jzb25cIiwgcG9zOiBcIlNHXCIsIGh0OiBcIjYnNlwiLCBwdHM6IFwiMjVcIiwgcmViOiBcIjVcIiwgYXN0OiBcIjVcIiwgc3RsOiBcIjFcIiwgYmxrOiBcIjJcIiwgdG86IFwiM1wiLCBpbWc6ICdzcmMvaW1hZ2VzL2pvcmRhbi5wbmcnIH0sXG4gICAgeyBuYW1lOiBcInJvYiByb2Jzb25cIiwgcG9zOiBcIlNGXCIsIGh0OiBcIjYnN1wiLCBwdHM6IFwiMjZcIiwgcmViOiBcIjZcIiwgYXN0OiBcIjZcIiwgc3RsOiBcIjJcIiwgYmxrOiBcIjNcIiwgdG86IFwiMlwiLCBpbWc6ICdzcmMvaW1hZ2VzL2hhcmRlbi5wbmcnIH0sXG4gICAgeyBuYW1lOiBcImRvYiBkb2Jzb25cIiwgcG9zOiBcIlBGXCIsIGh0OiBcIjYnOFwiLCBwdHM6IFwiMjdcIiwgcmViOiBcIjdcIiwgYXN0OiBcIjdcIiwgc3RsOiBcIjBcIiwgYmxrOiBcIjFcIiwgdG86IFwiNFwiLCBpbWc6ICdzcmMvaW1hZ2VzL2xlYnJvbi5wbmcnIH1cbiAgXTtcblxuICAvLyBQTEFZRVIgQ0FSRCBTVEFUU1xuICBjb25zdCBwbGF5ZXIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItY2FyZC1kZXRhaWxzJykpO1xuICBjb25zdCBwbGF5ZXJJbWcgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXItcGhvdG8nKSk7XG5cbiAgY29uc3QgbmFtZSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5ZXItbmFtZVwiKSk7XG4gIGNvbnN0IHBvc2l0aW9uID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBsYXllci1wb3NcIikpO1xuICBjb25zdCBoZWlnaHQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGxheWVyLWhlaWdodFwiKSk7XG4gIGNvbnN0IHBvaW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb2ludHNcIikpO1xuICBjb25zdCByZWJvdW5kcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yZWJvdW5kc1wiKSk7XG4gIGNvbnN0IGFzc2lzdHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXNzaXN0c1wiKSk7XG4gIGNvbnN0IHN0ZWFscyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdGVhbHNcIikpO1xuICBjb25zdCBibG9ja3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvY2tzXCIpKTtcbiAgY29uc3QgdHVybm92ZXJzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnR1cm5vdmVyc1wiKSk7XG5cbiAgY29uc3QgYWRkU3RhdHMgPSAoZGF0YSkgPT4ge1xuICAgIGlmIChwb2ludHNbMF0uaW5uZXJIVE1MID09PSBcIlBUUzpcIiAmJiBkYXRhLm5hbWUgIT09IG5hbWVbMV0uaW5uZXJIVE1MKSB7XG4gICAgICAvLyBTRVQgRklSU1QgQ0FSRCBEQVRBXG4gICAgICBuYW1lWzBdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgICBwb3NpdGlvblswXS5pbm5lckhUTUwgPSBgJHtkYXRhLnBvc31gXG4gICAgICBoZWlnaHRbMF0uaW5uZXJIVE1MID0gYCR7ZGF0YS5odH1gXG4gICAgICBwb2ludHNbMF0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgICByZWJvdW5kc1swXS5pbm5lckhUTUwgPSBgUkVCOiAke2RhdGEucmVifWBcbiAgICAgIGFzc2lzdHNbMF0uaW5uZXJIVE1MID0gYEFTVDogJHtkYXRhLmFzdH1gXG4gICAgICBzdGVhbHNbMF0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgICBibG9ja3NbMF0uaW5uZXJIVE1MID0gYEJMSzogJHtkYXRhLmJsa31gXG4gICAgICB0dXJub3ZlcnNbMF0uaW5uZXJIVE1MID0gYFRPOiAke2RhdGEudG99YFxuXG4gICAgICAvLyBjb25zdCBpbWcgPSBkb2N1bWVudC5xdWVyeSgnaW1nJylcbiAgICAgIC8vIGltZy5zcmMgPSBkYXRhLmltZ1xuICAgICAgLy8gaW1nLmlkID0gJ3BsYXllci0xLXBob3RvJ1xuXG4gICAgICAvLyBwbGF5ZXJbMF0uYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgcGxheWVySW1nWzBdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtkYXRhLmltZ30pYFxuICAgIH0gZWxzZSBpZiAocG9pbnRzWzFdLmlubmVySFRNTCA9PT0gXCJQVFM6XCIgJiYgZGF0YS5uYW1lICE9PSBuYW1lWzBdLmlubmVySFRNTCkge1xuICAgICAgLy8gU0VUIDJORCBDQVJEIERBVEFcbiAgICAgIG5hbWVbMV0uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWBcbiAgICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAgIGhlaWdodFsxXS5pbm5lckhUTUwgPSBgJHtkYXRhLmh0fWBcbiAgICAgIHBvaW50c1sxXS5pbm5lckhUTUwgPSBgUFRTOiAke2RhdGEucHRzfWBcbiAgICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgICAgYXNzaXN0c1sxXS5pbm5lckhUTUwgPSBgQVNUOiAke2RhdGEuYXN0fWBcbiAgICAgIHN0ZWFsc1sxXS5pbm5lckhUTUwgPSBgU1RMOiAke2RhdGEuc3RsfWBcbiAgICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAgIHR1cm5vdmVyc1sxXS5pbm5lckhUTUwgPSBgVE86ICR7ZGF0YS50b31gXG5cbiAgICAgIC8vIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgICAvLyBpbWcuc3JjID0gZGF0YS5pbWdcbiAgICAgIC8vIGltZy5pZCA9ICdwbGF5ZXItMi1waG90bydcblxuICAgICAgLy8gcGxheWVyWzFdLmFwcGVuZENoaWxkKGltZylcbiAgICAgIHBsYXllckltZ1sxXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZGF0YS5pbWd9KWBcbiAgICB9IFxuICAgIC8vIGVsc2Uge1xuICAgIC8vICAgLy8gUkVQTEFDRSAyTkQgQ0FSRCBEQVRBXG4gICAgLy8gICBpZiAobmFtZVswXS5pbm5lckhUTUwgIT09IGRhdGEubmFtZSkge1xuICAgIC8vICAgICBuYW1lWzFdLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gXG4gICAgLy8gICAgIHBvc2l0aW9uWzFdLmlubmVySFRNTCA9IGAke2RhdGEucG9zfWBcbiAgICAvLyAgICAgaGVpZ2h0WzFdLmlubmVySFRNTCA9IGAke2RhdGEuaHR9YFxuICAgIC8vICAgICBwb2ludHNbMV0uaW5uZXJIVE1MID0gYFBUUzogJHtkYXRhLnB0c31gXG4gICAgLy8gICAgIHJlYm91bmRzWzFdLmlubmVySFRNTCA9IGBSRUI6ICR7ZGF0YS5yZWJ9YFxuICAgIC8vICAgICBhc3Npc3RzWzFdLmlubmVySFRNTCA9IGBBU1Q6ICR7ZGF0YS5hc3R9YFxuICAgIC8vICAgICBzdGVhbHNbMV0uaW5uZXJIVE1MID0gYFNUTDogJHtkYXRhLnN0bH1gXG4gICAgLy8gICAgIGJsb2Nrc1sxXS5pbm5lckhUTUwgPSBgQkxLOiAke2RhdGEuYmxrfWBcbiAgICAvLyAgICAgdHVybm92ZXJzWzFdLmlubmVySFRNTCA9IGBUTzogJHtkYXRhLnRvfWBcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH07XG5cbiAgY29uc3QgY2xvc2VTdGF0cyA9IChpZHgpID0+IHtcbiAgICBuYW1lW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgIHBvc2l0aW9uW2lkeF0uaW5uZXJIVE1MID0gXCJcIlxuICAgIGhlaWdodFtpZHhdLmlubmVySFRNTCA9IFwiXCJcbiAgICBwb2ludHNbaWR4XS5pbm5lckhUTUwgPSBcIlBUUzpcIlxuICAgIHJlYm91bmRzW2lkeF0uaW5uZXJIVE1MID0gXCJSRUI6XCJcbiAgICBhc3Npc3RzW2lkeF0uaW5uZXJIVE1MID0gXCJBU1Q6XCJcbiAgICBzdGVhbHNbaWR4XS5pbm5lckhUTUwgPSBcIlNUTDpcIlxuICAgIGJsb2Nrc1tpZHhdLmlubmVySFRNTCA9IFwiQkxLOlwiXG4gICAgdHVybm92ZXJzW2lkeF0uaW5uZXJIVE1MID0gXCJUTzpcIlxuXG4gICAgcGxheWVySW1nW2lkeF0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIlxuICAgIC8vIGNvbnN0IHBsYXllckltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwbGF5ZXItJHtpZHggKyAxfS1waG90b2ApXG4gICAgLy8gcGxheWVyW2lkeF0ucmVtb3ZlQ2hpbGQocGxheWVySW1nKVxuICB9XG5cbiAgLy8gUExBWUVSIEJVVFRPTlNcbiAgY29uc3QgYnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllci1idXR0b24nKSk7XG5cbiAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgY29uc3QgaWR4ID0gc2FtcGxlLmluZGV4T2Yoc2FtcGxlLmZpbmQoZWwgPT4gZWwubmFtZSA9PT0gYnV0dG9uLmlubmVySFRNTCkpXG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChuYW1lWzBdLmlubmVySFRNTCAgPT09IHNhbXBsZVtpZHhdLm5hbWUpIHtcbiAgICAgICAgY2xvc2VTdGF0cygwKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIGlmIChuYW1lWzFdLmlubmVySFRNTCAgPT09IHNhbXBsZVtpZHhdLm5hbWUpIHtcbiAgICAgICAgY2xvc2VTdGF0cygxKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFuYW1lWzBdLmlubmVySFRNTCB8fCAhbmFtZVsxXS5pbm5lckhUTUwpIHtcbiAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGFkZFN0YXRzKHNhbXBsZVtpZHhdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgLy8gZDMuY3N2KFwic3JjL2RhdGEvY2FyZWVyLmNzdlwiKVxuICAvLyAgIC50aGVuKGRhdGEgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgLy8gICAgIGQzLnNlbGVjdChcIi5wbGF5ZXItc2VsZWN0XCIpXG4gIC8vICAgICAgIC5hcHBlbmQoJ2J1dHRvbicpXG4gIC8vICAgICAgIC50ZXh0KFwiY2xpY2sgbWVcIilcbiAgLy8gICB9KTtcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==