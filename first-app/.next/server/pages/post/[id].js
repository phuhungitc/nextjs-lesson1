"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/post/[id]";
exports.ids = ["pages/post/[id]"];
exports.modules = {

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-entities */ \"html-entities\");\n/* harmony import */ var html_entities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_entities__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/macos/Desktop/nextjs-study/first-app/pages/post/[id].js\";\n\n\n\n\nconst getStaticPaths = async () => {\n  const res = await fetch('https://trithuconline.com/wp-json/wp/v2/posts');\n  const data = await res.json();\n  const paths = data.map(post => {\n    return {\n      params: {\n        slug: post.slug,\n        id: post.id.toString()\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n};\nconst getStaticProps = async context => {\n  const id = context.params.id;\n  const res = await fetch('https://trithuconline.com/wp-json/wp/v2/posts/' + id);\n  const data = await res.json();\n\n  if (!data) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      post: data\n    }\n  };\n};\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n        children: (0,html_entities__WEBPACK_IMPORTED_MODULE_2__.decode)(post.title.rendered)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n        dangerouslySetInnerHTML: {\n          __html: post.content.rendered\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdPLE1BQU1HLGNBQWMsR0FBRyxZQUFZO0FBQ3RDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsK0NBQUQsQ0FBdkI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRixJQUFJLENBQUNHLEdBQUwsQ0FBVUMsSUFBRCxJQUFVO0FBQzdCLFdBQU07QUFDRkMsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQURQO0FBRUpDLFFBQUFBLEVBQUUsRUFBRUgsSUFBSSxDQUFDRyxFQUFMLENBQVFDLFFBQVI7QUFGQTtBQUROLEtBQU47QUFNSCxHQVBhLENBQWQ7QUFRQSxTQUFNO0FBQ0ZOLElBQUFBLEtBREU7QUFFRk8sSUFBQUEsUUFBUSxFQUFFO0FBRlIsR0FBTjtBQUlILENBZk07QUFnQkEsTUFBTUMsY0FBYyxHQUFHLE1BQU9DLE9BQVAsSUFBbUI7QUFDN0MsUUFBTUosRUFBRSxHQUFHSSxPQUFPLENBQUNOLE1BQVIsQ0FBZUUsRUFBMUI7QUFDQSxRQUFNVCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG1EQUFpRFEsRUFBbEQsQ0FBdkI7QUFDQSxRQUFNUCxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQW5COztBQUNBLE1BQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1AsV0FBTztBQUNIWSxNQUFBQSxRQUFRLEVBQUU7QUFEUCxLQUFQO0FBR0g7O0FBQ0QsU0FBTztBQUNIQyxJQUFBQSxLQUFLLEVBQUU7QUFBQ1QsTUFBQUEsSUFBSSxFQUFDSjtBQUFOO0FBREosR0FBUDtBQUdILENBWk07O0FBYVAsU0FBU2MsSUFBVCxDQUFjO0FBQUNWLEVBQUFBO0FBQUQsQ0FBZCxFQUFzQjtBQUNsQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLGlEQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQkFBS1IscURBQU0sQ0FBQ1EsSUFBSSxDQUFDVyxLQUFMLENBQVdDLFFBQVo7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFLLCtCQUF1QixFQUFFO0FBQUNDLFVBQUFBLE1BQU0sRUFBQ2IsSUFBSSxDQUFDYyxPQUFMLENBQWFGO0FBQXJCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFRSDs7QUFDRCxpRUFBZUYsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcnN0LWFwcC8uL3BhZ2VzL3Bvc3QvW2lkXS5qcz8yZjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NvbnRhaW5lcn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7ZGVjb2RlfSBmcm9tICdodG1sLWVudGl0aWVzJztcblxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdHJpdGh1Y29ubGluZS5jb20vd3AtanNvbi93cC92Mi9wb3N0cycpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHBhdGhzID0gZGF0YS5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgc2x1ZzogcG9zdC5zbHVnLFxuICAgICAgICAgICAgICAgIGlkOiBwb3N0LmlkLnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybntcbiAgICAgICAgcGF0aHMsXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgaWQgPSBjb250ZXh0LnBhcmFtcy5pZDtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly90cml0aHVjb25saW5lLmNvbS93cC1qc29uL3dwL3YyL3Bvc3RzLycraWQpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtwb3N0OmRhdGF9LFxuICAgIH1cbn1cbmZ1bmN0aW9uIFBvc3Qoe3Bvc3R9KSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8aDE+e2RlY29kZShwb3N0LnRpdGxlLnJlbmRlcmVkKX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6cG9zdC5jb250ZW50LnJlbmRlcmVkfX0+PC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJDb250YWluZXIiLCJkZWNvZGUiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJzbHVnIiwiaWQiLCJ0b1N0cmluZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwibm90Rm91bmQiLCJwcm9wcyIsIlBvc3QiLCJ0aXRsZSIsInJlbmRlcmVkIiwiX19odG1sIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[id].js\n");

/***/ }),

/***/ "html-entities":
/*!********************************!*\
  !*** external "html-entities" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("html-entities");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("reactstrap");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[id].js"));
module.exports = __webpack_exports__;

})();