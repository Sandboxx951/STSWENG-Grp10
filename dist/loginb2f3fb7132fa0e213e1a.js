/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/signup.css":
/*!****************************!*\
  !*** ./src/css/signup.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/G_group_logo_transparent.png":
/*!********************************************************!*\
  !*** ./src/assets/images/G_group_logo_transparent.png ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "G_group_logo_transparent.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/login.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_signup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/signup.css */ "./src/css/signup.css");
/* harmony import */ var _assets_images_G_group_logo_transparent_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/G_group_logo_transparent.png */ "./src/assets/images/G_group_logo_transparent.png");



// NEEDED:
// Function to check if email exists within database
// Function to check if password is correct with associated email

// Get input elements
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const loginForm = document.getElementById('login-form');

// Get error elements
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  if (hasNullValues(email.value, password.value)) {
    return false;
  }
  loginUser(email.value, password.value);
});
function hasNullValues(userEmail, userPassword) {
  let hasNull = false;
  if (userEmail.trim() == '') {
    emailError.innerHTML = '*Field cannot be empty';
    hasNull = true;
  } else emailError.innerHTML = '';
  if (userPassword.trim() == '') {
    passwordError.innerHTML = '*Field cannot be empty';
    hasNull = true;
  } else passwordError.innerHTML = '';
  return hasNull;
}
async function loginUser(userEmail, userPassword) {
  const email = userEmail;
  const password = userPassword;
  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    if (response.ok) {
      const data = await response.json();
      alert(data.message);
      window.location.href = 'home.html';
    } else {
      const errorData = await response.json();
      if (errorData.userError) {
        emailError.innerHTML = errorData.userError;
      } else {
        emailError.innerHTML = '';
      }
      if (errorData.passwordError) {
        passwordError.innerHTML = errorData.passwordError;
      } else {
        passwordError.innerHTML = '';
      }
    }
  } catch (error) {
    console.error("Error: ", error);
    alert('An error has occurred. Please try again.');
    loginForm.reset();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUNGLElBQUksQ0FBQ0csT0FBTyxDQUFDO01BQ25CQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFdBQVc7SUFDdEMsQ0FBQyxNQUNHO01BQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQU1mLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7TUFFdkMsSUFBR00sU0FBUyxDQUFDQyxTQUFTLEVBQUM7UUFDbkI3QixVQUFVLENBQUNZLFNBQVMsR0FBR2dCLFNBQVMsQ0FBQ0MsU0FBUztNQUM5QyxDQUFDLE1BQ0c7UUFDQTdCLFVBQVUsQ0FBQ1ksU0FBUyxHQUFHLEVBQUU7TUFDN0I7TUFFQSxJQUFHZ0IsU0FBUyxDQUFDM0IsYUFBYSxFQUFDO1FBQ3ZCQSxhQUFhLENBQUNXLFNBQVMsR0FBR2dCLFNBQVMsQ0FBQzNCLGFBQWE7TUFDckQsQ0FBQyxNQUNHO1FBQ0FBLGFBQWEsQ0FBQ1csU0FBUyxHQUFHLEVBQUU7TUFDaEM7SUFDSjtFQUNKLENBQUMsUUFBTWtCLEtBQUssRUFBQztJQUNMQyxPQUFPLENBQUNELEtBQUssQ0FBQyxTQUFTLEVBQUVBLEtBQUssQ0FBQztJQUMvQlAsS0FBSyxDQUFDLDBDQUEwQyxDQUFDO0lBQ2pEeEIsU0FBUyxDQUFDaUMsS0FBSyxDQUFDLENBQUM7RUFDekI7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvY3NzL3NpZ251cC5jc3MiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0c3dlbmctYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0c3dlbmctYXBwLy4vc3JjL3NjcmlwdHMvbG9naW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4uL2Nzcy9zaWdudXAuY3NzJztcclxuaW1wb3J0IEdMb2dvIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvR19ncm91cF9sb2dvX3RyYW5zcGFyZW50LnBuZyc7XHJcblxyXG4vLyBORUVERUQ6XHJcbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIGVtYWlsIGV4aXN0cyB3aXRoaW4gZGF0YWJhc2VcclxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgcGFzc3dvcmQgaXMgY29ycmVjdCB3aXRoIGFzc29jaWF0ZWQgZW1haWxcclxuXHJcbi8vIEdldCBpbnB1dCBlbGVtZW50c1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1lbWFpbCcpO1xyXG5jb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1wYXNzd29yZCcpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tZm9ybScpO1xyXG5cclxuLy8gR2V0IGVycm9yIGVsZW1lbnRzXHJcbmNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtZXJyb3InKTtcclxuY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1lcnJvcicpO1xyXG5cclxubG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihoYXNOdWxsVmFsdWVzKGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSkpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbG9naW5Vc2VyKGVtYWlsLnZhbHVlLCBwYXNzd29yZC52YWx1ZSk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBoYXNOdWxsVmFsdWVzKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKXtcclxuICAgIGxldCBoYXNOdWxsID0gZmFsc2U7XHJcbiAgICBcclxuICAgIGlmKHVzZXJFbWFpbC50cmltKCkgPT0gJycpe1xyXG4gICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gJypGaWVsZCBjYW5ub3QgYmUgZW1wdHknO1xyXG4gICAgICAgIGhhc051bGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgaWYodXNlclBhc3N3b3JkLnRyaW0oKSA9PSAnJyl7XHJcbiAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnKkZpZWxkIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgICAgICAgaGFzTnVsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICByZXR1cm4gaGFzTnVsbDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKHVzZXJFbWFpbCwgdXNlclBhc3N3b3JkKXtcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlckVtYWlsO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VyUGFzc3dvcmQ7XHJcblxyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9sb2dpbicsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgaWYocmVzcG9uc2Uub2spe1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdob21lLmh0bWwnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihlcnJvckRhdGEudXNlckVycm9yKXtcclxuICAgICAgICAgICAgICAgIGVtYWlsRXJyb3IuaW5uZXJIVE1MID0gZXJyb3JEYXRhLnVzZXJFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZXJyb3JEYXRhLnBhc3N3b3JkRXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSBlcnJvckRhdGEucGFzc3dvcmRFcnJvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjogXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0FuIGVycm9yIGhhcyBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJHTG9nbyIsImVtYWlsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBhc3N3b3JkIiwibG9naW5Gb3JtIiwiZW1haWxFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFzTnVsbFZhbHVlcyIsInZhbHVlIiwibG9naW5Vc2VyIiwidXNlckVtYWlsIiwidXNlclBhc3N3b3JkIiwiaGFzTnVsbCIsInRyaW0iLCJpbm5lckhUTUwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImFsZXJ0IiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yRGF0YSIsInVzZXJFcnJvciIsImVycm9yIiwiY29uc29sZSIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==