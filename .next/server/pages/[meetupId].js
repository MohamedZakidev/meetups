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
exports.id = "pages/[meetupId]";
exports.ids = ["pages/[meetupId]"];
exports.modules = {

/***/ "./pages/[meetupId]/MeetupDetails.module.css":
/*!***************************************************!*\
  !*** ./pages/[meetupId]/MeetupDetails.module.css ***!
  \***************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetails_detail__FNYBA\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL01lZXR1cERldGFpbHMubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9bbWVldHVwSWRdL01lZXR1cERldGFpbHMubW9kdWxlLmNzcz9lYTZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbHNfZGV0YWlsX19GTllCQVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/MeetupDetails.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupDetails.module.css */ \"./pages/[meetupId]/MeetupDetails.module.css\");\n/* harmony import */ var _MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MeetupDetails(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: props.meetupData.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    \"s\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_MeetupDetails_module_css__WEBPACK_IMPORTED_MODULE_3___default().detail),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: props.meetupData.image,\n                        alt: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: props.meetupData.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"address\", {\n                        children: props.meetupData.address\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: props.meetupData.description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohamed Zaki\\\\Desktop\\\\learning nextjs\\\\06-onwards-to-a-bigger-project-starter\\\\pages\\\\[meetupId]\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getStaticPaths() {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(\"mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const db = client.db();\n    const meetupsCollections = db.collection(\"meetups\");\n    const result = await meetupsCollections.find({}, {\n        projection: {\n            _id: 1\n        }\n    }).toArray();\n    client.close();\n    return {\n        fallback: false,\n        paths: result.map((item)=>({\n                params: {\n                    meetupId: item._id.toString()\n                }\n            }))\n    };\n}\nasync function getStaticProps(context) {\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(\"mongodb+srv://mohamedzzaki2000s:m9sW5KNytwJfYdw7@cluster0.pgwoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\");\n    const db = client.db();\n    const meetupsCollections = db.collection(\"meetups\");\n    const meetupId = context.params.meetupId;\n    const result = await meetupsCollections.findOne({\n        _id: new mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId(meetupId)\n    });\n    client.close();\n    return {\n        props: {\n            meetupData: {\n                id: result._id.toString(),\n                image: result.image,\n                title: result.title,\n                address: result.address,\n                description: result.description\n            }\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetupDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQmMsT0FBTyxFQUFFUSxNQUFNLENBQUNSLE9BQU87Z0JBQ3ZCVCxXQUFXLEVBQUVpQixNQUFNLENBQUNqQixXQUFXO2FBQ2xDO1NBQ0o7S0FDSjtBQUNMLENBQUM7QUFDRCxpRUFBZVAsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzhmZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIlxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVldHVwRGV0YWlscy5tb2R1bGUuY3NzXCJcclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLm1lZXR1cERhdGEuZGVzY3JpcHRpb259IC8+c1xyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMubWVldHVwRGF0YS5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGgxPntwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YWRkcmVzcz57cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfTwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICAgIDxwPntwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIFwibW9uZ29kYitzcnY6Ly9tb2hhbWVkenpha2kyMDAwczptOXNXNUtOeXR3SmZZZHc3QGNsdXN0ZXIwLnBnd29qLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXHJcbiAgICApXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb25zID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuZmluZCh7fSwgeyBwcm9qZWN0aW9uOiB7IF9pZDogMSB9IH0pLnRvQXJyYXkoKTtcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlLFxyXG4gICAgICAgIHBhdGhzOiByZXN1bHQubWFwKGl0ZW0gPT4gKHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBtZWV0dXBJZDogaXRlbS5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIFwibW9uZ29kYitzcnY6Ly9tb2hhbWVkenpha2kyMDAwczptOXNXNUtOeXR3SmZZZHc3QGNsdXN0ZXIwLnBnd29qLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMFwiXHJcbiAgICApXHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbnMgPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJylcclxuXHJcbiAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbnMuZmluZE9uZSh7IF9pZDogbmV3IE9iamVjdElkKG1lZXR1cElkKSB9KVxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcmVzdWx0Ll9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHJlc3VsdC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiByZXN1bHQuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiByZXN1bHQuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzXHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsIk9iamVjdElkIiwiSGVhZCIsImNsYXNzZXMiLCJNZWV0dXBEZXRhaWxzIiwicHJvcHMiLCJ0aXRsZSIsIm1lZXR1cERhdGEiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkZXRhaWwiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImgxIiwiYWRkcmVzcyIsInAiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJmaW5kIiwicHJvamVjdGlvbiIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJpdGVtIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImZpbmRPbmUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetupId]/index.js"));
module.exports = __webpack_exports__;

})();