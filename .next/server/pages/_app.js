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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/database */ \"./config/database.ts\");\n// File: pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const checkUser = {\n                \"MyApp.useEffect.checkUser\": async ()=>{\n                    const { data: { user } } = await _config_database__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getUser();\n                    setUser(user);\n                }\n            }[\"MyApp.useEffect.checkUser\"];\n            checkUser();\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/shahidhasan/createsHALAL/pages/_app.tsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ3FCO0FBQ0U7QUFHOUMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQTsyQkFBQztZQUNSLE1BQU1ROzZDQUFZO29CQUNoQixNQUFNLEVBQUVDLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEVBQUUsR0FBRyxNQUFNSixzREFBUUEsQ0FBQ1EsSUFBSSxDQUFDQyxPQUFPO29CQUN0REosUUFBUUQ7Z0JBQ1Y7O1lBQ0FFO1FBQ0Y7MEJBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDSjtRQUFXLEdBQUdDLFNBQVM7UUFBRUMsTUFBTUE7Ozs7OztBQUN6QztBQUVBLGlFQUFlSCxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvc2hhaGlkaGFzYW4vY3JlYXRlc0hBTEFML3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbGU6IHBhZ2VzL19hcHAudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2VcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0gfSA9IGF3YWl0IHN1cGFiYXNlLmF1dGguZ2V0VXNlcigpO1xuICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICB9O1xuICAgIGNoZWNrVXNlcigpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdXNlcj17dXNlcn0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwiY2hlY2tVc2VyIiwiZGF0YSIsImF1dGgiLCJnZXRVc2VyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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