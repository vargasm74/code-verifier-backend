/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\nconst server_1 = __importDefault(__webpack_require__(/*! ./src/server */ \"./src/server/index.ts\"));\r\nconst logger_1 = __webpack_require__(/*! ./src/utils/logger */ \"./src/utils/logger.ts\");\r\n// configuracion .env \r\ndotenv_1.default.config();\r\nconst port = process.env.PORT || 8000;\r\n//execute server;\r\nserver_1.default.listen(port, () => {\r\n    (0, logger_1.LogSucces)(`[SERVER ON]:Running in http://localhost:${port}/api`);\r\n});\r\nserver_1.default.on('error', (error) => {\r\n    (0, logger_1.LogError)(`[SERVER ERROR]: ${error}`);\r\n});\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./index.ts?");

/***/ }),

/***/ "./src/controller/goodbyeController.ts":
/*!*********************************************!*\
  !*** ./src/controller/goodbyeController.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.goodbyeController = void 0;\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\nconst date = new Date(0);\r\nclass goodbyeController {\r\n    getMessage(name) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            (0, logger_1.LogSucces)('[/api/goodbye] Get Request');\r\n            return {\r\n                message: `goodbye ${date || \"world!!\"}`\r\n            };\r\n        });\r\n    }\r\n}\r\nexports.goodbyeController = goodbyeController;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/controller/goodbyeController.ts?");

/***/ }),

/***/ "./src/controller/helloController.ts":
/*!*******************************************!*\
  !*** ./src/controller/helloController.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nvar __param = (this && this.__param) || function (paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.HelloController = void 0;\r\nconst tsoa_1 = __webpack_require__(/*! tsoa */ \"tsoa\");\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\nlet HelloController = class HelloController {\r\n    /**\r\n     * EndPoint to retreive a Message \"Hello {name}\" in JSON\r\n     * @param {string | undefined} name Name of user to be greated\r\n     * @return {BasicResponse}promise of basucaresponse\r\n    */\r\n    getMessage(name) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            (0, logger_1.LogSucces)('[/api/hello] Get Request');\r\n            return {\r\n                message: `Hello ${name || \"world!!\"}`\r\n            };\r\n        });\r\n    }\r\n};\r\n__decorate([\r\n    (0, tsoa_1.Get)(\"/\"),\r\n    __param(0, (0, tsoa_1.Query)()),\r\n    __metadata(\"design:type\", Function),\r\n    __metadata(\"design:paramtypes\", [Object]),\r\n    __metadata(\"design:returntype\", Promise)\r\n], HelloController.prototype, \"getMessage\", null);\r\nHelloController = __decorate([\r\n    (0, tsoa_1.Route)(\"/api/hello\"),\r\n    (0, tsoa_1.Tags)(\"HelloController\")\r\n], HelloController);\r\nexports.HelloController = HelloController;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/controller/helloController.ts?");

/***/ }),

/***/ "./src/routes/HelloRoute.ts":
/*!**********************************!*\
  !*** ./src/routes/HelloRoute.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst helloController_1 = __webpack_require__(/*! ../controller/helloController */ \"./src/controller/helloController.ts\");\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\n// Router from express\r\nlet helloRouter = express_1.default.Router();\r\n// http://localhost:8000/api/hello?name=Martin/\r\nhelloRouter.route('/')\r\n    // GET:\r\n    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _a;\r\n    // Obtain a Query Param\r\n    let name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;\r\n    (0, logger_1.LogInfo)(`Query Param: ${name}`);\r\n    // Controller Instance to excute method\r\n    const controller = new helloController_1.HelloController();\r\n    // Obtain Reponse\r\n    const response = yield controller.getMessage(name);\r\n    // Send to the client the response\r\n    return res.send(response);\r\n}));\r\n// Export Hello Router\r\nexports[\"default\"] = helloRouter;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/routes/HelloRoute.ts?");

/***/ }),

