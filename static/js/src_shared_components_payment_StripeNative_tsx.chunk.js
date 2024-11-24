"use strict";
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["src_shared_components_payment_StripeNative_tsx"],{

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

/***/ "./src/shared/components/payment/StripeNative.tsx":
/*!********************************************************!*\
  !*** ./src/shared/components/payment/StripeNative.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StripeNative)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@stripe/stripe-react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/exports/Button */ "./node_modules/react-native-web/dist/exports/Button/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_exports_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/Alert */ "./node_modules/react-native-web/dist/exports/Alert/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var _DonationAmountPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DonationAmountPicker */ "./src/shared/components/payment/DonationAmountPicker.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function StripeNative() {
  const {
    initPaymentSheet,
    presentPaymentSheet
  } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@stripe/stripe-react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  const [publishableKey, setPublishableKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [donationAmount, setDonationAmount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);
  const formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
  const fetchPaymentSheetParams = async () => {
    try {
      const response = await fetch(`${"https://api-dev.kudosleague.org"}/stripe/payment-sheet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          amount: donationAmount
        })
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const {
        paymentIntent,
        ephemeralKey,
        customer,
        publishableKey
      } = await response.json();
      setPublishableKey(publishableKey);
      return {
        paymentIntent,
        ephemeralKey,
        customer
      };
    } catch (err) {
      console.error("Failed to fetch payment sheet parameters:", err);
      setError("Failed to load payment details. Please try again.");
      return null;
    }
  };
  const initializePaymentSheet = async () => {
    const params = await fetchPaymentSheetParams();
    if (!params) return;
    const {
      paymentIntent,
      ephemeralKey,
      customer
    } = params;
    const {
      error
    } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      merchantDisplayName: "Your Business Name",
      allowsDelayedPaymentMethods: true
    });
    if (error) {
      setError(`Initialization error: ${error.message}`);
      console.error("Error in initPaymentSheet:", error);
    } else {
      setLoading(true);
    }
  };
  const openPaymentSheet = async () => {
    const {
      error
    } = await presentPaymentSheet();
    if (error) {
      react_native_web_dist_exports_Alert__WEBPACK_IMPORTED_MODULE_5__["default"].alert(`Payment failed: ${error.message}`);
      console.warn("Error with presentPaymentSheet:", error);
    } else {
      react_native_web_dist_exports_Alert__WEBPACK_IMPORTED_MODULE_5__["default"].alert("Thank you for your donation!");
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initializePaymentSheet();
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@stripe/stripe-react-native'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    publishableKey: publishableKey || "",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_4__.FormProvider, Object.assign({}, formMethods, {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_6__["default"], {
        style: styles.container,
        children: [error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
          style: styles.errorText,
          children: error
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_7__["default"], {
          style: styles.headerText,
          children: "Support Us with a Donation"
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_DonationAmountPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
          onAmountChange: setDonationAmount
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_native_web_dist_exports_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
          title: "Donate",
          disabled: !loading,
          onPress: openPaymentSheet
        })]
      })
    }))
  });
}
const styles = react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
});

/***/ })

}]);
//# sourceMappingURL=src_shared_components_payment_StripeNative_tsx.chunk.js.map