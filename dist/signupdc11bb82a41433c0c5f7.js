/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/helpers/signupValidation.js":
/*!*************************************************!*\
  !*** ./src/scripts/helpers/signupValidation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkboxChecked: () => (/* binding */ checkboxChecked),
/* harmony export */   matchPassword: () => (/* binding */ matchPassword),
/* harmony export */   validateEmail: () => (/* binding */ validateEmail),
/* harmony export */   validateName: () => (/* binding */ validateName),
/* harmony export */   validatePassword: () => (/* binding */ validatePassword)
/* harmony export */ });
// Validation functions for signing up a user

// Validate name, name must not contain any special characters
function validateName(name) {
  const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
  if (!nameRegex.test(name)) return false;
  return true;
}

// Validate email, email must be of a valid format
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!emailRegex.test(email)) return false;
  return true;
}

// Validate password, password must be at least 8 characters long
function validatePassword(password) {
  if (password.length >= 8) return true;
  return false;
}

// Validate confirm password, must be the same as confirm passwrd
function matchPassword(password, signupConfirmPassword) {
  if (password == signupConfirmPassword) return true;
  return false;
}

// Validate if a checkbox is checked
function checkboxChecked(checkbox) {
  if (checkbox.checked == false) return false;
  return true;
}

/***/ }),

/***/ "./src/css/signup.css":
/*!****************************!*\
  !*** ./src/css/signup.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo.png";

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
/*!*******************************!*\
  !*** ./src/scripts/signup.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_signup_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/signup.css */ "./src/css/signup.css");
/* harmony import */ var _helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/signupValidation.js */ "./src/scripts/helpers/signupValidation.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/logo.png */ "./src/assets/images/logo.png");




// Input elements of form
const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupConfirmPassword = document.getElementById('signup-confirm-password');
const emailAgree = document.getElementById('email-agree');
const termsAgree = document.getElementById('terms-agree');

// Error elements of form
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const termsAgreeError = document.getElementById('terms-agree-error');

