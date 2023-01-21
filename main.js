/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n\nbody {\n  margin: 0px;\n  height: 100%;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n#content.landingPage {\n  justify-content: center;\n}\n\n#content.tabPage {\n  justify-content: flex-start;\n}\n\n#overlay {\n  z-index: -1;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n#textContainer {\n  color: white;\n  font-size: 4rem;\n  max-width: 650px;\n  margin: 20px;\n  margin-bottom: 10px;\n}\n\n#restaurantName {\n  border-bottom: solid;\n}\n\n#navigationContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n#btnLocation,\n#btnMenu,\n#btnContact {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n}\n\n#btnLocation:hover,\n#btnMenu:hover,\n#btnContact:hover {\n  text-decoration: underline;\n}\n\n#btnLocation:active,\n#btnMenu:active,\n#btnContact:active {\n  color: rgb(196, 179, 179);\n  font-size: 1.9rem;\n  text-decoration: underline;\n}\n\n#btnLocation.active,\n#btnMenu.active,\n#btnContact.active {\n  color: rgb(196, 179, 179);\n  pointer-events: none;\n}\n\n#btnLocation {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#btnMenu {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#btnContact {\n  grid-area: 1 / 3 / 2 / 4;\n}\n\n/* ------------ Location Tab ----------------- */\n\n#locContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1.2rem;\n  hyphens: auto;\n}\n\n#locImage {\n  max-height: 10.5rem;\n  float: left;\n  margin-right: 20px;\n  border: solid;\n}\n\n#locText {\n  margin: 0px;\n}\n\n#locSignature {\n  font-size: 1.5rem;\n  align-self: center;\n  margin: 0px;\n}\n\n/* ------------ Menu Tab ----------------- */\n\n#menuContentContainer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 20px;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n\n.separateMenu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n}\n\n.menuHeader {\n  font-size: 1.5rem;\n  margin-bottom: 5px;\n}\n\n.listOfCourses {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  font-style: italic;\n}\n\n.course {\n  list-style-type: none;\n}\n\n/* ------------ Contact Tab ----------------- */\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1rem;\n}\n\n#contactGreeting {\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n#btnSubmitContactForm {\n  border: none;\n  background: rgb(196, 179, 179);\n}\n\n#btnSubmitContactForm:hover {\n  background: rgb(173, 163, 163);\n}\n", "",{"version":3,"sources":["webpack://./src/css.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,SAAS;EACT,UAAU;EACV,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,kCAAkC;AACpC;;AAEA;;;EAGE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;;;EAGE,0BAA0B;AAC5B;;AAEA;;;EAGE,yBAAyB;EACzB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;;;EAGE,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,gDAAgD;;AAEhD;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA,4CAA4C;;AAE5C;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,6BAA6B;EAC7B,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,+CAA+C;;AAE/C;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;EAC7B,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":["html {\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n}\n\nbody {\n  margin: 0px;\n  height: 100%;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n\n#content.landingPage {\n  justify-content: center;\n}\n\n#content.tabPage {\n  justify-content: flex-start;\n}\n\n#overlay {\n  z-index: -1;\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n#textContainer {\n  color: white;\n  font-size: 4rem;\n  max-width: 650px;\n  margin: 20px;\n  margin-bottom: 10px;\n}\n\n#restaurantName {\n  border-bottom: solid;\n}\n\n#navigationContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n\n#btnLocation,\n#btnMenu,\n#btnContact {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 2rem;\n}\n\n#btnLocation:hover,\n#btnMenu:hover,\n#btnContact:hover {\n  text-decoration: underline;\n}\n\n#btnLocation:active,\n#btnMenu:active,\n#btnContact:active {\n  color: rgb(196, 179, 179);\n  font-size: 1.9rem;\n  text-decoration: underline;\n}\n\n#btnLocation.active,\n#btnMenu.active,\n#btnContact.active {\n  color: rgb(196, 179, 179);\n  pointer-events: none;\n}\n\n#btnLocation {\n  grid-area: 1 / 1 / 2 / 2;\n}\n\n#btnMenu {\n  grid-area: 1 / 2 / 2 / 3;\n}\n\n#btnContact {\n  grid-area: 1 / 3 / 2 / 4;\n}\n\n/* ------------ Location Tab ----------------- */\n\n#locContentContainer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1.2rem;\n  hyphens: auto;\n}\n\n#locImage {\n  max-height: 10.5rem;\n  float: left;\n  margin-right: 20px;\n  border: solid;\n}\n\n#locText {\n  margin: 0px;\n}\n\n#locSignature {\n  font-size: 1.5rem;\n  align-self: center;\n  margin: 0px;\n}\n\n/* ------------ Menu Tab ----------------- */\n\n#menuContentContainer {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  row-gap: 20px;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1.2rem;\n}\n\n.separateMenu {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 250px;\n}\n\n.menuHeader {\n  font-size: 1.5rem;\n  margin-bottom: 5px;\n}\n\n.listOfCourses {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0px;\n  margin: 0px;\n  height: 100%;\n  font-style: italic;\n}\n\n.course {\n  list-style-type: none;\n}\n\n/* ------------ Contact Tab ----------------- */\n\n#contactForm {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n  max-width: 500px;\n  color: white;\n  margin: 20px;\n  margin-top: 10px;\n  font-size: 1rem;\n}\n\n#contactGreeting {\n  font-size: 1.2rem;\n  margin: 0px;\n}\n\n.wrapper {\n  display: flex;\n  flex-direction: column;\n}\n\n#btnSubmitContactForm {\n  border: none;\n  background: rgb(196, 179, 179);\n}\n\n#btnSubmitContactForm:hover {\n  background: rgb(173, 163, 163);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css.css":
/*!*********************!*\
  !*** ./src/css.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./css.css */ "./node_modules/css-loader/dist/cjs.js!./src/css.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_css_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_css_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_css_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_css_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contentNode = document.querySelector("#content");

const labelNames = ["Name", "Mail", "Your Message"];
const placeholderTexts = [
  "Enter your Name",
  "Enter your Mail",
  "Write your Message",
];
const inputTypes = ["text", "email", "textarea"];
const attributes = ["name", "type", "placeholder", "required"];
const nameAttributes = ["contactName", "contactMail", "contactText", "true"];

const createContactTab = function () {
  const contactForm = document.createElement("form");
  contactForm.setAttribute("id", "contactForm");

  const contactGreeting = document.createElement("p");
  contactGreeting.setAttribute("id", "contactGreeting");
  contactGreeting.textContent =
    "We want you to have the best experience at our restaurant. To make a reservation or if you have any questions, feel free to reach out to us!";
  contactForm.appendChild(contactGreeting);

  for (let i = 0; i < labelNames.length; i++) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");
    let label = document.createElement("label");
    label.setAttribute(attributes[0], nameAttributes[i]);
    label.textContent = labelNames[i];
    let input = document.createElement("input");
    input.setAttribute(attributes[0], nameAttributes[i]);
    input.setAttribute(attributes[1], inputTypes[i]);
    input.setAttribute(attributes[2], placeholderTexts[i]);
    input.setAttribute("required", "");

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    contactForm.appendChild(wrapper);
  }

  const btnSubmitContactForm = document.createElement("button");
  btnSubmitContactForm.setAttribute("id", "btnSubmitContactForm");
  btnSubmitContactForm.textContent = "Submit";
  btnSubmitContactForm.addEventListener("click", function (e) {
    submitContactForm(e);
  });
  contactForm.appendChild(btnSubmitContactForm);

  contentNode.appendChild(contactForm);
};

