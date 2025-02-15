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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./config/database.ts":
/*!****************************!*\
  !*** ./config/database.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SUPABASE_URL = \"https://ywuhytfzxzszfiwfrvwt.supabase.co\" || 0;\nconst SUPABASE_ANON_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dWh5dGZ6eHpzemZpd2Zydnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDk4NzUsImV4cCI6MjA1NDc4NTg3NX0.F-pgaYkuVj5H9tOg6B2v1mhetsBVF9Xfovz5rMM8KQA\" || 0;\nif (!SUPABASE_URL || !SUPABASE_ANON_KEY) {\n    console.error(\"❌ Missing Supabase credentials. Check .env file.\");\n    throw new Error(\"Missing Supabase credentials.\");\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUI7QUFDOEI7QUFFckQsTUFBTUMsZUFBZUMsMENBQW9DLElBQUksQ0FBRTtBQUMvRCxNQUFNRyxvQkFBb0JILGtOQUF5QyxJQUFJLENBQUU7QUFFekUsSUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ0ksbUJBQW1CO0lBQ3ZDRSxRQUFRQyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFTyxNQUFNQyxXQUFXVixtRUFBWUEsQ0FBQ0MsY0FBY0ksbUJBQW1CIiwic291cmNlcyI6WyIvVXNlcnMvc2hhaGlkaGFzYW4vY3JlYXRlc0hBTEFML2NvbmZpZy9kYXRhYmFzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJkb3RlbnYvY29uZmlnXCI7XG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XG5cbmNvbnN0IFNVUEFCQVNFX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCB8fCBcIlwiO1xuY29uc3QgU1VQQUJBU0VfQU5PTl9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSB8fCBcIlwiO1xuXG5pZiAoIVNVUEFCQVNFX1VSTCB8fCAhU1VQQUJBU0VfQU5PTl9LRVkpIHtcbiAgY29uc29sZS5lcnJvcihcIuKdjCBNaXNzaW5nIFN1cGFiYXNlIGNyZWRlbnRpYWxzLiBDaGVjayAuZW52IGZpbGUuXCIpO1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIFN1cGFiYXNlIGNyZWRlbnRpYWxzLlwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJTVVBBQkFTRV9BTk9OX0tFWSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJzdXBhYmFzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./config/database.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/database */ \"./config/database.ts\");\n// File: pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const checkUser = {\n                \"MyApp.useEffect.checkUser\": async ()=>{\n                    const { data: { user }, error } = await _config_database__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getUser();\n                    if (!error) setUser(user);\n                }\n            }[\"MyApp.useEffect.checkUser\"];\n            checkUser();\n            // Listen for session changes\n            const { data: authListener } = _config_database__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange({\n                \"MyApp.useEffect\": (_event, session)=>{\n                    setUser(session?.user || null);\n                }\n            }[\"MyApp.useEffect\"]);\n            return ({\n                \"MyApp.useEffect\": ()=>{\n                    authListener.subscription.unsubscribe();\n                }\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/shahidhasan/createsHALAL/pages/_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ3FCO0FBQ0U7QUFHOUMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQTsyQkFBQztZQUNSLE1BQU1ROzZDQUFZO29CQUNoQixNQUFNLEVBQUVDLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEVBQUVJLEtBQUssRUFBRSxHQUFHLE1BQU1SLHNEQUFRQSxDQUFDUyxJQUFJLENBQUNDLE9BQU87b0JBQzdELElBQUksQ0FBQ0YsT0FBT0gsUUFBUUQ7Z0JBQ3RCOztZQUNBRTtZQUVBLDZCQUE2QjtZQUM3QixNQUFNLEVBQUVDLE1BQU1JLFlBQVksRUFBRSxHQUFHWCxzREFBUUEsQ0FBQ1MsSUFBSSxDQUFDRyxpQkFBaUI7bUNBQUMsQ0FBQ0MsUUFBUUM7b0JBQ3RFVCxRQUFRUyxTQUFTVixRQUFRO2dCQUMzQjs7WUFFQTttQ0FBTztvQkFDTE8sYUFBYUksWUFBWSxDQUFDQyxXQUFXO2dCQUN2Qzs7UUFDRjswQkFBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNkO1FBQVcsR0FBR0MsU0FBUztRQUFFQyxNQUFNQTs7Ozs7O0FBQ3pDO0FBRUEsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGFoaWRoYXNhbi9jcmVhdGVzSEFMQUwvcGFnZXMvX2FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmlsZTogcGFnZXMvX2FwcC50c3hcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN1cGFiYXNlIH0gZnJvbSBcIi4uL2NvbmZpZy9kYXRhYmFzZVwiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgeyBkYXRhOiB7IHVzZXIgfSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgICAgaWYgKCFlcnJvcikgc2V0VXNlcih1c2VyKTtcbiAgICB9O1xuICAgIGNoZWNrVXNlcigpO1xuXG4gICAgLy8gTGlzdGVuIGZvciBzZXNzaW9uIGNoYW5nZXNcbiAgICBjb25zdCB7IGRhdGE6IGF1dGhMaXN0ZW5lciB9ID0gc3VwYWJhc2UuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZSgoX2V2ZW50LCBzZXNzaW9uKSA9PiB7XG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIgfHwgbnVsbCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgYXV0aExpc3RlbmVyLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSB1c2VyPXt1c2VyfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdXBhYmFzZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidXNlciIsInNldFVzZXIiLCJjaGVja1VzZXIiLCJkYXRhIiwiZXJyb3IiLCJhdXRoIiwiZ2V0VXNlciIsImF1dGhMaXN0ZW5lciIsIm9uQXV0aFN0YXRlQ2hhbmdlIiwiX2V2ZW50Iiwic2Vzc2lvbiIsInN1YnNjcmlwdGlvbiIsInVuc3Vic2NyaWJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();