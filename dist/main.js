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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: inherit;\\n}\\n\\nhtml, body {\\n  font-size: 62.5%;\\n  box-sizing: border-box;\\n  background-color: #000;\\n}\\n\\n.content {\\n  display: grid;\\n  grid-template-columns: 35% 65%;\\n  height: 100vh;\\n}\\n.content .ctrl {\\n  position: relative;\\n  display: grid;\\n  grid-template-rows: 5% 95%;\\n}\\n.content .ctrl .controls {\\n  outline: none;\\n  display: grid;\\n  grid-template-columns: 3fr 0.5fr;\\n}\\n.content .ctrl .controls input {\\n  outline: none;\\n  border: none;\\n  font-size: 2rem;\\n}\\n.content .ctrl .controls button {\\n  display: grid;\\n  place-items: center;\\n  background: #fff;\\n  cursor: pointer;\\n  outline: none;\\n  border: none;\\n}\\n.content .ctrl .controls button #searchIcon {\\n  height: 18px;\\n  width: 18px;\\n}\\n.content .ctrl .controls .units {\\n  position: absolute;\\n  top: 5%;\\n  right: 0;\\n  width: 20%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.content .ctrl .controls .units .tempUnit {\\n  cursor: pointer;\\n  font-size: 3rem;\\n  font-family: Dongle, sans-serif;\\n}\\n.content .ctrl .controls .units #c {\\n  color: white;\\n}\\n.content .ctrl .controls .units #f {\\n  color: grey;\\n}\\n.content .ctrl .controls .units #line {\\n  margin-top: -0.5rem;\\n  margin-left: 0.5rem;\\n  margin-right: 0.5rem;\\n  color: #fff;\\n  font-size: 2rem;\\n}\\n.content .ctrl #card {\\n  display: grid;\\n  grid-template-rows: 25% 55%;\\n  font-family: Dongle, sans-serif;\\n  background-size: contain;\\n}\\n.content .ctrl #card .cardOne {\\n  justify-self: right;\\n  width: 95%;\\n  display: grid;\\n  grid-template-rows: 1fr 2fr 1fr;\\n}\\n.content .ctrl #card .cardOne #day {\\n  margin-top: 0.5rem;\\n  color: #fff;\\n  font-size: 5rem;\\n  margin-bottom: -2.3rem;\\n}\\n.content .ctrl #card .cardOne #date {\\n  color: #dbdbdb;\\n  font-size: 2.5rem;\\n  margin-bottom: -2rem;\\n}\\n.content .ctrl #card .cardOne #location {\\n  margin-top: 2rem;\\n  color: #dbdbdb;\\n  font-size: 2.5rem;\\n}\\n.content .ctrl #card .cardTwo {\\n  justify-self: right;\\n  width: 95%;\\n  display: grid;\\n  align-items: flex-end;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent {\\n  height: 80%;\\n  width: 100%;\\n  display: grid;\\n  grid-template-rows: 35% 45% 20%;\\n  color: #fff;\\n  font-size: 2rem;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent #one {\\n  width: 20%;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent #one #icon {\\n  font-size: 5rem;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent #two {\\n  margin-bottom: -1rem;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent #two #temp {\\n  height: 100%;\\n  width: 35%;\\n  font-size: 7rem;\\n}\\n.content .ctrl #card .cardTwo .cardTwoContent #three #main {\\n  font-size: 3rem;\\n}\\n.content .ctrl #card .cardThree {\\n  justify-self: right;\\n  width: 95%;\\n  display: grid;\\n  align-items: center;\\n}\\n.content .ctrl #card .cardThree #desc {\\n  font-size: 4rem;\\n  font-family: Dongle, cursive, sans-serif;\\n  color: #fff;\\n}\\n.content .ctrl #card .loader {\\n  border: solid red;\\n  height: 50px;\\n  width: 50px;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  border: solid 5px #ffffff;\\n  border-radius: 50%;\\n  border-right-color: #000000;\\n  animation: loading 1s infinite linear;\\n}\\n@keyframes loading {\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n.content #map {\\n  opacity: 0.8;\\n  height: 100vh;\\n  width: 100%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/sass/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherIcons\": () => (/* binding */ weatherIcons),\n/* harmony export */   \"cel\": () => (/* binding */ cel),\n/* harmony export */   \"fah\": () => (/* binding */ fah),\n/* harmony export */   \"main\": () => (/* binding */ main),\n/* harmony export */   \"city\": () => (/* binding */ city),\n/* harmony export */   \"country\": () => (/* binding */ country),\n/* harmony export */   \"date\": () => (/* binding */ date),\n/* harmony export */   \"day\": () => (/* binding */ day),\n/* harmony export */   \"desc\": () => (/* binding */ desc)\n/* harmony export */ });\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _modules_Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Storage */ \"./src/modules/Storage.js\");\n/* harmony import */ var _modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Paintdom */ \"./src/modules/Paintdom.js\");\n\r\n'./modules/Storage';\r\n\r\n\r\nconst input = document.getElementById('input');\r\nconst btn = document.querySelector('.btn');\r\nconst cel = document.getElementById('c');\r\nconst fah = document.getElementById('f');\r\n\r\nlet map;\r\nlet lat = localStorage.getItem('lat') ? localStorage.getItem('lat') : 40.737;\r\nlet lng = localStorage.getItem('lng') ? localStorage.getItem('lng') : -73.923;\r\nconst weekday = [\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"];\r\nconst weatherIcons = {\r\n    'Clear': '☀',\r\n    'Clouds': '☁',\r\n    'Snow': '❄',\r\n    'Rain': '🌧',\r\n    'Haze': '🌫',\r\n    'Fog': '🌫',\r\n    'Drizzle': '🌦',\r\n    'Mist': '🌫',\r\n    'Thunderstorm': '⛈',\r\n    'Dust': '🌪',\r\n    'Smoke': '🌬'\r\n};\r\n\r\nmap = L.map('map').setView([lat, lng], 12);\r\n\r\nL.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n    attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n}).addTo(map);\r\n\r\nL.marker([lat, lng]).addTo(map)\r\n    .openPopup();\r\n\r\nconst temp = localStorage.getItem('temp') ? localStorage.getItem('temp') : '10';\r\nconst unit = localStorage.getItem('unit') ? localStorage.getItem('unit') : '°C';\r\nconst main = localStorage.getItem('main') ? localStorage.getItem('main') : 'Sunny';\r\nconst city = localStorage.getItem('city') ? localStorage.getItem('city') : 'New York';\r\nconst country = localStorage.getItem('country') ? localStorage.getItem('country') : 'US';\r\nconst date = localStorage.getItem('date') ? localStorage.getItem('date') : '2.19.2022';\r\nconst day = localStorage.getItem('day') ? localStorage.getItem('day') : 'Friday';\r\nconst desc = localStorage.getItem('desc') ? localStorage.getItem('desc') : 'bright and beautiful day';\r\nconst img = localStorage.getItem('img') ? localStorage.getItem('img') : \"url('../../img/weathers/clearWeather.jpeg')\";\r\nconst position = localStorage.getItem('pos') ? localStorage.getItem('pos') : 'cover';\r\n\r\n(0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.createCard)(temp, unit, main, city, country, date, day, desc);\r\n(0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.setBackground)(img, position);\r\n\r\nasync function getData(location) {\r\n    const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Imperial&appid=804f73fec112865b52ba78935b0ca57b`, {mode: 'cors'});\r\n    const data = await weatherData.json();\r\n    const curlat = data.coord.lat;\r\n    const curlng = data.coord.lon;\r\n    lat = curlat;\r\n    lng = curlng;\r\n    localStorage.setItem('lat', curlat);\r\n    localStorage.setItem('lng', curlng);\r\n    map.flyTo([curlat, curlng], 12);\r\n    setTimeout(() => {\r\n        L.marker([lat, lng]).addTo(map)\r\n        .openPopup();\r\n    }, 5000)\r\n\r\n    let celsius = Math.ceil((data.main.temp - 32) / 1.8); // change fahrenheit to celsius\r\n    let fahrenheit = Math.ceil(data.main.temp); // is already fahrenheit\r\n    (0,_modules_Storage__WEBPACK_IMPORTED_MODULE_1__.saveBothTemp)(celsius, fahrenheit);\r\n\r\n    let temperature = cel.style.color === 'white' ? celsius : fahrenheit;\r\n    let unit = cel.style.color === 'white' ? '°C' : '°F';\r\n    const main = data.weather[0].main;\r\n    const desc = data.weather[0].description;\r\n    const city = data.name;\r\n    const country = data.sys.country;\r\n    const icon = weatherIcons[main];\r\n    let date = new Date();\r\n    let day = weekday[date.getDay()];\r\n    let dd = String(date.getDate()).padStart(2, '0');\r\n    let mm = String(date.getMonth() + 1).padStart(2, '0');\r\n    let yyyy = date.getFullYear();\r\n    \r\n    date = mm + '.' + dd + '.' + yyyy;\r\n    (0,_modules_Storage__WEBPACK_IMPORTED_MODULE_1__.setAllDatas)(temperature, unit, main, city, country, icon, date, day, desc);\r\n    (0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.injectLoader)();\r\n    // May change the code below later !!!\r\n    setTimeout(() => {\r\n        (0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.injectBackground)(main);\r\n    }, 3000)\r\n};\r\n\r\nfunction injectData() {\r\n    let temp = localStorage.getItem('temp');\r\n    let unit = localStorage.getItem('unit');\r\n    let main = localStorage.getItem('main');\r\n    let city = localStorage.getItem('city');\r\n    let country = localStorage.getItem('country');\r\n    let day = localStorage.getItem('day');\r\n    let date = localStorage.getItem('date');\r\n    let desc = localStorage.getItem('desc');\r\n\r\n    const parent = document.getElementById('card');\r\n    parent.innerHTML = `\r\n    <div class='cardOne'>\r\n        <p id='day'>${date}</p>\r\n        <p id='date'>${day}</p>\r\n        <p id='location'>${city}, ${country} 📍</p>\r\n    </div>\r\n\r\n    <div class='cardTwo'>\r\n        <div class='cardTwoContent'>\r\n            <div id='one' class='cardTwoContentOne'>\r\n                <h1 id='icon'>${weatherIcons[main]}</h1>\r\n            </div>\r\n\r\n            <div id='two' class='cardTwoContentTwo'>\r\n                <h1 id='temp'>${temp}${unit}</h1>\r\n            </div>\r\n\r\n            <div id='three' class='cardTwoContentThree'>\r\n                <h1 id='main'>${main}</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='cardThree'>\r\n        <p id='desc'>${desc}</p>\r\n    </div>\r\n    `\r\n}\r\n\r\n(0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.styleCF)(cel, fah)\r\n\r\nbtn.addEventListener('click', () => {\r\n    getData(input.value);\r\n    (0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.clearData)();\r\n    setTimeout(() => {\r\n        injectData();\r\n    }, 3000)\r\n    input.value = '';\r\n});\r\n\r\ncel.addEventListener('click', () => {\r\n    (0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.changeToCelsius)();\r\n})\r\n\r\nfah.addEventListener('click', () => {\r\n    ;(0,_modules_Paintdom__WEBPACK_IMPORTED_MODULE_2__.changeToFahrenheit)();\r\n})\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/app.js?");

/***/ }),