const submitContactForm = function (e) {
  e.preventDefault();
  alert(
    "Thanks for reaching out to us. We'll get back to you as soon as possible!"
  );
  const contactForm = document.querySelector("#contactForm");
  contactForm.reset();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactTab);


/***/ }),

/***/ "./src/locationTab.js":
/*!****************************!*\
  !*** ./src/locationTab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _location_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.jpg */ "./src/location.jpg");


const contentNode = document.querySelector("#content");

const createLocationTab = function () {
  const locContentContainer = document.createElement("div");
  locContentContainer.setAttribute("id", "locContentContainer");

  const locImage = document.createElement("img");
  locImage.setAttribute("src", `${_location_jpg__WEBPACK_IMPORTED_MODULE_0__}`);
  locImage.setAttribute("id", "locImage");

  const locText = document.createElement("p");
  locText.setAttribute("id", "locText");
  locText.textContent =
    "Since our establishment in 1809, we strive to make you feel at home in our restaurant. Our secret is, that we got all our recipes from the mothers and grandmothers of our village, so chances are that you might think to yourself: 'It tastes just like at my mothers´ place'.";

  const imgAndTextContainer = document.createElement("div");
  imgAndTextContainer.setAttribute("id", "imgAndTextContainer");

  const locSignature = document.createElement("p");
  locSignature.setAttribute("id", "locSignature");
  locSignature.textContent = "~~ La Família ~~";

  imgAndTextContainer.appendChild(locImage);
  imgAndTextContainer.appendChild(locText);

  locContentContainer.appendChild(imgAndTextContainer);
  locContentContainer.appendChild(locSignature);

  contentNode.appendChild(locContentContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLocationTab);


/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contentNode = document.querySelector("#content");

const menuData = {
  Starters: ["Bruschetta", "Vitello Tonnato", "Mozzarella"],
  Mains: ["Pizza", "Rumpsteak", "Linguine"],
  Desserts: ["Tiramisu", "Créme Brulèe", "Icecream"],
  Drinks: ["Water", "Wine", "Softdrinks"],
};

const createMenuTab = function () {
  const menuContentContainer = document.createElement("div");
  menuContentContainer.setAttribute("id", "menuContentContainer");

  for (const menu in menuData) {
    let separateMenu = document.createElement("div");
    separateMenu.setAttribute("class", "separateMenu");

    let header = document.createElement("div");
    header.setAttribute("id", `${menu.toLowerCase()}Header`);
    header.setAttribute("class", "menuHeader");
    header.textContent = `~ ${menu} ~`;

    separateMenu.appendChild(header);

    let listOfCourses = document.createElement("ul");
    listOfCourses.setAttribute("class", "listOfCourses");

    for (const course in menuData[menu]) {
      let currentCourse = document.createElement("li");
      currentCourse.setAttribute("class", "course");
      currentCourse.textContent = menuData[menu][course];
      listOfCourses.appendChild(currentCourse);
    }
    separateMenu.appendChild(listOfCourses);
    menuContentContainer.appendChild(separateMenu);
  }

  contentNode.appendChild(menuContentContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuTab);


/***/ }),

