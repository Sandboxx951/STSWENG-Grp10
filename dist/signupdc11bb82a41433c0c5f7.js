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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxHQUFHLFlBQVk7SUFDckM7RUFDRixDQUFDLENBQUMsT0FBT04sS0FBSyxFQUFFO0lBQ2RPLE9BQU8sQ0FBQ1AsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7RUFDOUM7QUFDVixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3NpZ251cFZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvY3NzL3NpZ251cC5jc3M/ZjExZiIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdHN3ZW5nLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N0c3dlbmctYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3Rzd2VuZy1hcHAvLi9zcmMvc2NyaXB0cy9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnMgZm9yIHNpZ25pbmcgdXAgYSB1c2VyXHJcblxyXG4vLyBWYWxpZGF0ZSBuYW1lLCBuYW1lIG11c3Qgbm90IGNvbnRhaW4gYW55IHNwZWNpYWwgY2hhcmFjdGVyc1xyXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpe1xyXG4gICAgY29uc3QgbmFtZVJlZ2V4ID0gL15bYS16QS1aXSsgW2EtekEtWl0rJC87XHJcbiAgICBcclxuICAgIGlmKCFuYW1lUmVnZXgudGVzdChuYW1lKSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIFZhbGlkYXRlIGVtYWlsLCBlbWFpbCBtdXN0IGJlIG9mIGEgdmFsaWQgZm9ybWF0XHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKXtcclxuICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rQFthLXpBLVowLTktXSsoPzpcXC5bYS16QS1aMC05LV0rKSokLztcclxuXHJcbiAgICBpZighZW1haWxSZWdleC50ZXN0KGVtYWlsKSlcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIFxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIFZhbGlkYXRlIHBhc3N3b3JkLCBwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycyBsb25nXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKXtcclxuXHJcbiAgICBpZihwYXNzd29yZC5sZW5ndGggPj0gOClcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBjb25maXJtIHBhc3N3b3JkLCBtdXN0IGJlIHRoZSBzYW1lIGFzIGNvbmZpcm0gcGFzc3dyZFxyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXNzd29yZChwYXNzd29yZCwgc2lnbnVwQ29uZmlybVBhc3N3b3JkKXtcclxuXHJcbiAgICBpZihwYXNzd29yZCA9PSBzaWdudXBDb25maXJtUGFzc3dvcmQpICBcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBWYWxpZGF0ZSBpZiBhIGNoZWNrYm94IGlzIGNoZWNrZWRcclxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrYm94Q2hlY2tlZChjaGVja2JveCl7XHJcbiAgICBpZihjaGVja2JveC5jaGVja2VkID09IGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuLi9jc3Mvc2lnbnVwLmNzcyc7XHJcbmltcG9ydCB7dmFsaWRhdGVOYW1lLCB2YWxpZGF0ZUVtYWlsLCB2YWxpZGF0ZVBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCBjaGVja2JveENoZWNrZWR9IGZyb20gJy4vaGVscGVycy9zaWdudXBWYWxpZGF0aW9uLmpzJztcclxuXHJcbmltcG9ydCBjb21wYW55TG9nbyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuXHJcbi8vIElucHV0IGVsZW1lbnRzIG9mIGZvcm1cclxuY29uc3Qgc2lnbnVwTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtbmFtZScpO1xyXG5jb25zdCBzaWdudXBFbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtZW1haWwnKTtcclxuY29uc3Qgc2lnbnVwUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbnVwLXBhc3N3b3JkJyk7XHJcbmNvbnN0IHNpZ251cENvbmZpcm1QYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtY29uZmlybS1wYXNzd29yZCcpO1xyXG5jb25zdCBlbWFpbEFncmVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsLWFncmVlJyk7XHJcbmNvbnN0IHRlcm1zQWdyZWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVybXMtYWdyZWUnKTtcclxuXHJcbi8vIEVycm9yIGVsZW1lbnRzIG9mIGZvcm1cclxuY29uc3QgbmFtZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUtZXJyb3InKTtcclxuY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbC1lcnJvcicpO1xyXG5jb25zdCBwYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWVycm9yJyk7XHJcbmNvbnN0IGNvbmZpcm1QYXNzd29yZEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tcGFzc3dvcmQtZXJyb3InKTtcclxuY29uc3QgdGVybXNBZ3JlZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rlcm1zLWFncmVlLWVycm9yJyk7XHJcblxyXG4vLyBJbnB1dCB2YWxpZGF0aW9uXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdudXAtZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlzVmFsaWROYW1lID0gdmFsaWRhdGVOYW1lKHNpZ251cE5hbWUudmFsdWUpO1xyXG4gIGNvbnN0IGlzVmFsaWRFbWFpbCA9IHZhbGlkYXRlRW1haWwoc2lnbnVwRW1haWwudmFsdWUpO1xyXG4gIGNvbnN0IGlzVmFsaWRQYXNzd29yZCA9IHZhbGlkYXRlUGFzc3dvcmQoc2lnbnVwUGFzc3dvcmQudmFsdWUpO1xyXG4gIGNvbnN0IHBhc3N3b3Jkc01hdGNoID0gbWF0Y2hQYXNzd29yZChzaWdudXBQYXNzd29yZC52YWx1ZSwgc2lnbnVwQ29uZmlybVBhc3N3b3JkLnZhbHVlKTtcclxuICBjb25zdCBhZ3JlZWRUb1Rlcm1zID0gY2hlY2tib3hDaGVja2VkKHRlcm1zQWdyZWUpO1xyXG5cclxuICBpZighYWdyZWVkVG9UZXJtcylcclxuICAgIHRlcm1zQWdyZWVFcnJvci5pbm5lckhUTUwgPSAnKlBsZWFzZSBhZ3JlZSB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMuJztcclxuICBlbHNlXHJcbiAgICB0ZXJtc0FncmVlRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGlmKCFpc1ZhbGlkTmFtZSlcclxuICAgIG5hbWVFcnJvci5pbm5lckhUTUwgPSAnKlBsZWFzZSBlbnRlciBhIHZhbGlkIG5hbWUuJztcclxuICBlbHNlXHJcbiAgICBuYW1lRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGlmKCFpc1ZhbGlkRW1haWwpXHJcbiAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9ICcqUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwuJztcclxuICBlbHNlXHJcbiAgICBlbWFpbEVycm9yLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZighaXNWYWxpZFBhc3N3b3JkKVxyXG4gICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnKlBsZWFzZSBlbnRlciBhIHZhbGlkIHBhc3N3b3JkLic7XHJcbiAgZWxzZVxyXG4gICAgcGFzc3dvcmRFcnJvci5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgaWYoIXBhc3N3b3Jkc01hdGNoKVxyXG4gICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJypQYXNzd29yZHMgZG8gbm90IG1hdGNoLic7XHJcbiAgZWxzZVxyXG4gICAgY29uZmlybVBhc3N3b3JkRXJyb3IuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGlmKGlzVmFsaWROYW1lICYmIGlzVmFsaWRFbWFpbCAmJiBpc1ZhbGlkUGFzc3dvcmQgJiYgcGFzc3dvcmRzTWF0Y2gpXHJcbiAgICBzdWJtaXREYXRhKHNpZ251cE5hbWUudmFsdWUsIHNpZ251cEVtYWlsLnZhbHVlLCBzaWdudXBQYXNzd29yZC52YWx1ZSk7XHJcbn0pXHJcblxyXG5hc3luYyBmdW5jdGlvbiBzdWJtaXREYXRhKHVzZXJuYW1lLCB1c2VyZW1haWwsIHVzZXJwYXNzd29yZCl7XHJcblxyXG4gICAgY29uc3QgbmFtZSA9IHVzZXJuYW1lO1xyXG4gICAgY29uc3QgZW1haWwgPSB1c2VyZW1haWw7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZXJwYXNzd29yZDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbnVwJywge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsIGVtYWlsLCBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgYWxlcnQoZGF0YS5lcnJvcik7IC8vIERpc3BsYXkgdGhlIGVycm9yIG1lc3NhZ2UgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZ251cC1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdMb2dpbi5odG1sJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIHNpZ251cDonLCBlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInZhbGlkYXRlTmFtZSIsIm5hbWUiLCJuYW1lUmVnZXgiLCJ0ZXN0IiwidmFsaWRhdGVFbWFpbCIsImVtYWlsIiwiZW1haWxSZWdleCIsInZhbGlkYXRlUGFzc3dvcmQiLCJwYXNzd29yZCIsImxlbmd0aCIsIm1hdGNoUGFzc3dvcmQiLCJzaWdudXBDb25maXJtUGFzc3dvcmQiLCJjaGVja2JveENoZWNrZWQiLCJjaGVja2JveCIsImNoZWNrZWQiLCJjb21wYW55TG9nbyIsInNpZ251cE5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2lnbnVwRW1haWwiLCJzaWdudXBQYXNzd29yZCIsImVtYWlsQWdyZWUiLCJ0ZXJtc0FncmVlIiwibmFtZUVycm9yIiwiZW1haWxFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJjb25maXJtUGFzc3dvcmRFcnJvciIsInRlcm1zQWdyZWVFcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkTmFtZSIsInZhbHVlIiwiaXNWYWxpZEVtYWlsIiwiaXNWYWxpZFBhc3N3b3JkIiwicGFzc3dvcmRzTWF0Y2giLCJhZ3JlZWRUb1Rlcm1zIiwiaW5uZXJIVE1MIiwic3VibWl0RGF0YSIsInVzZXJuYW1lIiwidXNlcmVtYWlsIiwidXNlcnBhc3N3b3JkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJlcnJvciIsIm9rIiwibWVzc2FnZSIsInJlc2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=