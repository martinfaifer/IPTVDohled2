(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var HddSpace = function HddSpace() {
  return __webpack_require__.e(/*! import() */ 30).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/DiskSpaceComponent */ "./resources/js/components/settings/DashboardComponents/newTemplates/DiskSpaceComponent.vue"));
};

var CrashedChannels = function CrashedChannels() {
  return __webpack_require__.e(/*! import() */ 24).then(__webpack_require__.bind(null, /*! ./DashboardComponents/CrashedChannels */ "./resources/js/components/settings/DashboardComponents/CrashedChannels.vue"));
};

var CurrentCrashed = function CurrentCrashed() {
  return __webpack_require__.e(/*! import() */ 25).then(__webpack_require__.bind(null, /*! ./DashboardComponents/CurrentCrashedChannels */ "./resources/js/components/settings/DashboardComponents/CurrentCrashedChannels.vue"));
};

var PercentMonitored = function PercentMonitored() {
  return __webpack_require__.e(/*! import() */ 27).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/ChannelPomerComponent */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelPomerComponent.vue"));
};

var PercentFunctionChannels = function PercentFunctionChannels() {
  return __webpack_require__.e(/*! import() */ 28).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/ChannelsFunctionsSum */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsFunctionsSum.vue"));
};

var VolumeProblems = function VolumeProblems() {
  return __webpack_require__.e(/*! import() */ 29).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/ChannelsWithAudioProblem */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelsWithAudioProblem.vue"));
};

var VolumeChart = function VolumeChart() {
  return __webpack_require__.e(/*! import() */ 26).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/ChannelAudio */ "./resources/js/components/settings/DashboardComponents/newTemplates/ChannelAudio.vue"));
};

var IPTVDevicesComponent = function IPTVDevicesComponent() {
  return __webpack_require__.e(/*! import() */ 31).then(__webpack_require__.bind(null, /*! ./DashboardComponents/newTemplates/IPTVDevicesComponent */ "./resources/js/components/settings/DashboardComponents/newTemplates/IPTVDevicesComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        icon: "mdi-view-dashboard",
        title: "Přehled"
      }, {
        title: "Přehled nefunkčních kanálů",
        icon: "mdi-television"
      }, {
        title: "Přehled odeslaných Mailů",
        icon: "mdi-email"
      }, {
        title: "Historie uživatelů",
        icon: "mdi-history"
      }]
    };
  },
  components: {
    "crashed-channels": CrashedChannels,
    "hdd-space": HddSpace,
    "current-crashed": CurrentCrashed,
    "percent-monitored": PercentMonitored,
    "percent-functions": PercentFunctionChannels,
    "volume-problems": VolumeProblems,
    "volume-chart": VolumeChart,
    "iptvdevices-component": IPTVDevicesComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("br"),
      _vm._v(" "),
      _c("v-container", { attrs: { fluid: "" } }, [
        _c(
          "div",
          [
            _c(
              "v-row",
              { staticClass: "body-2" },
              [
                _c("percent-monitored", {}),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("percent-functions", {}),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("iptvdevices-component"),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("volume-chart"),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c("hdd-space", {})
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("v-container", { attrs: { fluid: "" } }, [
        _c(
          "div",
          [
            _c(
              "v-row",
              { staticClass: "body-2 mt-8" },
              [
                _c("v-col", [_c("crashed-channels")], 1),
                _vm._v(" "),
                _c(
                  "v-col",
                  [_c("v-spacer"), _vm._v(" "), _c("current-crashed")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { staticClass: "pr-12" },
                  [_c("v-spacer"), _vm._v(" "), _c("volume-problems")],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/DashBoardComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/settings/DashBoardComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoardComponent.vue?vue&type=template&id=cd59e60c& */ "./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c&");
/* harmony import */ var _DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoardComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/DashBoardComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashBoardComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DashBoardComponent.vue?vue&type=template&id=cd59e60c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/DashBoardComponent.vue?vue&type=template&id=cd59e60c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoardComponent_vue_vue_type_template_id_cd59e60c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);