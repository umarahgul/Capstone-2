"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpacksetup"] = self["webpackChunkwebpacksetup"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    font-style: normal;\r\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;  \r\n}\r\n\r\nbody, html {margin: 0;\r\npadding:0;}\r\nheader {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content:space-around;\r\n    align-items: center;\r\n    width:100%;\r\n    padding:0;\r\n    \r\n}\r\n.logo {width: 30%;}\r\n\r\n#nav-list {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content:space-around;\r\n    align-items:center;\r\n    gap:30%;\r\n    \r\n}\r\n\r\n.nav-item {\r\n\r\n    list-style: none;\r\n    font-size: 1.5rem;   \r\n    padding:1%;\r\n    \r\n}\r\n\r\n#main-heading h1 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 3rem;\r\n    padding:0;\r\n    margin:0;\r\n    \r\n}\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0;\r\n    border: black solid;\r\n    width:100vw;\r\n    padding:0.5%;\r\n    font-weight: 800;\r\n}\r\n\r\n#card {\r\n    padding:60%;\r\n    width: 25%;\r\n    height: 40%;\r\n    border:solid red;\r\n    background-color:white;\r\n    margin: 30%;\r\n}\r\n\r\n#movies {\r\n    border: solid yellowgreen;\r\n    background-color: goldenrod;\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    padding:1%;\r\n}\r\n.commentBtn {\r\n    border-radius: 10%;\r\n    background-color: goldenrod;\r\n    border: solid green;\r\n    font-size: 1.5rem;\r\n    \r\n}\r\n.series {\r\n    \r\n    margin-right:5px;\r\n\r\n\r\n}\r\n.div-title {\r\n    width: 100%;\r\n    height:min-content;\r\n    padding:0;\r\n    margin:0.5%;\r\n    display: flex;\r\n    flex-direction:row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap:5px;\r\n    font-size: 12px;\r\n}   \r\n\r\n\r\n   \r\n  \r\n  /* Style for the popup */\r\n  .hide {\r\n    display:none;\r\n  }\r\n\r\n  .comment-popup-container {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 234234;\r\n  }\r\n  \r\n  .comments-container {\r\n    width: 70%;\r\n    max-height: 100vh;\r\n    background-color: goldenrod;\r\n    padding: 12px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    overflow-y: scroll;\r\n  }\r\n  \r\n  .existingcomments {\r\n    background-color: #242424;\r\n    padding: 12px;\r\n    border-top-left-radius: 9px;\r\n    border-top-right-radius: 9px;\r\n    color: white;\r\n  }\r\n  \r\n  .comment-box li {\r\n    list-style: disc;\r\n    margin-left: 16px;\r\n    margin-top: 8px;\r\n  }\r\n  \r\n  .forms form {\r\n    margin-top: 12px;\r\n  }\r\n  \r\n  .input {\r\n    width: 100%;\r\n    padding: 8px;\r\n    border: none;\r\n    background-color: #1111119e;\r\n    color: #f8f8f8;\r\n  }\r\n  \r\n  .input::placeholder {\r\n    color: #f8f8f8;\r\n  }\r\n  \r\n  .add-comment-btn {\r\n    border: none;\r\n    padding: 8px;\r\n    color: #111;\r\n    border-radius: 3px;\r\n  }\r\n  \r\n  .add-comment-btn:hover {\r\n    cursor: pointer;\r\n    background-color: #ddd;\r\n  }\r\n  \r\n  #popup {\r\n    align-items: center;\r\n    justify-content: center;\r\n    display: none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    padding-top: 100px;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    color: #111;\r\n  }\r\n\r\n\r\n\r\n\r\n  .blur {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100vh;\r\n    backdrop-filter: blur(10px);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .forms {\r\n    background-color: goldenrod;\r\n    border-top-left-radius: 9px;\r\n    border-top-right-radius: 9px;\r\n    padding: 12px;\r\n    display: grid;\r\n    flex-direction: column;\r\n  }\r\n  .likeBtn:hover {cursor: pointer;}\r\n  .likeBtn:active {\r\n    color:red;\r\n    \r\n  }\r\n\r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpacksetup/./src/Style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Style.css":
/*!***********************!*\
  !*** ./src/Style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./Style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_Style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpacksetup/./src/Style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Style.css */ \"./src/Style.css\");\n/* harmony import */ var _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.jpg */ \"./src/assets/logo.jpg\");\n/* harmony import */ var _modules_populate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/populate */ \"./src/modules/populate.js\");\n/* harmony import */ var _modules_comments_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comments-counter */ \"./src/modules/comments-counter.js\");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _modules_likes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/likes */ \"./src/modules/likes.js\");\n/* harmony import */ var _modules_itemsCounter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/itemsCounter */ \"./src/modules/itemsCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n //document.addEventListener('DOMContentLoaded', () => {\r\n    // This code will run after the DOM is fully loaded\r\n\r\n\r\n    document.getElementById('logo-img').setAttribute('src', _assets_logo_jpg__WEBPACK_IMPORTED_MODULE_2__);\r\n    (0,_modules_populate__WEBPACK_IMPORTED_MODULE_3__.render)(); // Call the render function after setting the logo src\r\n\r\n    const heartIcons = document.querySelectorAll('.fa-heart');\r\n    const spanItems = document.querySelectorAll('.itemCount');\r\n// Add the number of items in the span.\r\nspanItems.forEach((span) => {\r\n  span.textContent = ` (${(0,_modules_itemsCounter__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()})`;\r\n});\r\n\r\n\r\nheartIcons.forEach((icon) => icon.addEventListener('click', (event) => {\r\n  alert('likes ');\r\n  (0,_modules_likes__WEBPACK_IMPORTED_MODULE_6__.countLikes)(event);\r\n  event.target.classList.add('animation-heart');\r\n  // Selects the span element next to the icon.\r\n  const span = event.target.previousElementSibling;\r\n  // Retrieves the number of likes and increment it by 1.\r\n  let count = Number(span.textContent.replace('likes', ''));\r\n  span.textContent = `${count += 1} likes`;\r\n}));\r\n\r\n\r\n\r\n  // items counter is returning 0\r\n    // heart.forEach((icon) => icon.addEventListener('click', (event) => {\r\n  \r\n    //   alert('I was called');\r\n  \r\n    //   countLikes(event);\r\n  \r\n     \r\n    //  // event.target.classList.add('animation-heart');\r\n    //   // Selects the span element next to the icon.\r\n    //   const span = event.target.previousElementSibling;\r\n    //   //const span=document.querySelectorAll('.likesCount');\r\n    //   // Retrieves the number of likes and increment it by 1.\r\n    //   let count = Number(span.textContent.replace('likes', ''));\r\n    //   span.textContent = `${count += 1} likes`;\r\n    // }));\r\n  \r\n\r\n\r\n    \r\n    \r\n   // Add a click event listener to a parent element that contains the .commentBtn buttons\r\n    document.body.addEventListener('click', (event) => {\r\n      if (event.target.classList.contains('commentBtn')) {\r\n        const btn = event.target;\r\n  //      alert('Button clicked: ' + btn.textContent); // Debugging alert\r\n        const { id } = btn.parentElement.parentElement;\r\n        (0,_modules_popup__WEBPACK_IMPORTED_MODULE_5__.renderpopup)(id);\r\n       // const commentsCountCon = document.querySelector('.commentsCount');\r\n        //commentsCountCon.textContent = `(${getCommentsCount()})`;\r\n      }\r\n   // });\r\n\r\n\r\n\r\n\r\n\r\n\r\n  // --------event listener for heart like button---//\r\n  \r\n  });\r\n\r\n  \r\n//   const heart = document.querySelectorAll('.likeBtn');\r\n  \r\n// const spanItems = document.querySelectorAll('.itemCount'); // to be updated on the wepage\r\n\r\n// spanItems.values=` (${itemsCounter()})`;\r\n// //Add the number of items in the span.\r\n// // spanItems.forEach((span) => {\r\n// //   span.textContent = ` (${itemsCounter()})`;\r\n// //   spanItems.values=span.textContent;\r\n\r\n// // });\r\n\r\n  \r\n  \r\n  \r\n//   // counting likes, displaying likes and updating \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpacksetup/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments-counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getCommentsCount = () => {\r\n    const commentElem = document.querySelectorAll('.comment-item');\r\n    return commentElem.length;\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentsCount);\n\n//# sourceURL=webpack://webpacksetup/./src/modules/comments-counter.js?");

