"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_shared_components_payment_StripeWeb_tsx"],{

/***/ "./src/shared/components/payment/DonationAmountPicker.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/components/payment/DonationAmountPicker.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DonationAmountPicker)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var shared_components_forms_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared/components/forms/input */ "./src/shared/components/forms/input.tsx");
/* harmony import */ var shared_components_forms_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/components/forms/picker */ "./src/shared/components/forms/picker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







const predefinedAmounts = [{
  label: "$5",
  value: "500"
}, {
  label: "$10",
  value: "1000"
}, {
  label: "$20",
  value: "2000"
}, {
  label: "$50",
  value: "5000"
}];
function DonationAmountPicker({
  onAmountChange
}) {
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useFormContext)();
  if (!formMethods) {
    throw new Error("DonationAmountPicker must be used within a FormProvider");
  }
  const {
    control
  } = formMethods;
  const {
    field
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useController)({
    name: "donationAmount",
    control,
    defaultValue: ""
  });
  const [customAmount, setCustomAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const handlePickerChange = value => {
    const amount = parseInt(value, 10);
    onAmountChange(amount);
    field.onChange(value);
    setCustomAmount("");
  };
  const handleCustomAmountChange = value => {
    const numericValue = parseInt(value, 10) || 0;
    setCustomAmount(value);
    onAmountChange(numericValue * 100);
    field.onChange((numericValue * 100).toString());
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      padding: 10
    },
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        fontSize: 16,
        marginBottom: 8
      },
      children: "Select Donation Amount:"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(shared_components_forms_picker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "donationAmount",
      form: formMethods,
      options: predefinedAmounts,
      onValueChange: handlePickerChange
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        marginVertical: 8
      },
      children: "Or Enter Custom Amount:"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(shared_components_forms_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "customDonationAmount",
      label: "Custom Amount",
      placeholder: "Enter amount in dollars",
      form: formMethods,
      value: customAmount,
      keyboardType: "numeric",
      onChangeText: handleCustomAmountChange
    })]
  });
}

/***/ }),

/***/ "./src/shared/components/payment/StripeWeb.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/components/payment/StripeWeb.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeWeb)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/lib/index.mjs");
/* harmony import */ var react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/exports/Button */ "./node_modules/react-native-web/dist/exports/Button/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _DonationAmountPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DonationAmountPicker */ "./src/shared/components/payment/DonationAmountPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function StripeWeb() {
  const [stripe, setStripe] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [donationAmount, setDonationAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(500);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
  const fetchPublishableKey = async () => {
    try {
      console.log("Attempting to fetch publishable key...", "https://api-dev.kudosleague.org");
      const response = await fetch(`${"https://api-dev.kudosleague.org"}/stripe/publishable-key`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const {
        publishableKey
      } = await response.json();
      console.log("Fetched publishableKey:", publishableKey);
      return publishableKey;
    } catch (err) {
      console.error("Failed to fetch publishable key:", err);
      setError("Failed to load Stripe publishable key. Please try again.");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log("Initializing Stripe");
    const initializeStripe = async () => {
      try {
        const publishableKey = await fetchPublishableKey();
        if (!publishableKey) {
          throw new Error("Publishable key not found");
        }
        const stripeInstance = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_1__.loadStripe)(publishableKey);
        if (!stripeInstance) {
          throw new Error("Failed to initialize Stripe instance");
        }
        console.log("Stripe initialized successfully:", stripeInstance);
        setStripe(stripeInstance);
        setLoading(true);
      } catch (e) {
        console.error("Error in initializeStripe:", e);
        setError("Failed to initialize Stripe. Please try again later.");
      }
    };
    initializeStripe();
  }, []);
  const handlePayment = async () => {
    if (!stripe) return;
    const response = await fetch(`${"https://api-dev.kudosleague.org"}/stripe/checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount: donationAmount
      })
    });
    const session = await response.json();
    const {
      error
    } = await stripe.redirectToCheckout({
      sessionId: session.id
    });
    if (error) console.warn("Error with redirectToCheckout:", error);
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, Object.assign({}, formMethods, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: styles.container,
      children: [error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: error
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: styles.headerText,
        children: "Support Us with a Donation"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_DonationAmountPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onAmountChange: setDonationAmount
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        title: "Donate",
        disabled: !loading,
        onPress: handlePayment
      })]
    })
  }));
}
const styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  }
});

/***/ }),

/***/ "./node_modules/@stripe/stripe-js/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* binding */ loadStripe)
/* harmony export */ });
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "4.8.0",
    startTime: startTime
  });
};

var stripePromise = null;
var onErrorListener = null;
var onLoadListener = null;

var onError = function onError(reject) {
  return function () {
    reject(new Error('Failed to load Stripe.js'));
  };
};

var onLoad = function onLoad(resolve, reject) {
  return function () {
    if (window.Stripe) {
      resolve(window.Stripe);
    } else {
      reject(new Error('Stripe.js not available'));
    }
  };
};

var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      } else if (script && onLoadListener !== null && onErrorListener !== null) {
        var _script$parentNode;

        // remove event listeners
        script.removeEventListener('load', onLoadListener);
        script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,
        // reload script to trigger 'load' event

        (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
        script = injectScript(params);
      }

      onLoadListener = onLoad(resolve, reject);
      onErrorListener = onError(reject);
      script.addEventListener('load', onLoadListener);
      script.addEventListener('error', onErrorListener);
    } catch (error) {
      reject(error);
      return;
    }
  }); // Resets stripePromise on error

  return stripePromise["catch"](function (error) {
    stripePromise = null;
    return Promise.reject(error);
  });
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var stripePromise$1;
var loadCalled = false;

var getStripePromise = function getStripePromise() {
  if (stripePromise$1) {
    return stripePromise$1;
  }

  stripePromise$1 = loadScript(null)["catch"](function (error) {
    // clear cache on error
    stripePromise$1 = null;
    return Promise.reject(error);
  });
  return stripePromise$1;
}; // Execute our own script injection after a tick to give users time to do their
// own script injection.


Promise.resolve().then(function () {
  return getStripePromise();
})["catch"](function (error) {
  if (!loadCalled) {
    console.warn(error);
  }
});
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadCalled = true;
  var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script

  return getStripePromise().then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};




/***/ }),

/***/ "./node_modules/@stripe/stripe-js/lib/index.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@stripe/stripe-js/lib/index.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadStripe: () => (/* reexport safe */ _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__.loadStripe)
/* harmony export */ });
/* harmony import */ var _dist_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/index.mjs */ "./node_modules/@stripe/stripe-js/dist/index.mjs");



/***/ })

}]);
//# sourceMappingURL=src_shared_components_payment_StripeWeb_tsx.chunk.js.map