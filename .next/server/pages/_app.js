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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv/config */ \"dotenv/config\");\n/* harmony import */ var dotenv_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SUPABASE_URL = \"https://ywuhytfzxzszfiwfrvwt.supabase.co\" || 0;\nconst SUPABASE_ANON_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3dWh5dGZ6eHpzemZpd2Zydnd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyMDk4NzUsImV4cCI6MjA1NDc4NTg3NX0.F-pgaYkuVj5H9tOg6B2v1mhetsBVF9Xfovz5rMM8KQA\" || 0;\nif (!SUPABASE_URL || !SUPABASE_ANON_KEY) {\n    console.error(\"❌ Missing Supabase credentials. Check .env file.\");\n    throw new Error(\"Missing Supabase credentials.\");\n}\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_1__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25maWcvZGF0YWJhc2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUI7QUFDOEI7QUFFckQsTUFBTUMsZUFBZUMsMENBQW9DLElBQUksQ0FBRTtBQUMvRCxNQUFNRyxvQkFBb0JILGtOQUF5QyxJQUFJLENBQUU7QUFFekUsSUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ0ksbUJBQW1CO0lBQ3ZDRSxRQUFRQyxLQUFLLENBQUM7SUFDZCxNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFTyxNQUFNQyxXQUFXVixtRUFBWUEsQ0FBQ0MsY0FBY0ksbUJBQW1CIiwic291cmNlcyI6WyIvVXNlcnMvU2hhcmVkL2NyZWF0ZXNIQUxBTC9jb25maWcvZGF0YWJhc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiZG90ZW52L2NvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xuXG5jb25zdCBTVVBBQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgXCJcIjtcbmNvbnN0IFNVUEFCQVNFX0FOT05fS0VZID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkgfHwgXCJcIjtcblxuaWYgKCFTVVBBQkFTRV9VUkwgfHwgIVNVUEFCQVNFX0FOT05fS0VZKSB7XG4gIGNvbnNvbGUuZXJyb3IoXCLinYwgTWlzc2luZyBTdXBhYmFzZSBjcmVkZW50aWFscy4gQ2hlY2sgLmVudiBmaWxlLlwiKTtcbiAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBTdXBhYmFzZSBjcmVkZW50aWFscy5cIik7XG59XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChTVVBBQkFTRV9VUkwsIFNVUEFCQVNFX0FOT05fS0VZKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJTVVBBQkFTRV9VUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiU1VQQUJBU0VfQU5PTl9LRVkiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic3VwYWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/database.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/database */ \"./config/database.ts\");\n// File: pages/_app.tsx\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"MyApp.useEffect\": ()=>{\n            const checkUser = {\n                \"MyApp.useEffect.checkUser\": async ()=>{\n                    const { data: { user }, error } = await _config_database__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.getUser();\n                    if (!error) setUser(user);\n                }\n            }[\"MyApp.useEffect.checkUser\"];\n            checkUser();\n            // Listen for session changes\n            const { data: authListener } = _config_database__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange({\n                \"MyApp.useEffect\": (_event, session)=>{\n                    setUser(session?.user || null);\n                }\n            }[\"MyApp.useEffect\"]);\n            return ({\n                \"MyApp.useEffect\": ()=>{\n                    authListener.subscription.unsubscribe();\n                }\n            })[\"MyApp.useEffect\"];\n        }\n    }[\"MyApp.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps,\n        user: user\n    }, void 0, false, {\n        fileName: \"/Users/Shared/createsHALAL/pages/_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1QkFBdUI7O0FBQ3FCO0FBQ0U7QUFHOUMsU0FBU0csTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQTsyQkFBQztZQUNSLE1BQU1ROzZDQUFZO29CQUNoQixNQUFNLEVBQUVDLE1BQU0sRUFBRUgsSUFBSSxFQUFFLEVBQUVJLEtBQUssRUFBRSxHQUFHLE1BQU1SLHNEQUFRQSxDQUFDUyxJQUFJLENBQUNDLE9BQU87b0JBQzdELElBQUksQ0FBQ0YsT0FBT0gsUUFBUUQ7Z0JBQ3RCOztZQUNBRTtZQUVBLDZCQUE2QjtZQUM3QixNQUFNLEVBQUVDLE1BQU1JLFlBQVksRUFBRSxHQUFHWCxzREFBUUEsQ0FBQ1MsSUFBSSxDQUFDRyxpQkFBaUI7bUNBQUMsQ0FBQ0MsUUFBUUM7b0JBQ3RFVCxRQUFRUyxTQUFTVixRQUFRO2dCQUMzQjs7WUFFQTttQ0FBTztvQkFDTE8sYUFBYUksWUFBWSxDQUFDQyxXQUFXO2dCQUN2Qzs7UUFDRjswQkFBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNkO1FBQVcsR0FBR0MsU0FBUztRQUFFQyxNQUFNQTs7Ozs7O0FBQ3pDO0FBRUEsaUVBQWVILEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvY3JlYXRlc0hBTEFML3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZpbGU6IHBhZ2VzL19hcHAudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuLi9jb25maWcvZGF0YWJhc2VcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrVXNlciA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogeyB1c2VyIH0sIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKTtcbiAgICAgIGlmICghZXJyb3IpIHNldFVzZXIodXNlcik7XG4gICAgfTtcbiAgICBjaGVja1VzZXIoKTtcblxuICAgIC8vIExpc3RlbiBmb3Igc2Vzc2lvbiBjaGFuZ2VzXG4gICAgY29uc3QgeyBkYXRhOiBhdXRoTGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoKF9ldmVudCwgc2Vzc2lvbikgPT4ge1xuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyIHx8IG51bGwpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGF1dGhMaXN0ZW5lci5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gdXNlcj17dXNlcn0gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwiY2hlY2tVc2VyIiwiZGF0YSIsImVycm9yIiwiYXV0aCIsImdldFVzZXIiLCJhdXRoTGlzdGVuZXIiLCJvbkF1dGhTdGF0ZUNoYW5nZSIsIl9ldmVudCIsInNlc3Npb24iLCJzdWJzY3JpcHRpb24iLCJ1bnN1YnNjcmliZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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