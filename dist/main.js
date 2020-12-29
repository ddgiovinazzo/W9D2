/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\n\nfunction Asteroid(pos){\n    Util.inherits(Asteroid, MovingObject)\n    COLOR = \"blue\"\n    RADIUS = \"25\"\n    MovingObject.call(this, \n        {pos: pos, color: COLOR, radius: RADIUS , vel: Util.randomVec(5)\n        })\n}\n\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\n\nfunction Game(){\n    // DIM_X\n    // DIM_Y\n    NUM_ASTEROIDS = 5\n    this.asteroids = []\n    this.addAsteroids()\n}\n\nGame.prototype.addAsteroids = function(){\n    while(this.asteroids.length < NUM_ASTEROIDS){\n        this.asteroids.push(new Asteroid(this.randomPosition()))\n    }\n}\n\nGame.prototype.randomPosition = function(){\n    return [Math.random() * 1000, Math.random() * 600] \n}\n\nGame.prototype.draw= function(ctx){\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    this.asteroids.forEach(function(asteroid){\n        asteroid.draw(ctx)\n    })\n}\n\nGame.prototype.moveObjects = function(ctx){\n    this.asteroids.forEach(function(asteroid){\n        asteroid.move(ctx)\n    })\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx){\n    this.ctx = ctx\n    this.game = new Game()\n}\n\nGameView.prototype.start = function(){\n    setInterval(this.game.moveObjects(this.ctx), 20)\n    setInterval(this.game.draw(this.ctx), 20)\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(object){\r\n    this.pos = object.pos;\r\n    this.vel = object.vel;\r\n    this.radius = object.radius;\r\n    this.color = object.color;\r\n}\r\n\r\nMovingObject.prototype.draw = function(ctx){\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill()\r\n    ctx.stroke();\r\n}\r\n\r\nMovingObject.prototype.move = function(ctx){\r\n    // ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    this.draw(ctx);\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n      function Surrogate(){}\n      Surrogate.prototype = parentClass.prototype\n      childClass.prototype = new Surrogate()\n      childClass.prototype.constructor = childClass\n    },\n\n    randomVec(length) {\n      const deg = 2 * Math.PI * Math.random();\n      return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n      return [vec[0] * m, vec[1] * m];\n    }\n  };\n\n  module.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("console.log(\"Hello there\");\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\r\n\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\nwindow.Game = Game;\r\nwindow.GameView = GameView;\r\n\r\nwindow.Util = Util;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function() {\r\n    const canvas = document.getElementById(\"game-canvas\");\r\n    const ctx = canvas.getContext(\"2d\");\r\n    // const mo = new MovingObject({\r\n    //     pos: [30, 30],\r\n    //     vel: [1, 1],\r\n    //     radius: 5,\r\n    //     color: \"#00FF00\"\r\n    // });\r\n    // const mo2 = new MovingObject({\r\n    //     pos: [500, 300],\r\n    //     vel: [10, 10],\r\n    //     radius: 300,\r\n    //     color: \"red\"\r\n    // });\r\n    // const a = new Asteroid([500, 300]);\r\n    // mo2.draw(ctx);\r\n    // a.draw(ctx);\r\n    // setInterval(mo.move.bind(a,canvas,ctx), 10);\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;