// Input validation
document.getElementById('signup-form').addEventListener('submit', e => {
  e.preventDefault();
  const isValidName = (0,_helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.validateName)(signupName.value);
  const isValidEmail = (0,_helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.validateEmail)(signupEmail.value);
  const isValidPassword = (0,_helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.validatePassword)(signupPassword.value);
  const passwordsMatch = (0,_helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.matchPassword)(signupPassword.value, signupConfirmPassword.value);
  const agreedToTerms = (0,_helpers_signupValidation_js__WEBPACK_IMPORTED_MODULE_1__.checkboxChecked)(termsAgree);
  if (!agreedToTerms) termsAgreeError.innerHTML = '*Please agree to the terms and conditions.';else termsAgreeError.innerHTML = '';
  if (!isValidName) nameError.innerHTML = '*Please enter a valid name.';else nameError.innerHTML = '';
  if (!isValidEmail) emailError.innerHTML = '*Please enter a valid email.';else emailError.innerHTML = '';
  if (!isValidPassword) passwordError.innerHTML = '*Please enter a valid password.';else passwordError.innerHTML = '';
  if (!passwordsMatch) confirmPasswordError.innerHTML = '*Passwords do not match.';else confirmPasswordError.innerHTML = '';
  if (isValidName && isValidEmail && isValidPassword && passwordsMatch) submitData(signupName.value, signupEmail.value, signupPassword.value);
});
async function submitData(username, useremail, userpassword) {
  const name = username;
  const email = useremail;
  const password = userpassword;
  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
    if (response.status === 400) {
      const data = await response.json();
      alert(data.error); // Display the error message from the server
    } else if (response.ok) {
      const data = await response.json();
      alert(data.message);
      document.getElementById('signup-form').reset();
      window.location.href = 'Login.html';
    }
  } catch (error) {
    console.error('Error during signup:', error);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxHQUFHLFlBQVk7SUFDckM7RUFDRixDQUFDLENBQUMsT0FBT04sS0FBSyxFQUFFO0lBQ2RPLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7RUFDOUM7QUFDVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3NpZ251cFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvY3NzL3NpZ251cC5jc3MiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N0c3dlbmctYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N0c3dlbmctYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3N0c3dlbmctYXBwLy4vc3JjL3NjcmlwdHMvc2lnbnVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zIGZvciBzaWduaW5nIHVwIGEgdXNlclxyXG5cclxuLy8gVmFsaWRhdGUgbmFtZSwgbmFtZSBtdXN0IG5vdCBjb250YWluIGFueSBzcGVjaWFsIGNoYXJhY3RlcnNcclxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTmFtZShuYW1lKXtcclxuICAgIGNvbnN0IG5hbWVSZWdleCA9IC9eW2EtekEtWl0rIFthLXpBLVpdKyQvO1xyXG4gICAgXHJcbiAgICBpZighbmFtZVJlZ2V4LnRlc3QobmFtZSkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBlbWFpbCwgZW1haWwgbXVzdCBiZSBvZiBhIHZhbGlkIGZvcm1hdFxyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCl7XHJcbiAgICBjb25zdCBlbWFpbFJlZ2V4ID0gL15bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dK0BbYS16QS1aMC05LV0rKD86XFwuW2EtekEtWjAtOS1dKykqJC87XHJcblxyXG4gICAgaWYoIWVtYWlsUmVnZXgudGVzdChlbWFpbCkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICBcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBwYXNzd29yZCwgcGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZ1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCl7XHJcblxyXG4gICAgaWYocGFzc3dvcmQubGVuZ3RoID49IDgpXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8gVmFsaWRhdGUgY29uZmlybSBwYXNzd29yZCwgbXVzdCBiZSB0aGUgc2FtZSBhcyBjb25maXJtIHBhc3N3cmRcclxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoUGFzc3dvcmQocGFzc3dvcmQsIHNpZ251cENvbmZpcm1QYXNzd29yZCl7XHJcblxyXG4gICAgaWYocGFzc3dvcmQgPT0gc2lnbnVwQ29uZmlybVBhc3N3b3JkKSAgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICBcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8gVmFsaWRhdGUgaWYgYSBjaGVja2JveCBpcyBjaGVja2VkXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja2JveENoZWNrZWQoY2hlY2tib3gpe1xyXG4gICAgaWYoY2hlY2tib3guY2hlY2tlZCA9PSBmYWxzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi4vY3NzL3NpZ251cC5jc3MnO1xyXG5pbXBvcnQge3ZhbGlkYXRlTmFtZSwgdmFsaWRhdGVFbWFpbCwgdmFsaWRhdGVQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgY2hlY2tib3hDaGVja2VkfSBmcm9tICcuL2hlbHBlcnMvc2lnbnVwVmFsaWRhdGlvbi5qcyc7XHJcblxyXG5pbXBvcnQgY29tcGFueUxvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XHJcblxyXG4vLyBJbnB1dCBlbGVtZW50cyBvZiBmb3JtXHJcbmNvbnN0IHNpZ251cE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLW5hbWUnKTtcclxuY29uc3Qgc2lnbnVwRW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWVtYWlsJyk7XHJcbmNvbnN0IHNpZ251cFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1wYXNzd29yZCcpO1xyXG5jb25zdCBzaWdudXBDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWNvbmZpcm0tcGFzc3dvcmQnKTtcclxuY29uc3QgZW1haWxBZ3JlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1hZ3JlZScpO1xyXG5jb25zdCB0ZXJtc0FncmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlcm1zLWFncmVlJyk7XHJcblxyXG4vLyBFcnJvciBlbGVtZW50cyBvZiBmb3JtXHJcbmNvbnN0IG5hbWVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWVycm9yJyk7XHJcbmNvbnN0IGVtYWlsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW1haWwtZXJyb3InKTtcclxuY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1lcnJvcicpO1xyXG5jb25zdCBjb25maXJtUGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLXBhc3N3b3JkLWVycm9yJyk7XHJcbmNvbnN0IHRlcm1zQWdyZWVFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtcy1hZ3JlZS1lcnJvcicpO1xyXG5cclxuLy8gSW5wdXQgdmFsaWRhdGlvblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpc1ZhbGlkTmFtZSA9IHZhbGlkYXRlTmFtZShzaWdudXBOYW1lLnZhbHVlKTtcclxuICBjb25zdCBpc1ZhbGlkRW1haWwgPSB2YWxpZGF0ZUVtYWlsKHNpZ251cEVtYWlsLnZhbHVlKTtcclxuICBjb25zdCBpc1ZhbGlkUGFzc3dvcmQgPSB2YWxpZGF0ZVBhc3N3b3JkKHNpZ251cFBhc3N3b3JkLnZhbHVlKTtcclxuICBjb25zdCBwYXNzd29yZHNNYXRjaCA9IG1hdGNoUGFzc3dvcmQoc2lnbnVwUGFzc3dvcmQudmFsdWUsIHNpZ251cENvbmZpcm1QYXNzd29yZC52YWx1ZSk7XHJcbiAgY29uc3QgYWdyZWVkVG9UZXJtcyA9IGNoZWNrYm94Q2hlY2tlZCh0ZXJtc0FncmVlKTtcclxuXHJcbiAgaWYoIWFncmVlZFRvVGVybXMpXHJcbiAgICB0ZXJtc0FncmVlRXJyb3IuaW5uZXJIVE1MID0gJypQbGVhc2UgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zLic7XHJcbiAgZWxzZVxyXG4gICAgdGVybXNBZ3JlZUVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZighaXNWYWxpZE5hbWUpXHJcbiAgICBuYW1lRXJyb3IuaW5uZXJIVE1MID0gJypQbGVhc2UgZW50ZXIgYSB2YWxpZCBuYW1lLic7XHJcbiAgZWxzZVxyXG4gICAgbmFtZUVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZighaXNWYWxpZEVtYWlsKVxyXG4gICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSAnKlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLic7XHJcbiAgZWxzZVxyXG4gICAgZW1haWxFcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgaWYoIWlzVmFsaWRQYXNzd29yZClcclxuICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJypQbGVhc2UgZW50ZXIgYSB2YWxpZCBwYXNzd29yZC4nO1xyXG4gIGVsc2VcclxuICAgIHBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGlmKCFwYXNzd29yZHNNYXRjaClcclxuICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcqUGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nO1xyXG4gIGVsc2VcclxuICAgIGNvbmZpcm1QYXNzd29yZEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZihpc1ZhbGlkTmFtZSAmJiBpc1ZhbGlkRW1haWwgJiYgaXNWYWxpZFBhc3N3b3JkICYmIHBhc3N3b3Jkc01hdGNoKVxyXG4gICAgc3VibWl0RGF0YShzaWdudXBOYW1lLnZhbHVlLCBzaWdudXBFbWFpbC52YWx1ZSwgc2lnbnVwUGFzc3dvcmQudmFsdWUpO1xyXG59KVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc3VibWl0RGF0YSh1c2VybmFtZSwgdXNlcmVtYWlsLCB1c2VycGFzc3dvcmQpe1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSB1c2VybmFtZTtcclxuICAgIGNvbnN0IGVtYWlsID0gdXNlcmVtYWlsO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VycGFzc3dvcmQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3NpZ251cCcsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGRhdGEuZXJyb3IpOyAvLyBEaXNwbGF5IHRoZSBlcnJvciBtZXNzYWdlIGZyb20gdGhlIHNlcnZlclxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtZm9ybScpLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnTG9naW4uaHRtbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzaWdudXA6JywgZXJyb3IpO1xyXG4gICAgICAgICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ2YWxpZGF0ZU5hbWUiLCJuYW1lIiwibmFtZVJlZ2V4IiwidGVzdCIsInZhbGlkYXRlRW1haWwiLCJlbWFpbCIsImVtYWlsUmVnZXgiLCJ2YWxpZGF0ZVBhc3N3b3JkIiwicGFzc3dvcmQiLCJsZW5ndGgiLCJtYXRjaFBhc3N3b3JkIiwic2lnbnVwQ29uZmlybVBhc3N3b3JkIiwiY2hlY2tib3hDaGVja2VkIiwiY2hlY2tib3giLCJjaGVja2VkIiwiY29tcGFueUxvZ28iLCJzaWdudXBOYW1lIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNpZ251cEVtYWlsIiwic2lnbnVwUGFzc3dvcmQiLCJlbWFpbEFncmVlIiwidGVybXNBZ3JlZSIsIm5hbWVFcnJvciIsImVtYWlsRXJyb3IiLCJwYXNzd29yZEVycm9yIiwiY29uZmlybVBhc3N3b3JkRXJyb3IiLCJ0ZXJtc0FncmVlRXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZE5hbWUiLCJ2YWx1ZSIsImlzVmFsaWRFbWFpbCIsImlzVmFsaWRQYXNzd29yZCIsInBhc3N3b3Jkc01hdGNoIiwiYWdyZWVkVG9UZXJtcyIsImlubmVySFRNTCIsInN1Ym1pdERhdGEiLCJ1c2VybmFtZSIsInVzZXJlbWFpbCIsInVzZXJwYXNzd29yZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImFsZXJ0IiwiZXJyb3IiLCJvayIsIm1lc3NhZ2UiLCJyZXNldCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9