/***/ "./src/pageConstructor.js":
/*!********************************!*\
  !*** ./src/pageConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _imgLandingPage_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgLandingPage.jpg */ "./src/imgLandingPage.jpg");
/* harmony import */ var _locationTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locationTab */ "./src/locationTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");
/* harmony import */ var _supportFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supportFunctions */ "./src/supportFunctions.js");







const contentNode = document.querySelector("#content");

const constructLandingpage = function () {
  constructBackground();
  constructContent();
};

const constructBackground = function () {
  const html = document.querySelector("html");
  html.style.backgroundImage = `url(${_imgLandingPage_jpg__WEBPACK_IMPORTED_MODULE_0__})`;
  const overlay = document.createElement("div");
  overlay.setAttribute("id", "overlay");
  contentNode.appendChild(overlay);
};

const constructContent = function () {
  contentNode.setAttribute("class", "landingPage");
  const textContainer = document.createElement("div");
  textContainer.id = "textContainer";
  const restaurantName = document.createElement("div");
  restaurantName.id = "restaurantName";
  restaurantName.textContent = "Pizzeria Mama Mía";
  const navigationContainer = document.createElement("div");
  navigationContainer.id = "navigationContainer";
  const btnLocation = document.createElement("button");
  btnLocation.id = "btnLocation";
  btnLocation.textContent = "Location";
  btnLocation.addEventListener("click", function (e) {
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.clearPage)();
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.setupTheHeader)(contentNode, e);
    (0,_locationTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.textContent = "Menu";
  btnMenu.addEventListener("click", function (e) {
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.clearPage)();
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.setupTheHeader)(contentNode, e);
    (0,_menuTab__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
  const btnContact = document.createElement("button");
  btnContact.id = "btnContact";
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", function (e) {
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.clearPage)();
    (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_4__.setupTheHeader)(contentNode, e);
    (0,_contactTab__WEBPACK_IMPORTED_MODULE_3__["default"])();
  });

  navigationContainer.appendChild(btnLocation);
  navigationContainer.appendChild(btnMenu);
  navigationContainer.appendChild(btnContact);
  textContainer.appendChild(restaurantName);
  textContainer.appendChild(navigationContainer);
  contentNode.appendChild(textContainer);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructLandingpage);


