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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLENBQUNGLElBQUksQ0FBQ0csT0FBTyxDQUFDO01BQ25CQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLFdBQVc7SUFDdEMsQ0FBQyxNQUNHO01BQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQU1mLFFBQVEsQ0FBQ1MsSUFBSSxDQUFDLENBQUM7TUFFdkMsSUFBR00sU0FBUyxDQUFDQyxTQUFTLEVBQUM7UUFDbkI3QixVQUFVLENBQUNZLFNBQVMsR0FBR2dCLFNBQVMsQ0FBQ0MsU0FBUztNQUM5QyxDQUFDLE1BQ0c7UUFDQTdCLFVBQVUsQ0FBQ1ksU0FBUyxHQUFHLEVBQUU7TUFDN0I7TUFFQSxJQUFHZ0IsU0FBUyxDQUFDM0IsYUFBYSxFQUFDO1FBQ3ZCQSxhQUFhLENBQUNXLFNBQVMsR0FBR2dCLFNBQVMsQ0FBQzNCLGFBQWE7TUFDckQsQ0FBQyxNQUNHO1FBQ0FBLGFBQWEsQ0FBQ1csU0FBUyxHQUFHLEVBQUU7TUFDaEM7SUFDSjtFQUNKLENBQUMsUUFBTWtCLEtBQUssRUFBQztJQUNMQyxPQUFPLENBQUNELEtBQUssQ0FBQyxTQUFTLEVBQUVBLEtBQUssQ0FBQztJQUMvQlAsS0FBSyxDQUFDLDBDQUEwQyxDQUFDO0lBQ2pEeEIsU0FBUyxDQUFDaUMsS0FBSyxDQUFDLENBQUM7RUFDekI7QUFDSixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvY3NzL3NpZ251cC5jc3M/ZjExZiIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N0c3dlbmctYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvc2NyaXB0cy9sb2dpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi4vY3NzL3NpZ251cC5jc3MnO1xyXG5pbXBvcnQgR0xvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9HX2dyb3VwX2xvZ29fdHJhbnNwYXJlbnQucG5nJztcclxuXHJcbi8vIE5FRURFRDpcclxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgZW1haWwgZXhpc3RzIHdpdGhpbiBkYXRhYmFzZVxyXG4vLyBGdW5jdGlvbiB0byBjaGVjayBpZiBwYXNzd29yZCBpcyBjb3JyZWN0IHdpdGggYXNzb2NpYXRlZCBlbWFpbFxyXG5cclxuLy8gR2V0IGlucHV0IGVsZW1lbnRzXHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWVtYWlsJyk7XHJcbmNvbnN0IHBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXBhc3N3b3JkJyk7XHJcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1mb3JtJyk7XHJcblxyXG4vLyBHZXQgZXJyb3IgZWxlbWVudHNcclxuY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1lcnJvcicpO1xyXG5jb25zdCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWVycm9yJyk7XHJcblxyXG5sb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGhhc051bGxWYWx1ZXMoZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKSl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2dpblVzZXIoZW1haWwudmFsdWUsIHBhc3N3b3JkLnZhbHVlKTtcclxufSlcclxuXHJcbmZ1bmN0aW9uIGhhc051bGxWYWx1ZXModXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpe1xyXG4gICAgbGV0IGhhc051bGwgPSBmYWxzZTtcclxuICAgIFxyXG4gICAgaWYodXNlckVtYWlsLnRyaW0oKSA9PSAnJyl7XHJcbiAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSAnKkZpZWxkIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgICAgICAgaGFzTnVsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBpZih1c2VyUGFzc3dvcmQudHJpbSgpID09ICcnKXtcclxuICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcqRmllbGQgY2Fubm90IGJlIGVtcHR5JztcclxuICAgICAgICBoYXNOdWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHJldHVybiBoYXNOdWxsO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2dpblVzZXIodXNlckVtYWlsLCB1c2VyUGFzc3dvcmQpe1xyXG4gICAgY29uc3QgZW1haWwgPSB1c2VyRW1haWw7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZXJQYXNzd29yZDtcclxuXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2xvZ2luJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZScgOiAnYXBwbGljYXRpb24vanNvbicgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsIHBhc3N3b3JkIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2hvbWUuaHRtbCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGVycm9yRGF0YS51c2VyRXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSBlcnJvckRhdGEudXNlckVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihlcnJvckRhdGEucGFzc3dvcmRFcnJvcil7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9IGVycm9yRGF0YS5wYXNzd29yZEVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICBhbGVydCgnQW4gZXJyb3IgaGFzIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLicpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0ucmVzZXQoKTtcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkdMb2dvIiwiZW1haWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFzc3dvcmQiLCJsb2dpbkZvcm0iLCJlbWFpbEVycm9yIiwicGFzc3dvcmRFcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNOdWxsVmFsdWVzIiwidmFsdWUiLCJsb2dpblVzZXIiLCJ1c2VyRW1haWwiLCJ1c2VyUGFzc3dvcmQiLCJoYXNOdWxsIiwidHJpbSIsImlubmVySFRNTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJtZXNzYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZXJyb3JEYXRhIiwidXNlckVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwicmVzZXQiXSwic291cmNlUm9vdCI6IiJ9