/***/ "./src/routes/goodbyeRouter.ts":
/*!*************************************!*\
  !*** ./src/routes/goodbyeRouter.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst goodbyeController_1 = __webpack_require__(/*! ../controller/goodbyeController */ \"./src/controller/goodbyeController.ts\");\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\n//Router from express\r\nlet goodbyeRouter = express_1.default.Router();\r\ngoodbyeRouter.route('/')\r\n    .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {\r\n    var _a;\r\n    //obtain a query param\r\n    let name = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.name;\r\n    (0, logger_1.LogInfo)(`Query Param: ${name}`);\r\n    //controler instance execute method\r\n    const controller = new goodbyeController_1.goodbyeController();\r\n    //Obtain Response\r\n    const response = yield controller.getMessage(name);\r\n    // send to client response\r\n    return res.send(response);\r\n}));\r\n//export hello router\r\nexports[\"default\"] = goodbyeRouter;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/routes/goodbyeRouter.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\n/**\r\n * root ruter\r\n * redirections to routers\r\n \r\n */\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst HelloRoute_1 = __importDefault(__webpack_require__(/*! ./HelloRoute */ \"./src/routes/HelloRoute.ts\"));\r\nconst goodbyeRouter_1 = __importDefault(__webpack_require__(/*! ./goodbyeRouter */ \"./src/routes/goodbyeRouter.ts\"));\r\nconst logger_1 = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\r\n//server instance\r\nlet server = (0, express_1.default)();\r\n//router instancie\r\nlet rootRouter = express_1.default.Router();\r\n//GET http://localhost:8000/api/\r\nrootRouter.get('/', (req, resp) => {\r\n    //send hello word\r\n    (0, logger_1.LogInfo)('Get: http://localhost:8000/api/');\r\n    resp.send('welcome to my API Restfull:  Express + JS+ Swagger + Mongoose');\r\n});\r\n//\r\nserver.use('/', rootRouter); //  http://localhost:8000/api/\r\nserver.use('/hello', HelloRoute_1.default); // http://localhost:8000/api/hello --> helloRouter\r\nserver.use('/goodbye', goodbyeRouter_1.default); // http://localhost:8000/api/goodbye --> goodbye\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/routes/index.ts?");

/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\n//variable de entorno\r\nconst dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\r\n// seguridad\r\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\r\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\r\n//TODO HTTPS\r\nconst routes_1 = __importDefault(__webpack_require__(/*! ../routes */ \"./src/routes/index.ts\"));\r\n// configuracion .env \r\ndotenv_1.default.config();\r\n// create app\r\nconst server = (0, express_1.default)();\r\nconst port = process.env.port || 8000;\r\n//define server use \"/api and use rootRouter from index.ts\" in routes\r\nserver.use('/api', routes_1.default);\r\n//static server\r\nserver.use(express_1.default.static('public'));\r\n//TODO:moongoose connection\r\n//security config\r\nserver.use((0, helmet_1.default)());\r\nserver.use((0, cors_1.default)());\r\n// content types\r\nserver.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));\r\nserver.use(express_1.default.json({ limit: '50mb' }));\r\n//http://localhost:8080 --> http://localhost:8000/api/\r\nserver.get('/', (req, res) => {\r\n    res.redirect('/api');\r\n});\r\nexports[\"default\"] = server;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/server/index.ts?");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LogError = exports.LogWarning = exports.LogSucces = exports.LogInfo = void 0;\r\nconst LogInfo = (message) => {\r\n    console.log(`Info: ${message}`);\r\n};\r\nexports.LogInfo = LogInfo;\r\nconst LogSucces = (message) => {\r\n    console.log(`Success: ${message}`);\r\n};\r\nexports.LogSucces = LogSucces;\r\nconst LogWarning = (message) => {\r\n    console.log(`Warning: ${message}`);\r\n};\r\nexports.LogWarning = LogWarning;\r\nconst LogError = (message) => {\r\n    console.log(`Error: ${message}`);\r\n};\r\nexports.LogError = LogError;\r\n\n\n//# sourceURL=webpack://code-verifier-backend/./src/utils/logger.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("tsoa");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;