/***/ }),

/***/ "./src/supportFunctions.js":
/*!*********************************!*\
  !*** ./src/supportFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPage": () => (/* binding */ clearPage),
/* harmony export */   "setupTheHeader": () => (/* binding */ setupTheHeader)
/* harmony export */ });
const clearPage = function () {
  while (document.querySelector("#textContainer").nextSibling) {
    document.querySelector("#textContainer").nextSibling.remove();
  }
};

const setupTheHeader = function (navBar, clickedTab) {
  const oldActiveTab = document.querySelectorAll(".active");
  oldActiveTab.forEach((tab) => {
    tab.removeAttribute("class");
  });
  const newActiveTab = document.querySelector(`#${clickedTab.target.id}`);
  newActiveTab.setAttribute("class", "active");
  navBar.setAttribute("class", "tabPage");
};




/***/ }),

/***/ "./src/imgLandingPage.jpg":
/*!********************************!*\
  !*** ./src/imgLandingPage.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be81fbe5928a5909f0f8.jpg";

/***/ }),

/***/ "./src/location.jpg":
/*!**************************!*\
  !*** ./src/location.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "06ad13824e1a215f9da6.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageConstructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageConstructor */ "./src/pageConstructor.js");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/css.css");



(0,_pageConstructor__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9jc3MuY3NzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vc3JjL2Nzcy5jc3M/OWEyOCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0VGFiLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL3NyYy9sb2NhdGlvblRhYi5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudVRhYi5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvcGFnZUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL3NyYy9zdXBwb3J0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50LmxhbmRpbmdQYWdlIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudC50YWJQYWdlIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuI292ZXJsYXkge1xcbiAgei1pbmRleDogLTE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBvcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbn1cXG5cXG4jdGV4dENvbnRhaW5lciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBtYXgtd2lkdGg6IDY1MHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuI3Jlc3RhdXJhbnROYW1lIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkO1xcbn1cXG5cXG4jbmF2aWdhdGlvbkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG59XFxuXFxuI2J0bkxvY2F0aW9uLFxcbiNidG5NZW51LFxcbiNidG5Db250YWN0IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNidG5Mb2NhdGlvbjpob3ZlcixcXG4jYnRuTWVudTpob3ZlcixcXG4jYnRuQ29udGFjdDpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uOmFjdGl2ZSxcXG4jYnRuTWVudTphY3RpdmUsXFxuI2J0bkNvbnRhY3Q6YWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxNzksIDE3OSk7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYnRuTG9jYXRpb24uYWN0aXZlLFxcbiNidG5NZW51LmFjdGl2ZSxcXG4jYnRuQ29udGFjdC5hY3RpdmUge1xcbiAgY29sb3I6IHJnYigxOTYsIDE3OSwgMTc5KTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jYnRuTG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbn1cXG5cXG4jYnRuTWVudSB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxufVxcblxcbiNidG5Db250YWN0IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tIExvY2F0aW9uIFRhYiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNsb2NDb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgaHlwaGVuczogYXV0bztcXG59XFxuXFxuI2xvY0ltYWdlIHtcXG4gIG1heC1oZWlnaHQ6IDEwLjVyZW07XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGJvcmRlcjogc29saWQ7XFxufVxcblxcbiNsb2NUZXh0IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jbG9jU2lnbmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBNZW51IFRhYiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNtZW51Q29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLnNlcGFyYXRlTWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5tZW51SGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubGlzdE9mQ291cnNlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4uY291cnNlIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tIENvbnRhY3QgVGFiIC0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2NvbnRhY3RGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI2NvbnRhY3RHcmVldGluZyB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2J0blN1Ym1pdENvbnRhY3RGb3JtIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYigxOTYsIDE3OSwgMTc5KTtcXG59XFxuXFxuI2J0blN1Ym1pdENvbnRhY3RGb3JtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNzMsIDE2MywgMTYzKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1QsVUFBVTtFQUNWLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBOzs7RUFHRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSwwQkFBMEI7QUFDNUI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLGdEQUFnRDs7QUFFaEQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEsNENBQTRDOztBQUU1QztFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLCtDQUErQzs7QUFFL0M7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudC5sYW5kaW5nUGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQudGFiUGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuI3RleHRDb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNyZXN0YXVyYW50TmFtZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG59XFxuXFxuI25hdmlnYXRpb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbiNidG5Mb2NhdGlvbixcXG4jYnRuTWVudSxcXG4jYnRuQ29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jYnRuTG9jYXRpb246aG92ZXIsXFxuI2J0bk1lbnU6aG92ZXIsXFxuI2J0bkNvbnRhY3Q6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNidG5Mb2NhdGlvbjphY3RpdmUsXFxuI2J0bk1lbnU6YWN0aXZlLFxcbiNidG5Db250YWN0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiKDE5NiwgMTc5LCAxNzkpO1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uLmFjdGl2ZSxcXG4jYnRuTWVudS5hY3RpdmUsXFxuI2J0bkNvbnRhY3QuYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxNzksIDE3OSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG59XFxuXFxuI2J0bk1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbn1cXG5cXG4jYnRuQ29udGFjdCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBMb2NhdGlvbiBUYWIgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jbG9jQ29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbiNsb2NJbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMC41cmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkO1xcbn1cXG5cXG4jbG9jVGV4dCB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2xvY1NpZ25hdHVyZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gTWVudSBUYWIgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jbWVudUNvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcm93LWdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zZXBhcmF0ZU1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubWVudUhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpc3RPZkNvdXJzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBDb250YWN0IFRhYiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250YWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjb250YWN0R3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNidG5TdWJtaXRDb250YWN0Rm9ybSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk2LCAxNzksIDE3OSk7XFxufVxcblxcbiNidG5TdWJtaXRDb250YWN0Rm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTczLCAxNjMsIDE2Myk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Nzcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGxhYmVsTmFtZXMgPSBbXCJOYW1lXCIsIFwiTWFpbFwiLCBcIllvdXIgTWVzc2FnZVwiXTtcbmNvbnN0IHBsYWNlaG9sZGVyVGV4dHMgPSBbXG4gIFwiRW50ZXIgeW91ciBOYW1lXCIsXG4gIFwiRW50ZXIgeW91ciBNYWlsXCIsXG4gIFwiV3JpdGUgeW91ciBNZXNzYWdlXCIsXG5dO1xuY29uc3QgaW5wdXRUeXBlcyA9IFtcInRleHRcIiwgXCJlbWFpbFwiLCBcInRleHRhcmVhXCJdO1xuY29uc3QgYXR0cmlidXRlcyA9IFtcIm5hbWVcIiwgXCJ0eXBlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZXF1aXJlZFwiXTtcbmNvbnN0IG5hbWVBdHRyaWJ1dGVzID0gW1wiY29udGFjdE5hbWVcIiwgXCJjb250YWN0TWFpbFwiLCBcImNvbnRhY3RUZXh0XCIsIFwidHJ1ZVwiXTtcblxuY29uc3QgY3JlYXRlQ29udGFjdFRhYiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0Rm9ybVwiKTtcblxuICBjb25zdCBjb250YWN0R3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdEdyZWV0aW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdEdyZWV0aW5nXCIpO1xuICBjb250YWN0R3JlZXRpbmcudGV4dENvbnRlbnQgPVxuICAgIFwiV2Ugd2FudCB5b3UgdG8gaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIGF0IG91ciByZXN0YXVyYW50LiBUbyBtYWtlIGEgcmVzZXJ2YXRpb24gb3IgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyFcIjtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEdyZWV0aW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIndyYXBwZXJcIik7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzWzBdLCBuYW1lQXR0cmlidXRlc1tpXSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWVzW2ldO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlc1swXSwgbmFtZUF0dHJpYnV0ZXNbaV0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzWzFdLCBpbnB1dFR5cGVzW2ldKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlc1syXSwgcGxhY2Vob2xkZXJUZXh0c1tpXSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG5cbiAgY29uc3QgYnRuU3VibWl0Q29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5TdWJtaXRDb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ0blN1Ym1pdENvbnRhY3RGb3JtXCIpO1xuICBidG5TdWJtaXRDb250YWN0Rm9ybS50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGJ0blN1Ym1pdENvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIHN1Ym1pdENvbnRhY3RGb3JtKGUpO1xuICB9KTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0Q29udGFjdEZvcm0pO1xuXG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbn07XG5cbmNvbnN0IHN1Ym1pdENvbnRhY3RGb3JtID0gZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhbGVydChcbiAgICBcIlRoYW5rcyBmb3IgcmVhY2hpbmcgb3V0IHRvIHVzLiBXZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZSFcIlxuICApO1xuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdEZvcm1cIik7XG4gIGNvbnRhY3RGb3JtLnJlc2V0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0VGFiO1xuIiwiaW1wb3J0IGxvY0ltYWdlU291cmNlIGZyb20gXCIuL2xvY2F0aW9uLmpwZ1wiO1xuXG5jb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgY3JlYXRlTG9jYXRpb25UYWIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGxvY0NvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2NDb250ZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jQ29udGVudENvbnRhaW5lclwiKTtcblxuICBjb25zdCBsb2NJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvY0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgJHtsb2NJbWFnZVNvdXJjZX1gKTtcbiAgbG9jSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NJbWFnZVwiKTtcblxuICBjb25zdCBsb2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvY1RleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NUZXh0XCIpO1xuICBsb2NUZXh0LnRleHRDb250ZW50ID1cbiAgICBcIlNpbmNlIG91ciBlc3RhYmxpc2htZW50IGluIDE4MDksIHdlIHN0cml2ZSB0byBtYWtlIHlvdSBmZWVsIGF0IGhvbWUgaW4gb3VyIHJlc3RhdXJhbnQuIE91ciBzZWNyZXQgaXMsIHRoYXQgd2UgZ290IGFsbCBvdXIgcmVjaXBlcyBmcm9tIHRoZSBtb3RoZXJzIGFuZCBncmFuZG1vdGhlcnMgb2Ygb3VyIHZpbGxhZ2UsIHNvIGNoYW5jZXMgYXJlIHRoYXQgeW91IG1pZ2h0IHRoaW5rIHRvIHlvdXJzZWxmOiAnSXQgdGFzdGVzIGp1c3QgbGlrZSBhdCBteSBtb3RoZXJzwrQgcGxhY2UnLlwiO1xuXG4gIGNvbnN0IGltZ0FuZFRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWdBbmRUZXh0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nQW5kVGV4dENvbnRhaW5lclwiKTtcblxuICBjb25zdCBsb2NTaWduYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9jU2lnbmF0dXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9jU2lnbmF0dXJlXCIpO1xuICBsb2NTaWduYXR1cmUudGV4dENvbnRlbnQgPSBcIn5+IExhIEZhbcOtbGlhIH5+XCI7XG5cbiAgaW1nQW5kVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NJbWFnZSk7XG4gIGltZ0FuZFRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jVGV4dCk7XG5cbiAgbG9jQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdBbmRUZXh0Q29udGFpbmVyKTtcbiAgbG9jQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NTaWduYXR1cmUpO1xuXG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKGxvY0NvbnRlbnRDb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTG9jYXRpb25UYWI7XG4iLCJjb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbWVudURhdGEgPSB7XG4gIFN0YXJ0ZXJzOiBbXCJCcnVzY2hldHRhXCIsIFwiVml0ZWxsbyBUb25uYXRvXCIsIFwiTW96emFyZWxsYVwiXSxcbiAgTWFpbnM6IFtcIlBpenphXCIsIFwiUnVtcHN0ZWFrXCIsIFwiTGluZ3VpbmVcIl0sXG4gIERlc3NlcnRzOiBbXCJUaXJhbWlzdVwiLCBcIkNyw6ltZSBCcnVsw6hlXCIsIFwiSWNlY3JlYW1cIl0sXG4gIERyaW5rczogW1wiV2F0ZXJcIiwgXCJXaW5lXCIsIFwiU29mdGRyaW5rc1wiXSxcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVUYWIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lbnVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51Q29udGVudENvbnRhaW5lclwiKTtcblxuICBmb3IgKGNvbnN0IG1lbnUgaW4gbWVudURhdGEpIHtcbiAgICBsZXQgc2VwYXJhdGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXBhcmF0ZU1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZXBhcmF0ZU1lbnVcIik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7bWVudS50b0xvd2VyQ2FzZSgpfUhlYWRlcmApO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVIZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYH4gJHttZW51fSB+YDtcblxuICAgIHNlcGFyYXRlTWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbGV0IGxpc3RPZkNvdXJzZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdE9mQ291cnNlcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RPZkNvdXJzZXNcIik7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZSBpbiBtZW51RGF0YVttZW51XSkge1xuICAgICAgbGV0IGN1cnJlbnRDb3Vyc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjdXJyZW50Q291cnNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY291cnNlXCIpO1xuICAgICAgY3VycmVudENvdXJzZS50ZXh0Q29udGVudCA9IG1lbnVEYXRhW21lbnVdW2NvdXJzZV07XG4gICAgICBsaXN0T2ZDb3Vyc2VzLmFwcGVuZENoaWxkKGN1cnJlbnRDb3Vyc2UpO1xuICAgIH1cbiAgICBzZXBhcmF0ZU1lbnUuYXBwZW5kQ2hpbGQobGlzdE9mQ291cnNlcyk7XG4gICAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdGVNZW51KTtcbiAgfVxuXG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKG1lbnVDb250ZW50Q29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVUYWI7XG4iLCJpbXBvcnQgYmFja2dyb3VuZEltYWdlU291cmNlIGZyb20gXCIuL2ltZ0xhbmRpbmdQYWdlLmpwZ1wiO1xuaW1wb3J0IGNyZWF0ZUxvY2F0aW9uVGFiIGZyb20gXCIuL2xvY2F0aW9uVGFiXCI7XG5pbXBvcnQgY3JlYXRlTWVudVRhYiBmcm9tIFwiLi9tZW51VGFiXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFRhYiBmcm9tIFwiLi9jb250YWN0VGFiXCI7XG5pbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tIFwiLi9zdXBwb3J0RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBzZXR1cFRoZUhlYWRlciB9IGZyb20gXCIuL3N1cHBvcnRGdW5jdGlvbnNcIjtcblxuY29uc3QgY29udGVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbmNvbnN0IGNvbnN0cnVjdExhbmRpbmdwYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdHJ1Y3RCYWNrZ3JvdW5kKCk7XG4gIGNvbnN0cnVjdENvbnRlbnQoKTtcbn07XG5cbmNvbnN0IGNvbnN0cnVjdEJhY2tncm91bmQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKTtcbiAgaHRtbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmFja2dyb3VuZEltYWdlU291cmNlfSlgO1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm92ZXJsYXlcIik7XG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xufTtcblxuY29uc3QgY29uc3RydWN0Q29udGVudCA9IGZ1bmN0aW9uICgpIHtcbiAgY29udGVudE5vZGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsYW5kaW5nUGFnZVwiKTtcbiAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRDb250YWluZXIuaWQgPSBcInRleHRDb250YWluZXJcIjtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXN0YXVyYW50TmFtZS5pZCA9IFwicmVzdGF1cmFudE5hbWVcIjtcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlBpenplcmlhIE1hbWEgTcOtYVwiO1xuICBjb25zdCBuYXZpZ2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2aWdhdGlvbkNvbnRhaW5lci5pZCA9IFwibmF2aWdhdGlvbkNvbnRhaW5lclwiO1xuICBjb25zdCBidG5Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bkxvY2F0aW9uLmlkID0gXCJidG5Mb2NhdGlvblwiO1xuICBidG5Mb2NhdGlvbi50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgYnRuTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgc2V0dXBUaGVIZWFkZXIoY29udGVudE5vZGUsIGUpO1xuICAgIGNyZWF0ZUxvY2F0aW9uVGFiKCk7XG4gIH0pO1xuICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuTWVudS5pZCA9IFwiYnRuTWVudVwiO1xuICBidG5NZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGJ0bk1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xlYXJQYWdlKCk7XG4gICAgc2V0dXBUaGVIZWFkZXIoY29udGVudE5vZGUsIGUpO1xuICAgIGNyZWF0ZU1lbnVUYWIoKTtcbiAgfSk7XG4gIGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5Db250YWN0LmlkID0gXCJidG5Db250YWN0XCI7XG4gIGJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgYnRuQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGVhclBhZ2UoKTtcbiAgICBzZXR1cFRoZUhlYWRlcihjb250ZW50Tm9kZSwgZSk7XG4gICAgY3JlYXRlQ29udGFjdFRhYigpO1xuICB9KTtcblxuICBuYXZpZ2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkxvY2F0aW9uKTtcbiAgbmF2aWdhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5NZW51KTtcbiAgbmF2aWdhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWN0KTtcbiAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbkNvbnRhaW5lcik7XG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3RydWN0TGFuZGluZ3BhZ2U7XG4iLCJjb25zdCBjbGVhclBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHdoaWxlIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHRDb250YWluZXJcIikubmV4dFNpYmxpbmcpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RleHRDb250YWluZXJcIikubmV4dFNpYmxpbmcucmVtb3ZlKCk7XG4gIH1cbn07XG5cbmNvbnN0IHNldHVwVGhlSGVhZGVyID0gZnVuY3Rpb24gKG5hdkJhciwgY2xpY2tlZFRhYikge1xuICBjb25zdCBvbGRBY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjdGl2ZVwiKTtcbiAgb2xkQWN0aXZlVGFiLmZvckVhY2goKHRhYikgPT4ge1xuICAgIHRhYi5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtcbiAgfSk7XG4gIGNvbnN0IG5ld0FjdGl2ZVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NsaWNrZWRUYWIudGFyZ2V0LmlkfWApO1xuICBuZXdBY3RpdmVUYWIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhY3RpdmVcIik7XG4gIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRhYlBhZ2VcIik7XG59O1xuXG5leHBvcnQgeyBjbGVhclBhZ2UsIHNldHVwVGhlSGVhZGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNvbnN0cnVjdExhbmRpbmdwYWdlIGZyb20gXCIuL3BhZ2VDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IFwiLi9jc3MuY3NzXCI7XG5cbmNvbnN0cnVjdExhbmRpbmdwYWdlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=