/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! async */ \"./node_modules/async/dist/async.mjs\");\n/* harmony import */ var _populate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populate */ \"./src/modules/populate.js\");\n// Returns the length of the node (the divs with the series class).\r\n\r\n\r\n\r\n\r\nconst itemsCounter = () => {\r\n     const seriesElements = document.querySelectorAll('.series');\r\n  \r\n    // if (!seriesElements) {\r\n       \r\n    //     return 0;\r\n     \r\n    // }\r\n    // if (seriesElements.length > 30) {\r\n    //   return 'Error';\r\n    // }\r\n    alert(\"no of items \" + seriesElements.length  );\r\n    return seriesElements.length;\r\n  \r\n};\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);\n\n//# sourceURL=webpack://webpacksetup/./src/modules/itemsCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countLikes: () => (/* binding */ countLikes),\n/* harmony export */   retrieveLikes: () => (/* binding */ retrieveLikes)\n/* harmony export */ });\n  const countLikes = async (event) => {\r\n      try {\r\n        return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qWnuRtAEOMyJb0FOBjqh/likes', {\r\n          method: 'POST',\r\n          body: JSON.stringify({\r\n           item_id:  `${event.target.parentNode.parentNode.parentNode.id}`,\r\n          \r\n      \r\n          }),\r\n          \r\n          headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n        });\r\n      }  \r\n      catch (error) {\r\n        return error.message;\r\n      }\r\n      console.log(item_id);\r\n    };\r\n    \r\n  const retrieveLikes = async () => {\r\n   \r\n      try {\r\n        return await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qWnuRtAEOMyJb0FOBjqh/likes', {\r\n          method: 'GET',\r\n          headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n          },\r\n        }).then((response) => response.json());\r\n      } catch (error) {\r\n        return error.message;\r\n      }\r\n    };\r\n    \r\n \r\n    \r\n    \n\n//# sourceURL=webpack://webpacksetup/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/populate.js":
/*!*********************************!*\
  !*** ./src/modules/populate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemCount: () => (/* binding */ itemCount),\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _likes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes */ \"./src/modules/likes.js\");\nlet itemCount = [];\r\n\r\n\r\nconst url = \"https://api.tvmaze.com/shows\";\r\n\r\n// fetch datd from api\r\nconst getData = async () => {\r\n  try {\r\n    const response = await fetch(url); // Fetch data from api endpoints\r\n    const data = await response.json(); // Change the data format to json\r\n\r\n    return data;\r\n  } catch (error) {\r\n    return error.message;\r\n  }\r\n};\r\n\r\nconst render = async () => {\r\n  const likesCount = await (0,_likes__WEBPACK_IMPORTED_MODULE_0__.retrieveLikes)(); // likesCount craeted\r\n  //if(likesCount) {alert('successful');}\r\n  const data = await getData();\r\n  const topThree = data\r\n    .sort((a, b) => b.rating.average - a.rating.average)\r\n    .slice(0, 6);\r\n\r\n  //const dataAsString = JSON.stringify(data, null, 2); // The second argument is for pretty printing with indentation\r\n\r\n  const tvShowsDiv = document.getElementById(\"movies\");\r\n\r\n  for (let x = 0; x < topThree.length; x += 1) {\r\n    const poster = topThree[x].image.medium;\r\n    const title = topThree[x].name;\r\n    const id = topThree[x].id;\r\n\r\n    // a div containing image button and title\r\n    const showDiv = document.createElement(\"div\");\r\n    showDiv.id = `${id}`;\r\n    showDiv.classList.add(\"series\");\r\n    //comparing to find the matching ids   \r\n\r\n    const serieLike = likesCount.find((obj) => obj.item_id === `${id}`);\r\n    const count =  !serieLike ? 0 :serieLike.likesCount;\r\n    \r\n    alert(\"value of count\" + count.likes);\r\n\r\n      spanLikes.textContent = `Likes: ${count}`;\r\n\r\n      // Handle the case when serieLike is not found\r\n      console.error(`No likes data found for item_id: ${id}` );\r\n    \r\n\r\n    const posterImg = document.createElement(\"img\");\r\n    posterImg.src = poster;\r\n    //const icons = document.createElement('span');\r\n\r\n    // a container containing title\r\n    const titleContainer = document.createElement(\"div\");\r\n    const showName = document.createElement(\"h2\");\r\n    const likes = document.createElement(\"i\");\r\n    likes.classList.add(\"fa-solid\", \"fa-heart\", \"likeBtn\");\r\n\r\n    const spanLikes = document.createElement(\"span\");\r\n    spanLikes.classList.add(\"likesCount\"); // in place of items-count\r\n    spanLikes.textContent=`likes : ${count}`; // edit this value and fetch for this value\r\n    showName.textContent = title;\r\n\r\n    //spanLikes.textContent = `Likes: ${count}`;\r\n\r\n    titleContainer.appendChild(showName);\r\n    titleContainer.appendChild(spanLikes);\r\n\r\n    titleContainer.appendChild(likes);\r\n    titleContainer.classList.add(\"div-title\");\r\n\r\n    // a container containing comments button\r\n    const buttonContainer = document.createElement(\"div\");\r\n    const commentBtn = document.createElement(\"button\");\r\n    commentBtn.setAttribute(\"id\", `cmmnt + ${x}`);\r\n    commentBtn.textContent = \"Comments\";\r\n    commentBtn.classList.add(\"commentBtn\");\r\n    buttonContainer.appendChild(commentBtn);\r\n\r\n    showDiv.appendChild(posterImg);\r\n    showDiv.appendChild(titleContainer);\r\n    showDiv.appendChild(buttonContainer);\r\n    tvShowsDiv.appendChild(showDiv);\r\n\r\n    // likes.onclick=async function(){\r\n    //   try {\r\n\r\n    //       const response = await countLikes(event);\r\n    //       if (response.ok) {\r\n    //         // Successfully liked the item, update the count in the UI\r\n    //         spanLikes.textContent = `Likes: ${count + 1}`;\r\n    //         alert('likes ' + spanLikes.textContent);\r\n    //       } else {\r\n    //         // Handle errors if needed\r\n    //         console.error('Failed to like the item:', response.status, response.statusText);\r\n    //       }\r\n    //     } catch (error) {\r\n    //       console.error('Failed to retrieve likes:', error.message);\r\n    //     }\r\n\r\n    // }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://webpacksetup/./src/modules/populate.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderpopup: () => (/* binding */ renderpopup)\n/* harmony export */ });\n/* harmony import */ var _send_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./send.js */ \"./src/modules/send.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-counter.js */ \"./src/modules/comments-counter.js\");\n\r\n\r\n\r\n\r\n// Take the API endpoint and retrives data. return retrived data\r\nconst getData = async (url) => {\r\n  const response = await fetch(url);\r\n  let data = [];\r\n  if (response.ok) {\r\n    data = await response.json();\r\n  }\r\n  return data;\r\n};\r\n\r\n// renderpopup get the data from getData function and inject the popup templete with that data\r\n\r\nconst renderpopup = async (showid = 98) => {\r\n  \r\n  const container = document.getElementById('comment-popup-container');\r\n  const mainUrl = `https://api.tvmaze.com/shows/${showid}`;\r\n  const involvementUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qWnuRtAEOMyJb0FOBjqh/comments?item_id=${parseInt(showid, 10)}`;\r\n  \r\n  \r\n  // Fetch data from API\r\n  const data = await getData(mainUrl);\r\n  const comments = await getData(involvementUrl);\r\n   \r\n  \r\n  // Templete for the comment popup\r\n  container.innerHTML = `\r\n        <div class=\"blur\"></div>\r\n       <div class=\"comments-container animation-comment\">\r\n          <div><i class=\"fa-solid close fa-xmark\"></i></div>\r\n         <div class=info-wrapper>\r\n         <div class=\"poster-container\">\r\n             <img src=\"${data.image.medium}\" alt=\"\" />\r\n           </div>\r\n           <div class=\"details-container\">\r\n             <div class=\"details-box\">\r\n               <h2 class=\"show-title heading\">${data.name}</h2>\r\n               <ul>\r\n                 <li class=\"genresj normal\">\r\n                   Genres: ${data.genres}\r\n                 </li>\r\n                 <li class=\"language normal\">Language: ${data.language}</li>\r\n                 <li class=\"rating normal\">IMDb Rating: ${data.rating.average}</li>\r\n                 <li class=\"summary normal\">Summary: ${data.summary}</li>\r\n               </ul>\r\n             </div>\r\n           </div> \r\n           </div> \r\n           <div class=\"comments\">\r\n             <div class=\"forms\">\r\n               <h3 class=\"heading\"> Add a Comment </h3>\r\n               <form>\r\n                   <input class=\"input username\" placeholder=\"Name\" type=\"text\"/> </br></br>\r\n                   <textarea placeholder=\"Comment\" class=\"input comment-message\" name=\"comment\" id=\"comment\" cols=\"30\" rows=\"7\"></textarea>\r\n                   <button class=\"add-comment-btn\">Comment</button>\r\n                 </form>\r\n             </div>\r\n             <div class=\"existingcomments\">\r\n                 <h2 class=\"heading\">Comments<span class=\"commentsCount\"></span></h2>\r\n                 <ul class=\"comment-box\">\r\n                 ${comments.map((tag) => `<li id=\"${data.id}\"><span class=\"comment-item\">${tag.creation_date} ${`${tag.username}: ${tag.comment}`}</span></li>`).join('')}\r\n                 </ul>\r\n             </div>\r\n         </div>\r\n         </div>\r\n         `;\r\n\r\n  // Add click event to the comment popup close icon\r\n  const closeBtn = container.querySelector('.close');\r\n  closeBtn.addEventListener('click', () => {\r\n    container.innerHTML = '';\r\n  });\r\n\r\n  const addCommentBtn = document.querySelector('.add-comment-btn');\r\n\r\n  // Add event for add comment button\r\n\r\n  addCommentBtn.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const nameElem = document.querySelector('.username');\r\n    const commentElem = document.querySelector('.comment-message');\r\n    if (nameElem.value !== '' && commentElem.value !== '') {\r\n      const dataToSend = { item_id: data.id, username: nameElem.value, comment: commentElem.value };\r\n      await (0,_send_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dataToSend);\r\n      await renderpopup(data.id);\r\n      nameElem.value = '';\r\n      commentElem.value = '';\r\n\r\n      const commentsCountCon = document.querySelector('.commentsCount');\r\n\r\n      commentsCountCon.textContent = `(${(0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()})`;\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://webpacksetup/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendData = async (data) => {\r\n    const dataToSend = JSON.stringify(data);\r\n    const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/qWnuRtAEOMyJb0FOBjqh/comments';\r\n    await fetch(url, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: dataToSend,\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendData);\n\n//# sourceURL=webpack://webpacksetup/./src/modules/send.js?");

/***/ }),

/***/ "./src/assets/logo.jpg":
/*!*****************************!*\
  !*** ./src/assets/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eec18e8abcba665c2c24.jpg\";\n\n//# sourceURL=webpack://webpacksetup/./src/assets/logo.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-fd27a8"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);