/***/ "./src/modules/Paintdom.js":
/*!*********************************!*\
  !*** ./src/modules/Paintdom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard),\n/* harmony export */   \"clearData\": () => (/* binding */ clearData),\n/* harmony export */   \"changeToCelsius\": () => (/* binding */ changeToCelsius),\n/* harmony export */   \"changeToFahrenheit\": () => (/* binding */ changeToFahrenheit),\n/* harmony export */   \"styleCF\": () => (/* binding */ styleCF),\n/* harmony export */   \"injectLoader\": () => (/* binding */ injectLoader),\n/* harmony export */   \"injectBackground\": () => (/* binding */ injectBackground),\n/* harmony export */   \"setBackground\": () => (/* binding */ setBackground)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ \"./src/app.js\");\n/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ \"./src/modules/Storage.js\");\n\r\n\r\n\r\n\r\nfunction createCard(temp, unit, main, city, country, date, day, desc) {\r\n    const parent = document.getElementById('card');\r\n    parent.innerHTML = `\r\n    <div class='cardOne'>\r\n        <p id='day'>${date}</p>\r\n        <p id='date'>${day}</p>\r\n        <p id='location'>${city}, ${country} 📍</p>\r\n    </div>\r\n\r\n    <div class='cardTwo'>\r\n        <div class='cardTwoContent'>\r\n            <div id='one' class='cardTwoContentOne'>\r\n                <h1 id='icon'>${_app__WEBPACK_IMPORTED_MODULE_0__.weatherIcons[main]}</h1>\r\n            </div>\r\n\r\n            <div id='two' class='cardTwoContentTwo'>\r\n                <h1 id='temp'>${temp}${unit}</h1>\r\n            </div>\r\n\r\n            <div id='three' class='cardTwoContentThree'>\r\n                <h1 id='main'>${main}</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class='cardThree'>\r\n        <p id='desc'>${desc}</p>\r\n    </div>\r\n    `\r\n}\r\n\r\nfunction clearData() {\r\n    const parent = document.getElementById('card');\r\n\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n}\r\n\r\nfunction changeToCelsius() {\r\n    _app__WEBPACK_IMPORTED_MODULE_0__.fah.style.color = 'grey';\r\n    _app__WEBPACK_IMPORTED_MODULE_0__.cel.style.color = 'white'\r\n    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setStyle)('white', 'grey');\r\n\r\n    const currentTemp = Number(Math.ceil((localStorage.getItem('fah') - 32 ) / 1.8));\r\n    const currentUnit = '°C';\r\n    const main = localStorage.getItem('main');\r\n    const city = localStorage.getItem('city');\r\n    const country = localStorage.getItem('country');\r\n    const date = localStorage.getItem('date');\r\n    const day = localStorage.getItem('day');\r\n    const desc = localStorage.getItem('desc');\r\n\r\n    localStorage.setItem('temp', currentTemp);\r\n    localStorage.setItem('unit', currentUnit);\r\n    const parent = document.getElementById('card');\r\n    \r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n    createCard(currentTemp, currentUnit, main, city, country, date, day, desc);\r\n}\r\n\r\nfunction changeToFahrenheit() {\r\n    _app__WEBPACK_IMPORTED_MODULE_0__.cel.style.color = 'grey';\r\n    _app__WEBPACK_IMPORTED_MODULE_0__.fah.style.color = 'white'\r\n    ;(0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setStyle)('grey', 'white');\r\n    \r\n    const currentTemp = Number(Math.ceil(localStorage.getItem('cel') * 1.8) + 32);\r\n    const currentUnit = '°F';\r\n    const main = localStorage.getItem('main');\r\n    const city = localStorage.getItem('city');\r\n    const country = localStorage.getItem('country');\r\n    const date = localStorage.getItem('date');\r\n    const day = localStorage.getItem('day');\r\n    const desc = localStorage.getItem('desc');\r\n\r\n    localStorage.setItem('unit', '°F');\r\n    localStorage.setItem('temp', currentTemp);\r\n    localStorage.setItem('unit', currentUnit);\r\n    const parent = document.getElementById('card');\r\n\r\n    while (parent.firstChild) {\r\n        parent.removeChild(parent.firstChild);\r\n    }\r\n    createCard(currentTemp, currentUnit, main, city, country, date, day, desc);\r\n}\r\n\r\nfunction styleCF(cel, fah) {\r\n    let cColor = localStorage.getItem('cstyle');\r\n    let fColor = localStorage.getItem('fstyle');\r\n    cel.style.color = cColor;\r\n    fah.style.color = fColor;\r\n}\r\n\r\nfunction injectLoader() {\r\n    const parent = document.getElementById('card');\r\n    const loader = document.createElement('div');\r\n    loader.classList.add('loader');\r\n    parent.appendChild(loader);\r\n}\r\n\r\nfunction injectBackground(main) {\r\n    const card = document.getElementById('card');\r\n\r\n    if (main === 'Clear') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/clearWeather.jpeg')\";\r\n        card.style.backgroundSize = \"cover\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/clearWeather.jpeg')\", \"cover\");\r\n    }\r\n\r\n    if (main === 'Clouds') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/clouds.jpg')\";\r\n        card.style.backgroundSize = \"cover\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/clouds.jpg')\", \"cover\");\r\n    }\r\n\r\n    if (main === 'Snow') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/snowWeather.jpg')\";\r\n        card.style.backgroundSize = \"contain\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/snowWeather.jpg')\", \"contain\");\r\n    }\r\n\r\n    if (main === 'Rain' || main === 'Drizzle' || main === 'Thunderstorm') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/rain.jpg')\";\r\n        card.style.backgroundSize = \"cover\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/rain.jpg')\", \"cover\");\r\n    }\r\n\r\n    if (main === 'Haze' || main === 'Fog' || main === 'Mist') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/mist.jpg')\";\r\n        card.style.backgroundSize = \"cover\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/mist.jpg')\", \"cover\");\r\n    }\r\n\r\n    if (main === 'Dust' || main === 'Smoke') {\r\n        card.style.backgroundImage = \"url('../../img/weathers/dust.jpg')\";\r\n        card.style.backgroundSize = \"cover\";\r\n        (0,_Storage__WEBPACK_IMPORTED_MODULE_1__.setCard)(\"url('../../img/weathers/dust.jpg')\", \"cover\");\r\n    }\r\n\r\n}\r\n\r\nfunction setBackground(img, pos) {\r\n    const card = document.getElementById('card');\r\n    card.style.backgroundImage = `${img}`;\r\n    card.style.backgroundSize =  `${pos}`;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Paintdom.js?");

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setAllDatas\": () => (/* binding */ setAllDatas),\n/* harmony export */   \"setStyle\": () => (/* binding */ setStyle),\n/* harmony export */   \"saveBothTemp\": () => (/* binding */ saveBothTemp),\n/* harmony export */   \"setCard\": () => (/* binding */ setCard)\n/* harmony export */ });\nfunction setAllDatas(temp, unit, main, city, country, icon, date, day, desc) {\r\n    localStorage.setItem('temp', temp);\r\n    localStorage.setItem('unit', unit);\r\n    localStorage.setItem('main', main);\r\n    localStorage.setItem('city', city);\r\n    localStorage.setItem('country', country);\r\n    localStorage.setItem('icon', icon);\r\n    localStorage.setItem('date', date);\r\n    localStorage.setItem('day', day);\r\n    localStorage.setItem('desc', desc);\r\n}\r\n\r\nfunction setStyle(cel, fah) {\r\n    localStorage.setItem('cstyle', cel);\r\n    localStorage.setItem('fstyle', fah)\r\n}\r\n\r\nfunction saveBothTemp(cel, fah) {\r\n    localStorage.setItem('cel', cel);\r\n    localStorage.setItem('fah', fah);\r\n}\r\n\r\nfunction setCard(img, pos) {\r\n    localStorage.setItem('img', img);\r\n    localStorage.setItem('pos', pos);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/modules/Storage.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;