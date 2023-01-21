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
/* harmony import */ var _supportFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportFunctions */ "./src/supportFunctions.js");



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

const createContactTab = function (clickedTab) {
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.setupTheHeader)(contentNode, clickedTab);
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
/* harmony import */ var _supportFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportFunctions */ "./src/supportFunctions.js");
/* harmony import */ var _location_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.jpg */ "./src/location.jpg");




const contentNode = document.querySelector("#content");

const createLocationTab = function (clickedTab) {
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.setupTheHeader)(contentNode, clickedTab);

  const locContentContainer = document.createElement("div");
  locContentContainer.setAttribute("id", "locContentContainer");

  const locImage = document.createElement("img");
  locImage.setAttribute("src", `${_location_jpg__WEBPACK_IMPORTED_MODULE_1__}`);
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
/* harmony import */ var _supportFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supportFunctions */ "./src/supportFunctions.js");



const contentNode = document.querySelector("#content");

const menuData = {
  Starters: ["Bruschetta", "Vitello Tonnato", "Mozzarella"],
  Mains: ["Pizza", "Rumpsteak", "Linguine"],
  Desserts: ["Tiramisu", "Créme Brulèe", "Icecream"],
  Drinks: ["Water", "Wine", "Softdrinks"],
};

const createMenuTab = function (clickedTab) {
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.clearPage)();
  (0,_supportFunctions__WEBPACK_IMPORTED_MODULE_0__.setupTheHeader)(contentNode, clickedTab);

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
    (0,_locationTab__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
  });
  const btnMenu = document.createElement("button");
  btnMenu.id = "btnMenu";
  btnMenu.textContent = "Menu";
  btnMenu.addEventListener("click", function (e) {
    (0,_menuTab__WEBPACK_IMPORTED_MODULE_2__["default"])(e);
  });
  const btnContact = document.createElement("button");
  btnContact.id = "btnContact";
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", function (e) {
    (0,_contactTab__WEBPACK_IMPORTED_MODULE_3__["default"])(e);
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
console.log("Wired up correctly!");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELGlCQUFpQiwyQkFBMkIsZ0NBQWdDLGlDQUFpQyxHQUFHLFVBQVUsZ0JBQWdCLGlCQUFpQixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLEdBQUcsMEJBQTBCLDRCQUE0QixHQUFHLHNCQUFzQixnQ0FBZ0MsR0FBRyxjQUFjLGdCQUFnQixvQkFBb0IsV0FBVyxhQUFhLFlBQVksY0FBYyxlQUFlLHlDQUF5QyxHQUFHLG9CQUFvQixpQkFBaUIsb0JBQW9CLHFCQUFxQixpQkFBaUIsd0JBQXdCLEdBQUcscUJBQXFCLHlCQUF5QixHQUFHLDBCQUEwQixrQkFBa0IsdUNBQXVDLEdBQUcsMkNBQTJDLHFCQUFxQixpQkFBaUIsaUJBQWlCLG9CQUFvQixHQUFHLDZEQUE2RCwrQkFBK0IsR0FBRyxnRUFBZ0UsOEJBQThCLHNCQUFzQiwrQkFBK0IsR0FBRyxnRUFBZ0UsOEJBQThCLHlCQUF5QixHQUFHLGtCQUFrQiw2QkFBNkIsR0FBRyxjQUFjLDZCQUE2QixHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRywrRUFBK0Usa0JBQWtCLDJCQUEyQiw0QkFBNEIsY0FBYyxpQkFBaUIscUJBQXFCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNCQUFzQixrQkFBa0IsR0FBRyxlQUFlLHdCQUF3QixnQkFBZ0IsdUJBQXVCLGtCQUFrQixHQUFHLGNBQWMsZ0JBQWdCLEdBQUcsbUJBQW1CLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEdBQUcsNEVBQTRFLGtCQUFrQixvQkFBb0IsNEJBQTRCLGtCQUFrQixpQkFBaUIscUJBQXFCLGlCQUFpQixpQkFBaUIscUJBQXFCLHNCQUFzQixHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLHdCQUF3QixpQkFBaUIsR0FBRyxpQkFBaUIsc0JBQXNCLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLHdCQUF3QixrQ0FBa0MsaUJBQWlCLGdCQUFnQixpQkFBaUIsdUJBQXVCLEdBQUcsYUFBYSwwQkFBMEIsR0FBRyxzRUFBc0Usa0JBQWtCLDJCQUEyQixrQ0FBa0MsaUJBQWlCLHFCQUFxQixpQkFBaUIsaUJBQWlCLHFCQUFxQixvQkFBb0IsR0FBRyxzQkFBc0Isc0JBQXNCLGdCQUFnQixHQUFHLGNBQWMsa0JBQWtCLDJCQUEyQixHQUFHLDJCQUEyQixpQkFBaUIsbUNBQW1DLEdBQUcsaUNBQWlDLG1DQUFtQyxHQUFHLFNBQVMsOEVBQThFLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLE9BQU8sWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGdDQUFnQyxpQkFBaUIsMkJBQTJCLGdDQUFnQyxpQ0FBaUMsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGlCQUFpQixHQUFHLDBCQUEwQiw0QkFBNEIsR0FBRyxzQkFBc0IsZ0NBQWdDLEdBQUcsY0FBYyxnQkFBZ0Isb0JBQW9CLFdBQVcsYUFBYSxZQUFZLGNBQWMsZUFBZSx5Q0FBeUMsR0FBRyxvQkFBb0IsaUJBQWlCLG9CQUFvQixxQkFBcUIsaUJBQWlCLHdCQUF3QixHQUFHLHFCQUFxQix5QkFBeUIsR0FBRywwQkFBMEIsa0JBQWtCLHVDQUF1QyxHQUFHLDJDQUEyQyxxQkFBcUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsR0FBRyw2REFBNkQsK0JBQStCLEdBQUcsZ0VBQWdFLDhCQUE4QixzQkFBc0IsK0JBQStCLEdBQUcsZ0VBQWdFLDhCQUE4Qix5QkFBeUIsR0FBRyxrQkFBa0IsNkJBQTZCLEdBQUcsY0FBYyw2QkFBNkIsR0FBRyxpQkFBaUIsNkJBQTZCLEdBQUcsK0VBQStFLGtCQUFrQiwyQkFBMkIsNEJBQTRCLGNBQWMsaUJBQWlCLHFCQUFxQixpQkFBaUIsaUJBQWlCLHFCQUFxQixzQkFBc0Isa0JBQWtCLEdBQUcsZUFBZSx3QkFBd0IsZ0JBQWdCLHVCQUF1QixrQkFBa0IsR0FBRyxjQUFjLGdCQUFnQixHQUFHLG1CQUFtQixzQkFBc0IsdUJBQXVCLGdCQUFnQixHQUFHLDRFQUE0RSxrQkFBa0Isb0JBQW9CLDRCQUE0QixrQkFBa0IsaUJBQWlCLHFCQUFxQixpQkFBaUIsaUJBQWlCLHFCQUFxQixzQkFBc0IsR0FBRyxtQkFBbUIsa0JBQWtCLDJCQUEyQix3QkFBd0IsaUJBQWlCLEdBQUcsaUJBQWlCLHNCQUFzQix1QkFBdUIsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQix3QkFBd0Isa0NBQWtDLGlCQUFpQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsc0VBQXNFLGtCQUFrQiwyQkFBMkIsa0NBQWtDLGlCQUFpQixxQkFBcUIsaUJBQWlCLGlCQUFpQixxQkFBcUIsb0JBQW9CLEdBQUcsc0JBQXNCLHNCQUFzQixnQkFBZ0IsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIsaUJBQWlCLG1DQUFtQyxHQUFHLGlDQUFpQyxtQ0FBbUMsR0FBRyxxQkFBcUI7QUFDNTRQO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpRztBQUNqRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSTJDO0FBQ25FLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSwyRkFBYyxHQUFHLDJGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZitDO0FBQ0s7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNERBQVM7QUFDWCxFQUFFLGlFQUFjO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRWU7QUFDSztBQUNSOztBQUU1Qzs7QUFFQTtBQUNBLEVBQUUsNERBQVM7QUFDWCxFQUFFLGlFQUFjOztBQUVoQjtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLDBDQUFjLENBQUM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2M7QUFDSzs7QUFFcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw0REFBUztBQUNYLEVBQUUsaUVBQWM7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLG1CQUFtQjtBQUNwRDtBQUNBLDhCQUE4QixNQUFNOztBQUVwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDNEI7QUFDWDtBQUNSO0FBQ007O0FBRTVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsZ0RBQXFCLENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFpQjtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFhO0FBQ2pCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQWdCO0FBQ3BCLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsb0JBQW9CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RHBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0RBQWtELHFCQUFxQjtBQUN2RTtBQUNBO0FBQ0E7O0FBRXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQnJDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQXFEO0FBQ2xDOztBQUVuQiw0REFBb0I7QUFDcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvY3NzLmNzcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL3NyYy9jc3MuY3NzPzlhMjgiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvbG9jYXRpb25UYWIuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vc3JjL3BhZ2VDb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2UvLi9zcmMvc3VwcG9ydEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGlucmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW5yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2RpbnJlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudC5sYW5kaW5nUGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQudGFiUGFnZSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcXG59XFxuXFxuI3RleHRDb250YWluZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbWF4LXdpZHRoOiA2NTBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNyZXN0YXVyYW50TmFtZSB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG59XFxuXFxuI25hdmlnYXRpb25Db250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxufVxcblxcbiNidG5Mb2NhdGlvbixcXG4jYnRuTWVudSxcXG4jYnRuQ29udGFjdCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jYnRuTG9jYXRpb246aG92ZXIsXFxuI2J0bk1lbnU6aG92ZXIsXFxuI2J0bkNvbnRhY3Q6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNidG5Mb2NhdGlvbjphY3RpdmUsXFxuI2J0bk1lbnU6YWN0aXZlLFxcbiNidG5Db250YWN0OmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiKDE5NiwgMTc5LCAxNzkpO1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uLmFjdGl2ZSxcXG4jYnRuTWVudS5hY3RpdmUsXFxuI2J0bkNvbnRhY3QuYWN0aXZlIHtcXG4gIGNvbG9yOiByZ2IoMTk2LCAxNzksIDE3OSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG59XFxuXFxuI2J0bk1lbnUge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbn1cXG5cXG4jYnRuQ29udGFjdCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBMb2NhdGlvbiBUYWIgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jbG9jQ29udGVudENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbiNsb2NJbWFnZSB7XFxuICBtYXgtaGVpZ2h0OiAxMC41cmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkO1xcbn1cXG5cXG4jbG9jVGV4dCB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2xvY1NpZ25hdHVyZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gTWVudSBUYWIgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jbWVudUNvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcm93LWdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5zZXBhcmF0ZU1lbnUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ubWVudUhlYWRlciB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmxpc3RPZkNvdXJzZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmNvdXJzZSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLSBDb250YWN0IFRhYiAtLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbiNjb250YWN0Rm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNjb250YWN0R3JlZXRpbmcge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNidG5TdWJtaXRDb250YWN0Rm9ybSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTk2LCAxNzksIDE3OSk7XFxufVxcblxcbiNidG5TdWJtaXRDb250YWN0Rm9ybTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMTczLCAxNjMsIDE2Myk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0UsMEJBQTBCO0FBQzVCOztBQUVBOzs7RUFHRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtBQUM1Qjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQSxnREFBZ0Q7O0FBRWhEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLDRDQUE0Qzs7QUFFNUM7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSwrQ0FBK0M7O0FBRS9DO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQubGFuZGluZ1BhZ2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50LnRhYlBhZ2Uge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jb3ZlcmxheSB7XFxuICB6LWluZGV4OiAtMTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbiN0ZXh0Q29udGFpbmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIG1heC13aWR0aDogNjUwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jcmVzdGF1cmFudE5hbWUge1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxufVxcblxcbiNuYXZpZ2F0aW9uQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbn1cXG5cXG4jYnRuTG9jYXRpb24sXFxuI2J0bk1lbnUsXFxuI2J0bkNvbnRhY3Qge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2J0bkxvY2F0aW9uOmhvdmVyLFxcbiNidG5NZW51OmhvdmVyLFxcbiNidG5Db250YWN0OmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYnRuTG9jYXRpb246YWN0aXZlLFxcbiNidG5NZW51OmFjdGl2ZSxcXG4jYnRuQ29udGFjdDphY3RpdmUge1xcbiAgY29sb3I6IHJnYigxOTYsIDE3OSwgMTc5KTtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNidG5Mb2NhdGlvbi5hY3RpdmUsXFxuI2J0bk1lbnUuYWN0aXZlLFxcbiNidG5Db250YWN0LmFjdGl2ZSB7XFxuICBjb2xvcjogcmdiKDE5NiwgMTc5LCAxNzkpO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNidG5Mb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxufVxcblxcbiNidG5NZW51IHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG59XFxuXFxuI2J0bkNvbnRhY3Qge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDIgLyA0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gTG9jYXRpb24gVGFiIC0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI2xvY0NvbnRlbnRDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG4jbG9jSW1hZ2Uge1xcbiAgbWF4LWhlaWdodDogMTAuNXJlbTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZDtcXG59XFxuXFxuI2xvY1RleHQge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbiNsb2NTaWduYXR1cmUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tIE1lbnUgVGFiIC0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuI21lbnVDb250ZW50Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDIwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uc2VwYXJhdGVNZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuXFxuLm1lbnVIZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5saXN0T2ZDb3Vyc2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5jb3Vyc2Uge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0gQ29udGFjdCBUYWIgLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG4jY29udGFjdEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jY29udGFjdEdyZWV0aW5nIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jYnRuU3VibWl0Q29udGFjdEZvcm0ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiKDE5NiwgMTc5LCAxNzkpO1xcbn1cXG5cXG4jYnRuU3VibWl0Q29udGFjdEZvcm06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiKDE3MywgMTYzLCAxNjMpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jc3MuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL3N1cHBvcnRGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHNldHVwVGhlSGVhZGVyIH0gZnJvbSBcIi4vc3VwcG9ydEZ1bmN0aW9uc1wiO1xuXG5jb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbGFiZWxOYW1lcyA9IFtcIk5hbWVcIiwgXCJNYWlsXCIsIFwiWW91ciBNZXNzYWdlXCJdO1xuY29uc3QgcGxhY2Vob2xkZXJUZXh0cyA9IFtcbiAgXCJFbnRlciB5b3VyIE5hbWVcIixcbiAgXCJFbnRlciB5b3VyIE1haWxcIixcbiAgXCJXcml0ZSB5b3VyIE1lc3NhZ2VcIixcbl07XG5jb25zdCBpbnB1dFR5cGVzID0gW1widGV4dFwiLCBcImVtYWlsXCIsIFwidGV4dGFyZWFcIl07XG5jb25zdCBhdHRyaWJ1dGVzID0gW1wibmFtZVwiLCBcInR5cGVcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlcXVpcmVkXCJdO1xuY29uc3QgbmFtZUF0dHJpYnV0ZXMgPSBbXCJjb250YWN0TmFtZVwiLCBcImNvbnRhY3RNYWlsXCIsIFwiY29udGFjdFRleHRcIiwgXCJ0cnVlXCJdO1xuXG5jb25zdCBjcmVhdGVDb250YWN0VGFiID0gZnVuY3Rpb24gKGNsaWNrZWRUYWIpIHtcbiAgY2xlYXJQYWdlKCk7XG4gIHNldHVwVGhlSGVhZGVyKGNvbnRlbnROb2RlLCBjbGlja2VkVGFiKTtcbiAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29udGFjdEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0Rm9ybVwiKTtcblxuICBjb25zdCBjb250YWN0R3JlZXRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29udGFjdEdyZWV0aW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdEdyZWV0aW5nXCIpO1xuICBjb250YWN0R3JlZXRpbmcudGV4dENvbnRlbnQgPVxuICAgIFwiV2Ugd2FudCB5b3UgdG8gaGF2ZSB0aGUgYmVzdCBleHBlcmllbmNlIGF0IG91ciByZXN0YXVyYW50LiBUbyBtYWtlIGEgcmVzZXJ2YXRpb24gb3IgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucywgZmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyFcIjtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29udGFjdEdyZWV0aW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVsTmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIndyYXBwZXJcIik7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzWzBdLCBuYW1lQXR0cmlidXRlc1tpXSk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbE5hbWVzW2ldO1xuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlc1swXSwgbmFtZUF0dHJpYnV0ZXNbaV0pO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzWzFdLCBpbnB1dFR5cGVzW2ldKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlc1syXSwgcGxhY2Vob2xkZXJUZXh0c1tpXSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG5cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG5cbiAgY29uc3QgYnRuU3VibWl0Q29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5TdWJtaXRDb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ0blN1Ym1pdENvbnRhY3RGb3JtXCIpO1xuICBidG5TdWJtaXRDb250YWN0Rm9ybS50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gIGJ0blN1Ym1pdENvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIHN1Ym1pdENvbnRhY3RGb3JtKGUpO1xuICB9KTtcbiAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoYnRuU3VibWl0Q29udGFjdEZvcm0pO1xuXG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcbn07XG5cbmNvbnN0IHN1Ym1pdENvbnRhY3RGb3JtID0gZnVuY3Rpb24gKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBhbGVydChcbiAgICBcIlRoYW5rcyBmb3IgcmVhY2hpbmcgb3V0IHRvIHVzLiBXZSdsbCBnZXQgYmFjayB0byB5b3UgYXMgc29vbiBhcyBwb3NzaWJsZSFcIlxuICApO1xuICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdEZvcm1cIik7XG4gIGNvbnRhY3RGb3JtLnJlc2V0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0VGFiO1xuIiwiaW1wb3J0IHsgY2xlYXJQYWdlIH0gZnJvbSBcIi4vc3VwcG9ydEZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgc2V0dXBUaGVIZWFkZXIgfSBmcm9tIFwiLi9zdXBwb3J0RnVuY3Rpb25zXCI7XG5pbXBvcnQgbG9jSW1hZ2VTb3VyY2UgZnJvbSBcIi4vbG9jYXRpb24uanBnXCI7XG5cbmNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBjcmVhdGVMb2NhdGlvblRhYiA9IGZ1bmN0aW9uIChjbGlja2VkVGFiKSB7XG4gIGNsZWFyUGFnZSgpO1xuICBzZXR1cFRoZUhlYWRlcihjb250ZW50Tm9kZSwgY2xpY2tlZFRhYik7XG5cbiAgY29uc3QgbG9jQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvY0NvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NDb250ZW50Q29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxvY0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgbG9jSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAke2xvY0ltYWdlU291cmNlfWApO1xuICBsb2NJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvY0ltYWdlXCIpO1xuXG4gIGNvbnN0IGxvY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9jVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvY1RleHRcIik7XG4gIGxvY1RleHQudGV4dENvbnRlbnQgPVxuICAgIFwiU2luY2Ugb3VyIGVzdGFibGlzaG1lbnQgaW4gMTgwOSwgd2Ugc3RyaXZlIHRvIG1ha2UgeW91IGZlZWwgYXQgaG9tZSBpbiBvdXIgcmVzdGF1cmFudC4gT3VyIHNlY3JldCBpcywgdGhhdCB3ZSBnb3QgYWxsIG91ciByZWNpcGVzIGZyb20gdGhlIG1vdGhlcnMgYW5kIGdyYW5kbW90aGVycyBvZiBvdXIgdmlsbGFnZSwgc28gY2hhbmNlcyBhcmUgdGhhdCB5b3UgbWlnaHQgdGhpbmsgdG8geW91cnNlbGY6ICdJdCB0YXN0ZXMganVzdCBsaWtlIGF0IG15IG1vdGhlcnPCtCBwbGFjZScuXCI7XG5cbiAgY29uc3QgaW1nQW5kVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltZ0FuZFRleHRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdBbmRUZXh0Q29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxvY1NpZ25hdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NTaWduYXR1cmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2NTaWduYXR1cmVcIik7XG4gIGxvY1NpZ25hdHVyZS50ZXh0Q29udGVudCA9IFwifn4gTGEgRmFtw61saWEgfn5cIjtcblxuICBpbWdBbmRUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY0ltYWdlKTtcbiAgaW1nQW5kVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NUZXh0KTtcblxuICBsb2NDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0FuZFRleHRDb250YWluZXIpO1xuICBsb2NDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvY1NpZ25hdHVyZSk7XG5cbiAgY29udGVudE5vZGUuYXBwZW5kQ2hpbGQobG9jQ29udGVudENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVMb2NhdGlvblRhYjtcbiIsImltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gXCIuL3N1cHBvcnRGdW5jdGlvbnNcIjtcbmltcG9ydCB7IHNldHVwVGhlSGVhZGVyIH0gZnJvbSBcIi4vc3VwcG9ydEZ1bmN0aW9uc1wiO1xuXG5jb25zdCBjb250ZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuY29uc3QgbWVudURhdGEgPSB7XG4gIFN0YXJ0ZXJzOiBbXCJCcnVzY2hldHRhXCIsIFwiVml0ZWxsbyBUb25uYXRvXCIsIFwiTW96emFyZWxsYVwiXSxcbiAgTWFpbnM6IFtcIlBpenphXCIsIFwiUnVtcHN0ZWFrXCIsIFwiTGluZ3VpbmVcIl0sXG4gIERlc3NlcnRzOiBbXCJUaXJhbWlzdVwiLCBcIkNyw6ltZSBCcnVsw6hlXCIsIFwiSWNlY3JlYW1cIl0sXG4gIERyaW5rczogW1wiV2F0ZXJcIiwgXCJXaW5lXCIsIFwiU29mdGRyaW5rc1wiXSxcbn07XG5cbmNvbnN0IGNyZWF0ZU1lbnVUYWIgPSBmdW5jdGlvbiAoY2xpY2tlZFRhYikge1xuICBjbGVhclBhZ2UoKTtcbiAgc2V0dXBUaGVIZWFkZXIoY29udGVudE5vZGUsIGNsaWNrZWRUYWIpO1xuXG4gIGNvbnN0IG1lbnVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudUNvbnRlbnRDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51Q29udGVudENvbnRhaW5lclwiKTtcblxuICBmb3IgKGNvbnN0IG1lbnUgaW4gbWVudURhdGEpIHtcbiAgICBsZXQgc2VwYXJhdGVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXBhcmF0ZU1lbnUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZXBhcmF0ZU1lbnVcIik7XG5cbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7bWVudS50b0xvd2VyQ2FzZSgpfUhlYWRlcmApO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVIZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gYH4gJHttZW51fSB+YDtcblxuICAgIHNlcGFyYXRlTWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgbGV0IGxpc3RPZkNvdXJzZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbGlzdE9mQ291cnNlcy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpc3RPZkNvdXJzZXNcIik7XG5cbiAgICBmb3IgKGNvbnN0IGNvdXJzZSBpbiBtZW51RGF0YVttZW51XSkge1xuICAgICAgbGV0IGN1cnJlbnRDb3Vyc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBjdXJyZW50Q291cnNlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY291cnNlXCIpO1xuICAgICAgY3VycmVudENvdXJzZS50ZXh0Q29udGVudCA9IG1lbnVEYXRhW21lbnVdW2NvdXJzZV07XG4gICAgICBsaXN0T2ZDb3Vyc2VzLmFwcGVuZENoaWxkKGN1cnJlbnRDb3Vyc2UpO1xuICAgIH1cbiAgICBzZXBhcmF0ZU1lbnUuYXBwZW5kQ2hpbGQobGlzdE9mQ291cnNlcyk7XG4gICAgbWVudUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdGVNZW51KTtcbiAgfVxuXG4gIGNvbnRlbnROb2RlLmFwcGVuZENoaWxkKG1lbnVDb250ZW50Q29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVUYWI7XG4iLCJpbXBvcnQgYmFja2dyb3VuZEltYWdlU291cmNlIGZyb20gXCIuL2ltZ0xhbmRpbmdQYWdlLmpwZ1wiO1xuaW1wb3J0IGNyZWF0ZUxvY2F0aW9uVGFiIGZyb20gXCIuL2xvY2F0aW9uVGFiXCI7XG5pbXBvcnQgY3JlYXRlTWVudVRhYiBmcm9tIFwiLi9tZW51VGFiXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdFRhYiBmcm9tIFwiLi9jb250YWN0VGFiXCI7XG5cbmNvbnN0IGNvbnRlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb25zdCBjb25zdHJ1Y3RMYW5kaW5ncGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3RydWN0QmFja2dyb3VuZCgpO1xuICBjb25zdHJ1Y3RDb250ZW50KCk7XG59O1xuXG5jb25zdCBjb25zdHJ1Y3RCYWNrZ3JvdW5kID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImh0bWxcIik7XG4gIGh0bWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2JhY2tncm91bmRJbWFnZVNvdXJjZX0pYDtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvdmVybGF5XCIpO1xuICBjb250ZW50Tm9kZS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbn07XG5cbmNvbnN0IGNvbnN0cnVjdENvbnRlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnRlbnROb2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGFuZGluZ1BhZ2VcIik7XG4gIGNvbnN0IHRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0Q29udGFpbmVyLmlkID0gXCJ0ZXh0Q29udGFpbmVyXCI7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVzdGF1cmFudE5hbWUuaWQgPSBcInJlc3RhdXJhbnROYW1lXCI7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gXCJQaXp6ZXJpYSBNYW1hIE3DrWFcIjtcbiAgY29uc3QgbmF2aWdhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdmlnYXRpb25Db250YWluZXIuaWQgPSBcIm5hdmlnYXRpb25Db250YWluZXJcIjtcbiAgY29uc3QgYnRuTG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5Mb2NhdGlvbi5pZCA9IFwiYnRuTG9jYXRpb25cIjtcbiAgYnRuTG9jYXRpb24udGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGJ0bkxvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNyZWF0ZUxvY2F0aW9uVGFiKGUpO1xuICB9KTtcbiAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bk1lbnUuaWQgPSBcImJ0bk1lbnVcIjtcbiAgYnRuTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICBidG5NZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNyZWF0ZU1lbnVUYWIoZSk7XG4gIH0pO1xuICBjb25zdCBidG5Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuQ29udGFjdC5pZCA9IFwiYnRuQ29udGFjdFwiO1xuICBidG5Db250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gIGJ0bkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY3JlYXRlQ29udGFjdFRhYihlKTtcbiAgfSk7XG5cbiAgbmF2aWdhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Mb2NhdGlvbik7XG4gIG5hdmlnYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuTWVudSk7XG4gIG5hdmlnYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdCk7XG4gIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdmlnYXRpb25Db250YWluZXIpO1xuICBjb250ZW50Tm9kZS5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbmVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0cnVjdExhbmRpbmdwYWdlO1xuIiwiY29uc3QgY2xlYXJQYWdlID0gZnVuY3Rpb24gKCkge1xuICB3aGlsZSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0Q29udGFpbmVyXCIpLm5leHRTaWJsaW5nKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXh0Q29udGFpbmVyXCIpLm5leHRTaWJsaW5nLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCBzZXR1cFRoZUhlYWRlciA9IGZ1bmN0aW9uIChuYXZCYXIsIGNsaWNrZWRUYWIpIHtcbiAgY29uc3Qgb2xkQWN0aXZlVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hY3RpdmVcIik7XG4gIG9sZEFjdGl2ZVRhYi5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIucmVtb3ZlQXR0cmlidXRlKFwiY2xhc3NcIik7XG4gIH0pO1xuICBjb25zdCBuZXdBY3RpdmVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjbGlja2VkVGFiLnRhcmdldC5pZH1gKTtcbiAgbmV3QWN0aXZlVGFiLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWN0aXZlXCIpO1xuICBuYXZCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0YWJQYWdlXCIpO1xufTtcblxuZXhwb3J0IHsgY2xlYXJQYWdlLCBzZXR1cFRoZUhlYWRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb25zdHJ1Y3RMYW5kaW5ncGFnZSBmcm9tIFwiLi9wYWdlQ29uc3RydWN0b3JcIjtcbmltcG9ydCBcIi4vY3NzLmNzc1wiO1xuXG5jb25zdHJ1Y3RMYW5kaW5ncGFnZSgpO1xuY29uc29sZS5sb2coXCJXaXJlZCB1cCBjb3JyZWN0bHkhXCIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9